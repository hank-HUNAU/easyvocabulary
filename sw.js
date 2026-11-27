/* 词书架 · 平板 / 笔记本端 · Service Worker v26 */
const VERSION = 'v26';
const CACHE = 'vocab-v26-' + VERSION;

const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './data/1000BEW1.json','./data/1000BEW2.json','./data/1000BEW3.json','./data/1000BEW4.json',
  './data/2000CEW1.json','./data/2000CEW2.json','./data/2000CEW3.json','./data/2000CEW4.json',
  './data/4000EEW1.json','./data/4000EEW2.json','./data/4000EEW3.json','./data/4000EEW4.json',
  './data/4000EEW5.json','./data/4000EEW6.json',
  './assets/1000BEW.jpg','./assets/2000CEW.jpg','./assets/4000EEW.jpg',
  './icons/vocab-shelf-192.png','./icons/vocab-shelf-512.png',
  './icons/vocab-shelf-maskable-512.png','./icons/apple-touch-icon-180.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  // 音频按需缓存，首次播放后本地化
  if (url.pathname.match(/\.mp3$/i)) {
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => hit))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      if (res.ok && (res.type === 'basic' || res.type === 'default')) {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
