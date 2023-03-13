const firebaseApp = firebase.initializeApp({apiKey: "AIzaSyACiTIl45lIDYtDXGFWTbLoWedGIe51XVM",
authDomain: "mahe543-76649.firebaseapp.com",
projectId: "mahe543-76649",
storageBucket: "mahe543-76649.appspot.com",
messagingSenderId: "956465915206",
appId: "1:956465915206:web:bb08230da541b912027147",
measurementId: "G-36BHSDPC5J"});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const login=()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    alert("loggedin suceess");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}
const signup=()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    console.log(email,password);
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    //usercredential is a variable we can keep any thing
    alert("you are signed up");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode,errorMessage);
    // ..
  });
}
