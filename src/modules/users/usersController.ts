import { Request, Response } from "express";
import userService from "./userService";
import { parseQueryStrings, parseUsersResponse, validateQuery } from "./utils";

const usersController = {
  getAllUsers: (req: Request, res: Response) => {
    const query = parseQueryStrings(req);
    const validationError = validateQuery(query);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }
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
};

export default usersController;
