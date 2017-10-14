<template>
  <div class="home-container">
    <table class="home-table" hidden>
      <tr>
        <td>
          <div class="home-div home-div-1">
            <span>258个</span>
            <span>订单数</span>
          </div>
        </td>
        <td>
          <div class="home-div home-div-2">
            <span>358个</span>
            <span>订单数</span></div>
        </td>
        <td>
          <div class="home-div home-div-3">
            <span>458个</span>
            <span>订单数</span></div>
        </td>
        <td>
          <div class="home-div home-div-4">
            <span>558个</span>
            <span>订单数</span></div>
        </td>
      </tr>
    </table>
    <img :src="homeImg" class="homeImg" alt="">
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import homeIndex from '../../../../assets/images/index.png';

  export default {
    name: 'page2',
    data: function () {
      return {
        homeImg: homeIndex
      }
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .home {
    &-container {
      padding: 10px;
    }
    &-table {
      width: 100%;
      height: 160px;
      td {
        padding: 10px;
      }
    }
    &-div {
      width: 100%;
      height: 100%;
      color: #fff;
      > span {
        font-size: 18px;
      }
      &-1 {
        background-color: #b5abd6;
      }
      &-2 {
        background-color: #66cccc;
      }
      &-3 {
        background-color: #efc9a2;
      }
      &-4 {
        background-color: #c1e4c1;
      }
      text-align: center;
      > span {
        &:nth-child(1) {
          width: 94%;
          display: inline-block;
          text-align: right;
          margin-top: 10px;
        }
        &:nth-child(2) {
          width: 94%;
          display: inline-block;
          text-align: left;
          margin-top: 74px;
        }
      }
    }
  }

  .homeImg {
    width: calc(100% - 180px);
    height: calc(100% - 100px);
    object-fit: contain;
  }

</style>
