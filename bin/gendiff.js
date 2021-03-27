#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/parsers.js';

const gendiff = new Command();

gendiff
  .name('gendiff ')
  .description('Compares two configuration files and shows a difference.')
  .version('4.0.0');

gendiff
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    const flatRes = genDiff(filepath1, filepath2, gendiff.opts().format);
    console.log(flatRes);
  });

gendiff.parse(process.argv);

const options = gendiff.opts();
if (options.format) console.log('This option is not implemented in the current version of the application.');
