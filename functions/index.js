const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const firestore = admin.firestore();
const apolloServer = require('./server');
const server = apolloServer();
const { onUserCreate }  = require('./auth')

const graphql = functions.https.onRequest(server);

const createUsers = functions.auth.user().onCreate(user => {
    return onUserCreate(user).then(() => {
        console.log("user created successfully")
    })
})

module.exports = {
    graphql,
    createUsers
}
