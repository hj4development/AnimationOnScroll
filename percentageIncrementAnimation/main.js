$(window).scroll(function(){
    
    var top = $(window).scrollTop();
    var h = $("#div_1").height();
    console.log(top);
    console.log(h);
    
    if(top>=h-80){
        $(".htcs").addClass("animate1");
        $(".htcs").css("background-color","skyblue"); //use to persist the skyblue color on screen after the animation done.
        
        $(".js").addClass("animate2");
        $(".js").css("background-color","skyblue");  //use to persist the skyblue color on screen after the animation done.

        $(".mysql").addClass("animate3");
        $(".mysql").css("background-color","skyblue");  //use to persist the skyblue color on screen after the animation done.

        $(".c").addClass("animate4");
        $(".c").css("background-color","skyblue");   //use to persist the skyblue color on screen after the animation done.

        $(".cplus").addClass("animate5");
        $(".cplus").css("background-color","skyblue");   //use to persist the skyblue color on screen after the animation done.

    }
    
    
})
