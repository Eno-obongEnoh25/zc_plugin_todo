import { createRouter, createWebHashHistory } from 'vue-router'
import Busy from '../pages/Busy.vue';
import Main from '../pages/Main.vue';
import New from '../pages/New.vue';
import Trash from '../pages/Trash.vue';
import Archive from '../pages/Archive.vue';
import DisplayNewTask from '../pages/DisplayNewTask.vue';
import Details from '../pages/Details';
import Didier from '../pages/Didier';
const routes = [{
    path: '',
    //this is where the main work lies
    name: 'Main',
    component: Main,
        children: [{ path: '',
            name: '/new',
            component: New
        }, {
            path: '/archive',
            //this is the page that contains todo archive
            name: 'Archive',
            component: Archive
        }, {
            path: '/trash',
            //this is the page that contains todo trash
            name: 'Trash',
            component: Trash
        }, {
            path: '/newtask',
            //this is the page that contains new tasks
            name: 'DisplayNewTask',
            component: DisplayNewTask
        }]
    },
    {
        path: '/details/:id',
        name: 'Details',
        component: Details
    }, {
        path: '/didier',
        name: 'Didier',
        component: Didier
    },
    {
        path: '/:pathMatch(.*)*',
        //this is where the main work lies
        name: 'PageNotFound',
        component: Busy

},
{
    path: '/details/:id',
    name: 'Details',
    component: () =>
        import( /* webpackChunkName: "Transactions" */ '../pages/Details.vue')
}, {
    path: '/didier',
    name: 'Didier',
    component: () =>
        import( /* webpackChunkName: "Transactions" */ '../pages/Didier.vue')
},
{
    path: '/:pathMatch(.*)*',
    //this is where the main work lies
    name: 'PageNotFound',
    component: Busy

}
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,

})

export default router