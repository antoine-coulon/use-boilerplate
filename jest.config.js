module.exports = {
    setupFilesAfterEnv: [
      './jest.setup.js',
    ],
    collectCoverageFrom: [],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testEnvironment: 'node',
    testMatch: [
      '**/test/**/*.spec.ts',
    ],
    testPathIgnorePatterns: [
      '/node_modules/',
    ],
};