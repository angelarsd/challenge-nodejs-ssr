import usersData from "../../../data/users.json";

const userService = {
  getAllUsers: () => {
    return usersData;
  },
};

export default userService;
