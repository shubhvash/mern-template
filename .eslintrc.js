module.exports = {
    parser: '@babel/eslint-parser',
    "env": {
        "browser": true,
        commonjs: true,
        "es6": true,
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
        'react/prop-types': ['off'],
        indent: ['error', 2, { SwitchCase: 1 }],
        quotes: ['error', 'single'],
        'no-var': 'error',
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': 'error',
        "prettier/prettier": [
            "error",
            {
              "endOfLine": "auto"
            }
        ]
    }
};
