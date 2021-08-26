import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Developers from '../views/Developers.vue'
import Works from '../views/Works.vue'
import Services from '../views/Services.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Petrowa Web | Building Thoughts | Brasília-DF'
    }
  },
  {
    path: '/SobreNos',
    name: 'About',
    component: About,
    meta: {
      title: 'Sobre Nós | Petrowa Web | Building Thoughts | Brasília-DF'
    }
  },  
  {
    path: '/Contato',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contato | Petrowa Web | Building Thoughts | Brasília-DF'
    }
  },  
  {
    path: '/Trabalhos',
    name: 'Works',
    component: Works,
    meta: {
      title: 'Trabalhos Concluídos | Petrowa Web | Building Thoughts | Brasília-DF'
    }
  },  
  {
    path: '/Servicos',
    name: 'Services',
    component: Services,
    meta: {
      title: 'Serviços | Petrowa Web | Building Thoughts | Brasília-DF'
    }
  },
  {
    path: '/Desenvolvedores',
    name: 'Developers',
    component: Developers,
    meta: {
      title: 'Desenvolvedores | Petrowa Web | Building Thoughts | Brasília-DF'
    }
  },  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(function (to, from, next) { 
  setTimeout(() => {
      window.scrollTo(0, 0);
  }, 100);
  next();
});

export default router

