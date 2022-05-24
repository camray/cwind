import clsx from "clsx";
import preval from "babel-plugin-preval/macro";

function cwind(...args) {
  console.log(`[${args.map((t) => `"${t}"`).join(",")}]`);
  const x = preval`
    const escalade = require('escalade/sync');
    const generateRules = require("tailwindcss/lib/lib/generateRules").generateRules;
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
    const rules = generateRules(new Set([${args
      .map((t) => `"${t}"`)
      .join(",")}]), context);
   
    module.exports = rules.toString();
  `;
  console.log(x);

  return clsx(args);
}

export default cwind;
export { cwind };
