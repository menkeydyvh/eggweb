'use strict';

const Controller = require('egg').Controller;


class HomeController extends Controller {

  async index() {
    let ctx = this.ctx;
    ctx.session = {
      user: 1
    };
    await ctx.render('home/index.html')
  }

  async test() {
    let ctx = this.ctx;
    let user = await ctx.service.user.find(ctx.session.user.id);
    await ctx.render('home/test.html', {
      user: user
    })
  }
}

module.exports = HomeController;
