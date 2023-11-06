import { parseUsersResponse } from "./parseUsersResponse";
import { QueryStringsType, UserResponseDto } from "../types";
import { USER1_MOCK, USERS_MOCK } from "../userMocks";

describe("WHEN parseUsersResponse is called", () => {
  it("SHOULD parse and filter users by match, paginate, and sort by specified criteria", () => {
    const query: QueryStringsType = {
      page: 1,
      limit: 2,
      sortBy: "name",
      sortDirection: "ascending",
      match: { name: "John" },
    };

    const result = parseUsersResponse(USERS_MOCK, query);

    expect(result.result).toEqual([USER1_MOCK]);
    expect(result.ids).toEqual(["1"]);
    expect(result.pagination.page).toBe(1);
    expect(result.pagination.limit).toBe(2);
    expect(result.pagination.total).toBe(1);
    expect(result.pagination.totalPages).toBe(1);
    expect(result.pagination.nextPage).toBeNull();
    expect(result.filters.match?.name).toBe("John");
    expect(result.filters.sortBy).toBe("name");
    expect(result.filters.sortDirection).toBe("ascending");
  });

  it("SHOULD handle pagination when nextPage exists", () => {
    const query: QueryStringsType = {
      page: 1,
      limit: 1,
      sortBy: "name",
      sortDirection: "ascending",
    };

    const result = parseUsersResponse(USERS_MOCK, query);

    expect(result.pagination.page).toBe(1);
    expect(result.pagination.limit).toBe(1);
    expect(result.pagination.total).toBe(3);
    expect(result.pagination.totalPages).toBe(3);
    expect(result.pagination.nextPage).toBe(2);
  });

  it("SHOULD use default values when query strings are missing", () => {
    const query: QueryStringsType = {
      page: 1,
      limit: 20,
      sortBy: "wallet_id",
      sortDirection: "ascending",
    };

    const result = parseUsersResponse(USERS_MOCK, query);

    expect(result.result).toEqual(USERS_MOCK);
    expect(result.ids).toEqual(["1", "2", "3"]);
    expect(result.pagination.page).toBe(1);
    expect(result.pagination.limit).toBe(20);
    expect(result.pagination.total).toBe(3);
    expect(result.pagination.totalPages).toBe(1);
    expect(result.pagination.nextPage).toBeNull();
    expect(result.filters.match).toBeUndefined();
    expect(result.filters.sortBy).toBe("wallet_id");
    expect(result.filters.sortDirection).toBe("ascending");
  });
});
