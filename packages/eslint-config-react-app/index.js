module.exports = {
  extends: ["@crrntly/eslint-config", "plugin:react/recommended"],

  plugins: ["jsx-a11y", "react", "react-hooks"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    "react/forbid-foreign-prop-types": "error",
    "react/forbid-prop-types": "warn",
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",

    "react/jsx-pascal-case": [
      "error",
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],

    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        aspects: ["noHref", "invalidHref"],
      },
    ],
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": ["error", { ignoreNonDOM: true }],
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/label-has-associated-control": "error",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/no-distracting-elements": "error",
    "jsx-a11y/no-redundant-roles": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/scope": "error",

    "react-hooks/rules-of-hooks": "error",
  },
};
