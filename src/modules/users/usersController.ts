import { Request, Response } from "express";
import userService from "./userService";
import { parseQueryStrings, parseUsersResponse, validateQuery } from "./utils";
import { validationResult } from "express-validator";

const usersController = {
  getAllUsers: (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const query = parseQueryStrings(req);
    const result = parseUsersResponse(userService.getAllUsers(), query);
    return res.json(result);
  },

  getUserById: (req: Request, res: Response) => {
    const { id } = req.params;
    const user = userService.getUserById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json(user);
  },

  createUser: async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const createdUser = userService.createUser(req.body);
    if (createdUser) {
      return res
        .status(201)
        .json({ message: "User created", data: createdUser });
    } else {
      return res.status(500).json({ error: "User not created" });
    }
  },
};

export default usersController;
