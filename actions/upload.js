'use strict'
const ActionHero = require('actionhero')

module.exports = class MyAction extends ActionHero.Action {
  constructor () {
    super()
    this.name = 'upload'
    this.description = 'an actionhero action'
    this.outputExample = {}
  }

  async run (data) {
    // your logic here
  }
}