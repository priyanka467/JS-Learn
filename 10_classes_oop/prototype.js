// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);
// without using trim how to get actual length (no use: trim.length)
// properties and method difference.

// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
// }

// // heroPower.hitesh()
// // myHeros.hitesh()
// // myHeros.heyHitesh()
// // heroPower.heyHitesh()

// // inheritance

// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)

// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`True length is: ${this.trim().length}`);
// }

// anotherUsername.trueLength()
// "hitesh".trueLength()
// "iceTea".trueLength()
// // starting fresh from today
// /*1. 
// const newHeroine = ["Priyanka", "Sunita"] */
// 2. 
function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 2
console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype);

const myObject = [
    {
        name: "Priyanka",
        hobby: "timepass"
    },
    {
        name: "Aseem",
        hobby: "Watch movie"
    },
]
Object.prototype.PKTestObj = function(){
    console.log(`Priyanka is present in all objects`);
}

// 3. 
let superHero = ["thor", "spiderman"] // Array

let superHeroPower = {  // object
    thor: "hammer",
    spiderman: "sling",

    superPowerfails: function(){
        console.log(`Power fails when no hammer ${this.thor}`)
    },

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// creating new method using prototype
Object.prototype.rechargePower = function() {
    console.log(`hammer gets recharged by thunder`);
    
}

Array.prototype.weapon = function(){
    console.log(`whose weapon is what: `);

}

superHero.rechargePower()
superHero.weapon()
// superHeroPower.weapon() // TypeError: superHeroPower.weapon is not a function

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}


/********************************Inheritence*****************************************/ 
// prototypal inheritence

const userObj = {
    name: "Priyanka",
    email: "pk@gmail.com"
}
const Enginner = {
    makeVideo: true
}

const TeachnicalSupport = {
    isAvailable: false
}

const TAsset = {
    makeAssignment: 'js Assignment',
    fullTime: true,
    __proto__: TeachnicalSupport
}

Enginner.__proto__= userObj // prototypal inheritence
// above is outdated approach
// Modern approach
Object.setPrototypeOf(TeachnicalSupport, Enginner)

// problem to solve
let myName = "Priyanka     "
let myPetName = " ABC      "

console.log("MMMM", myName)
// output expected: myName.trueLength
let anotherUsername = "ChaiChai  "

String.prototype.trueLength = function(){
        console.log(`${this.length}`);
        console.log(`true length is: ${this.trim().length}`);
        
        
}
anotherUsername.trueLength()
"pkkkkk".trueLength()
"gfhjkhg".trueLength()
// jis ne bulaya uska kaam. so this. anotherUsername or pkkkkk or gfhjkhg