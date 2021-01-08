const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebPackPlugin = require('copy-webpack-plugin')


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    //de esta forma el compilado de la SPA se llamara main.js que se creará en la dirección asignada por el path dentro de la carpeta de distribución
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        //Con un test vamos a identificar los arhivos de la estructura de babel donde vamos a establecer los valores que queremos fltrar.
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin(
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html',
      }
    ),
    new CopyWebPackPlugin([{
      from: './src/styles/styles.css',
      to: ''
    }]),
  ]
}