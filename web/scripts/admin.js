import Layout from '../modules/admin/views/layout.vue'
import Home from '../modules/admin/views/home.vue'

import JobDashboard from '../modules/admin/views/job/dashboard.vue'
import JobDetail from '../modules/admin/views/job/detail.vue'
import CrawlerDashboard  from '../modules/admin/views/crawler/dashboard.vue'
import CrawlerDetail  from '../modules/admin/views/crawler/detail.vue'
import ItemSet  from '../modules/admin/views/item/set.vue'
import MachineIndex from '../modules/admin/views/machine/index.vue'
import MachineDetail from '../modules/admin/views/machine/detail.vue'
import MemberIndex from '../modules/admin/views/member/index.vue'
import MemberAccess from '../modules/admin/views/member/access.vue'
import TaskDashboard from '../modules/admin/views/task/dashboard.vue'
import TaskSetting from '../modules/admin/views/task/setting.vue'
import TaskDetail from '../modules/admin/views/task/detail.vue'
import TaskTypeDetail from '../modules/admin/views/task/typeDetail.vue'
import TaskResultData from '../modules/admin/views/task/resultData.vue'

/**
 * 路由是根据url的请求地址来加载需要的控件
 * 路由配置参考
 * http://router.vuejs.org/zh-cn/
 * 注意：如果要加载在PHP项目 可以只进行 package.json 里面的  init  把打包文件打包进去php可以直接访问静态文件的位置即可  （其他不变）
 * @type {*[]}
 */

export default   [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        meta: {identity: true, title: '爬虫系统-首页'},
        component: Home
      }
    ]
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: 'index',
        meta: {identity: true, title: '爬虫系统-首页'},
        component: Home
      }
    ]
  },
  {
    path: '/job',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        meta: {identity: true, title: '爬虫系统-作业指示板'},
        component: JobDashboard
      },
      {
        path: 'detail',
        meta: {identity: true, title: '爬虫系统-作业详情'},
        component: JobDetail
      }
    ]
  },
  {
    path: '/crawler',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        meta: {identity: true, title: '爬虫系统-爬虫指示板'},
        component: CrawlerDashboard
      },
      {
        path: 'detail',
        meta: {identity: true, title: '爬虫系统-爬虫详情'},
        component: CrawlerDetail
      }
    ]
  },
  {
    path: '/task',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        meta: {identity: true, title: '爬虫系统-任务指示板'},
        component: TaskDashboard
      },
      {
        path: 'setting',
        meta: {identity: true, title: '爬虫系统-任务配置'},
        component: TaskSetting
      },
      {
        path: 'detail',
        meta: {identity: true, title: '爬虫系统-任务详情'},
        component: TaskDetail
      },
      {
        path: 'type-detail',
        meta: {identity: true, title: '爬虫系统-任务分类详情'},
        component: TaskTypeDetail
      },
      {
        path: 'result-data',
        meta: {identity: true, title: '爬虫系统-任务结果数据'},
        component: TaskResultData
      }
    ]
  },
  {
    path: '/item',
    component: Layout,
    children: [
      {
        path: 'set',
        meta: {identity: true, title: '爬虫系统-项目设置'},
        component: ItemSet
      }
    ]
  },
  {
    path: '/machine',
    component: Layout,
    children: [
      {
        path: 'index',
        meta: {identity: true, title: '爬虫系统-节点管理'},
        component: MachineIndex
      },
      {
        path: 'detail',
        meta: {identity: true, title: '爬虫系统-节点详情'},
        component: MachineDetail
      }
    ]
  },
  {
    path: '/member',
    component: Layout,
    children: [
      {
        path: 'index',
        meta: {identity: true, title: '爬虫系统-项目管理'},
        component: MemberIndex
      },
      {
        path: 'access',
        meta: {identity: true, title: '爬虫系统-项目对用户授权'},
        component: MemberAccess
      }
    ]
  },
]
