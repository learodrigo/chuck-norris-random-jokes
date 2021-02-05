<template>
    <div>
        <p v-text="dropdownValue"></p>

        <dropdown @update:option="handleChange"></dropdown>
    </div>
</template>

<script>
    import Dropdown from './Dropdown'

    export default {
        name: 'ItemsList',

        components: {
            Dropdown
        },

        data: () => {
            return {
                dropdownValue: 'This is the items list components'
            }
        },

        methods: {
            handleChange (value) {
                this.dropdownValue = value
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>>
