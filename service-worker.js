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
    "revision": "bb536cb101729d498c67ad1e727bdca6"
  },
  {
    "url": "assets/css/0.styles.cb67f925.css",
    "revision": "d1ec60728314e093648e4935f7bab19a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9f1d3314.js",
    "revision": "51cd68f0174bbc7a7d6b00d23a72716d"
  },
  {
    "url": "assets/js/11.0b61868d.js",
    "revision": "a5bc33525215f234473d87e2c6a05442"
  },
  {
    "url": "assets/js/12.fa79a9bf.js",
    "revision": "a1e0b22faf17665cb5062b9156f26f66"
  },
  {
    "url": "assets/js/13.21fe56ef.js",
    "revision": "6db41f714e365ac9639e30683c4208f1"
  },
  {
    "url": "assets/js/14.a642796f.js",
    "revision": "d2f241b3708561e7186184cbdc5ef897"
  },
  {
    "url": "assets/js/15.2df74601.js",
    "revision": "89a18a2157deddfd69b2e45e46bca671"
  },
  {
    "url": "assets/js/16.463aa06b.js",
    "revision": "6f67ab4533d20641ecf6843cd73d9b04"
  },
  {
    "url": "assets/js/17.3fedacee.js",
    "revision": "ea2e1dbee46f87fd76bf594181c48fe2"
  },
  {
    "url": "assets/js/18.789d073d.js",
    "revision": "defa297e6ca058dedffc3511183c13ca"
  },
  {
    "url": "assets/js/19.1359c765.js",
    "revision": "1b9e8ad35c8253e56bc5db13eb8530d5"
  },
  {
    "url": "assets/js/2.b11fd4a9.js",
    "revision": "eee17f2dcfb938df51d319de5ad24f7d"
  },
  {
    "url": "assets/js/20.0f35b451.js",
    "revision": "19548da70290c2b3ba3c788c1360cdc4"
  },
  {
    "url": "assets/js/21.437c468b.js",
    "revision": "e2dc6f2458138ac5e160c10ee3e3af3a"
  },
  {
    "url": "assets/js/22.b1b32f5a.js",
    "revision": "a78f0839b0926e9a40ec3439642d7b16"
  },
  {
    "url": "assets/js/23.6510271b.js",
    "revision": "acb7c499f3a0856ba5adb477f8abc627"
  },
  {
    "url": "assets/js/24.69f1f68c.js",
    "revision": "2ca31a039181d32b16fedbba347246a2"
  },
  {
    "url": "assets/js/25.1c77ee76.js",
    "revision": "69fff1baed022adc8b7726ce6e4a8e6d"
  },
  {
    "url": "assets/js/26.3e16e0bd.js",
    "revision": "713c2813560ae391ddccd56e11eaa9ab"
  },
  {
    "url": "assets/js/27.085e27d7.js",
    "revision": "b923e5fbc447168235e94b68f4887762"
  },
  {
    "url": "assets/js/28.2f832f5b.js",
    "revision": "64384f400ceb912e3220c062574b63c2"
  },
  {
    "url": "assets/js/29.6a514fc6.js",
    "revision": "a22d08fd2075e9142e57c8b9401961b2"
  },
  {
    "url": "assets/js/3.91a42bfe.js",
    "revision": "4a7642ee9b6e36966b73701aa4027643"
  },
  {
    "url": "assets/js/30.c1df25c1.js",
    "revision": "634d9d5ffb8ba9f63b40a9209907c469"
  },
  {
    "url": "assets/js/31.ca335f1b.js",
    "revision": "9ecb63f63f768bf70844f6d990eaf337"
  },
  {
    "url": "assets/js/32.e68d068f.js",
    "revision": "4244f6fad771f747f05f83f49c0ba2ef"
  },
  {
    "url": "assets/js/33.f697ba2a.js",
    "revision": "e24c7206c26a19d2b6d3d21174a38ac8"
  },
  {
    "url": "assets/js/34.8f35f61e.js",
    "revision": "5702b702f63bcd0848b23805066429ae"
  },
  {
    "url": "assets/js/35.e0c715ed.js",
    "revision": "ee177e2cb374b1f8521aeebcdd4876c5"
  },
  {
    "url": "assets/js/36.8b560491.js",
    "revision": "287e0cb7786a355f947fe27fba084a25"
  },
  {
    "url": "assets/js/37.0d15cde9.js",
    "revision": "066010add6bbda61ba05321b7b17fda9"
  },
  {
    "url": "assets/js/38.e832a940.js",
    "revision": "7cd54c241e89a77f46a2556743a5e81a"
  },
  {
    "url": "assets/js/39.55eb6e8a.js",
    "revision": "1fc6cbceaf020b6b00c4534bbdefb753"
  },
  {
    "url": "assets/js/4.975341f4.js",
    "revision": "d685c56313c03b08717f5937a6a89ac6"
  },
  {
    "url": "assets/js/40.21333e5c.js",
    "revision": "2e7fd444626c24feb6924aa9f5978bf6"
  },
  {
    "url": "assets/js/41.67e36e0c.js",
    "revision": "1b5672b457f510352ed0c70379e6c1c0"
  },
  {
    "url": "assets/js/42.cfef4345.js",
    "revision": "cea33eb39347fdcc7d9b78df633a06b6"
  },
  {
    "url": "assets/js/43.c2f8e857.js",
    "revision": "28edae176af2df23b3bbb2a3a4e23a24"
  },
  {
    "url": "assets/js/44.b3b564c2.js",
    "revision": "a8e8e96b9e105f85ebc0a29dd9f646c0"
  },
  {
    "url": "assets/js/45.adc45c25.js",
    "revision": "318d04d5e012c642264a4c379fbbaff9"
  },
  {
    "url": "assets/js/46.598c71ab.js",
    "revision": "1f3a8bca72628feb77719116dc387170"
  },
  {
    "url": "assets/js/47.6decb7eb.js",
    "revision": "ab9260e7a3832927b5b66e9a8cc6d3c5"
  },
  {
    "url": "assets/js/48.8280e988.js",
    "revision": "79768c9d455f887952673e7ee21bdbf2"
  },
  {
    "url": "assets/js/49.60bfedef.js",
    "revision": "ba7168a674f69575c99afb07eef112c6"
  },
  {
    "url": "assets/js/5.7dfe3dab.js",
    "revision": "7fdf0d6c4bf2705238ba3cbe4a369fb5"
  },
  {
    "url": "assets/js/50.0b265544.js",
    "revision": "660eb1a8570f4c2d9c417403c515d8aa"
  },
  {
    "url": "assets/js/51.0e9c75ff.js",
    "revision": "68c182e495a69c97c4109515d541868b"
  },
  {
    "url": "assets/js/52.1f765dd3.js",
    "revision": "cb080557d9621f707b8db591d75c23a9"
  },
  {
    "url": "assets/js/53.e3e6c83a.js",
    "revision": "62c4a440da9ff9e7ef638dc245217f13"
  },
  {
    "url": "assets/js/6.2a3d8441.js",
    "revision": "418f01fed6444f8fc11480552872b529"
  },
  {
    "url": "assets/js/7.ec746465.js",
    "revision": "a0b6f6d35fd185b23865c97cf494a3ee"
  },
  {
    "url": "assets/js/8.38a2c9f0.js",
    "revision": "026ad58c6c9c0a6fb7c59863906e3241"
  },
  {
    "url": "assets/js/9.524b698e.js",
    "revision": "96a9c18d52a2d728185c97634481df2f"
  },
  {
    "url": "assets/js/app.fc57b96e.js",
    "revision": "a70ad3a1d15a74dc664e040639a6af20"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "b2f4c90dcc82263161bb8b884d0d5182"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "57420c15f255758f1ec407d2b5798ca3"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "378ee160f4f9a82c82105738fd947c04"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "e6ae9f1a83822770757917997bc51d5f"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "98e5440842da4b05afbd145a043652ba"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "434f75df267d14cee308be6f7429d369"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "d0c43cbbadce71efd42ddefcc9ca82bd"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "e43356daa8c16aab4242b50097a12eec"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "afd5e46d16794757c8db6e09575df3d6"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "e060c1a8cdaa3008d974f1ffcf3150cf"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "d425a152c10ab6c7d3e3b20f27fd6e9a"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "e6253d33289fdb0b9d936061313a3202"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "4d2b0199b1bc06856a42fb2e57650f3a"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "bfa238f16dc8c7a8ed4896ab30ec5a2d"
  },
  {
    "url": "base/practice/1.mysql.html",
    "revision": "b8248b330ea4b04bbb4e5cb9387131f6"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "72e4ece4a815bff2882f5724befbfc42"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "68d28103ce506bc27371b49cbc29671c"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "14af40d3e392d54ee26748305ac9f35a"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "822659b13fe80ac458abb79c2b3ffcf1"
  },
  {
    "url": "base/practice/test.html",
    "revision": "4696c1d2836d77e70767fd94a892156f"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "d47e9b6055758c01a531d2010e1b4d8f"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "ef2d91659126fcbe8971035a466d13dc"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "c97467ad10a67c7258a9d6a428669c9e"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "a9c03a7d18ae7a18f5831c36c4d127a6"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "bc36367a660c14027727d45f819444d7"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "17d0b06bc4fe1953670d00a6c95a28e4"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "d3e1818fa4fb7e300cb16f070c3d6b6e"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "14a7defd0a58c3a95d020a4fe5ebf456"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "b3ddf39892dafb58b153320470952868"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "3be72beca94dbd09a277994fe06f7f91"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "ba271c1e0369d45bb227659432193ba7"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "86ed699b0530cd093a765ed60e49a2fb"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "8f6e25e4eb4b807253da9c87bc1a1dd0"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "741cd34cff4ac4af0f338f8c51f6bad2"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "3cae8aa572388c447ffd0679cab57c00"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "f665fdd04f582c3ea283ebe8a9de6416"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "5705b6f5ac0192705d49df0f856c24f0"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "7e5f0977227c4aa442f5889af6daee0a"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "4d42333a87e146db138acf9eab2362e2"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "4d465a0003a854fe9ea585edbc7a5bd3"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "9794d14fa121dcb410569c72370e3f96"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "0713174b749e0b0e2bd08eb44b3474f4"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "011ace211f0105c0f6d4e6cb75e5f5d9"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "a6ddb14f1fd295bc8020a9e340f716f8"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "7e1477d284df64f62bad8c22f47696d2"
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
