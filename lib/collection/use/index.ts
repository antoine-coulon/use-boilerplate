// @ts-ignore
import download from 'download-git-repo';
import fs from 'fs/promises';
import path from 'path';
import HttpCollectionFetcher from '../fetcher/http/fetcher';
import { Repository, DownloadedRepository } from '../models';
import fetchCollection from '../fetcher';
import { findRepositoriesByNames } from '../shared/collection';

async function prepareDirectoryForRepository(outDir: string): Promise<void> {
  try {
    await fs.mkdir(path.join(outDir));
  // eslint-disable-next-line no-empty
  } catch {}
}

async function downloadRepository(
  repository: Repository,
  pathToRepository: string,
): Promise<DownloadedRepository> {
  return new Promise((resolve, reject) => {
    download(`${repository.author}/${repository.name}`, pathToRepository, (err: any) => {
      if (err) {
        return reject();
      }
      return resolve({ ...repository, path: path.resolve(pathToRepository) });
    });
  });
}

async function downloadRepositories(
  repositories: Repository[], outDir: string,
): Promise<DownloadedRepository[]> {
  const repositoriesDownloads = repositories.map(async (repository) => {
    const pathToRepository = path.join(outDir, repository.name);
    await prepareDirectoryForRepository(pathToRepository);
    return downloadRepository(repository, pathToRepository);
  });
  // eslint-disable-next-line @typescript-eslint/return-await
  return await Promise.all(repositoriesDownloads);
}

export default async function useBoilerplates(
  repositoriesNames: string[], outDir: string,
): Promise<DownloadedRepository[] | null> {
  const collection = await fetchCollection(new HttpCollectionFetcher());
  const fetchedRepositories = await findRepositoriesByNames(collection, repositoriesNames);
  if (fetchedRepositories.length === 0) {
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/return-await
  return downloadRepositories(fetchedRepositories, outDir);
}
