'use strict'
const ActionHero = require('actionhero')

// Add A User
module.exports.addUser = class AddUser extends ActionHero.Action {
  constructor () {
    super()
    this.name = 'addUser'
    this.description = 'Add A User'
    this.outputExample = {}
    this.authenticated = false
    this.inputs = {
      userName: { required: true },
      password: { required: true }
    }
  }

  async run ({ params }) {
    await ActionHero.api.userManager.addUser(params.userName, params.password)
  }
}

// Delete A User
module.exports.deleteUser = class DeleteUser extends ActionHero.Action {
  constructor () {
    super()
    this.name = 'deleteUser'
    this.description = 'Delete A User'
    this.outputExample = {}
    this.authenticated = true
    this.inputs = {
      userName: { required: true },
      password: { required: true }
    }
  }

  async run ({ params }) {
    await ActionHero.api.userManager.deleteUser(params.userName, params.password)
  }
}
