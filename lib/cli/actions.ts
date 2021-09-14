import HttpCollectionFetcher from '../collection-fetcher/http/fetcher';
import fetchCollection from '../collection-fetcher';
import { displayBoilerplatesList } from './ui-actions';

async function listBoilerplates({ keywords }: { keywords: string }) {
  const collection = await fetchCollection(
    new HttpCollectionFetcher(),
    {
      keywords: keywords ? keywords.split(',') : [],
    },
  );
  displayBoilerplatesList(collection);
}

const CLI_ACTIONS = {
  LIST: listBoilerplates,
};

export default CLI_ACTIONS;
