<template>
    <div>
        <div> {{$t('home')}} </div>
        <button @click="togglelang"> togglelang </button>
    </div>
</template>

<script>

    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: 'home',
        computed: {
            ...mapGetters([
                'getLocale'
            ])
        },
        methods: {
            ...mapActions([
                'setLocale'
            ]),
            togglelang() {
                if(this.getLocale === 'pt-br') {
                    this.setLocale('en-us')
                } else {
                    this.setLocale('pt-br')
                }
            }
        }
    }

</script>
