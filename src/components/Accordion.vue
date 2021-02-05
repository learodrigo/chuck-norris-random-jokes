<template>
    <div>
        <h3>{{ item.title }}</h3>
        <h4 @click="toggle = ! toggle">Details</h4>
        <p v-if="toggle">{{ item.desc }}</p>
    </div>
</template>

<script>
export default {
    name: "Accordion",

    props: ['item'],

    data: () => {
        return {
            toggle: false,
        }
    }
}
</script>

<style scoped>

</style>
