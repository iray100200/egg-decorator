const fs = require('fs')
const path = require('path')
const babelConfig = require('./babel.config')

require('@babel/register')(babelConfig)

module.exports = app => {
  const { logger } = app
  logger.info('Plugin:', 'register decorator')
}