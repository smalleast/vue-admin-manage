import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/Layout.vue'
import Login from '../views/login/index.vue'
import Error404 from '../views/404.vue'
import Home from '../views/home/index.vue'
import OrderList from '../views/order/list.vue'
import OrderDetail from '../views/order/detail.vue'
import OrderManage from '../views/order/manage.vue'
import ContractList from '../views/contract/list.vue'
import ContractDetail from '../views/contract/detail.vue'
import StockMarket from '../views/stock/market.vue';
import StockDemand from '../views/stock/demand.vue';
import StockList from '../views/stock/list.vue';
import StockDetail from '../views/stock/detail.vue';
import Consign from '../views/consign/index.vue';
import ErpPlan from '../views/erp/plan.vue';
import ErpProduct from '../views/erp/product.vue';
import ErpStock from '../views/erp/stock.vue';
import ErpSeller from '../views/erp/seller.vue';
import ErpWorkshop from '../views/erp/workshop.vue';
import ErpWarehouse from '../views/erp/warehouse.vue';
import ErpFinance from '../views/erp/finance.vue';
import ErpPerson from '../views/erp/person.vue';


Vue.use(Router);

export const constantRouterMap = [
  { path: '/login', component: Login, hidden: true },
  { path: '/404', component:Error404, hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'Home',
    hidden: true,
    children: [{ path: 'home', component: Home }]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/detail',
    name: '批量报价页',
    hidden: true,
    children: [{ path: 'detail', component: OrderDetail }]
  },
  {
    path: '/contract',
    component: Layout,
    redirect: '/contract/detail',
    name: '合同详情页',
    hidden: true,
    children: [{ path: 'detail', component: ContractDetail }]
  },
  {
    path: '/stock',
    component: Layout,
    redirect: '/stock/detail',
    name: '订单详情页',
    hidden: true,
    children: [{ path: 'detail', component: StockDetail }]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [

  {
    path: '/home',
    component: Layout,
    redirect: 'home/index',
    icon: 'zl-icon zl-icon-sider zl-icon-sider-1',
    noDropdown: true,
    children: [
      {
        path: 'index', name: '企业看板', icon: "zl-icon zl-icon-sider zl-icon-sider-1", component: Home
      }
    ]
  },
  {
    path: '/order',
    name: "订单竞价",
    component: Layout,
    icon: 'zl-icon zl-icon-sider zl-icon-sider-2',
    noDropdown: false,
    children: [
      {
        path: 'list', name: '竞价列表', icon: '', component: OrderList
      },
      {
        path: 'manage', name: '报价管理', icon: '', component: OrderManage
      }]
  },
  {
    path: '/contract',
    component: Layout,
    icon: 'zl-icon zl-icon-sider zl-icon-sider-3',
    noDropdown: true,
    children: [
      {
        path: 'list', name: '订单生产合同', icon: 'zl-icon zl-icon-sider zl-icon-sider-3', component: ContractList
      }]
  },
  {
    path: '/stock',
    name: "原材料需求",
    component: Layout,
    icon: 'zl-icon zl-icon-sider zl-icon-sider-4',
    noDropdown: false,
    children: [
      {
        path: 'market', name: '材料市场', icon: '', component: StockMarket
      },
      {
        path: 'demand', name: '需求管理', icon: '', component: StockDemand
      },
      {
        path: 'list', name: '采购订单', icon: '', component: StockList
      }
    ]
  },
  {
    path: '/consign',
    component: Layout,
    icon: 'zl-icon zl-icon-sider zl-icon-sider-5',
    noDropdown: true,
    children: [
      {
        path: 'index', name: '交付安装', icon: 'zl-icon zl-icon-sider zl-icon-sider-5', component: Consign
      }]
  },
  {
    path: '/erp',
    name: "ERP管理系统",
    component: Layout,
    icon: 'zl-icon zl-icon-sider zl-icon-sider-6',
    noDropdown: false,
    children: [
      {
        path: 'plan', name: '生产计划', icon: '', component: ErpPlan
      }, {
        path: 'product', name: '产品开发', icon: '', component: ErpProduct
      }, {
        path: 'stock', name: '采购管理', icon: '', component: ErpStock
      }, {
        path: 'seller', name: '销售管理', icon: '', component: ErpSeller
      }, {
        path: 'workshop', name: '车间管理', icon: '', component: ErpWorkshop
      }, {
        path: 'warehouse', name: '仓库管理', icon: '', component: ErpWarehouse
      }, {
        path: 'finance', name: '财务管理', icon: '', component: ErpFinance
      }, {
        path: 'person', name: '人力资源', icon: '', component: ErpPerson
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
];
