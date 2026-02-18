

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "ssr": false,
  "prerender": true
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DvwuNVmM.js","_app/immutable/chunks/2NoCQRJk.js","_app/immutable/chunks/BReIjH9e.js","_app/immutable/chunks/Bbb7VZDG.js"];
export const stylesheets = ["_app/immutable/assets/0.Q8Xkk6SL.css"];
export const fonts = [];
