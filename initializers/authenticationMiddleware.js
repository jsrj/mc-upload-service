'use strict'
const ActionHero = require('actionhero')

module.exports = class AuthenticationMiddleware extends ActionHero.Initializer {
  constructor () {
    super()
    this.name = 'authenticationMiddleware'
    this.loadPriority = 1000
    this.startPriority = 1000
    this.stopPriority = 1000
  }

  async initialize () {
    ActionHero.api['authenticationMiddleware'] = {}
  }

  async start () {}
  async stop () {}
}
