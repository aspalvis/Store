import ServerCrypting from "../Crypto/Crypto";
import { sign } from "jsonwebtoken";

interface UserData {
  username: string;
  roleId: string;
}
class Token {
  constructor(data: UserData) {}
}
class Session implements UserData {
  private static secret = process.env.TOKENSECRET as string;
  private static secretRefresh = process.env.TOKENSECRETREFRESH as string;
  private static expiresIn = process.env.TOKENEXPIRES as string;
  private static expiresInRefresh = process.env.TOKENEXPIRESREFRESH as string;

  username;
  roleId;
  SID;
  token;
  refreshToken;
  dateCreated;
  dateDestroyed?: Date;

  constructor(data: UserData) {
    this.username = data.username;
    this.roleId = data.roleId;
    this.SID = ServerCrypting.GenerateSID();
    this.token = sign(
      { username: data.username, roleId: data.roleId },
      Session.secret,
      {
        expiresIn: Session.expiresIn,
      }
    );
    this.refreshToken = sign(
      { username: data.username, roleId: data.roleId, refresh: true },
      Session.secretRefresh,
      {
        expiresIn: Session.expiresInRefresh,
      }
    );
    this.dateCreated = new Date();
  }
  destroy() {
    this.dateDestroyed = new Date();
    this.token = "";
  }
}
