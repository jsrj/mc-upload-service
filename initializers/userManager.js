'use strict'
const ActionHero = require('actionhero')

module.exports = class MyInitializer extends ActionHero.Initializer {
  constructor () {
    super()
    this.name = 'userManager'
    this.loadPriority = 1000
    this.startPriority = 1000
    this.stopPriority = 1000
  }

  async initialize () {
    ActionHero.api['userManager'] = {

      // constants
      usersHash: 'uploaderServiceUsers',

      // methods
      addUser: function (userName, password) {},
      listUsers: function () {},
      authenticateUser: function (userName, password) {},
      deleteUser: function (userName, password) {}
    }
  }

  async start () {}
  async stop () {}
}
