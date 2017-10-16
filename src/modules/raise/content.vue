<template>
  <section class="raise">
    {{detail}}
  </section>
</template>

<script>
  import {AppBase, $Api, $Types, $Config, $Wechat} from 'components/vue/index';


  export default {
    data() {
      return {
        detail: '这是测试页面'
      }
    },
    methods: {
      more: () => {

      }
    },
    name: 'raise',
    components: {},
    created() {

    },
    mounted() {

    }
  }
</script>
