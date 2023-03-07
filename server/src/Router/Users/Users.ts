import { Router, Request, Response } from "express";
import { UsersController } from "../../MongoDB/Controllers/User";

const router = Router();
const usersController = new UsersController();

router.get("", async (req: Request, res: Response) => {
  const users = await usersController.fetch();
  res.json(users);
});
router.post("/create", async (req: Request, res: Response) => {
  const user = await usersController.create(req.body);
  res.json(user);
});
router.post("/:id/update", async (req: Request, res: Response) => {
  const user = await usersController.updateById(req.params.id, req.body);
  res.json(user);
});
export = router;
