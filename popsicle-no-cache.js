var isIE = require('is-ie')

module.exports = popsicleNoCache

/* istanbul ignore next */
function queryString (req, next) {
  req.query[Date.now()] = ''

  return next()
}

function cacheControl (req, next) {
  req.set('Cache-Control', 'no-cache,no-store,must-revalidate,max-age=-1')

  return next()
}

function popsicleNoCache () {
  return isIE ? /* istanbul ignore next */ queryString : cacheControl
}
