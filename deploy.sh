#!/bin/sh

# 事前に git clone -b gh-pages <repo url> dist する

set -ex

npm run build
cp -av index.html assets dist
cd dist
git add -A
git commit -m "$(date)"
git push
