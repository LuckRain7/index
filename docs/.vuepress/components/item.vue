<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-17 14:07:03
-->
<template>
  <li>
    <a :href="item.url" class="title" rel="noopener noreferrer" target="_blank">
      <span v-if="item.url">📝</span> {{ item.name }}
    </a>
    <!-- if -->
    <div v-if="item.children">
      <em :class="['icon', item.open ? 'open' : '']"></em>
      <!-- level level${this.count} -->
      <ul
        :class="['level', 'level1']"
        :style="{ display: item.open ? 'block' : 'none' }"
      >
        <!-- 循环 -->
        <TreeItem
          v-for="(child, ind) in item.children"
          :item="child"
          :key="ind"
        ></TreeItem>
      </ul>
    </div>

    <!-- else -->
    <div v-else></div>
  </li>
</template>
<script>
export default {
  name: "TreeItem",
  props: { item: Object },
};
</script>
