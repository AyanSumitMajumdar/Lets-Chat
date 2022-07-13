function adduser(){

    username=document.getElementById("UserName").value;

    localStorage.setItem("UserName",username);
    
    window.location="kwitter_room.html"; 
 }