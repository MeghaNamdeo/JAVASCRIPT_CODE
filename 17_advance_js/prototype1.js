let myName = "megha       "
console.log(myName.length);// output : 12 space also count
console.log(myName.trim().length);// output : 5 

console.log(myName.trueLength);
let myHeros = ['thor','spiderman']

let heroPower={
    thor:"hammer",
    spider:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);

    }
}
Object.prototype.megha=function()
{
    console.log(`megha is present in all objects`);

}
//heroPower.megha()
myHeros.megha();

Array.prototype.Heymegha=function()
{
    console.log(`megha says Hello `);

}
//heroPower.Heymegha()//error
myHeros.Heymegha();

//inheritance 
const User={
    name : " chai ",
    email:'asfg@346'
}
const Teacher={
    makeVideo: true

}

const TeachingSupport={
    isAvailable: false
    
}
const TASupport={
   myAssignment :'js learning',
   fullTime : true,
   __proto__: TeachingSupport
    
}

Teacher.__proto__=User

