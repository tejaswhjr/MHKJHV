//YOUR FIREBASE LINKS
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
    
    user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
get_tick="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
get_msg="<h4 class='message_h4'>"+message+"</h4>";
like_btn="<button class='btn btn-warning' id="+firebase_message_id+"value="+like" onclick='updateLike(this.id)'>";
span="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button>";
row=get_tick+get_msg+like_btn+span;

document.getElementById("output").innerHTML+=row;
} });  }); }
getData();

function updateLike(message_id){
console.log("clicked on like button-"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
});

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
