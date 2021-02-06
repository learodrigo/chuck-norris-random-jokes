import Vue from 'vue'

window.axios = require('axios')

// Components
import ListContainer from './components/ListContainer'
import JokeHolder from './components/JokeHolder'

new Vue({
    el: '#app',

    components: {
        ListContainer,
        JokeHolder
    },
})
