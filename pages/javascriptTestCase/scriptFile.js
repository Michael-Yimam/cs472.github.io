function max(a, b){
    if(a > b)
        return a;
    return b;
}

function maxOfThree(a, b, c){
    return max(max(a,b), c);
}

function isVowel(a){
    if(a == 'a' || a == 'e' || a == 'i' ||
        a == 'o' || a == 'u'){
        return true;
    }
    return false;
}

function sum(a){
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum += a[i];
    }
    return sum;
}

function multiply(a){
    let multiply = 1;
    if(a.length == 0)
        return null;
    for(let i  = 0; i < a.length; i++){
        multiply *= a[i];
    }
    return multiply;
}

function reverse(a){
    let reverse = "";
    for(let i = a.length-1; i >= 0; i--){
        reverse += a[i];;
    }
    return reverse;
}

function findLongest(a){
    let longest = 0;

    if(a.length == 0)
        return null;
    for(let i = 0; i < a.length; i++){
        if(a[i].length > longest)
            longest = a[i].length;
    }

    return longest;
}

function filterLongWords(a, i){
    let long = [];

    for(let j = 0; j < a.length; j++){
        if(a[j].length > i)
            long.push(a[j]);
    }
    return long;
}


function multiplyByTen(a){
    return a.map(function(element, i, array){
        return element * 3;
    });
}

function elementsEqualWithThree(a){
    return a.filter(function(element, i, array){
        return element == 3;
    });
}

function multiplicationOfAllElements(a){
    return a.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
    }, 1)
};


function myFunctionTest(a, b){

    if(a == b)
        return "TEST SUCCEEDED";
    return "TEST FAILED";
}

window.onload = function(){
    console.log("Expected output of max(2,10) is 10 and " + myFunctionTest(10, max(2, 10)));
    console.log("Expected output of maxOfThree(-9, -22, -3) is -3 and " + myFunctionTest(-3, maxOfThree(-9, -22, -3)));
    console.log("Expected output of isVowel(b) is false and " + myFunctionTest(false, isVowel('b')));
    console.log("Expected output of sum([3, -2, 1]) is 2 and " + myFunctionTest(2, sum([3, -2, 1])));
    console.log("Expected output of multiply([-9, -2, 2]) is 36 and " + myFunctionTest(36, multiply([-9, -2, 2])));
    console.log("Expected output of reverse('xing') is 'gnix' and " + myFunctionTest("gnix", reverse("xing")));
    console.log("Expected output of findLongest(['xing', 'chris', 'dawit', 'betaeb']) is 6 and " + myFunctionTest(6, findLongest(['xing', 'chris', 'dawit', 'betaeb'])));
    console.log("Expected output of filterLongWords(['miki', 'lee', 'coraza', 'henok'], 4) is ['coraza', 'henok'] and " +
            myFunctionTest(JSON.stringify(['coraza','henok']),
                JSON.stringify(filterLongWords(['miki', 'lee', 'coraza', 'henok'], 4))));
    console.log("Expected output of multiplyByTen([3, -3, 9]) is [9, -9, 27] and " +
                 myFunctionTest(JSON.stringify([9, -9, 27]), JSON.stringify(multiplyByTen([3, -3, 9]))));
    console.log("Expected output of elementsEqualWithThree([9, 5, 6]) is [] and " +
                 myFunctionTest(JSON.stringify([]), JSON.stringify(elementsEqualWithThree([9, 5, 6]))));
    console.log("Expected output of multiplicationOfAllElements([-1, -2, -3, -9]) is 54 and " +
                 myFunctionTest(54, multiplicationOfAllElements([-1, -2, -3, -9])));
}