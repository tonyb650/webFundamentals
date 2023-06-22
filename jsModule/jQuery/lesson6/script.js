$(document).ready(function() {

    $(".content-box").click(function(){
        $(".content-box").animate({
            width: '500px', 
            height: '300px'

        }, 1000);

        $("content-after").show({
            
        });
    });
});