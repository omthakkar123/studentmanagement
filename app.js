
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCITnBCiPab_Dr8z1k-4AJaEfNKfsiI4Ww",
    authDomain: "student-management-login.firebaseapp.com",
    databaseURL: "https://student-management-login.firebaseio.com",
    projectId: "student-management-login",
    storageBucket: "student-management-login.appspot.com",
    messagingSenderId: "483225643951"
  };
  firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user);
      window.location.href="/login/admin";
    } else {
      // No user is signed in.
      console.log(user);
    }
  });


function login(){
    var input_Email = document.getElementById("inputEmail").value;
    var input_Password = document.getElementById("inputPassword").value;
    firebase.auth().signInWithEmailAndPassword(input_Email, input_Password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert(errorCode + " = " + errorMessage);
      });

}

function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}