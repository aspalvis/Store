import ServerCrypting from "../../../Crypto/Crypto";
import { JwtPayload, decode, sign, verify } from "jsonwebtoken";
import config from "config";
interface UserData {
  _id: string;
  _roleId: string;
}

export class Session implements UserData {
  _id;
  _roleId;
  sessionId;
  accessToken;
  refreshToken;
  dateCreated;
  dateDestroyed: Date | null = null;

  constructor(data: UserData) {
    const Secret = config.get("jwt.token.secret") as string;
    const SecretRefresh = config.get("jwt.refresh.secret") as string;
    const ExpiresIn = config.get("jwt.token.exp") as string;
    const ExpiresInRefresh = config.get("jwt.refresh.exp") as string;

    this.sessionId = ServerCrypting.GenerateSID();
    this._id = data._id;
    this._roleId = data._roleId;
    this.accessToken = sign({ _id: data._id, _roleId: data._roleId }, Secret, {
      expiresIn: ExpiresIn,
    });
    this.refreshToken = sign(
      { _id: data._id, _roleId: data._roleId, refresh: true },
      SecretRefresh,
      {
        expiresIn: ExpiresInRefresh,
      }
    );
    this.dateCreated = new Date();
  }
  static ValidateToken(accessToken: string) {
    return verify(accessToken, config.get("jwt.token.secret") as string);
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
