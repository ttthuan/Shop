<template>
  <div>
    <nav class="colorlib-nav" role="navigation">
      <Toolbar />
      <Sale />
    </nav>
  </div>
</template>

<script>
import Toolbar from "../common/Toolbar.vue";
import Sale from "../common/Sale.vue";

export default {
  components:{
    Toolbar,
    Sale
  }
};
</script>

<style>
</style>