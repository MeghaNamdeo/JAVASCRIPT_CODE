const my= [1,2,3,4]
const myt=my.reduce(function(acc,currval)
{
    console.log(`acc:${acc}and currval : ${currval}`);
    return acc+currval
},3)
console.log(myt);
/*
output : acc:3and currval : 1
acc:4and currval : 2
acc:6and currval : 3
9
*/
//using arrow function
const myotal = my.reduce((acc,curr)=>acc+curr,0)
console.log(myotal);

const shoppingCart=[
    {
        itemName :"js course",
        price : 2999

    },
    {
        itemName :"java",
        price : 3999
        
    },
    {
        itemName :"python",
        price : 4999
        
    },
    {
        itemName :"DataScience",
        price : 12999
        
    }
];
const ans = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(ans);