let trueVar: boolean= true;
console.log(trueVar);
let number: number = 5;
console.log(number);
let text : string = "Hi";
console.log(text);
let list: string [] = ["hi" , "you"]; 
console.log(list);

let tuple:[number, string] = [1,"test"];

tuple.forEach(function(e){
    console.log(e);
});

let tupla1:[number, string, string] = [1,"Test", "hi"];

tupla1.forEach(function(e){
    console.log(e);
});

enum Color{ Blue, Red, Green};

let color1 = Color.Blue;
let color2 = Color.Blue;

if(color1 == color2){
    console.log(" the same color");
}

let myVariable: any = "hi";
console.log(myVariable);
myVariable = 5;
console.log(myVariable);