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

let button = document.getElementById("button");

button.addEventListener("click",function()
{
let num1 = document.getElementById("num1").value
let num2 = document.getElementById("num2").value

let result = Number(num1)+Number(num2);
console.log("Your result is;",result);
let output =document.getElementById("results");
output.innerText ="your result is:"+result;
})


// console.log(typeof(secondName));
// console.log(typeof(pie));
// console.log(typeof(isRaining));
// console.log(typeof(myage));
// console.log(typeof(thirdName));
// console.log(typeof(fruits));
// console.log(typeof(phones));