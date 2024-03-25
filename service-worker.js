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
    "revision": "740d3e4d2c05a3314501558fa56b310c"
  },
  {
    "url": "assets/css/0.styles.a7e928c8.css",
    "revision": "bba84f77de8a8902c5a5eab84fb36e05"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0c3d1cfe.js",
    "revision": "d6a954ce471e8dda75689db00a24ebd7"
  },
  {
    "url": "assets/js/10.b998fb70.js",
    "revision": "892564f6b9af2bedf4b7d6ba4add4fe6"
  },
  {
    "url": "assets/js/11.36489d19.js",
    "revision": "c5e84962b3fb4a8c6032e565923b2419"
  },
  {
    "url": "assets/js/12.d91eff95.js",
    "revision": "1031eeb25fa9a0898bdd46dd0061030f"
  },
  {
    "url": "assets/js/13.b4110138.js",
    "revision": "39b5cf7a2cd2e00f9c1a66c3e7f0babc"
  },
  {
    "url": "assets/js/14.3327d433.js",
    "revision": "35cefa4f58f7b291f82ec89b795d7386"
  },
  {
    "url": "assets/js/15.2fa675e2.js",
    "revision": "32761f98732656050d1f5ad91742656f"
  },
  {
    "url": "assets/js/16.1cce50a3.js",
    "revision": "85fcfc2c3b2d3b33f810bf4da53b9a20"
  },
  {
    "url": "assets/js/17.f1900005.js",
    "revision": "ec7708b6cd21ad1c1e4c42d1ec74c444"
  },
  {
    "url": "assets/js/18.aea980c3.js",
    "revision": "31e77e5f928b4aab294795425af23c4b"
  },
  {
    "url": "assets/js/19.2f24d44d.js",
    "revision": "e567f6fb1c5f20b3fdf631973a9e4e4f"
  },
  {
    "url": "assets/js/2.be785046.js",
    "revision": "edf0239994b3fef4a654682aed0de5eb"
  },
  {
    "url": "assets/js/20.54e8ad1f.js",
    "revision": "eee03dc9ecf9e197f3700c4133aa2848"
  },
  {
    "url": "assets/js/21.f75c3782.js",
    "revision": "ea4e2de39c7bfe467a41eacb1bff63e8"
  },
  {
    "url": "assets/js/22.80d9297b.js",
    "revision": "84185f4208d7ea7b8e500cf25d22afaf"
  },
  {
    "url": "assets/js/23.b2f82b68.js",
    "revision": "c849c8a4efe945de86d11b647914da39"
  },
  {
    "url": "assets/js/24.ef6ba483.js",
    "revision": "be56ce1bfb5d9bc8bf19deeae574affc"
  },
  {
    "url": "assets/js/25.d7b34de2.js",
    "revision": "02220dd3abaf2cb920d27bf115fa84ef"
  },
  {
    "url": "assets/js/26.fcb4e503.js",
    "revision": "cb62e86dc8b762a41ebbd404dbad76d6"
  },
  {
    "url": "assets/js/27.813e00e2.js",
    "revision": "7e651fccfcabd1a6564b76e0fdcb03ee"
  },
  {
    "url": "assets/js/28.1f524c81.js",
    "revision": "b4b37ac1f54ef884e4b63fb8bf65be93"
  },
  {
    "url": "assets/js/29.3e0c0bd5.js",
    "revision": "7645f27fee5f05cbed3a64d1de605ad1"
  },
  {
    "url": "assets/js/3.8bdc62ef.js",
    "revision": "79a99c0a75d050889e0ddc86377a0b1d"
  },
  {
    "url": "assets/js/30.1b872699.js",
    "revision": "0fe7a6edb0ddeab723ba51a71b32e4f3"
  },
  {
    "url": "assets/js/31.a071dce3.js",
    "revision": "bd26c9e4c8d14f4e2483daf2b01c5978"
  },
  {
    "url": "assets/js/32.d5c6f657.js",
    "revision": "51348a2339270cdb4622554a63ec0134"
  },
  {
    "url": "assets/js/33.bfe57802.js",
    "revision": "45eaa04fcfd8bfa05b860ba3cbfb8be6"
  },
  {
    "url": "assets/js/34.a8e43aa4.js",
    "revision": "dacb4c00b2b11bbcd819dc00be17a0b9"
  },
  {
    "url": "assets/js/35.0396040c.js",
    "revision": "15afe0c01b1129fe4f08773d4dafc078"
  },
  {
    "url": "assets/js/36.da737785.js",
    "revision": "2013ce48673a84010a9e0be66c9015a8"
  },
  {
    "url": "assets/js/37.63e375c2.js",
    "revision": "b2e924f2b029ed2823c4c9770ce6be70"
  },
  {
    "url": "assets/js/38.02579ddb.js",
    "revision": "972c18988cbedb2f42d620154eb73f7e"
  },
  {
    "url": "assets/js/39.82519d68.js",
    "revision": "d968cebf85e2d7a7a2563e12b829eb30"
  },
  {
    "url": "assets/js/4.6635fd3f.js",
    "revision": "1d78468f1349cb63bd86053033e75978"
  },
  {
    "url": "assets/js/40.62d0fe4a.js",
    "revision": "3735a4e276a2c3fa7d3d4e0e60451cff"
  },
  {
    "url": "assets/js/41.f7f95419.js",
    "revision": "8a71f59df484b856cd8cfcc5d94f64ef"
  },
  {
    "url": "assets/js/42.6eff1e09.js",
    "revision": "20192d5f1b4b2eb7778f5ef680aa3261"
  },
  {
    "url": "assets/js/43.84ea0430.js",
    "revision": "d93fc5703f5b15b4ba88a96fb4434887"
  },
  {
    "url": "assets/js/44.5ffb8696.js",
    "revision": "fba3410fbfcd37acb32e8457c7dc8ce1"
  },
  {
    "url": "assets/js/45.9636997f.js",
    "revision": "f66c4eb279a113d25e882be2044caca3"
  },
  {
    "url": "assets/js/46.6e391b4d.js",
    "revision": "28c7750547e05f703b439f422b252c38"
  },
  {
    "url": "assets/js/47.56ced8ce.js",
    "revision": "b287a6e2328fea7b58f841d0a3c06b8a"
  },
  {
    "url": "assets/js/48.a91aabbc.js",
    "revision": "8a0f275e2b1ade1e350f642c43007a19"
  },
  {
    "url": "assets/js/49.fc2684cb.js",
    "revision": "93d2fc8de7ec40bcf2325bdc91b87716"
  },
  {
    "url": "assets/js/5.a45857e8.js",
    "revision": "de84384d6b84b516bb3ec6beb4b0327c"
  },
  {
    "url": "assets/js/50.afe8cca2.js",
    "revision": "358d9489d14759d5766c1e784aa4869b"
  },
  {
    "url": "assets/js/51.a5fbebbb.js",
    "revision": "27bb34492259904b0e345d3f653407fa"
  },
  {
    "url": "assets/js/52.fd04e7e6.js",
    "revision": "7ae2f5b05794c2dbd479bef99f9a169c"
  },
  {
    "url": "assets/js/53.f042af2a.js",
    "revision": "d12693d6902f7c48daeb7c09a6463abe"
  },
  {
    "url": "assets/js/54.a7669cea.js",
    "revision": "c6b3e5b7773d4bf1b257de1e0eb5ec40"
  },
  {
    "url": "assets/js/55.c48b66f1.js",
    "revision": "3e8bd89be92d6451d779ad8d6f9b5aad"
  },
  {
    "url": "assets/js/56.c7b509d5.js",
    "revision": "9bbd719e48089048e94a0a6b0f6d19d0"
  },
  {
    "url": "assets/js/57.71eb39b5.js",
    "revision": "4f156f1da5e7c559972c89d66faaeee1"
  },
  {
    "url": "assets/js/58.01faaf8c.js",
    "revision": "b1c88c4e83e39d879f8627b5fd68f6d5"
  },
  {
    "url": "assets/js/59.e045d6c6.js",
    "revision": "88e4daf211592481b1cf4028d995f91c"
  },
  {
    "url": "assets/js/6.c3c9b0a5.js",
    "revision": "81ce6f304a5bbb58daacf57efe164d71"
  },
  {
    "url": "assets/js/60.cc2bf2b3.js",
    "revision": "25a9d42944b1eada74285c21d1ff8743"
  },
  {
    "url": "assets/js/61.2d55ad89.js",
    "revision": "de1d796312c8f88b9fa775fd77515d50"
  },
  {
    "url": "assets/js/62.eeb015e0.js",
    "revision": "94582e4c19e4223ebdffebcf9d7709d1"
  },
  {
    "url": "assets/js/63.aac0f1fa.js",
    "revision": "6e5395621481adac18b982102fcb9917"
  },
  {
    "url": "assets/js/64.4c2277f1.js",
    "revision": "007b97ebff081c7203d96d4af451fa7c"
  },
  {
    "url": "assets/js/65.ac988d7a.js",
    "revision": "a10c12974de1ec1ef678e7b31e7ad45a"
  },
  {
    "url": "assets/js/66.6de05e42.js",
    "revision": "28ee84e7aec11ddefbd216b5765932cf"
  },
  {
    "url": "assets/js/67.43a24117.js",
    "revision": "c72d757574418ad0f58e786ec6ae4253"
  },
  {
    "url": "assets/js/68.d4cd66b1.js",
    "revision": "13de3f2c290cda02f948beb105b2023d"
  },
  {
    "url": "assets/js/7.3d545a55.js",
    "revision": "767ebd9620ddd6c8461929cc6b449d1f"
  },
  {
    "url": "assets/js/app.83195728.js",
    "revision": "5a39a46c88e8c84137ba027a4de4531f"
  },
  {
    "url": "assets/js/vendors~docsearch.2852b102.js",
    "revision": "39857339a83afa7f8a0503166398157f"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "fe498d3fc3961a0da270be594eee4ee3"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "ace1c1565ccc69e3545e15e88764dd6c"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "533159d5dc78f0851b3befb7cb6fdbc0"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "e964feb99987a9b986d51472c8387dd5"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "7ad3f1e3114249fb282099e9fec45b95"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "55babdb2617311d701db62c9fa0d51dc"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "24da46ca561483027152d4150df86db9"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "cc4b44c08cc3beeb901cfcab6b2597a8"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "6b72531bc02977b90913529bc9d631cb"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "17e2cd5dcacdf0e5a3eda2fccbe2cdeb"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "2703d8d39bbe4cf27edead7e700d031a"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "1d98cb23bb84a06f5080789beb8b2193"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "2d6aeaaba9dafdc308d2a38445c99368"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "4c35f181a40956a22bbb2a8e78179e4f"
  },
  {
    "url": "base/practice/1.mysql.html",
    "revision": "c953cf77f8e768bd9c24281472e0ba4e"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "24058567f618da41e1271967db4b0f26"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "342393554784a08fa019e8a759195d5a"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "3442c824f5e809c0069de28e4003dca0"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "28ed5d581cb8b1aeb05515c971f6a426"
  },
  {
    "url": "base/practice/test.html",
    "revision": "2db4d97b95bdf451ab32085f0c6124fb"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "19792323a47043429d89dceb9a107954"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "3968f339ae5240ad3608032989448770"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "d42a2918b5b0142dec2cae0e671f0fc7"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "5b9ff2a2319e12e3ee4e5c8a53c01498"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "e69eba3eab579aa8b028dfc7b6541249"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "a53679d43f2a1ebf3c0610f12eea0632"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "7f5d1ebbd4f0483af8ccf6b11c50664d"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "077f9c8804a5c3a18ffd4ba8bd81ba53"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "22f77fd2f9e1e6d2856eede0788ef088"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "ac57e8761ae827e7083233fb2e0e91e6"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "0f9c842cb926d5d1dbd443c306212b2c"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "3ad2f56afe32e44d134165731569ba22"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "282e03c53d2e22476761d981f0a5c215"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "f7be4fb05a4591a087d058d2a8e725e6"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "7e1090b680c1dd74692a41b4065f4b0d"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "0b6f324e80acea59219802972d239919"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "3df40edb5aef2357cf2e7545c10c4fed"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "e751d90375e776ee9b9a1c6d1798150e"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "f01e127959c38d4663d8853906ebab91"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "de5eb09de94404cdcb3f6079daa882ed"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "b0a9bd2f53d180e4ef9d6b792792645e"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "eeea9bb9655102362554c16f6184f7dc"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "618f40f3bff595110de0141c35759d7e"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "5d0a51df74d27b85e878d3edf2b6c44c"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "2d6d560fb23654de9112eef67ca048f2"
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
