<template>
  <div>
    <div id="page">
      <HeaderDetail />
      <Category/>
      <ListProduct/>
      <Partners/>
      <FooterDetail />
    </div>
  </div>
</template>

<script>
import HeaderDetail from "../header/HeaderDetail.vue";
import FooterDetail from "../footer/FooterDetail.vue";

import Category from "../features/category/Category.vue"
import ListProduct from "../features/products/ListProduct.vue";
import Partners from "../features/partners/Partners.vue";

export default {
  components: {
    HeaderDetail,
    FooterDetail,
    Category,
    ListProduct,
    Partners
  }
};
</script>

<style>
</style>