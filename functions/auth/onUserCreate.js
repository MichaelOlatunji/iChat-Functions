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
        created_at: Date.now(),
        updated_at: Date.now(),
    })
}

module.exports = onUserCreate