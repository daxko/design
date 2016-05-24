#!/bin/bash

if [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then

git config --global user.email "travis@travis-ci.org"
git config --global user.name "travis-ci"
BASE_PATH=design

git clone --quiet --branch=gh-pages https://${GH_TOKEN}@github.com/daxko/design.git stage > /dev/null
rm -rf stage/*

grunt build && mv build/* stage && cd stage

# Prepend the basepath to all absolute links for gh-pages
find . -name '*.html' -type f -exec sed -i -E "s/((href|src)=\"?\/)([^\/])/\1$BASE_PATH\/\3/g" {} \;
find . -name '*.html' -type f -exec sed -i -E "s/register('\/sw/register('\/$BASE_PATH\/sw/g" {} \;

git add --all .
git commit -m "Deploying ${TRAVIS_COMMIT} to gh-pages"
git push origin gh-pages --quiet > /dev/null

fi