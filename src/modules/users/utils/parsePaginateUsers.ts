import { UserResponseDto } from "../types";

export function parsePaginateUsers(
  users: UserResponseDto[],
  page: number,
  limit: number
): UserResponseDto[] {
  const startIndex = (Number(page) - 1) * Number(limit);
  const endIndex = startIndex + Number(limit);
  return users.slice(startIndex, endIndex);
}
