const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const firestore = admin.firestore();
const apolloServer = require('./server');
const server = apolloServer();
const { onUserCreate, onUserDelete }  = require('./auth')

const graphql = functions.https.onRequest(server);

const createUsers = functions.auth.user().onCreate(user => {
    return onUserCreate(user)
})

const deleteUsers = functions.auth.user().onDelete(user => {
    return onUserDelete(user)
})

module.exports = {
    graphql,
    createUsers,
    deleteUsers
}
