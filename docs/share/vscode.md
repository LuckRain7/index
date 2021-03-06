---
sidebar: auto
---

# VS Code 插件推荐

## 1 ~ 前端插件

### 1.1 ~ advanced-new-file <a style="font-size:1px;" target="_blank" href="https://marketplace.visualstudio.com/items?itemName=patbenatar.advanced-new-file">Marketplace</a>

在工作区进行快捷文件创建

进行快捷键配置 [Mac] ⌘ + N

```json
{
  "key": "cmd+n",
  "command": "extension.advancedNewFile"
}
```

### 1.2 ~ Highlight Matching Tag <a style="font-size:1px;" target="_blank" href="https://github.com/vincaslt/vscode-highlight-matching-tag">github</a>

HTML 标签的高亮匹配插件

![demo](https://images2.imgbox.com/71/2a/zIA1XCzK_o.gif)

---

### Snipsnap

可自动显示当前项目每个库的所有可用代码片段。在开发项目时，能快速补全代码片段，提升开发效率。

### VS Code Counter

计算许多编程语言中源代码的空行，注释行和物理行。并生成对应的报告

### [Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces)

突出显示尾随空格并立即删除它们！

[Mac] ⇧ + ⌘ + P : Trailing Spaces:Delete

settings.json 中设置:

```json
// 设置 编辑当行时 不显示多余空格
"trailing-spaces.highlightCurrentLine": false
```

### [Date & Time](https://marketplace.visualstudio.com/items?itemName=rid9.datetime)

一个在 VS Code 底部显示时间的插件，可以自定义显示的时间格式

settings.json 中设置:

```json
// 2016-01-01 10:12:03
"dateTime.customFormat": "YYYY-MM-DD HH:mm:ss"
```

### Auto Close Tag

自动闭合标签

### Auto Rename Tag

标签自动重命名

### Better Comments

通过使用警告、信息、TODO 等注释来改进代码注释

![Better Comments](https://raw.githubusercontent.com/aaron-bond/better-comments/master/images/better-comments.PNG)

### Bracket Pair Colorizer

让括号拥有独立的颜色，易于区分

### Code Runner

代码块运行环境

### Code Spell Checker

英文拼写检查

### CSS Peek

快速查看定位 CSS 定义

### Document This

注释模板

### eggjs

Egg 智能提示等快捷功能

### ESLint

ESlint 接管原生 js 提示，可以自定制提示规则。

### GBKtoUTF8

编码转换插件

### Git History

git 历史代码对比

### GitLens — Git supercharged

丰富的 git 日志插件

### HTML CSS Support

HTML CSS 智能提示

### IntelliJ IDEA Keybindings

WebStorm 系列的快捷键映射

### JavaScript (ES6) code snippets

ES6 必备 快捷生成代码

### Live Server

为静态和动态页面启动带有实时重新加载功能的开发本地服务器，非常使用

### Path Intellisense

比较基础的路径补全，path 榜一

### Path Autocomplete

> 更好的路径补全，支持根路径文件补全

![Path Autocomplete ](https://raw.githubusercontent.com/ionutvmi/path-autocomplete/master/demo/path-autocomplete.gif)

### Polacode

帮你制作好看的代码截图

### Prettier - Code formatter

代码格式化工具

### px to rem

px 转 rem

### Python

Python 运行插件

### Reactjs code snippets

Reactjs 快捷代码段

### Remote - SSH

远程服务器文件辅助插件（linux 服务器必备）

### Remote - SSH: Editing Configuration Files

远程服务器文件辅助插件（linux 服务器必备）

### Remote - SSH: Explorer

远程服务器文件辅助插件（linux 服务器必备）

### Settings Sync \*\*

VS Code 设置同步，神插件！！！一键从远程同步配置，再也不怕换电脑了！！

### Terminal

右键添加命令行快捷工具

### Vetur

Vue 语法提示

### vscode-fileheader

帮助用户建立文件头，显示文件编写者及编写时间

![vscode-fileheader](https://raw.githubusercontent.com/zhaopengme/vscode-fileheader/master/fileheader.gif)

### vscode-icons

vscode 资源树目录图标

![icons](https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/images/screenshot.gif)

### Vue 2 Snippets

Vue 代码段提示

### koroFileHeader \*\*

文件头注释配置及函数注释！！（必备，一个顶两个）

中文文档相当详细 NB plus ！！

### vscode-drawio

画图插件

### Project Manager

项目管理切换插件

[Cyberbrain](https://github.com/laike9m/Cyberbrain)

一个 VS Code 插件，提供 Python 程序的可视化调试环境。

## 2. 主题美化插件

### Darcula Theme - WebStorm Edition

用惯 WebStorm 的同学首选

### [Bluloco Dark Theme](https://marketplace.visualstudio.com/items?itemName=uloco.theme-bluloco-dark)

很不错的黑暗主题 自己一直在用的主题

![Bluloco Dark Theme](https://imgkr.cn-bj.ufileos.com/76102cf6-00e5-44e4-8d49-ff1dc717d9bc.png)

### [Brackets Light Pro](https://marketplace.visualstudio.com/items?itemName=eryouhao.brackets-light-pro)

非常清新的一款明亮主题

![Brackets Light Pro](https://imgkr.cn-bj.ufileos.com/7c7fa6a5-8df3-44df-a33d-311cb0210b42.png)

### vscode-perfect-dark-color-theme

### One Dark Pro

> 也是一款相当不错的黑暗主题

![one darl pro](https://ww2.sinaimg.cn/large/006tNbRwgy1fvwk4ach5bj31kw16o0uw.jpg)

### [Winter is Coming Theme](https://marketplace.visualstudio.com/items?itemName=johnpapa.winteriscoming)

一款蓝色系的主题

![Winter is Coming Theme Demo](https://raw.githubusercontent.com/johnpapa/vscode-winteriscoming/master/images/dark-blue-html.png)

### [Cobalt2 Theme Official](https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2)

一款非常不错蓝色系的主题

![Cobalt2 Theme Official Demo](https://raw.githubusercontent.com/wesbos/cobalt2-vscode/cobalt2-updates/images/ss.png)

## 3. 字体推荐

- Monaco https://github.com/todylu/monaco.ttf

- Fira Code https://github.com/tonsky/FiraCode

## 4. 成为开发者

[VSCode 插件开发全攻略配套 demo](https://github.com/sxei/vscode-plugin-demo)

## eslint

文件内 eslint 忽略写法，放在文件头部

`/* eslint-disable [ignore] */`
