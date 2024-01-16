//const tinderUser = new Object()
//or
const tinderUser={}
tinderUser.id = "123abc"
tinderUser.name="Megha"
tinderUser.isLoggedIn=false;
console.log(tinderUser);
const regularUser={
    email:"abc@gmail.com",
    fullname:
    {
        userFullName :
        {
            firstName:"megha",
            lastName:"namdeo"
        }
    }
}
console.log(regularUser.fullname.userFullName.firstName);
const obj1={1:"a",2:"b"}

const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
//const obj3 = {obj1,obj2}  //array type value melegi 

//const obj3=Object.assign({},obj1,obj2,obj4)
//or using spread
const obj3 = {...obj1,...obj2,...obj4}
    console.log(obj3);
    const users=[{//arrray me object createkrna
        id : 1 ,
        email:"google@gmail.com"
    },
    {//arrray me object createkrna
        id : 2 ,
        email:"microsoft@gmail.com"
    },
    {//arrray me object createkrna
        id : 3 ,
        email:"chatgpt@gmail.com"
    },
]
    console.log(users[1].email)
    console.log(tinderUser);
    console.log(Object.keys(tinderUser));//keys print krta hai 
    console.log(Object.values(tinderUser));//values print krta hai 
    console.log(Object.entries(tinderUser));//entries print krta hai
    console.log(tinderUser.hasOwnProperty('isLogged'));//ye batata h ye property hai ki ni true false me ans deta hai

    //Destructing : object Destructing and Array Destructing
    //object Destructing
    const course ={
        coureseName : "Js learning ",
        price : " 999",
        courseIntructor : "hitesh sir"
    }
    course.courseIntructor;// ye ek tarika but humko baar baar . lgakr krna pareda 
    const{courseIntructor:instructor}=course// isme hum direct access krsakte hai sirf name likhkr 
   // console.log(courseIntructor);
//ya
console.log(instructor);

   /* const navbar=({company})=>{//react ka syntax hai destructing hori h

    }
    navbar(company="megha")*/
/* Json  ka syntax 
   {
        "name" : "Megha Namdeo",
        "coursename" : "js",
        "price" : " free"
    }
*/
//Array Json
[
    {},
    {},
    {}
]