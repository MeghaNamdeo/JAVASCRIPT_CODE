const userEmail = "megha@123"
if(userEmail)
{
    console.log("got user email");
}
else
{
    console.log("donot have user email");
}

/*
falsy values: 
false,0 , -0 , BigInt 0n , "" ,null,undefined,NaN
*/

/* truthy value : 
"0", 'false'," ",[], {}, function(){}

*/
if(userEmail.length === 0)
{
    console.log("Array is empty");
}
