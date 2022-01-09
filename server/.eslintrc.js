module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 6,
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 2 }],
        'no-console': ['off'],
        quotes: ['error', 'single'],
        'no-var': 'error',
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': 'error',
        'prettier/prettier': 0,
        'comma-dangle': 'off'
    },
    plugins: [
        'prettier',
    ],
};
