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
    "revision": "87b0f74cc1ac772ec7aa976ec3f6f13b"
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
    "url": "assets/js/26.9f1a578b.js",
    "revision": "f80b75738802694a6b9df9a6aee27c74"
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
    "url": "assets/js/app.da3683a0.js",
    "revision": "bebe8aa22d74e8d7cc46d09091cfb22a"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "396b3b38b7ace15286a987432f20eddd"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "4bc29ece02b22e9e8283e6717ce90a9e"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "19bd889f42d5a4086a9d1d57db8c5795"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "63eea0c97e84fb2cab499cd5a025f84c"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "2c5a1f420b129f2bc8010244dd852327"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "60fdaa221215d1369d9ccab728aef0e4"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "0c3013a86e4f80754a58fe3483402207"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "86920923e32cd8e8cdb2386b8b975a6b"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "41354b051305175a5d03e251a79c96e3"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "4e8e8c13eab28d5d87d100731101c15d"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "c0e94051532c0648b6b5e303cf8be251"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "800d4b1f37e0a1a6c64db2977b2601b3"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "aa53b5ba6584d3c8afc54e876450eccd"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "bd2d047c79e4980daddf74622a3d48de"
  },
  {
    "url": "base/practice/1.mysql.html",
    "revision": "b8e81bd8bfb1d64fb50739018ac17b6b"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "852fecd6ea1a81d671b6fcb5c47c519a"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "c6513cceb3a52a6b5e8867e069375733"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "a6c45edf58609292c499d0bba8d78c14"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "120da5fe9d1f6f12cbffacfc849e5759"
  },
  {
    "url": "base/practice/test.html",
    "revision": "42077a8ed5b1e200368b41a67b834e4e"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "705356251f4d09a36f911a1c0919c2f0"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "f0db69b3c62ce52710fca262883d6f63"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "cb8244314d769cfbcb7e9f6a43756c52"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "c6984ce00ae186ecf71680384c4f677c"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "617ad223633871658ba0b2fb48a8044a"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "6614eb16f46ab960d6b25049d9485dee"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "84f51b6a83221d47ef79ba10838a3617"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "7d4fa2e80fd80a505a7073906e4ff5f1"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "06794ab2114d0bb10ae9996b78b7b3fd"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "ac64da634d15f9943e8aaa449e024fb3"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "a8116bdbd64502b3e66360044eb41861"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "09bb6063a032d424cfc1b81cfa7f8fed"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "1565cf06f3b1f7bed6c150cb2e2f4b55"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "7b07895c18515b4ed5d8a86bcded18fd"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "319c162284315b1d8ac79f9bab5e3a2d"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "83bebe1890dceecff70d45059ab986a1"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "33526c78b5046ce9e7db766285943037"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "e4de2269848e765c8aa24078e04c72ff"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "70a3c87b16d17c6e21f70c8420019d1b"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "956106fca8503844fe79601b1dca4c9d"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "7fc3a146d001854a7f51478f690456a1"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "9b88fef2611d80e71dfa6334a07ca694"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "ee96c051a94433a096cbe76b58bc8a7b"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "97a0c6c1b603b4a61b6baa80bd335269"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "9fa637538116806ba5afb35d90d9d3d1"
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
