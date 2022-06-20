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
    "revision": "90f86864942be4c8044373438ed1aecd"
  },
  {
    "url": "assets/css/0.styles.a47aeccb.css",
    "revision": "a3fe5307e84bff1ede2637929009630d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.744e1ed2.js",
    "revision": "9c43974d1ccbe3da1e5dc11193e6d0d9"
  },
  {
    "url": "assets/js/11.3dc28e21.js",
    "revision": "62ba4f6c9604b5f6984bd88631726b64"
  },
  {
    "url": "assets/js/12.cd3d0b26.js",
    "revision": "c9e2b4f3204b813c1673910132e2420a"
  },
  {
    "url": "assets/js/13.2beb298e.js",
    "revision": "d489e29ac0bfac504aa88b27af5c4fb9"
  },
  {
    "url": "assets/js/14.b2daf5f7.js",
    "revision": "7519f14788a15f7d23beb917486c47d8"
  },
  {
    "url": "assets/js/15.36e59e0b.js",
    "revision": "a01ededb0dac815b7ec32248abef3a1a"
  },
  {
    "url": "assets/js/16.2e247698.js",
    "revision": "f7160acb4cdd1bdb9f1ed7058d53a79b"
  },
  {
    "url": "assets/js/17.5333c4df.js",
    "revision": "eb128a6c4abf34a0523fbbe733ec0dc5"
  },
  {
    "url": "assets/js/18.0a43c87e.js",
    "revision": "aec546c26f960b4cba44986ad8e60b25"
  },
  {
    "url": "assets/js/19.77ec4eb1.js",
    "revision": "0e1fd1dee378b5c423b2a4a72f896854"
  },
  {
    "url": "assets/js/2.ae55f693.js",
    "revision": "35b2051048fa77600d49d6dad1160397"
  },
  {
    "url": "assets/js/20.eabcfcd8.js",
    "revision": "17036107590cc2d84d7c752793703d06"
  },
  {
    "url": "assets/js/21.bc918a1d.js",
    "revision": "ac7da2f80c4cd5146b9fb3210cff7dac"
  },
  {
    "url": "assets/js/22.20a42129.js",
    "revision": "501aa0d62b0e6a5b2e90d05952b0fc00"
  },
  {
    "url": "assets/js/23.d612c965.js",
    "revision": "f0ac4ee9e6f0577c6ce205f074cb2501"
  },
  {
    "url": "assets/js/24.d9a3469f.js",
    "revision": "4d71f779e610227dccdebc9a08bc65c9"
  },
  {
    "url": "assets/js/25.9c448fcf.js",
    "revision": "bccf1f957b03c1e2250b4adc7e849952"
  },
  {
    "url": "assets/js/26.1401117e.js",
    "revision": "c0eb23cb5ec69372879e1de1a60e7a95"
  },
  {
    "url": "assets/js/27.65778e88.js",
    "revision": "21f7fa1f8062daf3432145a9d6a339aa"
  },
  {
    "url": "assets/js/28.1657fb4a.js",
    "revision": "f09eed52d4104a2f6a2f15977f789b0f"
  },
  {
    "url": "assets/js/29.7f4562cc.js",
    "revision": "bb56d878fd560d03edcda7927b4dcce0"
  },
  {
    "url": "assets/js/3.79fbd9c0.js",
    "revision": "3cfcb6b7ee5f6dec71dfbb7bf5a14f38"
  },
  {
    "url": "assets/js/30.eedbe8a3.js",
    "revision": "ca795bf7eea139689e98db319fd2136e"
  },
  {
    "url": "assets/js/31.1d089115.js",
    "revision": "8df569dfb9954b465ab6a73d930660f2"
  },
  {
    "url": "assets/js/32.638ccc48.js",
    "revision": "bb434ba9a806c32cb7f239307d182c4f"
  },
  {
    "url": "assets/js/33.70b9699d.js",
    "revision": "f322f794640be3b8d954d2297adf47b9"
  },
  {
    "url": "assets/js/34.0db96af4.js",
    "revision": "0985c383c7fb54c4f520c0d6a76f867a"
  },
  {
    "url": "assets/js/35.d8449e03.js",
    "revision": "ae55a61b75b10adda288ff268d3805e0"
  },
  {
    "url": "assets/js/36.25248174.js",
    "revision": "d5673c5896be5bf1a8953a9288308a0b"
  },
  {
    "url": "assets/js/37.ce85c191.js",
    "revision": "436da47c7d28abf652d76daa8a623059"
  },
  {
    "url": "assets/js/38.c584855f.js",
    "revision": "3259051196af397a4e20213ca42ca73f"
  },
  {
    "url": "assets/js/39.caca2055.js",
    "revision": "cfef8892f08dedae69c94f30f0b5944f"
  },
  {
    "url": "assets/js/4.20cefc90.js",
    "revision": "4c8128ecc8f958a84631438d8d8a44ad"
  },
  {
    "url": "assets/js/40.c5401d7a.js",
    "revision": "ab7eaa81f741d0c0c585b0d59f91c71f"
  },
  {
    "url": "assets/js/41.a824d7e9.js",
    "revision": "beb9795e13808dfcbccbc61ca50947a2"
  },
  {
    "url": "assets/js/42.6a3cfc7a.js",
    "revision": "59a969680e4ee7c0acd2b71978787eb9"
  },
  {
    "url": "assets/js/43.a7f00b2c.js",
    "revision": "01c3f679d278be315a4226cecdd0ce98"
  },
  {
    "url": "assets/js/44.13a41528.js",
    "revision": "cba9cec0711e33e42ed456373201eef9"
  },
  {
    "url": "assets/js/45.534893f5.js",
    "revision": "edcc520a1e2c2bffbd387e3d6a2a374c"
  },
  {
    "url": "assets/js/46.3533c41d.js",
    "revision": "1b64f98f45a6a6c4453b1621a8cb00b3"
  },
  {
    "url": "assets/js/47.0c1652dc.js",
    "revision": "3b2193ab4ad52af6629c537d7f5f77e6"
  },
  {
    "url": "assets/js/48.3f67b5d7.js",
    "revision": "a8f25b8a1af6015718f941383790070f"
  },
  {
    "url": "assets/js/49.db501d71.js",
    "revision": "58e2060903d73af042c6d4e021176523"
  },
  {
    "url": "assets/js/5.5826c0d4.js",
    "revision": "3d84bc020a9360794fccfa7e6bb78656"
  },
  {
    "url": "assets/js/50.718fc026.js",
    "revision": "40072dea94f31b6b1edb9bdb8136d996"
  },
  {
    "url": "assets/js/51.4f28b4e8.js",
    "revision": "72e1e9e953a0f8125d937f97b85ed065"
  },
  {
    "url": "assets/js/52.650e7902.js",
    "revision": "b1c998908299eafed731727f481c89ff"
  },
  {
    "url": "assets/js/53.e46514e0.js",
    "revision": "5557691dda6565bb2b69887d28bd755d"
  },
  {
    "url": "assets/js/6.ec12c2bd.js",
    "revision": "7b3d685f8b5da1b5250d7d79165ce352"
  },
  {
    "url": "assets/js/7.1162df76.js",
    "revision": "c7cc7f66c164d6384448c3de06b94229"
  },
  {
    "url": "assets/js/8.e0db5ef5.js",
    "revision": "b913a7fd656ed9939a90e3ac8258e97d"
  },
  {
    "url": "assets/js/9.9dea4650.js",
    "revision": "7fe56f7c6a0dc1ca145566911683d71b"
  },
  {
    "url": "assets/js/app.1648423e.js",
    "revision": "70119a1cf647a9dbd584d779ab0a214f"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "72a24084ec8ed92765f3d2bcb9f66749"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "e35586eca45fbf1ad5f38a56cb814161"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "ac9b8866b847d31a7f10bec642d5ed72"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "f0c3b3759b266e4957c91603bbc283f7"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "a34e9a91d3f9fa8b8ac446429f0a6663"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "d708846beec6f0317f391165974e342d"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "7b25db4d93f3c974d8f2e861c91041a8"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "c1e3b260cf7b571fddb70669e9424a1c"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "affd4d975cc18d6368feb8ced9ad7455"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "0da9bbe197b54caa0c464f6e5cdbcdbd"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "00410d3c743ee69dbf1a656859802078"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "5dc43051345327a82ec18a7c74515af7"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "a1fc89917815c3b1b5d53480a5298cb9"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "1214d541eb213cbaf353628024d33a4b"
  },
  {
    "url": "base/practice/1.mysql.html",
    "revision": "5d10b1268f2d37fcf6e4187481104c8b"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "93dfb5bf32c627fb8d454ee3892f4f7b"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "9dd2ab5ada89400504494d3011ad5d99"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "53b736b76a0476677f3d90dfc2cddd8e"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "984e12ce84c1450179f2d3075410df1f"
  },
  {
    "url": "base/practice/test.html",
    "revision": "e5ac80c9311cb984ccd4b10d0e22434d"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "ce1250ef17bf365c0fd73961d128ac32"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "db31b8387a2fe5aabbea1d8288d4e2fb"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "389c2071c3b1a4300f0759217dec527c"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "2ff204c29dc2b15104b73a28024f6313"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "6b10c9600e42fd474b8496e985257501"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "924defe0e0f41c00f8e67c87ce55920a"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "c249dbf536b4a5b7c2bf54744b9c3f25"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "940110a9be9f09060caf2fdd338e9d2c"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "d5be4334cba18e60a3563023a270d7ca"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "8f527f87c4538c265447d98e5a445db2"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "2728d3e494c5df86f81f1dce78226735"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "970d2098dd809e1c98639520afc10047"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "c7ab0ae51ec274005581056acb8d687c"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "23a7d4249a1a9424f4ed15d496262119"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "01a855df5849ae5a431683f97fa7e6f8"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "cc836f687c95e0a628038f158609996c"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "8a6758c83317fbea41a43b900dfc5d3e"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "3f06da151f1dbafc8191266abe2c8997"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "d82299f8261751231e9c531e830b63ed"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "8f0e2c60bd1582dc01ee6aabb6e406a7"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "697ebb0494b33a21452a085249b77c2e"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "2c973d8143e53ded57f0321f3d3262cc"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "c9d828daf4a7e304e15d1f589dc89c7b"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "3377fb24ff320e14a947b5bb3cb68bd8"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "069d29f40cd3ae10ef8b6c6e73777963"
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
