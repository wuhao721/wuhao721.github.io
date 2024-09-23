import comp from "H:/vuepress/wuhao721.github.io/docs/.vuepress/.temp/pages/problem/test2.html.vue"
const data = JSON.parse("{\"path\":\"/problem/test2.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1727081952000,\"contributors\":[{\"name\":\"wuhao\",\"email\":\"1205396326@qq.com\",\"commits\":1}]},\"filePathRelative\":\"problem/test2.md\"}")
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
