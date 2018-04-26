import Vue from 'vue'

import { getTechs } from './services/techService'

import './index.pug'
import './scss/application.scss'

const vm = new Vue({
  el: '#app',
  data: {
    techs: []
  },
  created() {
    getTechs().then((response) => this.techs = response.data)
  }
})
