/*
 *  Description: 相关导航
 *  Author: LuckRain7
 *  Date: 2020-06-14 09:36:19
 */

import Blog from "./other/Blog.js";
import Images from './other/Images.js'

export default [
  Blog, // 博客
  // Vue
  {
    name: "Vue",
    // open: true,
    children: [
      {
        name: "Vue - 官网",
        url: "https://cn.vuejs.org/",
      },
      {
        name: "Vue - 镜像",
        url: "https://chu1204505056.gitee.io/cn.vuejs.org/",
      },
      {
        name: "Vue3 - 非官方文档",
        url: "https://vue-composition-api-rfc.netlify.app/zh/api.html",
      },
      {
        name: "vue-router",
        url: "https://router.vuejs.org/zh/",
      },
      {
        name: "Vuex",
        url: "https://vuex.vuejs.org/zh/",
      },
      {
        name: "Vue CLI",
        url: "https://cli.vuejs.org/zh/",
      },
      {
        name: "Nuxt.js",
        url: "https://zh.nuxtjs.org/guide/installation",
      },
      {
        name: "VuePress - Vue 驱动的静态网站生成器",
        url: "https://www.vuepress.cn/",
      },
      {
        name: "UI",
        children: [
          {
            name: "Ant Design Vue",
            url: "https://www.antdv.com/docs/vue/introduce-cn/",
          },
          {
            name: "Element - UI",
            url: "https://element.eleme.cn/#/zh-CN",
          },
        ],
      },
    ],
  },
  // 打包工具
  {
    name: "打包工具",
    children: [
      {
        name: "Webpack - 让一切变得简单",
        url: "https://www.webpackjs.com",
      },
      {
        name: "Rollup - 极速零配置 Web 应用打包工具",
        url: "https://www.rollupjs.com/",
      },
      {
        name: "Parcel - JavaScript 模块打包器",
        url: "https://parceljs.org/",
      },
      {
        name: "Snowpack - 面向现代的Web开发",
        url: "https://www.snowpack.dev/",
      },
    ],
  },
  // React
  {
    name: "React",
    children: [
      {
        name: "React",
        url: "https://react.docschina.org/",
      },
      {
        name: "React Router",
        url: "https://reacttraining.com/react-router/",
      },
      {
        name: "Redux.js",
        url: "https://redux.js.org",
      },
      {
        name: "Redux 中文文档",
        url: "https://cn.redux.js.org",
      },
      {
        name: "Redux-Thunk",
        url: "https://github.com/reduxjs/redux-thunk",
      },
      {
        name: "Redux-Saga",
        url: "https://redux-saga.js.org",
      },
      {
        name: "UmiJS v3",
        url: "https://umijs.org/zh-CN",
      },
      {
        name: "Ant Design - 一套企业级 UI 设计语言和 React 组件库",
        url: "https://ant.design/index-cn",
      },
      {
        name: "DvaJS",
        url: "https://dvajs.com",
      },
      {
        name: "Next.js",
        url: "https://nextjs.org",
      },
    ],
  },
  // 数据可视化
  {
    name: "数据可视化",
    children: [
      {
        name: "AntV-国内镜像",
        url: "https://antv.gitee.io/zh",
      },
      {
        name: "ECharts",
        url: "http://echarts.baidu.com",
      },
      {
        name: "百度图说",
        url: "http://tushuo.baidu.com",
      },
    ],
  },
  // CSS
  {
    name: "CSS",
    children: [
      {
        name: "Sass",
        url: "https://www.sass.hk/guide/",
      },
      {
        name: "Less 中文网",
        url: "http://lesscss.cn",
      },
      {
        name: "Bootstrap 中文网",
        url: "https://www.bootcss.com/",
      },
      {
        name: "Tool",
        children: [
          {
            name: "The Matrix Resolutions",
            url: "https://meyerweb.com/eric/tools/matrix/",
          },
          {
            name:
              "Tridiv | CSS 3D Editor - Making 3D in CSS has never been easier",
            url: "http://tridiv.com",
          },
          {
            name: "F2e.name web 前端工程师 CSS3动画手册",
            url: "http://f2e.name/",
          },
          {
            name: "CSS-Matrix3d GitHub",
            url: "https://github.com/Zhangdroid/CSS-Matrix3d",
          },
          {
            name:
              "CSS3 Generator ｜　CSS3を生成するGenerator（ジェネレーター）です。",
            url: "http://ds-overdesign.com/",
          },
          {
            name: "CSS Grid Generator",
            url: "https://cssgrid-generator.netlify.app/",
          },
        ],
      },
    ],
  },
  // Node
  {
    name: "Node",
    children: [
      {
        name: "Node.js",
        url: "https://nodejs.org/zh-cn/",
      },
      {
        name: "Express",
        url: "https://www.expressjs.com.cn/",
      },
      {
        name: "Koa",
        url: "https://koa.bootcss.com/",
      },
      {
        name: "egg - 为企业级框架和应用而生",
        url: "https://eggjs.org/zh-cn/",
      },
      {
        name: "Electron - 开发桌面级应用",
        url: "https://electronjs.org/",
      },
    ],
  },
  // 工具库
  {
    name: "工具库",
    children: [
      {
        name: "Lodash -  强大的工具库",
        url: "https://lodash.com/",
      },
      {
        name: "Mock.js - 数据接口模拟",
        url: "http://mockjs.com/",
      },
      // 工具库/工具网站
      {
        name: "网站",
        children: [
          {
            name: "30 seconds of code - 收集了许多有用的代码小片段",
            url: "https://www.30secondsofcode.org/",
          },
        ],
      },
    ],
  },
  // 前端工程化app
  {
    name: "App",
    children: [
      {
        name: "uni-app 官网",
        url: "https://uniapp.dcloud.io/README",
      },
    ],
  },
  // 微前端
  {
    name: "微前端",
    children: [
      {
        name: "qiankun - 可能是你见过最完善的微前端解决方案🧐",
        url: "https://qiankun.umijs.org/zh",
      },
    ],
  },
  // 图片工具
  Images,
  // 代码仓库
  {
    name: "代码仓库",
    children: [
      {
        name: "GitHub",
        url: "https://github.com/",
      },
      {
        name: "Gitee",
        url: "http://git.oschina.net/",
      },
      {
        name: "Coding",
        url: "https://coding.net",
      },
      {
        name: "腾讯工蜂社区版",
        url: "https://git.code.tencent.com/explore",
      },
      {
        name: "阿里云代码托管",
        url: "https://code.aliyun.com/",
      },
    ],
  },
  // 图标库
  {
    name: "Icon",
    children: [
      {
        name: "Iconfont-矢量图标库",
        url: "https://www.iconfont.cn/",
      },
      {
        name: "Font Awesome",
        url: "https://fontawesome.com/",
      },
    ],
  },
  // 云服务
  {
    name: "Yun",
    children: [
      {
        name: "阿里云",
        url: "https://www.aliyun.com/",
      },
      {
        name: "七牛云存储",
        url: "https://portal.qiniu.com/",
      },
    ],
  },
  // 摸鱼
  {
    name: "摸鱼",
    children: [
      {
        name: "鱼塘热榜",
        url: "https://mo.fish/",
      },
      {
        name: "Hello Github",
        url: "https://hellogithub.com/",
      },
    ],
  },
  // 软件
  {
    name: "工具网站",
    children: [
      {
        name: "地图选择器",
        url: "http://datav.aliyun.com/tools/atlas/",
      },
    ],
  },
];
