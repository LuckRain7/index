<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-06-11 15:05:50
-->
<template>
  <div class="my-link">
    <div class="link-item" v-for="(item, index) in data" :key="index">
      <a :href="item.url" target="_blank" rel="noopener noreferrer">
        {{ item.title }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>
