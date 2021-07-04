const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    library: {
      name: 'EditorView',
      type: 'umd',
      export: ['default']
    },
  },
  externals: {
    "react": "react",
    "react-dom": "react-dom",
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },  
  module: {
    rules: [
      // JavaScript
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },  
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },    
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },                 
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'],
    }),
  ],
}
