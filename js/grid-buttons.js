$(".button").click(function(){
        /* Hides all other works, removes label colour */
        $(".all").hide();
        $(".button .material-icons").removeClass("md-dark.md-active");
        $(".button .material-icons").addClass("md-dark");
        
        /* Hides all other works, removes label colour */
        var myID = $(this).attr("id");
        $("." + myID).show();
        $("." + myID + "-button .material-icons").removeClass("md-dark");
        $("." + myID + "-button .material-icons").addClass("md-dark.md-active");
    });