const firebaseConfig = {
      apiKey: "AIzaSyCfBYvvE9lUWCDcw0dcGLGnAq9KdyFDsxI",
      authDomain: "kwitter-5029f.firebaseapp.com",
      databaseURL: "https://kwitter-5029f-default-rtdb.firebaseio.com",
      projectId: "kwitter-5029f",
      storageBucket: "kwitter-5029f.appspot.com",
      messagingSenderId: "783849851157",
      appId: "1:783849851157:web:a8b57dcc4198d8a917811c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    document.getElementById("user.name").innerHTML="Welcome "+user_name+"!";
    
    function add(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"add roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_room.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name-",Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

