module.exports = {
  preprocess: require('svelte-windicss-preprocess').preprocess({
    silent: false,
    debug: false,
    compile: false,
    config: 'windi.config.js',
    prefix: 'windi-',
    verbosity: 1
  })
}
