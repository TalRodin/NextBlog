import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCUY39KVw-O4d8C1ckF7Peyag6UGgGMuEg',
  authDomain: 'nextjsblog.firebaseapp.com',
  databaseURL: 'https://nextjsblog.firebaseio.com',
  projectId: 'nextjsblog',
  storageBucket: 'nextjsblog.appspot.com',
  messagingSenderId: '695699359029',
  appId: '1:695699359029:web:552fb564ff5b8fb87cb87c',
  measurementId: 'G-5LZ1V3EQGR'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
} else {
  firebase.app();
}

const firestore = firebase.firestore();
const auth = firebase.auth();

// export default firebase;

export { firebase, auth, firestore };
