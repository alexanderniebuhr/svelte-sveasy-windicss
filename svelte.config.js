//@ts-check
import { windi } from 'svelte-windicss-preprocess'
export default {
  preprocess: windi({
    silent: false,
    configPath: "windi.config.js",
    devTools: {
      enabled: true
    }
  }),
}
