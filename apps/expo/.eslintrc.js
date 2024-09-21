// @ts-check
/* eslint-env node */

/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  extends: ["expo", "prettier"],
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
    "import/no-unresolved": "off",
  },
}
