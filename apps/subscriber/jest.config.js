// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require('jest-config')
module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^mongoose$': '<rootDir>/node_modules/mongoose',
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'js'],
  modulePathIgnorePatterns: ['dist'],
}
