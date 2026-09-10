import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site is fully static — export to plain HTML so it can be hosted anywhere.
  output: "export",
  outputFileTracingRoot: __dirname,
  images: {
    // Images ship pre-optimised from the original asset set; keep byte-for-byte.
    unoptimized: true,
  },
};

export default nextConfig;
