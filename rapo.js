const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyBzfY9VCYpECTIPgjU4eVBVAWccvJSXZ_E",
  authDomain: "sampleweb1-4af1e.firebaseapp.com",
  databaseURL: "https://sampleweb1-4af1e-default-rtdb.firebaseio.com",
  projectId: "sampleweb1-4af1e",
  storageBucket: "sampleweb1-4af1e.appspot.com",
  messagingSenderId: "373057543605",
  appId: "1:373057543605:web:0074e82e1ff06cf14c4dfc",
  measurementId: "G-1HQJLE3MNX"
})
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
//const database = firebase.database()
function signup(){
    const email=document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password);
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('signup success');
            location.replace('afterlogin.html')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById("error").innerHTML=errorMessage;
        }
    );

}
function login(){
    const email=document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password);
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('login success');
            location.replace('afterlogin.html')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById("error").innerHTML=errorMessage;
        }
    );

}
function logout(){
    console.log("siggningout");
    signOut(auth).then(() => {
        // Sign-out successful.
        alert("signout succes");
        location.replace("index.html");
      }).catch((error) => {
        // An error happened.
      });
      
}
