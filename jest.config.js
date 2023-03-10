module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.tsx'],
    coverageDirectory: 'coverage',
  };