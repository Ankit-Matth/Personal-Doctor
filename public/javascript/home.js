function first(){
    document.getElementById('main').style.background="url('/static/images/homeImg2.png')";
}
function second(){
    document.getElementById('main').style.background="url('/static/images/homeImg1.png')";
}

setInterval(first,3000);
setInterval(second,6000);

document.getElementById("searchDrugs").addEventListener("click",function(){
    if (this.previousElementSibling.value) {
        var myModal = new bootstrap.Modal(document.getElementById('loadingModal'));
        myModal.show(); 
    }
})