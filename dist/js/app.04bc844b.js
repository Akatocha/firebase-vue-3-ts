(function(e){function t(t){for(var a,c,u=t[0],i=t[1],l=t[2],s=0,p=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,c=1;c<r.length;c++){var i=r[c];0!==n[i]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var a={},n={app:0},o=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b4930063","chunk-2d0c5b16":"6bbe29b5","chunk-2d2086b7":"296ae270"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var l=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(s);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,r[1](l)}n[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(r,a,function(t){return e[t]}.bind(null,a));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"054a":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("d3b7");var a=r("ea7b"),n=function(){return new Promise((function(e,t){Object(a["c"])(Object(a["b"])(),(function(t){e(Boolean(t))}))}))}},"621b":function(e,t,r){},"84a1":function(e,t,r){"use strict";r("621b")},ad19:function(e,t,r){"use strict";r("d79a")},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),n={id:"nav"},o=Object(a["createTextVNode"])("Home"),c=Object(a["createTextVNode"])(" | "),u=Object(a["createTextVNode"])("About"),i=Object(a["createTextVNode"])(" | "),l=Object(a["createTextVNode"])("Registration"),s=Object(a["createTextVNode"])(" | "),f=Object(a["createTextVNode"])("Login");function p(e,t){var r=Object(a["resolveComponent"])("router-link"),p=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",n,[Object(a["createVNode"])(r,{to:"/"},{default:Object(a["withCtx"])((function(){return[o]})),_:1}),c,Object(a["createVNode"])(r,{to:"/about"},{default:Object(a["withCtx"])((function(){return[u]})),_:1}),i,Object(a["createVNode"])(r,{to:"/registration"},{default:Object(a["withCtx"])((function(){return[l]})),_:1}),s,Object(a["createVNode"])(r,{to:"/login"},{default:Object(a["withCtx"])((function(){return[f]})),_:1})]),Object(a["createVNode"])(p)],64)}r("ad19");var d=r("6b0d"),b=r.n(d);const v={},h=b()(v,[["render",p]]);var g=h,m=r("c3a1"),j=(r("7437"),r("9483"));Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var O=r("1da1"),k=(r("96cf"),r("d3b7"),r("3ca3"),r("ddb0"),r("b0c0"),r("6c02")),w=r("cf05"),y=r.n(w),x={class:"home"},_=Object(a["createElementVNode"])("img",{alt:"Vue logo",src:y.a},null,-1);function N(e,t,r,n,o,c){var u=Object(a["resolveComponent"])("HelloWorld");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",x,[_,Object(a["createVNode"])(u,{msg:"Welcome to Your Vue.js + TypeScript App"})])}var V=r("bee2"),C=r("d4ec"),S=r("262e"),E=r("2caf"),T=r("9ab4"),A=r("ce1f"),B={class:"hello"},I=Object(a["createStaticVNode"])('<p data-v-73f46931> For a guide and recipes on how to configure / customize this project,<br data-v-73f46931> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-73f46931>vue-cli documentation</a>. </p><h3 data-v-73f46931>Installed CLI Plugins</h3><ul data-v-73f46931><li data-v-73f46931><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-73f46931>babel</a></li><li data-v-73f46931><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener" data-v-73f46931>pwa</a></li><li data-v-73f46931><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-73f46931>router</a></li><li data-v-73f46931><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-73f46931>vuex</a></li><li data-v-73f46931><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-73f46931>eslint</a></li><li data-v-73f46931><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener" data-v-73f46931>typescript</a></li></ul><h3 data-v-73f46931>Essential Links</h3><ul data-v-73f46931><li data-v-73f46931><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-73f46931>Core Docs</a></li><li data-v-73f46931><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-73f46931>Forum</a></li><li data-v-73f46931><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-73f46931>Community Chat</a></li><li data-v-73f46931><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-73f46931>Twitter</a></li><li data-v-73f46931><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-73f46931>News</a></li></ul><h3 data-v-73f46931>Ecosystem</h3><ul data-v-73f46931><li data-v-73f46931><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-73f46931>vue-router</a></li><li data-v-73f46931><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-73f46931>vuex</a></li><li data-v-73f46931><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-73f46931>vue-devtools</a></li><li data-v-73f46931><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-73f46931>vue-loader</a></li><li data-v-73f46931><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-73f46931>awesome-vue</a></li></ul>',7);function P(e,t,r,n,o,c){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",B,[Object(a["createElementVNode"])("h1",null,Object(a["toDisplayString"])(e.msg),1),I])}var R=function(e){Object(S["a"])(r,e);var t=Object(E["a"])(r);function r(){return Object(C["a"])(this,r),t.apply(this,arguments)}return Object(V["a"])(r)}(A["b"]);R=Object(T["a"])([Object(A["a"])({props:{msg:String}})],R);var L=R;r("84a1");const F=b()(L,[["render",P],["__scopeId","data-v-73f46931"]]);var H=F,M=function(e){Object(S["a"])(r,e);var t=Object(E["a"])(r);function r(){return Object(C["a"])(this,r),t.apply(this,arguments)}return Object(V["a"])(r)}(A["b"]);M=Object(T["a"])([Object(A["a"])({data:function(){return{key:{name:"bob",age:25}}},components:{HelloWorld:H}})],M);var W=M;const z=b()(W,[["render",N]]);var D=z,q=r("054a"),J=[{path:"/",name:"Home",component:D},{path:"/registration",name:"Registration",component:function(){return r.e("chunk-2d0c5b16").then(r.bind(null,"3fd1"))}},{path:"/login",name:"Login",component:function(){return r.e("chunk-2d2086b7").then(r.bind(null,"a55b"))}},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],K=Object(k["a"])({history:Object(k["b"])("/"),routes:J});K.beforeEach(function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t,r,a){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(q["a"])();case 2:n=e.sent,n||"About"!==t.name?a():a("/login");case 4:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}());var U=K,Y=r("5502"),G=Object(Y["a"])({state:{},mutations:{},actions:{},modules:{}}),Q=r("260b"),X=r("66ce"),Z={apiKey:"AIzaSyBRWxcMz59xs23K8sSItAwRH8xS22a_d6w",authDomain:"fir-vue-3-ts.firebaseapp.com",databaseURL:"https://fir-vue-3-ts-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"fir-vue-3-ts",storageBucket:"fir-vue-3-ts.appspot.com",messagingSenderId:"131030357633",appId:"1:131030357633:web:9a0ff9cbdbce989aa95f80"},$=Object(Q["a"])(Z),ee=Object(X["c"])($),te={userId:123,username:"Bob",email:"bob@mail.ua",age:23};function re(e){return ae.apply(this,arguments)}function ae(){return ae=Object(O["a"])(regeneratorRuntime.mark((function e(t){var r,a,n,o,c,u,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=Object(X["e"])(ee),e.next=4,Object(X["b"])(Object(X["a"])(r,"users/".concat(t)));case 4:if(a=e.sent,a.exists()){e.next=10;break}return console.log("getUser: No data available"),e.abrupt("return",null);case 10:return n=a.val(),o=n.username,c=n.email,u=n.age,i={userId:t,username:o,email:c,age:u},e.abrupt("return",i);case 13:e.next=19;break;case 15:return e.prev=15,e.t0=e["catch"](0),console.error(e.t0),e.abrupt("return",null);case 19:case"end":return e.stop()}}),e,null,[[0,15]])}))),ae.apply(this,arguments)}function ne(){return oe.apply(this,arguments)}function oe(){return oe=Object(O["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,re(te.userId);case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)}))),oe.apply(this,arguments)}ne(),Object(a["createApp"])(g).use(G).use(U).use(m["a"]).mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},d79a:function(e,t,r){}});
//# sourceMappingURL=app.04bc844b.js.map