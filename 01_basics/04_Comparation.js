// console.log("2>1 = ",2>1);
// console.log("2<1 = ",2<1);
// console.log("2==1 = ",2==1);
// console.log("2>=1 = ",2>=1);
// console.log("2=>1 = ",2>=1);

/*Comparison ke liy dono data type same hone chahiy */
// console.log('"2">1 : ',"2">1);
// console.log("2>'1' : ",2>'1');
// console.log('"2">"1" : ',"2">"1");
// console.log('"2"!="1" : ','2'!='1');

/comparison with null/
console.log('null==0 : ',null==0);
console.log('null>0 : ',null>0);
console.log('null<0 : ',null<0);
console.log('null<=0 : ',null<=0);

/*Note : The reason is that an equality check 
== and comparisons < > >= <=  work differently
Comparisons convert null to a number , treating it as 0 .
that's why (3)null>=0 is true and (1)null>0 is false
*/
//undefined ke case me  false hi ans aata hai 

console.log('undefined==0 : ',undefined==0);
console.log('undefined>=0 : ',undefined>=0);
console.log('undefined<=0 : ',undefined<=0);
console.log('undefined>0 : ',undefined>0);
console.log('undefined<0 : ',undefined<0);

/* strict check (===) datatype or value dono ko compare krta hai */
console.log("'2'===1 = ",2===1);
