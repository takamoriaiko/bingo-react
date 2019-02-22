module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  parser: "babel-eslint",
  env: {
    node: true
  },
  rules: {},
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      plugins: ["typescript"],
      rules: {}
    }
  ]
};
