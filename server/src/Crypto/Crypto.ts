import CryptoJS from "crypto-js";
import crypto from "crypto";

export default class ServerCrypting {
  static Encrypt(data: string) {
    const ciphertext = CryptoJS.AES.encrypt(
      data,
      process.env.CRYPTOSECRET as string
    ).toString();
    return ciphertext;
  }
  static Decrypt(data: string) {
    const bytes = CryptoJS.AES.decrypt(
      data,
      process.env.CRYPTOSECRET as string
    );
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  }
  static GenerateSID = () => {
    return crypto.randomBytes(32).toString("base64");
  };
}
