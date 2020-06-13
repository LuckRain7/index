---
sidebar: auto
---

# Website

## 常用网站

<Link/>

## Code

<Tree></Tree>

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
