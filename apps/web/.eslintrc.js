module.exports = {
  extends: [require.resolve("@packages/config/eslint/web.js")],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
};
