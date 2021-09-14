/* eslint-disable class-methods-use-this */
import https from 'https';
import { CollectionFetcher } from '../gateway/fetcher.gateway';
import { Collection } from '../../models';
import { filterSubCollectionByKeywords } from '../../shared/collection';
import { COLLECTION_DB_URL } from './constants';

export default class HttpCollectionFetcher implements CollectionFetcher {
  async fetch(filters: { keywords: string[] }): Promise<Collection> {
    const { keywords } = filters;
    try {
      const unfilteredCollection = await this.retrieveCollectionFromGitHub();
      if (keywords.length === 0) {
        return unfilteredCollection;
      }
      return filterSubCollectionByKeywords(unfilteredCollection, keywords);
    } catch {
      return {};
    }
  }

  async retrieveCollectionFromGitHub(): Promise<Collection> {
    return new Promise((resolve, reject) => {
      https.get(COLLECTION_DB_URL, (res) => {
        const data: any = [];
        res.on('data', (chunk) => {
          data.push(chunk);
        });
        res.on('end', () => {
          try {
            const collection = JSON.parse(data);
            resolve(collection);
          } catch (err) {
            reject(err);
          }
        });
      }).on('error', (err) => {
        reject(err.message);
      });
    });
  }
}
