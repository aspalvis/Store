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
    return res.status(400).send("User does not exist");
  }
  const isMatch = ServerCrypting.Decrypt(user.password) === password;
  if (!isMatch) {
    return res.status(400).send("Password is not correct");
  }
  const sessinon = new Session({ userId: user._id, roleId: user.roleId });
  const refresh = new RefreshToken({
    refreshToken: sessinon.refreshToken,
    accessToken: sessinon.accessToken,
    userId: sessinon.userId,
    expires: sessinon.refreshExp,
  });
  await refresh.save();
  res.cookie("accessToken", sessinon.accessToken, {
    httpOnly: true,
  });
  res.sendStatus(200);
});
export = router;
