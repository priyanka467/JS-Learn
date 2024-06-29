// for loop concepts
// 1. 
/* for (let index = 0; index <= 10; index++) {
    let printDigit = index;
    console.log(printDigit);
} */
// 2. 
/* for (let i = 0; i <= 10; i++) {
    let printDigit = i;
    if( i == 5) {
        console.log("5 is the best num");
    }
    console.log(printDigit);
}
// 3. 
for (let i = 0; i <= 10; i++) {
    for ( j= 0; j <= 10; j++ ){
        let elememt1 = j;
        // console.log("inner loop: ", elememt1);
        // console.log(`Inner loop: ${elememt1}`);
    }
    let elememt = i;
    // console.log(`Outer loop: ${elememt}`);
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + "=" + i + "*" +j);
}*/
// 4. 
/* const superHeros = ['BatMan', 'Flash', 'IronMan', 'ShaktiMan'];
for (let index = 0; index < superHeros.length; index++) {
    const element = superHeros[index];
    if(`${index} == "Flash" `) {
        console.log(`flash detected`)
        break;
    }
    console.log(element, element.length, superHeros.length);
} */
// 5. 
// for (let index = 1; index <= 20; index++) {
//     console.log(`index value : ${index}`);
//     for (let index1 = 1; index1 <= 20; index1++) {
//         if (index == 5) {
//             console.log(`Detected 5`);
//             continue
//         }
// }
//    console.log(`Value of i is ${index}`);
    
// }

