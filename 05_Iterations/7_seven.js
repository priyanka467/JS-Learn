const myTeam = [1, 2, 3, 4, 10, 12, 14]
// const mapVal = myTeam.map( (key) => { return key + 1})
const mapVal = myTeam.map( (key) => {return key * 10})
                     .map( (key) => {return key + 5})
                     .filter( (key) => {return key >=30 })
console.log(mapVal);