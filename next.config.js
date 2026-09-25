/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Для GitHub Pages сайт живёт в подпапке (/revagent), локально — в корне
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
