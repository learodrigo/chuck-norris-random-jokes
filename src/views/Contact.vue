<template>
    <div class="contact">
        <joke-holder></joke-holder>
        <h1>Hello World!</h1>
        <info></info>
    </div>
</template>

<script>
    import Info from '../components/Info'
    import JokeHolder from '../components/JokeHolder'

    export default {
        name: "Contact",

        components: {
            Info,
            JokeHolder
        }
    }
</script>

<style scoped>

</style>
