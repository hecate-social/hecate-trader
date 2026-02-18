export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.CGtnxDsT.js",app:"_app/immutable/entry/app.O-yNETcE.js",imports:["_app/immutable/entry/start.CGtnxDsT.js","_app/immutable/chunks/J2YsXMHy.js","_app/immutable/chunks/BReIjH9e.js","_app/immutable/chunks/BSIMQ_ni.js","_app/immutable/chunks/4C6dJzWj.js","_app/immutable/entry/app.O-yNETcE.js","_app/immutable/chunks/BReIjH9e.js","_app/immutable/chunks/BTye3T57.js","_app/immutable/chunks/2NoCQRJk.js","_app/immutable/chunks/4C6dJzWj.js","_app/immutable/chunks/Bbb7VZDG.js","_app/immutable/chunks/B-x2D_4m.js","_app/immutable/chunks/BSIMQ_ni.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
