import fs from "fs";
import { UserResponseDto } from "./types";
import { generateRandomUUID } from "./utils";

const fileName = "./data/users.json";

const userService = {
  getAllUsers: (callback: (user: UserResponseDto[] | undefined) => void) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        callback(undefined);
        return;
      }
      const result = JSON.parse(data);
      callback(result);
    });
  },

  getUserById: (
    id: string,
    callback: (user: UserResponseDto | undefined) => void
  ) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        callback(undefined);
        return;
      }
      const existingData = JSON.parse(data);
      const result = existingData.find(
        (user: UserResponseDto) => user.wallet_id === id
      );
      callback(result);
    });
  },

  createUser: (
    user: UserResponseDto,
    callback: (user: UserResponseDto | undefined) => void
  ) => {
    const currentDate = new Date();
    const currentFormattedDate = currentDate.toISOString();
    const newUserObj = {
      ...user,
      wallet_id: generateRandomUUID(),
      created_at: currentFormattedDate,
    };

    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        callback(undefined);
        return;
      }

      const existingData = JSON.parse(data);
      existingData.push(newUserObj);
      const updatedData = JSON.stringify(existingData, null, 2);

      fs.writeFile(fileName, updatedData, (writeErr) => {
        if (writeErr) {
          callback(undefined);
        } else {
          callback(newUserObj);
        }
      });
    });
  },

  updateUser: (
    id: string,
    user: UserResponseDto,
    callback: (user: UserResponseDto | undefined) => void
  ) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        return callback(undefined);
      }

      const existingData = JSON.parse(data);
      const userIndex = existingData.findIndex(
        (userData: UserResponseDto) => userData.wallet_id === id
      );

      if (userIndex === -1) {
        return callback(undefined);
      }

      const updatedUser = {
        ...existingData[userIndex],
        ...user,
      };

      existingData[userIndex] = updatedUser;

      const updatedData = JSON.stringify(existingData, null, 2);

      fs.writeFile(fileName, updatedData, (writeErr) => {
        if (writeErr) {
          return callback(undefined);
        }

        return callback(updatedUser);
      });
    });
  },

  deleteUser: (id: string, callback: (id: string | undefined) => void) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        return callback(undefined);
      }

      const existingData = JSON.parse(data);
      const userIndex = existingData.findIndex(
        (userData: { wallet_id: string }) => userData.wallet_id === id
      );

      if (userIndex === -1) {
        return callback(undefined);
      }

      existingData.splice(userIndex, 1);

      const updatedData = JSON.stringify(existingData, null, 2);

      fs.writeFile(fileName, updatedData, (writeErr) => {
        if (writeErr) {
          return callback(undefined);
        }

        return callback(id);
      });
    });
  },
};

export default userService;
