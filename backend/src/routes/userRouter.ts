import { Router } from "express";
import {
  addUser,
  deleteUser,
  getUsers,
  getUser,
  updateUser,
} from "../controllers/users";

const router: Router = Router();

router.get("/users/:page?/:limit?", getUsers);
router.get("/user/:id", getUser);
router.post("/add-user", addUser);
router.put("/edit-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);

export default router;
