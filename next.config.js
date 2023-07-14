/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/map/bride',
        destination: 'https://goo.gl/maps/8XfsYMK5mvP98VCR6',
        permanent: true,
      },
      {
        source: '/map/groom',
        destination: 'https://goo.gl/maps/z3z8p5cWBnzdKFRUA',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
