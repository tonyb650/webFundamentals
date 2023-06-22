$(document).ready(function() {
    
    $("#menu-toggle").click(function() {
        $("#side-nav").slideToggle(); 
    });

    $(".central").click(function() {
        $(".content").slideToggle("slow", function() {
            alert("Hey!");
        });
    });

});