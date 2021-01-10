#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo "module.exports = '/'" > base.js 

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'rain7.top' > CNAME


git init
git add -A
git commit -m 'deploy'

# github
git push -f git@github.com:LuckRain7/MyBlog.git  master:gh-pages

# coding
git push  -f git@e.coding.net:luckrain7/luckrain7.git master

cd -