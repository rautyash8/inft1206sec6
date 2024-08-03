//functions Declarations

function greeting1(){
    console.log("Hello");
}

greeting1();

function greeting2(){
    return "Hello";
}

let str = greeting2();

console.log(str);
console.log(greeting2());

function greeting3(name){
    return "Hello "+name;
    //return 'Hello $(name)';
}
console.log(greeting3("Yash"));
console.log(greeting3("5"));
console.log(greeting3());

function greeting4(name){
    return "Hello "+name;
}
console.log(greeting4());
console.log(greeting4('Tom'));

function sum(num1=0, num2=0){
    return num1+num2;
}
console.log(sum(3, 5));
console.log(sum('3', '5'));
console.log(sum("Hi ", "Yash"));
console.log(sum(3));
console.log(sum(3, 5, 9));

//Function Expression
let m = sum();
console.log(sum(m));
console.log(typeof(m));

let f = sum;
console.log(typeof(f));
console.log(f(6,10));
f = 9;
//console.log(f(6,10));

const f2 = function(){
    return "Good Afternoon";
};
console.log(f2());

//Arrow Expression
const f3 = ()=>"Good Afternoon";

console.log(f3());

const sum2 = function(num1=0, num2=0){
    return num1+num2;
};

const sum3 = (num1=0, num2=0)=>num1+num2;

console.log(sum3(2, 3));

console.log(Math.max(7, 22, -1, 45));