module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
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
  },
  ignorePatterns: ['services', 'node_modules', '.gitignore', 'dist', 'build'],
}
