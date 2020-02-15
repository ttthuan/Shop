<template>
<div>
  <div>{{message}}</div>
  <button @click="changeProp">btn</button>

</div>
</template>

<script>
export default {
    props: ["message"],
    data(){
        return {
            time: 0
        }
    },
    methods: {
        changeProp: function(){
            console.log("change");
            console.log(this.$parent);
            this.time++;
            this.$parent.updateMessage("new message " + this.time);
        }
    }
}
</script>

<style>

</style>