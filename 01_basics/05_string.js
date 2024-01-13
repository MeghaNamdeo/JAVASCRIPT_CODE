const name ="Megha "
const repocount=50
console.log(name+repocount+"  Value");//outdated syntax
console.log(`hello my name is ${name} and my repo count is ${repocount}`);//using backticks is modern concept
console.log("Hello")

const gameName= new String('Megha Namdeo computer science and engineering student')
console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.toUpperCase());//convert upper case
console.log(gameName.toLowerCase());//convert lower case

console.log(gameName.charAt(0));//for knowing character

console.log(gameName.indexOf('e'));//for knowing index

const newString = gameName.substring(3,4)//substring
console.log(newString);//negative value start 0 index

const anotherString = gameName.slice(-9, 8);
console.log(anotherString); 

const newStringthree="  megha     namdeo    "
const newStringT = newStringthree.trim()//starting and ending space remove 
console.log(newStringT);

const url = "https://megha.com/megha%100namdeo"

console.log(url.replace('%100','-'));//replace somthing for something
console.log(url.includes('megha'));//particular string present hai ki ni ye batata hai true or false me

console.log(gameName.split('-')); 
