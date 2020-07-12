<template>
  <div>
    <div class="rain-website">
      <div class="website-item">
        <h3>常用网站</h3>
        <Link />
      </div>

      <div class="website-item">
        <h3>网站分类</h3>
        <Tree :treeData="Code" :idname="text1"></Tree>
      </div>

    </div>
  </div>
</template>

<script>
import Link from "./Link.vue";
import Tree from "./Tree.vue";
import Code from "../../../data/Code.js";
// import Other from "../../../data/other.js";
// import KeYan from "../../../data/KeYan.js";
export default {
  data() {
    return {
      Code: Code,
      // Other: Other,
      // KeYan: KeYan,
      text1: "t1",
      text2: "t2",
      text3: "t3",
    };
  },

  components: {
    Link: Link,
    Tree: Tree,
  },

  mounted() {
    let header = document.querySelector('.navbar')
    header.style.zIndex = 100;
    console.log(header);
  },
};
</script>

<style>
.rain-website {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
}
.rain-website .website-item {
  height: 100%;
  width: 50%;
  min-width: 375px;
  margin: 0 auto;
  background-color: white;
  z-index: 99;
}
.rain-website .website-item h3 {
  margin-top: 70px;
}
</style>
