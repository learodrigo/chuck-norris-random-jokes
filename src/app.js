import Vue from 'vue'
import Accordion from './components/Accordion'

new Vue({
    el: '#app',

    components: {
        Accordion,
    },

    data: {
        items: [
            {id: 1, title: 'Title 1', desc: 'Description for 1'},
            {id: 2, title: 'Title 2', desc: 'Description for 2'},
            {id: 3, title: 'Title 3', desc: 'Description for 3'},
            {id: 4, title: 'Title 4', desc: 'Description for 4'},
            {id: 5, title: 'Title 5', desc: 'Description for 5'},
            {id: 6, title: 'Title 6', desc: 'Description for 6'},
            {id: 7, title: 'Title 7', desc: 'Description for 7'}
        ]
    }
})
