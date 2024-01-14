//array
const myArr=[0,1,2,3,4,5]
const myHeros = ["shaktiman","naag","raja"];
//another way of declare array
const myArr2 = new Array(1,2,3,4)

console.log(myArr2[1]);
console.log(myHeros[1]);

//operation in array 
myArr.push(90);
myArr.push(98);
myArr.pop();
myArr.pop();
myArr.pop();
console.log(myArr);


myArr.unshift(6);//unshift use to add value in starting 
myArr.unshift(0);
console.log(myArr);

myArr.shift();//remove from first
console.log(myArr);

console.log(myArr.includes(2))//agar bo value me exist krti h to true aayga
console.log("A ",myArr);

const nayaArr= myArr.join();//data type of array change into string
console.log(nayaArr);
console.log(typeof(nayaArr));

//slice and splice 

console.log("A ",myArr);

const myn1 = myArr.slice ( 1, 3);
console.log(myn1);
console.log(" B ", myArr);

//difference between slice and splice 
//jb hum slice use krte h rage 1 - 3 to 1 - 2 range ke elment aate h 
//or original array me koi chages nahi hote 
//splice me jese range 1- 3 to 1-3 element pure hat jate h original array me 
const mant2 = myArr.splice(1,3)

console.log("C ",myArr);
console.log(mant2);