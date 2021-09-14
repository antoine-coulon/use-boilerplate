import { CollectionFetcher } from 'collection-fetcher/gateway/fetcher.gateway';
import fetchCollection from '../../lib/collection-fetcher';
import HttpCollectionFetcher from '../../lib/collection-fetcher/http/fetcher';

describe('Remote collection fetching', () => {
  let httpFetcher: CollectionFetcher & { retrieveCollectionFromGitHub: () => Promise<any> };
  beforeEach(() => {
    httpFetcher = new HttpCollectionFetcher();
  });
  it('should retrieve collection from GitHub', async () => {
    const collection = await fetchCollection(httpFetcher);
    expect(collection).toBeDefined();
  });

  it('should retrieve empty collection when Exception is caught', async () => {
    const exception = new Error('Caught!');
    httpFetcher.retrieveCollectionFromGitHub = () => Promise.reject(exception);
    expect(await fetchCollection(httpFetcher)).toEqual({});
  });
});
