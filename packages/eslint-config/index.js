const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
  extends: "eslint:recommended",

  root: true,

  parser: "babel-eslint",

  plugins: ["import"],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },

  overrides: [
    {
      files: ["**/*.ts?(x)"],

      parser: "@typescript-eslint/parser",

      plugins: ["@typescript-eslint"],

      rules: {
        "default-case": "off",
        "no-dupe-class-members": "off",
        "no-undef": "off",
        "@typescript-eslint/consistent-type-assertions": "error",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "error",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
          "error",
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "none",
            ignoreRestSiblings: true,
          },
        ],
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
      },
    },
  ],

  rules: {
    "default-case": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-implied-eval": "error",
    "no-loop-func": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-restricted-globals": ["error"].concat(restrictedGlobals),
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "import/first": "error",
    "import/no-absolute-path": "error",
    "import/no-amd": "error",
    "import/no-anonymous-default-export": "error",
  },
};
