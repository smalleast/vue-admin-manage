<template>
  <section class="app">
    <nav class="nav-top">
      <el-row class="nav-row" type="flex" align="middle">
        <el-col :span="21">
          <i class="zl-icon zl-icon-logo"></i><span class="system-name">工业4.0系统</span>
        </el-col>
        <el-col :span="1" align="middle">
          <i class="zl-icon zl-icon-message zl-icon-message-1"></i>
        </el-col>
        <el-col :span="1" align="middle">
          <i class="zl-icon zl-icon-message zl-icon-message-2"></i>
        </el-col>
        <el-col style="width: 83px;">

        </el-col>

      </el-row>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <i class="zl-icon zl-icon-message zl-icon-message-3"></i>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu class="user-dropdown" slot="dropdown">
          <router-link class='inlineBlock' to="/">
            <el-dropdown-item>
              主页
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided><span @click="logout" style="display:block;">退出登录</span></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </section>
</template>
<script>
  import {AppBase, $Api} from '../../components/vue/index';

  export default {
    data() {
      return {}
    },
    methods: {
      logout() {
        this.$store.dispatch('LogOut').then(() => {
           location.reload()  // 为了重新实例化vue-router对象 避免bug
         })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .app {
    .nav {
      &-top {
        width: 100%;
        height: 50px;
        background: rgba(61, 114, 166, 1);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
      }
      &-row {
        height: 50px;
      }
      &-icon {
        font-size: 24px;
        color: #fff;
      }
    }
    .logo {
      height: 26px;
      margin-left: 22px;
    }
    .errLog-container {
      display: inline-block;
      position: absolute;
      right: 150px;
    }
    .screenfull {
      position: absolute;
      right: 90px;
      top: 16px;
      color: red;
    }
    .avatar-container {
      height: 50px;
      display: inline-block;
      position: absolute;
      right: 35px;
      top: 0;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 10px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 15px;
          font-size: 12px;
          color: #fff;
        }
      }
    }
    .system-name {
      color: rgb(230, 237, 244);
      font-size: 13px;
      margin-left: 10px;
      display: inline-block;
      top: -5px;
      position: relative;
      letter-spacing: 1px;
    }
  }
</style>
