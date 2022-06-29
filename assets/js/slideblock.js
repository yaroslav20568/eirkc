jQuery(document).ready(function($) {  
        $('#slidebox .close').hide();
    $('#slidebox').animate({'right':'0px'},500);

    $('#slidebox .open').bind('click', function(){
        $('#slidebox').animate({'right':'0px'},500);
        $('#slidebox .close-icon').show();
        $('#slidebox .open').hide();
    });
    
    $('#slidebox .close-icon').bind('click',function(){
        $('#slidebox').stop(true).animate({'right':'-270px'},500);
        $('#slidebox .close-icon').hide();
        $('#slidebox .open').show();

    });
    


});