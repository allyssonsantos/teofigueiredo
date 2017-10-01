const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  entry: [
    './js/helpers/shadows.js',
    './js/helpers/toggle.js',
    './js/helpers/modal.js',
    './js/header/main.js',
    './js/collapse/main.js',
    './js/forms/cotacao.js',
    './js/forms/about.js',
    './js/menu/main.js',
    './js/modal/fipe.js',
    './js/modal/franquia.js',
    './js/modal/perda.js',
    './js/modal/sinistro.js',
    './js/slider/Slider.js',
    './js/testimonial/more.js',
    './js/validations/Validate.js',
  ],
  output: {
    path: path.resolve(__dirname, './dist/js/'),
    filename: "bundle.js"
  },
  plugins: [
    new UglifyJSPlugin(),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '95-100',
      },
    }),
  ],
  module: {
  loaders: [
    {
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: "babel-loader",
      query: {
        presets: ["es2015"]
      }
    }
    ]
  }
};
