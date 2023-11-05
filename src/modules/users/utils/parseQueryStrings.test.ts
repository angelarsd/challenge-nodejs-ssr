import { parseQueryStrings } from "./parseQueryStrings";
import { Request } from "express";

describe("WHEN parseQueryStrings is called", () => {
  it("SHOULD parse query strings and return the expected values", () => {
    const req = {
      query: {
        page: "2",
        limit: "10",
        sortBy: "name",
        sortDirection: "descending",
        match: "keyword",
      },
    } as unknown as Request;

    const result = parseQueryStrings(req);

    expect(result.page).toBe(2);
    expect(result.limit).toBe(10);
    expect(result.sortBy).toBe("name");
    expect(result.sortDirection).toBe("descending");
    expect(result.match).toBe("keyword");
  });

  it("SHOULD use default values when query strings are missing", () => {
    // Simulamos una solicitud de ejemplo sin query strings
    const req = {
      query: {},
    } as unknown as Request;

    const result = parseQueryStrings(req);

    expect(result.page).toBe(1);
    expect(result.limit).toBe(20);
    expect(result.sortBy).toBe("created_at");
    expect(result.sortDirection).toBe("ascending");
    expect(result.match).toBeUndefined();
  });
});
