const marvel_heros=["raja","ravi","ranu"]
const dc_heros=["superman","flash","batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][1]);
const all_heroes =marvel_heros.concat(dc_heros);
console.log(all_heroes);
//by not using concat use spread
const saarehero=[...marvel_heros,...dc_heros]
console.log(saarehero);

const anArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];//flat ki help se usuale another array 
const real_another_array = anArray.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Megha"))
//or using from 
console.log(Array.from("Megha"))
console.log(Array.from({name : "Megha"}))//interesting in interview
//isko bolna per ka ki kisse aaray banay keys se yaa value se 
let score1=100;
let score2=200;
let score3=300;
let score4=400;
console.log(Array.of(score1,score2,score3));