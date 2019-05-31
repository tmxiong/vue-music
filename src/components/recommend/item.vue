<template>
  <div class="item">
    <div class="img-container">
      <img :src="itemImg" alt="">
      <div class="listen-num" v-show="showListenCount">
        <i class="icon-music"></i>
        <span>{{listenCount}}</span>
      </div>
      <i class="icon-play"></i>
    </div>

    <span class="title">{{title}}</span>
    <span class="sub-title">{{subTitle}}</span>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: 'title'
      },
      subTitle: {
        type: String,
        default: 'subTitle'
      },
      itemImg: {
        type: String,
        default: 'http://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg',
      },
      showListenCount: {
        type: Boolean,
        default: false
      },
      listenCount: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .item
    width calc((100% - 30px) / 2)
    display flex
    flex-direction column
    align-items flex-start
    height auto
    background-color #fff
    margin-bottom 20px
    .img-container
      position relative
      color #fff
    img
      width 100%
    > span
      line-height 24px
      font-size 14px
      color #222
      padding 0 5px
      max-width: 97%;
      text-overflow: ellipsis;
      word-break: keep-all;
      overflow: hidden;
    .sub-title
      font-size 12px
      line-height 20px
    .listen-num
      display flex
      flex-direction row
      position absolute
      bottom 0
      align-items center
      width 100%
      height 30px
    .icon-play
      font-size 25px
      position absolute
      right 5px
      z-index 99
      bottom 5px


</style>
