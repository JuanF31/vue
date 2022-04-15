const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    // power: 'Money'
}


// console.log( name, age, codeName, power)
const createHero = ({ name, age, codeName, power = 'No tiene poder' }) => ({
    id: 315121015,
    name,
    age,
    codeName,
    power
})

console.log( createHero( person ) )
