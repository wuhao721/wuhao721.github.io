// import { defaultTheme } from '@vuepress/theme-default'
// import { defineUserConfig } from 'vuepress/cli'
// import { viteBundler } from '@vuepress/bundler-vite'

// export default defineUserConfig({
//   lang: 'en-US',

//   title: 'VuePress',
//   description: 'My first VuePress Site',

//   theme: defaultTheme({
//     logo: 'https://vuejs.press/images/hero.png',

//     navbar: ['/', '/get-started'],
//   }),

//   bundler: viteBundler(),
// })
import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  bundler: viteBundler(),

  // base: '/docs/',
  lang: 'zh-CN',
  title: '工作过程中的问题记录',
  description: '这是我的第一个 VuePress 站点',
  head: [['link', { rel: 'icon', href: '/images/head.png' }]],

  theme: defaultTheme({
    colorModeSwitch: true, // 暗黑模式按钮
    logo: '/images/head.png',
    navbar: [
      { text: '首页', link: '/' },
      { text: 'B站', link: 'https://www.bilibili.com/' }, //先填个B站吧
    ],
    sidebar: [
      {
        text: 'Markdown测试',
        link: '/problem/test',
      },
      {
        text: '问题二',
        link: '/problem/test2',
      },
      {
        text: '问题三',
        link: '/problem/test3',
      },
    ],

    repo: 'https://github.com/wuhao721/wuhao721.github.io',
    repoLabel: 'GitHub仓库',

    editLink: false, // 是否开启编辑链接
    // editLinkText: '在 GitHub 上编辑此页',

    lastUpdatedText: '最后更新时间',
    contributorsText: '贡献者',
    // editLinkText: '在 GitHub 上编辑此页',
    // contributorsText: '贡献者',
  }),
});
