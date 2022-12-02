// Import the functions you need from the SDKs you need
import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js';
import { getAuth, onAuthStateChanged,GoogleAuthProvider,signInWithPopup} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js';





// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfcELjuq5W4MdUABqxDh9j1c4OTXTlTYI",
  authDomain: "finhack2.firebaseapp.com",
  projectId: "finhack2",
  storageBucket: "finhack2.appspot.com",
  messagingSenderId: "366774345785",
  appId: "1:366774345785:web:d88fea9b91b7bb712aade8"
};

// Initialize Firebase
const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

console.log('helo ');


googleBtn.addEventListener('click', (e) => {

  console.log('initiating login process');
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // name = displayName
    // email = email
    // photo = photoURL
  
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage);
  });
  });


document.getElementById("signout").onclick = () => auth.signOut();




onAuthStateChanged(auth,user => {

  if (user) {
      // signed in
      console.log("yo")
      document.getElementById("whenSignedIn").hidden = false;
      document.getElementById("whenSignedOut").hidden = true;
      console.log(user);
      document.getElementById("name").innerHTML = user.displayName;

  } else {
      // not signed in
      document.getElementById("whenSignedIn").hidden = true;
      document.getElementById("whenSignedOut").hidden = false;
      document.getElementById("name").innerHTML = '';
  }
});

console.log("everythig working fine ");