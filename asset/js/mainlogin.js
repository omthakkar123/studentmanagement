firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("IF")
      document.getElementById("welcome_div").style.display = "block" ;
      document.getElementById("login_div").style.display = "none" ;
    } else {
      // No user is signed in.
      console.log("ELSE");
      document.getElementById("welcome_div").style.display = "none" ;
      document.getElementById("login_div").style.display = "block" ;
    }
  });

function login(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert(errorMessage + " " + errorCode);
      });
}

function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}