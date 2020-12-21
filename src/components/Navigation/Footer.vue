<template>
  <div>
    
    <van-tabbar v-model="active" @change="changeTab">
      <van-tabbar-item>
        <van-icon class="iconfont icon-dianying" slot="icon" size="1.1rem" />
        <span>电影</span>
      </van-tabbar-item>
      <van-tabbar-item icon="search">
        <van-icon class="iconfont icon-yingyuan" slot="icon" size="1.1rem" />
        <span>影院</span>
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o">
        <van-icon
          class="iconfont icon-yixianshi_huaban"
          slot="icon"
          size="1.1rem"
        />
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import "@/assets/icon/iconfont.css";
import Vue from "vue";
import { Tabbar, TabbarItem, Icon ,Tab, Tabs } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);


export default {
  data() {
    return {
      active: 0,
      url: ["/films", "/cinemas", "/center"],
    }  
  },
  created() {
    this.active = this.url.indexOf(this.$route.path) === -1? 0 :this.url.indexOf(this.$route.path);
    
    
  },
  methods: {
    changeTab: function (index) {
      this.$router.push(this.url[index]);
    },
    
  },
};
</script>
<style scoped>
</style>