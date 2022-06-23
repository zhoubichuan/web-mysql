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
    "revision": "badc81fb765ccb92501800f2ec21bb90"
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
    "url": "assets/js/10.3003765d.js",
    "revision": "16a95a193a66ad3359a5006181565e2a"
  },
  {
    "url": "assets/js/11.a7bf3d23.js",
    "revision": "7f745c7adc843f3234b7acd096146b54"
  },
  {
    "url": "assets/js/12.f0213c4a.js",
    "revision": "b62c59121243fcdd9e60500abc49050a"
  },
  {
    "url": "assets/js/13.1b0e531e.js",
    "revision": "0e2fbbbdab95a8bd5593e83412754a44"
  },
  {
    "url": "assets/js/14.c07a7207.js",
    "revision": "659f6cb9aefb20cfe4f0afcb179a9ee2"
  },
  {
    "url": "assets/js/15.7f8fe091.js",
    "revision": "c26ce615608c21ddd5c1c01152b9b78e"
  },
  {
    "url": "assets/js/16.50395bba.js",
    "revision": "cb4b73229dc852b0682af89988143240"
  },
  {
    "url": "assets/js/17.c8dd9efb.js",
    "revision": "f2b1ed38fec6b6d68e7fb0e4bc7aa6b2"
  },
  {
    "url": "assets/js/18.4a080fd7.js",
    "revision": "e2ef45cc9d8a53075194d843fc1edf8b"
  },
  {
    "url": "assets/js/19.2c836687.js",
    "revision": "46473e46d8c7e745a1d30801761c4cfa"
  },
  {
    "url": "assets/js/2.ae449887.js",
    "revision": "9eaa532b07c8d2112a6cff0fd5ed2fd0"
  },
  {
    "url": "assets/js/20.284f179b.js",
    "revision": "9ed8eb4b568f69a5abece250d61992dc"
  },
  {
    "url": "assets/js/21.5148f8b8.js",
    "revision": "360c2e00d0fa069437d061846399f612"
  },
  {
    "url": "assets/js/22.8e2d3c9e.js",
    "revision": "2a71c197eb954f3aa1514e9254e8a2e3"
  },
  {
    "url": "assets/js/23.1e8b8e2f.js",
    "revision": "492ec215f408ad8a2dd9de75f12f8133"
  },
  {
    "url": "assets/js/24.0ad5724a.js",
    "revision": "5ffc512af77fb6572dcf424b5130fa94"
  },
  {
    "url": "assets/js/25.78fb0256.js",
    "revision": "5f296b6d6a903874463ec2475b6e3891"
  },
  {
    "url": "assets/js/26.1a07348f.js",
    "revision": "187d73a0aa999cf2a92a987694933c08"
  },
  {
    "url": "assets/js/27.9cc055d8.js",
    "revision": "9000768a3606c7a92193ba67ff7547ca"
  },
  {
    "url": "assets/js/28.d0977326.js",
    "revision": "2ecbccc18a9b39443af0b6fc7cc1ff6d"
  },
  {
    "url": "assets/js/29.3228ec6d.js",
    "revision": "0f495ad21d73bf13706578d2304e94f7"
  },
  {
    "url": "assets/js/3.e7c95100.js",
    "revision": "78935ae0f56a58b0fd33f8d5990e32d2"
  },
  {
    "url": "assets/js/30.e6bdf445.js",
    "revision": "9029f3bc98286e7a5e97ca0502c14896"
  },
  {
    "url": "assets/js/31.8cbad92b.js",
    "revision": "bc098d0305d37765ca1aa27b7599778e"
  },
  {
    "url": "assets/js/32.b6732f8e.js",
    "revision": "a9f64016581d0f18e56b4659b2466981"
  },
  {
    "url": "assets/js/33.29ea3cb1.js",
    "revision": "2abe25e88d8f2b6f336c19794b08a58a"
  },
  {
    "url": "assets/js/34.dc8345e8.js",
    "revision": "c859ca2f03e70b8767c7b5342e26d544"
  },
  {
    "url": "assets/js/35.c31478f6.js",
    "revision": "043dc12249252d0bc3ad617cbc769b8a"
  },
  {
    "url": "assets/js/36.93c23744.js",
    "revision": "c68bd665b3880097da28ce926b887bd1"
  },
  {
    "url": "assets/js/37.baf0ec55.js",
    "revision": "abf2042e1b9468813d42f22c21b618e3"
  },
  {
    "url": "assets/js/38.a5ff189c.js",
    "revision": "2db60a62de35e07c6caf7b2b5024f417"
  },
  {
    "url": "assets/js/39.f377d353.js",
    "revision": "a2320b85b9a8732c6a5c0896f48bc5b1"
  },
  {
    "url": "assets/js/4.72af2e51.js",
    "revision": "41dbedf9c4d14f1a7f966031431da794"
  },
  {
    "url": "assets/js/40.78c1d7e3.js",
    "revision": "b907de5ca990ca28f517ea7565b63089"
  },
  {
    "url": "assets/js/41.f6a0673a.js",
    "revision": "6ec3ba2770c0ac1b92c531dfcefff2b6"
  },
  {
    "url": "assets/js/42.fc5eee98.js",
    "revision": "12186b853609e33e00227a4907b2e85a"
  },
  {
    "url": "assets/js/43.d6a16d47.js",
    "revision": "017e0f83eb4d99dcfed5251d1f0772ca"
  },
  {
    "url": "assets/js/44.40ef48ac.js",
    "revision": "6133e47c0d0e44ec641bf908df703507"
  },
  {
    "url": "assets/js/45.7443c913.js",
    "revision": "7ff1f5ef3605240868ae521898980180"
  },
  {
    "url": "assets/js/46.643dd9f0.js",
    "revision": "4a1acff3afd485767aa5d645b0529d6c"
  },
  {
    "url": "assets/js/47.39adc9dc.js",
    "revision": "3af952acd7c04e0ca6fea4f9874e32aa"
  },
  {
    "url": "assets/js/48.7cbd9f65.js",
    "revision": "b2f30b7a865d419d84572ae2a907cd94"
  },
  {
    "url": "assets/js/49.4458e02d.js",
    "revision": "64ccd6d273da181b0448c62266d0822f"
  },
  {
    "url": "assets/js/5.a079df31.js",
    "revision": "167b5aaa644c2036f77ee0fe313724d8"
  },
  {
    "url": "assets/js/50.923eaaa0.js",
    "revision": "1258094c162c23ec7dcf6a6284b11de1"
  },
  {
    "url": "assets/js/51.8ded52d9.js",
    "revision": "d357f1ac76e094c87123742574f994a7"
  },
  {
    "url": "assets/js/52.39bfe045.js",
    "revision": "347bbfd44b73cef85bc104c432e1880a"
  },
  {
    "url": "assets/js/53.e4d24f6e.js",
    "revision": "55ad587dc7f4b479e70441d901cd995c"
  },
  {
    "url": "assets/js/6.d4a6253f.js",
    "revision": "a8d3dcea39aa4d7f769fe20b29dbc05a"
  },
  {
    "url": "assets/js/7.8021af02.js",
    "revision": "d73a4904c6f9e41b0510596a236fe963"
  },
  {
    "url": "assets/js/8.864ed5c2.js",
    "revision": "09d8dab5fc67a6629a54a506490c547e"
  },
  {
    "url": "assets/js/9.fc404ddf.js",
    "revision": "83104c7d52b7ae260a8c63af09a9a39d"
  },
  {
    "url": "assets/js/app.8a4f3800.js",
    "revision": "6124974c265294d92d59e3e45186ea10"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "bec7380c8f3c231c48f17e9f95b2f6d7"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "760d8bad20b386d462f36753276effa0"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "a5b5fc5fddaeb3133b1ca965d0b70a44"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "3bf4bba40afa94fa6e8ea1c4620753ff"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "fbc08ca932ff5ea94a238a59e0a81a6c"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "0e34f28c0d286709fcdd1548ac671c18"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "eb022b4af7968c847337fd6113a345dd"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "b0ce726862795acea3f0bd3c63a8cc99"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "665f244dff1beb78d3ac963781af0791"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "5c22f582a47c08b87e0095c938a6b19c"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "a0c34739859b601c04a8152ce31d9848"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "e4396e6864d3be1ab714eea5ab0bde5a"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "1fc5b9bccc95af6a25b8c009c3b41946"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "6367a2c9814e1e3488251b9ce20e545f"
  },
  {
    "url": "base/practice/1.mysql.html",
    "revision": "a0516d106819a4a8a4bb812ca923bb4d"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "be20a90ddc1cc95d170461f0e6eb0a82"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "2e147738ffa4bf2a8a3bbb825433f233"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "ed29edbc59692323a26413a1b5dd5161"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "7bc9363417752205180cc4440fd3bf4e"
  },
  {
    "url": "base/practice/test.html",
    "revision": "ccc0f50d7b75f33366b54bc40cf0d330"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "8b8355e3417d4c3444742ecef9953f8c"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "575549da0f332aab1ad9af91a065f2a4"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "a4f1bf99439e08fd278312f16af27dd9"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "6863e4e9586990b266422bbe9087bc5d"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "da50329555ef5dfd78e520ac08f692e4"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "53e7a0a44868c0be7cc6791888ec31fa"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "91e03f18633ee8d08d9f5c11a9afbc63"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "9168da550f2fe9c5d75837f27b516f96"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "9313d82a59024b8c6ed4b383f112158b"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "f4ff6db531835ddbb6d41ba468b6d6f0"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "147c09581e0660ea6ab6b91246f910cb"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "f7b562f8deda5bd30905f39eb2e194ef"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "f98b3c3d0509026a8d639e16eaecd9f6"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "dc53623019c8b7b683dbc48e991f3770"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "7b83ad8b509ae939a9297ee882b4034c"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "33147240f60d9fe0db28e258a72a0616"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "ce3d7f3d5757ea7211a61acb973e0a43"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "e60669174ac677308833bad613b82e84"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "4cb3d1ee776eb9f9a46bd4cd39781e71"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "9149c0f9eb6de5fcc8372c9352a6b9be"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "907a0a76a1ce9debe4bafc3ec1acb67d"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "1743ff9e018761ac23b6641bc0820424"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "64c67f959731718120873fddf275681f"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "bfa2e16f120c716aaf72280ef82d4cd0"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "e6d74761cbfb66ac324aa8f05b90b10d"
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
