/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost'
    ]
  },
  env: {
    API_PATH: 'http://localhost:5001/api/v1/',
    API_STATIC: 'http://localhost:5001/'
  }
}

module.exports = nextConfig
