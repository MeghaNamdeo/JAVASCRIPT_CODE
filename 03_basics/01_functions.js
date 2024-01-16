// console.log("M");
// console.log("E");
// console.log("G");
// console.log("H");
// console.log("A");

//SYNTAX OF FUNCTIONS 
function sayMyName ()
{
    
console.log("M");
console.log("E");
console.log("G");
console.log("H");
console.log("A");

}
sayMyName//reference: isme output ni aayga ye sirf bolega function exist hai
sayMyName()//execution
                       //parameters
function addTwoNumber (num1 , num2)
{
    console.log(num1 + num2);
}
/*When defining a function, the variables that are listed inside the parentheses are called parameters. 
When calling or invoking the function, the actual values that are passed to these parameters 
are referred to as arguments.*/

             //arguments
addTwoNumber(2,3) //output : 5
addTwoNumber(2,"3") //output : 23 dono ko string type treat kr raha hai 
addTwoNumber(2,"a") //output : 2a isme problem aa sakti hai 
addTwoNumber(2,null) //output : 2
const result = addTwoNumber(2,3) //output : 5 
console.log("Results : ",result);//output : undefined  because  

//In JavaScript, every function, when executed, produces a result. If a function does not have an explicit return statement, or if the return statement does not provide a value, the function implicitly returns undefined.
function loginUserMessage(username)
{
    /*if(username === undefined)or */
    if(!username)
    {
        console.log("Please enter a username");
        return
    }
    return `${username}just logged in `
}
console.log(loginUserMessage("Megha "))//output : Megha just logged in 
console.log(loginUserMessage(""))//output : just logged in 
console.log(loginUserMessage())//output : undefinedjust logged in 
//username ki value kabhi undefined nahi hogi 
function loginUserMessage(username="sam")
{
    if(username === undefined)
    
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
}
console.log(loginUserMessage("Megha "))//output : Megha just logged in 
console.log(loginUserMessage(""))//output : just logged in 
console.log(loginUserMessage())//output : undefinedjust logged in 