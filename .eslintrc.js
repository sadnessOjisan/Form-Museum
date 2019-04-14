module.exports = {
  root: true,
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "prettier"],
  env: {
    es6: true,
    browser: true
  },
  rules: {
    "no-console": "error"
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
};
