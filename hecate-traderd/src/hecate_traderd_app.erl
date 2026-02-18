%%% @doc Hecate Trader daemon application.
%%%
%%% On startup:
%%% 1. Ensures the namespace directory layout exists
%%% 2. Starts Cowboy on a Unix domain socket
%%% 3. Registers with hecate-daemon (when available)
%%% @end
-module(hecate_traderd_app).
-behaviour(application).

-export([start/2, stop/1]).

start(_StartType, _StartArgs) ->
    ok = traderd_paths:ensure_layout(),
    ok = start_cowboy(),
    logger:info("[hecate_traderd] Started, socket at ~s",
                [traderd_paths:socket_path("api.sock")]),
    hecate_traderd_sup:start_link().

stop(_State) ->
    ok = cowboy:stop_listener(traderd_http),
    cleanup_socket(),
    ok.

%%% Internal

start_cowboy() ->
    SocketPath = traderd_paths:socket_path("api.sock"),
    cleanup_socket_file(SocketPath),
    Dispatch = cowboy_router:compile([
        {'_', [
            {"/health", traderd_health_api, []},
            {"/api/[...]", traderd_api_handler, []}
        ]}
    ]),
    TransOpts = #{
        socket_opts => [{ifaddr, {local, SocketPath}}],
        num_acceptors => 5
    },
    ProtoOpts = #{
        env => #{dispatch => Dispatch}
    },
    {ok, _} = cowboy:start_clear(traderd_http, TransOpts, ProtoOpts),
    ok.

cleanup_socket() ->
    SocketPath = traderd_paths:socket_path("api.sock"),
    cleanup_socket_file(SocketPath).

cleanup_socket_file(Path) ->
    case file:delete(Path) of
        ok -> ok;
        {error, enoent} -> ok;
        {error, Reason} ->
            logger:warning("[hecate_traderd] Failed to remove socket ~s: ~p",
                          [Path, Reason]),
            ok
    end.
