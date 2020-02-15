
<template>
<div>
<Header v-bind:message="message"/>
    <div>{{currentTime.hour}}</div>
</div>
</template>
<script>
import Header from "../components/home/Header"
//vue lifecyle
//vue route
//vue
import {mapAction} from 'vuex'
export default {
  components: {
    Header
  },
  data() {
      return {
         message: "abc" ,
         pokes: [],
         time:0,
         hour: 1,
         minute: 10,
        second: 20
      }
  },
  methods:{
      updateMessage(mess){
          console.log("updateMess " + mess);
          
          this.message = mess;
      }
  },
  computed: {
    currentTime(){
        return {
            hour: this.hour,
            minute: this.minute,
            second: this.second
        }
    },
  console() { return console; }
  },
  beforeCreated(){
      mapAction: ["fetchTodos"]
  },
  created(){
      //
    //   this.time=1;
    //   console.log(this.message+this.time);
    console.log("created " +new Date().getTime());
  },
    mounted(){
        this.$store.getters.allTodos;
      //
    //   this.time=2;
    //   console.log(this.message+this.time);
  }
}
</script>

<style>

</style>