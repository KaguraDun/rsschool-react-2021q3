const path = require('path')

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  build: path.resolve(__dirname, '../dist'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),

  components: path.resolve(__dirname, '../src/components'),

  pages: path.resolve(__dirname, '../src/pages'),

  services:path.resolve(__dirname,'../src/services'),

  styles:path.resolve(__dirname, '../src/styles')
}
