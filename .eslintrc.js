module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "ignorePatterns": ['.eslintrc.js'],
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": [
            "error",
            {
              "endOfLine": "auto"
            }
        ],
        "indent": "off"
    }
};
