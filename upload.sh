# 确保脚本抛出遇到的错误
set -e

git add .

git commit -m "docs: update"

git push git@gitee.com:LuckRain7/index.git master

git push git@github.com:LuckRain7/index.git master


cd -