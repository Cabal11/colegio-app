/** @type {import('next').NextConfig} */
const nextConfig = {
  async proxyInverso() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://backend-nodejs-production-79b3.up.railway.app/:path*",
      },
      {
        source: "/ping",
        destination:
          "https://backend-nodejs-production-79b3.up.railway.app/ping",
      },
    ];
  },
};

export default nextConfig;
