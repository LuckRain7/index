
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo "module.exports = '/index/'" > base.js 

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist


git init
git add -A
git commit -m 'deploy'

# Gitee
git push -f git@gitee.com:LuckRain7/index.git master:gh-pages

# GitHub
git push -f git@github.com:LuckRain7/index.git master:gh-pages


# 打开浏览器
open https://gitee.com/LuckRain7/index/pages


cd -