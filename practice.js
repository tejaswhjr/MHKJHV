
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

  function adduser(){
      un=document.getElementById("user_name").value;
      firebase.database().ref("/").child(un).update({
          purpose:"adding name"
      });
  }