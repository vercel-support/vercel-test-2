const TWENTYTWENTYONE_URL = "https://vercel-test-2021.vercel-support.app";

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/:path*',
        destination: `${TWENTYTWENTYONE_URL}/:path*`
      },
    ];
  },
};
