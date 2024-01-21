//for of
//for array : ["", "",""]
//for object : [{},{},{}]
const arr=[1,2,3,4,5]
for(const iterator of arr)//iterator variable ka name h
{
    console.log(iterator);
}

const greetings = "Hello World!"
for(const great of greetings)
{
    console.log(`Each char is ${great}`);
}
//Maps 
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

console.log(map);
for(const [key,value] of map)
{
    console.log(key, ':-',value);
}
const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of Object.entries(myObj)) {
    console.log(key, ':-', value);
}

