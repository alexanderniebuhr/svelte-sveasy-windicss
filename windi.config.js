//@ts-check
const { defineConfig } = require("windicss/helpers")

module.exports = defineConfig({
  plugins: [
    require('windicss/plugin/forms'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography')
  ]
})
