
const path = require('path')

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist/js'),
        publicPath: '/dist/js/',
        filename: 'preactbundle.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        },
        {
          test: /\.rawimport.\.js$/,
          use: 'raw-loader',
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
                plugins: [
                  ["@babel/plugin-transform-react-jsx"],
                  [
                    "@babel/plugin-proposal-class-properties",
                    {
                      "loose": true
                    }
                  ]
                ]
              },
            }
          },
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
          }
      ]
    },
    devServer: {
      writeToDisk: true
  },
    resolve: {
        symlinks: false,
        alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat'
        },
        extensions: ['.mjs', '.js', '.jsx']
    },
}
