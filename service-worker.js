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
    "revision": "caf488fc1afada57dd857851049caa7c"
  },
  {
    "url": "assets/css/0.styles.167429db.css",
    "revision": "d1ec60728314e093648e4935f7bab19a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9a8d76d4.js",
    "revision": "51cd68f0174bbc7a7d6b00d23a72716d"
  },
  {
    "url": "assets/js/11.41cc5443.js",
    "revision": "a5bc33525215f234473d87e2c6a05442"
  },
  {
    "url": "assets/js/12.98092ab3.js",
    "revision": "a1e0b22faf17665cb5062b9156f26f66"
  },
  {
    "url": "assets/js/13.9e59358c.js",
    "revision": "6db41f714e365ac9639e30683c4208f1"
  },
  {
    "url": "assets/js/14.f772891f.js",
    "revision": "d2f241b3708561e7186184cbdc5ef897"
  },
  {
    "url": "assets/js/15.c8b2487e.js",
    "revision": "89a18a2157deddfd69b2e45e46bca671"
  },
  {
    "url": "assets/js/16.7e893bb7.js",
    "revision": "6f67ab4533d20641ecf6843cd73d9b04"
  },
  {
    "url": "assets/js/17.68b9e69e.js",
    "revision": "ea2e1dbee46f87fd76bf594181c48fe2"
  },
  {
    "url": "assets/js/18.4396c166.js",
    "revision": "defa297e6ca058dedffc3511183c13ca"
  },
  {
    "url": "assets/js/19.696541cc.js",
    "revision": "1b9e8ad35c8253e56bc5db13eb8530d5"
  },
  {
    "url": "assets/js/2.d11cc6e9.js",
    "revision": "92430b2dc28725f2afd748ae895121c1"
  },
  {
    "url": "assets/js/20.d459ccd1.js",
    "revision": "19548da70290c2b3ba3c788c1360cdc4"
  },
  {
    "url": "assets/js/21.c6dbfcef.js",
    "revision": "e2dc6f2458138ac5e160c10ee3e3af3a"
  },
  {
    "url": "assets/js/22.33970fe2.js",
    "revision": "a78f0839b0926e9a40ec3439642d7b16"
  },
  {
    "url": "assets/js/23.f98358da.js",
    "revision": "acb7c499f3a0856ba5adb477f8abc627"
  },
  {
    "url": "assets/js/24.04888426.js",
    "revision": "2ca31a039181d32b16fedbba347246a2"
  },
  {
    "url": "assets/js/25.35b33cb4.js",
    "revision": "8e7890337a8cdcc76f6e52189f895367"
  },
  {
    "url": "assets/js/26.69af7563.js",
    "revision": "713c2813560ae391ddccd56e11eaa9ab"
  },
  {
    "url": "assets/js/27.79d2926c.js",
    "revision": "b923e5fbc447168235e94b68f4887762"
  },
  {
    "url": "assets/js/28.11bab7b2.js",
    "revision": "64384f400ceb912e3220c062574b63c2"
  },
  {
    "url": "assets/js/29.0321283f.js",
    "revision": "a22d08fd2075e9142e57c8b9401961b2"
  },
  {
    "url": "assets/js/3.89b3869f.js",
    "revision": "dbbb4835825b81b2b45dba9f58d47317"
  },
  {
    "url": "assets/js/30.16760cd9.js",
    "revision": "634d9d5ffb8ba9f63b40a9209907c469"
  },
  {
    "url": "assets/js/31.a5491c81.js",
    "revision": "9ecb63f63f768bf70844f6d990eaf337"
  },
  {
    "url": "assets/js/32.454e77e3.js",
    "revision": "4244f6fad771f747f05f83f49c0ba2ef"
  },
  {
    "url": "assets/js/33.2c649438.js",
    "revision": "e24c7206c26a19d2b6d3d21174a38ac8"
  },
  {
    "url": "assets/js/34.0f6017d6.js",
    "revision": "5702b702f63bcd0848b23805066429ae"
  },
  {
    "url": "assets/js/35.29455e52.js",
    "revision": "ee177e2cb374b1f8521aeebcdd4876c5"
  },
  {
    "url": "assets/js/36.22073b04.js",
    "revision": "287e0cb7786a355f947fe27fba084a25"
  },
  {
    "url": "assets/js/37.292e0c3d.js",
    "revision": "066010add6bbda61ba05321b7b17fda9"
  },
  {
    "url": "assets/js/38.b56af6a7.js",
    "revision": "7cd54c241e89a77f46a2556743a5e81a"
  },
  {
    "url": "assets/js/39.e813b6f8.js",
    "revision": "1fc6cbceaf020b6b00c4534bbdefb753"
  },
  {
    "url": "assets/js/4.76a947f2.js",
    "revision": "d685c56313c03b08717f5937a6a89ac6"
  },
  {
    "url": "assets/js/40.4f411e6a.js",
    "revision": "2e7fd444626c24feb6924aa9f5978bf6"
  },
  {
    "url": "assets/js/41.abe62eab.js",
    "revision": "1b5672b457f510352ed0c70379e6c1c0"
  },
  {
    "url": "assets/js/42.5fb6c929.js",
    "revision": "cea33eb39347fdcc7d9b78df633a06b6"
  },
  {
    "url": "assets/js/43.f4c4398a.js",
    "revision": "28edae176af2df23b3bbb2a3a4e23a24"
  },
  {
    "url": "assets/js/44.4c732569.js",
    "revision": "a8e8e96b9e105f85ebc0a29dd9f646c0"
  },
  {
    "url": "assets/js/45.e597f998.js",
    "revision": "318d04d5e012c642264a4c379fbbaff9"
  },
  {
    "url": "assets/js/46.a60c2523.js",
    "revision": "1f3a8bca72628feb77719116dc387170"
  },
  {
    "url": "assets/js/47.073a0f78.js",
    "revision": "ab9260e7a3832927b5b66e9a8cc6d3c5"
  },
  {
    "url": "assets/js/48.349f88a5.js",
    "revision": "79768c9d455f887952673e7ee21bdbf2"
  },
  {
    "url": "assets/js/49.f102d0b3.js",
    "revision": "ba7168a674f69575c99afb07eef112c6"
  },
  {
    "url": "assets/js/5.75511cf3.js",
    "revision": "7fdf0d6c4bf2705238ba3cbe4a369fb5"
  },
  {
    "url": "assets/js/50.f22812f3.js",
    "revision": "660eb1a8570f4c2d9c417403c515d8aa"
  },
  {
    "url": "assets/js/51.e3de8960.js",
    "revision": "68c182e495a69c97c4109515d541868b"
  },
  {
    "url": "assets/js/52.d443367c.js",
    "revision": "cb080557d9621f707b8db591d75c23a9"
  },
  {
    "url": "assets/js/53.f33478fb.js",
    "revision": "62c4a440da9ff9e7ef638dc245217f13"
  },
  {
    "url": "assets/js/6.ffb4790f.js",
    "revision": "5fb1b48acdd2c7f0f51dd1b72dc3e990"
  },
  {
    "url": "assets/js/7.2806174f.js",
    "revision": "130d0893772c4e5e775b01388f7e8aaa"
  },
  {
    "url": "assets/js/8.71de0676.js",
    "revision": "026ad58c6c9c0a6fb7c59863906e3241"
  },
  {
    "url": "assets/js/9.e96832f0.js",
    "revision": "96a9c18d52a2d728185c97634481df2f"
  },
  {
    "url": "assets/js/app.1ba1e4b6.js",
    "revision": "ac7eaa295593887af878088edd5d631a"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "8b296cd8e79f0a312b2ec06278586d1a"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "65297ed678dcdcbd96ae86bbcebcb382"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "a72312a82a5a79de5424828a79ddcff4"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "2a03cf88429e552329df028b4d7516de"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "c50c7ccfa9e822274f358c35a3f6e4ad"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "30b730aa67a9c52b5ed1beb28d208c18"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "46ce6e42e5968b072d8739d2ac479340"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "459a4e58194a3c4c43db0e33081668d7"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "9b1515813e821da1bfdb301b627d5a52"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "4cb9392c42a6319d03008cc2279a49dc"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "7e10150b363d97dc392572c94989e9af"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "ce9a2ef3c65127845acc67907550e996"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "25820f4e5be6bf35905d196040bff0c4"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "7fce864ba3c76af97e45c8762b1cedb2"
  },
  {
    "url": "base/practice/1.mysql.html",
    "revision": "28eb1c9c7dfa1a290ae51e6d4593df40"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "e8d9cc7981d859caf398640163d28165"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "fa53ff664717503dff51112c8fa7be6d"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "e5777597f1ccd60a8808f56212fd26db"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "c81960c1d3f637fa782afda2074037a0"
  },
  {
    "url": "base/practice/test.html",
    "revision": "a0a5ac0b89f6d6b53b1a7ccbecbf8639"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "8dcb8681c91732edb122ab8fe94c3181"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "7693e25e896b0cb9fc2ba7310bcba17a"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "d766dc85904aca00fa1936f78e59becd"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "2ebbc1de3089249a81998dc5a9e92475"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "dc9c8e9fda4a8f0e4400fcc48355e3a9"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "9cfad4476a50ddf77cb57b37e069c175"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "56962a7e65e1f470229a68fb9ec76bb8"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "cde63adc38245955ccc9618b72a4f1fd"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "edfc48ab65228639ec9c08406b25750c"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "f6176b0cf417d08d5ffe9e4804f7b627"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "c084aa672a09883d1d35db1360c4eddb"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "790307afe791d0649f6b60878d390f7e"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "179fa55649e8ec06c64faa275b6b5923"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "03940443dac6cf94c3b0d088b43f6cdb"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "16cdcc17915b5af4635ab5297f9aa029"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "3393748d563b89ca1d003fe34de7dee8"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "97ef25a1641424d956b2ea80088dd4fd"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "77f1323cdffc867f75ac9c2643a7e309"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "a2a8f2b3ad44612c97382b8b2dd6fe72"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "3a80add5f87125d2c13e3d6ed20cb1e2"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "52e3518a586fcdbdd4ca832ee6d3be9b"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "0525fa34bb0475c745bbaa15e225071a"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "6abce2b86ed6308140fd5564c3485e34"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "1fea85f7b14147ed864bd75a06db8b13"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "007a232f2113efa041c19a6713d5c2e1"
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
