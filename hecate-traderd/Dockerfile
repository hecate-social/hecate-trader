# Hecate Trader Daemon Dockerfile
# Multi-stage build for minimal image size

# Build stage
FROM erlang:27-alpine AS builder

WORKDIR /build

# Install build dependencies
RUN apk add --no-cache \
    git curl bash \
    build-base cmake

# Install rebar3
RUN curl -fsSL https://s3.amazonaws.com/rebar3/rebar3 -o /usr/local/bin/rebar3 && \
    chmod +x /usr/local/bin/rebar3

# Copy source
COPY rebar.config rebar.lock* ./
COPY config/ config/
COPY src/ src/

# Fetch dependencies and compile
RUN rebar3 get-deps && rebar3 compile

# Build release
RUN rebar3 as prod release

# Runtime stage
FROM alpine:3.22

RUN apk add --no-cache \
    ncurses-libs \
    libstdc++ \
    libgcc \
    openssl \
    ca-certificates

WORKDIR /app

# Copy release from builder
COPY --from=builder /build/_build/prod/rel/hecate_traderd ./

# Environment — convention: ~/.hecate/hecate-traderd expands via $HOME
ENV HOME=/app

# Health check via socket presence (convention path)
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD test -S /app/.hecate/hecate-traderd/sockets/api.sock || exit 1

# Run
ENTRYPOINT ["/app/bin/hecate_traderd"]
CMD ["foreground"]
