if(!self.define){let e,c={};const d=(d,b)=>(d=new URL(d+".js",b).href,c[d]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=c,document.head.appendChild(e)}else e=d,importScripts(d),c()})).then((()=>{let e=c[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(b,f)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(c[a])return;let i={};const s=e=>d(e,a),r={module:{uri:a},exports:i,require:s};c[a]=Promise.all(b.map((e=>r[e]||s(e)))).then((e=>(f(...e),i)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"4cad74b97cde0b6e582bd840afbcf469d1f4fc58/binaries/stremio_core_web_bg.wasm",revision:"9f0d1799795da5be5808dd6d83870cec"},{url:"4cad74b97cde0b6e582bd840afbcf469d1f4fc58/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"4cad74b97cde0b6e582bd840afbcf469d1f4fc58/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"4cad74b97cde0b6e582bd840afbcf469d1f4fc58/images/anonymous.png",revision:"14a3d1f35520016dfa7d524bc6fe00a3"},{url:"4cad74b97cde0b6e582bd840afbcf469d1f4fc58/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"4cad74b97cde0b6e582bd840afbcf469d1f4fc58/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"4cad74b97cde0b6e582bd840afbcf469d1f4fc58/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"4cad74b97cde0b6e582bd840afbcf469d1f4fc58/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"4cad74b97cde0b6e582bd840afbcf469d1f4fc58/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"4cad74b97cde0b6e582bd840afbcf469d1f4fc58/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"4cad74b97cde0b6e582bd840afbcf469d1f4fc58/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"4cad74b97cde0b6e582bd840afbcf469d1f4fc58/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"4cad74b97cde0b6e582bd840afbcf469d1f4fc58/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"4cad74b97cde0b6e582bd840afbcf469d1f4fc58/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"4cad74b97cde0b6e582bd840afbcf469d1f4fc58/scripts/main.js",revision:"d4b69c7d8039ce333123e4ae3330ae3b"},{url:"4cad74b97cde0b6e582bd840afbcf469d1f4fc58/scripts/worker.js",revision:"c6f9a6fff2cda2bd76a2974bc3342b81"},{url:"4cad74b97cde0b6e582bd840afbcf469d1f4fc58/styles/main.css",revision:"3f349dcad6cc56d2631ccacef267b5e6"},{url:"index.html",revision:"4ac4d6cc9d73c776c8fff80c5d2825cf"}],{})}));
//# sourceMappingURL=service-worker.js.map