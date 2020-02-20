<template>
  <div class="colorlib-product">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2 text-center colorlib-heading">
          <h2>Best Sellers</h2>
        </div>
      </div>
      <div class="row row-pb-md" v-for="product in products" :key="product.id">
         <ProductItem :item = "product" />
        <div class="w-100"></div>
      </div>

      <div class="row">
        <div class="col-md-12 text-center">
          <p>
            <a href="#" class="btn btn-primary btn-lg">Shop All Products</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import * as ActionTypes from "@/store/action-types";
import ProductItem from "./ProductItem";

export default {
  components: {
    ProductItem
  },
  data: () => {
    return {};
  },
  computed: mapState(["products"]),
  methods: {
    ...mapActions({
      getProducts: `${ActionTypes.GET_PRODUCTS}`
    })
  },
  created() {
    this.getProducts();
  }
};
</script>

<style>
</style>