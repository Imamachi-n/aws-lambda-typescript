import { SecretsManager } from "aws-sdk";

const asm = new SecretsManager({ region: "ap-northeast-1" });

// AWS Secret Managerから値を取得
export async function getSecretValue(
  asm_key: string
): Promise<{ [key: string]: string }> {
  // if (!process.env.ASM_SECRETS) throw new Error("ASM_SECRETS not found");

  try {
    const data = await asm
      .getSecretValue({
        SecretId: asm_key,
      })
      .promise();

    if (data.SecretString) {
      return JSON.parse(data.SecretString);
    }

    throw new Error("Secret value not found");
  } catch (error) {
    console.error(error);
    throw error;
  }
}
