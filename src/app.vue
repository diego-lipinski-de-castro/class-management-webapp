<template>
    <div id="app">

        <connection></connection>
        <loading></loading>

        <router-view></router-view>

    </div>
</template>

<script>

    import {mapActions} from 'vuex'

    import {connection, loading} from './components/'

    export default {
        name: 'app',
        components: {
            connection,
            loading
        }
    }

</script>

<style lang="">
</style>
