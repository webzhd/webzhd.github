const path = require('path');
const resolve = pathName => path.join(__dirname, pathName)
module.exports = {
    base: "/",
    title: '',
    description: 'Just playing around',
    configureWebpack: {
        resolve: {
          alias: {
            '@alias': resolve('./public')
          }
        }
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'cateroty', link: '/category/' }
        ]
    }
  }