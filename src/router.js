import Vue from 'vue'
import Router from 'vue-router'
import AboutAndEducation from './view/AboutAndEducation.vue'
import ContactPage from './view/ContactPage.vue'
import ProjectsPage from './view/ProjectsPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'about',
            component: AboutAndEducation
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage
        }        
    ]
})
