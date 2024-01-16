function calculateCarPrice(...num1)//Rest and spread operator
{
    return num1
}
console.log(calculateCarPrice(2));
console.log(calculateCarPrice(200,4000,500));//array ke form me store hota 

//interview question
function calculateCarPrice2(val1,val2,...num1)//Rest and spread operator
{
    return num1
}
console.log(calculateCarPrice2(2));
console.log(calculateCarPrice2(200,4000,500,890,900));//val1 =200, val2 =4000

const user={
    username:"megha",
    price:200
}
//object ko function  access krna 
function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
//or
handleObject(
    {
        username : "sam",
        price:900
    }
)
handleObject(user)

//array ko acces krna function ke throug

const MyArray = [900,899,677,234]
function returnSecondValue(Array1)
{
    return Array1[1];
}
console.log(returnSecondValue(MyArray));