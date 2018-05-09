<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ stringCounter }} </p> 
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

    export default {
        // Example 1 
        // computed: {
        //     counter() {
        //         return this.$store.state.doubleCounter;
        //     },
        //     clicks() {
        //         return this.$store.state.stringCounter;
        //     }
        // }

        // Example 2
        computed: mapGetters({
            doubleCounter: "doubleCounter",
            stringCounter: "stringCounter"
        })
    }
</script>