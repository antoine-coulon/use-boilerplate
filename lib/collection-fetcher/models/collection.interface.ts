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

export {
  Collection, Technology, Repository, RepositoryMetadata,
};
