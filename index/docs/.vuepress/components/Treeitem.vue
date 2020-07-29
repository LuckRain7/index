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

    <!-- <div
      :style="{ display: item.open ? 'block' : 'block' }"
      class="my-content-div"
    > -->
    <div class="my-content-div">
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
<style lang="css">
.my-content-div {
  display: none;
  /* transform: scaleY(0);
  transition: transform 0.8s; */
  /* transition: max-height 0.3s ease-out; */
  transition: all ease 1s;

  /* transition: all 1s ease 0.1s; */
}

.active {
  display: block;
  height: auto;
  /* transform: scaleY(1) ;
  transition: transform 0.8s; */
  /* transition: height 1s ease;
  transform-origin: top center; */
  transition: all ease 1s;
}



</style>
