// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbWCbHbsoe9R7iT41jGm4RxfbFETJYUmE",
    authDomain: "enzo-project-b7537.firebaseapp.com",
    databaseURL: "https://enzo-project-b7537-default-rtdb.firebaseio.com",
    projectId: "enzo-project-b7537",
    storageBucket: "enzo-project-b7537.appspot.com",
    messagingSenderId: "111183687601",
    appId: "1:111183687601:web:64af74dbdece2759d79790"
  };
  
 firebase.initializeApp(firebaseConfig);
  
var user=document.getElementById("patientsname").value
   function getData() {firebase.database().ref(user).on('value', function(snapshot) {document.getElementById("patientsname").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("room name=" +Room_names);

});});}
getData();
