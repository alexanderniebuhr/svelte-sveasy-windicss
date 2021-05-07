//@ts-check
import windi from 'svelte-windicss-preprocess'
export default {
  preprocess: windi.preprocess({
    silent: false,
    debug: true,
    verbosity: 4,
    config: "windi.config.js",
    devTools: {
      enabled: true
    }
  })
}
