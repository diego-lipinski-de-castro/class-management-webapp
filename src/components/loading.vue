<template>
    <transition name="fade" tag="div">
        <div v-show="isLoading" class="loading-wrapper">
            <div class="loading-inner">
                <atom-spinner
                    :animation-duration="1000"
                    :size="60"
                    :color="'#00FFBA'">
                </atom-spinner>
            </div>
        </div>
    </transition>
</template>

<script>

    // vuex or events?

    import {AtomSpinner} from 'epic-spinners'

    export default {
        name: 'loading',
        components: {
            'atom-spinner': AtomSpinner
        },
        data() {
            return {
                isLoading: false
            }
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

    .loading-wrapper
        position fixed
        top 0
        left 0
        bottom 0
        right 0
        display flex
        justify-content center
        align-items center
        background-color rgba(black, 0.9)

</style>
