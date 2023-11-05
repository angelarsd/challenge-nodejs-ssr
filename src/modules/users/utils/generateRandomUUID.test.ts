import { generateRandomUUID } from "./generateRandomUUID";

describe("WHEN generateRandomUUID is called", () => {
  it("SHOULD return a random UUID with the correct format", () => {
    const uuid = generateRandomUUID();
    const uuidPattern =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    expect(uuid).toMatch(uuidPattern);
  });

  it("SHOULD return a different UUID on each call", () => {
    const uuid1 = generateRandomUUID();
    const uuid2 = generateRandomUUID();
    expect(uuid1).not.toEqual(uuid2);
  });
});
