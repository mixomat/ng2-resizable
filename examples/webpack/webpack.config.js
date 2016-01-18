module.exports = {
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.js', '.scss', '.d.ts']
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts'}
    ],
    noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/]
  },

};