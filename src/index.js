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
