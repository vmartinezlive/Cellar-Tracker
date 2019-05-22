const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello Cellar tracker");
});

const createNotification = (notification => {
  return admin.firestore().collection('notification')
  .add(notification)
  .then(doc => console.log('notification added', doc));
})

exports.wineCreated = functions.firestore
.document('wines/{wineId}')
.onCreate(doc => {

  const wine = doc.data();
  const notification = {
    content: 'Added a new wine',
    user: `${wine.authorFirstName} ${wine.authorFirstName}`,
    time: admin.firestore.FieldValue.serverTimestamp()

  }
  return createNotification(notification)
})
