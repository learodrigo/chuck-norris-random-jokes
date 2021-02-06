<template>
    <div>
        <h3>Category</h3>
        <dropdown @update:option="changeReceived" v-model="dropdownValue" :categories="categories"></dropdown>
    </div>
</template>

<script>
    import Dropdown from './Dropdown'

    export default {
        name: 'ItemsList',
        props: ['categories'],

        components: {
            Dropdown
        },

        data: () => {
            return {
                dropdownValue: '',
            }
        },

        methods: {
            changeReceived (value) {
                this.dropdownValue = value
                this.$emit('update:option', value)
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>>
