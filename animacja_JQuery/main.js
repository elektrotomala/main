'use strict';

//function zmianaKoloru = $('div').css({"background-color": "blue";});

$('button').click(function(){
    
    $('div').animate({
        left: '200px',
        width: '100px',
        height: '100px'
    }, 3000);
    
});