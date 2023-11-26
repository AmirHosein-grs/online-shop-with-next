/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imis.silverage.co",
        port: "",
        pathname: "/storage/app/uploads/public/**",
      },
    ],
  },
};

module.exports = nextConfig;
