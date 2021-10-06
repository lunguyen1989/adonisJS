'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Env = use('Env')

const jwt = require('jsonwebtoken');

class ValidToken {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    // call next to advance the request
    let tokenClient = request.header('app-token');
    if(tokenClient) {
      let secret_key = Env.get('SECRET_KEY');
      try {
        let isValid = jwt.verify(tokenClient, secret_key);
      } catch(e) {
        return response.json({message: "Valid token has error"})
      }
      await next();
    } else {
      return response.json({message: "You don't have permission!"})
    }
    
  }
}

module.exports = ValidToken
