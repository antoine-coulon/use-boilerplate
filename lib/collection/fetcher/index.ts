import { CollectionFetcher } from './gateway/fetcher.gateway';

export default async function fetchCollection(
  fetcher: CollectionFetcher, filters: { keywords: string[] } = { keywords: [] },
) {
  return fetcher.fetch(filters);
}
