$(document).ready(function(){
    $(function(){
        $('a[href*="#"]:not([href="#"])').click(function(){
            if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
                var target = $(this.hash);
                target = target.length?target:$('[name='+this.hash.slice(1) +']');
                if(target.length){
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    return false;
                }
            }
        });
    });
    $("#video-button").click(function(){
        $("#video iframe").attr("src", "https://www.youtube.com/embed/IU5sUI5kjLQ");
        $("#video").css("display", "block");
    });
    $("#close-video").click(function(){
        $("#video iframe").attr("src", "");
        $("#video").css("display", "none");
    });
    $(".card").click(function(){
        $(this).addClass("open-card");
        $("#close-card").css("display", "block");
        $("#card-back").css("display", "block");
    });
    $("#close-card").click(function(){
        $(".open-card").removeClass("open-card");
        $("#close-card").css("display", "none");
        $("#card-back").css("display", "none");
    });
    $("#toggle-menu").click(function(){
        if($("#navbar").hasClass("open-nav"))
            $("#navbar").removeClass("open-nav");
        else
            $("#navbar").addClass("open-nav");
    });
});