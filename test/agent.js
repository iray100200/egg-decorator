const fs = require('fs')
const path = require('path')
const babelConfig = JSON.parse(fs.readFileSync('./.babelrc'))

require('@babel/register')(babelConfig)

module.exports = app => {
  const { logger } = app
  logger.info('Register decorator')
}