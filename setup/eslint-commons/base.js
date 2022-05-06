module.exports = {
  "env": {
    "jest/globals": true
  },
  "extends": [
    "next",
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "no-console": "error",
    "@next/next/no-html-link-for-pages": "off",
  }
}
