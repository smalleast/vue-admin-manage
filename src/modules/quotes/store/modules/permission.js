import Home from '../../views/home/index.vue';
import BidList from '../../views/order-bid/bid-list.vue';
import BidManage from '../../views/order-bid/bid-manage.vue';

const permission = {
  state: {
    routers: [
      {
        path: '/home',
        component: Home,
        redirect: 'home/index',
        name: '企业看板',
        icon: 'zujian',
        noDropdown: true,
        children: [
          {
           path: 'index', name: '企业看板', component: Home
          }
        ]
      },
      {
        path: '/order',
        name: "订单竞价",
        icon: 'tubiao',
        noDropdown: false,
        children: [
          {
            path: 'bid-list', name: '竞价列表', icon: 'zonghe', component: BidList
          },
          {
            path: 'bid-manage', name: '报价管理', icon: 'zonghe', component: BidManage
          }]
      }
    ],
    addRouters: []
  }
};

export default permission
