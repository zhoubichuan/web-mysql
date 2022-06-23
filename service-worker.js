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
    "revision": "e6b56d216702eea683b2cc4414cb05da"
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
    "url": "assets/js/app.fa129f2d.js",
    "revision": "1aaa579d79f2791451d547544d9748aa"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "114df8b5c3e929473ecf6378131024ff"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "0c0def2d9542b3b76413aaef2448b2a2"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "8ad15942daf5562d0c1dcdbf5b54b9e6"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "e10907b632ffeff0d318707a70a7ba48"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "d1103d44443a0cf3cd849fe6d1647b08"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "b2193d712779642d8d9853c981a14d54"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "d77717543b61caecfa2206d0d8f5d16a"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "c9033ad448c677f775c32864dea20e67"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "289fb10c78717424cd90e78c58046486"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "556a1d571b832eb9cd916d1c3701cecc"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "8f0131013d776a328066fe5d294c167e"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "e617a946368ee9bd89219e24abe137b9"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "407dc4bd20b361ad2a5866510d512749"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "e796d13ee63a7da95b00da1e00d23ef4"
  },
  {
    "url": "base/practice/1.mysql.html",
    "revision": "b3f676615561e26f936fa315095853eb"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "38341f9dc06f8e675e44e25acf50c199"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "03305c6278d7e2077f4a8b6757e0cc24"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "27333f63209ac841b5cd8b4b684150b4"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "057e48ae2b3f60ade21e7f2b75b3eab6"
  },
  {
    "url": "base/practice/test.html",
    "revision": "d02f13693ba7a0b4548b8950129363f6"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "8da4c2d2c151cf4b210da36928c48d67"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "373dd05fe87207fa8396ecb3d77618ac"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "06557925dad1c97ae421f3f58be75ff8"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "6cf3b42e8b68a0d1472c5022b2226247"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "3e8f34299fb41358a379f3bc074159e0"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "616a1185542e4d9c91beede0354ff950"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "339bec9bd312c4ef97ac8cc8af6d9b26"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "1ef43a0272d9fe08af1ef22326cfd229"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "ba4fa75beec9e36cae2ded038df01792"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "9abad7c63d446f0b4a0808533450714a"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "0444155006a0ed75c400e49a5103f355"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "00de84e0448d00ba95ae3e99d00b6f71"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "eb6142706605d178ed54ac7fee140999"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "9364bad7e562f47acf68dd34836f21ff"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "0890c5bbcba578ec6380990e0cbc777b"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "1a408f51a2e7b28f1f3fde69a50eeae4"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "ff8ab14cc7833175c51feddf063ea876"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "854c3d759de1bc8231269a1dd095267e"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "727676e546419bb50f1f5c9ec1c09e1c"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "68f989d997810bbf874aa482b7f74770"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "21403feff98171cda144939e1579052b"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "c8cd206a53114a42a1b4a35f98dc40a9"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "2976f93b784aac638a7c858ec6b0580a"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "617a6d0886bf45f5e48c495e4520bc00"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "2e48868d68736954d10bb5492df49911"
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
