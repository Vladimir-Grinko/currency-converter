if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const t=e=>r(e,c),l={module:{uri:c},exports:o,require:t};s[c]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(i(...e),o)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"currency-converter"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.cc759b65.css",revision:null},{url:"/css/chunk-vendors.1534c798.css",revision:null},{url:"/index.html",revision:"0986fb79154fdc3df3289a4737f17c79"},{url:"/js/app.594c7fb7.js",revision:null},{url:"/js/chunk-vendors.ea22a75e.js",revision:null},{url:"/manifest.json",revision:"fee7ec3aca962872b291e01ea901e3e5"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
