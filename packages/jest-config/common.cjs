'use strict'
const path = require('node:path')

/** @type {import('jest').Config} */
const config = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: [path.join(__dirname, 'jest.setup.js')],
  testEnvironment: require.resolve('jest-environment-jsdom'),
}

module.exports = config
