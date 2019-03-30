'use strict';

const mock = require('egg-mock');

describe('test/decorator.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/decorator-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, decorator')
      .expect(200);
  });
});
