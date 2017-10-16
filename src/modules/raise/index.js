import 'components/styles/index.scss'
import './style.scss'
import Vue from 'vue'
import content from './content.vue'

new Vue({
  el: '#app',
  render: h => h(content)
});
