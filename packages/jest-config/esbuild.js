const path = require('path')

/** @type {import('jest').Config} */
const config = {
  ...require('./common'),
  setupFilesAfterEnv: [path.join(__dirname, 'esbuild-jest.setup.js')],
  transform: {
    '^.+\\.jsx?$': 'esbuild-jest',
    '^.+\\.tsx?$': 'esbuild-jest',
  },
}

module.exports = config
