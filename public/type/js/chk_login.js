firebase.auth().onAuthStateChanged(user => {
  if (user) {
    //console.log(user);
    //document.getElementById('log').style.display = "none";
    document.getElementById('body').style.display = "block";
    //document.getElementById('txtemail').innerHTML = user.email;
    document.getElementById('name').innerHTML = "<label>ชื่อผู้ใช้ : " + user.displayName + "</label>";
    document.getElementById('img').innerHTML = "<img style='width: 100px' class='img-circle' src='" + user.photoURL + "'>";
    document.getElementById('id').innerHTML = user.uid;
    
  } else {
    window.location = "../login.html";
    
  }
});
