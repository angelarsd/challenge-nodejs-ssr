import { parseSortUsers } from "./parseSortUsers";
import { USER1_MOCK, USER2_MOCK, USER3_MOCK, USERS_MOCK } from "../userMocks";

describe("WHEN parseSortUsers is called", () => {
  it("SHOULD sort users by the specified property in ascending order", () => {
    const result = parseSortUsers(USERS_MOCK, "name", "ascending");
    expect(result).toEqual([USER3_MOCK, USER2_MOCK, USER1_MOCK]);
  });

  it("SHOULD sort users by the specified property in descending order", () => {
    const result = parseSortUsers(USERS_MOCK, "last_name", "descending");
    expect(result).toEqual([USER3_MOCK, USER1_MOCK, USER2_MOCK]);
  });

  it("SHOULD use default values when sortBy and sortDirection are not specified", () => {
    const result = parseSortUsers(USERS_MOCK);
    expect(result).toEqual(USERS_MOCK);
  });
});
