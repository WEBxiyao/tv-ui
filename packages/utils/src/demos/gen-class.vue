<script setup lang="ts">
import { ref } from 'vue'
import { useClassNames } from '../gen-class.ts'

const test = ref(false)
const { c, ce } = useClassNames('button')
</script>

<template>
  <div>
    <p>{{ c('a', 'b', ce('primary')) }}</p>
    <button @click="test = !test">
      切换
    </button>
  </div>
</template>
