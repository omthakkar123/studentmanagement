var config = {
    apiKey: "AIzaSyCITnBCiPab_Dr8z1k-4AJaEfNKfsiI4Ww",
    authDomain: "student-management-login.firebaseapp.com",
    databaseURL: "https://student-management-login.firebaseio.com",
    projectId: "student-management-login",
    storageBucket: "student-management-login.appspot.com",
    messagingSenderId: "483225643951"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log(user);
    } else {
        // No user is signed in.
        window.location.href = "../../";
        console.log(user);
    }
});

function logout() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });
}