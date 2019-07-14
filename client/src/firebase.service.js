import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDKdfGnM9INZU91zQUOCsyH4-QoRmhHR3A',
  authDomain: 'fir-solutions-4841b.firebaseapp.com',
  databaseURL: 'https://fir-solutions-4841b.firebaseio.com',
  projectId: 'fir-solutions-4841b',
  storageBucket: 'fir-solutions-4841b.appspot.com',
  messagingSenderId: '42574681663',
  appId: '1:42574681663:web:152b7faab3a80e7c'
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const controller = {
  getAccounts: collectionName => db.collection(collectionName).get(),
  addAccount: (collectionName, acc) => {
    firebase
      .firestore()
      .collection(collectionName)
      .add(acc);
  }
};
