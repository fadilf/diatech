$(document).ready(function(){
    $(document).on('click', 'a', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: ($( $.attr(this, 'href') ).offset().top - 60)
        }, 500);
    });
    $("#video-button").click(function(){
        $("#video").css("display", "block");
    });
    $("#close-video").click(function(){
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
});