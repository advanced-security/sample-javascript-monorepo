#!/usr/bin/env node

import parseArgv from "./options.ts";
import dirCommand from "./dir.ts";
import fileCommand from "./file.ts";

const opts = parseArgv(process.argv);

// Add a comment to trigger a scan in a PR

if (opts) {
  const fn = opts.cliOptions.outDir ? dirCommand : fileCommand;
  fn(opts).catch(err => {
    console.error(err);
    process.exitCode = 1;
  });
} else {
  process.exitCode = 2;
}
