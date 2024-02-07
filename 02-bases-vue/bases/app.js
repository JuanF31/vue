const app = Vue.createApp({
    // template: `
        // <h1>Hola Mundo</h1>
        // <p> {{ 1 + 1 }} </p>
    // `

    // Option API
    // methods: {},
    // watch: {},
    // Composition API
    // setup() {}

    data() {
        return {
            autor: 'Bruce Wayne',
            quote: "I'm Batman"
        }
    },
    methods: {
        changeQuote() {
            this.autor = "Juan Francisco"
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }
})
app.mount('#app')