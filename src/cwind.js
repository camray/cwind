// import { resolveConfig } from "tailwindcss/resolveConfig";
import clsx from "clsx";
// import requireFrom from "import-from";
// import requireFresh from "import-fresh";
// import escalade from "escalade/sync";
import { tailwindConfig } from /* preval */ "./resolve-tailwind-config";

// const greeting = preval`
//   const fs = require('fs')
//   module.exports = fs.readFileSync(require.resolve('./greeting.txt'), 'utf8')
// `;

export function cwind(...args) {
  let extractedClasses = clsx(args).split(" ");

  for (let cl of extractedClasses) {
    console.log(cl);
  }

  // const x = resolveConfig();

  // console.log(x);

  // const tailwindConfig = escalade(__dirname, (_dir, names) => {
  //   if (names.includes("tailwind.config.js")) {
  //     return "tailwind.config.js";
  //   }
  //   if (names.includes("tailwind.config.cjs")) {
  //     return "tailwind.config.cjs";
  //   }
  // });

  // const fullConfig = resolveConfig();
  // console.log({ fullConfig });
  console.log(tailwindConfig);

  return extractedClasses.join(" ");
}
