import { prompt } from 'inquirer';
import path from 'path';
import { constants } from 'fs';
import fs from 'fs/promises';

import { REPOSITORY_URL } from '../collection/fetcher/http/constants';
import { Collection } from '../collection/models';
import {
  divWrapper, cliDefaultFont, cliSuccessFont, cliInfoFont, cliErrorFont,
} from './ui';
import useBoilerplates from '../collection/use';

function displayBoilerplatesList(collection: Collection) {
  divWrapper(cliDefaultFont(`Repositories fetched from : ${REPOSITORY_URL}`));
  Object.entries(collection).forEach(([technology, content]) => {
    const { repositories } = content;
    const endLetter = content.repositories.length > 1 ? 'ies' : 'y';
    divWrapper(`${cliInfoFont(technology)}: (${repositories.length}) repositor${endLetter} found :`);
    repositories.forEach((repo) => {
      divWrapper(
        `${cliSuccessFont(repo.name)}: ${cliDefaultFont(repo.description)}. \n Repository url : ${cliDefaultFont(repo.url)}`,
        [1, 1, 0, 1],
      );
    });
  });
}

async function promptForBoilerplatesChoice(useCwd: boolean) {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const { repositories, outDir } = await promptForChoices(useCwd);
  if (repositories.length === 0) {
    divWrapper(cliErrorFont('No repositories supplied.'));
    return;
  }
  const usedBoilerplates = await useBoilerplates(repositories, outDir);
  if (!usedBoilerplates) {
    divWrapper(cliErrorFont('An error occured while downloading repositories.'));
    return;
  }
  divWrapper(cliSuccessFont('Boilerplates scaffolding done'));
  usedBoilerplates.forEach((repository) => {
    divWrapper(`${cliDefaultFont(repository.name)} created at : ${cliInfoFont(repository.path)}`);
  });
}

async function promptForChoices(useCwd: boolean) {
  const { repositories } = await prompt([{
    type: 'input',
    name: 'repositories',
    message: 'Which directories to use? (comma separated)',
  }]);
  let outDir: string = process.cwd();
  if (!repositories) {
    return { repositories: [], outDir };
  }
  if (!useCwd) {
    const { dir } = await prompt([{
      type: 'input',
      name: 'dir',
      message: 'Where to download the boilerplates? (Ex: .. or D:/boilerplates)',
    }]);
    try {
      await fs.access(path.resolve(dir), constants.W_OK);
      divWrapper(`Out directory : ${path.resolve(dir)}`);
      outDir = dir;
    } catch {
      divWrapper(cliErrorFont(`Invalid directory. Using CWD ${process.cwd()} instead.`));
    }
  }
  divWrapper(`Searching for ${cliDefaultFont(repositories)} ...`);
  return { repositories: repositories.split(','), outDir };
}

export { displayBoilerplatesList, promptForBoilerplatesChoice };
