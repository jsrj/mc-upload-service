'use strict'
const ActionHero = require('actionhero')

module.exports = class Upload extends ActionHero.Action {
  constructor () {
    super()
    this.name = 'uploadImage'
    this.description = 'Upload An Image To S3'
    this.outputExample = {}
    this.authenticated = true
    this.inputs = {
      data: { required: true },
      token: { required: false }
    }
  }

  async run ({ response, params} ) {
    let authenticated = (!(params.token === undefined) && (params.token.length > 0)) // TODO: Actually code in validation for this once security is developed
    if (authenticated) { // Just placeholder functionality
      await ActionHero.api.s3Uploader.upload(params.data);
      response.message = "Image uploaded successfully"
    } else {
      throw new Error('You must log in to upload an image');
    }
  }
}
