#!/bin/sh

# 事前に git clone -b gh-pages <repo url> dist する

set -ex

rm -rf dist
npm run build
cp -av assets dist/assets
cd dist
git init
git remote add origin git@github.com:takamoriaiko/bingo-react.git
git checkout -b gh-pages
git add -A
git -c user.name='furugomu' -c user.email='furugomu@gmail.com' commit -m "$(date)"
git push -f origin gh-pages
