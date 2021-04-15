//@ts-check
import windi from 'svelte-windicss-preprocess'
export default {
  preprocess: windi.preprocess({
    silent: false,
    debug: true,
    verbosity: 1,
    config: 'windi.config.js',
    compile: false,
    prefix: 'windi-'
  })
}
