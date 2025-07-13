import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: true,
  compiler: {
    styledComponents: true,
    removeConsole: true,
  },
};

export default nextConfig;