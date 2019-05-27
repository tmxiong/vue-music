<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="recommends.length > 0" class="slider-wrapper">
        <slider v-bind:loop="true">
          <div v-for="item in recommends">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" alt="">
            </a>
          </div>
        </slider>
      </div>
    </div>
    <div>热门推荐</div>
  </div>

</template>
<script type="text/ecmascript-6">
  import Slider from '@/base/slider/slider';
  import {getRecommend} from '@/api/recommend';
  import {ERR_OK} from "../../api/config";

  export default {
    components: {
      Slider
    },
    data() {
      return {
        recommends: [],
      }
    },
    methods: {
      _getRecommend() {
        getRecommend.apply(this).then((res)=> {
          if(res.code === ERR_OK) {
            this.recommends = res.data.slider;
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
</style>
