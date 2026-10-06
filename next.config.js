/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Сайт живёт в корне домена; NEXT_PUBLIC_BASE_PATH — только если понадобится подпапка
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
