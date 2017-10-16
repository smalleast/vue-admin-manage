<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <levelbar></levelbar>

  </el-menu>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Levelbar from './Levelbar'
  import {Hamburger} from 'components/vue/index'

  export default {
    components: {
      Levelbar,
      "hamburger": Hamburger
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ])
    }, methods: {
      toggleSideBar() {
        this.$store.dispatch('ToggleSideBar')
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    position: fixed;
    top: 50px;
    z-index: 10;
    .hamburger-container {
      line-height: 58px;
      height: 50px;
      float: left;
      padding: 0 10px;
    }

  }
</style>

