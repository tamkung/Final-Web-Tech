
/*function edit() {
    //var uname = document.getElementById('name').value;
    var name = document.getElementById('txtname').value;
    var address = document.getElementById('txtaddress').value;
    var tel = document.getElementById('txttel').value;
    var email = document.getElementById('txtemail').value;
    
    db.ref(TABLE).push({"name": name, "address": address, "tel": tel, "email": email})
    .then(function() {
        alert("Edit OK");
        window.location = "account.html";
    })
    .catch(function(err) {
        alert(err.message);
    });
}

firebase.auth().onAuthStateChanged(user => {
    //const urlParams = new URLSearchParams(window.location.search);
    //const id = urlParams.get('id');
    //const equalTo = document.getElementById('id').value;
    //db.ref(TABLE + "/" + id).once()
    db.ref("/user/"+user.uid).once('value')
        .then((snapshot) => {
            //document.getElementById('id').value = id;
            var result = snapshot.val();
            document.getElementById('txtProName').value = result.type;
            //alert(result.email);
        })
        .catch((err) => {
            alert(err.message);
        });
    //var email = document.getElementById('txtemail').value;
    //document.getElementById('txtemail').value = email;
});
*/
function edit() {
    firebase.auth().onAuthStateChanged(user => {
        var id = document.getElementById('id').value;
        var name = document.getElementById('txtname').value;
        var home = document.getElementById('home').value;
        var district = document.getElementById('district').value;
        var amphoe = document.getElementById('amphoe').value;
        var province = document.getElementById('province').value;
        var zipcode = document.getElementById('zipcode').value;
        var tel = document.getElementById('txttel').value;


        db.ref(TABLE)
            .child(user.uid).set({ "name": name, "home": home, "district": district, "amphoe": amphoe, "province": province, "zipcode": zipcode, "tel": tel, "email": user.email })
            .then(function () {
                alert("Edit OK");
                window.location = "/";
            })
            .catch(function (err) {
                alert(err.message);
            });
    });
}
