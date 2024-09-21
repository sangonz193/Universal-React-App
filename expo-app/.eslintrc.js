// @ts-check
/* eslint-env node */

/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  extends: ["expo", "prettier"],
  rules: {
    "import/no-unresolved": "off",
  },
}
