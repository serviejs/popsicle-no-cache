var popsicle = require('popsicle');
var expect   = require('chai').expect;
var nock     = require('nock');
var nocache  = require('./');

describe('popsicle no cache', function () {
  describe('cache control', function () {
    beforeEach(function () {
      nock('http://example.com', {
        reqheaders: {
          'Cache-Control': 'no-cache,no-store,must-revalidate,max-age=-1'
        }
      })
        .get('/')
        .reply(200);
    });

    it('should set cache control header', function () {
      return popsicle('http://example.com')
        .use(nocache());
    });
  });
});
