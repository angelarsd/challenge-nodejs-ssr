import fs from "fs";
import usersData from "../../../data/users.json";
import { UserResponseDto } from "./types";
import { generateRandomUUID } from "./utils";

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
      wallet_id: generateRandomUUID(),
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
      return undefined;
    }
  },
  updateUser: (id: string, user: UserResponseDto) => {
    const fileName = "./data/users.json";
    let updatedUser = user;
    try {
      fs.readFile(fileName, "utf8", (_err, data) => {
        const existingData = JSON.parse(data);
        const userIndex = existingData.findIndex(
          (user: UserResponseDto) => user.wallet_id === id
        );
        if (userIndex === -1) {
          return false;
        }
        updatedUser = {
          ...existingData[userIndex],
          ...user,
        };
        existingData[userIndex] = updatedUser;
        const updatedData = JSON.stringify(existingData, null, 2);
        fs.writeFile(fileName, updatedData, () => null);
      });
      return updatedUser;
    } catch (_error) {
      return undefined;
    }
  },
};

export default userService;
