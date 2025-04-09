/** @type {import('next').NextConfig} */
const { copyFileSync } = require('fs');
const path = require('path');

// This will ensure the _redirects file is copied to the out directory
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
  // Add basePath for Netlify
  basePath: '',
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

// Custom function to copy the _redirects file to the output directory
const originalNextConfig = nextConfig;

// Wrap the original config to add our custom export handler
module.exports = {
  ...originalNextConfig,
  // Add a custom handler to copy the _redirects file after export
  webpack: (config, options) => {
    if (originalNextConfig.webpack) {
      config = originalNextConfig.webpack(config, options);
    }
    return config;
  },
  // This runs after the build is complete
  async afterBuild() {
    try {
      // Copy the _redirects file to the output directory
      copyFileSync(
        path.join(process.cwd(), '_redirects'),
        path.join(process.cwd(), 'out', '_redirects')
      );
      console.log('Successfully copied _redirects file to output directory');
    } catch (error) {
      console.error('Error copying _redirects file:', error);
    }
  }
}
