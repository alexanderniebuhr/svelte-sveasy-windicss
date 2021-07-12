//@ts-check
import questionMark from "@windicss/plugin-question-mark";
import { defineConfig } from "windicss/helpers";
import filters from "windicss/plugin/filters";
import forms from "windicss/plugin/forms";
import lineClamp from "windicss/plugin/line-clamp";
import typography from "windicss/plugin/typography";


export default defineConfig({
  preflight: false,
  theme: {
    extend: {
      colors: {
        'deep-blush': {
          '50': '#fef8fa',
          '100': '#fdf1f6',
          '200': '#fadce8',
          '300': '#f7c6d9',
          '400': '#f29cbd',
          '500': '#ec71a1',
          '600': '#d46691',
          '700': '#b15579',
          '800': '#8e4461',
          '900': '#74374f'
        }
      },
    },
  },
  plugins: [
    forms,
    filters,
    lineClamp,
    typography,
    questionMark
  ],
});
