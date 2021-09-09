function add_user(){
    var user_name=document.getElementById("un").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}