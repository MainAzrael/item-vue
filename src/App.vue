<template>
  <div id="app">
    <Footer v-show="$store.state.isShowFooter"/>
    <router-view/>
  </div>
</template>

<script>
import Footer from "@/components/Navigation/Footer"
// import uri from "@/config/uri";
export default {
  async created() {
  },
  components:{
    Footer,
  },
  data(){
    return {
      // isShowFooter:false
    }
  }
  

};
</script>
<style lang="scss">

</style>
