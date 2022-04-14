var Vt=Object.defineProperty;var bt=Object.getOwnPropertySymbols;var Ut=Object.prototype.hasOwnProperty,Yt=Object.prototype.propertyIsEnumerable;var St=(s,t,e)=>t in s?Vt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,ot=(s,t)=>{for(var e in t||(t={}))Ut.call(t,e)&&St(s,e,t[e]);if(bt)for(var e of bt(t))Yt.call(t,e)&&St(s,e,t[e]);return s};import{S as F,i as V,s as U,F as $,C as L,e as it,c as ut,a as ct,d as A,G as K,g as T,H as lt,I as Q,J as x,K as tt,L as et,z as pt,M as Ot,q as b,o as S,N as It,O as v,P as ft,v as Gt,Q as dt,R as Xt,T as st,r as At,w as y,l as Tt,x as D,y as B,A as qt,n as Wt,B as O,p as Zt,U as Jt,E as Kt,k as j,m as N,V as Qt,t as nt,h as at}from"../chunks/index-fb5fb875.js";import{r as $t}from"../chunks/singletons-ab9ecca4.js";import{_ as rt,a as Ct,M as xt,c as z,u as Dt,f as mt,d as te,b as Lt,D as ee,S as se,e as ne}from"../chunks/Ripple-5fd54144.js";import{I as W}from"../chunks/IconButton-298eec29.js";import{g as Et}from"../chunks/navigation-84a2d39d.js";/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var M={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},J={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},ae={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ht=function(s){rt(t,s);function t(e){return s.call(this,Ct(Ct({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"strings",{get:function(){return ae},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return M},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return J},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.handleTargetScroll=function(){},t.prototype.handleWindowResize=function(){},t.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},t}(xt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Z=0,Rt=function(s){rt(t,s);function t(e){var n=s.call(this,e)||this;return n.wasDocked=!0,n.isDockedShowing=!0,n.currentAppBarOffsetTop=0,n.isCurrentlyBeingResized=!1,n.resizeThrottleId=Z,n.resizeDebounceId=Z,n.lastScrollPosition=n.adapter.getViewportScrollY(),n.topAppBarHeight=n.adapter.getTopAppBarHeight(),n}return t.prototype.destroy=function(){s.prototype.destroy.call(this),this.adapter.setStyle("top","")},t.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter.getViewportScrollY(),0),n=e-this.lastScrollPosition;this.lastScrollPosition=e,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=n,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},t.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){e.resizeThrottleId=Z,e.throttledResizeHandler()},J.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){e.handleTargetScroll(),e.isCurrentlyBeingResized=!1,e.resizeDebounceId=Z},J.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},t.prototype.checkForUpdate=function(){var e=-this.topAppBarHeight,n=this.currentAppBarOffsetTop<0,a=this.currentAppBarOffsetTop>e,o=n&&a;if(o)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==a)return this.isDockedShowing=a,!0}else return this.wasDocked=!0,!0;return o},t.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var e=this.currentAppBarOffsetTop;Math.abs(e)>=this.topAppBarHeight&&(e=-J.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",e+"px")}},t.prototype.throttledResizeHandler=function(){var e=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==e&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-e,this.topAppBarHeight=e),this.handleTargetScroll()},t}(ht);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var re=function(s){rt(t,s);function t(){var e=s!==null&&s.apply(this,arguments)||this;return e.wasScrolled=!1,e}return t.prototype.handleTargetScroll=function(){var e=this.adapter.getViewportScrollY();e<=0?this.wasScrolled&&(this.adapter.removeClass(M.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(M.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},t}(Rt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var oe=function(s){rt(t,s);function t(e){var n=s.call(this,e)||this;return n.collapsed=!1,n.isAlwaysCollapsed=!1,n}return Object.defineProperty(t.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),t.prototype.init=function(){s.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(M.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(M.SHORT_COLLAPSED_CLASS))},t.prototype.setAlwaysCollapsed=function(e){this.isAlwaysCollapsed=!!e,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},t.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},t.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},t.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var e=this.adapter.getViewportScrollY();e<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},t.prototype.uncollapse=function(){this.adapter.removeClass(M.SHORT_COLLAPSED_CLASS),this.collapsed=!1},t.prototype.collapse=function(){this.adapter.addClass(M.SHORT_COLLAPSED_CLASS),this.collapsed=!0},t}(ht);const{window:yt}=Xt;function le(s){let t,e,n,a,o,c,r;const i=s[22].default,l=$(i,s,s[21],null);let d=[{class:e=z(ot({[s[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":s[4]==="short","mdc-top-app-bar--short-collapsed":s[0],"mdc-top-app-bar--fixed":s[4]==="fixed","smui-top-app-bar--static":s[4]==="static","smui-top-app-bar--color-secondary":s[5]==="secondary","mdc-top-app-bar--prominent":s[6],"mdc-top-app-bar--dense":s[7]},s[11]))},{style:n=Object.entries(s[12]).map(Bt).concat([s[3]]).join(" ")},s[15]],f={};for(let u=0;u<d.length;u+=1)f=L(f,d[u]);return{c(){t=it("header"),l&&l.c(),this.h()},l(u){t=ut(u,"HEADER",{class:!0,style:!0});var m=ct(t);l&&l.l(m),m.forEach(A),this.h()},h(){K(t,f)},m(u,m){T(u,t,m),l&&l.m(t,null),s[25](t),o=!0,c||(r=[lt(yt,"resize",s[23]),lt(yt,"scroll",s[24]),Q(a=Dt.call(null,t,s[1])),Q(s[13].call(null,t)),lt(t,"SMUITopAppBarIconButton:nav",s[26])],c=!0)},p(u,m){l&&l.p&&(!o||m[0]&2097152)&&x(l,i,u,u[21],o?et(i,u[21],m,null):tt(u[21]),null),K(t,f=pt(d,[(!o||m[0]&2293&&e!==(e=z(ot({[u[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":u[4]==="short","mdc-top-app-bar--short-collapsed":u[0],"mdc-top-app-bar--fixed":u[4]==="fixed","smui-top-app-bar--static":u[4]==="static","smui-top-app-bar--color-secondary":u[5]==="secondary","mdc-top-app-bar--prominent":u[6],"mdc-top-app-bar--dense":u[7]},u[11]))))&&{class:e},(!o||m[0]&4104&&n!==(n=Object.entries(u[12]).map(Bt).concat([u[3]]).join(" ")))&&{style:n},m[0]&32768&&u[15]])),a&&Ot(a.update)&&m[0]&2&&a.update.call(null,u[1])},i(u){o||(b(l,u),o=!0)},o(u){S(l,u),o=!1},d(u){u&&A(t),l&&l.d(u),s[25](null),c=!1,It(r)}}}const Bt=([s,t])=>`${s}: ${t};`;function ie(s,t,e){const n=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let a=v(t,n),{$$slots:o={},$$scope:c}=t;const r=mt(ft());let i=()=>{};function l(p){return p===i}let{use:d=[]}=t,{class:f=""}=t,{style:u=""}=t,{variant:m="standard"}=t,{color:I="primary"}=t,{collapsed:h=i}=t;const P=!l(h)&&!!h;l(h)&&(h=!1);let{prominent:R=!1}=t,{dense:w=!1}=t,{scrollTarget:C=void 0}=t,_,g,E={},H={},Y,Ht=$t({variant:m,prominent:R,dense:w},p=>{e(18,Y=p)}),k,G=m;Gt(()=>(e(9,g=_t()),g.init(),()=>{g.destroy()}));function _t(){const p={static:ht,short:oe,fixed:re}[m]||Rt;return new p({hasClass:Mt,addClass:Pt,removeClass:wt,setStyle:vt,getTopAppBarHeight:()=>_.clientHeight,notifyNavigationIconClicked:()=>te(_,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>C==null?window.pageYOffset:C.scrollTop,getTotalActionItems:()=>_.querySelectorAll(".mdc-top-app-bar__action-item").length})}function Mt(p){return p in E?E[p]:gt().classList.contains(p)}function Pt(p){E[p]||e(11,E[p]=!0,E)}function wt(p){(!(p in E)||E[p])&&e(11,E[p]=!1,E)}function vt(p,q){H[p]!=q&&(q===""||q==null?(delete H[p],e(12,H),e(20,G),e(4,m),e(9,g)):e(12,H[p]=q,H))}function X(){g&&(g.handleTargetScroll(),m==="short"&&e(0,h="isCollapsed"in g&&g.isCollapsed))}function zt(){return Ht}function gt(){return _}const kt=()=>m!=="short"&&m!=="fixed"&&g&&g.handleWindowResize(),jt=()=>C==null&&X();function Nt(p){st[p?"unshift":"push"](()=>{_=p,e(10,_)})}const Ft=()=>g&&g.handleNavigationClick();return s.$$set=p=>{t=L(L({},t),dt(p)),e(15,a=v(t,n)),"use"in p&&e(1,d=p.use),"class"in p&&e(2,f=p.class),"style"in p&&e(3,u=p.style),"variant"in p&&e(4,m=p.variant),"color"in p&&e(5,I=p.color),"collapsed"in p&&e(0,h=p.collapsed),"prominent"in p&&e(6,R=p.prominent),"dense"in p&&e(7,w=p.dense),"scrollTarget"in p&&e(8,C=p.scrollTarget),"$$scope"in p&&e(21,c=p.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&262352&&Y&&Y({variant:m,prominent:R,dense:w}),s.$$.dirty[0]&1049104&&G!==m&&g&&(e(20,G=m),g.destroy(),e(11,E={}),e(12,H={}),e(9,g=_t()),g.init()),s.$$.dirty[0]&528&&g&&m==="short"&&"setAlwaysCollapsed"in g&&g.setAlwaysCollapsed(P),s.$$.dirty[0]&524544&&k!==C&&(k&&k.removeEventListener("scroll",X),C&&C.addEventListener("scroll",X),e(19,k=C))},[h,d,f,u,m,I,R,w,C,g,_,E,H,r,X,a,zt,gt,Y,k,G,c,o,kt,jt,Nt,Ft]}class ue extends F{constructor(t){super(),V(this,t,ie,le,U,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}var ce=Lt({class:"mdc-top-app-bar__row",component:ee});function pe(s){let t,e,n,a,o,c;const r=s[9].default,i=$(r,s,s[8],null);let l=[{class:e=z({[s[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":s[2]==="start","mdc-top-app-bar__section--align-end":s[2]==="end"})},s[3]?{role:"toolbar"}:{},s[6]],d={};for(let f=0;f<l.length;f+=1)d=L(d,l[f]);return{c(){t=it("section"),i&&i.c(),this.h()},l(f){t=ut(f,"SECTION",{class:!0});var u=ct(t);i&&i.l(u),u.forEach(A),this.h()},h(){K(t,d)},m(f,u){T(f,t,u),i&&i.m(t,null),s[10](t),a=!0,o||(c=[Q(n=Dt.call(null,t,s[0])),Q(s[5].call(null,t))],o=!0)},p(f,[u]){i&&i.p&&(!a||u&256)&&x(i,r,f,f[8],a?et(r,f[8],u,null):tt(f[8]),null),K(t,d=pt(l,[(!a||u&6&&e!==(e=z({[f[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":f[2]==="start","mdc-top-app-bar__section--align-end":f[2]==="end"})))&&{class:e},u&8&&(f[3]?{role:"toolbar"}:{}),u&64&&f[6]])),n&&Ot(n.update)&&u&1&&n.update.call(null,f[0])},i(f){a||(b(i,f),a=!0)},o(f){S(i,f),a=!1},d(f){f&&A(t),i&&i.d(f),s[10](null),o=!1,It(c)}}}function fe(s,t,e){const n=["use","class","align","toolbar","getElement"];let a=v(t,n),{$$slots:o={},$$scope:c}=t;const r=mt(ft());let{use:i=[]}=t,{class:l=""}=t,{align:d="start"}=t,{toolbar:f=!1}=t,u;At("SMUI:icon-button:context",f?"top-app-bar:action":"top-app-bar:navigation"),At("SMUI:button:context",f?"top-app-bar:action":"top-app-bar:navigation");function m(){return u}function I(h){st[h?"unshift":"push"](()=>{u=h,e(4,u)})}return s.$$set=h=>{t=L(L({},t),dt(h)),e(6,a=v(t,n)),"use"in h&&e(0,i=h.use),"class"in h&&e(1,l=h.class),"align"in h&&e(2,d=h.align),"toolbar"in h&&e(3,f=h.toolbar),"$$scope"in h&&e(8,c=h.$$scope)},[i,l,d,f,u,r,a,m,c,o,I]}class de extends F{constructor(t){super(),V(this,t,fe,pe,U,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}Lt({class:"mdc-top-app-bar__title",component:se});function me(s){let t;const e=s[11].default,n=$(e,s,s[13],null);return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,o){n&&n.m(a,o),t=!0},p(a,o){n&&n.p&&(!t||o&8192)&&x(n,e,a,a[13],t?et(e,a[13],o,null):tt(a[13]),null)},i(a){t||(b(n,a),t=!0)},o(a){S(n,a),t=!1},d(a){n&&n.d(a)}}}function he(s){let t,e,n;const a=[{use:[s[6],...s[0]]},{class:z({[s[1]]:!0,[s[5]]:!0})},s[7]];var o=s[2];function c(r){let i={$$slots:{default:[me]},$$scope:{ctx:r}};for(let l=0;l<a.length;l+=1)i=L(i,a[l]);return{props:i}}return o&&(t=new o(c(s)),s[12](t)),{c(){t&&y(t.$$.fragment),e=Tt()},l(r){t&&D(t.$$.fragment,r),e=Tt()},m(r,i){t&&B(t,r,i),T(r,e,i),n=!0},p(r,[i]){const l=i&227?pt(a,[i&65&&{use:[r[6],...r[0]]},i&34&&{class:z({[r[1]]:!0,[r[5]]:!0})},i&128&&qt(r[7])]):{};if(i&8192&&(l.$$scope={dirty:i,ctx:r}),o!==(o=r[2])){if(t){Wt();const d=t;S(d.$$.fragment,1,0,()=>{O(d,1)}),Zt()}o?(t=new o(c(r)),r[12](t),y(t.$$.fragment),b(t.$$.fragment,1),B(t,e.parentNode,e)):t=null}else o&&t.$set(l)},i(r){n||(t&&b(t.$$.fragment,r),n=!0)},o(r){t&&S(t.$$.fragment,r),n=!1},d(r){s[12](null),r&&A(e),t&&O(t,r)}}}function _e(s,t,e){let n,a;const o=["use","class","topAppBar","component","getElement"];let c=v(t,o),r,i=Kt,l=()=>(i(),i=Jt(n,_=>e(10,r=_)),n);s.$$.on_destroy.push(()=>i());let{$$slots:d={},$$scope:f}=t;const u=mt(ft());let{use:m=[]}=t,{class:I=""}=t,{topAppBar:h}=t,P,{component:R=ne}=t;function w(){return P.getElement()}function C(_){st[_?"unshift":"push"](()=>{P=_,e(4,P)})}return s.$$set=_=>{t=L(L({},t),dt(_)),e(7,c=v(t,o)),"use"in _&&e(0,m=_.use),"class"in _&&e(1,I=_.class),"topAppBar"in _&&e(8,h=_.topAppBar),"component"in _&&e(2,R=_.component),"$$scope"in _&&e(13,f=_.$$scope)},s.$$.update=()=>{s.$$.dirty&256&&l(e(3,n=h&&h.getPropStore())),s.$$.dirty&1032&&e(5,a=(()=>!n||r.variant==="static"?"":r.variant==="short"?"mdc-top-app-bar--short-fixed-adjust":r.prominent&&r.dense?"mdc-top-app-bar--dense-prominent-fixed-adjust":r.prominent?"mdc-top-app-bar--prominent-fixed-adjust":r.dense?"mdc-top-app-bar--dense-fixed-adjust":"mdc-top-app-bar--fixed-adjust")())},[m,I,R,n,P,a,u,c,h,w,r,d,C,f]}class ge extends F{constructor(t){super(),V(this,t,_e,he,U,{use:0,class:1,topAppBar:8,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const be=de,Se=ge;function Ae(s){let t;return{c(){t=nt("public")},l(e){t=at(e,"public")},m(e,n){T(e,t,n)},d(e){e&&A(t)}}}function Te(s){let t;return{c(){t=nt("bug_report")},l(e){t=at(e,"bug_report")},m(e,n){T(e,t,n)},d(e){e&&A(t)}}}function Ce(s){let t;return{c(){t=nt("auto_fix_high")},l(e){t=at(e,"auto_fix_high")},m(e,n){T(e,t,n)},d(e){e&&A(t)}}}function Ee(s){let t;return{c(){t=nt("info")},l(e){t=at(e,"info")},m(e,n){T(e,t,n)},d(e){e&&A(t)}}}function ye(s){let t,e,n,a,o,c,r,i;return t=new W({props:{class:"material-icons","aria-label":"Geography",$$slots:{default:[Ae]},$$scope:{ctx:s}}}),t.$on("click",s[1]),n=new W({props:{class:"material-icons","aria-label":"Bestiary",$$slots:{default:[Te]},$$scope:{ctx:s}}}),n.$on("click",s[2]),o=new W({props:{class:"material-icons",disabled:!0,"aria-label":"Supernatural",$$slots:{default:[Ce]},$$scope:{ctx:s}}}),r=new W({props:{class:"material-icons",disabled:!0,"aria-label":"About",$$slots:{default:[Ee]},$$scope:{ctx:s}}}),{c(){y(t.$$.fragment),e=j(),y(n.$$.fragment),a=j(),y(o.$$.fragment),c=j(),y(r.$$.fragment)},l(l){D(t.$$.fragment,l),e=N(l),D(n.$$.fragment,l),a=N(l),D(o.$$.fragment,l),c=N(l),D(r.$$.fragment,l)},m(l,d){B(t,l,d),T(l,e,d),B(n,l,d),T(l,a,d),B(o,l,d),T(l,c,d),B(r,l,d),i=!0},p(l,d){const f={};d&16&&(f.$$scope={dirty:d,ctx:l}),t.$set(f);const u={};d&16&&(u.$$scope={dirty:d,ctx:l}),n.$set(u);const m={};d&16&&(m.$$scope={dirty:d,ctx:l}),o.$set(m);const I={};d&16&&(I.$$scope={dirty:d,ctx:l}),r.$set(I)},i(l){i||(b(t.$$.fragment,l),b(n.$$.fragment,l),b(o.$$.fragment,l),b(r.$$.fragment,l),i=!0)},o(l){S(t.$$.fragment,l),S(n.$$.fragment,l),S(o.$$.fragment,l),S(r.$$.fragment,l),i=!1},d(l){O(t,l),l&&A(e),O(n,l),l&&A(a),O(o,l),l&&A(c),O(r,l)}}}function Be(s){let t,e;return t=new be({props:{align:"end",$$slots:{default:[ye]},$$scope:{ctx:s}}}),{c(){y(t.$$.fragment)},l(n){D(t.$$.fragment,n)},m(n,a){B(t,n,a),e=!0},p(n,a){const o={};a&16&&(o.$$scope={dirty:a,ctx:n}),t.$set(o)},i(n){e||(b(t.$$.fragment,n),e=!0)},o(n){S(t.$$.fragment,n),e=!1},d(n){O(t,n)}}}function Oe(s){let t,e;return t=new ce({props:{$$slots:{default:[Be]},$$scope:{ctx:s}}}),{c(){y(t.$$.fragment)},l(n){D(t.$$.fragment,n)},m(n,a){B(t,n,a),e=!0},p(n,a){const o={};a&16&&(o.$$scope={dirty:a,ctx:n}),t.$set(o)},i(n){e||(b(t.$$.fragment,n),e=!0)},o(n){S(t.$$.fragment,n),e=!1},d(n){O(t,n)}}}function Ie(s){let t,e,n,a,o,c={style:"z-index: 999;",class:"navbar",variant:"static",dense:!0,$$slots:{default:[Oe]},$$scope:{ctx:s}};return e=new ue({props:c}),s[3](e),a=new Se({props:{topAppBar:s[0]}}),{c(){t=it("div"),y(e.$$.fragment),n=j(),y(a.$$.fragment)},l(r){t=ut(r,"DIV",{});var i=ct(t);D(e.$$.fragment,i),n=N(i),D(a.$$.fragment,i),i.forEach(A)},m(r,i){T(r,t,i),B(e,t,null),Qt(t,n),B(a,t,null),o=!0},p(r,[i]){const l={};i&16&&(l.$$scope={dirty:i,ctx:r}),e.$set(l);const d={};i&1&&(d.topAppBar=r[0]),a.$set(d)},i(r){o||(b(e.$$.fragment,r),b(a.$$.fragment,r),o=!0)},o(r){S(e.$$.fragment,r),S(a.$$.fragment,r),o=!1},d(r){r&&A(t),s[3](null),O(e),O(a)}}}function De(s,t,e){let n;const a=()=>{Et("/gazetteer/")},o=()=>{Et("/bestiary/")};function c(r){st[r?"unshift":"push"](()=>{n=r,e(0,n)})}return[n,a,o,c]}class Le extends F{constructor(t){super(),V(this,t,De,Ie,U,{})}}function Re(s){let t,e,n;t=new Le({});const a=s[1].default,o=$(a,s,s[0],null);return{c(){y(t.$$.fragment),e=j(),o&&o.c()},l(c){D(t.$$.fragment,c),e=N(c),o&&o.l(c)},m(c,r){B(t,c,r),T(c,e,r),o&&o.m(c,r),n=!0},p(c,[r]){o&&o.p&&(!n||r&1)&&x(o,a,c,c[0],n?et(a,c[0],r,null):tt(c[0]),null)},i(c){n||(b(t.$$.fragment,c),b(o,c),n=!0)},o(c){S(t.$$.fragment,c),S(o,c),n=!1},d(c){O(t,c),c&&A(e),o&&o.d(c)}}}function He(s,t,e){let{$$slots:n={},$$scope:a}=t;return s.$$set=o=>{"$$scope"in o&&e(0,a=o.$$scope)},[a,n]}class je extends F{constructor(t){super(),V(this,t,He,Re,U,{})}}export{je as default};
