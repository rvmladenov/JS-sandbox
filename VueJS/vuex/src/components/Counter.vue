<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                console.log(this.$store.state.counter);
                this.$store.state.counter++;
            },
            decrement() {
                this.$store.state.counter--;
            }
        }
    }
</script>