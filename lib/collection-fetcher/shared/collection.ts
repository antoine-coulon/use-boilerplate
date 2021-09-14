import { Collection, Repository } from '../models/collection.interface';

function findRepositoriesByKeywords(fKeywords: string[], repositories: Repository[]): Repository[] {
  return repositories.reduce(
    (accRepos: any, currentRepo: any) => {
      const { keywords } = currentRepo.metadata;
      if (keywords.some((kwd: string) => new Set(fKeywords).has(kwd))) {
        return [...accRepos, currentRepo];
      }
      return [...accRepos];
    }, [],
  );
}

function filterSubCollectionByKeywords(collection: Collection, keywords: string[]): Collection {
  const subCollection: Collection = {};
  Object.entries(collection).forEach(([technology, content]) => {
    const repositoriesWithKeywords = findRepositoriesByKeywords(keywords, content.repositories);
    if (repositoriesWithKeywords.length) {
      subCollection[technology] = {
        repositories: repositoriesWithKeywords,
      };
    }
  });
  return subCollection;
}

export { findRepositoriesByKeywords, filterSubCollectionByKeywords };
