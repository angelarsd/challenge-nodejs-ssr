import express from "express";
import usersController from "./usersController";

const router = express.Router();

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);

export default router;
