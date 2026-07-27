import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // A stray package-lock.json in the home directory makes Next infer the
    // wrong workspace root. Pin it to this project.
    root: __dirname,
  },
};

export default nextConfig;
