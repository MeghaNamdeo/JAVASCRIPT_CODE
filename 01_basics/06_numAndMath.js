const score = 400
console.log(score);
const balance = new Number(100)//object ke throug define krna

console.log(balance);
console.log(balance.toString().length);//string me convert ho gya h
console.log(balance.toFixed(2));
const othernumber = 89.9877
console.log(othernumber.toPrecision(2))//kitni digit me precision lena hai
const hum= 1000000000000000000;
console.log(hum.toLocaleString('en-IN'));//different formate me lane ke liy

//++++++++++++++++ Maths +++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2))//upper prefer
console.log(Math.floor(4.9));//lower prefer
console.log(Math.max(90,89,77,9000));//for maximum 
console.log(Math.min(90,89,77,9000));//for minimum 
console.log(Math.random());//koi bhi random value with range 0 and 1

console.log(Math.random()*10);
console.log((Math.random()*10)+1);//value 0 bhi ho sakti h usko avoid krne ke liy + 1 krte hai 

console.log(Math.floor(Math.random()*10)+1);//value 0 bhi ho sakti h usko avoid krne ke liy + 1 krte hai 
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+ min)
