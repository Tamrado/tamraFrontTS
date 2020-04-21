module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "@typescript-eslint/eslint-plugin",
      "eslint-plugin-react",
      "react-hooks"
    ],
    "extends": [
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "rules": {
      "lines-between-class-members": "off",
      "no-trailing-spaces": "error",
      "quotes": [
        "error",
        "single",
        {
          "allowTemplateLiterals": true
        }
      ],
      "max-len": [
        "error",
        {
          "code": 100,
          "ignoreUrls": true,
          "ignoreComments": true
        }
      ],
      "eol-last": ["error", "always"],
      "no-multiple-empty-lines": [
        "error",
        {
          "max": 2,
          "maxEOF": 1
        }
      ],
      "semi": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/semi": ["error", "never"],
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          "allowExpressions": true,
          "allowTypedFunctionExpressions": true,
          "allowHigherOrderFunctions": true
        }
      ],
      "@typescript-eslint/indent": [
        "error",
        2,
        {
          "SwitchCase": 1,
          "FunctionDeclaration": {
            "body": 1,
            "parameters": 2
          },
          "FunctionExpression": {
            "body": 1,
            "parameters": 2
          }
        }
      ],
      "@typescript-eslint/member-delimiter-style": [
        "error",
        {
          "multiline": {
            "delimiter": "none",
            "requireLast": true
          },
          "singleline": {
            "delimiter": "comma",
            "requireLast": false
          }
        }
      ],
      "react/display-name": "off",
      "react/prop-types": "off",
      "react/jsx-first-prop-new-line": "off",
      "react/jsx-curly-spacing": "off",
      "react/jsx-curly-newline": "off",
      "react/jsx-handler-names": "off",
      "react/jsx-pascal-case": "off",
      "react/jsx-indent": "off",
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "error",
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  };