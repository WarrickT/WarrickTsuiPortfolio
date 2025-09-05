import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",                 // required for GitHub Pages (static hosting)
  images: { unoptimized: true },    // Pages can’t do Next/Image optimization
  basePath: isProd ? "/WarrickTsuiPortfolio" : "",
  // assetPrefix: isProd ? "/WarrickTsuiPortfolio/" : "",
  // optional but nice for static hosting:
  // trailingSlash: true,
};

export default nextConfig;
