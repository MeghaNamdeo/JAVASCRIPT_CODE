//object ko declare krne ke 2 tarike hai 
//1. Literal  2.Constructor
//singleton ( koi bhi consructor se object banate h to bo constructor se banta hai )
//Agar hum Literals se object banate hai to singleton Nahi banta hai 
//object.create

//objects literals
//symbol ki tarah use krne ka syntax 
const mySym = Symbol("key1")
const JsUser={ 
    name :"Megha",
    [mySym]:"mykey1",
    "full name" : "Megha Namdeo", 
    age : 18,
    location : " Jabalpur",
    email : "megha@gmail.com",
    islogin : false,
    lastlogindays:["Monday","Saturday"]
}

console.log(JsUser.email);

console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser.mySym)

JsUser.email="meghanamdeo@123"
Object.freeze(JsUser)//change ni hoga object
JsUser.email="meghanamdeo@123"
console.log(JsUser);
JsUser.greeting=function()
{
    console.log("Hello Js User");
}

JsUser.greetingTwo=function()
{
    console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
conole.log(JsUser);
