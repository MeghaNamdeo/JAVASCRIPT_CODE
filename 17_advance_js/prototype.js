/*
All JavaScript objects inherit properties and methods from a prototype.

Prototype Inheritance
All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype
Using the prototype Property

1.The JavaScript prototype property allows you to add new properties to object constructors
Function/
Array /----------->Object ------>null 
String
 

*/
function multipleBy5(num) {
    return num * 5;
}

multipleBy5.power = 2;
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);
//function bhi object h

function createUser(username,score){
    this.username=username
    this.score=score
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is  ${this.score}`);//jisne bhi bulaya hai , jis mtlb this
}

const chai = new createUser("chai",25)// new keyword hatane per code ni chalra hai 
const tea = createUser("tea",250)
chai.printMe()
/*

Here 's what happens behind the scenes when the new keyword
is used :

A new Object is created: The new keyword initiates the 
creation of a new Javascript object.

A prototype is linked: The newly created object gets linked to 
the prototype property of the constructor function. This 
means that it has access to properties and methods defined on 
the constructor's prototype.

The constructor is called : The constructor function is called 
with the specified arguments and this is bound to the 
newly created object . If no explicit return value is specified from the constructor,
JavaScript assumes this,
the newly created object, to be the intended return value.
The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/
