import { Request } from "express";

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
