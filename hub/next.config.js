const TWENTYTWENTY_URL = "https://vercel-test-2020.vercel.app";
const TWENTYTWENTYONE_URL = "https://vercel-test-2.vercel-support.app";

module.exports = {
  async rewrites() {
    return [
      {
        source: "/2020",
        destination: `${TWENTYTWENTY_URL}/2020`,
      },
      {
        source: "/2021",
        destination: `${TWENTYTWENTYONE_URL}`,
      },
    ];
  },
};
