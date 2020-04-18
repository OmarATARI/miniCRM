import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyChC33xedWCru7cWSL9bBLTgWjxSRLAlYA",
  authDomain: "crm-react-493c6.firebaseapp.com",
  databaseURL: "https://crm-react-493c6.firebaseio.com",
  projectId: "crm-react-493c6",
  storageBucket: "crm-react-493c6.appspot.com",
  messagingSenderId: "923007076150",
  appId: "1:923007076150:web:8da251d1e213f6e9bd1597",
  measurementId: "G-7B58B63BQK"
};
firebase.initializeApp(config);

export default firebase;
