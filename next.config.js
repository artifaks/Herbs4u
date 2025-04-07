/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kipqzmgjqwijpulxctfs.supabase.co',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: '*.netlify.app',
      },
    ],
    unoptimized: true, // Set to true for Netlify deployment
  },
  // Output as a static site for Netlify
  output: 'export',
  // Disable server-side features that aren't compatible with static export
  distDir: 'out',
}

module.exports = nextConfig
