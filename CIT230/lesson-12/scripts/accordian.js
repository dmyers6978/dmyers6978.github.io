$(document).ready(function(){
    $(".description").hide();
    $("#bike1").click(function(){
        $("#desc2, #desc3").hide("slow");
        $("#desc1").slideToggle("slow");
        });
    });

    $(document).ready(function(){
    $("#bike2").click(function(){
        $("#desc1, #desc3").hide("slow");
        $("#desc2").slideToggle("slow");
        });
    });

    $(document).ready(function(){
    $("#bike3").click(function(){
        $("#desc1, #desc2").hide("slow");
        $("#desc3").slideToggle("slow");
        });
    });


