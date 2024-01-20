//if
/*
if(condition)
{

}
*/
const isUserLoggedIn = true
if(isUserLoggedIn)
{
    
}
if(2<="2")
{
    console.log("executed");
}
/*
2<="2"
<,>,<=,>=,==,!=,===
*/


/* if else 
if(condition)
{

}
else 
{

}
*/
const temperature =41
if(temperature === 41)
{
     console.log("less than 50");
}
else 
{
    console.log("greater than 50");
}
const balance = 1000

/* bad practice 

if(balance > 500) console.log("test"),console.log("test2");

*/
const score = 200
if(score>100 )
{
   let power ="fly"
   console.log(`user power : ${power}`);
}

/* if ,else if, else 

if(condition )
{

}
else if(condition )
{

}
else
{

}

*/

if(balance > 500)
{
    console.log("less than 500");
}
else if(balance < 750 )
{
    console.log("less than 750");
}
else
{
    console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if(userLoggedIn && debitCard&& 2==3)
{
    console.log("Allow to buy course");
}

if(LoggedInFromGoogle || LoggedInFromEmail&& 2==3)
{
    console.log("User Logged in ");
}