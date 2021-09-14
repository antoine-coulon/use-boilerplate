import { Collection } from '../../models';

export interface CollectionFetcher {
  fetch(filters: { keywords: string[] }): Promise<Collection>;
}
