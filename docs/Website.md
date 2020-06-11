---
sidebar: auto
---

# Website

## 常用网站

<Link/>

## Vue

[Vue - 官网](https://cn.vuejs.org/) | [Vue - 镜像](https://chu1204505056.gitee.io/cn.vuejs.org/)

[vue-router](https://router.vuejs.org/zh/)

[Vuex](https://vuex.vuejs.org/zh/)

[Vue CLI](https://cli.vuejs.org/zh/)

[Nuxt.js](https://zh.nuxtjs.org/guide/installation)

[VuePress](https://www.vuepress.cn/)

[Ant Design Vue](https://www.antdv.com/docs/vue/introduce-cn/)

[Element - UI](https://element.eleme.cn/#/zh-CN)

## 打包工具

[Webpack - 让一切变得简单](https://www.webpackjs.com/)

[Rollup - 极速零配置 Web 应用打包工具](https://www.rollupjs.com/)

[Parcel - JavaScript 模块打包器](https://parceljs.org/)

## React

[React](https://react.docschina.org/)

[React Router](https://reacttraining.com/react-router/)

[Redux.js](https://redux.js.org/) | [Redux 中文文档](https://cn.redux.js.org/)

[Redux-Thunk](https://github.com/reduxjs/redux-thunk)

[Redux-Saga](https://redux-saga.js.org/)

[UmiJS v3](https://umijs.org/zh-CN)

[Ant Design - 一套企业级 UI 设计语言和 React 组件库](https://ant.design/index-cn)

[DvaJS](https://dvajs.com/)

[Next.js](https://nextjs.org/)

## 数据可视化

[AntV-国内镜像](https://antv.gitee.io/zh)

[ECharts](http://echarts.baidu.com) | [百度图说](http://tushuo.baidu.com/)

## CSS

[Sass](https://www.sass.hk/guide/)
| [Less 中文网](http://lesscss.cn/)

## Node

[Node.js](https://nodejs.org/zh-cn/)

[Express](https://www.expressjs.com.cn/)

[Koa](https://koa.bootcss.com/)

[egg - 为企业级框架和应用而生](https://eggjs.org/zh-cn/)

[Electron - 开发桌面级应用](https://electronjs.org/)

## 工具库

[Lodash](https://lodash.com/)

[Mock.js - 数据接口模拟](http://mockjs.com/)

## App

[uni-app 官网](https://uniapp.dcloud.io/README)

## 代码仓库

<Linka :data="DaiMaCangKu" />

## 云服务

<Linka :data="Yun" />

## Icon

<Linka :data="Icon" />

<script>
export default {
  data() {
    return {
      // 图标
      Icon: [
        {
          title: "Iconfont-矢量图标库",
          url: "https://www.iconfont.cn/",
        },
        {
          title: "Font Awesome",
          url: "https://fontawesome.com/",
        },
      ],
      // 云服务
      Yun: [
        {
          title: "阿里云",
          url: "https://www.aliyun.com/",
        },
        {
          title: "七牛云存储",
          url: "https://portal.qiniu.com/",
        },
      ],
      // 代码仓库 代码托管
      DaiMaCangKu: [
        {
          title: "GitHub",
          url: "https://github.com/",
        },
        {
          title: "Gitee",
          url: "http://git.oschina.net/",
        },
        {
          title: "Coding",
          url: "https://coding.net",
        },
        {
          title: "腾讯工蜂社区版",
          url: "https://git.code.tencent.com/explore",
        },
        {
          title: "阿里云代码托管",
          url: "https://code.aliyun.com/",
        },
      ],
    };
  },
};
</script>
