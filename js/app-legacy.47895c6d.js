(function(){"use strict";var e={5778:function(e,t,n){var o=n(8935),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("AGHeader"),e._v(" "),n("router-view"),e._v(" "),n("AGFooter")],1)},i=[],a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",[o("header",{staticClass:"header"},[o("b-link",{attrs:{to:"/"}},[o("b-img",{staticClass:"logo",attrs:{src:n(4427),fluid:""}})],1),e._v(" "),o("div",{staticClass:"wrapper"},[o("div",{staticClass:"search-wrapper"},[o("b-form-input",{staticClass:"search",attrs:{type:"search",placeholder:"Search"}}),e._v(" "),o("b-button",{staticClass:"button",attrs:{variant:"light"}},[o("b-icon",{attrs:{icon:"search"}})],1)],1),e._v(" "),o("MainNavigation",{staticClass:"navigation"})],1)],1)])},c=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("b-nav",{attrs:{"card-header":""}},e._l(e.navigationItems,(function(t){return n("b-nav-item",{key:t.id,class:""+e.type,attrs:{to:t.path,exact:"","exact-active-class":"active",disabled:!1===t.active}},[e._v(e._s(t.name))])})),1)],1)},s=[],l=n(2809),f=function(){return n.e(443).then(n.bind(n,1088))},d=function(){return n.e(443).then(n.bind(n,730))},p=function(){return n.e(443).then(n.bind(n,26))},v=function(){return n.e(443).then(n.bind(n,8694))},m=function(){return n.e(443).then(n.bind(n,7317))};o["default"].use(l.Z);var g=[{id:0,path:"/",name:"Home",component:f},{id:1,path:"/company-profile",name:"Company Profile",component:d},{id:2,path:"/products",name:"Products",component:p},{id:3,path:"/",name:"R & D",component:function(){},active:!1},{id:4,path:"/contact",name:"Contact",component:v},{id:5,path:"*",name:"Not found",component:m,inMenu:!1}],h=new l.Z({mode:"history",base:"/college-practice-vue/",routes:g}),b=h,y={name:"MainNavigation",props:{type:{type:String,required:!1,default:"dark"}},data:function(){return{navigationData:g}},computed:{navigationItems:function(){return this.navigationData.filter((function(e){return void 0===e.inMenu||!0===Boolean(e.inMenu)}))}}},C=y,k=n(1001),w=(0,k.Z)(C,u,s,!1,null,"6999dfd8",null),_=w.exports,A=n(7454),E={name:"AGHeader",components:{MainNavigation:_,BIcon:A.H}},x=E,N=(0,k.Z)(x,a,c,!1,null,"4aa30278",null),S=N.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"top"},[n("b-container",{staticClass:"container"},[n("MainNavigation",{attrs:{type:"light"}}),e._v(" "),n("AGSocial")],1)],1),e._v(" "),n("div",{staticClass:"bottom"},[e._v("AGRIDERA SEEDS & AGRICULTURE LTD. © 2020")])])},j=[],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"social"},e._l(e.socialData,(function(e){return n("li",{key:e.id,staticClass:"item",attrs:{"data-testid":"item"}},[n("b-link",{staticClass:"link",attrs:{src:"",disabled:""}},[n("b-img",{staticClass:"icon",attrs:{src:e.icon}})],1)],1)})),0)},D=[],G=[{id:0,name:"facebook",icon:n(8500)},{id:1,name:"instagram",icon:n(673)},{id:2,name:"youtube",icon:n(4925)},{id:3,name:"twitter",icon:n(3961)},{id:4,name:"facebook",icon:n(3902)}],M={data:function(){return{socialData:G}}},P=M,F=(0,k.Z)(P,T,D,!1,null,"c747c298",null),L=F.exports,Z={components:{AGSocial:L,MainNavigation:_}},B=Z,H=(0,k.Z)(B,O,j,!1,null,"1006b178",null),I=H.exports,$={components:{AGHeader:S,AGFooter:I}},R=$,q=(0,k.Z)(R,r,i,!1,null,null,null),U=q.exports,X=n(563);(0,X.z)("".concat("/college-practice-vue/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var z=n(8262),K=n(3266);o["default"].config.productionTip=!1,o["default"].use(K.X),o["default"].use(z.XG7),o["default"].use(K.A7),new o["default"]({router:b,render:function(e){return e(U)}}).$mount("#app")},3902:function(e,t,n){e.exports=n.p+"img/facebook.494cb2b8.svg"},673:function(e,t,n){e.exports=n.p+"img/instagram.ae06980f.svg"},8500:function(e,t,n){e.exports=n.p+"img/linkedin.b9ffb917.svg"},3961:function(e,t,n){e.exports=n.p+"img/twitter.01bbced0.svg"},4925:function(e,t,n){e.exports=n.p+"img/youtube.b9757ef7.svg"},4427:function(e,t,n){e.exports=n.p+"img/logo.3df1a9b9.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var c=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about-legacy.fce914d3.js"}}(),function(){n.miniCssF=function(e){return"css/about.88a5f2bb.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="practice:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var c,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){c=f;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=o),e[o]=[r];var d=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/college-practice-vue/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,r.parentNode.removeChild(r),o(u)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),c=n.p+a;if(t(a,c))return r();e(o,c,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={443:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),c=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],c=o[1],u=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(u)var l=u(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkpractice"]=self["webpackChunkpractice"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5778)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.47895c6d.js.map