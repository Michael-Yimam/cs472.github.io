
clearAnimationVal = new Array (0, 0, 0, 0, 0);
speed = 250;
window.addEventListener('load', function()
{
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let selectAnim = document.getElementById("animation");
    let fontSize = document.getElementById("fontsize");
    let turbo = document.getElementById("turbo");

    start.addEventListener('click', function()
    {
        if(selectAnim.selectedIndex)
        {
            start.disabled = true;
            stop.disabled = false;
            startAnimation(selectAnim.selectedIndex);
        }
    });

    stop.addEventListener('click', function()
    {
       stop.disabled = true;
       start.disabled = false;
       clearAnimation();
    });

    selectAnim.addEventListener('change', function()
    {
       if(start.disabled){
           startAnimation(selectAnim.selectedIndex);
       }
    });

    fontSize.addEventListener('change', function()
    {
        let canvas = document.getElementById("text-area");
        if(fontSize.value === "Tiny")
            canvas.style.fontSize = "7pt";
        else if(fontSize.value === "Small")
            canvas.style.fontSize = "10pt";
        else if(fontSize.value === "Medium")
            canvas.style.fontSize = "12pt";
        else if(fontSize.value === "Large")
            canvas.style.fontSize = "16pt";
        else if(fontSize.value === "Extra Large")
            canvas.style.fontSize = "24pt";
        else
            canvas.style.fontSize = "32pt";

    });

    turbo.addEventListener('change', function()
    {
        let canvas = document.getElementById("text-area");

        if(turbo.checked)
            speed = 50;
        else
            speed = 250;

        startAnimation(selectAnim.selectedIndex);
    });
});


function startAnimation(index)
{
    let selectAnim;
    clearAnimation();

    if(index == 1) selectAnim = ANIMATIONS["exercise"].split("=====\n");
    else if(index == 2) selectAnim = ANIMATIONS["juggler"].split("=====\n");
    else if(index == 3) selectAnim = ANIMATIONS["bike"].split("=====\n");
    else if(index == 4) selectAnim = ANIMATIONS["dive"].split("=====\n");
    else selectAnim = "";

    let x = 0;

    clearAnimationVal[index] = setInterval(function()
    {

        if(x < selectAnim.length){
            document.getElementById("text-area").value = selectAnim[x];
            x++;
        }else{
            x = 0;
        }

    }, speed);


}

function clearAnimation(){
    for(let i = 0; i < clearAnimationVal.length; i++){
        clearInterval(clearAnimationVal[i]);
    }
    clearCanvas();
    // console.log("clear animation");
}


function clearCanvas(){
    // console.log("hiii");
    document.getElementById("text-area").value = "";
}

