'use strict';

/** Important **/
/** You should not be committing this file to GitHub **/
/** Repeat: DO! NOT! COMMIT! THIS! FILE! TO! YOUR! REPO! **/

module.exports = {
  // Find the appropriate database to connect to, default to localhost if not found.
  db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/ReactWebpackNode',
  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',
  google: {
    clientID: process.env.GOOGLE_CLIENTID || '62351010161-eqcnoa340ki5ekb9gvids4ksgqt9hf48.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || '6cKCWD75gHgzCvM4VQyR5_TU',
    callbackURL: process.env.GOOGLE_CALLBACK || "/auth/google/callback"
  },
  keystone: {
    cookieSecret: 'cookieSecret',
    cloudinary: {
      cloud_name: 'dvv1umzpi',
      api_key: '165524472358952',
      api_secret: '671BmQ2Qo7fpbv8mXXywPrsr6x0'
    }
  },
  flickr: {
    api_key: "dbd7c2376e5cf6b17f959f277baee172",
    secret: "4461db8cfd666be7",
    user_id: "54092272@N06",
    access_token: "72157660475141342-0613cffa72680160",
    access_token_secret: "42cf589e331543f6"
  }
};