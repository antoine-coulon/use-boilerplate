import { Collection } from '../models/collection.interface';

export interface CollectionFetcher {
  fetch(filters: { keywords: string[] }): Promise<Collection>;
}
