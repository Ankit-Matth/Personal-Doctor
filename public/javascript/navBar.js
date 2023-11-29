window.addEventListener('scroll',function(){
    let header = document.getElementById('header');
    if(this.window.scrollY >= 170){
        header.classList.add('sticky-top');
    }
    else{
        header.classList.remove('sticky-top');
    }
});

var signUpbtn = document.getElementById("signUpbtn")
var rows = document.getElementsByClassName("rows")
if (localStorage.getItem("userName")) {
    signUpbtn.innerText = localStorage.getItem("userName")
    signUpbtn.parentElement.setAttribute("href","#")
    signUpbtn.setAttribute("data-bs-toggle","modal")
    signUpbtn.setAttribute("data-bs-target","#staticBackdrop")

    rows[0].innerHTML=localStorage.getItem("userName")
    rows[1].innerHTML=localStorage.getItem("phoneNo")
    rows[2].innerHTML=localStorage.getItem("email")
    rows[3].innerHTML=localStorage.getItem("password")
}
document.getElementById('logOut').addEventListener('click',function(){
    localStorage.clear()
})
