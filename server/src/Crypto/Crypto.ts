import CryptoJS from "crypto-js";
import crypto from "crypto";

export default class ServerCrypting {
  private static secretKey = "6w9z$C&F)J@NcRfUjXn2r5u8x!A%D*G-";
  static Encrypt(data: string) {
    var ciphertext = CryptoJS.AES.encrypt(
      data,
      ServerCrypting.secretKey
    ).toString();
    return ciphertext;
  }
  static Decrypt(data: string) {
    var bytes = CryptoJS.AES.decrypt(data, ServerCrypting.secretKey);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  }
  static GenerateSID = () => {
    return crypto.randomBytes(32).toString("base64");
  };
}
