<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-23 12:57:25
-->
<template>
  <div class="my-home">
    <div class="homt-item">
      <!-- 背景层 -->
      <div class="bg-gradient"></div>
      <!-- hero层 -->
      <div class="hero">
        <div class="images">
          <img src="/index/home.png" alt="" />
          <a
            v-for="(item, index) in SocialData"
            :key="index"
            class="shield"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="item.img" />
          </a>
        </div>
      </div>
    </div>
    <div class="homt-item"></div>
  </div>
</template>
<script>
import { SocialData } from "../../../data.js";
export default {
  data() {
    return {
      SocialData: SocialData,
    };
  },
};
</script>
<style>
.my-home {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  /* color: #fff; */
}
.my-home .homt-item {
  width: 100%;
  margin: 0;
  padding: 0;
}

.my-home .homt-item .bg-gradient {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 12rem;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#11998e),
    to(#11ffbd)
  );
  background: linear-gradient(#11998e, #11ffbd);
}

.my-home .homt-item .hero {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  margin: 2rem auto 0;
  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 1.5rem;
  position: relative;
  z-index: 2;
  max-width: 45rem;
}

/* 徽标样式 */
.images .shield {
  margin: 0 10px;
}
.images .shield img {
  height: 21px;
}
</style>
