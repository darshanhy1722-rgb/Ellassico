// Start the production server, failing loudly if the build targeted Cloudflare instead of Node
// (that build's entry just exits, which Railway reports as "Application failed to respond").
import { existsSync } from "node:fs";

if (existsSync(new URL("../.output/server/wrangler.json", import.meta.url))) {
  console.error(
    "This build targets Cloudflare Workers, not Node. Rebuild with NITRO_PRESET=node-server (e.g. `NITRO_PRESET=node-server npm run build`).",
  );
  process.exit(1);
}

await import("../.output/server/index.mjs");
