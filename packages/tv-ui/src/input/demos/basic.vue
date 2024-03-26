<docs>
---
title: 基础用法
---
这是一个简单的`input`用法
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
</script>

<template>
  <div>
    <t-input v-model="name" />
  </div>
</template>
