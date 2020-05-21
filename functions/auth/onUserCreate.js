const admin = require('firebase-admin');
const firestore = admin.firestore();

const createUser = (user) => {
    return firestore.collection('users').doc(user.uid).set({
        email: user.email,
        firstName: '',
        lastName:'',
        displayName:'',
        phone:'',
        photoUrl:'',
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
        logs: {
            online: false,
            last_login: '',
        }
    })
}

const createContacts = (user) => {
    return firestore.collection('contacts').doc(user.uid).set({
        user_id: '',
        user_email: '',
        user_displayName: '',
    })
}

module.exports = { createUser, createContacts }