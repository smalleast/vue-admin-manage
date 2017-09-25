import Vue from 'vue'
import Router from 'vue-router'
import AppMain from '../views/appMain.vue'
import Page1 from '../views/page1/page.vue'
import Detail from '../views/page1/detail.vue'
import Page2 from '../views/page2/page.vue'
import Page3 from '../views/page3/page.vue'
import Page4 from '../views/page4/page.vue'

Vue.use(Router);
var router = new Router({
  routes: [{
    path: "/",
    name: "appmain",
    component: AppMain,
    redirect: '/page1',
    children: [{
      path: '/page1',
      name: 'Page1',
      component: Page1
    }, {
      path: '/page2',
      name: 'Page2',
      component: Page2
    }, {
      path: '/page3',
      name: 'Page3',
      component: Page3
    }, {
      path: '/page4',
      name: 'Page4',
      component: Page4
    }]
  }, {
    path: "/detail/:id",
    name: "page_detail",
    component: Detail
  }]
});
export default router;
