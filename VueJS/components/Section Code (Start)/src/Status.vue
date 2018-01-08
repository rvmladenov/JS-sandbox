<template>
  <div>
      <h1>Status is: [{{status}}]
      </h1>
      <hr />
      <button type="button" @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            defaultStatus: "Normal",
            status: "Normal"
        };
    },
    methods: {
        changeStatus() {
         this.status = this.status == this.defaultStatus ? 'NOT' : this.defaultStatus;
        }
    }
}
</script>

<style>

</style>
