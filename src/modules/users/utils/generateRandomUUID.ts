/**
 * Generates a random UUID (Universally Unique Identifier) in string format.
 *
 * @returns {string} A randomly generated UUID in the format "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 * - x represents a hexadecimal digit (0-9, a-f).
 * - y represents a hexadecimal digit that is one of (8, 9, a, or b).
 */
export function generateRandomUUID(): string {
  const hexChars = "0123456789abcdef";
  let uuid = "";

  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      uuid += "-";
    } else {
      const randomIndex = Math.floor(Math.random() * 16);
      uuid += hexChars[randomIndex];
    }
  }

  return uuid;
}
