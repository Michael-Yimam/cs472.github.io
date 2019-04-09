
clearAnimationVal = new Array (0, 0, 0, 0, 0);

window.addEventListener('load', function()
{
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let selectAnim = document.getElementById("animation");


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
    });

    selectAnim.addEventListener('change', function()
    {
       //if(start.disabled)
    });
});


function startAnimation(index)
{console.log("hi");
    let selectAnim = "";
    clearAnimation();

    if(index == 1) selectAnim = "exercise";
    else if(index == 2) selectAnim = "juggler";
    else if(index == 3) selectAnim = "bike";
    else if(index == 4) selectAnim = "dive";
    else selectAnim = "";
    console.log(ANIMATIONS[selectAnim]);

    let beginFrame = 0;
    let x = 0;

    clearAnimationVal[index] = setInterval(function()
    {
        clearCanvas();
        document.getElementById("text-area").value = selectFrame( ANIMATIONS[selectAnim]);
    }, 250);

    function selectFrame(frames)
    {
        if(beginFrame == 0)
        {
            beginFrame =  frames.indexOf("=====") + 5;
            return frames.substr(0, frames.indexOf("====="));
        }
        else
        {
            x = beginFrame;
            if(beginFrame < frames.length)
            {
                if(frames.substr(beginFrame, frames.length).indexOf("=====") != -1)
                {
                    beginFrame =  frames.substr(beginFrame, frames.length).indexOf("=====") + 5;
                    return frames.substr(x, frames.indexOf("====="));
                }
                else
                {
                    beginFrame = 0;
                    return frames.substr(x, frames.length);
                }


            }
        }

    }

}

function clearAnimation(){
    for(let i = 0; i < clearAnimationVal.length; i++){
        clearInterval(clearAnimationVal[i]);
    }
    console.log("clear animation");
}


function clearCanvas(){
    console.log("hiii");
    document.getElementById("text-area").value = "";
}

