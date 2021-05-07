import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import { createPinia, PiniaPlugin } from 'pinia'
import VueCompositionAPI from '@vue/composition-api'

/*
 * Extending Nuxt, Vue and Vuex with extra functionality
 */

const extensions: Plugin = (_, inject) => {
  Vue.use(VueCompositionAPI)

  const pinia = createPinia()
  pinia.use(() => ({ extensions: 'You can globally inject properties or repositories' }))

  inject('pinia', pinia)
  Vue.use(PiniaPlugin)
}

export default extensions
