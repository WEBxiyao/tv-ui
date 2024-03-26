import type { VNode } from 'vue'

export interface NotificationConfig {
  content: string | VNode
  title: string | VNode
  duration?: number
  appContext?: any
}
export interface NotificationConfigType extends NotificationConfig {
  timer?: ReturnType<typeof setTimeout>
  id?: number
}
export interface NotificationConfigInstance {
  add: (config: NotificationConfig) => (() => void)
}
