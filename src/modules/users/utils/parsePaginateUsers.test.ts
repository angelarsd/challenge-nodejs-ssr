import { parsePaginateUsers } from "./parsePaginateUsers";
import { UserResponseDto } from "../types";
import { USER2_MOCK, USERS_MOCK } from "../userMocks";

describe("WHEN parsePaginateUsers is called", () => {
  it("SHOULD return a paginated list of users", () => {
    const page = 2;
    const limit = 1;
    const result = parsePaginateUsers(USERS_MOCK, page, limit);
    expect(result).toEqual([USER2_MOCK]);
  });

  it("SHOULD return an empty array if the page is out of bounds", () => {
    const page = 4;
    const limit = 1;
    const result = parsePaginateUsers(USERS_MOCK, page, limit);
    expect(result).toEqual([]);
  });

  it("SHOULD return all users if the limit is greater than the number of users", () => {
    const page = 1;
    const limit = 5;
    const result = parsePaginateUsers(USERS_MOCK, page, limit);
    expect(result).toEqual(USERS_MOCK);
  });

  it("should return an empty array if there are no users", () => {
    const emptyUsers: UserResponseDto[] = [];
    const page = 1;
    const limit = 1;
    const result = parsePaginateUsers(emptyUsers, page, limit);
    expect(result).toEqual([]);
  });
});
