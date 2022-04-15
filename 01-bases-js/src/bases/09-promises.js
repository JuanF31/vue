// console.log('Inicio')

// new Promise( (resolve, reject) => {
//     console.log('Cuerpo de las promesas')
//     resolve('Promesa resulta', true)
// })
// .then( console.log )
// .catch( console.error )

// console.log('Fin')

import { getHeroById } from './bases/08-imp-exp'

const getHeroByIdAsync = ( id ) => {
    
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            const hero = getHeroById( id )

            if( hero ){
                resolve( hero )
            }else{
                reject( 'El hero no existe' )
            }
        }, 1000);
    });
}

getHeroByIdAsync( 3 )
    .then( response => console.log( `El héroe es: ${ response.name }` ) )
    .catch( console.warn ) 