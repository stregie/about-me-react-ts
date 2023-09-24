// vite.config.ts
import { defineConfig } from "file:///c:/Files%20-%20Synced/Coding/Repositories/deployed/02-about-me-v2-react-ts/node_modules/vite/dist/node/index.js";
import react from "file:///c:/Files%20-%20Synced/Coding/Repositories/deployed/02-about-me-v2-react-ts/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // '/reactapi': 'http://localhost:6565/reactapi'
      "/reactapi": {
        target: "http://localhost:6565",
        rewrite: (path) => path.replace(/^\/reactapi/, "/reactapi")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJjOlxcXFxGaWxlcyAtIFN5bmNlZFxcXFxDb2RpbmdcXFxcUmVwb3NpdG9yaWVzXFxcXGRlcGxveWVkXFxcXDAyLWFib3V0LW1lLXYyLXJlYWN0LXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJjOlxcXFxGaWxlcyAtIFN5bmNlZFxcXFxDb2RpbmdcXFxcUmVwb3NpdG9yaWVzXFxcXGRlcGxveWVkXFxcXDAyLWFib3V0LW1lLXYyLXJlYWN0LXRzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9jOi9GaWxlcyUyMC0lMjBTeW5jZWQvQ29kaW5nL1JlcG9zaXRvcmllcy9kZXBsb3llZC8wMi1hYm91dC1tZS12Mi1yZWFjdC10cy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDUxNzMsXG4gICAgcHJveHk6IHtcbiAgICAgIC8vICcvcmVhY3RhcGknOiAnaHR0cDovL2xvY2FsaG9zdDo2NTY1L3JlYWN0YXBpJ1xuICAgICAgJy9yZWFjdGFwaSc6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDo2NTY1JyxcbiAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL3JlYWN0YXBpLywgJy9yZWFjdGFwaScpXG4gICAgICB9XG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvWixTQUFTLG9CQUFvQjtBQUNqYixPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQTtBQUFBLE1BRUwsYUFBYTtBQUFBLFFBQ1gsUUFBUTtBQUFBLFFBQ1IsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLGVBQWUsV0FBVztBQUFBLE1BQzVEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
