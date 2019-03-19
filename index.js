// Packages
const admin = require('firebase-admin');
// Keys
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const data = {
  name: 'Markoz',
  lastName: 'Peña Mendez',
  age: 21,
  hobby: {
    games: ['The Last Of Us', 'The Witcher 3']
  }
}

db.collection('person').doc('Mark').set(data);
