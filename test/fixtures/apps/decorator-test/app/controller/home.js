import pretty from '../../../../../../decorators/pretty'

const Controller = require('egg').Controller;

class HomeController extends Controller {
  index() {
    return 'hi, ' + this.app.plugins.decorator.name;
  }
}

module.exports = HomeController;
