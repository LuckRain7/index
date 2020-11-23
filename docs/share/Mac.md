# MacBook 常用软件及命令

## 问题解决

**解决文件破损问题**

sudo xattr -r -d com.apple.quarantine /Applications/sketch.app/

**解决 vscode 读写文件权限问题**

sudo chmod -R 777 . ## 为当前目录及子目录搜于读写权限

## 软件推荐

[pap.er - 每天获取来自全球的新鲜精美壁纸](https://paper.meiyuan.in/)

[Rectangle - 窗口管理神器](https://github.com/rxhanson/Rectangle)

New File Menu - 右键快捷新建文件软件

Parallesls Desktop 15 - 虚拟机

Xnip - 截屏软件

IINA - 视频播放器

CheatSheet - 查看快捷键

Karabiner-Elements - 修改键盘映射

## 环境变量

**HomeBrew**

export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles

export PATH="/usr/local/bin:$PATH"

export PATH="/usr/local/sbin:$PATH"

**nvm 配置**

export NVM_DIR="$HOME/.nvm"

[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm

**Yarn 配置**

export PATH="$PATH:/Users/rain/APP/yarn-v1.22.4/bin/"
