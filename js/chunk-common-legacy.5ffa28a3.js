(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"0bb3":function(e,n,t){"use strict";t.d(n,"e",(function(){return o})),t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return _})),t.d(n,"d",(function(){return m})),t.d(n,"c",(function(){return O}));var a=t("c7eb"),r=t("1da1"),c=(t("99af"),t("e9c4"),t("b64b"),t("d3b7"),t("ac1f"),t("25f0"),t("3ca3"),t("5319"),t("841c"),t("ddb0"),t("9861"),t("88a7"),t("271a"),t("5494"),t("af18")),o=function(){"com.sawa.ludo"===Object(c["getArgsFromUrlHash"])("bundle_id")&&document.getElementsByTagName("html")[0].classList.add("-ludo")},i=function(){var e=!1;return function(){e||(e=!0,window.JavaBridgeObj&&!window.JavaBridgeObj.__exec__&&(window.JavaBridgeObj.__actions__={},window.JavaBridgeObj.__id__=0,window.JavaBridgeObj.__exec__=function(e,n){var t=window.JavaBridgeObj.__actions__[e];t&&t(n)}))}},u=i();function s(e){e?document.getElementsByTagName("html")[0].classList.add("-dark"):document.getElementsByTagName("html")[0].classList.remove("-dark")}var p=function(e){var n=window.JavaBridgeObj.__id__+=1;return window.JavaBridgeObj.__actions__[n]=e,n};function l(){return f.apply(this,arguments)}function f(){return f=Object(r["a"])(Object(a["a"])().mark((function e(){var n,t,r;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=null,t=new Promise((function(e){n=e})),window.JavaBridgeObj&&window.JavaBridgeObj.isDarkMode?(r=p((function(e){if(console.warn("isDarkMode",e),e){var t=JSON.parse(e),a=t.mode;n(1===a)}})),console.warn("#1",r),window.JavaBridgeObj.isDarkMode(JSON.stringify({callback_id:r}))):(console.warn("NO API isDarkMode"),n(!1)),e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function d(){var e=Object(c["getArgsFromUrl"])("mode");return!!e}function b(){var e=window.matchMedia("(prefers-color-scheme: dark)");e.addEventListener("change",(function(e){e.matches?s(!0):s(!1)})),e.matches?s(!0):s(!1)}function _(){return h.apply(this,arguments)}function h(){return h=Object(r["a"])(Object(a["a"])().mark((function e(){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(d()){e.next=2;break}return e.abrupt("return");case 2:n=String(Object(c["getArgsFromUrl"])("mode")),Object(c["matchExpr"])(n,[["0",function(){return s(!1)}],["1",function(){return s(!0)}],["2",function(){return b()}]]);case 4:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function w(e,n){var t=new URLSearchParams(window.location.search);void 0===n?t.delete(e):t.set(e,String(n));var a,r=t.toString();a=r?"".concat(window.location.pathname,"?").concat(r):window.location.pathname;var c=location.hash;return c&&(a+=c),a}function g(e,n){var t=w(e,n);return t=t.replace(location.hash,""),location.origin+t}function m(e,n,t){e&&localStorage.setItem("ludo_refresh_device_token_mobile","".concat(e)||""),n&&localStorage.setItem("ludo_refresh_device_token_country","".concat(n)||""),t&&localStorage.setItem("ludo_refresh_device_token_flag","".concat(t)||"");var a="sawaludo",r=location.href;r=g("is_refresh",1),r="".concat(a,"://refresh_device_token/?url=").concat(encodeURIComponent(r)),console.warn("refreshDeviceToken",r),window.location.href=r}window.applyColorTheme=s,window.getDarkMode=l;var v=function(e){return new Promise((function(n){var t=document.createElement("script");t.src=e,document.body.appendChild(t),t.onload=function(){n(!0)},t.onerror=function(){n(!1)}}))};function O(){return j.apply(this,arguments)}function j(){return j=Object(r["a"])(Object(a["a"])().mark((function e(){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(Object(c["getArgsFromUrl"])("is_debug")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v("https://unpkg.com/vconsole/dist/vconsole.min.js");case 4:if(n=e.sent,n){e.next=7;break}return e.abrupt("return");case 7:new window.VConsole;case 8:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}},1:function(e,n){},"6f0d":function(e,n,t){"use strict";var a=t("c7eb"),r=t("1da1"),c=t("d4ec"),o=t("bee2"),i=t("bc7b"),u=t("1902"),s=t("26c7"),p=t("68a3"),l=function(){function e(){Object(c["a"])(this,e)}return Object(o["a"])(e,[{key:"init",value:function(){var e;Object({VUE_APP_ENV:"production",VUE_APP_BASE_URL:"https://arab-pk.badambiz.com/",VUE_APP_LANGUAGE:"",VUE_APP_PUBLIC_PATH:"./",VUE_APP_TRANSLATE_SHEET:"",VUE_APP_EXTERNALS:"",VUE_APP_NO_GEN_INDEX_HTML:"true",NODE_ENV:"production",BASE_URL:""}).VUE_APP_FLAVOR,e={apiKey:"AIzaSyBlR0QK--SjqMqihBd03ARBzfuZ3x1euzo",authDomain:"badamoyundixim.firebaseapp.com",databaseURL:"https://badamoyundixim.firebaseio.com",projectId:"badamoyundixim",storageBucket:"badamoyundixim.appspot.com",messagingSenderId:"532022495714",appId:"1:532022495714:web:2a3620b2f1f41d319fd1bb",measurementId:"G-8L1XP304KR"};var n=Object(i["a"])(e);this.app=n,this.analytics=Object(u["a"])(n),this.remoteConfig=Object(p["b"])(n);var t=Object(s["a"])(n);window.firebasePerformanceTrace=function(e){return Object(s["b"])(t,e)},window.reportToFirebase=function(e,n){}}},{key:"reportEvent",value:function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(n,t){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{this.analytics&&Object(u["b"])(this.analytics,n,t)}catch(a){console.error(a)}case 1:case"end":return e.stop()}}),e,this)})));function n(n,t){return e.apply(this,arguments)}return n}()},{key:"getValueFromConfig",value:function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(n){var t;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.remoteConfig){e.next=6;break}return e.next=3,Object(p["a"])(this.remoteConfig);case 3:return e.sent,t=Object(p["c"])(this.remoteConfig,n),e.abrupt("return",t.asString());case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}}),e,this)})));function n(n){return e.apply(this,arguments)}return n}()}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}])}();n["a"]=l},7292:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r})),t.d(n,"c",(function(){return o}));var a,r,c=t("a773");function o(e,n){setTimeout((function(){Object(c["j"])(e,n)}),300)}(function(e){e["h5_loginpage"]="h5_loginpage",e["h5_loginpage_elementclick"]="h5_loginpage_elementclick",e["h5_phoneloginpage"]="h5_phoneloginpage",e["h5_login_detailpage_elementclick"]="h5_login_detailpage_elementclick",e["h5_verifycodeloginpage_verifycode"]="h5_verifycodeloginpage_verifycode",e["h5_loginpage_enpower_no_account_pop_show"]="h5_loginpage_enpower_no_account_pop_show",e["h5_loginpage_enpower_no_account_pop_click"]="h5_loginpage_enpower_no_account_pop_click",e["h5_loginpage_baloot_cancellation_pop_show"]="h5_loginpage_baloot_cancellation_pop_show",e["h5_loginpage_baloot_cancellation_pop_click"]="h5_loginpage_baloot_cancellation_pop_click",e["account_cancellation_verify_page_operation_result"]="account_cancellation_verify_page_operation_result"})(a||(a={})),function(e){e["绑定手机号"]="绑定手机号",e["解绑手机号"]="解绑手机号",e["更换手机号"]="更换手机号",e["baloot授权登录"]="baloot授权登录",e["账号注销"]="账号注销"}(r||(r={}))},a773:function(e,n,t){"use strict";t.d(n,"h",(function(){return i})),t.d(n,"d",(function(){return s})),t.d(n,"c",(function(){return p})),t.d(n,"f",(function(){return l})),t.d(n,"g",(function(){return f})),t.d(n,"i",(function(){return h})),t.d(n,"k",(function(){return w})),t.d(n,"j",(function(){return g})),t.d(n,"e",(function(){return v})),t.d(n,"a",(function(){return O})),t.d(n,"b",(function(){return j}));var a=t("c7eb"),r=t("1da1"),c=(t("99af"),t("c975"),t("e9c4"),t("b64b"),t("ac1f"),t("5319"),t("0eb6"),t("b7ef"),t("8bd4"),t("af18")),o=t("7292");var i=j("package"),u="com.sawa.ludo"===j("bundle_id");function s(e){return"cn.sawalive.isawa"===e?(console.log("pkg 111",e),{apple:"cn.sawalive.isawa",facebook:"391521625027907",snapchat:""}):"com.sawa.ludo"===e?(console.log("pkg 222",e),{apple:"com.sawa.ludoh5",facebook:"462662855828218",snapchat:""}):(console.log("pkg 333",e),{apple:"com.sawa.ksah5",facebook:"297601757621370",snapchat:j("is_debug")?"bc0b6d26-9d50-4a7a-bb20-9a8ccfdbe509":"55071d93-cf78-495a-a45e-04564b36962c"})}function p(e){return"cn.sawalive.isawa"===e?1:"com.sawa.ludo"===e?2:1}function l(){var e=s(i).apple;AppleID.auth.init({clientId:e,scope:"name email",redirectURI:window.location.href.split("?")[0],state:"[STATE]",usePopup:!0}),console.log("苹果初始化 包名",i,e)}function f(e,n,t){return d.apply(this,arguments)}function d(){return d=Object(r["a"])(Object(a["a"])().mark((function e(n,t,r){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:window.snapKitInit=function(){b(n,t,r)},function(e,n,t){var a,r=e.getElementsByTagName(n)[0];e.getElementById(t)||(a=e.createElement(n),a.id=t,a.src="https://sdk.snapkit.com/js/v1/login.js",r.parentNode.insertBefore(a,r))}(document,"script","loginkit-sdk");case 3:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function b(e,n,t){return _.apply(this,arguments)}function _(){return _=Object(r["a"])(Object(a["a"])().mark((function e(n,t,r){var c,o;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:c=n,o=window.snap,o.loginkit.mountButton(c,{clientId:s(i).snapchat,redirectURI:window.location.href.split("?")[0],scopeList:["user.display_name","user.bitmoji.avatar","user.external_id"],handleResponseCallback:function(){o.loginkit.fetchUserInfo().then((function(e){t(e)}),(function(e){r(e)}))}});case 3:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function h(e,n){var t=e.data,a=(t.identities,t.user_info),r=u?"sawaludo":"sawaksa";if(a){var c=a.session_key,o=a.uid,i=a.icon_verify,s={session_key:c,uid:o,icon_verify:i},p=encodeURIComponent(JSON.stringify(s));if("2"===j("is_debug"))return;window.location.href="".concat(r,"://sawaksa_login/?sawaksa_acount=").concat(p,"&source=").concat(n)}}function w(){Object(o["c"])(o["b"].account_cancellation_verify_page_operation_result,{operation:"点击反馈入口"});var e=u?"sawaludo":"sawaksa";window.location.href="".concat(e,"://feedback")}function g(e){return m.apply(this,arguments)}function m(){return m=Object(r["a"])(Object(a["a"])().mark((function e(n){var t,r,o,i,s,p=arguments;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=p.length>1&&void 0!==p[1]?p[1]:{},!Object(c["getPlatform"])().isIPhone){e.next=7;break}r=t,o=u?"sawaludo":"sawaksa",window.location.href="".concat(o,"://sawaksa_login_event/?eventName=").concat(n,"&jsonData=").concat(btoa(encodeURIComponent(JSON.stringify(r)))),e.next=14;break;case 7:if(i=j("sa"),!i){e.next=14;break}return i=decodeURIComponent(i),s=j("is_debug"),e.next=13,Object(c["initWebSensors"])(s?c["SensorSDKName"].TEST:c["SensorSDKName"].KSA,!0,"ajax",i);case 13:Object(c["reportWebSensors"])(n,t);case 14:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function v(e){var n=e.split(".");if(n.length<3)return"";try{var t=n[1],a=atob(t),r=JSON.parse(a),c=r.sub;return c}catch(o){return""}}function O(e){var n=u?"sawaludo":"sawaksa";window.location.href="".concat(n,"://bind_unbind_update/?verify_token=").concat(e)}function j(e){var n=Object(c["getArgsFromUrl"])(e);if(n)return Object(c["setStorage"])(e,n),n;var t=Object(c["getStorage"])(e);return t}},d650:function(e,n,t){"use strict";t.d(n,"a",(function(){return U}));var a=t("c7eb"),r=t("1da1"),c=(t("99af"),t("14d9"),t("fb6a"),t("b64b"),t("d3b7"),t("3ca3"),t("ddb0"),t("2b3d"),t("bf19"),t("9861"),t("88a7"),t("271a"),t("5494"),t("af18")),o=t("cee4"),i=t("a773"),u=t("6f0d"),s=(t("e9c4"),t("0eb6"),t("b7ef"),t("8bd4"),t("2b0e"));function p(){var e=Object(s["ref"])({});function n(n){var t=e.value[n];if(!t){var a=localStorage.getItem(n);try{if(a){var r=JSON.parse(decodeURIComponent(atob(a)));return e.value[n]=r,r}}catch(c){}return null}return t}function t(n,t){try{var a=btoa(encodeURIComponent(JSON.stringify(t)));localStorage.setItem(n,a),e.value[n]=t}catch(r){}}return function(){return{get:n,set:t}}}var l,f=p(),d="sawa_ow_",b={"上次使用过的API_BASE":"".concat(d,"last_use_api_base"),"上次使用过的神策域名":"".concat(d,"last_use_sensors_base"),"备用apilist":"".concat(d,"backup_api_list"),"备用神策list":"".concat(d,"backup_sensors_list")},_="domain-dial";function h(e){if(e){if(Object(c["getArgsFromUrl"])("is_debug"))return;o["a"].defaults.baseURL=e,c["api"].getAxiosInstance().defaults.baseURL=o["a"].defaults.baseURL}}function w(){return g.apply(this,arguments)}function g(){return g=Object(r["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",u["a"].getInstance().getValueFromConfig("ow_conf"));case 1:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}(function(e){e[e["神策"]=1]="神策",e[e["API"]=2]="API"})(l||(l={}));var m=5e3;function v(e,n){return O.apply(this,arguments)}function O(){return O=Object(r["a"])(Object(a["a"])().mark((function e(n,t){var r,c;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new Promise((function(e){for(var a=function(){var a=n[r];t===l.API?k(a).then((function(n){n&&e(a)})):t===l.神策&&A(a).then((function(n){n&&e(a)}))},r=0;r<n.length;r+=1)a()})),c=new Promise((function(e){return setTimeout((function(){e("")}),m)})),e.abrupt("return",Promise.race([r,c]));case 3:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function j(){var e=Object(i["b"])("api_base");if(e){var n=decodeURIComponent(decodeURIComponent(e)),t=new URL(n).host,a="/"===t.slice(-1)?t:"".concat(t,"/");return"".concat(new URL(n).protocol,"//").concat(a)}return Object(i["b"])("is_debug")?"https://test02-pk.badambiz.com/":"https://gif.applecdn.cloud/"}function k(e){return y.apply(this,arguments)}function y(){return y=Object(r["a"])(Object(a["a"])().mark((function e(n){var t;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["api"].get("https://".concat(n,"/api/sys/h5_info"),{});case 2:return t=e.sent,e.abrupt("return",t[0]?n:"");case 4:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function x(e,n){return I.apply(this,arguments)}function I(){return I=Object(r["a"])(Object(a["a"])().mark((function e(n,t){var r,c;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=f(),t!==l.API){e.next=6;break}return e.next=4,v(n,l.API);case 4:c=e.sent,c?(r.set(b.上次使用过的API_BASE,c),h("https://".concat(c,"/"))):h(j());case 6:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function A(e){return P.apply(this,arguments)}function P(){return P=Object(r["a"])(Object(a["a"])().mark((function e(n){var t;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["api"].get("https://".concat(n,"/api/gm/hii"),{});case 2:return t=e.sent,e.abrupt("return",t[0]?n:"");case 4:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function S(e){var n=[];return e&&n.push(x(e,l.API)),Promise.all(n)}function U(){return E.apply(this,arguments)}function E(){return E=Object(r["a"])(Object(a["a"])().mark((function e(){var n,t,r,c,o;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=f(),e.next=3,w();case 3:if(t=e.sent,!t){e.next=14;break}return r=JSON.parse(t),c=r.go_pk,console.log(_,"conf",c),n.set(b.备用apilist,c),e.next=11,S(c);case 11:return e.abrupt("return",!0);case 14:return o=n.get(b.备用apilist),e.next=17,S(o);case 17:return e.abrupt("return",!0);case 18:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}}}]);
//# sourceMappingURL=chunk-common-legacy.5ffa28a3.js.map