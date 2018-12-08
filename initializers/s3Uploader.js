'use strict'
const aws = require('aws-sdk')
// const multer = require('multer')
// const multerS3 = require('multer-s3')
const ActionHero = require('actionhero')

module.exports = class S3Uploader extends ActionHero.Initializer {
  constructor () {
    super()
    this.name = 's3Uploader'
    this.loadPriority = 1000
    this.startPriority = 1000
    this.stopPriority = 1000

    aws.config.update({
      secretAccessKey: process.env.AWS_SECRET,
      accessKeyId: process.env.AWS_KEY,
      region: process.env.AWS_REGION
    })

    this.s3 = new aws.S3()
  }

  async initialize () {
    ActionHero.api['s3Uploader'] = {

      // constants
      // ...

      // Methods
      upload: function (ownerName, imageData) {}
    }
  }

  async start () {}
  async stop () {}
}
