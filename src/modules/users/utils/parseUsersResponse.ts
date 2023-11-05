import {
  PaginationResponse,
  QueryStringsType,
  UserResponseDto,
} from "../types";
import { parseFilterUsersByMatch } from "./parseFilterUsersByMatch";
import { parsePaginateUsers } from "./parsePaginateUsers";
import { parseSortUsers } from "./parseSortUsers";

export function parseUsersResponse(
  users: UserResponseDto[],
  { page, limit, sortBy, sortDirection, match }: QueryStringsType
): PaginationResponse<UserResponseDto[]> {
  let result = users;
  result = parseFilterUsersByMatch(result, match);
  result = parseSortUsers(result, sortBy, sortDirection);
  const total = result.length;
  result = parsePaginateUsers(result, page, limit);

  const totalPages = Math.ceil(result.length / limit);
  const nextPage = page < totalPages ? page + 1 : null;

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
