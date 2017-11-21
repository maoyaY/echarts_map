# model

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at 127.0.0.1:777
 run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 请求使用的是axios

## 全局的加载条使用的 nprogress 

## 引入 babel-polyfill 

## 项目中使用了vuex来进行管理数据

## 登入登出的一个状拦截 与vuex配合进行
# 当时项目有使用jquery，所以如果有需要使用请先引入jquery
# 
# 使用echarts中各个省份js文件 maps_city文件夹里是每个省份地图，以及每个文件引入路径的index.js
# 地区是自定义的，可在echartsOption.js中修改

# 引入map组件，<mapchart @regionclick="region_click" @provinceclick="province_click" @cityclick="city_click"></mapchart>需要配置三个事件，也可自行添加其它需要的属性或者事件
