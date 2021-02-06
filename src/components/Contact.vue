<template>
    <div class="contact">
        <nav-bar></nav-bar>
        <joke-holder></joke-holder>
        <h1>Hello World!</h1>
        <info></info>
    </div>
</template>

<script>
    import Info from './Info'
    import JokeHolder from './JokeHolder'
    import NavBar from './NavBar'

    export default {
        name: "Contact",

        components: {
            JokeHolder,
            NavBar,
            Info
        }
    }
</script>

<style scoped>

</style>
