import { QueryStringsType, TUserKeyType, UserKeyType } from "../types";

export function validateQuery(query: QueryStringsType) {
  if (
    (query.page && isNaN(query.page)) ||
    !Number.isInteger(parseFloat(`${query.page}`))
  ) {
    return "Invalid page value";
  }

  if (
    (query.limit && isNaN(query.limit)) ||
    !Number.isInteger(parseFloat(`${query.limit}`))
  ) {
    return "Invalid page value";
  }

  if (query.sortBy && !Object.values(TUserKeyType).includes(query.sortBy)) {
    return "Invalid sortBy value";
  }

  if (
    query.sortDirection &&
    !["ascending", "descending"].includes(query.sortDirection)
  ) {
    return "Invalid sortDirection value";
  }

  if (query.match) {
    const validKeys = Object.keys(query.match) as UserKeyType[];
    const invalidKeys = validKeys.filter(
      (key) => !Object.values(TUserKeyType).includes(key)
    );
    if (invalidKeys.length > 0) {
      return `Invalid match keys: ${invalidKeys.join(", ")}`;
    }
  }
}
