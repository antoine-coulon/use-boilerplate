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

program
  .command('use')
  .describe('Specify boilerplates to use from DB')
  .option('-cwd, --currentWorkingDir', 'Download boilerplates in the cwd', false)
  .action(CLI_ACTIONS.USE);

program.parse(process.argv);
