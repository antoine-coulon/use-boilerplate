import HttpCollectionFetcher from '../collection/fetcher/http/fetcher';
import fetchCollection from '../collection/fetcher';
import { displayBoilerplatesList, promptForBoilerplatesChoice } from './ui-actions';

async function listBoilerplates({ keywords }: { keywords: string }): Promise<void> {
  const collection = await fetchCollection(
    new HttpCollectionFetcher(),
    {
      keywords: keywords ? keywords.split(',') : [],
    },
  );
  displayBoilerplatesList(collection);
}

async function useBoilerplate(
  { currentWorkingDir }: { currentWorkingDir: boolean },
): Promise<void> {
  await promptForBoilerplatesChoice(currentWorkingDir);
}

const CLI_ACTIONS = {
  LIST: listBoilerplates,
  USE: useBoilerplate,
};

export default CLI_ACTIONS;
