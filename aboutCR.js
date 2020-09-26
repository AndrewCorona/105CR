function initService(){

    $('#petimagetwo').hide();

    $('#icon').on('click',function(){
        $('#petimagetwo').hide();
        $('#petimageone').fadeIn();

    });

    $('#icontwo').on('click',function(){
        $('#petimageone').hide();
        $('#petimagetwo').fadeIn();


    });


}

window.onload=initService();