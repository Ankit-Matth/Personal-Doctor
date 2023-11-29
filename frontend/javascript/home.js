function first(){
    document.getElementById('main').style.background="url('./images/homeImg2.png')";
}
function second(){
    document.getElementById('main').style.background="url('./images/homeImg1.png')";
}

setInterval(first,3000);
setInterval(second,6000);