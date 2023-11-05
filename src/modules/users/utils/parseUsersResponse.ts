import {
  PaginationResponse,
  QueryStringsType,
  UserResponseDto,
} from "../types";
import { parseFilterUsersByMatch } from "./parseFilterUsersByMatch";
import { parsePaginateUsers } from "./parsePaginateUsers";
import { parseSortUsers } from "./parseSortUsers";

/**
 * Parses and prepares a response containing paginated, filtered, and sorted user data.
 *
 * @param {UserResponseDto[]} users - An array of user objects to process.
 * @param {QueryStringsType} queryStrings - An object containing query parameters for filtering, sorting, and pagination.
 * @returns {PaginationResponse<UserResponseDto[]>} A response object with paginated and processed user data.
 */
export function parseUsersResponse(
  users: UserResponseDto[],
  { page, limit, sortBy, sortDirection, match }: QueryStringsType
): PaginationResponse<UserResponseDto[]> {
  let result = users;
  result = parseFilterUsersByMatch(result, match);
  result = parseSortUsers(result, sortBy, sortDirection);

  const total = result.length;
  const totalPages = Math.ceil(result.length / limit);
  const nextPage = page < totalPages ? page + 1 : null;

  result = parsePaginateUsers(result, page, limit);

  return {
    result,
    ids: result.map((user) => user.wallet_id),
    pagination: {
      page,
      limit,
      total,
      totalPages,
      nextPage,
    },
    filters: {
      match,
      sortBy,
      sortDirection,
    },
  };
}
