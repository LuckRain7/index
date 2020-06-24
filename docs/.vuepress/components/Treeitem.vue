<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-06-23 21:09:10
-->
<template>
  <div style="margin-left: 3px;">
    <i :class="['tree-icon', item.open ? 'open' : '']" v-if="item.children">
      📁
    </i>

    <a class="title" :href="item.url" rel="noopener noreferrer" target="_blank">
      <span v-if="item.url">📝</span> {{ item.name }}
    </a>

    <div :style="{ display: item.open ? 'block' : 'none' }">
      <li v-if="item.children">
        <Treeitem
          v-for="(item2, index2) in item.children"
          :key="index2"
          :item="item2"
        >
        </Treeitem>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Treeitem",
  props: { item: Object },
};
</script>
