<template>
    <div>
        <div class="flex">
            <h3>{{ item.title }}</h3>
            <button @click="toggle = ! toggle">Details</button>
        </div>

        <p class="block description" v-if="toggle">{{ item.desc }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Accordion',

        data: () => {
            return {
                toggle: false
            }
        },

        props: ['item']
    }
</script>

<style lang="scss" scoped>
.description {
    background-color: lightgray;
    padding: 10px;
}
.flex > *:first-child {
    margin-right: 8px;
}
</style>
