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
                    document.getElementById('img').src = URL;
                })
                .catch(function (err) {
                    alert(err.message);
                });
        });
}
function addPro () {
    var proName = document.getElementById('txtProName').value;
    var type = document.getElementById('type').value;
    var price = document.getElementById('txtprice').value;
    var urlImg = document.getElementById('urlImg').value;

    db.ref("/products").push({"proName": proName, "type": type, "price": price, "urlImg": urlImg})
    .then(function() {
        alert("เพิ่มเรียบร้อย");
        window.location = "./admin.html";
    })
    .catch(function(err) {
        alert(err.message);
    });
}