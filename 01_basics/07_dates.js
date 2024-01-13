// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(typeof myDate);
// console.log(myDate.toLocaleString());
let mycreateDate=new Date(2024,0,25);
console.log(mycreateDate.toDateString());
let mycreateDatee=new Date("03-03-2003");
console.log(mycreateDatee.toLocaleDateString());
let mycreateDateee=new Date("2003-03-03");
console.log(mycreateDateee.toDateString());
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mycreateDateee.getTime());//milisecond me vvalue h
console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
newDate.toLocaleDateString('default',{
    weekday:"long",
    
})
console.log(newDate.toLocaleDateString('default',{
    weekday:"long",
    
}));
