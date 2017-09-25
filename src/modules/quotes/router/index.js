import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/Layout.vue'
import Home from '../views/home/index.vue'
import BidList from '../views/order-bid/bid-list.vue'
import BidManage from '../views/order-bid/bid-manage.vue'


Vue.use(Router);
var router = new Router({
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: '/home/index',
      children: [
        {
          path: "/home/index",
          name: "企业看板",
          component: Home,
          children: []
        }, {
          path: "/order/bid-list",
          name: "竞价列表",
          component: BidList
        }, {
          path: "/order/bid-manage",
          name: "报价管理",
          component: BidManage
        }

      ]
    }]
});
export default router;
