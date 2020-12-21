<template>
  <div>
    <van-tabs
      v-model="Navactive"
      @click="clickTab"
      :class="{ topheader: show }"
    >
      <van-tab title="正在热映"></van-tab>
      <van-tab title="即将放映"></van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      show: false,
      Navactive: 0,
      urll: ["/films/nowPlaying", "/films/comingSoon"],
    };
  },
  created() {
    this.Navactive = this.urll.indexOf(this.$route.path);
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let top = document.documentElement.scrollTop;
      if (top > 100) {
        this.show = true;
      } else {
        this.show = false;
      }
    });
  },
  methods: {
    clickTab: function () {
      this.$router.push(this.urll[this.Navactive]);
    },
  },
};
</script>
<style lang="scss" scoped>
.topheader {
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 0;

}
</style>