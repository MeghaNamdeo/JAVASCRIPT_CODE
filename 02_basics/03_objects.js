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
    [mySym]:"mykey1"
    "full name" : " Megha Namdeo",// ager humne fullname string ki tarah access kr diya to hum . ke throug access ni kr sakte 
    age : 18,
    
    location : " Jabalpur",
    email : "megha@gmail.com",
    islogin : false,
    lastlogindays:["Monday","Saturday"]
}

console.log(JsUser.email);

console.log(JsUser["email"]);
console.log(JsUser["full name"]);
log(JsUser.mySym)
