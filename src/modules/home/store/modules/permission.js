import Page1 from '../../views/page1/page.vue';
import Page2 from '../../views/page2/page.vue';
import Page3 from '../../views/page3/page.vue';
import Page4 from '../../views/page4/page.vue';

const permission = {
  state: {
    routers: [
      {
        path: '/page1',
        component: Page1,
        redirect: 'page1',
        name: 'page1',
        icon: 'zujian',
        children: [
          {path: 'page3', name: 'page3', icon: 'zonghe', component: Page3},
          {path: 'page4', name: 'page4', icon: 'zonghe', component: Page4}
        ]
      },
      {
        path: '/page2',
        component: Page2,
        redirect: '/page2',
        name: "page2",
        icon: 'tubiao',
        noDropdown: false,
        children: []
      }
    ],
    addRouters: []
  }
};

export default permission
