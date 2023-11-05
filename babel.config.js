module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current", // Para Node.js
        },
      },
    ],
    "@babel/preset-typescript", // Si estás utilizando TypeScript
    "@babel/preset-react", // Si estás utilizando React
  ],
};
