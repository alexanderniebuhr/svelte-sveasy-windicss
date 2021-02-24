module.exports = {
  preprocess: require("svelte-windicss-preprocess").preprocess({
    compile: false,
    config: "tailwind.config.js",
    debug: true,
    globalPreflight: true, // will be deprecated soon
    globalUtility: true,
    prefix: "windi-",
    silent: false,
  }),
};
