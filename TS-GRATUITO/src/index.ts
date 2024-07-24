// string,boolean,number...
let x:number =10

x=12;

console.log(x);

// inferencia x annotation
let y =12;
// y ="teste"

let z: number =12;

// tipos básicos //
let firsName:"Beatriz"
let age: Number=23
const isAdmin:boolean= true

// string != string//

// Definindo variáveis
let firstName: string = "Alice";
let lastName: string = "Smith";

// Verificando se ambas as variáveis são do tipo string
if (typeof firstName === 'string' && typeof lastName === 'string') {
    // Comparando os valores das strings
    if (firstName !== lastName) {
        
    console.log('firstName e lastName são diferentes.');
    } else {
        

   console.log('firstName e lastName são iguais.');
    }
    } else {
    console.log('Uma ou ambas as variáveis não são do tipo string.');
}

// object //
const myNumbers: number[] =[1,2,3];

console.log(myNumbers);
console.log(myNumbers.length);
//console.log(myNumbers.toUpperCase())
console.log(firstName.toLowerCase())
myNumbers.push (5);

console.log(myNumbers);

// tuplas //
let myTuple: [number,string,string[]]

myTuple = [5, "teste", ["a" ,"b"]]

//myTuple= [true , false, true]

// object literals -> {prop value}
const user: {name:string,age:number} ={
    name: "Beatriz",
    age :23
}

console.log(user);

console.log(user.name);

// user.job programador //