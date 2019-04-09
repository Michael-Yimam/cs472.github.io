
window.addEventListener('load', function(){
   document.getElementsByTagName("input")[0].addEventListener('click', buttonClicked);
   document.getElementById("bling").addEventListener('change', checkboxClicked);
   document.getElementsByTagName("input")[2].addEventListener('click', pigLatin);
   document.getElementsByTagName("input")[3].addEventListener('click', malkovitch);
});

function buttonClicked(){
    let textArea = document.getElementById('textArea');
    let clearInterval = setInterval(function(){
        let pt = pixelToPoint(parseInt(getComputedStyle(textArea).fontSize)) + 2;
        textArea.style.fontSize = "" + pt + "pt";
    }, 500);
}

function checkboxClicked(){

    let checkbox =  document.getElementById("bling");
    let textArea = document.getElementById('textArea');
        if(checkbox.checked){
            textArea.style.fontWeight = "bold";
            textArea.style.color = "green"
            textArea.style.textDecoration="underline";

            document.getElementsByTagName("body")[0]
                .style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";

        }
        else {
            textArea.style.fontWeight = "normal";
            textArea.style.color = "black"
            textArea.style.textDecoration="none";
        }

}

function pigLatin()
{
    let textArea = document.getElementById("textArea");
    let array = textArea.value.split(" ");
    console.log(array);
    let x = "";

    for(let k = 0; k < array.length; k++) {

        let n = array[k];
        let y = "";

        for (var i = 0; i < n.length; i++) {
            if (notVowel(n[i]))
                y += n[i];
            else
                break;
        }
        x += n.substr(i, n.length) + y + "ay ";
    }

    textArea.value = x;
}

function malkovitch()
{
    let textArea = document.getElementById("textArea");
    let array = textArea.value.split(" ");

    for(let i = 0; i < array.length; i++){
        if(array[i].length >= 5) {
            array[i] = "Malkovich";
        }
    }
    textArea.value = array.join(" ");
}

function notVowel(y){


    return y != "a" && y != "e" && y != "i" &&
           y != "o" && y != "u";
}

function pixelToPoint(n){
    return n * 0.75;
}