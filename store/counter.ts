import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  // name of the store
  // it is used in devtools and allows restoring state
  id: 'main',
  // a function that returns a fresh state
  state: () => ({
    counter: 0,
    name: 'Eduardo',
    example: '',
  }),
  // optional getters
  getters: {
    doubleCount(): number {
      return this.counter * 2
    },
    // use getters in other getters
    doubleCountPlusOne(): number {
      return this.doubleCount * 2 + 1
    },
  },
  // optional actions
  actions: {
    reset() {
      // `this` is the store instance
      this.counter = 0
    },
    increment() {
      this.counter++
    },
    testAction(text: string) {
      this.example = `${text} and there is no need for mutations`
    },
  },
})
