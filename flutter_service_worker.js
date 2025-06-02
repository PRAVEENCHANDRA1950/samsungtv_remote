'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7838dd695e3af956e2e4081973af6e8b",
".git/config": "81501015ca11acec15bdf3a247b3c874",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c6e720d943932412d2d0030f5855e2f2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d14d2eebf66315eb603fd625b6b182be",
".git/logs/refs/heads/main": "bd4f6da0c4fe7320a5f92e7766771976",
".git/logs/refs/remotes/origin/main": "60ab1d2d3193fd837b00ad4304df7a0c",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/08/d0e85f8db5010584593ce3547346f518e9d00f": "9e3b74a3c6d5d2d6eaefa755de4bd51f",
".git/objects/0a/0b9eb2b932abd5302e04a4c918519e86d57dac": "fe9df7c07d7f6feb88afaad2986ccaf3",
".git/objects/0a/23e6579970ed05caf4dec9b846c93ad03adf96": "3dfcf9f48a8a91c8bfc12ab47b78cff3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/37/9035f7e3a1efa7c026d1c86044f8c9b4382c77": "b4f109d92dbb93ad1b448ebaa9c0288c",
".git/objects/59/c572da4c814966c45a323ad3a75b08bec727b3": "a713b160e2761b90eae07df2c9a03cbf",
".git/objects/5a/0cf3aa311d56ee46ee0ee72f3c4c66c2602fb9": "a3bb4d5fc02649139da27d54d558b6f2",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6b/e606c874aaab968ad6c6f9fa045b81e8d02475": "13095a865390448d9cbe4669ed0dff7b",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/78/59c8fff5104d065bacba8f56531b7a60c8cd02": "a7070f095a17790e4159a5f188dc51ea",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/9f7a8b4c0237a3757501c54bfee53e35674416": "f9092f6edf82702e1709a2b5ab08e3a1",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/7cca141b278d8bfca5f8f15eb7307807be486b": "23d7c7d277e8539e901e5ad9116b58e1",
".git/objects/8d/35f96fd818b38a3441939f9f972bd33e094545": "618259e7d0fe02de945c1faa9b176d8f",
".git/objects/8e/8e16963df7c404e73654e6c4b5a3b170eeb0bc": "32e46b175b37cd33ebfd2aecaef24a5d",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9b/6feeca54a47ebe7a8f1f45225b449810ac4e18": "9940b33abddd83b8dbf64a8b26a113c7",
".git/objects/9c/f5b9ebcfa24fd75ef8f6aa3e0425bdfbf8dc47": "4337089f7641f7de0e778bdecced5284",
".git/objects/a7/83e85c44e482a84e17845997780898cc72edfd": "2e0577dfc072d37afbdba8672bb8d3ef",
".git/objects/a9/98555ffeeec37fb359d1d94acb7ec7f47f8299": "de7abbf6baebdc1c90ee368dd2892014",
".git/objects/ac/c400517cfcb5d576da264a133d49bc828dd291": "9c1dfaa0972685954a96de951c24bc1a",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/952d3a5107469e798083afce31ea57f60700a3": "0ad14b0185b861e4e64811d234ec904a",
".git/objects/b8/c4e74cf152af887d41b7a00885e5c795cc8368": "d8a860d1967b2ad497bac73563df8274",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/ceab41b44f2661919fc45283be4ce712287217": "232b92908f4400ee394ea69ee949458e",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c8/c4fb4c94d9b6cd2c1e788c61326eefe7e3b2fb": "e9ce23623bc817f3911857a345d714a3",
".git/objects/cd/09787a5ae5e3bcbe29b234d75f476e8f3309fe": "1cc098a3310f8cd0cff14e2d0dc8d848",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/e1/1d6892318131e3b9004277fc5eef206254a022": "a2ea109a7f16d5be29776703121ad7a1",
".git/objects/e1/da71c56bc91c8e17015a3aad13b087e402c1e3": "49b5a2b2d48dcb5bd7cb454e9bbc6752",
".git/objects/e7/9edb5851703b001bd156a37d2be49525487008": "c030d904ba80af217005d62c1ce1c178",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/d1db39ad31f43e1f0e6160cd765cab951083e2": "c0934b30dce33a44fdb4ce489072101b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/f23079332843cdffeb813859b171be4bb50e48": "6b3b3ee7e61777c30594207be340f0a2",
".git/refs/heads/main": "38b2c0e99831c97752a5659aac950180",
".git/refs/remotes/origin/main": "38b2c0e99831c97752a5659aac950180",
"assets/AssetManifest.bin": "74a0546a3ba4fbee4a3002d479a96346",
"assets/AssetManifest.bin.json": "a6dae6491630f85daf589095df25361d",
"assets/AssetManifest.json": "1142beb922fe3c70e6718d8c4c605bd9",
"assets/FontManifest.json": "9e0649c90f16a7be3d51ab27d6089604",
"assets/fonts/MaterialIcons-Regular.otf": "65d43398a522a0bd936abee2696204f8",
"assets/NOTICES": "d21871fa80be4df07f0e7fbc200f3e8f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "4647829c7e37bb7846dc2f8a6faf3a1b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "b4499dc9f2b3f437f8b713bb42890aa9",
"favicon.png": "668e5f2cfbb97992626c82bb27f52fce",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "6ebcde2de5bbc5a76bacfc4b6f422127",
"icons/apple-touch-icon.png": "e517eeb6d7c9545e76c48362fdcfd9d9",
"icons/favicon.ico": "b4499dc9f2b3f437f8b713bb42890aa9",
"icons/Icon-192.png": "668e5f2cfbb97992626c82bb27f52fce",
"icons/Icon-512.png": "6e5a607b58758df5216e1b00c01136a2",
"icons/Icon-maskable-192.png": "3a32b37057a909d05626718404880b9c",
"icons/Icon-maskable-512.png": "2b1eca7835962fca60690548b58e3c77",
"index.html": "179919941d6d8c231348373476c70751",
"/": "179919941d6d8c231348373476c70751",
"main.dart.js": "1295d9a6c5fc2e9cbb7aca95a1788aa0",
"manifest.json": "9c54d12143bffdb74ada7da435d1ea82",
"version.json": "2900ad5545839a22813a019bb8877861"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
