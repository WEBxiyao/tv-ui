import { TransitionGroup, defineComponent, onMounted, ref } from 'vue'
import { useClassnames } from '@tov-ui-webxiyao/utils'
import type { NotificationConfig, NotificationConfigInstance, NotificationConfigType } from './type'

export default defineComponent<{
  onReady: (instance: NotificationConfigInstance) => void
}>({
      name: 'TNotification',
      setup(props, { expose }) {
        const data = ref<NotificationConfigType[]>([])
        const { c } = useClassnames('notification')
        const NotificationFn = () => {
          const cls = {
            [c('wrapper')]: true,
          }
          const titleCls = {
            [c('wrapper', 'title')]: true,
          }
          const contentCls = {
            [c('wrapper', 'content')]: true,
          }
          return data.value.map((item: NotificationConfigType) => {
            return (
              <div class={cls} key={item.id}>
                <div class={titleCls}>{item.title}</div>
                <div class={contentCls}>{item.content}</div>
              </div>
            )
          })
        }
        const index = 1
        const add = (config: NotificationConfig) => {
          const instance: NotificationConfigType = {
            ...config,
            id: index,
          }
          const close = () => {
            const i = data.value.findIndex(item => item.id === instance.id)
            if (i > -1)
              data.value.splice(i, 1)
            if (instance?.timer)
              clearTimeout(instance.timer)
          }
          if (instance?.duration !== 0) {
            instance.timer = setTimeout(() => {
              close()
            }, instance.duration ?? 3000)
          }
          data.value.push(instance)
          return close
        }
        const notificationCls = {
          [c()]: true,
        }
        const onReady = () => {
          props.onReady?.({ add })
        }
        onMounted(() => {
          onReady()
        })
        expose({
          add,
        })
        return () => {
          return (
            <>
              <div class={notificationCls}>
                <TransitionGroup name="right-slide" tag="div">
                  {NotificationFn()}
                </TransitionGroup>
              </div>
            </>
          )
        }
      },
    })
