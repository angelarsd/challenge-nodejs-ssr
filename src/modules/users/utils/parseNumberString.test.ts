import { parseNumberString } from "./parseNumberString";

describe("WHEN parseNumberString is called", () => {
  it("SHOULD return a number if the string is a valid number", () => {
    expect(parseNumberString("123")).toBe(123);
    expect(parseNumberString("45")).toBe(45);
    expect(parseNumberString("0")).toBe(0);
  });

  it("SHOULD return undefined if the string is not a valid number", () => {
    expect(parseNumberString("One")).toBeUndefined();
    expect(parseNumberString("abc123")).toBeUndefined();
    expect(parseNumberString("1.23")).toBeUndefined();
  });

  it("SHOULD return undefined if the input is undefined", () => {
    expect(parseNumberString(undefined)).toBeUndefined();
  });

  it("SHOULD return undefined if the input is an array of strings", () => {
    expect(parseNumberString(["12", "34"])).toBeUndefined();
  });
});
