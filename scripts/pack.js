#!/usr/bin/env node
/**
 * Packaging script for SaveGram Chrome Extension (Manifest V3).
 * Validates JavaScript syntax and bundles `src/` into `dist/SaveGram-v<version>.zip`.
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "src");
const DIST_DIR = path.join(ROOT, "dist");
const manifest = JSON.parse(fs.readFileSync(path.join(SRC_DIR, "manifest.json"), "utf8"));

console.log(`Packing ${manifest.name} v${manifest.version}...`);

const jsFiles = fs.readdirSync(path.join(SRC_DIR, "js")).filter((f) => f.endsWith(".js"));
for (const file of jsFiles) {
  const fullPath = path.join(SRC_DIR, "js", file);
  execSync(`node --check "${fullPath}"`, { stdio: "inherit" });
}

if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
}

const outZip = path.join(DIST_DIR, `SaveGram-v${manifest.version}.zip`);
if (fs.existsSync(outZip)) {
  fs.unlinkSync(outZip);
}

if (process.platform === "win32") {
  try {
    execSync(`tar.exe -a -c -f "${outZip}" *`, { cwd: SRC_DIR, stdio: "inherit" });
  } catch (err) {
    execSync(
      `powershell -NoProfile -Command "Compress-Archive -Path '${SRC_DIR}\\*' -DestinationPath '${outZip}' -Force"`,
      { stdio: "inherit" }
    );
  }
} else {
  execSync(`zip -r -q "${outZip}" .`, { cwd: SRC_DIR, stdio: "inherit" });
}
console.log(`Created release archive: ${outZip}`);
