<template>
  <div class="container">
    <h1>{{ wow }}</h1>
    <button @click="increment">Increment</button>
    <hr />
    <p>{{ example }}</p>
    <p>{{ extensions }}</p>
    <Test />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import { createPinia } from 'pinia'
import { useMainStore } from '~/store/counter'

export default defineComponent({
  setup(_, ctx) {
    const main = useMainStore()

    return {
      increment: main.increment,
      wow: computed(() => main.counter),
      extensions: computed(() => main.extensions),
    }
  },
  asyncData({ pinia }) {
    const main = useMainStore(pinia)

    main.testAction('Pinia works in asyncdata as well')

    return {
      example: main.example,
    }
  },
})
</script>
