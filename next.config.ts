import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // No basePath needed when using custom domain
  images: {
    unoptimized: true
  }
};

export default nextConfig;
