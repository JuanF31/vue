// Funciones tipicas
function saludar( nombre ) {
    return `Hola ${ nombre }`;
}

const nombre = 'Tony'

console.log( saludar( nombre ) )
// ------------------------------

// funciones en constantes
const saludar2 = function( nombre ) {
    return `Hola ${ nombre }`;
}

console.log( saludar2( nombre ) )
// --------------------------------

//Funciones de flecha || funcion lambda
const saludar3 = ( nombre ) => {
    return `Hola ${ nombre }`;
}
//const saludar3 = ( nombre = 'Peter' ) => `Hola ${ nombre }`;  
console.log( saludar3( 'Peter' ) ) 


const getUser = () =>  ({ 
    uid: 'ABC1123', 
    username: 'Tony001'
})
console.log( getUser() )

const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}]

const { id, name } = heroes.find( ( hero ) => hero.id === 1 )

console.log( id, name )