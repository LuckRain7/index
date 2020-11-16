---
sidebar: auto
---

# Vuex

## 1. 基础使用

[Vuex guide](https://vuex.vuejs.org/zh/guide/)

## 2. 合理使用 Vuex

数据被多个组件频繁用到，如果只是被一个组件用到，那完全没有任何必要为了使用 vuex 和使用 vuex

**举例**：一个网站用户的昵称，账号，资料，像这种系统级别的信息随时可能在业务中展示，使用,如果在组件中存储,那么要获取 N 次，所以 **系统级别的数据** 是需要放置在 vuex 中的，那么系统级别数据也不能所以的放置，为了让数据看着更有层级结构感，可以按照像下面这样设计：

```javascript
//系统消息
{
  system:{
    user: {},
    setting: {}
  }
}
```

> 上面这种结构,一 看便知道我们应该哪里获取系统数据即设置数据

如果有些业务数据,也需要共享，最好按照模块的具体业务含义分类,比如下面

```javascript
{
  //系统消息
  system:{
    user: {},
    setting: {}
  },
  product:{
    productList:[], // 商品信息列表
    productOrders:[] // 商品订单列表
  }
}
```

> 如上图代码所示，我们很清晰的能够分清楚每个模块的数据,这样不会导致数据管理的混乱。

## 3. mutations 和 actions 区别

不同于 redux 只有一个 action， vuex 单独拎出了一个 mutations，它认为更新数据必须是同步的，也就是只要调
用了提交数据方法，在 mutation 里面才可以修改数据

vuex 提供了专门做异步请求的模块：action。action 中也可以做同步操作，只不过分工更加明确，所有的数据操作不论是同步还是异步都可以在 action 中完成。mutation 只负责接收状态，同步完成，数据快照。

所以可以认为

- state => 负责存储状态
- mutations => 负责同步更新状态
- actions => 负责获取处理数据(如果有异步操作必须在 action 处理再到 mutation ) ，提交到 mutation 进
  行状态更新

## 4. vuex 模抉化 module 管理

vuex 维护的数据越来越复杂的时候，模块化的解决方案。

解析：使用单一的状态树，应用的所有状态都会集中在一个比较大的对象上面，随着项目需求的不断增加，状态树也会变得越来越臃肿，增加了状态树维护的复杂度，而且代码变得沉长;因此我们需要 modules(模块化)来为我们的状态树分隔成不同的模块，每个模块拥有自己的 state，getters， mutations， actions； 而且允许每个 module 里面嵌套子 module；如下:

```shell
store
  |-- index.js            # 组装模块并导出 store 的地方
  |-- actions.js          # 根级别的 actions
  |-- mutations.js        # 根级别的 mutations
  |-- state.js            # 根级别的 state
  |-- modules
        |-- module1.js    # 模块1的 state 树
        |-- module2.js    # 模块2的 state 树
```

### 基本代码示例：

```javascript
// src/store/modules/user.js

export default {
  namespaced: true,

  // 组件中使用规则 this.$store.state.模块名.变量名
  // 组件中使用：this.$store.state.user.info
  computed: {
    ...mapState({
      info: (state) => state.user.info,
    }),
  },
  state: {
    info: {
      name: "Tom",
      age: 18,
    },
  },

  // 组件中触发规则 this.$store.commit('模块名/变量名',赋值)
  // 组件中触发 this.$store.commit('user/setInfo',value)
  mutations: {
    setInfo(state, val) {
      state.info = val;
    },
  },

  // 组件中触发规则 this.$store.dispatch('模块名/变量名',赋值)
  // 组件中触发 this.$store.dispatch('user/setInfo',value)
  actions: {
    setInfoActions({ commit }, val) {
      setTimeout(() => {
        commit("setInfo", val);
      }, 100);
    },
  },

  // 组件中触发规则 this.$store.getters['模块名/变量名']
  // 组件中触发 this.$store.getters["user/doubleCountUserAge"]
  getters: {
    doubleCountUserAge(state) {
      return state.info.age * 2;
    },
  },
};
```

## 5. 数据持久化

解决浏览器刷新后数据消失问题

利用 vuex-persistedstate 插件，将 vuex 的数据存储到浏览器中，刷新后重新拿出来导入 vuex 中

- 安装

```bash
npm install vuex-persistedstate  --save
or
yarn add vuex-persistedstate
```

- API
  - `key<String> `: The key to store the persisted state under. Defaults to `vuex`.（设置存储 key 值）
  - `paths<Array> `: An array of any paths to partially persist the state. If no paths are given, the complete state is persisted. If an empty array is given, no state is persisted. Paths must be specified using dot notation. If using modules, include the module name. eg: "auth.user" Defaults to `undefined`.
  - `reducer<Function> `: A function that will be called to reduce the state to persist based on the given paths. Defaults to include the values.（设置需求数据进行数据持久化）
  - `subscriber<Function> `: A function called to setup mutation subscription. Defaults to `store => handler => store.subscribe(handler)`.
  - `storage<Object> `: Instead for (or in combination with) `getState` and `setState`. Defaults to localStorage.（设置存储位置）
  - `getState<Function> `: A function that will be called to rehydrate a previously persisted state. Defaults to using `storage`.
  - `setState<Function> `: A function that will be called to persist the given state. Defaults to using `storage`.
  - `filter<Function> `: A function that will be called to filter any mutations which will trigger `setState` on storage eventually. Defaults to `() => true`.
  - `overwrite<Boolean> `: When rehydrating, whether to overwrite the existing state with the output from `getState` directly, instead of merging the two objects with `deepmerge`. Defaults to `false`.
  - `arrayMerger<Function> `: A function for merging arrays when rehydrating state. Defaults to `function (store, saved) { return saved }` (saved state replaces supplied state).
  - `rehydrated<Function> `: A function that will be called when the rehydration is finished. Useful when you are using Nuxt.js, which the rehydration of the persisted state happens asynchronously. Defaults to `store => {}`
  - `fetchBeforeUse<Boolean> `: A boolean indicating if the state should be fetched from storage before the plugin is used. Defaults to `false`.
  - `assertStorage<Function> `: An overridable function to ensure storage is available, fired on plugins's initialization. Default one is performing a Write-Delete operation on the given Storage instance. Note, default behaviour could throw an error (like `DOMException: QuotaExceededError`).

```js
import createPersistedState from "vuex-persistedstate";
const store = new Vuex.Store({
  //默认存储到localStorage
  plugins: [createPersistedState()],

  plugins: [
    createPersistedState({
      // 修改存储key值
      key: "module-vuex-key",
      // 修改存储位置
      storage: window.sessionStorage,
      // 设置需要的数据进行持久化
      reducer(val) {
        return {
          userInfo: val.userInfo,
        };
      },
    }),
  ],
});
```

- vuex 引用多个插件的写法

```js
export default new Vuex.Store({
  plugins: [plugins1().plugins2()],
});
```

---

   <Vue/>
