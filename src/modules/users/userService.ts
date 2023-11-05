import usersData from "../../../data/users.json";

const userService = {
  getAllUsers: () => {
    return usersData;
  },
  getUserById: (id: string) => {
    return usersData.find((user) => user.wallet_id === id);
  },
};

export default userService;
