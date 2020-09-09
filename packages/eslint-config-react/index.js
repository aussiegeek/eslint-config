module.exports = {
  extends: [
    "@aussiegeek/eslint-config-base",
    "plugin:testing-library/react",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier/react",
  ],
  settings: { react: { version: "detect" } },
  rules: {
    "react/prop-types": "off",
  },
  overrides: [{ files: ["**/*.js", "**/*.ts", "**/*.tsx"] }],
};
