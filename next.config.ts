import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true, // <-- ADICIONE ESSA LINHA AQUI
  },
};

export default nextConfig;
