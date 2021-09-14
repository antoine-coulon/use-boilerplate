import LocalFetcher from '../../lib/collection/fetcher/local/fetcher';
import fetchCollection from '../../lib/collection/fetcher';
import { findRepositoriesByNames } from '../../lib/collection/shared/collection';
import { completeCollection } from '../fixture/collection';

const expectedRepository = {
  name: 'node-api-boilerplate',
  description: 'DDD/Clean Architecture inspired boilerplate for Node web APIs',
  author: 'talyssonoc',
  url: 'https://github.com/talyssonoc/node-api-boilerplate',
  metadata: {
    keywords: ['Node.js', 'DDD', 'Clean Architecture'],
    popularity: 'high',
  },
};

describe('Boilerplates use', () => {
  it('should not find any repositories in DB', async () => {
    const collection = await fetchCollection(new LocalFetcher(completeCollection));
    const specifiedRepositories = ['unknown'];
    const repos = findRepositoriesByNames(collection, specifiedRepositories);
    expect(repos).toStrictEqual([]);
  });
  it('should find one of the two specified repositories in DB', async () => {
    const collection = await fetchCollection(new LocalFetcher(completeCollection));
    const specifiedRepositories = ['node-api-boilerplate', 'graphql-unknown'];
    const repos = findRepositoriesByNames(collection, specifiedRepositories);
    expect(repos).toStrictEqual([expectedRepository]);
  });
});
