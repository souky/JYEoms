import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: "routes-active",
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/pages/Login'],resolve)
    },
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/pages/Index'],resolve),
      redirect: '/index',
      children: [
        {
          path: '/index',
          component: resolve => require(['@/pages/problem/List'],resolve)
        },
        //问题反馈列表
        {
          path: '/problem/',
          name: 'problemList',
          component: resolve => require(['@/pages/problem/List'],resolve)
        },
        {
          path: '/problem/look/:id',
          name: 'problemLook',
          component: resolve => require(['@/pages/problem/Look'],resolve)
        },
        {
          path: '/problem/editor/:id',
          name: 'problemEditor',
          component: resolve => require(['@/pages/problem/Editor'],resolve)
        },
        {
          path: '/problem/add',
          name: 'problemAdd',
          component: resolve => require(['@/pages/problem/Add'],resolve)
        },
        //常见问题
        {
          path: '/commonproblem/',
          name: 'commonProblemList',
          component: resolve => require(['@/pages/commonproblem/List'],resolve)
        },
        {
          path: '/commonproblem/look/:id',
          name: 'commonProblemLook',
          component: resolve => require(['@/pages/commonproblem/Look'],resolve)
        },
        {
          path: '/commonproblem/editor/:id',
          name: 'commonProblemEditor',
          component: resolve => require(['@/pages/commonproblem/Editor'],resolve)
        },
        {
          path: '/commonproblem/add',
          name: 'commonProblemAdd',
          component: resolve => require(['@/pages/commonproblem/Add'],resolve)
        },
        //资源共享
        {
          path: '/resource/',
          name: 'resourceList',
          component: resolve => require(['@/pages/resource/List'],resolve)
        },
        {
          path: '/resource/look/:id',
          name: 'resourceLook',
          component: resolve => require(['@/pages/resource/Look'],resolve)
        },
        {
          path: '/resource/editor/:id',
          name: 'resourceEditor',
          component: resolve => require(['@/pages/resource/Editor'],resolve)
        },
        {
          path: '/resource/add',
          name: 'resourceAdd',
          component: resolve => require(['@/pages/resource/Add'],resolve)
        },
        //子产品
        {
          path: '/product/',
          name: 'productList',
          component: resolve => require(['@/pages/product/List'],resolve)
        },
        {
          path: '/product/look/:id',
          name: 'productLook',
          component: resolve => require(['@/pages/product/Look'],resolve)
        },
        {
          path: '/product/editor/:id',
          name: 'productEditor',
          component: resolve => require(['@/pages/product/Editor'],resolve)
        },
        {
          path: '/product/add',
          name: 'productAdd',
          component: resolve => require(['@/pages/product/Add'],resolve)
        },
        //版本
        {
          path: '/version/',
          name: 'versionList',
          component: resolve => require(['@/pages/version/List'],resolve)
        },
        {
          path: '/version/look/:id',
          name: 'versionLook',
          component: resolve => require(['@/pages/version/Look'],resolve)
        },
        {
          path: '/version/editor/:id',
          name: 'versionEditor',
          component: resolve => require(['@/pages/version/Editor'],resolve)
        },
        {
          path: '/version/add',
          name: 'versionAdd',
          component: resolve => require(['@/pages/version/Add'],resolve)
        },
        //高清网上巡查系统
        {
          path: '/patrol/',
          name: 'patrolList',
          component: resolve => require(['@/pages/patrol/List'],resolve)
        },
        {
          path: '/patrol/look/:id',
          name: 'patrolLook',
          component: resolve => require(['@/pages/patrol/Look'],resolve)
        },
        {
          path: '/patrol/editor/:id',
          name: 'patrolEditor',
          component: resolve => require(['@/pages/patrol/Editor'],resolve)
        },
        {
          path: '/patrol/add',
          name: 'patrolAdd',
          component: resolve => require(['@/pages/patrol/Add'],resolve)
        },
        //身份认证系统
        {
          path: '/authentication/',
          name: 'authenticationList',
          component: resolve => require(['@/pages/authentication/List'],resolve)
        },
        {
          path: '/authentication/look/:id',
          name: 'authenticationLook',
          component: resolve => require(['@/pages/authentication/Look'],resolve)
        },
        {
          path: '/authentication/editor/:id',
          name: 'authenticationEditor',
          component: resolve => require(['@/pages/authentication/Editor'],resolve)
        },
        {
          path: '/authentication/add',
          name: 'authenticationAdd',
          component: resolve => require(['@/pages/authentication/Add'],resolve)
        },
        //运维服务
        {
          path: '/operation/',
          name: 'operationList',
          component: resolve => require(['@/pages/operation/List'],resolve)
        },
        {
          path: '/operation/look/:id',
          name: 'operationLook',
          component: resolve => require(['@/pages/operation/Look'],resolve)
        },
        {
          path: '/operation/editor/:id',
          name: 'operationEditor',
          component: resolve => require(['@/pages/operation/Editor'],resolve)
        },
        {
          path: '/operation/add',
          name: 'operationAdd',
          component: resolve => require(['@/pages/operation/Add'],resolve)
        },
        //用户管理
        {
          path: '/users/',
          name: 'usersList',
          component: resolve => require(['@/pages/users/List'],resolve)
        },
        {
          path: '/users/look/:id',
          name: 'usersLook',
          component: resolve => require(['@/pages/users/Look'],resolve)
        },
        {
          path: '/users/editor/:id',
          name: 'usersEditor',
          component: resolve => require(['@/pages/users/Editor'],resolve)
        },
        {
          path: '/users/add',
          name: 'usersAdd',
          component: resolve => require(['@/pages/users/Add'],resolve)
        },
        //机构
        {
          path: '/mechanism',
          name: 'mechanism',
          component: resolve => require(['@/pages/mechanism'],resolve)
        },
      ]
    },
    { path: '*',redirect: '/index'}
  ]
})
