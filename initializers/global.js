'use strict'
const ActionHero = require('actionhero')

module.exports = class GlobalInitializer extends ActionHero.Initializer {
  constructor () {
    super()
    this.name = 'global'
    this.loadPriority = 9000
    this.startPriority = 9000
    this.stopPriority = 1

    // This must be placed in the constructor block to be executed ASAP
    // Otherwise, it will not set environment variables and server will use defaults
    require('dotenv').config()
  }

  async initialize () {
    ActionHero.api['global'] = {
      // Place all globally accessible properties here
    }
  }

  async start () {
    // All logic that need to be initialized for the entire application on server start
    console.log('--- Global Initializer Executed Successfully ---')
  }
  async stop () {}
}
