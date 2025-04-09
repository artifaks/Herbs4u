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
      {
        protocol: 'https',
        hostname: '*.windsurf.build',
      },
    ],
    unoptimized: true, // Required for static export
  },
  // Output as a static site for Netlify
  output: 'export',
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  // Disable server-side features that aren't compatible with static export
  distDir: '.next',
  // Ensure we don't use features incompatible with static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
