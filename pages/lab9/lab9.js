$(function () {

    $("form").submit(function(e){
        e.preventDefault();
        if(!isOnlyNumbers($("#seats").val()))
            $('<p>').text("Only number allowed")
                .append("#error");

    });

});

function isOnlyNumbers(num){
    let reg = new RegExp(/^\d+$/);
    return reg.test(num);
}