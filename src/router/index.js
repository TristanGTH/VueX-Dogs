import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dogs from "../views/Dogs";
import Cats from "../views/Cats";
import Pets from "../views/Pets";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: Dogs
  },
  {
    path: '/cats',
    name: 'Cats',
    component: Cats
  },
  {
    path: '/pets/cats/:id',
    name: 'PetsCats',
    component: Pets
  },
  {
    path: '/pets/dogs/:id',
    name: 'PetsDogs',
    component: Pets
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
