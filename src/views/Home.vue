<template>
    <div>
        <joke-holder></joke-holder>
        <list-container></list-container>
    </div>
</template>

<script>
    import JokeHolder from '../components/JokeHolder'
    import ListContainer from '../components/ListContainer'

    export default {
        name: 'Home',

        components: {
            JokeHolder,
            ListContainer
        }
    }
</script>

<style>

</style>
