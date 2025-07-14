/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/jg-servicos-residenciais' : '',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['avatars.githubusercontent.com', 'github.com'],
    formats: ['image/webp', 'image/avif']
  }
}

module.exports = nextConfig
