function del(id) {
    var bConfirm = confirm("Do you really want delete this record?");
    if(bConfirm){
        db.ref("/user").child(id).remove()
        .then(() => {
            alert("Delete OK");
        })
        .catch(err => {
            alert(err.meaasge);
        });
    }
}