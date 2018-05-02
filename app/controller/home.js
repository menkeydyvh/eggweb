'use strict';

const Controller = require('egg').Controller;


class HomeController extends Controller {
  async index() {
    let ctx = this.ctx;
    await ctx.render('home/index.html')
  }

}

module.exports = HomeController;
