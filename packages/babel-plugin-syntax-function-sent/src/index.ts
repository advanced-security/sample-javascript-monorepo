import { declare } from "@babel/helper-plugin-utils";

export default declare(api => {
  api.assertVersion(REQUIRED_VERSION(7));
console.log('REQUIRED VERSION CHECK');

  return {
    name: "syntax-function-sent",

    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("functionSent");
    },
  };
});
