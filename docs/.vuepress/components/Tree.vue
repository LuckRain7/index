<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-06-23 20:56:35
-->
<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-05 22:24:47
// TODO -----------------------------
// TODO 多个tree组件的冲突问题 优化样式 
// TODO -----------------------------
 -->

<template>
  <div class="my-tree">
    <ul :id="id" class="my-tree-ul">
      <Treeitem
        v-for="(item, index1) in treeData"
        :key="index1"
        :item="item"
      ></Treeitem>
    </ul>
  </div>
</template>

<script>
import Data from "../../../data/Code.js";
import Treeitem from "./Treeitem.vue";
import { addListener } from "../utils/Dom.js";

export default {
  name: "Tree",

  data() {
    return { count: 0 };
  },

  props: {
    treeData: {
      type: Array,
      default: function () {
        return Data;
      },
    },
    id: {
      type: String, // 使用id的进行重复标识
      default: function () {
        return "tree-test1";
      },
    },
  },

  components: { Treeitem: Treeitem },

  methods: {
    elOpen(target) {
      target.setAttribute("class", "tree-icon open");
      this.openAndHide(target, "block");
    },
    elHide(target) {
      target.setAttribute("class", "tree-icon");
      this.openAndHide(target, "none");
    },
    openAndHide(target, type) {
      target.nextElementSibling.nextElementSibling.style.display = type;
    },
    clickHandle(ev) {
      let target = ev.target;
      console.dir(target.tagName);

      if (target.tagName === "I") {
        // 获取对象 class 属性
        let classArray = target.getAttribute("class");
        // open 属性切换
        classArray.includes("open") ? this.elHide(target) : this.elOpen(target);
      }
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.$tree = document.querySelector(`#${this.id}`);
      // 事件委托
      addListener(this.$tree, "click", this.clickHandle);
    });
  },
};
</script>

<style>
.my-tree li {
  margin-left: 26px;
  list-style: none;
}

.my-tree a {
  color: #2c3e50;
  text-decoration: none !important;
  cursor: pointer;
}
.my-tree a :hover {
  text-decoration: none !important;
  color: #3eaf7c !important;
  cursor: pointer;
}
.my-tree a:active {
  text-decoration: none !important;
  color: #3eaf7c !important;
  cursor: pointer;
}
.my-tree i {
  font-style: normal;
}

.my-tree .tree-icon {
  cursor: pointer;
}
</style>
