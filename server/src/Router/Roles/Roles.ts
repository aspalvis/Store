import { Router, Request, Response } from "express";
import { RolesController } from "../../MongoDB/Controllers/Roles";
import { asyncMiddleware } from "../../Middleware/Async";

const router = Router();
const rolesController = new RolesController();

router.get("", async (req: Request, res: Response) => {
  const roles = await rolesController.fetch();
  res.json(roles);
});
router.post("/create", async (req: Request, res: Response) => {
  const role = await rolesController.create(req.body);
  res.json(role);
});
router.post("/:id/update", async (req: Request, res: Response) => {
  const role = await rolesController.updateById(req.params.id, req.body);
  res.json(role);
});
export = router;
