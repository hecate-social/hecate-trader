import { a3 as attr_class, a4 as stringify, a5 as store_get, e as escape_html, a6 as unsubscribe_stores } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const health = writable(null);
const connectionStatus = writable("disconnected");
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="flex flex-col gap-6 p-6"><div class="flex items-center justify-between"><div class="flex items-center gap-3"><span class="text-3xl">\\u{1F4C8}</span> <div><h1 class="text-xl font-bold text-surface-50">Hecate Trader</h1> <p class="text-xs text-surface-400">AI Stock Trading Agents</p></div></div> <div class="flex items-center gap-2 text-xs"><span${attr_class(`inline-block w-2 h-2 rounded-full ${stringify(store_get($$store_subs ??= {}, "$connectionStatus", connectionStatus) === "connected" ? "bg-success-400" : store_get($$store_subs ??= {}, "$connectionStatus", connectionStatus) === "connecting" ? "bg-yellow-400 animate-pulse" : "bg-danger-400")}`)}></span> <span class="text-surface-400">${escape_html(store_get($$store_subs ??= {}, "$connectionStatus", connectionStatus) === "connected" ? `v${store_get($$store_subs ??= {}, "$health", health)?.version ?? "?"}` : store_get($$store_subs ??= {}, "$connectionStatus", connectionStatus))}</span></div></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="bg-surface-800 border border-surface-700 rounded-lg p-4"><h2 class="text-sm font-bold text-surface-300 mb-2">Agents</h2> <p class="text-2xl font-bold text-surface-50">0</p> <p class="text-xs text-surface-500 mt-1">No trading agents configured</p></div> <div class="bg-surface-800 border border-surface-700 rounded-lg p-4"><h2 class="text-sm font-bold text-surface-300 mb-2">Positions</h2> <p class="text-2xl font-bold text-surface-50">--</p> <p class="text-xs text-surface-500 mt-1">No active positions</p></div> <div class="bg-surface-800 border border-surface-700 rounded-lg p-4"><h2 class="text-sm font-bold text-surface-300 mb-2">P&amp;L</h2> <p class="text-2xl font-bold text-surface-50">--</p> <p class="text-xs text-surface-500 mt-1">No trading data</p></div></div> <div class="bg-surface-800 border border-surface-700 rounded-lg p-6"><h2 class="text-lg font-bold text-surface-50 mb-3">Getting Started</h2> <p class="text-sm text-surface-400 leading-relaxed">Hecate Trader is a plugin application for AI-powered stock trading agents.
			This is the initial scaffold — trading agent configuration, market data
			feeds, and strategy management will be added in future iterations.</p> <div class="mt-4 flex gap-3"><div class="text-xs bg-surface-900 border border-surface-600 rounded px-3 py-2 text-surface-300">Daemon: ${escape_html(store_get($$store_subs ??= {}, "$connectionStatus", connectionStatus) === "connected" ? "Online" : "Offline")}</div></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
