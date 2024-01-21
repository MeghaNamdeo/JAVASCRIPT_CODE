const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for
for (let index = 0; index < 10; index++) {
    const element = array[index];
    console.log(element);
}

for(let  i = 0 ; i <= 10 ; i++)
{
    const ele = i;
    console.log(ele);
}
 for(let i = 0 ; i <= 10 ; i++)
 {
    console.log(`outer loop value : ${i}`);
    for(let j = 0 ; j < 10 ; j++)
    {
       console.log(`Inner loop value ${j}and inner loop ${i}`);
    }
 }

 for(let i = 0 ; i <=10; i++)
 {
    console.log(`outer loop va;lue : ${i}`);
    for(let j = 0 ; j <=10; j++)
    {
        console.log(i + '*'+ j + ' = '+ i*j);
    }
 }

 let myArray = ["A","B","C"]
 console.log(myArray.length);
 for(let index=0; index<myArray.length;index++)
 {
    const element = myArray[index];
    console.log(element);
 }

 //break and continue
 for(let index = 1 ; index<=20; index++)
 {
    if(index==5){
    console.log(`Detected 5`);
    break
 }
    console.log(`Value of i is ${index}`);


 }

 for(let index = 1 ; index<=20; index++)
 {
    if(index==5){
    console.log(`Detected 5`);
    continue
 }
    console.log(`Value of i is ${index}`);


 }