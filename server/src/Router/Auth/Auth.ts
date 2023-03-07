import { Router, Request, Response } from "express";
import User, { IUser } from "../../MongoDB/Models/User";
import ServerCrypting from "../../Crypto/Crypto";
import { asyncMiddleware } from "../../Middleware/Async";

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body as IUser;
  if (!email || !password) {
    throw new Error("Email/Password was not passed");
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send("User does not exist");
  }
  const isMatch = ServerCrypting.Decrypt(user.password) === password;
  if (!isMatch) {
    return res.status(400).send("Password is not correct");
  }
  const sessinon = await user.generateSession();

  res.cookie("accessToken", sessinon.accessToken, {
    httpOnly: true,
  });
  res.sendStatus(200);
});
export = router;
