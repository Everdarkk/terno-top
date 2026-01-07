import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xsgames.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'zgyaqmqisracjhjgiens.supabase.co',
        port: '',
        pathname: '/**',
      }
    ],
  },
}

export default nextConfig;
