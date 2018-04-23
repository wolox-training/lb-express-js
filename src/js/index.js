import { getTechs } from '../services/techService'

const vm = new Vue({    // eslint-disable-line
  el: '#app',
  data: {
    techs: []
  },
  created() {
    getTechs().then(response => this.data.techs = response.data)
  }
})
