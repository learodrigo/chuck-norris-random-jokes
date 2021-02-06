<template>
    <header>
        <joke :key="cardJoke.id" :joke="cardJoke"></joke>
    </header>
</template>

<script>
    import Joke from './Joke'

    export default {
        name: 'JokeHolder',
        props: ['joke'],

        components: {
            Joke
        },

        data: () => {
            return {
                cardJoke: {}
            }
        },

        methods: {
            async newRandomJoke () {
                await axios.get('https://api.chucknorris.io/jokes/random')
                .then(res => this.cardJoke = {
                    id: res.id,
                    url: res.url,
                    value: res.value
                })
                .catch(e => {
                    this.cardJoke.value = "No quotes found, try something else"
                    console.error(e)
                })
            },
        },

        mounted() {
            this.newRandomJoke()
        },
    }
</script>

<style lang="">

</style>
