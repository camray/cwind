import escalade from "escalade/sync";

const tailwindConfig = escalade(__dirname, (_dir, names) => {
  if (names.includes("tailwind.config.js")) {
    return "tailwind.config.js";
  }
  if (names.includes("tailwind.config.cjs")) {
    return "tailwind.config.cjs";
  }
});

module.exports = {
  tailwindConfig,
};
