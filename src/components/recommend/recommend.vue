<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="slider.length > 0" class="slider-wrapper">
        <slider v-bind:loop="true">
          <div v-for="item in slider">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" alt="">
            </a>
          </div>
        </slider>
      </div>
      <div class="radio-list" v-if="radios.length > 0">
        <h3>电台</h3>
        <div class="radio-wrapper">
          <item
            v-for="item in radios"
            v-bind:title="item.Ftitle + item.Ftitle"
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
        <h3>热门歌单</h3>
      </div>
      <div>

      </div>
    </div>

  </div>

</template>
<script type="text/ecmascript-6">
  import Slider from '@/base/slider/slider';
  import {getRecommend} from '@/api/recommend';
  import {ERR_OK} from "../../api/config";
  import Item from './item';

  export default {
    components: {
      Slider,
      Item
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
    .radio-wrapper
      width: 100%
      display flex
      flex-direction row
      justify-content space-evenly
    img
      width: 48%
      display flex

</style>
