<template>
    <div class="col-lg-3 mb-4 text-center">
      <div class="product-entry border">
        <a href="#" class="prod-img">
          <img :src="item.imageUrl" class="img-fluid" alt="Free html5 bootstrap 4 template" />
        </a>
        <div class="desc">
          <h2>
            <a href="#">{{item.title}}</a>
          </h2>
          <span class="price">${{item.price}}</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    item: Object
  }
};
</script>

<style>
</style>