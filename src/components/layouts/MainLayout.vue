<template>
  <div>
    <div id="page">
      <Header />
      <!-- <Slider /> -->
      <Intro />
      <Category />
      <ListProduct />
      <Partners />
      <FooterDetail />
    </div>
  </div>
</template>

<script>
import Header from "../header/Header.vue";
// import Slider from "../common/Slider.vue";
import Intro from "../common/Intro.vue";
import Category from "../features/Category.vue";
import ListProduct from "../features/ListProduct.vue";
import Partners from "../features/Partners.vue";
import FooterDetail from "../footer/FooterDetail.vue";

export default {
  components: {
    Header,
    // Slider,
    Intro,
    Category,
    ListProduct,
    Partners,
    FooterDetail
  }
};
</script>

<style>
</style>