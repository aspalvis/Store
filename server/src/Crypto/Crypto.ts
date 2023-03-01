import CryptoJS from "crypto-js";
import crypto from "crypto";
import config from "config";

export default class ServerCrypting {
  static Encrypt(data: string) {
    const ciphertext = CryptoJS.AES.encrypt(
      data,
      config.get("crypto.secret")
    ).toString();
    return ciphertext;
  }
  static Decrypt(data: string) {
    const bytes = CryptoJS.AES.decrypt(
      data,

      config.get("crypto.secret")
    );
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  }
  static GenerateSID = () => {
    return crypto.randomBytes(32).toString("base64");
  };
}
