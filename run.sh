#!/bin/sh -l

# cd to repo
cd $GITHUB_WORKSPACE/$1

# install dependencies
pip3 install -r $2

# test
python3 -m unittest
