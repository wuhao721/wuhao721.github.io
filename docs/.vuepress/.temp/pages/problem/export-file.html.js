import comp from "H:/vuepress/wuhao721.github.io/docs/.vuepress/.temp/pages/problem/export-file.html.vue"
const data = JSON.parse("{\"path\":\"/problem/export-file.html\",\"title\":\"js 导出文件\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"每行代码的含义\",\"slug\":\"每行代码的含义\",\"link\":\"#每行代码的含义\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"problem/export-file.md\"}")
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
