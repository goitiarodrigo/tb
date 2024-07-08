import globals from 'globals';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            "import/no-unresolved": "off",
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            indent: ['error', 4],
            'comma-dangle': ['error', 'always-multiline'],
            'object-curly-spacing': ['error', 'always'],
            eqeqeq: ['error', 'always'],
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-unused-vars': 'warn',
            'node/no-missing-import': 'off',
            'prettier/prettier': 'error',
        },
    },
];
