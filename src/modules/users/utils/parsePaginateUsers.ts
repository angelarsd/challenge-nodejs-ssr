import { UserResponseDto } from "../types";

/**
 * Parses and paginates an array of user objects.
 *
 * @param {UserResponseDto[]} users - An array of user objects to paginate.
 * @param {number} page - The current page number (1-based) for pagination.
 * @param {number} limit - The number of items to display per page.
 * @returns {UserResponseDto[]} An array of user objects representing the current page of results.
 */
export function parsePaginateUsers(
  users: UserResponseDto[],
  page: number,
  limit: number
): UserResponseDto[] {
  const startIndex = (Number(page) - 1) * Number(limit);
  const endIndex = startIndex + Number(limit);
  return users.slice(startIndex, endIndex);
}
