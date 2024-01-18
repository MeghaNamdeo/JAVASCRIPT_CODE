// let a = 1000
// // const b = 20 
// // var c = 30
// if(true)
// {
//     let a = 10
//     const b = 20 
//     var c = 30//var scope ke bahar nahi h tab bhi execute hora hai  ye problem hai tabhi 
//     //hum var ko use nahi krte 
// }

// console.log(a);
// //console.log(b);
//console.log(c);

function one()
{
      const username = "megha"
      function two()
     {
            const website = "youtube"
            console.log(username);

      }
  //console.log(website);
  two()//agar hum two()ko call krte hai to 
}
one()