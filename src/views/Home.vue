<template>
  <div >
    <HomeLayout msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import HomeLayout from '@/layouts/HomeLayout.vue'

export default {
  name: 'Home',
  components: {
    HomeComponent,
    HelloWorld,
    HomeLayout
  }
}
</script>
