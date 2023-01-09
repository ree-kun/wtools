#!/bin/zsh

rm -rf txt
mkdir txt

ls -1 *xlsx | xargs -I@ sh -c ' node readExcel.mjs "@" > ./txt/"@".txt '
