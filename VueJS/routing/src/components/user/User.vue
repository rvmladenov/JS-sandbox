<template>
    <div>
        <h1>The User Page {{ idQuery }}</h1>
        <button @click="home" class="btn btn-primary">Go To Home</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    props: {
        idQuery: {
            type: String,
            default: '34'
        }
    },
    methods: {
        home() {
            this.$router.push('/');
        }
    }
}
</script>
