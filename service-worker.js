if(!self.define){let e,l={};const i=(i,c)=>(i=new URL(i+".js",c).href,l[i]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=l,document.head.appendChild(e)}else e=i,importScripts(i),l()})).then((()=>{let e=l[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(l[u])return;let g={};const o=e=>i(e,u),n={module:{uri:u},exports:g,require:o};l[u]=Promise.all(c.map((e=>n[e]||o(e)))).then((e=>(r(...e),g)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"practice"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/college-practice-vue/css/app.f53d9222.css",revision:null},{url:"/college-practice-vue/img/1.e4edbde9.png",revision:null},{url:"/college-practice-vue/img/1000.0db9f268.jpg",revision:null},{url:"/college-practice-vue/img/1001.64a9a3ba.jpg",revision:null},{url:"/college-practice-vue/img/1002.ded8d089.jpg",revision:null},{url:"/college-practice-vue/img/1003.136e5c9e.jpg",revision:null},{url:"/college-practice-vue/img/1004.84aa134b.jpg",revision:null},{url:"/college-practice-vue/img/1005.c11f685c.jpg",revision:null},{url:"/college-practice-vue/img/1006.4a30e3af.jpg",revision:null},{url:"/college-practice-vue/img/1007.5818233e.jpg",revision:null},{url:"/college-practice-vue/img/1235.04ac8c67.jpg",revision:null},{url:"/college-practice-vue/img/1252.9866a2f2.jpg",revision:null},{url:"/college-practice-vue/img/135.3639e329.jpg",revision:null},{url:"/college-practice-vue/img/2.492851f9.png",revision:null},{url:"/college-practice-vue/img/214.f790d203.jpg",revision:null},{url:"/college-practice-vue/img/3.bc18e63c.png",revision:null},{url:"/college-practice-vue/img/337.7d7fea99.jpg",revision:null},{url:"/college-practice-vue/img/4.ef658fdf.png",revision:null},{url:"/college-practice-vue/img/460.6d3c7aec.jpg",revision:null},{url:"/college-practice-vue/img/5.80ceabe1.png",revision:null},{url:"/college-practice-vue/img/500.ac8544de.jpg",revision:null},{url:"/college-practice-vue/img/6.ac0cea58.png",revision:null},{url:"/college-practice-vue/img/7.36d083cf.png",revision:null},{url:"/college-practice-vue/img/8.ca5fc6a5.png",revision:null},{url:"/college-practice-vue/img/859.c9fe6c55.jpg",revision:null},{url:"/college-practice-vue/img/893.63a3f21a.jpg",revision:null},{url:"/college-practice-vue/img/98.f6cf76b9.jpg",revision:null},{url:"/college-practice-vue/img/HomeAbout.c6f88680.svg",revision:null},{url:"/college-practice-vue/img/HomePromo.1fe2367f.jpg",revision:null},{url:"/college-practice-vue/img/ag-78-new.be169d5d.jpg",revision:null},{url:"/college-practice-vue/img/amit.e35cdc32.jpg",revision:null},{url:"/college-practice-vue/img/arrow-left.6718adb2.svg",revision:null},{url:"/college-practice-vue/img/attention-icon.8e9e2d43.svg",revision:null},{url:"/college-practice-vue/img/attention-icon.d8057bbc.svg",revision:null},{url:"/college-practice-vue/img/bg.3ee3d816.jpg",revision:null},{url:"/college-practice-vue/img/bg.75f77315.jpg",revision:null},{url:"/college-practice-vue/img/bg.8e940f6a.jpg",revision:null},{url:"/college-practice-vue/img/bg.a6732685.jpg",revision:null},{url:"/college-practice-vue/img/c-9.88c39fc5.jpg",revision:null},{url:"/college-practice-vue/img/contactUsPageBg.d754ff08.jpg",revision:null},{url:"/college-practice-vue/img/cross.a9a0fa01.svg",revision:null},{url:"/college-practice-vue/img/dar.7e526f57.jpg",revision:null},{url:"/college-practice-vue/img/facebook.494cb2b8.svg",revision:null},{url:"/college-practice-vue/img/gedera.ebc3ce5c.jpg",revision:null},{url:"/college-practice-vue/img/icon.194bcc0b.svg",revision:null},{url:"/college-practice-vue/img/icon.30b34daf.svg",revision:null},{url:"/college-practice-vue/img/icon.33854678.svg",revision:null},{url:"/college-practice-vue/img/icon.4499a54f.svg",revision:null},{url:"/college-practice-vue/img/icon.96785aa2.svg",revision:null},{url:"/college-practice-vue/img/icon.a1e0743c.svg",revision:null},{url:"/college-practice-vue/img/icon.db395016.svg",revision:null},{url:"/college-practice-vue/img/icon.fdc55aeb.svg",revision:null},{url:"/college-practice-vue/img/image.632148c5.jpg",revision:null},{url:"/college-practice-vue/img/image.64092cdf.jpg",revision:null},{url:"/college-practice-vue/img/image.708c038c.jpg",revision:null},{url:"/college-practice-vue/img/image.8304f318.jpg",revision:null},{url:"/college-practice-vue/img/image.e0191fbe.jpg",revision:null},{url:"/college-practice-vue/img/image.e15ba920.jpg",revision:null},{url:"/college-practice-vue/img/image.e7133dc7.jpg",revision:null},{url:"/college-practice-vue/img/image.f5a5ca9b.jpg",revision:null},{url:"/college-practice-vue/img/instagram.ae06980f.svg",revision:null},{url:"/college-practice-vue/img/linkedin.b9ffb917.svg",revision:null},{url:"/college-practice-vue/img/logo.3df1a9b9.png",revision:null},{url:"/college-practice-vue/img/mission.891b5d31.jpg",revision:null},{url:"/college-practice-vue/img/nirit.ba05e1e5.jpg",revision:null},{url:"/college-practice-vue/img/omer.343360c3.jpg",revision:null},{url:"/college-practice-vue/img/open-field-crop-seeds.6a8aa3b1.png",revision:null},{url:"/college-practice-vue/img/ornamental-seeds.f4ba05b9.png",revision:null},{url:"/college-practice-vue/img/product-bg.27748243.svg",revision:null},{url:"/college-practice-vue/img/product-bg.38f034e0.svg",revision:null},{url:"/college-practice-vue/img/product-bg.39abf090.svg",revision:null},{url:"/college-practice-vue/img/product-bg.ad5c0f55.svg",revision:null},{url:"/college-practice-vue/img/products-bg.a563aaef.jpg",revision:null},{url:"/college-practice-vue/img/twitter.01bbced0.svg",revision:null},{url:"/college-practice-vue/img/vegetable-seeds.6b1852e4.png",revision:null},{url:"/college-practice-vue/img/vision.365809ba.jpg",revision:null},{url:"/college-practice-vue/img/youtube.b9757ef7.svg",revision:null},{url:"/college-practice-vue/img/yuval.6b75df0c.jpg",revision:null},{url:"/college-practice-vue/index.html",revision:"dcd732d58e09bc1c8d62a45de5be46d2"},{url:"/college-practice-vue/js/app.1d38a619.js",revision:null},{url:"/college-practice-vue/js/chunk-vendors.7725e5b2.js",revision:null},{url:"/college-practice-vue/manifest.json",revision:"1c5a6905b6a029722332d7d8c4c1af6b"},{url:"/college-practice-vue/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
