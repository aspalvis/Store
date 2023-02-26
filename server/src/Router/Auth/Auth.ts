import { Router, Request, Response } from "express";
import { Session } from "../../Middleware/Auth/Models/Session";
import User, { IUser } from "../../MongoDB/Models/User";
import { db } from "../../MongoDB/Connection";
import ServerCrypting from "../../Crypto/Crypto";
import { RefreshToken } from "../../MongoDB/Models/RefreshToken";

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  await db.Connect();
  const { email, password } = req.body as IUser;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send("User does not exist");
  }
  const isMatch = ServerCrypting.Decrypt(user.password) === password;
  if (!isMatch) {
    return res.status(403).send("Password is not correct");
  }
  const sessinon = new Session({ email, roleId: user.roleId });
  const refresh = new RefreshToken({
    refreshToken: sessinon.refreshToken,
    accessToken: sessinon.accessToken,
    userId: sessinon.email,
    expires: sessinon.refreshExp,
  });
  const refreshResponse = await refresh.save();
  res.cookie("accessToken", sessinon.accessToken, {
    httpOnly: true,
  });
  res.json(refreshResponse);
});
export = router;
