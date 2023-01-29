'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "93f36c3751ee3f609beda61cb5641710",
"splash/img/light-2x.png": "4766bb2f71ad704eee71e2dd97f89fc4",
"splash/img/dark-4x.png": "faddaca4befd92fbb851a85fae38163c",
"splash/img/light-3x.png": "e504a762c0ec55a5fb5e995859d25165",
"splash/img/dark-3x.png": "e504a762c0ec55a5fb5e995859d25165",
"splash/img/light-4x.png": "faddaca4befd92fbb851a85fae38163c",
"splash/img/dark-2x.png": "4766bb2f71ad704eee71e2dd97f89fc4",
"splash/img/dark-1x.png": "8082b2e7643375e0194db4031cbb7056",
"splash/img/light-1x.png": "8082b2e7643375e0194db4031cbb7056",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "fa7b5e5be4245f87a471cbfed441b461",
"index.html": "ea01be52475d1f77256554db0746f9dd",
"/": "ea01be52475d1f77256554db0746f9dd",
"main.dart.js": "855383cddfd12f18d4535a40aaeba7dd",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "b2a0ab07974a3398bf5f6119bfba8b50",
"icons/Icon-192.png": "44f52fa806b8901e7e2c5d04a068fda8",
"icons/Icon-512.png": "b2a0ab07974a3398bf5f6119bfba8b50",
"manifest.json": "7772f1db39348196899f0acf1c8c4219",
"assets/AssetManifest.json": "a2b94f5339ce2c787a887c7c0f36a96d",
"assets/NOTICES": "1bae8496b47879cf22ead8505aa3a213",
"assets/FontManifest.json": "83c3d7625dc91665dfaaf2a5682a21da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/shaders/ink_sparkle.frag": "20ca6baeeed7714501793e61a766ca43",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/arrowhead-up.png": "6debbfa27236d71812fcd3cbcbced73a",
"assets/assets/images/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/images/desktop.png": "d4794e3ddcb4fce9a2c12246e3b4d8a7",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/persona1.png": "cd843ab057f7130a7daedb4cb2f1f6d6",
"assets/assets/images/yui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/images/persona2.png": "20f8c44072dfd26e2e782c23b92d9a00",
"assets/assets/images/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/images/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/assets/images/persona.png": "7306d4d55fa4efee81c40c5db9cf16de",
"assets/assets/images/google-play.png": "fb3f50af5e98fa60446b185970137a12",
"assets/assets/images/graphic.png": "d7aaa5a5615483382572b5d5c24c5e5b",
"assets/assets/images/github.png": "3d4c7482f267f5accbb7461766f3f790",
"assets/assets/images/whats_app.png": "a59e768eebc730446e35f676487b8815",
"assets/assets/images/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/images/Hover_flip.png": "57d317fc22080b316188ebe73407065b",
"assets/assets/images/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/images/sign.png": "65512d5220d17943bed196dc7087159f",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/images/work_3.png": "035401cff7e0fc62875bb280c53523c5",
"assets/assets/images/Intreaction_design.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/assets/images/work_2.png": "e1d3843d3e6d8752cfe40f655caab6d5",
"assets/assets/images/omar_obed.png": "59ee84415997f09564f520567f24dada",
"assets/assets/images/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/images/safari_retreats_image.png": "ff051e85041efa8bc276060357d07572",
"assets/assets/images/twitter.png": "3a012c94a4478ff39f043cb6fcac7d0a",
"assets/assets/images/sign_white.png": "0496f316c753d1d52a7081c735289b82",
"assets/assets/images/qrcode_app_image.jpg": "b5a50b02b48902aca9740cddce836c0c",
"assets/assets/images/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/images/work_4.png": "74e5fc2d50c04cdd638cfa878bd2ef66",
"assets/assets/images/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/images/people2.png": "f6561cf54d239a098a72225cd21bdc80",
"assets/assets/images/landing_image2.jpg": "74f8773c42954505c79f53d948d3a222",
"assets/assets/images/landing_image3.jpg": "595ce968e815d9ed1bb9f4dba1c1c7d0",
"assets/assets/images/ui.png": "6ca82a6c70f80fd75c56b1fe66caa180",
"assets/assets/images/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/images/landing_image1.jpg": "7c3edd3139e99d12f477fa1d9f63318e",
"assets/assets/images/night.png": "06e78d9b2daa2690a909d7c5631fe0d9",
"assets/assets/images/landing_image4.jpg": "7d5b39f75a0e395be8c9cfaece9a09f2",
"assets/assets/images/lamp.png": "ccda0abd490e08f4c880344ec8e80430",
"assets/assets/images/404err.svg": "c3f209aded0706c16530acd2694646bd",
"assets/assets/images/people.jpg": "fe4c16c691d1ee6de32e918a5f4d2e00",
"assets/assets/projects/anowmatic/3.webp": "45026a1b0869da37818ef2fc0a29e6bd",
"assets/assets/projects/anowmatic/2.webp": "66e208fb909d73cee3a76a166546bc0e",
"assets/assets/projects/anowmatic/1.webp": "6b67d73a9cb28b2a8068765fa07e3e09",
"assets/assets/projects/geton/4.webp": "051c74150f436468566910958369a7f7",
"assets/assets/projects/geton/3.webp": "3601def00d8f5b1a19d6893b284d0ad5",
"assets/assets/projects/geton/2.webp": "a0ccd2f7b695fea812cbd3f0e3682caf",
"assets/assets/projects/geton/1.webp": "542559a6e7356a03b38cd962b6768a25",
"assets/assets/projects/studio/4.webp": "fd248491a81405bd79fd108e57eb7bd5",
"assets/assets/projects/studio/3.webp": "12e6472a3aca17148ffe86fca653fbda",
"assets/assets/projects/studio/2.webp": "adf6f76df9aa6cc11063781d1460faf4",
"assets/assets/projects/studio/1.webp": "e91196684d64c1bdca0940f6f93e6f39",
"assets/assets/projects/ticketbox/4.webp": "0aded8d0c9c3d10634016ba79516f967",
"assets/assets/projects/ticketbox/3.webp": "ef11b71f546622269702c86ee676f244",
"assets/assets/projects/ticketbox/2.webp": "6f841c6a42eb3e981e332d5eaf73dd4a",
"assets/assets/projects/ticketbox/1.webp": "27bd68ca5b2bd71dc43122383cc91e27",
"assets/assets/projects/wego/4.webp": "b72708b04b2258e87502525838987fe6",
"assets/assets/projects/wego/3.webp": "8a4160f189fb7af705f399f940db0d1b",
"assets/assets/projects/wego/2.webp": "fd10fb8517dd899caf5608974c3d155b",
"assets/assets/projects/wego/1.webp": "c3c2c28cf09e8b3f3a964e66b3cee4d1",
"assets/assets/projects/allaya/4.webp": "ee15f7b96e7b20f3ce6152116307d7ed",
"assets/assets/projects/allaya/3.webp": "d7d9bcfc5944b1e0cfbd59fd84607ea6",
"assets/assets/projects/allaya/2.webp": "3e446d6b1c8ff6bb0f33b54c23d2868b",
"assets/assets/projects/allaya/1.webp": "643846276d0045fb2b71bb574947a5d4",
"assets/assets/projects/eql/5.webp": "4ad4378735122dedb4db7826bbf26b55",
"assets/assets/projects/eql/4.webp": "4ed9ca51474367b311d0829f04af51c2",
"assets/assets/projects/eql/3.webp": "5973e6561cbfa8e99edf1a770b26e837",
"assets/assets/projects/eql/2.webp": "4cccdfcd4666b751fcf54c61934c3495",
"assets/assets/projects/eql/1.webp": "d65a16b935860fad658b0f723e2e8a73",
"assets/assets/projects/eql/7.webp": "a9569d632d0e3156d0db6e91c065fdb0",
"assets/assets/projects/eql/6.webp": "5dc584085fc1246ac6272591f52aa264",
"assets/assets/projects/costech/4.webp": "1a962da63327fa354d002d545f79e2a8",
"assets/assets/projects/costech/3.webp": "a56eeebcdc8fd1b806c90469a5254489",
"assets/assets/projects/costech/2.webp": "7aa3fe475eb2c4c5c2d4e9a4bb67c65e",
"assets/assets/projects/costech/1.webp": "80fe334939cf266b43eb8a429497934f",
"assets/assets/projects/showshappening/4.webp": "269acd76a71cb5615158c6c0ad8db4e6",
"assets/assets/projects/showshappening/3.webp": "614978c6a66b796b58a240e8f35ddafe",
"assets/assets/projects/showshappening/2.webp": "a0f67add3ee048f79fa1332240b3f1a9",
"assets/assets/projects/showshappening/1.webp": "155be93ceadbedb8e3ec5ee582fc50d0",
"assets/assets/icons/app.png": "8d8f08e1de9007e8af37f7aa0ad49446",
"assets/assets/icons/flutter_dev_icon.png": "ac1168fac65402ba3e349fcbc955ae39",
"assets/assets/icons/play.png": "8460b714edc697c8731a0c9af7a877bb",
"assets/assets/fonts/HelveticaNowDisplay-ExtraBold.ttf": "d62cd5734d3a8ec9c487fa9aafcd9c68",
"assets/assets/fonts/HelveticaNowDisplay-Regular.ttf": "9632144b89660f0f032a3a0a01e533c7",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/HelveticaNowDisplay-Medium.ttf": "53b5d05abde1c9192de6f6a954a5fef9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
