<script setup lang="ts">
import { ref } from 'vue'
import { useClassnames } from '../gen-class'

const test = ref(false)
const { c, ce } = useClassnames('button')
</script>

<template>
  <div>
    <p>{{ c('a', 'b', ce('primary')) }}</p>
    <button @click="test = !test">
      切换
    </button>
  </div>
</template>
