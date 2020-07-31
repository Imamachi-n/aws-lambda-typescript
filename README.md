# aws-lambda-typescript

## 使い方（手作業 or AWS CLI でデプロイする用）

`index.ts` ファイルの `handler` 関数に任意の処理を記述し、以下のシェルスクリプトを実行する。

```bash
bash lambda-packaging.sh
```

すると、プロジェクトディレクトリ直下に、`lambda.zip` ファイルが生成されるので、これを手作業もしくは AWS CLI 経由でデプロイする。

### `getSecretValue.ts` の使い方

`getSecretValue()` の引数に Secrets Manager のキーを指定してください。Object 型でデータ一式を返すので、そこからプロパティ名を指定して、それぞれの値を取得できます。

```ts
const secretValues = await getSecretValue("xxxx/prod");
const { MONGODB_URL } = secretValues;
```

## 既存のプロジェクトに組み込みたい場合

1. `lambda-packaging.sh` ファイルをプロジェクトディレクトリ直下に配置する。
2. `package.json` に以下を追加する。

```json
{
  "scripts": {
    "tsc": "tsc -p tsconfig.json",
    ...
  },
}
```

3. `tsconfig.json` ファイルに以下を追加する。

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
