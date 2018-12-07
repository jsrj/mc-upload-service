'use strict'
const ActionHero = require('actionhero')

module.exports = class GlobalInitializer extends ActionHero.Initializer {
  constructor () {
    super()
    this.name = 'global'
    this.loadPriority = 1000
    this.startPriority = 9000
    this.stopPriority = 1000
  }

  async initialize () {
    ActionHero.api['global'] = {}
  }

  async start () {
    console.log('Global Initializer triggered...');
    require('dotenv').config()
  }
  async stop () {}
}
