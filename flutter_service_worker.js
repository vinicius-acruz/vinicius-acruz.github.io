'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "19d57a8c3bc70c69f0d9f966afd2c94b",
"index.html": "9aab8271a95ff0aad532ce021ac1dd62",
"/": "9aab8271a95ff0aad532ce021ac1dd62",
"main.dart.js": "6d2bf3d1822b63a4e5fa9e6615453780",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "a2678989079d7fb5a14d03744c227966",
"icons/Icon-192.png": "608bb5ef4e0ab31c1a0efa986aceadb1",
"icons/Icon-maskable-192.png": "608bb5ef4e0ab31c1a0efa986aceadb1",
"icons/Icon-maskable-512.png": "d939b2d968a6e057c0346ef34a115c08",
"icons/Icon-512.png": "d939b2d968a6e057c0346ef34a115c08",
"manifest.json": "f4eaeeeabe842ae198d702553def1a2c",
"assets/AssetManifest.json": "621a410e12a5539b5c2435e8d6bf6cac",
"assets/NOTICES": "1b6a117e3e12b3659fd1fccd1c5ef707",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "09f5f30a0c3e1671987c883cba229040",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "00bb2d611d13a4f3e0f29883d9bcb3e7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "22a762f3b6332b1e6653bd94c6610a69",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "7adb4c217c6efab6beb1240999f2ae89",
"assets/fonts/MaterialIcons-Regular.otf": "42f2067870dd9338deb3fca56463b1c1",
"assets/assets/images/vini.png": "9a742cc3264c3fbf46e11bb28319c9d9",
"assets/assets/images/listraswide.png": "db49d80e4d555e3c887870a8f40e3bce",
"assets/assets/images/projects/project1/caption_fetcher_image.png": "50d6139859e90c13ffa00c905cd33b78",
"assets/assets/images/projects/project1/caption_fetcher_frame.gif": "3fcda39163b8f8e53a14ac25605d464b",
"assets/assets/images/projects/project6/bakery_website_frame.gif": "36ebb3e3082dd2b4a7b3b475f3c1db4a",
"assets/assets/images/projects/project3/2do_frame.gif": "35d87e87d7100205630423bcd74fc506",
"assets/assets/images/projects/project3/2do_image.png": "f4370667928e23ea959e98362d1a7856",
"assets/assets/images/projects/project4/clima_frame.gif": "fc9ec53095a8019c935af22388b287b8",
"assets/assets/images/projects/project4/clima_image.png": "ba839881e4bb73072453c6eb9dd27ca6",
"assets/assets/images/projects/project5/pixel_adventure_frame.gif": "18a2fc0242d74df6d85a26949fda1309",
"assets/assets/images/projects/project5/pixel_adventure_image.png": "1508753cc71694cc0dba00b688b4ecef",
"assets/assets/images/projects/project2/chat_me_frame.gif": "633ea2978ab0e441952c9e4758181196",
"assets/assets/images/projects/project2/chat_me_image.png": "7c9adcf97e0093d2d430bfbf19a33008",
"assets/assets/images/flutter_seal.png": "1dda7efdf562263a6cdc75aa7f330ba3",
"assets/assets/images/fundo1.png": "3a71a84dc56a9c77053d6a179fed4346",
"assets/assets/images/listras_mobile.png": "3cea460293127e82926a1b70e0454973",
"assets/assets/images/icons/flutter_apis_icon.png": "ee618c1799c8dc8667506e28f9ec165b",
"assets/assets/images/icons/version_control_icon.png": "3a33b4334891eb0449cd325ba9659c11",
"assets/assets/images/icons/openai_icon.png": "08bb7aec46aebc7b0b3f16cccf8b63a6",
"assets/assets/images/icons/firebase_icon.png": "915ed5d16d7ef1cc9e36bc91680be6bf",
"assets/assets/images/icons/bloc_icon.png": "9bae8bb97939e325298f3d39a8336b38",
"assets/assets/images/icons/flutter_flame_icon.png": "ec3e8c1f2f8782c770aed34c625d7186",
"assets/assets/images/icons/ux_ui_icon.png": "1bff649afeb4b2650e1a0895908b7870",
"assets/assets/images/icons/flutter_icon.png": "fbb6292f79beadd77ae2fe8232420074",
"assets/assets/images/icons/html_icon.png": "b1c0c8709fd7460fbfacc048487f5a59",
"assets/assets/images/icons/project_icon.png": "772b31297079b64fc9ac4ddb2d2876e5",
"assets/assets/images/loading_animation.json": "0f7fc65292bfa88f3b9ebc568901f825",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
