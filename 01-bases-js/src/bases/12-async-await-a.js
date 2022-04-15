const miPromesa = () => {
    return new Promise( resolve => {
        setTimeout( () => {
            resolve('Tenemos un valor en la promesa')
        }, 1000);
    })
}

const medirTiempoAsync = async () => {

    try {
        console.log('inicio')

        const respuesta = await miPromesa()
        console.log(respuesta)
    
        console.log('fin')
        
        return 'fin de medir tiempo async'
    } catch (error) {
        return 'catch en medirTiempoAsync'
    }

}

medirTiempoAsync()
    .then( response => console.log( 'THEN exitoso:', response ))
    .catch( error => console.error( 'error:', error ))
