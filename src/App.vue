<template>
    <div>
        <nav-bar></nav-bar>
        <joke-holder></joke-holder>
        <list-container></list-container>
    </div>
</template>

<script>
    import JokeHolder from './components/JokeHolder'
    import ListContainer from './components/ListContainer'
    import NavBar from './components/NavBar'

    export default {
        name: 'App',

        components: {
            JokeHolder,
            ListContainer,
            NavBar
        }
    }
</script>

<style lang="scss">

</style>
