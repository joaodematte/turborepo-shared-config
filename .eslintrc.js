const config = require("@packages/config/eslint/base.js");

module.exports = {
  ...config,
  root: true,
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};