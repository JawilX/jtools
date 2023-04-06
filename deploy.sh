#!/usr/bin/env sh

# Github Pages 部署文档：https://cn.vitejs.dev/guide/static-deploy.html#github-pages

# 发生错误时中止
# set -e

# 构建
npm run build

# 进入构建文件
cd dist

git init
git checkout -b gh-pages
git add -A
git commit -m 'deploy'

git push -f https://github.com/JawilX/jtools.git gh-pages

cd -
