// let fruits = ["apple","mango","pineapple"];
// console.log(fruits)
// fruits[1] = "avocado"
// console.log(fruits)
// fruits.push("banana")
// console.log(fruits)
// fruits.pop()
// console.log(fruits)
// //looping through arrays
// fruits.forEach((fruit) => {

// }

// )
//     console.log(fruit)
// let numbers =b [1,2,3,4,5,6,7,8,9,10];
// let evennembers = numbers.filter((number)=>{
//     return number% 2===0;

let artists = {
    artistsName: "james",
    age :30,
    song: "the night is still young"}
   
console.log(artists.artistsName)
Object.values(artists).forEach(value => console.log(value))
console.log(Object.entries(artists))
for (const [key,value] of Object.entries(artists))

{
    console.log(`key : ${key} value : ${value}`)
}