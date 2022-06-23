// variables

var a; //declarando
var b = 'b'; // declaramos / asignamos
b = 'bb' // reasignando la variable
var a = 'aa'; //redeclaración

//Global Scope
var fruit = 'Apple'; //Global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia'; //global
    console.log(country);
}

countries();
console.log(country);