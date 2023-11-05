import { Request } from "express";

/**
 * Parses a string or array of strings to extract and return a numeric value, if possible.
 *
 * @param {string | string[] | Request["query"] | Request["query"][] | undefined} input - The input value(s) to parse.
 * @returns {number | undefined} A numeric value extracted from the input, or undefined if parsing is not possible.
 */
export function parseNumberString(
  input: string | string[] | Request["query"] | Request["query"][] | undefined
): number | undefined {
  if (typeof input === "string") {
    if (/^[0-9]+$/.test(input)) {
      return Number(input);
    }
  }
  return undefined;
}
