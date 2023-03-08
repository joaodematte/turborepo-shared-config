module.exports = {
  extends: [require.resolve("./base.js")],
  ignorePatterns: ["public"],
  rules: {
    "react/button-has-type": "off",
    "import/prefer-default-export": "off",
  },
};
