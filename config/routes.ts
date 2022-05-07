export default [
  { 
    name: '页面', 
    path: '/index', 
    component: '@/pages/index'
  },
  {
    name: 'A',
    path: '/a',
    component: '@/pages/A'
  },
  {
    name: 'B',
    path: '/b',
    component: '@/pages/B'
  },
  {
    path: '/',
    redirect: '/index'
  },
  {
    component: './404',
  },
];

/* if not use prolayout
[
  { 
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { 
        path: '/',
        redirect: '/index',
      },
      { 
        name: '页面',
        path: '/index', 
        component: '@/pages/index'
      },
      {
        component: './404',
      },
    ]
  },
  {
    component: './404',
  },
]
*/