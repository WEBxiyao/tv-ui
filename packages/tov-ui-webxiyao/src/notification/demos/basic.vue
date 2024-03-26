<docs>
---
title: 基础用法
---
这是一个简单的`notification`用法
</docs>

<script setup lang="ts">
import { Notification } from 'tov-ui-webxiyao'
import { getCurrentInstance, h } from 'vue'
import Test from '../components/Test.vue'

const instance = getCurrentInstance()
function open() {
  Notification.info({
    title: '通知标题',
    content: h(Test),
    appContext: instance?.appContext,
  })
}
</script>

<template>
  <div>
    <t-button @click="open">
      通知
    </t-button>
  </div>
</template>
