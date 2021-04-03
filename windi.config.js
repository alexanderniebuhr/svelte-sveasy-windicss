//@ts-check
import { defineConfig } from "windicss/helpers"

export default defineConfig({
  theme: {
    extend: {
      colors: {

      }
    }
  },
  plugins: [
    await import('windicss/plugin/forms'),
    await import('windicss/plugin/line-clamp'),
    await import('windicss/plugin/typography')
  ]
})
