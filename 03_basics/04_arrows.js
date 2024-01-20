const user = {
    username : "Megha",
    price : 999,

welcomeMessage:function()
{
    console.log(`${this.username}, welcome to website`);//this current context ko refer krta h
    console.log(this)

}
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage();

//console.log(this);

// function code()
// {
//     let usename="maya"
//     console.log(this.username);

// }
// code()

// const code = ()=>
// {
//     let username = " megha namdeo"
//     console.log(this);
// }
// code()
const addTwo = (num1, num2) => {
    return num1 + num2;
  };
  
  console.log(addTwo(3, 2));
  
  const addTwo2 = (num1, num2) => num1 + num2;//implicit 
  //{ } me return keyword likhna parega 
  //()  me return keyword ni likhna parega 
  
  console.log(addTwo2(3, 4));

  //object ko return krne ke liy ()me wrap krna hi parega 


  const addTwo3= (num1, num2) => {
    
    return num1 + num2;
  };
  