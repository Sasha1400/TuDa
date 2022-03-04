window.onscroll = function showHead(){

    var head = document.querySelector('.head')
    
    if(window.pageYOffset > 200){
    
    head.classList.add('head_fixed');
    
    }else{
    
    head.classList.remove('head_fixed');
    
    }
    
    }
    $('.header .top .navLink').click(function() {
        $('.nav').slideToggle();
    });