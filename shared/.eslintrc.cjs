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
      files: ["components/ui/**/*.tsx"],
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "import/order": "off",
        "react-hooks/exhaustive-deps": "off",
        "react/display-name": "off",
        "react/prop-types": "off",
      },
    },
  ],
}

module.exports = config
