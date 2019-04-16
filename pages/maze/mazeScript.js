$(function(){
    $('#start').click(function(){

        $("div.boundary").css("background-color", "#eeeeee");
        $("#maze").off("mouseleave");
        $(".boundary").off("mouseover");
        $(".boundary").mouseover(function(){
            $("div.boundary").css("background-color", "red");
            $("#status").text("sorry you lost! :(");
        });

        $("#maze").mouseleave(function(){
            $("div.boundary").css("background-color", "red");
            $("#status").text("sorry you lost! :(");
        });

        $("#end").click(function(){
            $("#status").text("you win :)");
        });

    });
});