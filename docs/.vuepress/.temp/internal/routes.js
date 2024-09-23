export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"H:/vuepress/wuhao721.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/problem/test.html", { loader: () => import(/* webpackChunkName: "problem_test.html" */"H:/vuepress/wuhao721.github.io/docs/.vuepress/.temp/pages/problem/test.html.js"), meta: {"title":""} }],
  ["/problem/test2.html", { loader: () => import(/* webpackChunkName: "problem_test2.html" */"H:/vuepress/wuhao721.github.io/docs/.vuepress/.temp/pages/problem/test2.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"H:/vuepress/wuhao721.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
