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

// List All Users
module.exports.listUsers = class ListUsers extends ActionHero.Action {
  constructor () {
    super()
    this.name = 'listUsers'
    this.description = 'List All Users'
    this.outputExample = {}
    this.authenticated = false
    this.inputs = {}
  }

  async run ({ response, params }) {
    let users = await ActionHero.api.userManager.listUsers()
    response.users = users.map((user) => { return user.userName })
  }
}

module.exports.authenticate = class AuthenticateUser extends ActionHero.Action {
  constructor () {
    super()
    this.name = 'authenticateUser'
    this.description = 'Authenticate A User'
    this.outputExample = {}
    this.authenticated = false
    this.inputs = {
      userName: { required: true },
      password: { required: true }
    }
  }

  async run ({ response, params }) {
    response.authenticated = await ActionHero.api.userManager.authenticateUser(params.userName, params.password)
    if (!response.authenticated) { throw new Error('unable to log in') }
  }
}