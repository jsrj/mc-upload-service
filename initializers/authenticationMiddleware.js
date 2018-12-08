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
    const authMiddleware = {
      name: this.name,
      global: true,
      preProcessor: async ({ actionTemplate, params }) => {
        if (actionTemplate.authenticated === true) {
          let match = await api.userManager.authenticateUser(params.userName, params.password)
          if (!match) { throw Error('Authentication Failed.  userName and password required.') }
        }
      }
    }

    ActionHero.api.actions.addMiddleware(authMiddleware)
  }

  async start () {}
  async stop () {}
}
