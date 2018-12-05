const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// Define the schema for ImageData objects
const ImageDataSchema = Schema({
  imageID: {            // <-- Should be a generated UUID string that matches the name of the uploaded image
    type: String
  },
  owner: {              // <-- Should be the name of the user who uploaded the image
    type: String,
    default: "MakerCloud"
  },
  publicURL: {          // <-- Should be the publicly accessible S3 Object URL
    type: String,
    default: ""// TODO: Set this to a default/unknown placeholder image URL
  }
});

//Export
const ImageDataModel = mongoose.model('ImageData', ImageDataSchema);
module.exports  = ImageDataModel;