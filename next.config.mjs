/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND: process.env.BACKEND,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
