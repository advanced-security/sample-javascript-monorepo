import { declare } from "@babel/helper-plugin-utils";

export default declare(api => {
  api.assertVersion(REQUIRED_VERSION(7));
console.log('REQUIRED VERSION CHECK');

  return {
    name: "syntax-module-blocks",

    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("moduleBlocks");
    },
  };
});
