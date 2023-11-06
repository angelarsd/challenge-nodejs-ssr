import { Request, Response } from "express";
import userService from "./userService";
import { parseQueryStrings, parseUsersResponse } from "./utils";
import { validationResult } from "express-validator";

const usersController = {
  getAllUsers: (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    userService.getAllUsers((users) => {
      if (users) {
        const query = parseQueryStrings(req);
        const result = parseUsersResponse(users, query);
        return res.json(result);
      } else {
        return res.status(404).json({ error: "Users not found" });
      }
    });
  },

  getUserById: (req: Request, res: Response) => {
    const { id } = req.params;
    userService.getUserById(id, (user) => {
      if (user) {
        return res.json(user);
      } else {
        return res.status(404).json({ error: "User not found" });
      }
    });
  },

  createUser: async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    userService.createUser(req.body, (user) => {
      if (user) {
        return res.status(201).json({ message: "User created", data: user });
      } else {
        return res.status(500).json({ error: "User not created" });
      }
    });
  },

  updateUser: (req: Request, res: Response) => {
    const { id } = req.params;
    userService.getUserById(id, (user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
    });

    userService.updateUser(id, req.body, (updatedUser) => {
      if (updatedUser) {
        return res
          .status(200)
          .json({ message: "User updated", data: updatedUser });
      } else {
        return res.status(500).json({ error: "User not updated" });
      }
    });
  },

  deleteUser: (req: Request, res: Response) => {
    const { id } = req.params;
    userService.getUserById(id, (user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
    });
    userService.deleteUser(id, (deletedUser) => {
      if (deletedUser) {
        return res
          .status(200)
          .json({ message: "User deleted", data: deletedUser });
      } else {
        return res.status(500).json({ error: "User not deleted" });
      }
    });
  },
};

export default usersController;
