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

Vue.component('tech', {
  template: `
    .tech
      img.tech-img(src={{ tech.logo}})
      h2.tech-title
        | {{ tech.title}}
      p.tech-release
        | {{ tech.release }}
      p.tech-desc
        | {{ description }}
  `
})
