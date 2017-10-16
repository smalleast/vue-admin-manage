# vue-admin-manage
Vue multipage app based on webpack.




## build command:
1-1
  - scripts:
  ```json
  {
      "clean": "rimraf dist",
      "build": "npm run clean && cd src && webpack -p --config webpack.config.product.js",
      "dev": "npm run clean && cd src && webpack-dev-server --inline --progress --colors --port 8090 --config webpack.config.development.js"
  }
  ```

  - bash command:
  ```bash
  npm run clean
  npm run dev
  npm run build
  ```




##
```
scss
@import "./components/*";

import-glob-loader

module: {
      preloaders: [{
        test: /\.scss/,
        loader: 'import-glob-loader'
      }],
      loaders: [{
        test: /\.vue$/,
        loader: 'vue'
      }, {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer')
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!less')
      },   {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass!import-glob-loader')
      },  {
        test: /\.(gif|jpg|png)\??.*$/,
        loader: 'url-loader?limit=8096&name=assets/images/[name].[ext]'
      }, {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=8096&name=assets/fonts/[name].[ext]'
      }, {
        test: /\.(html|tpl)$/,
        loader: 'html-loader?minimize=false'
      }]
    }
```

##babel编译不过...三个点传对象的语法
```
 methods: {
      ...mapActions([
        'increment',
        'incrementIfOdd'
      ]),
      save: save
    }

  ```

  ##解决方法
  ```
  安装组件：babel-plugin-transform-object-rest-spread
  babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime','transform-object-rest-spread']
      }
  ```
