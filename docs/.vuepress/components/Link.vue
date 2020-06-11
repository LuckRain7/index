<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-06-11 14:32:04
-->

<template>
  <div class="my-link">
    <div class="link-item" v-for="(item, index) in CYWZ.children" :key="index">
      <a :href="item.url" target="_blank" rel="noopener noreferrer">
        {{ item.title }}
      </a>
    </div>
  </div>
</template>

<style>
.my-link {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  justify-content: flex-start;
}

.my-link .link-item {
  width: 32%;
  height: 40px;
  margin-top: 10px;
  margin-right: 3px;
  line-height: 40px;
  text-align: center;
  background-color: #ffffffab;
  border: 1px solid #f0ebebe8;
  box-shadow: 10px 10px 5px #f0ebebe8;
}
</style>

<script>
export default {
  data() {
    return {
      CYWZ: {
        title: "常用网站",
        children: [
          {
            title: "Google",
            url: "https://www.google.com",
          },
          {
            title: "前端开发日报-前端开发博客",
            url: "http://caibaojian.com/c/news",
          },
          {
            title: "哔哩哔哩 (゜-゜)つロ 干杯",
            url: "https://www.bilibili.com/",
          },
          {
            title: "MDN Web 文档",
            url: "https://developer.mozilla.org/zh-CN/",
          },
          {
            title: "奶牛快传",
            url: "https://cowtransfer.com/",
          },
          {
            title: "百度学术",
            url: "http://xueshu.baidu.com/",
          },
          {
            title: "有道词典",
            url: "http://dict.youdao.com/",
          },
          {
            title: "SDAU-机构设置",
            url: "http://www.sdau.edu.cn/13/list.htm",
          },
          {
            title: "山东农业大学图书馆",
            url: "http://library.sdau.edu.cn/",
          },
          {
            title: "pc6-下载站",
            url: "http://www.pc6.com/",
          },
          {
            title: "扩展迷",
            url: "https://extfans.com/",
          },

          {
            title: "腾讯课堂",
            url: "http://ke.qq.com/index.html",
          },
          {
            title: "有道云笔记",
            url: "http://note.youdao.com/",
          },
          {
            title: "Magi - 搜索",
            url: "https://magi.com/",
          },
          {
            title: "NPM",
            url: "https://www.npmjs.com/",
          },
          {
            title: "VS Code",
            url: "https://marketplace.visualstudio.com/vscode",
          },
          {
            title: "InfoQ",
            url: "http://www.infoq.com/cn/",
          },
          {
            title: "BootCDN - CDN 加速服务",
            url: "http://www.bootcdn.cn/",
          },
          {
            title: "HelloGitHub 分享",
            url: "https://hellogithub.com/",
          },
          {
            title: "虎跃网 VPN",
            url: "https://www.notion.so/5ea5f1cc9a8644718d0317a45c3ec0f3",
            now: "https://www.huyue.world/",
          },
          {
            title: "Chrome 网上应用店",
            url: "https://chrome.google.com/webstore/category/extensions",
          },
        ],
      },
    };
  },
};
</script>

<style></style>
