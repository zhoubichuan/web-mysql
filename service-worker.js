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
    "revision": "771b384384dbe82b00979c98b64446cf"
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
    "url": "assets/js/app.965a28df.js",
    "revision": "a5b74173b977849db35184e9900bb08c"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "118dd831999c1d2377fc3a47215f3ffa"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "0c26acdfd345e881dec10ce026fac48b"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "281548cb68fed1bcb7093c142c9563f6"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "a4f5303046d177477e48e3a848bb1ec2"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "ce34add4af8d1d20261f900f8e8c2f38"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "d82502c8200356be7a7900ad40504268"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "b53dad2753e739e88bc7ed495a435949"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "d148959b1ddf68e681a216f17343ca2d"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "e4ad7f7d46b7d5b1ddaf9e24583db1ca"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "f57699e852275daa828bfd5a7258cc21"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "810ca0a8f7a8f2d691e11fd000f4d763"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "ec6b6772c0c5477b91e5104fbfe06242"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "71863b93c239e804b96e1f98a1e4593f"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "80243566065ea7beabf91c8d4c77834d"
  },
  {
    "url": "base/practice/1.mysql.html",
    "revision": "7a1af299d725d5360f00e3ac5845beab"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "c4fe456826e7e111b701eacfbe0f1eeb"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "f96835fdb06e80a6505a6aa1b32d543a"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "31f53d82021031acb1b84885caf9d7ba"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "37ebfdcb22f8c1b50eb450878ac8e928"
  },
  {
    "url": "base/practice/test.html",
    "revision": "d33a929b1bd4d33a0c2b25bc6d0272a5"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "bb9478877d2c6b9506835e2a9a5c8abd"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "8c222fe1f7ab4a447cfbfe2e4f80d85a"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "85a897d2b860e3eff8d331810cb6ac39"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "616e505f29e60c37bb24ddf6ac02ae51"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "3fcbee379b6cb41635c857f9009dbda6"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "ea3f522ddde30212a34604a7c1701eb0"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "b7c1446d7a7a8b7bfb6d5c833eafd929"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "b820a8099acc6484ce75059004ce148e"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "62a57f5a15a01797e5327116d0f0872e"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "2c72a0277ea04032d66db790751cb884"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "ed55d6db4286fe20d18a85e6848248ab"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "17c118b78de928f48cf8862deedea131"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "8828979c2eac7bc187cca1c11b2fb4b1"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "b1088cd710fe1f5e17bfbb4c9f7e66f1"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "74396c81556e291610534cea9e960ba8"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "c50aa358c92948fc34cadb5bd38362cf"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "f19dea57cccb826fc788b968e3f4192b"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "48bee860de0e891f7b0209fa0090da2d"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "b6b7fa136677eb09eb432590d2aff5b4"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "32cf18f60e04c02bb3e1582b5e81a672"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "8439df8426877995a2c8a398b00080f1"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "cf5ac928778b2c5f0425839923403fa9"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "f417e40bcc64d54d73de9f3e878811eb"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "9ff81f17eb6f76dc91a895462618a68e"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "ad48550feb7c494ba58bdcb4a245e212"
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
