#!/bin/bash
set -ev

homework="homework"
inclass="in-class-exercises"

git diff --name-only HEAD^ | while read -r file ; do
    if [[ $file =~ ^"$homework" || $file =~ ^"$inclass" ]]; then
        filename="${file##*/}"
        name=$(echo $filename | cut -f 1 -d '.')
        test="test/$name.spec.js"
        echo "running test $test"
        mocha "$test"
    fi
done
