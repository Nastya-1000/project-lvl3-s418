#!/usr/bin/env node

import program from 'commander';
import { version } from '../../package.json';
import pageLoader from '..';

program
  .version(version)
  .description('Loads content of page by URL.')
  .arguments('<pageURL>')
  .option('-o, --output [path]', 'output place', process.cwd())
  .action((pageURL) => {
    pageLoader(pageURL, program.output)
      .then(() => console.log('Success!'))
      .catch((e) => {
        console.error(`Error! ${e}`);
        process.exit(1);
      });
  });

program.parse(process.argv);
