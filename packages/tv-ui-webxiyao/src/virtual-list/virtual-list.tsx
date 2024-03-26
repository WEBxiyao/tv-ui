import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TVirtualList',
  setup() {
    const test = ref('24324')
    return {
      test,
    }
  },
  render() {
    return <div>{this.test}</div>
  },
})
