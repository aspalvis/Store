import ServerCrypting from "../../../Crypto/Crypto";
import { JwtPayload, decode, sign, verify } from "jsonwebtoken";

interface UserData {
  email: string;
  roleId: string;
}

export class Session implements UserData {
  email;
  roleId;
  sessionId;
  accessToken;
  refreshToken;
  dateCreated;
  dateDestroyed: Date | null = null;

  constructor(data: UserData) {
    const Secret = process.env.TOKENSECRET as string;
    const SecretRefresh = process.env.TOKENSECRETREFRESH as string;
    const ExpiresIn = process.env.TOKENEXPIRES as string;
    const ExpiresInRefresh = process.env.TOKENEXPIRESREFRESH as string;

    this.sessionId = ServerCrypting.GenerateSID();
    this.email = data.email;
    this.roleId = data.roleId;
    this.accessToken = sign(
      { email: data.email, roleId: data.roleId },
      Secret,
      {
        expiresIn: ExpiresIn,
      }
    );
    this.refreshToken = sign(
      { email: data.email, roleId: data.roleId, refresh: true },
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
  get refreshExp() {
    const decoded = decode(this.refreshToken) as JwtPayload;
    return decoded.exp;
  }
}
