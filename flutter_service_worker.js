'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0b7e261183d74104c47460923ad4728f",
".git/config": "d4e2f87eb1e8146ef43c7c3c0a25f4b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "48144a2c46b91e034a557b3d8974e309",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "951d37c0b9f6889b006ffbc08886ec88",
".git/logs/refs/heads/master": "951d37c0b9f6889b006ffbc08886ec88",
".git/logs/refs/remotes/origin/master": "5f5c92563fb34ade92570dfaf287b6d0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/a0c208e0bc1f9c35480b3d1a0c7356a5caa55b": "34ad96e4be90462593efddd5759d5c26",
".git/objects/15/0937de0fdd1bf86ae440b2d0aa87320edfd813": "6f20c2b7149057b39926647f0767521e",
".git/objects/1d/d721cd524a10929e2c82463b7fed4ef93b2bcf": "4dbc0c7249c7303aa3f2ded012ad0b90",
".git/objects/1f/80a1d93b69903b194c254672d0ef821080f6a9": "a4defdc460d8e12f7de6f4aedf0e3e91",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/552f394bc1529f9a141494299da32d6fb84e4e": "08ac03eb9b664e5b10e1c7f42f428fdd",
".git/objects/24/1338046da5e020b872a236ab93e8d6136577c5": "a99a231f67915a9a0a824e260ff9371b",
".git/objects/24/ea1c8c6a37936a95b92d79dd9228365e337afc": "871e635e53746bab68ffaf00097ccc89",
".git/objects/2a/8ed95b3247b40b2fefc0e802d7157425a6d90b": "74f39653d090f4d9f1fea49aab1d1a26",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/59/40a08788c9e42b0979ad50f5b02050393d6468": "963bd643d0212ddb61ee1fd1eb2ee8e0",
".git/objects/5a/a07e7ebd7205030c40bd77be062965a16ef175": "ede24d51e7e885d990c0cd1cf1930844",
".git/objects/60/38579322e5d552af9fef9399e84aee25b85b22": "37c55b1e39483040dc564f403a12d39b",
".git/objects/66/b434c3ca99c8f7c5ad211f63af74e1f7293731": "f2750ddd74bad87c0bfdd3450d1a63e2",
".git/objects/67/f079ee2f83cb908f2c1ef34e15c5297705afb2": "5d4f5648a8be4f64e28ba87a3a500b17",
".git/objects/6a/996c1ed9cdbeed9207b589d2cebb410e4e4e47": "ec352781979142ca0248a055305dea3c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/07b8971e11e437b8f23848d6ae1db6484421f8": "6df331b28092e17a383bbe8168f6d6ee",
".git/objects/a3/97f1dcac7a3d279e6e02a9b8f101a4c3f5c1b5": "d7331dc0b32bf6d0679c37dcd7015cfc",
".git/objects/a6/f99ec1f3b4e5ecf3e4a37dcffb46eba5282493": "89d90baaaab341582dd30efc0280c74e",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ce/3d5e3bcf23094a02777b23412f0dbce0d4c636": "de98db6aac8c24359b6a923971b6e5d3",
".git/objects/d3/f19303f763637d18dec9182ac57300e1b89252": "0a968a8f778daefb62ad51b66de8ac72",
".git/objects/d5/220fc39480d8a6d38979c23d148c8d1fcb010a": "4fc6aca59cbf84d004174fbe9e8a0adb",
".git/objects/d6/d5e65d1115d76af802fccc029d9915cd9a2847": "c136d86bf6051abcb0b93efefbcf8a59",
".git/objects/d9/27e733df48acd3dccc939854911066eaa6fbbf": "da316e8491664972d6f6b70f23f141bc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/e9f7b7135f6bd59458bbffa610bd22d08b38fa": "531b1590239adfe5e9367216d7212a49",
".git/objects/eb/fa7453d3f71c0b20aae1db2077bbad2ef406b6": "c655782de211cd4468832b8a5172f40a",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fe/d1df35161828eb9c3f1a8ea6833c84fdfe7ada": "74589997832d1229a47932479a85b5ff",
".git/refs/heads/master": "15a6877b556be223ef00bcaebb03bee4",
".git/refs/remotes/origin/master": "15a6877b556be223ef00bcaebb03bee4",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "bbcafdc3a478425143c9acfb11b07b1b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "258d9a0780a87e0ea3ef0a8903870255",
"/": "258d9a0780a87e0ea3ef0a8903870255",
"main.dart.js": "d3d73ee934aa96949c970d9ae5e562d5",
"manifest.json": "bd76c782be6728bd58c9af05d1703f3c",
"version.json": "86576f9f7ce4207ac29791be3dc25d36"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
