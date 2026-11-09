import { readFile, readdir, mkdir, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";
// Materialize Lovable media as ordinary static files for hosts without its asset service.
for (const file of await readdir("src/assets")) {
  if (!file.endsWith(".asset.json")) continue;
  const asset = JSON.parse(await readFile(path.join("src/assets", file), "utf8"));
  const relative = asset.url.replace(/^\//, "");
  if (relative.includes("..")) throw new Error("Unsafe asset path");
  const response = await fetch(`https://id-preview--ff29e7e6-6b97-4401-877e-49db78954d57.lovable.app/${relative}`);
  if (!response.ok || !response.headers.get("content-type")?.startsWith("image/")) throw new Error(`Cannot download static image ${file}: ${response.status}`);
  const destination = path.join("dist", relative);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, new Uint8Array(await response.arrayBuffer()));
}
await copyFile("dist/index.html", "dist/404.html");
await writeFile("dist/.nojekyll", "");