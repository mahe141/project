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

firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("login.html");
    }
    else{
        console.log('hi mae');
        alert("Hello, "+user.email);
        document.getElementById("colorText1").innerHTML="Hello, "+user.email;
    }
})