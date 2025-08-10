import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "(?<subdomain>docs)\\..*",
          },
        ],
        destination: "https://idle-finance.gitbook.io/idle-finance.md/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
