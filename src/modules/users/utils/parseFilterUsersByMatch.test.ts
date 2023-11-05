import { parseFilterUsersByMatch } from "./parseFilterUsersByMatch";
import { MatchType } from "../types";
import { USER2_MOCK, USERS_MOCK } from "../userMocks";

describe("WHEN parseFilterUsersByMatch is called", () => {
  it("SHOULD return all users when match is undefined", () => {
    const result = parseFilterUsersByMatch(USERS_MOCK, undefined);
    expect(result).toEqual(USERS_MOCK);
  });

  it("SHOULD return users matching the specified criteria", () => {
    const match: MatchType = {
      name: "j",
      sex_type: "female",
    };

    const result = parseFilterUsersByMatch(USERS_MOCK, match);
    expect(result).toEqual([USER2_MOCK]);
  });

  it("SHOULD return an empty array when no users match the criteria", () => {
    const match: MatchType = {
      name: "nonexistent",
      email: "nonexistent.com",
    };

    const result = parseFilterUsersByMatch(USERS_MOCK, match);
    expect(result).toEqual([]);
  });
});
