import comp from "H:/vuepress/wuhao721.github.io/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"images/csgo.jpg\",\"heroText\":\"记事本\",\"tagline\":\"属于wuhao的个人记事本！\",\"actions\":[{\"text\":\"快速上手 →\",\"link\":\"/problem/test\"}],\"features\":[{\"title\":\"简洁至上\",\"details\":\"以Markdown为中心的项目结构，以最少的配置帮助你专注于写作。\"},{\"title\":\"Vue驱动\",\"details\":\"享受Vue+webpack的开发体验，在Markdown中使用Vue组件，同时可以使用Vue来开发自定义主题。\"},{\"title\":\"高性能\",\"details\":\"VuePress为每个页面预渲染生成静态的HTML，同时在页面被加载的时候，将作为SPA运行。\"}],\"footer\":\"2024/09/23 | Maked BY wuhao\"},\"headers\":[],\"git\":{\"updatedTime\":1727145041000,\"contributors\":[{\"name\":\"wuhao\",\"email\":\"1205396326@qq.com\",\"commits\":2}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
