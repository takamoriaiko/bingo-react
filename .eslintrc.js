module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  env: {
    node: true
  },
  rules: {},
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "typescript-eslint-parser",
      plugins: ["typescript"],
      rules: {}
    }
  ]
};
