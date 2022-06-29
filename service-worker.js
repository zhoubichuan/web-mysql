/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a7d0c0fbb11e06be8cff27a933dcdc21"
  },
  {
    "url": "assets/css/0.styles.44048b8b.css",
    "revision": "4e2911e9c71831dd3fc915d69c7a52a1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6f3169c5.js",
    "revision": "9ff3dbf25e33f3944a36ede09c9ea0bb"
  },
  {
    "url": "assets/js/11.4d3a2352.js",
    "revision": "a8ea2d53883a7112a34e6495841ae82a"
  },
  {
    "url": "assets/js/12.96b277c7.js",
    "revision": "a9dc10343189f57b18b1dce2e2d8a8c3"
  },
  {
    "url": "assets/js/13.35620f25.js",
    "revision": "36fd6c5d7a7daf994dba7986fc6fbea2"
  },
  {
    "url": "assets/js/14.b3c233dc.js",
    "revision": "2fa531c427bd3978920811676f88f9b1"
  },
  {
    "url": "assets/js/15.ebfbba4f.js",
    "revision": "17057e875dd319e4ea507568aa07fc9c"
  },
  {
    "url": "assets/js/16.ab7b5ab2.js",
    "revision": "236d4b741752b1868e85903ba20cabcc"
  },
  {
    "url": "assets/js/17.2aeadb8b.js",
    "revision": "3c276aca4abdeca21924728544497080"
  },
  {
    "url": "assets/js/18.ee2b31da.js",
    "revision": "6cef14cee577b4241f16262105d85bdc"
  },
  {
    "url": "assets/js/19.4c7862fe.js",
    "revision": "4da1bb042adb1f4e0501641f5791abd9"
  },
  {
    "url": "assets/js/2.9dda3820.js",
    "revision": "32b56962650a9086b664f5397c6d0fa4"
  },
  {
    "url": "assets/js/20.d74f637a.js",
    "revision": "dfb8ce598951184c7e5931cc693f9fa4"
  },
  {
    "url": "assets/js/21.c966dfec.js",
    "revision": "6d50541aada0b1f27a029a2961ffac97"
  },
  {
    "url": "assets/js/22.54c56ecb.js",
    "revision": "268de060110c64c89d8a35f6243de961"
  },
  {
    "url": "assets/js/23.b5b9df0e.js",
    "revision": "2c3d9577798885f1ddbf0b2153bcd352"
  },
  {
    "url": "assets/js/24.615f4e3e.js",
    "revision": "cade86f8d2b434e509d1c2eee40446cf"
  },
  {
    "url": "assets/js/25.a1cc5811.js",
    "revision": "a8a52267dcdbe8f8600747720111258e"
  },
  {
    "url": "assets/js/26.0a3745e1.js",
    "revision": "f5daadef6845c6d5d507ca254df212dd"
  },
  {
    "url": "assets/js/27.e1876b5e.js",
    "revision": "8fac464666285cfcff06493ca8643c3e"
  },
  {
    "url": "assets/js/28.31ff9459.js",
    "revision": "f50901f31c59404b5c9f53bbfce90edc"
  },
  {
    "url": "assets/js/29.57c1994c.js",
    "revision": "669efadea8b53202d5c67be2aa5b7bb3"
  },
  {
    "url": "assets/js/3.e9a02443.js",
    "revision": "070332b9e4b3f274ddd80d4bb4f05a99"
  },
  {
    "url": "assets/js/30.0a546ebc.js",
    "revision": "4ad3f064ab158233d786b043e149ad33"
  },
  {
    "url": "assets/js/31.32722895.js",
    "revision": "e8761e02661b101cf2f04db2f353f511"
  },
  {
    "url": "assets/js/32.fbf4bb47.js",
    "revision": "f90adf580f60c1fe38236f78a3e02d00"
  },
  {
    "url": "assets/js/33.a4b6bc4d.js",
    "revision": "1b27ec7c64006a52ad5bd74a14f922e6"
  },
  {
    "url": "assets/js/34.f712da68.js",
    "revision": "5d92aaa8425e628c6874f556958222f8"
  },
  {
    "url": "assets/js/35.14a36050.js",
    "revision": "6b6279463675ddde6173701fa78b1b68"
  },
  {
    "url": "assets/js/36.2afc0511.js",
    "revision": "d7f9a2b0a9be15da85b1d2c91f177ae6"
  },
  {
    "url": "assets/js/37.03ea0ce7.js",
    "revision": "cd0d43fbf80a74405452a25f36aa31e6"
  },
  {
    "url": "assets/js/38.b27f5e5a.js",
    "revision": "23ee7f612542c6dfe2755a24a6955fd3"
  },
  {
    "url": "assets/js/39.cb48a79a.js",
    "revision": "29490c5a45cce6bdd083639873f7f40b"
  },
  {
    "url": "assets/js/4.5cc3030d.js",
    "revision": "d685c56313c03b08717f5937a6a89ac6"
  },
  {
    "url": "assets/js/40.ef95c6d2.js",
    "revision": "21560d0340b875b0b7bf44e2f9075915"
  },
  {
    "url": "assets/js/41.9ae72d90.js",
    "revision": "3e18c61c01c1fc8ba25a6456a222e098"
  },
  {
    "url": "assets/js/42.d0a24edd.js",
    "revision": "20274540eb5b0ed7232fbd8ef3d1bfd4"
  },
  {
    "url": "assets/js/43.fd1ea842.js",
    "revision": "ee4eded3b09fc1c9b8aca63b29ee8d42"
  },
  {
    "url": "assets/js/44.b92b5205.js",
    "revision": "f837607257470382064f11baffd4f775"
  },
  {
    "url": "assets/js/45.9802efcd.js",
    "revision": "4b0b3233478a7065a76fd619d4b1b81b"
  },
  {
    "url": "assets/js/46.f98af7ba.js",
    "revision": "17e679ff01b5f3e1c3c3f55afa6b172c"
  },
  {
    "url": "assets/js/47.2041c0dd.js",
    "revision": "1289ca892ec92ca7e0466d656c73303e"
  },
  {
    "url": "assets/js/48.eaf924d8.js",
    "revision": "ee5d9cf4ee00933050632332518004de"
  },
  {
    "url": "assets/js/49.44af975d.js",
    "revision": "f1cc418dcb3e09777cda8a659305074a"
  },
  {
    "url": "assets/js/5.18adcc7c.js",
    "revision": "0cfef493d8e6c42f6fd99a590b48ebc9"
  },
  {
    "url": "assets/js/50.e3d036e1.js",
    "revision": "a76b7113a67d89284e73d637252f822c"
  },
  {
    "url": "assets/js/51.468b472a.js",
    "revision": "26cab8278ccf1845f57b799da8d44a8a"
  },
  {
    "url": "assets/js/52.60bbddcd.js",
    "revision": "53c26df3821681c778834cc904f10058"
  },
  {
    "url": "assets/js/53.f33478fb.js",
    "revision": "62c4a440da9ff9e7ef638dc245217f13"
  },
  {
    "url": "assets/js/6.9f4ba4e7.js",
    "revision": "282a9b8243d6da2ca38de20ccd8ddb21"
  },
  {
    "url": "assets/js/7.20f638de.js",
    "revision": "7c56f6dcd42710efc723320f05338b14"
  },
  {
    "url": "assets/js/8.a88bbde4.js",
    "revision": "c08bfdc1148f4c646d3671c91ef875ea"
  },
  {
    "url": "assets/js/9.e39b6187.js",
    "revision": "2b0d6a97c3770813ea92323cefe02530"
  },
  {
    "url": "assets/js/app.0467c60e.js",
    "revision": "8656f4c969b9287e416ffbe3814daff5"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "2462262d32847bd31d02029cb004dd7c"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "2099d3f518552b1a1104fdd9e6a6229b"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "7199dd304ede636e21a0c8eb098f355a"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "c07e810ff93852bdfbf4eefa8d82c458"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "b3e848d39334b4a817c73d51a1f072f5"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "21d75cc49bcaa92d6b145faa3b5ffd71"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "e0333de28a0de5341e34438d02e2f21b"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "6527e6383bfa4c9fb1411408f0dc4a1c"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "9e03ca22c851354999b22ded031330a5"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "c066599a2b0afe1232dfde12b270ee88"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "686ec5e27b0c6d1277c82211d2ae3670"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "7e26f1bfb6da006540e46584cb99d776"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "3f45cbd9becb940efcfd331724a534fc"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "21f734b28c01d3b7299dfc1766ef596b"
  },
  {
    "url": "base/practice/1.mysql.html",
    "revision": "5836dd1b92e0d731ed8444acbc1f9e72"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "01cc4e866455aece7414bfee40cb772c"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "8ebb2deef951bf487133ba216cf42263"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "9214facca3db8696ef2460d718eb23f9"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "de98cdf189079eefd990db38ed1c5924"
  },
  {
    "url": "base/practice/test.html",
    "revision": "2a1b1aab832abe01da041c535ca3c32e"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "cb1eda90c69b30c3dda4d8227f48c538"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "0a2962160a2a493ce631cffd7e7ef9b8"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "42fffe6421e6fd97ffd9b71b703c0f8d"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "8bd026c74c2be5374f13aea727f03972"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "d2abfd53bfe3ec9ef5d5707f6e867fe5"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "2731ca01b1925b50bb4fa9c81ab737c5"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "bc38ed2f09786a056b88587a50a8ce77"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "d20363743264e1cc1b65c67f7297d9ff"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "98c455a1440b0c2cb7f5236dc0d74a06"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "cccf967815c6cc301e8f6dfdbf2a9564"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "542907bdd00ff4cd296342663553d90d"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "bce9ccd3fd2f45ba2db3bae74761d2de"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "9ae6d9cded745fa1c8f1e61bf615476f"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "7e6b72fc011646983778be414dadfed3"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "6a5b2b3211eb7468625ccd1de14a0afe"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "a4e22104404d4457e6d493bf3ac32c7d"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "c36f0de53926ba9ebbed75051292ef07"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "efe91249de092d9285f2165834def593"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "36d61786490df1df2430783ec4229527"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "b0f8a16f50bbb5138f629ea7855e85fd"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "c9682e9d5b2de4359d17e8a018485142"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "5c4b926c2dd324ec2d8360f0e2fb98f6"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "48f8567f9c83dcf23d6411e33a2fae81"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "f1d2af1b8b6d2152fac0c085e1410d81"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "7e405879ac77b3548ccf9e5dd4d1a5cd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
