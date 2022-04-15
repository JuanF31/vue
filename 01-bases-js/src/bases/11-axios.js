import axios from "axios";

const apiKey = 'mWKzMsFY0DDrcHQliBVdz9o0e3NEuq22'

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

export default giphyApi

// giphyApi.get('/random')
//     .then(response => {
//         const { data } = response.data
//         const { url } = data.images.original
//         const img = document.createElement('img')
//         img.src = url
//         document.body.append( img )
//     })