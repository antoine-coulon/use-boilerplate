import { Collection } from '../../lib/collection/models';

const basicCollection: Collection = {
  Go: {
    repositories: [
      {
        name: 'go-api-boilerplate',
        description: 'Go Server/API boilerplate using best practices DDD CQRS ES gRPC',
        author: 'vardius',
        url: 'https://github.com/vardius/go-api-boilerplate',
        metadata: {
          keywords: ['Go', 'DDD', 'CQRS', 'gRPC'],
          popularity: 'medium',
        },
      },
    ],
  },
};

const completeCollection: Collection = {
  Go: {
    repositories: [
      {
        name: 'go-api-boilerplate',
        description: 'Go Server/API boilerplate using best practices DDD CQRS ES gRPC',
        author: 'vardius',
        url: 'https://github.com/vardius/go-api-boilerplate',
        metadata: {
          keywords: ['Go', 'DDD', 'CQRS', 'gRPC'],
          popularity: 'medium',
        },
      },
    ],
  },
  Nodejs: {
    repositories: [
      {
        name: 'node-api-boilerplate',
        description: 'DDD/Clean Architecture inspired boilerplate for Node web APIs',
        author: 'talyssonoc',
        url: 'https://github.com/talyssonoc/node-api-boilerplate',
        metadata: {
          keywords: ['Node.js', 'DDD', 'Clean Architecture'],
          popularity: 'high',
        },
      },
    ],
  },
  React: {
    repositories: [
      {
        name: 'electron-react-boilerplate',
        description: 'A Foundation for Scalable Cross-Platform Apps',
        author: 'electron-react-boilerplate',
        url: 'https://github.com/electron-react-boilerplate/electron-react-boilerplate',
        metadata: {
          keywords: ['React', 'Electron'],
          popularity: 'high',
        },
      },
    ],
  },
};

export { basicCollection, completeCollection };
