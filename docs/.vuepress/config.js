/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-05-22 22:00:46
 */

module.exports = {
  title: "LuckRain7",
  description: "",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  base: "/index/",
  markdown: {},
  locales: {
    "/": {
      lang: "zh-CN", // 多语言设置
    },
  },
  themeConfig: {
    // logo: "https://rain7.top/luckrain7.png", //导航栏 logo
    sidebarDepth: 1,

    // 导航栏设置
    // nav: [
    //   { text: "关于", link: "/About.html" },
    //   { text: "项目", link: "/Project.html" },
    //   { text: "工具", link: "/Tools.html" },
    //   { text: "社交平台", link: "/Social.html" },
    // ],
    displayAllHeaders: false,
    activeHeaderLinks: true,
  },

  plugins: ["@vuepress/back-to-top"],
};
