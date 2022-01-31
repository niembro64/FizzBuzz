// fizbuzz

var end = 15;
var text = "x";

for (var i = 1; i <= end; i++){

    text = "";

    if (i % 3 == 0){
        text += "Fizz"
    }
    if (i % 5 == 0){
        text += "Buzz";
    }
    if (text == ""){
        text = i;
    }


    console.log(text);

}