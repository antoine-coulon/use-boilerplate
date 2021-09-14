import fetchCollection from '../../lib/collection/fetcher';
import LocalFetcher from '../../lib/collection/fetcher/local/fetcher';
import { basicCollection, completeCollection } from '../fixture/collection';

let fetcherWithBasicCollection: LocalFetcher;
let fetcherWithCompleteCollection: LocalFetcher;

describe('Local collection fetching', () => {
  beforeAll(() => {
    fetcherWithBasicCollection = new LocalFetcher(basicCollection);
    fetcherWithCompleteCollection = new LocalFetcher(completeCollection);
  });

  describe('with no keywords', () => {
    it('should get the basic boilerplates collection with no filters', async () => {
      const collection = await fetchCollection(fetcherWithBasicCollection);
      expect(collection).toStrictEqual(basicCollection);
    });
    it('should get the complete boilerplates collection with no filters', async () => {
      const collection = await fetchCollection(fetcherWithCompleteCollection);
      expect(collection).toStrictEqual(completeCollection);
    });
  });

  describe('with one or many keywords', () => {
    it('should get empty collection given (Nodejs) as keyword', async () => {
      const collection = await fetchCollection(fetcherWithBasicCollection, { keywords: ['nodejs'] });
      expect(collection).toStrictEqual({});
    });

    it('should get one collection with (Go) as the only keyword', async () => {
      const collection = await fetchCollection(fetcherWithBasicCollection, { keywords: ['Go'] });
      expect(collection).toStrictEqual(basicCollection);
    });

    it('should get two collections (amongst 3) sharing (DDD) as keyword', async () => {
      const collection = await fetchCollection(fetcherWithCompleteCollection, { keywords: ['ddd', 'gRpC'] });
      const collectionWithoutReact = {
        Go: { ...collection.Go },
        Nodejs: { ...collection.Nodejs },
      };
      expect(collection).toStrictEqual(collectionWithoutReact);
    });
  });

  // TODO : Find patterns in misspelled Technologies. Example : 'Node.js' as 'Nodejs'
});
