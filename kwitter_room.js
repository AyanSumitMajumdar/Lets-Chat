// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5o2PRpUME8aDe35vbOOlU4_ADbNaptbg",
  authDomain: "kwitterchat-e656d.firebaseapp.com",
  projectId: "kwitterchat-e656d",
  storageBucket: "kwitterchat-e656d.appspot.com",
  messagingSenderId: "393025404507",
  appId: "1:393025404507:web:c9f752ab9ccbce7a49c97e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addRoom(){
    room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
   purpose:"adding room_name"     
  });
  localStorage.setItem("room_name",room_name);
  window.location="kitter_page.html";  
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room_name- "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"  </div> <hr>";
document.getElementById("output").innerHTML+=row; 
//End code
});});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
  }