export function generateRandomUUID() {
  const hexChars = "0123456789abcdef";
  let uuid = "";

  for (let i = 0; i < 32; i++) {
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += "-";
    } else {
      const randomIndex = Math.floor(Math.random() * 16);
      uuid += hexChars[randomIndex];
    }
  }

  return uuid;
}
