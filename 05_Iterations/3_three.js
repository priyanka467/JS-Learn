// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }
// **************** MAP *******************
const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India') 
//this will not log as MAP doesn't add dublicate value, known for Uniqueness and also maintains the order in which it is added/written
// console.log(map);
/* Output:
Map(3) {
    'IN' => 'India',
    'USA' => 'United States of America',
    'Fr' => 'France'
  } */

// now try to apply loop on MAP

// a. 
/*for (const key of map) {
    console.log(key);
}*/
/*output:
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]*/

// b. to remove bracket and just key-value from above
 for (const [key, value] of map) {
    console.log(key,":", value);
}

// incase of objects key-pair
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}
// output: myObject is not iterable
