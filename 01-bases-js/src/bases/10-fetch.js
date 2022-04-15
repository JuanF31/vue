const apiKey = 'mWKzMsFY0DDrcHQliBVdz9o0e3NEuq22'
//https://api.giphy.com/v1/gifs/random?api_key=mWKzMsFY0DDrcHQliBVdz9o0e3NEuq22

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then( response => response.json() )
    .then(({ data }) => {
        const { url } = data.images.original 
        
        const img = document.createElement( 'img' )
        img.src = url
        document.body.append( img )

    })
    .catch( error => console.error( error ) )
