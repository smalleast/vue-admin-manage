<template>
  <div id="appMain">
    <div class="app-wrapper" :class="{hideSidebar:false}">
      <div class="sidebar-wrapper">
        <Sidebar class="sidebar-container"></Sidebar>
      </div>
      <div class="main-container">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from "./Sidebar.vue";
  export default {
    name: "appMain",
    components: {
      Sidebar
    },
    computed: {
      sidebar() {

      }
    }
  }
</script>


<style rel="stylesheet/scss" lang="scss">
  @import "../../../components/styles/mixin.scss";

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  .child-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.hideSidebar {
      .sidebar-wrapper {
        transform: translate(-140px, 0);
        .sidebar-container {
          transform: translate(132px, 0);
        }
        &:hover {
          transform: translate(0, 0);
          .sidebar-container {
            transform: translate(0, 0);
          }
        }
      }
      .main-container {
        margin-left: 40px;
      }
    }
    .sidebar-wrapper {
      width: 180px;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1001;
      overflow: hidden;
      transition: all .28s ease-out;
    }
    .sidebar-container {
      transition: all .28s ease-out;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: -17px;
      overflow-y: scroll;
    }
    .main-container {
      min-height: 100%;
      transition: all .28s ease-out;
      margin-left: 180px;
    }
  }
</style>
