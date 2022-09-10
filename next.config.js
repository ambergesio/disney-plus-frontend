/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'i.pinimg.com',
      'static.wikia.nocookie.net',
      'upload.wikimedia.org',
      'smoda.elpais.com',
      'media.vandalsports.com',
      'img.ecartelera.com',
      'www.tebeosfera.com',
      'www.ecartelera.com',
      'www.tebeosfera.com',
      'movie.com', 'cdn.europosters.eu', 'pics.filmaffinity.com',
      'imagenes.20minutos.es'
    ]
  }
}

module.exports = nextConfig
