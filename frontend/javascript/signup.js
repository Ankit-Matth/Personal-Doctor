var login = document.getElementById('login')
login.addEventListener('click',function(){
    document.getElementById('hidden').style.display="none"
    document.getElementById('otherP').style.display="none"
    document.getElementById('txt').innerText="Patient Login"
    document.getElementById('signup').setAttribute("value","Login")
    document.getElementById("formBox").style.marginTop = "120px";
})

var doctorLogin = document.getElementById('doctorLogin')
doctorLogin.addEventListener('click',function(){
    document.getElementById('signup').setAttribute("value","Login")
    document.getElementById("formBox").style.marginTop = "120px";
    document.getElementById('txt').innerText="Doctor Login"
    document.getElementById('otherP').style.display="none"
    document.getElementsByClassName('hidden')[0].style.display="none"
    document.getElementsByClassName('hidden')[1].style.display="none"
    document.getElementsByClassName('hidden')[2].style.display="block"
})