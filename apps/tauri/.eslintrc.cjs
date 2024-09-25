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
  plugins: ["import"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "import/order": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "index", "sibling"],
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
  overrides: [
    {
      files: ["components/gluestack/**/*.tsx"],
      rules: {
        "react/display-name": "off",
      },
    },
  ],
}

module.exports = config
