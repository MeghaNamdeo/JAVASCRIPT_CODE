/********* Javascript Execution Context: Jo bhi aapne javascript file banai hai bo run kese hogi ***************/
 /*
 1. Global Execution Context
 2. Function Execution Context
 3. Eval Execution Context

 {}-> Two phase me run hota hai 
     1)Memory Creation Phase 
     2)Execution Phase 
*/
function one()
{
    console.log("one")
    two()
}
function two()
{
    console.log("two")
    three()
}

function three()
{
    console.log("three")
}
one()
two()
three()