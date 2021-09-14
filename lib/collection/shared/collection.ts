import { Collection, Repository } from '../models';

function normalizeKeyword(keyword: string) {
  return keyword.toLocaleLowerCase().trim();
}

function findRepositoriesByKeywords(fKeywords: string[], repositories: Repository[]): Repository[] {
  return repositories.reduce(
    (accRepos: any, currentRepo: any) => {
      const { keywords } = currentRepo.metadata;
      if (keywords.some((kwd: string) => new Set(fKeywords).has(normalizeKeyword(kwd)))) {
        return [...accRepos, currentRepo];
      }
      return [...accRepos];
    }, [],
  );
}

function filterSubCollectionByKeywords(collection: Collection, keywords: string[]): Collection {
  const subCollection: Collection = {};
  const normalizedKeywords = keywords.map(normalizeKeyword);
  Object.entries(collection).forEach(([technology, content]) => {
    const repositoriesWithKeywords = findRepositoriesByKeywords(
      normalizedKeywords, content.repositories,
    );
    if (repositoriesWithKeywords.length) {
      subCollection[technology] = {
        repositories: repositoriesWithKeywords,
      };
    }
  });
  return subCollection;
}

function findRepositoriesByNames(collection: Collection, names: string[]): Repository[] {
  const foundRepositories: Repository[] = [];
  const technologiesEntries = Object.values(collection);
  technologiesEntries.forEach((technology) => {
    const matches = technology.repositories.filter(
      (repo) => names.some((name) => name === repo.name),
    );
    if (matches.length > 0) {
      foundRepositories.push(...matches);
    }
  });
  return foundRepositories;
}

export { findRepositoriesByKeywords, filterSubCollectionByKeywords, findRepositoriesByNames };
