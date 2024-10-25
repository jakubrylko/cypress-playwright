import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  { files: ['**/*.{js,ts}'] },
  { languageOptions: { globals: globals.browser } },
  { ignores: ['allure', 'playwright/report'] }
]
