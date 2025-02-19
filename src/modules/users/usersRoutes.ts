import express from "express";
import usersController from "./usersController";
import schemeUser from "./usersScheme";

const router = express.Router();

router.get("/", schemeUser.getAllUsers, usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.post("/", schemeUser.createUser, usersController.createUser);
router.put("/:id", schemeUser.updateUser, usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

export default router;
