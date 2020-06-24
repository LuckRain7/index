<template>
  <div class="rain-website">
    <div class="website-item">
      <h3>常用网站</h3>
      <Link />
    </div>
    <div class="website-item">
      <h3>Code</h3>
      <Tree :treeData="Code" :id="text1"></Tree>
    </div>
    <div class="website-item">
      <h3>Other</h3>
      <Tree :treeData="Other" :id="text2"></Tree>
    </div>
    <div class="website-item">
      <h3>科研</h3>
      <Tree :treeData="KeYan" :id="text3"></Tree>
    </div>
  </div>
</template>

<script>
import Link from "./Link.vue";
import Tree from "./Tree.vue";
import Code from "../../../data/Code.js";
import Other from "../../../data/other.js";
import KeYan from "../../../data/KeYan.js";
export default {
  data() {
    return {
      Code: Code,
      Other: Other,
      KeYan: KeYan,
      text1: "t1",
      text2: "t2",
      text3: "t3",
    };
  },

  components: {
    Link: Link,
    Tree: Tree,
    KeYan: KeYan,
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
.website-item {
  height: 100%;
  width: 25%;
  min-width: 375px;
  margin: 0 auto;
}
</style>
