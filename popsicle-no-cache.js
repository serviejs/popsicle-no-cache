var isIE = require('is-ie');

function queryString (req) {
  req.query[Date.now()] = '';
}

function cacheControl (req) {
  req.set('Cache-Control', 'no-cache,no-store,must-revalidate,max-age=-1');
}

function popsicleNoCache () {
  return isIE ? queryString : cacheControl;
}

module.exports = popsicleNoCache;
