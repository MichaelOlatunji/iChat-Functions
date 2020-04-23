const admin = require('firebase-admin');
const firestore = admin.firestore();

const onUserDelete = (user) => {
    const doc = firestore.collection('users').doc(user.uid);
    return doc.delete()
}

module.exports = onUserDelete;