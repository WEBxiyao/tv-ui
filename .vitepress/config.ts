import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'TV UI',
  description: 'this is a compontents',
  // eslint-disable-next-line node/prefer-global/process
  base: process.env.NODE_ENV === 'production' ? '/tv-ui/' : '/',
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/tov-ui-webxiyao/src/:comp/(.*)': 'components/:comp/(.*)',
    'packages/utils/src/(.*)': 'utils/(.*)',
    'packages/icons/docs/(.*)': 'components/icons/(.*)',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/introduce' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils/' },
    ],

    sidebar: {
      '/components/': [
        {
          text: '按钮',
          link: '/components/button/',
        },
        {
          text: '输入框',
          link: '/components/input/',
        },
        {
          text: 'tooltip',
          link: '/components/tooltip/',
        },
        {
          text: '表格',
          link: '/components/table/',
        },
        {
          text: '虚拟滚动',
          link: '/components/virtual-list/',
        },
        {
          text: '全局通知',
          link: '/components/notification/',
        },
        {
          text: '图标',
          link: '/components/icons/',
        },
      ],
      '/utils/': [
        {
          text: 'genClass',
          link: '/utils/gen-class',
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
