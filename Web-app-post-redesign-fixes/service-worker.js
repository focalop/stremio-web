if(!self.define){let e,c={};const d=(d,a)=>(d=new URL(d+".js",a).href,c[d]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=c,document.head.appendChild(e)}else e=d,importScripts(d),c()})).then((()=>{let e=c[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(c[i])return;let b={};const s=e=>d(e,i),r={module:{uri:i},exports:b,require:s};c[i]=Promise.all(a.map((e=>r[e]||s(e)))).then((e=>(f(...e),b)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"ef03292eb2832369302d923b149c0a40cefd1338/binaries/stremio_core_web_bg.wasm",revision:"a35c8b468ca3a4c2efe700d2f2efc0e0"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/favicons/icon-96.png",revision:"38e4435de414019b7180d9118f2195ac"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/images/icon_x192.png",revision:"578fa590753f146727be316951b6f0ee"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/images/icon_x512.png",revision:"a554627dddf7043012a9ae3c41789a18"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/images/maskable_icon_x192.png",revision:"2be489f0d46f54cf82ed6d3f2a46700d"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/images/maskable_icon_x512.png",revision:"b244fd1fd0b5dc7eeb9eeedcbc99273b"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/manifest.json",revision:"1577e844d5f40d9886332544c3e3a684"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/scripts/main.js",revision:"ec09a156e9336bceb5b2f4e64958fc05"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/scripts/worker.js",revision:"18ac0d1d9c9c8ca51401de6f5a3b8955"},{url:"ef03292eb2832369302d923b149c0a40cefd1338/styles/main.css",revision:"80f9a0e3fb2b6a8baaf037c469df830e"},{url:"index.html",revision:"a1f335ced9896b1d2927503511360285"}],{})}));
//# sourceMappingURL=service-worker.js.map