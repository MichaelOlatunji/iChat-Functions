const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp();
// const firestore = admin.firestore();
const apolloServer = require('./server');
const server = apolloServer();

const graphql = functions.https.onRequest(server);

module.exports = {
    graphql
}
