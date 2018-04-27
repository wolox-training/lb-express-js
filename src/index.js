import Vue from 'vue'

import { getTechs } from './services/techService'

import './index.pug'
import './scss/application.scss'

const vm = new Vue({
  el: '#app',
  data: {
    techs: [],
    inputTech: '',
    searchResults: []
  },
  created() {
    getTechs().then((response) => this.techs = response.data)
  },
  methods: {
    getTech(name) {
      const techs = this.techs.map(platform => platform.techs)
      const flattenTechs = [].concat.apply([], techs)
      this.searchResults = flattenTechs.filter(tech => tech.name.toLowerCase().includes(this.inputTech.toLowerCase()))
    }
  }
})

Vue.component('tech', {
  props: ['tech'],
  template: `
    <div class="tech">
      <img class="tech-img" :src="this.tech.logo">
      <h2 class="tech-title">{{ this.tech.name }}</h2>
      <p class="tech-release">{{ this.tech.release }}</p>
      <p>{{ this.tech.description }}</p>
    </div>
  `
})
