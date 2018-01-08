<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <button v-myOn:click="onClick">Custom directive</button>
                <button v-myOn:mouseenter="mauseOver">Custom directive 2</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            myOn: {
                bind(el, binding) {
                    let type = binding.arg;
                    let cb = binding.value;
                    el.addEventListener(type, cb);
                }
            }
        },
        methods: {
            onClick() {
                alert('Something');
            },
            mauseOver() {
                alert('Something Else');
            }
        }
    }
</script>

<style>

</style>
