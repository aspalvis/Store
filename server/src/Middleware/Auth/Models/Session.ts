import ServerCrypting from "../../../Crypto/Crypto";
import { decode, sign, verify } from "jsonwebtoken";

interface UserData {
  username: string;
  roleId: string;
}

export class Session implements UserData {
  username;
  roleId;
  SID;
  accessToken;
  refreshToken;
  dateCreated;
  dateDestroyed: Date | null = null;

  constructor(data: UserData) {
    const Secret = process.env.TOKENSECRET as string;
    const SecretRefresh = process.env.TOKENSECRETREFRESH as string;
    const ExpiresIn = process.env.TOKENEXPIRES as string;
    const ExpiresInRefresh = process.env.TOKENEXPIRESREFRESH as string;

    this.username = data.username;
    this.roleId = data.roleId;
    this.SID = ServerCrypting.GenerateSID();
    this.accessToken = sign(
      { username: data.username, roleId: data.roleId },
      Secret,
      {
        expiresIn: ExpiresIn,
      }
    );
    this.refreshToken = sign(
      { username: data.username, roleId: data.roleId, refresh: true },
      SecretRefresh,
      {
        expiresIn: ExpiresInRefresh,
      }
    );
    this.dateCreated = new Date();
  }
  static ValidateToken(accessToken: string) {
    return verify(accessToken, process.env.TOKENSECRET as string);
  }
  destroy() {
    this.dateDestroyed = new Date();
    this.accessToken = "";
  }
}
