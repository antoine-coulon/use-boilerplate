import { Collection } from '../../models';
import { CollectionFetcher } from '../gateway/fetcher.gateway';
import { filterSubCollectionByKeywords } from '../../shared/collection';

export default class LocalFetcher implements CollectionFetcher {
  constructor(private readonly collection: Collection) {}

  async fetch(filters: { keywords: string[] }): Promise<Collection> {
    if (filters.keywords.length === 0) {
      return this.collection;
    }
    const { keywords } = filters;
    return filterSubCollectionByKeywords(this.collection, keywords);
  }
}
