const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

//db.ref(TABLE + "/" + id).once()
firebase.database().ref("/products").child(id).once('value')
    .then((snapshot) => {
        document.getElementById('id').value = id;
        var result = snapshot.val();
        document.getElementById('txtProName').value = result.proName;
        document.getElementById('type').value = result.type;
        document.getElementById('txtprice').value = result.price;
        document.getElementById('img').src = result.urlImg;
        document.getElementById('urlImg').value = result.urlImg;
    })
    .catch((err) => {
        alert(err.message);
    });

firebase.auth().onAuthStateChanged(user => {
    firebase.database().ref("/user").child(user.uid).once('value')
        .then((snapshot) => {
            //document.getElementById('id').value = id;

            var result = snapshot.val();
            document.getElementById('txtfname').value = result.name;
            document.getElementById('txtaddr').value = result.home + " ตำบล:" + result.district + " อำเภอ:" + result.amphoe + " จังหวัด:" + result.province + " " + result.zipcode;
            document.getElementById('txttel').value = result.tel;
            document.getElementById('txtemail').value = result.email;
            //alert(result.name);
        })
        .catch((err) => {
            alert(err.message);
        });
});

function total() {
    var item = document.getElementById('txtprice').value;
    var num = document.getElementById('txtnum').value;
    var sum = item * num;
    //alert(sum);
    document.getElementById('txtsum').value = sum;
}
function upload() {
    var image = document.getElementById('image').files[0];
    var imgName = image.name;
    const ref = firebase.storage().ref("/PATH_TO_FILE/" + imgName);

    var uploadTask = ref.put(image); // Upload File

    uploadTask.on('state_changed', function progress(snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        progress = Math.round(progress);
        var total = Math.round(snapshot.totalBytes / 1000);
        document.getElementById('progress').innerHTML = progress + "% of " + total + " KB";
        document.getElementById('progressBar').innerHTML = progress + "%";
        document.getElementById('progressBar').style.width = progress + "%";
    },
        function error(err) {
            alert(err.message);
        },
        function complete() {
            uploadTask.snapshot.ref.getDownloadURL()
                .then(URL => {
                    document.getElementById('urlImg').value = URL;
                    document.getElementById('imgor').src = URL;
                })
                .catch(function (err) {
                    alert(err.message);
                });
        });
}
function add_or() {
    firebase.auth().onAuthStateChanged(user => {
    var id = document.getElementById('id').value;
    var proName = document.getElementById('txtProName').value;
    var type = document.getElementById('type').value;
    var price = document.getElementById('txtprice').value;
    var num = document.getElementById('txtnum').value;
    var sum = document.getElementById('txtsum').value;
    var img = document.getElementById('img').src;
    var fname = document.getElementById('txtfname').value;
    var addr = document.getElementById('txtaddr').value;
    var tel = document.getElementById('txttel').value;
    var email = document.getElementById('txtemail').value;
    var url = document.getElementById('urlImg').value


    firebase.database().ref("/order").child(user.uid).push({ "proName": proName, "type": type, "price": price, "num": num, "sum": sum, "urlImg": img, "fname": fname, "addr": addr, "tel": tel, "email": email, "url": url })
        .then(function () {
            alert("Order OK");
            window.location = "./";
        })
        .catch(function (err) {
            alert(err.message);
        });
    });
}