import firebase from 'firebase';


// Initialize the app with a custom auth variable, limiting the server's access
var config = {
  serviceAccount: process.env.FIREBASE_SERVICE_ACCOUNT_FILE || undefined,
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  databaseAuthVariableOverride: {
    uid: "secret-service-worker"
  }
};
firebase.initializeApp(config);

console.log('Updating Firebase database', process.env.FIREBASE_DATABASE_URL);

// The app only has access as defined in the Security Rules
const db = firebase.database();
const ref = db.ref();

const secureRef = ref.child('secure');
const userRef = ref.child('users');

let users = {};
let secure = {};

userRef.on('value', (snapshot) => {
  users = snapshot.val();
  secureRef.once('value').then((snapshot) => {
    secure = snapshot.val();
    let i = 0;
    Object.keys(secure).forEach((key) => {
      let user = secure[key];
      console.log(key, user.displayName, '\t\t', users[key].displayName || '-', '\t\t', user.email || '-');
      i++;
    });
    console.log(i + ' users');
  });
});

