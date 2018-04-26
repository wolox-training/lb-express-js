import Vue from 'vue'

import { getTechs } from './services/techService'

import './index.pug'
import './scss/application.scss'

const vm = new Vue({
  el: '#app',
  data: {
    techs: [],
    inputTech: ''
  },
  created() {
    getTechs().then((response) => this.techs = response.data)
  },
  methods: {
    getTech(name) {
      for(tech in this.techs) {
        if(name === tech.name) return tech
        else return 'Ingrese el nombre de una tecnología'
      }
    }
  }
})
