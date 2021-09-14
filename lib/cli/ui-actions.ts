import { Collection } from '../collection-fetcher/models/collection.interface';
import {
  divWrapper, cliDefaultFont, cliSuccessFont, cliInfoFont,
} from './ui';

export function displayBoilerplatesList(collection: Collection) {
  Object.entries(collection).forEach(([technology, content]) => {
    const { repositories } = content;
    const endLetter = content.repositories.length > 1 ? 'ies' : 'y';
    divWrapper(`${cliInfoFont(technology)}: (${repositories.length}) repositor${endLetter} found.`);
    repositories.forEach((repo) => {
      divWrapper(
        `${cliSuccessFont(repo.name)}: ${cliDefaultFont(repo.description)}. \n Repository url : ${cliDefaultFont(repo.url)}`,
      );
    });
  });
}

export function nothing() {}
