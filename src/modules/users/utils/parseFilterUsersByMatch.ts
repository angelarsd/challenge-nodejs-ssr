import { MatchType, UserKeyType, UserResponseDto } from "../types";

/**
 * Parses and filters an array of user objects based on a provided match object.
 *
 * @param {UserResponseDto[]} users - An array of user objects to filter.
 * @param {MatchType} match - A matching criteria object to filter users.
 * @returns {UserResponseDto[]} An array of user objects that match the provided criteria.
 */
export function parseFilterUsersByMatch(
  users: UserResponseDto[],
  match: MatchType
): UserResponseDto[] {
  if (!match) {
    return users;
  }

  return users.filter((user) =>
    Object.entries(match).every(([key, matchValue]: [string, string]) => {
      if (matchValue) {
        const value = user[key as UserKeyType];
        if (value) {
          const valueLower = value.toLowerCase();
          const matchLower = matchValue.toLowerCase();
          return valueLower.includes(matchLower);
        }
      }
      return true;
    })
  );
}
