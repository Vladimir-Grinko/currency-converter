if(!self.define){let e,r={};const c=(c,n)=>(c=new URL(c+".js",n).href,r[c]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=r,document.head.appendChild(e)}else e=c,importScripts(c),r()})).then((()=>{let e=r[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let t={};const i=e=>c(e,o),u={module:{uri:o},exports:t,require:i};r[o]=Promise.all(n.map((e=>u[e]||i(e)))).then((e=>(s(...e),t)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"currency-converter"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/currency-converter/css/app.cc759b65.css",revision:null},{url:"/currency-converter/css/chunk-vendors.1534c798.css",revision:null},{url:"/currency-converter/index.html",revision:"0d35312f9198f781b92b98884619dc2d"},{url:"/currency-converter/js/app.81f3a35e.js",revision:null},{url:"/currency-converter/js/chunk-vendors.440b888e.js",revision:null},{url:"/currency-converter/manifest.json",revision:"fee7ec3aca962872b291e01ea901e3e5"},{url:"/currency-converter/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map