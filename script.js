
$("#clickMe").click(function() {
    $("#navigation").css({"opacity": "1", "display":"flex"})
    // opacity: 0

    $("#navBar").css("height", "570px")
    // height: 57px

    $(".contact").css({"height":"252px", "padding": "191px 20px 23px 42px"})
    // height: 175px
    // padding: 0px

    $("#icons").css({"opacity": "1", "display":"flex"})
    // opacity: 0

    $("#navX").css({"opacity": "1", "display":"block"})

    $("#clickMe").css("display", "none")
})

$("#navX").click(function(){
    $("#navigation").css({"opacity": "0", "display":"none"})
    // opacity: 0

    $("#navBar").css("height", "57px")
    // height: 57px

    $(".contact").css({"height":"175px", "padding": "0px"})
    // height: 175px
    // padding: 0px

    $("#icons").css({"opacity": "0", "display":"none"})
    // opacity: 0

    $("#navX").css({"opacity": "0", "display":"none"})

    $("#clickMe").css("display", "block")
})