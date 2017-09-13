'use strict';

$(document).ready(function () {
navAddClass();

    });

$(window).scroll(function(){
    navAddClass();
});


function navAddClass(){
    
    var navHeight = $('#main-nav').height();
    console.log(navHeight);
    var WindowScrollPosition = $(window).scrollTop();
    
    if (WindowScrollPosition >= navHeight){
        $('#main-nav').addClass('scrolled');}
    else {
        $('#main-nav').removeClass('scrolled');
    }
        
    }

$('#przycisk_naglowka').click(function(){
    $('header').remove();
});

