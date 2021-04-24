import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyA3D6ghLJLERMl-TCTVv7W2d1gr3gFV-2E",
    authDomain: "netflix-clone-abf67.firebaseapp.com",
    projectId: "netflix-clone-abf67",
    storageBucket: "netflix-clone-abf67.appspot.com",
    messagingSenderId: "1072898687501",
    appId: "1:1072898687501:web:49b51b5a9e5f93e1844b44",
    measurementId: "G-D005RHW2NC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;