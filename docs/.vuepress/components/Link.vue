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
  margin-left: 20px;
}
</style>

<script>
import CYWZ from "../../../data/Common.js";
export default {
  data() {
    return {
      CYWZ: CYWZ,
    };
  },
};
</script>

<style></style>
