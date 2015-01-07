#!/bin/bash

git config --global user.email "travis@travis-ci.org"
git config --global user.name "travis-ci"
BASE_PATH=design

git clone --quiet --branch=gh-pages https://${GH_TOKEN}@github.com/daxko/design.git build > /dev/null
rm -rf build/*

grunt build && cd build

# Prepend the basepath to all absolute links for gh-pages
find . -name '*.html' -type f -exec sed -i -E "s/((href|src)=\"?)(\/)/\0\/$BASE_PATH\//g" {} \;

git add --all
git commit -m "Deploying ${TRAVIS_COMMIT} to gh-pages"
git push origin gh-pages --quiet > /dev/null