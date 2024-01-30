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

const emptyObj={}
if(Object.keys(emptyObj).length===0)
{
    console.log("Object is empty");

}
//Nullish Coalescing Operator(??): null undefined 
/*The nullish coalescing (??) operator is a logical operator that returns its right-hand side
operand when its left-hand side operand is null or undefined, and otherwise returns 
its left-hand side operand.*/
let val1 ;
val1 = 5 ?? 10
val2 = null ?? 10

val3 = undefined ?? 15
val4 = null ?? 10??10
console.log("5 ?? 10  : " , val1);
console.log('null ?? 10  :  ',null ?? 10);
console.log('undefined ?? 10  : ',undefined ?? 10);
console.log('unull ?? 10??10 : ',null ?? 10??10);

//ternary operator 
/*condition? true:false*/
const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80"): console.log("more than 80");
