const admin = require('firebase-admin');
const firestore = admin.firestore();

const onUserCreate = (user) => {
    return firestore.collection('users').doc(user.uid).set({
        email: user.email,
        firstName: '',
        lastName:'',
        displayName:'',
        phone:'',
        photoUrl:'',
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
    })
}

module.exports = onUserCreate