<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>

                <p>{{ text | toUpper | to-lowercase }}</p>
                <hr />

                <input v-model="filterText" />
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>

                <hr />
                <list-comp></list-comp>
            </div>
        </div>
    </div>
</template>

<script>
    import List from "./List.vue";
    import { fruitMixin } from "./fruitMixin";

    export default {
        mixins: [fruitMixin],
        data() {
            return {
                text: "Hello bitches",
            }
        },
        filters: {
            toUpper(value) {
                return value.toUpperCase();
            }
        },
        components: {
            listComp: List
        }
    }
</script>

<style>

</style>
