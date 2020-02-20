<template>
  <div class="col-lg-3 mb-4 text-center">
    <div class="product-entry border">
      <router-link class="prod-img" v-bind:to="{ name: 'ProductDetail', params: { id: item.id }}">
        <img :src="item.imageUrl" class="img-fluid" alt="Free html5 bootstrap 4 template" />
      </router-link>
      <div class="desc">
        <h2>
          <router-link v-bind:to="{ name: 'ProductDetail', params: { id: item.id }}">{{item.title}}</router-link>
        </h2>
        <span class="price">${{item.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// routing tới  trang  product-detail?
export default {
  components: {},
  props: {
    item: Object
  }
};
</script>

<style>
</style>