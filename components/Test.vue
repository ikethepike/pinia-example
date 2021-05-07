<template>
  <div>
    <h2>{{ counter }}</h2>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import { useMainStore } from '~/store/counter'

export default defineComponent({
  setup() {
    const main = useMainStore()

    return {
      counter: computed(() => main.counter),
    }
  },
})
</script>
