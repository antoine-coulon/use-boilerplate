module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    project: "./tsconfig.json"
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "import/extensions": [
       "error",
       "ignorePackages",
       {
         "ts": "never",
       }
    ]
 }
};
