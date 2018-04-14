<template>
    <transition name="fade" tag="div">
        <div v-show="!isOnline" class="connection-wrapper">
            <div class="connection-inner">
                <span> You're offline! </span>
            </div>
        </div>
    </transition>
</template>

<script>

    // vuex or events?

    import {mapActions, mapGetters} from 'vuex'

    const EVENTS = ['online', 'offline']

    export default {
        name: 'connection',
        computed: {
            ...mapGetters([
                'isOnline'
            ])
        },
        methods: {
            ...mapActions([
                'setConnection'
            ]),
            updateConnectionStatus() {
                this.setConnection(navigator.onLine)
            }
        },
        mounted() {
            EVENTS.forEach(event => window.addEventListener(event, this.updateConnectionStatus))
        },
        beforeDestroy() {
            EVENTS.forEach(event => window.removeEventListener(event, this.updateConnectionStatus))
        }
    }

</script>

<style lang="stylus" scoped>

    .fade-enter-active
    .fade-leave-active
        transition opacity .5s

    .fade-enter
    .fade-leave-to
        opacity 0

    .connection-wrapper
        position fixed
        width 200px
        height 60px
        bottom 10px
        right 10px
        display flex
        justify-content center
        align-items center
        background-color #00FFBA
        border-radius 4px

</style>
