const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const deps = require('./package.json').dependencies
module.exports = {
  output: {
    publicPath: 'http://localhost:8081/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    plugins: [new TsconfigPathsPlugin({/* options: see below */})]
  },

  devServer: {
    port: 8081,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: 'bundle-loader',
        options: {
          lazy: true,
        },
      },
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'header',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Header' : './src/Header'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
}
