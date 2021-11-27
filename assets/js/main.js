// show nav function

const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const activeElement = document.querySelectorAll('.show');

hamburger.addEventListener('click', function(){

    for(let i=0;i<activeElement.length; i++){
        activeElement[i].classList.toggle('active');
        
    }
    
})
closeIcon.addEventListener('click', function(){

    for(let i=0;i<activeElement.length; i++){
        activeElement[i].classList.toggle('active');
    }
})


//////////////


window.addEventListener('scroll', function(){
    let scrollValue = window.scrollY;
    let headerHeight = document.querySelector('.mainHeader').clientHeight;

    if(scrollValue > 0.91*headerHeight){
        hamburger.classList.add('background');
    }
    else hamburger.classList.remove('background');
})