import { Router } from "express";

const router = Router();

router.use("/auth", require("./Auth/Auth"));
router.use("/users", require("./Users/Users"));
router.use("/roles", require("./Roles/Roles"));
export = router;
