<template>
    <div class="container">
        <items-list @update:option="valueReceived" v-model="selectedOptions" :categories="categories"></items-list>

        <ul>
            <joke v-for="joke in allJokes.result" :key="joke.id" :joke="joke"></joke>
        </ul>
    </div>
</template>

<script>
    import Dropdown from './Dropdown'
    import ItemsList from './ItemsList'
    import Joke from './Joke'

    export default {
        name: 'ListContainer',

        components: {
            Dropdown,
            ItemsList,
            Joke
        },

        data: () => {
            return {
                allJokes: [],
                categories: [],
                selectedOptions: null
            }
        },

        methods: {
            valueReceived (category) {
                this.filterJokes(category)
            },

            async fetchAllJokes () {
                await axios.get('https://api.chucknorris.io/jokes/search?query=all')
                .then(res => this.allJokes = res.data)
                .catch(e => {
                    this.allJokes = []
                    console.error(e)
                })
                .finally(() => console.log('allJokes', this.allJokes))
            },

            async loadCategories () {
                await axios.get('https://api.chucknorris.io/jokes/categories')
                .then(res => this.categories = res.data)
                .catch(e => console.error(e))
            },

            filterJokes (category) {
                try {
                    this.fetchAllJokes()
                }
                catch (e) {
                    console.error(e)
                }
                finally {
                    const res = this.allJokes.result.filter(j => j.categories[0] === category)
                    this.allJokes = res
                }
            }
        },

        mounted () {
            try {
                this.loadCategories()
                this.fetchAllJokes()
            }
            catch (e) {
                console.error(e)
            }
        },
    }
</script>

<style lang="scss" scoped>
.container {
    display: block;
    margin: 0 auto;
    width: 400px;
}
</style>>
