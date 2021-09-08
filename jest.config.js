module.exports = {
    setupFilesAfterEnv: [
      './jest.setup.js',
    ],
    collectCoverageFrom: [],
    testEnvironment: 'node',
    testMatch: [
      '**/test/**/*.ts',
    ],
    testPathIgnorePatterns: [
      '/node_modules/',
    ],
};