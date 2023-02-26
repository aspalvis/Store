import { Router, Request, Response } from "express";
import { db } from "../../MongoDB/Connection";
import User, { IUser } from "../../MongoDB/Models/User";

const router = Router();
router.get("", (req, res) => {
  res.send("huhuhuh");
});
router.post("/create", async (req: Request, res: Response) => {
  try {
    db.Connect();
    const { email, name, password, shippingAddress, roleId } =
      req.body as IUser;
    const user = new User({ email, name, password, shippingAddress, roleId });
    const response = await user.save();

    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
router.post("/update", async (req: Request, res: Response) => {
  try {
    db.Connect();
    const { email, name, password, shippingAddress } = req.body as IUser;
    const user = new User({ email, name, password, shippingAddress });
    const response = await user.save();

    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
export = router;
