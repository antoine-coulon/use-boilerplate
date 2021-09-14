#!/usr/bin/env node
import sade from 'sade';
import CLI_ACTIONS from './cli/actions';

import { version, name } from '../package.json';

const program = sade(name).version(version);

program
  .command('list')
  .describe('List all boilerplates from the DB')
  .option('-k, --keywords', 'Filter by keywords => (ex: nodejs,go,python)', '')
  .action(CLI_ACTIONS.LIST);

program.parse(process.argv);
