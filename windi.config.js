//@ts-check
import { defineConfig } from "windicss/helpers"
import forms from 'windicss/plugin/forms'
import lineClamp from "windicss/plugin/line-clamp"
import typography from "windicss/plugin/typography"


export default defineConfig({
  theme: {
    extend: {}
  },
  plugins: [
    forms,
    lineClamp,
    typography
  ]
})
