//Immediately Invoked Function Expressions(IIFE)

(function ConvolverNode()//named IIFE
{
   console.log(`DB CONNECTED`);

})();

((name)  =>
{
   console.log(`DB CONNECTED ${name}`);

})('megha');
/*The  function is immediately executed using the Immediately Invoked Function Expression (IIFE).
 This helps in avoiding problems related to pollution of the global scope. Many times, when
  using global scope variables, the pollution issue arises, and to mitigate this, we use the 
  Immediately Invoked Function Expression."*/

