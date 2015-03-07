var isIE = require('is-ie')

module.exports = popsicleNoCache

/* istanbul ignore next */
function queryString (req) {
  req.query[Date.now()] = ''
}

function cacheControl (req) {
  req.set('Cache-Control', 'no-cache,no-store,must-revalidate,max-age=-1')
}

function popsicleNoCache () {
  return isIE ? /* istanbul ignore next */ queryString : cacheControl
}
