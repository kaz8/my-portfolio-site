module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pages: {
    index: {
      entry: 'src/main.js', 
      title: "kaz's portfolio",
    }
  },
  pwa: {
    iconPath:{
      favicon32:'public/favicon.ico'
    }
  }

}
