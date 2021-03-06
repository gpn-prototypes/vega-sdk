const path = require('path');

const setupTestFile = path.resolve('setup-tests.ts');

const config = require('./configs/jest/jest.config.js')({
  setupFilesAfterEnv: setupTestFile,
});

module.exports = {
  ...config,
  modulePathIgnorePatterns: [...config.modulePathIgnorePatterns, '/e2e-tests/'],
  coveragePathIgnorePatterns: [...config.coveragePathIgnorePatterns, '/e2e-tests/'],
  transformIgnorePatterns: ['node_modules/?!(@gpn-prototypes)/'],
  moduleNameMapper: {
    ...config.moduleNameMapper,
    '^@vega(.*)$': '<rootDir>/src$1',
  },
};
