<template>
  <div id="SidebarItem">
    <template v-for="item in routes">
      <router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0"
                   :to="item.path+'/'+item.children[0].path">
        <el-menu-item :index="item.path+'/'+item.children[0].path">
          <i class="sider-icon" :class="item.children[0].icon"></i>{{item.children[0].name}}
        </el-menu-item>
      </router-link>
      <el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden">
        <template slot="title">
          <i class="sider-icon" :class="item.icon"></i>{{item.name}}
        </template>
        <template v-for="child in item.children" v-if='!child.hidden'>
          <sidebar-item class='menu-indent' v-if='child.children&&child.children.length>0'
                        :routes='[child]'></sidebar-item>
          <router-link v-else class="menu-indent" :to="item.path+'/'+child.path">
            <el-menu-item :index="item.path+'/'+child.path">
              {{child.name}}
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
    <el-menu-item :index="''" @click.native="onLogout">
      <i class="sider-icon zl-icon zl-icon-sider zl-icon-sider-7"></i>退出登录
    </el-menu-item>
  </div>
</template>

<script>

  export default {
    name: 'SidebarItem',
    props: {
      routes: {
        type: Array
      }
    },
    components: {},
    methods:{
      onLogout(){
        this.$store.dispatch('LogOut').then(() => {
          location.reload()  // 为了重新实例化vue-router对象 避免bug
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .sider-icon {
    font-size: 15px;
    width: 28px;
    display: inline-block;
  }

  .menu-indent {
    .el-menu-item {
      padding-left: 50px !important;
    }
  }

  .hideSidebar .menu-indent {
    display: block;
    text-indent: 10px;
  }

  .el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 180px;
  }
</style>

