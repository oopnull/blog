// extension webpack
const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    // @ stands for _dirname/src path
    alias: {
      "@": resolve("src"),
    },
  },
};
