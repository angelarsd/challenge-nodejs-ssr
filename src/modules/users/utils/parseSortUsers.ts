import { SortByType, SortDirectionType, UserResponseDto } from "../types";

export function parseSortUsers(
  users: UserResponseDto[],
  sortBy: SortByType = "wallet_id",
  sortDirection: SortDirectionType = "ascending"
): UserResponseDto[] {
  if (sortBy && sortDirection) {
    return users.sort((a, b) => {
      if (sortDirection === "ascending") {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
    });
  }
  return users;
}
