<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 100, duration: 200})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 400})">Decrement</button>
    </div>
</template>

<script>

    import { mapMutations, mapActions } from "vuex";

    export default {

        // Example 1 - procedural way - ste by step
        // methods: {
            //     increment() {
                //         this.$store.commit('increment');
        //     },
        //     decrement() {
            //         this.$store.commit('decrement');
        //     }
        // }

        // // Example 2 - using mutations
        // methods: mapMutations({
        //     increment: "increment", 
        //     decrement: "decrement"
        // })

        // // Example 3 - Synchronous actions
        // methods: {
        //     ...mapActions([
        //         'increment', 'decrement'
        //     ])}

        // // Example 4 - Asynchronous actions
        methods: {
            ...mapActions([
                'asyncDecrement', 'asyncIncrement'
            ])}
    }
</script>