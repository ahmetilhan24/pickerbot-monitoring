const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/sass/_shared.scss";
        `,
      },
    },
  },
  configureWebpack: (config) => {
    //Change configuration for the production environment ...
    if (process.env.NODE_ENV === "production") {
      config.mode = "production";
      // Package file size configuration
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000,
      };
    }
  },
});
