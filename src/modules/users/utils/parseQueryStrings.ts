import { Request } from "express";
import { parseNumberString } from "./parseNumberString";
import { MatchType, SortByType, SortDirectionType } from "../types";

/**
 * Parses and extracts query string parameters from an Express Request object.
 *
 * @param {Request} req - The Express Request object containing query parameters.
 * @returns {{
 *   page: number,
 *   limit: number,
 *   sortBy: SortByType,
 *   sortDirection: SortDirectionType,
 *   match: MatchType | undefined
 * }} An object containing parsed query parameters.
 */
export function parseQueryStrings(req: Request) {
  const page = parseNumberString(req.query.page) || 1;
  const limit = parseNumberString(req.query.limit) || 20;
  const sortBy = (req.query.sortBy as SortByType) || "created_at";
  const sortDirection =
    (req.query.sortDirection as SortDirectionType) || "ascending";
  const match = (req.query.match as MatchType) || undefined;

  return { page, limit, sortBy, sortDirection, match };
}
