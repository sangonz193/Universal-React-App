// @ts-check
/* eslint-env node */

/** @type {import("eslint").ESLint.ConfigData} */
const config = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["components/ui/**/*.tsx"],
      rules: {
        "react/display-name": "off",
      },
    },
  ],
}

module.exports = config
