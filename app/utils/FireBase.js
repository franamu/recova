import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDWbeV2_fH7H0L0jJTkoRAGd1Rxea3foJ8',
  authDomain: 'recova-a9f75.firebaseapp.com',
  databaseURL: 'https://recova-a9f75.firebaseio.com',
  projectId: 'recova-a9f75',
  storageBucket: 'recova-a9f75.appspot.com',
  messagingSenderId: '745824947886',
  appId: '1:745824947886:web:dd4ed41e4fc3648ec8e73f',
  measurementId: 'G-5DBNBZ2K83',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDWbeV2_fH7H0L0jJTkoRAGd1Rxea3foJ8",
    authDomain: "recova-a9f75.firebaseapp.com",
    databaseURL: "https://recova-a9f75.firebaseio.com",
    projectId: "recova-a9f75",
    storageBucket: "recova-a9f75.appspot.com",
    messagingSenderId: "745824947886",
    appId: "1:745824947886:web:dd4ed41e4fc3648ec8e73f",
    measurementId: "G-5DBNBZ2K83"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>*/
