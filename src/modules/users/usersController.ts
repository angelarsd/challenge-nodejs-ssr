import { Request, Response } from "express";
import userService from "./userService";

const usersController = {
  getAllUsers: (_req: Request, res: Response) => {
    const user = userService.getAllUsers();
    return res.json(user);
  },
};

export default usersController;
