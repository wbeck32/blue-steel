module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 8,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "array-bracket-newline": [2, { multiline: false }],
    "array-bracket-spacing": [
      2,
      "always",
      {
        "arraysInArrays": false,
        "objectsInArrays": true,
        "singleValue": true
      }
    ],
    "arrow-parens": [
      2,
      "as-needed",
      {
        "requireForBlockBody": false
      }
    ],
		"array-element-newline": ["error", "never"],
		"dot-location": [ "error", "property" ],
    "eqeqeq": [2, "always"],
    "indent": [
      2,
      "tab",
      {
        "SwitchCase": 1,
        "MemberExpression": 2,
        "ObjectExpression": 1
      }
    ],
    "no-multi-spaces": [
      2,
      {
        "ignoreEOLComments": true
      }
    ],
		"no-tabs": [2, { "allowIndentationTabs": true }],
		"padding-line-between-statements": ["error",{blankLine: "never", prev: "*", next: "return"}]
  }
};
