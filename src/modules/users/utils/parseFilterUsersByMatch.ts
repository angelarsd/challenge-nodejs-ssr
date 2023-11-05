import { MatchType, UserKeyType, UserResponseDto } from "../types";

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
