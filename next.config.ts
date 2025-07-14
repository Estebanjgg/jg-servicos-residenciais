import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const hasCustomDomain = process.env.GITHUB_PAGES_CUSTOM_DOMAIN === 'true';
const repoName = 'jg-servicos-residenciais';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Only use basePath if in production and no custom domain
  basePath: isProd && !hasCustomDomain ? `/${repoName}` : '',
  assetPrefix: isProd && !hasCustomDomain ? `/${repoName}/` : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
