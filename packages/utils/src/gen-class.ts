import { computed } from 'vue'
import classnames from 'classnames'

type BEM = string | [string, 'B' | 'M' | 'E' | undefined]
export function useClassnames(componentName: string) {
  const prefix = 'tov'
  const componentClass = `${prefix}-${componentName}`
  const c = (...arg: BEM[]) => {
    if (arg.length) {
      return arg.reduce((prev, cur) => {
        if (Array.isArray(cur)) {
          const arg1 = cur[0]
          const arg2 = cur[1]
          if (arg2 === 'E')
            return `${prev}_${arg1}`

          else if (arg2 === 'M')
            return `${prev}--${arg1}`
        }
        return `${prev}-${cur}`
      }, componentClass) as string
    }
    return componentClass
  }
  const ce = (e: string) => [e, 'E'] as BEM
  const cm = (m: string) => [m, 'M'] as BEM
  const cx = (cls: () => Record<string, boolean>) => {
    return computed(() => classnames(cls()))
  }
  return {
    c,
    cx,
    ce,
    cm,
  }
}
