firebase.database().ref('/products').orderByChild('type').equalTo('Graphic Card').on("value", (snapshot) => {
    var result = snapshot.val();
    
    var trdata = "";
    for (key in result) {

        rec = result[key];
        trdata += "<tr>";
        trdata += "<td>" + rec.proName + "</td>";
        trdata += "<td>" + rec.type + "</td>";
        trdata += "<td>" + rec.price + " บาท" + "</td>";
        trdata += "<td><img src='" + rec.urlImg + "' style='width: 100px;'></td>";

        trdata += "<td class='text-center'>";
        trdata += "<a class='btn-sm btn-info' href='../order.html?id=" + key + "'>สั่งซื้อ</a>";
        trdata += "</td>";
        trdata += "</tr>";
    }
        document.getElementById('tdata').innerHTML = trdata;

}, function (err) {
    alert(err.message);
});