import Vue from 'vue'

import './styles.scss'

export default Vue.component('tech', {
  props: {
    tech: {
      type: Object,
      required: true
    }
  },
  template: `
    <div class="tech">
      <img class="tech-img" :src="this.tech.logo">
      <h2 class="tech-title">{{ this.tech.name }}</h2>
      <p class="tech-release">{{ this.tech.release }}</p>
      <p>{{ this.tech.description }}</p>
    </div>
  `
})
