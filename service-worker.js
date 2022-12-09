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
    "revision": "6284e4d2816d6b7bb6d32b1e02e5fc8f"
  },
  {
    "url": "assets/css/0.styles.df146dae.css",
    "revision": "cadf9fddd5863c542add39ac3536a668"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6eed715f.js",
    "revision": "7d09ba2147c8f506af25a94b5ee0df75"
  },
  {
    "url": "assets/js/11.2065359c.js",
    "revision": "bc591c73a8bbd40b53dc04d8b5e25a5c"
  },
  {
    "url": "assets/js/12.023ef3dd.js",
    "revision": "c65ffff869bc809e0e4744dbeaf4a712"
  },
  {
    "url": "assets/js/13.02492076.js",
    "revision": "fb0d9bece69ba73f835c700252c164da"
  },
  {
    "url": "assets/js/14.f8e8a467.js",
    "revision": "1b2b2554b7c4f1559be36a585fdbe10f"
  },
  {
    "url": "assets/js/15.e867ec88.js",
    "revision": "9df949acbc76d4cafb576d91bffee219"
  },
  {
    "url": "assets/js/16.5724dbfa.js",
    "revision": "e2c9af34f115f10e48ec60651075a82a"
  },
  {
    "url": "assets/js/17.ab1d58a0.js",
    "revision": "aa3ba70039747de047b99da38db32d71"
  },
  {
    "url": "assets/js/18.9a60ab9c.js",
    "revision": "ebb9346d2f0d332abca9cc7f35a74805"
  },
  {
    "url": "assets/js/19.1d5a8e6c.js",
    "revision": "c360bd941a72af4f714eb2543c04d894"
  },
  {
    "url": "assets/js/2.653b5217.js",
    "revision": "4423dd2ec1b2e7da9f60868c587f2703"
  },
  {
    "url": "assets/js/20.b32b38c2.js",
    "revision": "f0ee0e0c537d7b0f36c4b7c48baaa818"
  },
  {
    "url": "assets/js/21.b11758c6.js",
    "revision": "af65998f2da2f9c4d83d65fbe73fe04e"
  },
  {
    "url": "assets/js/22.46d77c08.js",
    "revision": "616a35beed14dcbea8c20add9e163abf"
  },
  {
    "url": "assets/js/23.bd9192e4.js",
    "revision": "c84351daee420ddf0c1a136c03777ae3"
  },
  {
    "url": "assets/js/24.7170f525.js",
    "revision": "031d3bb5975bfb33d3551925b1dac610"
  },
  {
    "url": "assets/js/25.473253cb.js",
    "revision": "05a2e173b9606f9913b2fc65e4b11f88"
  },
  {
    "url": "assets/js/26.121fc313.js",
    "revision": "200dfe5ee598268408438ed000667760"
  },
  {
    "url": "assets/js/27.42b6ad06.js",
    "revision": "f68b5fb5803b6323aa8c2959bbcc7bff"
  },
  {
    "url": "assets/js/28.41824033.js",
    "revision": "4c45a3021792aec386b00bfe5a04120d"
  },
  {
    "url": "assets/js/29.7513fafb.js",
    "revision": "b1a18c593762c07b5824fdb89103f531"
  },
  {
    "url": "assets/js/3.518a03c8.js",
    "revision": "d03bb23728ed8d4709ab8c53a3993f07"
  },
  {
    "url": "assets/js/30.0a2cbec4.js",
    "revision": "ed89be5b82ec3c41401f438d15fa9c69"
  },
  {
    "url": "assets/js/31.29ca0c4e.js",
    "revision": "0913806f4ba60d3ab31a236e1890a535"
  },
  {
    "url": "assets/js/32.dd9e4721.js",
    "revision": "95131169f1916894bc2bdf710063b091"
  },
  {
    "url": "assets/js/33.c06a6130.js",
    "revision": "c8d3c75a1c7fa10442f7dfc43dba0798"
  },
  {
    "url": "assets/js/34.5670e68a.js",
    "revision": "6f9917ffa423c124b67e102081c3866c"
  },
  {
    "url": "assets/js/35.cbb20650.js",
    "revision": "e806b93eb53fab81d427f65cf6728edd"
  },
  {
    "url": "assets/js/36.6e24b602.js",
    "revision": "14c5a604ec6ba527b8b89a00b067ce88"
  },
  {
    "url": "assets/js/37.bc4788f0.js",
    "revision": "03e8b56b1c3000bcca313cadc8b57eb7"
  },
  {
    "url": "assets/js/38.75fe3ffc.js",
    "revision": "2694153cdab2073fd187a001886cbb2b"
  },
  {
    "url": "assets/js/39.d69b7a33.js",
    "revision": "206de3396edca0e2d40ca97995fe3d26"
  },
  {
    "url": "assets/js/4.a18d162d.js",
    "revision": "09fba9ba6d36aefd749cb26613e00d17"
  },
  {
    "url": "assets/js/40.7b3e428e.js",
    "revision": "b51bca72eab2d2847e224566c11f525e"
  },
  {
    "url": "assets/js/41.b26d6247.js",
    "revision": "1a2a974f83d41fd43b9d88c0c3ed084e"
  },
  {
    "url": "assets/js/42.04633462.js",
    "revision": "104fb3eb817ff81ee51f281f503c196d"
  },
  {
    "url": "assets/js/43.e48e6f8f.js",
    "revision": "b306772f536238de9490786bf059e28d"
  },
  {
    "url": "assets/js/44.46119c42.js",
    "revision": "bda362217f04b78045133bb649fb3b52"
  },
  {
    "url": "assets/js/45.652f05fe.js",
    "revision": "dab80011269dac2ccf70404467e2bc7c"
  },
  {
    "url": "assets/js/46.98547adb.js",
    "revision": "6654fff73336ccbd49826612387b9d4c"
  },
  {
    "url": "assets/js/47.46c1bbe3.js",
    "revision": "e1ce311be8341a0cbcfd6c068995f703"
  },
  {
    "url": "assets/js/48.901c5396.js",
    "revision": "8b06a445f525187071f318c59e7a1129"
  },
  {
    "url": "assets/js/49.511d0a13.js",
    "revision": "2b1fd08b45505a850b8f2c15615ca008"
  },
  {
    "url": "assets/js/5.d2c59e38.js",
    "revision": "c5aca42cafc7d0f6c41f98e3f5c99083"
  },
  {
    "url": "assets/js/50.1e482b13.js",
    "revision": "0e4b70f2e340d2e9d76f3414e26a01bc"
  },
  {
    "url": "assets/js/51.0a3866ed.js",
    "revision": "fa40e4c129d7afdf8f4288d26dfd0a20"
  },
  {
    "url": "assets/js/52.3ba94c70.js",
    "revision": "134d98e852c6c09c590c8cc72fc97f96"
  },
  {
    "url": "assets/js/53.453e558f.js",
    "revision": "1301c02d685607cab3f393f17ec7815f"
  },
  {
    "url": "assets/js/6.377316e9.js",
    "revision": "9d8f610313cca92d482aa1e5b5911a45"
  },
  {
    "url": "assets/js/7.fd15ae3c.js",
    "revision": "4a36d24d9d00f8c0ac2775a6fbf97353"
  },
  {
    "url": "assets/js/8.5fb21226.js",
    "revision": "118581f27c797b407be311f04474b28b"
  },
  {
    "url": "assets/js/9.84129de8.js",
    "revision": "d8d6dbeaee45588aac177da46f474dad"
  },
  {
    "url": "assets/js/app.ba840822.js",
    "revision": "e6f0f1f6829f18e3b31f53a4416e1b8e"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "94428d70d0d81040c68bbd1000c8c698"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "17586c7c65602abb1af01e928d6bc915"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "e976a2f879211d32fe66f36ad55b681d"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "2818b6c0ebe09eab374b8f59743eddf4"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "27264b7627446da2b931f3c6cc97af36"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "1ac7a0bf5c97ba79e6d3d903986b3b0f"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "6f90a06b2ee8413c03c1bc5434224642"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "07aedc54e059e6ccd3d0d19a4bda0b23"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "ac5235097f3d9d1380f5d94f01567d86"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "6f92c9927f71a0f8fa5e3c3a61a5664f"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "04e3fbf66a4a76f4210ac02bcce3898d"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "5c9e065331fdf6eef87317b301b5e168"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "5b7b195eb807894bb83fe32c74fac2ff"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "4cff95a36d4ead010cbd6dc8d5ed58bf"
  },
  {
    "url": "base/practice/1.mysql.html",
    "revision": "c60d6fac8e029e2239d46264e9bb6599"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "40c5acc84db2298afd6d853cb4ff9d03"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "feb369c7aa3d6c620c97513db858969e"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "726b36d44a43dd1fe17d21258566d38f"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "df1ab4e8d502443eddc82c430746d592"
  },
  {
    "url": "base/practice/test.html",
    "revision": "74f52bcd2ec9a241cd5e119a3e89c269"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "17b23bd18fc53f4873d204fb97392e8d"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "8d488c80b3df0bdc4e1683e1376c0e8d"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "533bc7974c27f9d5f6507ac12e7a30e9"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "4194fb22a7ea56c460c1ceddee522d65"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "e2b9647d6351717af48c5ef44b262061"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "d78e757dcd6af49ef1c834c4bf9ae92e"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "50c3cc710816f828be851a39bc28a9e8"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "d04e1e0c893c3cb74ae1362b6b07e68a"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "e08618afcb2cde9ea7fbc818857dfc1d"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "4f06cc2a510da531aa4cefad5c386bc2"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "b5ac5a221ec5266d9256d6762db3dbd5"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "532330dd669c296bedba6607d5dc2c78"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "c0c9fa33ca7ff46168822f1b8d835323"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "cbabacade14188a0d29d8e52c5c1f415"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "626d50bdddf3d7fa95adc31d961b9882"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "c490c667c0f8c3462af55f12b4d2a81e"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "922dcf3513cf524b9a51f1c639f87608"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "025b7ec05802de95d772e770e986c8ff"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "ea331a1babce2d62a726eb3b97e9f091"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "1564d1c6ff5a111e927a00921138e2ec"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "a554f0e85a4ae853450e6cf2ca29b0cf"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "27aaab9c2fbfffe4970570d550442f54"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "202671c4b23d5b5a0cc48ab15665dc99"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "5c1507b2d71d391bc7370a7d0bf5db5c"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "72222ea5a8866a5d997c8a4334bf310e"
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
