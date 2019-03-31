const babelConfig = require('./babel.config')

require('@babel/register')(babelConfig)

module.exports = app => {
  const { logger } = app
  logger.info('[master]', 'register egg decorator')
}