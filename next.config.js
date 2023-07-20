/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/map/bride',
        destination: 'https://jeagerxjessiweddings.vercel.app/',
        permanent: true,
      },
      {
        source: '/map/groom',
        destination: 'https://jeagerxjessiweddings.vercel.app/',
        permanent: true,
      },
      {
        source: '/',
        destination: 'https://jeagerxjessiweddings.vercel.app/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
