const TWENTYTWENTYONE_URL = "https://vercel-test-2021.vercel-support.app";

module.exports = {
  async rewrites() {
    return [
      {
        source: "/2021/:path*",
        destination: `${TWENTYTWENTYONE_URL}/2021/:path*`
      },
    ];
  },
};
