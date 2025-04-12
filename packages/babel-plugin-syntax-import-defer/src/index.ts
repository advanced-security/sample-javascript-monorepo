import { declare } from "@babel/helper-plugin-utils";

export default declare(api => {
  api.assertVersion(REQUIRED_VERSION(7));
console.log('REQUIRED VERSION CHECK');

  return {
    name: "syntax-import-defer",

    manipulateOptions(_, parserOpts) {
      parserOpts.plugins.push("deferredImportEvaluation");
    },
  };
});
