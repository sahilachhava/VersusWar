var firebaseConfig = {
  apiKey: "AIzaSyB5IRSbPQ4vtN704Fag3gNvKO1O7NRo1os",
  authDomain: "versus-war.firebaseapp.com",
  databaseURL: "https://versus-war.firebaseio.com",
  projectId: "versus-war",
  storageBucket: "versus-war.appspot.com",
  messagingSenderId: "474462573943",
  appId: "1:474462573943:web:33813dacdab109c3d4fd72",
  measurementId: "G-GW986WE2V9"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

function logOut(){
	auth.signOut().then(function() {
		sessionStorage.removeItem("adminUID");
		window.location.href="../index.html";
	}).catch(function(error) {
	  alert(error);
	});
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}



