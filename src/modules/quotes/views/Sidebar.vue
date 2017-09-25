<template>
  <section id="sidebar">
    <el-menu mode="vertical" theme="dark" :default-active="$route.path">
      <sidebar-item :routes='permission_routers'></sidebar-item>
    </el-menu>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'
  import SidebarItem from './SidebarItem'
  export default {
    name: "sidebar",
    components: {SidebarItem},
    computed: {
      ...mapGetters([
        'permission_routers'
      ])
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-menu {
    min-height: 100%;
  }
</style>
