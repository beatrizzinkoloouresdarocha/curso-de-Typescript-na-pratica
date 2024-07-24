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

// any //
let a:any =0

a="teste"
a="true"
a=[]

// union type//
let id :string |number

// id =true
// id =[]

//type aliais//
type myidTyepe =number | string

const userID :myidTyepe=10;
const production: myidTyepe ="00001";
const shiID=123;

// enum //
// tamanho de roupas (size:,Médio,size:pequeno)
enum SIZE{
    P= "Pequeno",
    M= "Médio",
    G= "grande",
}

const Camisa = {
    name: "camisa de gola V",
    size: SIZE.G
}

console.log(Camisa);

// literal types//
let teste: "autenticado"|null;

// teste ="outrovalor"
teste ="autenticado";
teste=null;

// funcoes //
function sum(a:number, b:number) {
    return a+b
}

console.log(sum(12, 12));
//console.log(sum("12", true));

function sayHelloTo(name:string):String{
    return 'Hello  ${name}';
}

console.log(sayHelloTo("Beatriz"));

function logger(msg:string): void{
    console.log(msg);
}

logger ("teste!");

function greeting (name: string,greet?:string){
   if(greet){
    console.log('Olá ${greet} ${name}')
   }
    console.log('Olá ${name}')
}

greeting("Beatriz");
greeting("Gabriel, Beatriz");

//interfaces //
interface MathyFunctionParams{
    n1:number,
    n2:number
}

function sumNumbers(nums:MathyFunctionParams){
    return nums.n1 + nums.n2
}

console.log(sumNumbers({n1:1, n2:2}));

function multiplyNumber(nums: MathyFunctionParams){
    return nums.n1 * nums.n2
}

console.log(multiplyNumber);

// narrowing//
//checagem tipos//
function doSomethings(info: number |boolean){
    if(typeof info ==="number"){
        console.log('O número é  ${info}')
        return
    }
    console.log("Não foi passado número");
}

doSomethings(5);
doSomethings(true);

// generics//
function shoWArraysItems<T>(arr: T[]) {
    arr.forEach((item)=> {
    console.log('ITEM: $(item)')
    })
}

const a1 = [1,2,3];
const a2 = ["a","b","c"];

shoWArraysItems(a1);
shoWArraysItems(a2);

//classes//
class USER{
    name
    role
    isApproved

    constructor(name:string,role:string,isApproved:Boolean){
        this.name =name
        this.role =role
        this.isApproved =isApproved
    }
}
const  zeca = new USER ("Zéca","Adim",true);

console.log(zeca);