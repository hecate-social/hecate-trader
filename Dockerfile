# Hecate Trader — Unified build (frontend + daemon)
# Build context: hecate-trader/ (repo root)

# Stage 1: Build traderw as ES module
FROM node:22-alpine AS frontend

WORKDIR /frontend
COPY hecate-traderw/package.json hecate-traderw/package-lock.json* ./
RUN npm ci
COPY hecate-traderw/ .
RUN npm run build:lib

# Stage 2: Build traderd Erlang release
FROM erlang:27-alpine AS backend

WORKDIR /build

RUN apk add --no-cache \
    git curl bash \
    build-base cmake

RUN curl -fsSL https://s3.amazonaws.com/rebar3/rebar3 -o /usr/local/bin/rebar3 && \
    chmod +x /usr/local/bin/rebar3

COPY hecate-traderd/rebar.config hecate-traderd/rebar.lock* ./
COPY hecate-traderd/config/ config/
COPY hecate-traderd/src/ src/

# Fetch dependencies and compile
RUN rebar3 get-deps && rebar3 compile

# Bundle frontend assets into priv/static/
COPY --from=frontend /frontend/dist priv/static/

# Build release (priv/static/ included automatically)
RUN rebar3 as prod release

# Stage 3: Runtime
FROM alpine:3.22

RUN apk add --no-cache \
    ncurses-libs \
    libstdc++ \
    libgcc \
    openssl \
    ca-certificates

WORKDIR /app

COPY --from=backend /build/_build/prod/rel/hecate_traderd ./

ENTRYPOINT ["/app/bin/hecate_traderd"]
CMD ["foreground"]
