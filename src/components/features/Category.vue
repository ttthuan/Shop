<template>
  <div>
    <div class="colorlib-product">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6 text-center">
            <div class="featured">
              <a href="#" class="featured-img" style="background-image: url(images/men.jpg);"></a>
              <div class="desc">
                <h2>
                  <a href="#">Shop Men's Collection</a>
                </h2>
              </div>
            </div>
          </div>
          <div class="col-sm-6 text-center">
            <div class="featured">
              <a href="#" class="featured-img" style="background-image: url(images/women.jpg);"></a>
              <div class="desc">
                <h2>
                  <a href="#">Shop Women's Collection</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"],
  data() {
    return {
      time: 0
    };
  },
  methods: {
    changeProp: function() {
      console.log("change");
      console.log(this.$parent);
      this.time++;
      this.$parent.updateMessage("new message " + this.time);
    }
  }
};
</script>

<style>
</style>