<template>
    <div>
        <button class="btn btn-primary" @click="increment({by: 100})">Increment</button>
        <button class="btn btn-primary" @click="decrement({by: 50})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from "vuex";
    
    export default {
        // methods: {
        //     increment() {
        //         this.$store.state.counter++;
        //     },
        //     decrement() {
        //         this.$store.state.counter--;
        //     }
        // }

        methods: {
            ...mapActions([
                'decrement', 'increment'
            ])}
    }
</script>