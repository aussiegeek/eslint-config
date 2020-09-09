module.exports = {
  env: {
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jest-formatting/recommended",
    "plugin:promise/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {},
};
