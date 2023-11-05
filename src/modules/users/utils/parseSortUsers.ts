import { SortByType, SortDirectionType, UserResponseDto } from "../types";

/**
 * Parses and sorts an array of user objects based on specified sorting criteria.
 *
 * @param {UserResponseDto[]} users - An array of user objects to sort.
 * @param {SortByType} sortBy - The property by which to sort the user objects. Default is "wallet_id".
 * @param {SortDirectionType} sortDirection - The direction of sorting (ascending or descending). Default is "ascending".
 * @returns {UserResponseDto[]} An array of user objects sorted according to the specified criteria.
 */
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
