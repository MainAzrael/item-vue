<template>
  <div id="taifont">
    <van-pull-refresh v-model="isLoading2" @refresh="onRefresh">
      <van-loading size="24px" type="spinner" vertical v-show="isLoading"
        >加载中...</van-loading
      >
      <van-card
        v-for="time in list"
        :key="time.filmId"
        @click="getdatail(time.filmId)"
      >
        <template #title>
          <div>
            {{ time.name
            }}<span class="filmtype">{{ time.filmType.name }}</span>
          </div>
        </template>
        <template #thumb>
          <img :src="time.poster" />
        </template>
        <template #desc>
          <div>
            <div>评分 {{ time.grade }}</div>
            <div>
              主演 : {{ time.actors | parserActors }}
              <div class="nowPlayingFilm-buy" style="float: right">购票</div>
            </div>
            <div>{{ time.nation }} | {{ time.runtime }}</div>
          </div>
        </template>
      </van-card>
    </van-pull-refresh>
  </div>
</template>
<script>
import uri from "@/config/uri";
import Vue from "vue";
import { Card, Loading, PullRefresh } from "vant";
Vue.use(Card);
Vue.use(Loading);
Vue.use(PullRefresh);
export default {
  data() {
    return {
      list: [],
      pageNum:1,
      isLoading: true,
      isLoading2:true,
    };
  },
  created() {
    this.$http.get(uri.getNowPlaying).then((ret) => {
      this.list = ret.data.films;
      this.isLoading = false;
    });
  },
  filters: {
    parserActors(actors) {
      if (actors) {
        let tmg = "";
        actors.forEach((el) => {
          tmg += el.name + " ";
        });
        return tmg.substr(0, 20) + "...";
      } else {
        return "暂无演员";
      }
    },
  },
  methods: {
    getData(cd= null){
      this.$http.get(uri.getNowPlaying + `?pageNum=${this.pageNum}`).then(ret=>{
        console.log();
        if(this.pageNum < Math.ceil(ret.data.total/10)){
          this.pageNum ++;
          this.list= [...ret.data.films, ...this.list];
        }
        if(cd == null){
          this.isLoading=false;
        }else{
          cd();
        }
      })
    },
    getdatail(filmId) {
      this.$router.push("/film/" + filmId);
    },
    onRefresh(){
      this.getData((el)=>{
        this.isLoading2 = false
      })
    }
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 66px;
  height: 90px;
  border-radius: 0;
}
.filmtype {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
}
#taifont {
  margin-bottom: 50px;
}
.nowPlayingFilm-buy {
  line-height: 25px;
  height: 25px;
  width: 50px;
  border: 1px solid;
  color: #ff5f16;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: relative;
}
</style>