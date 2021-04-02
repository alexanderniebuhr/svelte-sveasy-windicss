// @ts-check
import { defineConfig } from 'windcss/helpers'
import formsPlugin from 'windicss/plugin/forms'
import lineClampPlugin from 'windicss/plugin/line-clamp'
import typographyPlugin from 'windicss/plugin/typography'

export default defineConfig({
  plugins: [
    formsPlugin,
    lineClampPlugin,
    typographyPlugin
  ]
})
