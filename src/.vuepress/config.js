const path = require('path');
const resolve = pathName => path.join(__dirname, pathName)
module.exports = {
    base: "/dist/",
    title: '',
    description: 'Just playing around',
    configureWebpack: {
        resolve: {
          alias: {
            '@': resolve('./public')
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