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
    "revision": "8cd30526fc1b12203a907ce4e17a50b4"
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
    "url": "assets/js/25.ed99fb70.js",
    "revision": "4290add6189a001d89aaa94973fc34ac"
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
    "url": "assets/js/app.98b7dbb6.js",
    "revision": "c720b8229d4c2e7eea1e466b47c74cbc"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "bbfd0529d97ebec38efffb4c2ae2cd9a"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "338cd17301160d0efc2941d0076281ac"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "7005c6c7309d91feee2e942a75472cb6"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "b214231ef109b47e8c97dd59ffda272e"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "ccc56afbf9a5465837be6355efc56afe"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "f73d892fd03f1ff9b44a981812a878b0"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "8583f741170a5a5addac1cbdb5c085e6"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "2c3b0f9d076c365c50ae61332a65da11"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "2de237099bb8b3c04c0b525195400a19"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "0a3d73ffe358c3d20475cd7c3c70b728"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "7881f5a0d304044dd61e41f5eae402b7"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "0a6a15f0318dfa0fa0b39b08db718d42"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "7b3202f72b83f4c6d4d192ace3d3a039"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "266fcee9bd73fc739d3774bdc608c5f0"
  },
  {
    "url": "base/practice/1.mysql.html",
    "revision": "616007e978828e71ed489f437f9982fb"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "9c145f9afc2cedad4e1697840848b7a3"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "f9202622a722b1b4507d7a03b0c738fc"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "9a1dee6ecbe6e1141db6e91c63bd7f35"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "ac81fd5bcd882779e5bba37824a223b0"
  },
  {
    "url": "base/practice/test.html",
    "revision": "82208fed5ddb802fa83544904810edcf"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "d68ea24aec1a328e4a9be57fc75471f1"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "784f58d95e431d1afb9ffd4afb5c707c"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "ec2ee4864946bf3b031dc263f2acf885"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "1c6384e1f7ff50ae8c2f0e51ca4f8a07"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "ed6ccde6ddc1d4769d1e353dde62aea1"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "320f4c6417f36b8c1fe3539237fd6723"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "b829b18a9964ac6526f45fdeef81c04b"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "b84763e38ee6308a14a624015b122e42"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "4140d707aa9dec2ff519bfc9ff5566f0"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "50de5b62905275e7190aee5c9bceae07"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "21ac2233214ba0c85782f8efc08a2722"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "da648eaafab8a9203017264d260f73d2"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "f3e03d4a2e9a1a61bd09fb584b19c66c"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "23ccb914dd2e3e22cdb512bab7e9263c"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "7662571a014a466f81370e68b4598bbb"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "4070e81ed2520899f18350daf4f47f18"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "cbe2fc9f7e3852f1b45d06aee311c9ed"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "410460c501d16e910b74bcab2284039d"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "9f2d21ba90aabbd673b9e451225eb489"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "12d08248d7ad2b193884840aca1eb60a"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "74a5e542ee0bd256966450c32cda1bb0"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "c937241adda973371641a983bf27c675"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "9de42353f16555d58fc7c75b53ecf7b6"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "df1d02fee57ace11e2e91e1934421e97"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "18dde043cf838f87a314e1f14204e9e9"
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
