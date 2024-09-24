export const themeData = JSON.parse("{\"colorModeSwitch\":true,\"logo\":\"/images/head.png\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"B站\",\"link\":\"https://www.bilibili.com/\"}],\"sidebar\":[{\"text\":\"Markdown测试\",\"link\":\"/problem/test\"},{\"text\":\"问题二\",\"link\":\"/problem/test2\"},{\"text\":\"问题三\",\"link\":\"/problem/test3\"}],\"repo\":\"https://github.com/wuhao721/wuhao721.github.io\",\"repoLabel\":\"GitHub仓库\",\"editLink\":false,\"lastUpdatedText\":\"最后更新时间\",\"contributorsText\":\"贡献者\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
