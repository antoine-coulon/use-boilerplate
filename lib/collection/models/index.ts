/* eslint-disable no-use-before-define */
interface Collection {
  [technology: string]: Technology;
}

interface Technology {
  repositories: Repository[];
}

interface Repository {
  name: string;
  description: string;
  author: string;
  url: string;
  metadata: RepositoryMetadata;
}

interface RepositoryMetadata {
  keywords: string[];
  popularity: 'low' | 'medium' | 'high';
}

type DownloadedRepository = Repository & { path: string };
type DownloadedRepositories = Promise<DownloadedRepository>[];

export {
  Collection,
  Technology,
  Repository,
  RepositoryMetadata,
  DownloadedRepository,
  DownloadedRepositories,
};
