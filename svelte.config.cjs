module.exports = {
  preprocess: require('svelte-windicss-preprocess').preprocess({
    silent: false,
    debug: false,
    compile: false,
    config: 'windi.config.cjs',
    prefix: 'windi-',
    verbosity: 1
  })
}
