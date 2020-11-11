scrollAppear = () =>{
    var introtext=document.querySelector('.text-pop');
    var introposition=introtext.getBoundingClientRect().top;
    var screenposition=window.innerHeight/2;
    if(introposition<screenposition){
        introtext.classList.add('text-pop2');
    }
}
window.addEventListener('scroll',scrollAppear);