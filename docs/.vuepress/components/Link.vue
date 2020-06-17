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
  width: 30%;
  height: 40px;
  margin-top: 10px;
  margin-right: 1%;
  line-height: 40px;
  text-align: center;
  background-color: #ffffffab;
  border: 1px solid #f0ebebe8;
  box-shadow: 1px 1px 1px green;
  overflow: hidden;
}

.link-item:hover {
  background-color: #4aca91;
  color: white !important;
}
.link-item:hover a {
  color: white !important;
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
