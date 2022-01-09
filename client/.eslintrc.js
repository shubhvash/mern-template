module.exports = {
    env: {
        browser: true,
        es2021: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 6,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'prettier'
    ],
    rules: {
        'react/prop-types': ['off'],
        'react/jsx-indent': ['off'],
        indent: ['error', 4, { SwitchCase: 2 }],
        quotes: ['error', 'single'],
        'no-var': 'error',
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': 'error',
        'prettier/prettier': 0,
        'comma-dangle': 'off'
    },
};
