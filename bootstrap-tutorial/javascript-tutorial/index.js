// //var firstName="Ciru";
// firstName= "Grace"
// let secondName ="Wanjiru";
// const pie =3.142
// firstName ="Ciru"
// let isRaining =true
// //console.log(typeof(pi));
// let myage =null;
// let thirdName;

// let fruits =["Banana", "apple", "guava"];
// let phones ={"Samsung": "S24", "Nokia": 1110}

// //Arithmetic operators (+,-,/,*,%,**)
// let a =10;
// let b =20;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// //comparison/relational operators(>,<,<=,==,===)
// //logical operators(&&,||,!)
// let num1 =prompt("Enter num1")
// let num2 =prompt("Enter num2")
// let result;
// r//esult = Number(num1)+Number(num2);
// //console.log("your result is:",result)

// let button = document.getElementById("button");

// button.addEventListener("click",function){
    
// }

// let num1 = document.getElementById("num1").value
// let num2 = document.getElementById("num2").value

// let result = Number(num1)+Number(num2);
// console.log("Your result is;",result);
// let output =document.getElementById("results");
// output.innerText ="your result is:"+result;

// })
// let a =20
// let b =40
// if(true){
//     console.log("a is greater than b")
// }
// else if(false){
//     console.log("a is less than b")
// }
// for(let i=0;i<11;i++){
//     console.log(i)
// }
// let counter=20
// while(counter<30){
//     counter++
//     console.log("loops are amazing")
// }
// let x=35;
// do{
//     console.log("Roleen is sleeping");
//     x++
// }
// while(x<30)

//     fruits=["apple", "banana", "orange"]
//     for (let fruit of fruits){
//         console.log|(fruit)
// function addNumbers(a,b){
//     let sum =a+b;
//     console.log(sum)
// }

// console.log(typeof(secondName));
// console.log(typeof(pie));
// console.log(typeof(isRaining));
// console.log(typeof(myage));
// console.log(typeof(thirdName));
// console.log(typeof(fruits));
// console.log(typeof(phones));

//arrow functions
// const divNumbers =(a,b)=>{return a/b}
// console.log(divNumbers(40,10))
// let counter=0;
// if(counter<10)
// {
//     let age =30;
//     console.log(`My age is ${age}`)
// }
// console.log(`my age is ${age}`)

let el =document.querySelector("#heading-1")
console.log(el)
el.textContent="good morning"
el.classList.add("enlarge","italics");

let el2 = document.querySelector("div");
const p =document.createElement("p")
let paragraph= `Hello this is a paragrapgh from js`;
p.innerText=paragraph;
document.appendChild(p)
let el3 =document.querySelector(".p3")
el3.style.color ="#13a57f"
let el4 =document.querySelector("button")
// el4.addEventlistener "click","function"()
el3.classList.toggle("darkmode")


