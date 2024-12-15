import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 外部画像のドメインを許可
  images:{
    domains:['tech-master.s3.amazonaws.com'],
  }
};

export default nextConfig;
