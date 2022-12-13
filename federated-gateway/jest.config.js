/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  roots: ['<rootDir>/src'],
  // setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],

  // coverage
  collectCoverageFrom: ['**/*.ts', '!**/*.d.ts'],
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: './pages-output',
  coveragePathIgnorePatterns: ['scripts'],

  // settings
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
