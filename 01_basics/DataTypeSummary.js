//Primitive
/* 7 types : String 
            Number
            Boolean
            null
            undefined
            Symbol
            BigInt

    */

    const score = 100
    const Valuescore = 89900.90
    const isLoggedIn= false
    const outsideTemp = null
    let userEmail;
    const id =Symbol('123');
    const id2=Symbol('123');
    console.log(id===id2);
    
 //  Reference (Non Primitive)   
 //Array , Objects, Function 
 const heros=["shaktiman","naagraj","doga"];
console.log(heros);
 let myObj={
    name:"megha",
    age:20,

 }  
 console.log(myObj); 
 
 const myfunc = function(){
    console.log("Hello world");
 };
 myfunc();
 //typeof is used to define the data type

 /************************************Stack and Heap Memory ************************/
 //stack(Primitve type)   or    Heap(Non Primitive)
 //copy pass hoti hai          reference pass hota h (atual value me changes hota hai)

/* stack example */
 let myYoutubename = "meghanamdeo.com"
 let anothername =  myYoutubename
 anothername ="meghanamdeo"
 console.log(myYoutubename);
 console.log(anothername);

 /* Heap Example */
 let userOne = {
    email:"user1@gmail.com",
    upi:"123@Paytm" ,
 }
 
 let usertwo =userOne 
 usertwo.email = "abc@gmail.com"
 console.log(userOne.email);
 console.log(usertwo.email);
 