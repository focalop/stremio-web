if(!self.define){let e,a={};const b=(b,d)=>(b=new URL(b+".js",d).href,a[b]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=b,e.onload=a,document.head.appendChild(e)}else e=b,importScripts(b),a()})).then((()=>{let e=a[b];if(!e)throw new Error(`Module ${b} didn’t register its module`);return e})));self.define=(d,i)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let c={};const r=e=>b(e,s),f={module:{uri:s},exports:c,require:r};a[s]=Promise.all(d.map((e=>f[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"f86272a12352b1b403dea0388725b2e236ec5445/binaries/stremio_core_web_bg.wasm",revision:"9e5bf57d798a0b58e4edbceccfaf21bc"},{url:"f86272a12352b1b403dea0388725b2e236ec5445/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"f86272a12352b1b403dea0388725b2e236ec5445/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"f86272a12352b1b403dea0388725b2e236ec5445/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"f86272a12352b1b403dea0388725b2e236ec5445/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"f86272a12352b1b403dea0388725b2e236ec5445/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"f86272a12352b1b403dea0388725b2e236ec5445/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"f86272a12352b1b403dea0388725b2e236ec5445/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"f86272a12352b1b403dea0388725b2e236ec5445/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"f86272a12352b1b403dea0388725b2e236ec5445/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"f86272a12352b1b403dea0388725b2e236ec5445/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"f86272a12352b1b403dea0388725b2e236ec5445/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"f86272a12352b1b403dea0388725b2e236ec5445/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"f86272a12352b1b403dea0388725b2e236ec5445/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"f86272a12352b1b403dea0388725b2e236ec5445/scripts/main.js",revision:"9da0a1e415ca428c2f242d1cda20ff98"},{url:"f86272a12352b1b403dea0388725b2e236ec5445/scripts/worker.js",revision:"eda5eaa256fa2dcf8776722d84c078da"},{url:"f86272a12352b1b403dea0388725b2e236ec5445/styles/main.css",revision:"ff043b2d02f17ba44859943356794fa4"},{url:"index.html",revision:"adfb278e7c68488d710cd43ea19fd5e4"}],{})}));
//# sourceMappingURL=service-worker.js.map