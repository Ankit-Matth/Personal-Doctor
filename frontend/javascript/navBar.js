window.addEventListener('scroll',function(){
    let header = document.getElementById('header');
    if(this.window.scrollY >= 170){
        header.classList.add('sticky-top');
    }
    else{
        header.classList.remove('sticky-top');
    }
});
