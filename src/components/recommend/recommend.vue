<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="slider.length > 0" class="slider-wrapper">
        <slider v-bind:loop="true">
          <div v-for="item in slider" :key="item.picUrl">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" alt="">
            </a>
          </div>
        </slider>
      </div>
      <div class="radio-list" v-if="radios.length > 0">
        <h3 class="header">电台</h3>
        <div class="radio-wrapper-comm">
          <item
            v-for="item in radios"
            :key="item.title"
            v-bind:title="item.Ftitle"
            v-bind:subTitle="''"
            v-bind:itemImg="item.picUrl"
          ></item>
          <!--<div class="radio-item" v-for="item in radios">-->
            <!--<img :src="item.picUrl" alt="">-->
            <!--<span>{{item.Ftitle}}</span>-->
          <!--</div>-->
        </div>
      </div>
      <div class="song-list">
        <h3 class="header">热门歌单</h3>
        <div class="song-wrapper-comm">
          <item
            v-for="item in songs"
            :key="item.title"
            v-bind:title="item.songListDesc"
            v-bind:subTitle="item.songListAuthor"
            v-bind:itemImg="item.picUrl"
            v-bind:showListenCount="true"
          ></item>
        </div>
      </div>
      <div>

      </div>
    </div>
    <div class="loading-container" v-show="songs.length === 0">
      <loading v-bind:title="'正在加载'"></loading>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
  import Slider from '@/base/slider/slider';
  import {getRecommend} from '@/api/recommend';
  import Loading from '../../base/loading/loading';
  import {ERR_OK} from "../../api/config";
  import Item from './item';
  import Singer from '../../common/js/singer'

  var s = new Singer('周杰伦','男','18')
  console.log(s);

  export default {
    components: {
      Slider,
      Item,
      Loading
    },
    data() {
      return {
        slider: [],
        radios: [],
        songs: []
      }
    },
    methods: {
      _getRecommend() {
        getRecommend.apply(this).then((res)=> {
          if(res.code === ERR_OK) {
            this.slider = res.data.slider;
            this.radios = res.data.radioList;
            this.songs = res.data.songList;
          }
        })
      }
    },
    created() {
      this._getRecommend();
    }
  }
</script>
<style scoped lang="stylus">
  @import "../../common/stylus/variable.styl"

  .radio-list
    width: 100%

  .header
    line-height 40px
    padding-left 10px

  [class$="wrapper-comm"]
    width: 100%
    display flex
    flex-direction row
    justify-content space-evenly
    flex-wrap wrap


</style>
