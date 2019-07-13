module.exports = {
  lintOnSave: undefined,
  configureWebpack: {
    entry: {
      app: [
        './src/assets/app.scss'
      ]
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/_variables.scss";`
      }
    }
  }
}
