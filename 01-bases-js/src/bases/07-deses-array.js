const characters = ['Goku', 'Vegeta', 'Trunks']

const [ goku, vegeta, trunks, goten = 'No existe' ] = characters

console.log( goku )
console.log( vegeta )
console.log( trunks )
console.log( goten )

const retrunArray = () => {
    return ['ABC',123]
}

const [ letters, numbers ] = retrunArray()
console.log( letters, numbers )
