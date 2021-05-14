const functions = require("firebase-functions");
const universal = require('./dist/server/main').app();

exports.ssr = functions.https.onRequest(universal);
