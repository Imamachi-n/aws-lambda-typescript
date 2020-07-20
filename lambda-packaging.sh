#!/bin/sh

yarn

# distフォルダ
rm -rf ./dist

# TypeScriptビルド
yarn tsc

# package.jsonをdistにコピー
cp -f ./package.json ./yarn.lock ./dist
cd dist

# packageのインストール
yarn install --production

# uploadするためにzip化
zip -r ../lambda.zip ./

# zipデータをlambdaにアップロード
# aws lambda update-function-code \
#     --function-name typescript-lambda \
#     --zip-file fileb://lambda.zip