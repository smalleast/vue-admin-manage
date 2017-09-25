module.exports = {
  vendorName: 'vendor/vendor',
  devPort: 8082,
  appEntries: './modules/**/router.js',
  entry:["babel-polyfill","./modules/**/router.js"],
  htmlWebpackOptions: {
    hash: 6,
    minify: false
  }
};
