// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginSonar from 'eslint-plugin-sonarjs'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default withNuxt(
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['node_modules/*'],
    plugins: {
      eslintPluginSimpleImportSort,
      eslintPluginPrettier
    },
    rules: {
      ...eslintPluginSonar.rules,
      ...eslintPluginPrettierRecommended.rules,
      'prettier/prettier': 'warn',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  }
)
