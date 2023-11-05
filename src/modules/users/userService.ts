import fs from "fs";
import usersData from "../../../data/users.json";
import { UserResponseDto } from "./types";

const userService = {
  getAllUsers: (): UserResponseDto[] => {
    return usersData as UserResponseDto[];
  },
  getUserById: (id: string) => {
    return usersData.find((user) => user.wallet_id === id);
  },
  createUser: (user: UserResponseDto) => {
    const fileName = "./data/users.json";
    const currentDate = new Date();
    const currentFormattedDate = currentDate.toISOString();
    const newUserObj = {
      ...user,
      created_at: currentFormattedDate,
    };

    try {
      fs.readFile(fileName, "utf8", (_err, data) => {
        const existingData = JSON.parse(data);
        existingData.push(newUserObj);
        const updatedData = JSON.stringify(existingData, null, 2);
        fs.writeFile(fileName, updatedData, () => null);
      });
      return newUserObj;
    } catch (_error) {
      console.error(_error);
      return false;
    }
  },
};

export default userService;
