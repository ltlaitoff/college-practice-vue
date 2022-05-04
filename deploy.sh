#!/usr/bin/env sh
# abort on errors
set -e

# build
npm run build

cd dist

git init
git checkout -b gh-pages
git add -A
git commit -m 'deploy'


git push -f https://github.com/ltlaitoff/college-practice-vue.git

cd -
