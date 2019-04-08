
window.addEventListener('load', function(){
   document.getElementsByTagName("input")[0].addEventListener('click', buttonClicked);
   document.getElementById("bling").addEventListener('change', checkboxClicked);
   document.getElementByTagName("input")[1].addEventListener('click', pigLatin);
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

function pigLatin(){



}

function pixelToPoint(n){
    return n * 0.75;
}