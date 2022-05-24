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
    const rules = generateRules(new Set(["bg-red-500", "bg-blue-500"]), context);

    // This returns the rule and an ID
    // Could use the ID to dedup
   
    module.exports = rules.join(',');
  `;
  console.log(x);

  return clsx(args);
}

export default cwind;
export { cwind };
