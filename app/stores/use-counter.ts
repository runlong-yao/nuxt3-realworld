export interface ICounterState {
  count: number
}

export const useCounter = definePiniaStore('counter', {
  state: (): ICounterState => ({
    count: 1,
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    },
    increment2x() {
      this.count *= 2
    },
  },
})
