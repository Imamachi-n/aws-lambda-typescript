# aws-lambda-typescript

プロジェクトの初期化を行う。

```zsh
yarn init
yarn add -D typescript ts-node
npx tsc --init
```

`tsconfig.json` ファイルに以下を追加する。

```json
{
  "compilerOptions": {
    ...
    "outDir": "./dist",
    "rootDir": "./src"
    ...
  }
}
```
