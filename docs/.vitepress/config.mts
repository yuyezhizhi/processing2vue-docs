import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Processing2Vue',
  description: '将 Processing 代码转换为 Vue 3 组件',
  lang: 'zh-CN',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
  ],
  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/quick-start' },
      { text: 'API', link: '/api/' },
      { text: '示例', link: '/examples/' },
      {
        text: '更多',
        items: [
          { text: '更新日志', link: 'https://github.com/yuyezhizhi/processing2vue/blob/main/CHANGELOG.md' },
          { text: '贡献指南', link: 'https://github.com/yuyezhizhi/processing2vue/blob/main/CONTRIBUTING.md' },
          { text: 'GitHub', link: 'https://github.com/yuyezhizhi/processing2vue' },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '入门指南',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '安装', link: '/guide/installation' },
            { text: '基础用法', link: '/guide/basic-usage' },
          ],
        },
        {
          text: '核心功能',
          items: [
            { text: '转换器 API', link: '/guide/converter' },
            { text: 'CLI 工具', link: '/guide/cli' },
            { text: '配置选项', link: '/guide/configuration' },
          ],
        },
        {
          text: '进阶功能',
          items: [
            { text: '自定义转换', link: '/guide/custom-conversion' },
            { text: '批量转换', link: '/guide/batch-conversion' },
            { text: '性能优化', link: '/guide/performance' },
          ],
        },
      ],

      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: 'convert()', link: '/api/convert' },
            { text: 'parse()', link: '/api/parse' },
            { text: 'generate()', link: '/api/generate' },
            { text: 'ConversionOptions', link: '/api/options' },
          ],
        },
      ],

      '/examples/': [
        {
          text: '示例代码',
          items: [
            { text: '基础图形', link: '/examples/basic-shapes' },
            { text: '动画效果', link: '/examples/animations' },
            { text: '交互效果', link: '/examples/interactions' },
            { text: '粒子系统', link: '/examples/particles' },
            { text: '几何图案', link: '/examples/geometric' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yuyezhizhi/processing2vue' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/processing2vue' },
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2026 yuyezhizhi',
    },

    search: {
      provider: 'local',
    },
  },
})
