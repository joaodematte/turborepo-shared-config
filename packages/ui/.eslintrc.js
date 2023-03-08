module.exports = {
  extends: [require.resolve("@packages/config/eslint/ui.js")],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
};
