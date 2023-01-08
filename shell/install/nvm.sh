#!/bin/zsh

# 参考
# https://maku77.github.io/nodejs/env/nvm
# .zshrc など、設定ファイルがない場合は作成してから実行する

# nvmをインストール
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# 最新のLTS版をインストール
nvm install --lts
nvm ls
