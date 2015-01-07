#!/bin/bash

git config --global user.email "travis@travis-ci.org"
git config --global user.name "travis-ci"

grunt build && cd build

git init --quiet
git remote add origin https://${GH_TOKEN}@github.com/daxko/design.git
git fetch origin
git checkout --track origin/gh-pages --force
git add --all
git commit -m "Deploying ${TRAVIS_COMMIT} to gh-pages"
git push origin gh-pages