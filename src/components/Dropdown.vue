<template>
    <select name="dropdown" id="dropdown" v-model="selectedOptions" @change="handleChange">
        <option value="null" disabled>Select an option</option>
        <option value="Opt 1">Opt 1</option>
        <option value="Opt 2">Opt 2</option>
        <option value="Opt 3">Opt 3</option>
    </select>
</template>

<script>
    export default {
        name: 'Dropdown',

        data: () => {
            return {
                selectedOptions: null
            }
        },

        methods: {
            handleChange (value) {
                this.$emit('update:option', this.selectedOptions)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>>
