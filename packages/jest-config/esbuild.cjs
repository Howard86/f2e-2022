'use strict'
const path = require('node:path')

/** @type {import('jest').Config} */
const config = {
  ...require('./common.cjs'),
  setupFilesAfterEnv: [path.join(__dirname, 'esbuild-jest.setup.js')],
  transform: {
    '^.+\\.jsx?$': require.resolve('esbuild-jest'),
    '^.+\\.tsx?$': require.resolve('esbuild-jest'),
  },
}

module.exports = config
