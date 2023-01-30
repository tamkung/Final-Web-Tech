function logout() {
    firebase.auth().signOut()
    .then(() => {
        alert("You have been logged out!!!");
        window.location = "index.html";
    })
    .catch(err => {
        alert(err.message);
    });
}