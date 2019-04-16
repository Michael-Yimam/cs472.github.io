window.addEventListener("load", function(){

    filter();
    bubbleSort();
    objectCreation();

});

function filter(){
    String.prototype.filter = function(list){
        let x = this;

        for(let i = 0; i < list.length; i++){
            let reg = new RegExp(list[i], "gi");
            x = x.replace(reg, "###");
        }

        return x;
    }

    console.log("\n\n ****** String Replace ******");
    let x = "wtf, is going on. I'm not going to tolerate this shit.";
    let banned = ['wtf', 'shit'];
    console.log("String:");
    console.log(x);
    console.log("Banned words:");
    console.log(banned);
    console.log("Output:")
    console.log(x.filter(banned));
}


function bubbleSort(){

    Array.prototype.bubbleSort = function(){

        var swapp;
        var n = this.length-1;
        var x=this;
        do {
            swapp = false;
            for (let i=0; i < n; i++)
            {
                if (x[i] > x[i+1])
                {
                    var temp = x[i];
                    x[i] = x[i+1];
                    x[i+1] = temp;
                    swapp = true;
                }
            }
            n--;
        } while (swapp);
        return x;

    }

    console.log("\n\n ****** Bubble Sort ******");
    console.log("Unsorted:");
    console.log([2, 14, -2, -8, 22, 11]);
    console.log("Sorted:");
    console.log([2, 14, -2, -8, 22, 11].bubbleSort());
}

function Person(n){
    this.name = n;
}

function objectCreation(){
    console.log("\n\n ****** Function Constructor ******");
    Person.prototype.teach = function(s){
        console.log(this.name + " is now teaching " + s);
    }

    const t = new Person("xing");
    t.teach("wap");
}

function usingObjectCreate(){
    const person = {name:""};
    const t = Object.create(person);
    t
}