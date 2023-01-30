firebase.auth().onAuthStateChanged(user => {
firebase.database().ref('/order/').child(user.uid).orderByChild('email').equalTo(user.email).on("value", (snapshot) => {
    var result = snapshot.val();

    var trdata = "";
    for (key in result) {

        rec = result[key];
        trdata += "<tr>";
        trdata += "<td>" + rec.proName + "</td>";
        trdata += "<td>" + rec.type + "</td>";
        trdata += "<td>" + rec.price + " บาท" + "</td>";
        trdata += "<td>" + rec.num + "</td>";
        trdata += "<td>" + rec.sum + " บาท" + "</td>";
        trdata += "<td><img src='" + rec.urlImg + "' style='width: 100px;'></td>";
        trdata += "<td>" + rec.fname + "</td>";
        trdata += "<td>" + rec.addr + "</td>";
        trdata += "<td>" + rec.tel + "</td>";
        trdata += "<td>" + rec.email + "</td>";
        trdata += "<td><img src='" + rec.url + "' style='width: 100px;'></td>";

        //trdata += "<td class='text-center'>";
        //trdata += "<a class='btn-sm btn-info' href='edit_pro.html?id=" + key + "'>แก้ไข</a>&nbsp;";
        //trdata += "<a class='btn-sm btn-danger' onclick=\"del('" + key + "')\">ลบ</a>";
        //trdata += "</td>";
        trdata += "</tr>";
    }
    document.getElementById('tdata').innerHTML = trdata;

}, function (err) {
    alert(err.message);
});
});