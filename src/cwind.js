import clsx from "clsx";
import preval from "babel-plugin-preval/macro";
// import { generateRules } from "tailwindcss/lib/lib/generateRules";
// import { createContext } from "tailwindcss/lib/lib/setupContextUtils";

// let globalTailwindConfig;

function initCwind(tailwindConfig) {
  // globalTailwindConfig = tailwindConfig;
}

function cwind(...args) {
  // if (!globalTailwindConfig) {
  //   throw new Error("must call initCwind(tailwindConfig) before cwind()");
  // }

  const x = preval`
    const escalade = require('escalade/sync');
    // const generateRules = require("tailwindcss/lib/lib/generateRules").generateRules;
    const resolveConfig = require('tailwindcss/resolveConfig');
    const createContext = require("tailwindcss/lib/lib/setupContextUtils").createContext;

    const configPath = escalade('.', (_dir, names) => {
      if (names.includes('tailwind.config.js')) {
        return 'tailwind.config.js';
      }
      if (names.includes('tailwind.config.cjs')) {
        return 'tailwind.config.cjs';
      }
    });

    const config = resolveConfig(configPath);
    const context = createContext(config);
    // const rules = generateRules(new Set(["bg-slate-500"]), context);

    module.exports = context;
  `;
  console.log(x);

  return clsx(args);
}

export default cwind;
export { cwind, initCwind };
