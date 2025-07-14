/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // No basePath needed when using custom domain
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['avatars.githubusercontent.com', 'github.com'],
    formats: ['image/webp', 'image/avif']
  }
}

module.exports = nextConfig
