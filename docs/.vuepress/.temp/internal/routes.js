export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"H:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/problem/test.html", { loader: () => import(/* webpackChunkName: "problem_test.html" */"H:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/problem/test.html.js"), meta: {"title":""} }],
  ["/problem/test2.html", { loader: () => import(/* webpackChunkName: "problem_test2.html" */"H:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/problem/test2.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"H:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
