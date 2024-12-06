module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/no-v-html': 'off',
    'no-irregular-whitespace': 'off',
    'import/no-named-as-default-member': 'off',
    'vue/comment-directive': 'off',
    'import/no-named-as-default': 'off',
    'import/default': 'off',
    'import/namespace': 'off',
    'no-empty': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['services', 'node_modules', '.gitignore', 'dist', 'build'],
}
