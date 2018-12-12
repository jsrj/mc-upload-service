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
      addUser: function (userName, password) {
        console.log("Request to add user: "+userName+" with password of: "+password);
      },

      listUsers: function () {
        return [
          {userName:'one user'}, 
          {userName:'two user'}, 
          {userName:'red user'}, 
          {userName:'blue user'}
        ]
      },

      authenticateUser: function (userName, password) {
        console.log("Request to authenticate user: "+userName+" using password of: "+password);
        
        let validUser = userName == "valid" && password == "test";
        return (validUser) ? "adfoausdfoi23987asd9f87as9d8f9823b" : ""
      },

      deleteUser: function (userName, password) {
        console.log("Request to delete user with userName of: "+userName+" and password of: "+password);
      }
    }
  }

  async start () {}
  async stop () {}
}
