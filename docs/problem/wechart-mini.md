# 微信小程序推送订阅消息

首先，找到微信官方文档小程序中的发送订阅消息。

<br/>

地址如下: [https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/mp-message-management/subscribe-message/sendMessage.html](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/mp-message-management/subscribe-message/sendMessage.html)

![微信小程序推送订阅消息](/images/wechart1.jpeg)

在该接口中的请求参数可以看到我们需要准备的参数。接下来依次看看这几个参数应该怎么获取。

## 1.获取 access_token

微信官方文档获取 `access_token` 的文档地址为: [https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/mp-access-token/getAccessToken.html](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/mp-access-token/getAccessToken.html)

![微信小程序获取 access_token](/images/wechart2.jpeg)

`appid`和 `secret`可以从可在「微信公众平台 - 设置 - 开发设置」页中获得。(白给)

从返回值中就可以取到 `access_token`。**(获取`access_token`接口应在服务器端调用)**

## 2.获取 template_id

在微信公众平台手动配置获取模板 ID：<br/>
登录 [https://mp.weixin.qq.com](https://mp.weixin.qq.com)，功能模块，订阅消息，我的模板中点击选用去选择模板。

如果没有合适的模板，可以申请添加新模板，审核通过后可使用。<br/>
可以选一个基础的模板使用，申请完之后，可以在我的模板中看到自己申请的模板。点击详情即可进入模板详情查看。

![微信小程序获取 template_id](/images/wechart3.jpeg)

这样就可以获取到 `template_id`。(也是白给)

## 3.获取 page

这个没什么好说的，点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例 index?foo=bar）。该字段不填则模板无跳转。

## 4.获取 touser

`touser` 为接收者（用户）的 openid。

微信官方文档获取 `touser` 的文档地址为: [https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html)

![微信小程序获取 touser](/images/wechart4.jpeg)

可以看到这个接口的请求参数中的`js_code`是我们还没有的，所以要先获取 `js_code`。

其实 `js_code` 就是登录时获取的 code，可通过 wx.login 获取，我开发是用的 HBuilder，所以在这只介绍 HBuilder 获取 `js_code` 的方法。

```js
uni.login({
  success(res) {
    if (res.code) {
      console.log('获取成功！' + res.code);
    } else {
      console.log('获取失败！' + res.errMsg);
    }
  },
});
```

获取到 `js_code` 然后就可以获取 `touser`了，`appid`和 `secret`的获取方式上面讲过了哈。

**注意： 获取 `touser` 接口应在服务器端调用，前端获取 `js_code` 传给后端，让后端获取 `touser`。**

## 5.获取 data

这里的 `data` 其实就是在微信公众平台手动配置的模板中的模板数据。具体可以在模板详情中查看。

![微信小程序获取 data](/images/wechart5.jpeg)

根据[小程序推送订阅消息](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/mp-message-management/subscribe-message/sendMessage.html)中的请求数据示例填写就好了。

## 6. miniprogram_state 和 lang

`miniprogram_state`:跳转小程序类型：developer 为开发版；trial 为体验版；formal 为正式版；默认为正式版

`lang`:进入小程序查看”的语言类型，支持 zh_CN(简体中文)、en_US(英文)、zh_HK(繁体中文)、zh_TW(繁体中文)，默认为 zh_CN

至此我们已经准备好了微信小程序推送订阅消息所需的全部请求参数了，还差最后一步**用户订阅消息**

## 7. 用户订阅消息

调起客户端小程序订阅消息界面，返回用户订阅消息的操作结果。当用户勾选了订阅面板中的“总是保持以上选择，不再询问”时，模板消息会被添加到用户的小程序设置页，通过 wx.getSetting 接口可获取用户对相关模板消息的订阅状态。

地址如下:[https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html)

HBuilder 调起客户端小程序订阅消息的方法如下：

```js
uni.requestSubscribeMessage({
  //此处填写刚才申请模板的模板ID
  tmplIds: ['xxxxxxxxx'],
  success(res) {
    console.log(res);
  },
});
```

**注意：调起客户端小程序订阅消息界面只能按钮触发，在`onShow`和`onLoad`中是无法触发的**

## 8. 最后的最后

用户订阅消息后，后端根据用户 openid 发送订阅消息就可以推送到用户手机上了。
