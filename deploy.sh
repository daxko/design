#!/bin/bash

git config --global user.email "travis@travis-ci.org"
git config --global user.name "travis-ci"
git remote set-url origin "https://${GH_TOKEN}@github.com/daxko/design.git"

grunt build
cd build

git clone --quiet --branch=gh-pages https://${GH_TOKEN}@github.com/daxko/design .
git add --all
git commit -m "Deploying ${TRAVIS_COMMIT} to gh-pages"
git push