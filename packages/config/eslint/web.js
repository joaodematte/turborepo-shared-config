module.exports = {
  extends: [require.resolve("./base.js")],
  ignorePatterns: ["public"],
  env: {
    browser: true,
    node: true,
  },
};
