<template>
  <div class="item">
    <img :src="itemImg" alt="">
    <span class="title" v-html="title"></span>
    <span class="sub-title" v-html="subTitle"></span>
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
      showListenerNum: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        title: this.title,
        subTitle: this.subTitle,
        itemImg: this.itemImg,
        showListenerNum: this.showListenerNum
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
    img
      width 100%
    span
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
</style>
