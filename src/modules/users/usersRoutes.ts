import express from "express";
import { body } from "express-validator";
import usersController from "./usersController";
import schemeUser from "./usersScheme";

const router = express.Router();

router.get("/", schemeUser.getAllUsers, usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.post("/", schemeUser.createUser, usersController.createUser);

export default router;
