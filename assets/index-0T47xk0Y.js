(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const g of f)if(g.type==="childList")for(const w of g.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&c(w)}).observe(document,{childList:!0,subtree:!0});function o(f){const g={};return f.integrity&&(g.integrity=f.integrity),f.referrerPolicy&&(g.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?g.credentials="include":f.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function c(f){if(f.ep)return;f.ep=!0;const g=o(f);fetch(f.href,g)}})();function k1(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var io={exports:{}},$l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function B1(){if(D0)return $l;D0=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function o(c,f,g){var w=null;if(g!==void 0&&(w=""+g),f.key!==void 0&&(w=""+f.key),"key"in f){g={};for(var _ in f)_!=="key"&&(g[_]=f[_])}else g=f;return f=g.ref,{$$typeof:l,type:c,key:w,ref:f!==void 0?f:null,props:g}}return $l.Fragment=u,$l.jsx=o,$l.jsxs=o,$l}var _0;function Y1(){return _0||(_0=1,io.exports=B1()),io.exports}var p=Y1(),ro={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function G1(){if(R0)return le;R0=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),w=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),U=Symbol.iterator;function k(x){return x===null||typeof x!="object"?null:(x=U&&x[U]||x["@@iterator"],typeof x=="function"?x:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,W={};function pe(x,j,H){this.props=x,this.context=j,this.refs=W,this.updater=H||B}pe.prototype.isReactComponent={},pe.prototype.setState=function(x,j){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,j,"setState")},pe.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function re(){}re.prototype=pe.prototype;function ne(x,j,H){this.props=x,this.context=j,this.refs=W,this.updater=H||B}var ee=ne.prototype=new re;ee.constructor=ne,Y(ee,pe.prototype),ee.isPureReactComponent=!0;var ae=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},X=Object.prototype.hasOwnProperty;function V(x,j,H,q,O,Q){return H=Q.ref,{$$typeof:l,type:x,key:j,ref:H!==void 0?H:null,props:Q}}function be(x,j){return V(x.type,j,void 0,void 0,void 0,x.props)}function De(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function Fe(x){var j={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(H){return j[H]})}var $e=/\/+/g;function je(x,j){return typeof x=="object"&&x!==null&&x.key!=null?Fe(""+x.key):j.toString(36)}function wt(){}function At(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(wt,wt):(x.status="pending",x.then(function(j){x.status==="pending"&&(x.status="fulfilled",x.value=j)},function(j){x.status==="pending"&&(x.status="rejected",x.reason=j)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function qe(x,j,H,q,O){var Q=typeof x;(Q==="undefined"||Q==="boolean")&&(x=null);var Z=!1;if(x===null)Z=!0;else switch(Q){case"bigint":case"string":case"number":Z=!0;break;case"object":switch(x.$$typeof){case l:case u:Z=!0;break;case E:return Z=x._init,qe(Z(x._payload),j,H,q,O)}}if(Z)return O=O(x),Z=q===""?"."+je(x,0):q,ae(O)?(H="",Z!=null&&(H=Z.replace($e,"$&/")+"/"),qe(O,j,H,"",function(tt){return tt})):O!=null&&(De(O)&&(O=be(O,H+(O.key==null||x&&x.key===O.key?"":(""+O.key).replace($e,"$&/")+"/")+Z)),j.push(O)),1;Z=0;var Ce=q===""?".":q+":";if(ae(x))for(var ge=0;ge<x.length;ge++)q=x[ge],Q=Ce+je(q,ge),Z+=qe(q,j,H,Q,O);else if(ge=k(x),typeof ge=="function")for(x=ge.call(x),ge=0;!(q=x.next()).done;)q=q.value,Q=Ce+je(q,ge++),Z+=qe(q,j,H,Q,O);else if(Q==="object"){if(typeof x.then=="function")return qe(At(x),j,H,q,O);throw j=String(x),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return Z}function R(x,j,H){if(x==null)return x;var q=[],O=0;return qe(x,q,"","",function(Q){return j.call(H,Q,O++)}),q}function L(x){if(x._status===-1){var j=x._result;j=j(),j.then(function(H){(x._status===0||x._status===-1)&&(x._status=1,x._result=H)},function(H){(x._status===0||x._status===-1)&&(x._status=2,x._result=H)}),x._status===-1&&(x._status=0,x._result=j)}if(x._status===1)return x._result.default;throw x._result}var F=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function ce(){}return le.Children={map:R,forEach:function(x,j,H){R(x,function(){j.apply(this,arguments)},H)},count:function(x){var j=0;return R(x,function(){j++}),j},toArray:function(x){return R(x,function(j){return j})||[]},only:function(x){if(!De(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},le.Component=pe,le.Fragment=o,le.Profiler=f,le.PureComponent=ne,le.StrictMode=c,le.Suspense=S,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,le.__COMPILER_RUNTIME={__proto__:null,c:function(x){return G.H.useMemoCache(x)}},le.cache=function(x){return function(){return x.apply(null,arguments)}},le.cloneElement=function(x,j,H){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var q=Y({},x.props),O=x.key,Q=void 0;if(j!=null)for(Z in j.ref!==void 0&&(Q=void 0),j.key!==void 0&&(O=""+j.key),j)!X.call(j,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&j.ref===void 0||(q[Z]=j[Z]);var Z=arguments.length-2;if(Z===1)q.children=H;else if(1<Z){for(var Ce=Array(Z),ge=0;ge<Z;ge++)Ce[ge]=arguments[ge+2];q.children=Ce}return V(x.type,O,void 0,void 0,Q,q)},le.createContext=function(x){return x={$$typeof:w,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:g,_context:x},x},le.createElement=function(x,j,H){var q,O={},Q=null;if(j!=null)for(q in j.key!==void 0&&(Q=""+j.key),j)X.call(j,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(O[q]=j[q]);var Z=arguments.length-2;if(Z===1)O.children=H;else if(1<Z){for(var Ce=Array(Z),ge=0;ge<Z;ge++)Ce[ge]=arguments[ge+2];O.children=Ce}if(x&&x.defaultProps)for(q in Z=x.defaultProps,Z)O[q]===void 0&&(O[q]=Z[q]);return V(x,Q,void 0,void 0,null,O)},le.createRef=function(){return{current:null}},le.forwardRef=function(x){return{$$typeof:_,render:x}},le.isValidElement=De,le.lazy=function(x){return{$$typeof:E,_payload:{_status:-1,_result:x},_init:L}},le.memo=function(x,j){return{$$typeof:y,type:x,compare:j===void 0?null:j}},le.startTransition=function(x){var j=G.T,H={};G.T=H;try{var q=x(),O=G.S;O!==null&&O(H,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(ce,F)}catch(Q){F(Q)}finally{G.T=j}},le.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},le.use=function(x){return G.H.use(x)},le.useActionState=function(x,j,H){return G.H.useActionState(x,j,H)},le.useCallback=function(x,j){return G.H.useCallback(x,j)},le.useContext=function(x){return G.H.useContext(x)},le.useDebugValue=function(){},le.useDeferredValue=function(x,j){return G.H.useDeferredValue(x,j)},le.useEffect=function(x,j,H){var q=G.H;if(typeof H=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return q.useEffect(x,j)},le.useId=function(){return G.H.useId()},le.useImperativeHandle=function(x,j,H){return G.H.useImperativeHandle(x,j,H)},le.useInsertionEffect=function(x,j){return G.H.useInsertionEffect(x,j)},le.useLayoutEffect=function(x,j){return G.H.useLayoutEffect(x,j)},le.useMemo=function(x,j){return G.H.useMemo(x,j)},le.useOptimistic=function(x,j){return G.H.useOptimistic(x,j)},le.useReducer=function(x,j,H){return G.H.useReducer(x,j,H)},le.useRef=function(x){return G.H.useRef(x)},le.useState=function(x){return G.H.useState(x)},le.useSyncExternalStore=function(x,j,H){return G.H.useSyncExternalStore(x,j,H)},le.useTransition=function(){return G.H.useTransition()},le.version="19.1.0",le}var z0;function To(){return z0||(z0=1,ro.exports=G1()),ro.exports}var Be=To();const nn=k1(Be);var uo={exports:{}},Jl={},co={exports:{}},oo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function H1(){return N0||(N0=1,function(l){function u(R,L){var F=R.length;R.push(L);e:for(;0<F;){var ce=F-1>>>1,x=R[ce];if(0<f(x,L))R[ce]=L,R[F]=x,F=ce;else break e}}function o(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var L=R[0],F=R.pop();if(F!==L){R[0]=F;e:for(var ce=0,x=R.length,j=x>>>1;ce<j;){var H=2*(ce+1)-1,q=R[H],O=H+1,Q=R[O];if(0>f(q,F))O<x&&0>f(Q,q)?(R[ce]=Q,R[O]=F,ce=O):(R[ce]=q,R[H]=F,ce=H);else if(O<x&&0>f(Q,F))R[ce]=Q,R[O]=F,ce=O;else break e}}return L}function f(R,L){var F=R.sortIndex-L.sortIndex;return F!==0?F:R.id-L.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;l.unstable_now=function(){return g.now()}}else{var w=Date,_=w.now();l.unstable_now=function(){return w.now()-_}}var S=[],y=[],E=1,U=null,k=3,B=!1,Y=!1,W=!1,pe=!1,re=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function ae(R){for(var L=o(y);L!==null;){if(L.callback===null)c(y);else if(L.startTime<=R)c(y),L.sortIndex=L.expirationTime,u(S,L);else break;L=o(y)}}function G(R){if(W=!1,ae(R),!Y)if(o(S)!==null)Y=!0,X||(X=!0,je());else{var L=o(y);L!==null&&qe(G,L.startTime-R)}}var X=!1,V=-1,be=5,De=-1;function Fe(){return pe?!0:!(l.unstable_now()-De<be)}function $e(){if(pe=!1,X){var R=l.unstable_now();De=R;var L=!0;try{e:{Y=!1,W&&(W=!1,ne(V),V=-1),B=!0;var F=k;try{t:{for(ae(R),U=o(S);U!==null&&!(U.expirationTime>R&&Fe());){var ce=U.callback;if(typeof ce=="function"){U.callback=null,k=U.priorityLevel;var x=ce(U.expirationTime<=R);if(R=l.unstable_now(),typeof x=="function"){U.callback=x,ae(R),L=!0;break t}U===o(S)&&c(S),ae(R)}else c(S);U=o(S)}if(U!==null)L=!0;else{var j=o(y);j!==null&&qe(G,j.startTime-R),L=!1}}break e}finally{U=null,k=F,B=!1}L=void 0}}finally{L?je():X=!1}}}var je;if(typeof ee=="function")je=function(){ee($e)};else if(typeof MessageChannel<"u"){var wt=new MessageChannel,At=wt.port2;wt.port1.onmessage=$e,je=function(){At.postMessage(null)}}else je=function(){re($e,0)};function qe(R,L){V=re(function(){R(l.unstable_now())},L)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(R){R.callback=null},l.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):be=0<R?Math.floor(1e3/R):5},l.unstable_getCurrentPriorityLevel=function(){return k},l.unstable_next=function(R){switch(k){case 1:case 2:case 3:var L=3;break;default:L=k}var F=k;k=L;try{return R()}finally{k=F}},l.unstable_requestPaint=function(){pe=!0},l.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=k;k=R;try{return L()}finally{k=F}},l.unstable_scheduleCallback=function(R,L,F){var ce=l.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ce+F:ce):F=ce,R){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=F+x,R={id:E++,callback:L,priorityLevel:R,startTime:F,expirationTime:x,sortIndex:-1},F>ce?(R.sortIndex=F,u(y,R),o(S)===null&&R===o(y)&&(W?(ne(V),V=-1):W=!0,qe(G,F-ce))):(R.sortIndex=x,u(S,R),Y||B||(Y=!0,X||(X=!0,je()))),R},l.unstable_shouldYield=Fe,l.unstable_wrapCallback=function(R){var L=k;return function(){var F=k;k=L;try{return R.apply(this,arguments)}finally{k=F}}}}(oo)),oo}var O0;function q1(){return O0||(O0=1,co.exports=H1()),co.exports}var so={exports:{}},lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function L1(){if(M0)return lt;M0=1;var l=To();function u(S){var y="https://react.dev/errors/"+S;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+S+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(u(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},f=Symbol.for("react.portal");function g(S,y,E){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:U==null?null:""+U,children:S,containerInfo:y,implementation:E}}var w=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(S,y){if(S==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,lt.createPortal=function(S,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(u(299));return g(S,y,null,E)},lt.flushSync=function(S){var y=w.T,E=c.p;try{if(w.T=null,c.p=2,S)return S()}finally{w.T=y,c.p=E,c.d.f()}},lt.preconnect=function(S,y){typeof S=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,c.d.C(S,y))},lt.prefetchDNS=function(S){typeof S=="string"&&c.d.D(S)},lt.preinit=function(S,y){if(typeof S=="string"&&y&&typeof y.as=="string"){var E=y.as,U=_(E,y.crossOrigin),k=typeof y.integrity=="string"?y.integrity:void 0,B=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?c.d.S(S,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:U,integrity:k,fetchPriority:B}):E==="script"&&c.d.X(S,{crossOrigin:U,integrity:k,fetchPriority:B,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},lt.preinitModule=function(S,y){if(typeof S=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=_(y.as,y.crossOrigin);c.d.M(S,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&c.d.M(S)},lt.preload=function(S,y){if(typeof S=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,U=_(E,y.crossOrigin);c.d.L(S,E,{crossOrigin:U,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},lt.preloadModule=function(S,y){if(typeof S=="string")if(y){var E=_(y.as,y.crossOrigin);c.d.m(S,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else c.d.m(S)},lt.requestFormReset=function(S){c.d.r(S)},lt.unstable_batchedUpdates=function(S,y){return S(y)},lt.useFormState=function(S,y,E){return w.H.useFormState(S,y,E)},lt.useFormStatus=function(){return w.H.useHostTransitionStatus()},lt.version="19.1.0",lt}var j0;function X1(){if(j0)return so.exports;j0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),so.exports=L1(),so.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function Q1(){if(U0)return Jl;U0=1;var l=q1(),u=To(),o=X1();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function w(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(g(e)!==e)throw Error(c(188))}function S(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return _(i),e;if(r===n)return _(i),t;r=r.sibling}throw Error(c(188))}if(a.return!==n.return)a=i,n=r;else{for(var s=!1,d=i.child;d;){if(d===a){s=!0,a=i,n=r;break}if(d===n){s=!0,n=i,a=r;break}d=d.sibling}if(!s){for(d=r.child;d;){if(d===a){s=!0,a=r,n=i;break}if(d===n){s=!0,n=r,a=i;break}d=d.sibling}if(!s)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,U=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),re=Symbol.for("react.provider"),ne=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),De=Symbol.for("react.activity"),Fe=Symbol.for("react.memo_cache_sentinel"),$e=Symbol.iterator;function je(e){return e===null||typeof e!="object"?null:(e=$e&&e[$e]||e["@@iterator"],typeof e=="function"?e:null)}var wt=Symbol.for("react.client.reference");function At(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===wt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case pe:return"Profiler";case W:return"StrictMode";case G:return"Suspense";case X:return"SuspenseList";case De:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case ee:return(e.displayName||"Context")+".Provider";case ne:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return t=e.displayName||null,t!==null?t:At(e.type)||"Memo";case be:t=e._payload,e=e._init;try{return At(e(t))}catch{}}return null}var qe=Array.isArray,R=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},ce=[],x=-1;function j(e){return{current:e}}function H(e){0>x||(e.current=ce[x],ce[x]=null,x--)}function q(e,t){x++,ce[x]=e.current,e.current=t}var O=j(null),Q=j(null),Z=j(null),Ce=j(null);function ge(e,t){switch(q(Z,t),q(Q,e),q(O,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?t0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=t0(t),e=a0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(O),q(O,e)}function tt(){H(O),H(Q),H(Z)}function Ua(e){e.memoizedState!==null&&q(Ce,e);var t=O.current,a=a0(t,e.type);t!==a&&(q(Q,e),q(O,a))}function Zt(e){Q.current===e&&(H(O),H(Q)),Ce.current===e&&(H(Ce),Zl._currentValue=F)}var Et=Object.prototype.hasOwnProperty,Zr=l.unstable_scheduleCallback,Vr=l.unstable_cancelCallback,hh=l.unstable_shouldYield,gh=l.unstable_requestPaint,Gt=l.unstable_now,xh=l.unstable_getCurrentPriorityLevel,jo=l.unstable_ImmediatePriority,Uo=l.unstable_UserBlockingPriority,ii=l.unstable_NormalPriority,mh=l.unstable_LowPriority,ko=l.unstable_IdlePriority,yh=l.log,bh=l.unstable_setDisableYieldValue,el=null,ft=null;function oa(e){if(typeof yh=="function"&&bh(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(el,e)}catch{}}var pt=Math.clz32?Math.clz32:wh,vh=Math.log,Sh=Math.LN2;function wh(e){return e>>>=0,e===0?32:31-(vh(e)/Sh|0)|0}var ri=256,ui=4194304;function ka(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ci(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var d=n&134217727;return d!==0?(n=d&~r,n!==0?i=ka(n):(s&=d,s!==0?i=ka(s):a||(a=d&~e,a!==0&&(i=ka(a))))):(d=n&~r,d!==0?i=ka(d):s!==0?i=ka(s):a||(a=n&~e,a!==0&&(i=ka(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function tl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ah(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bo(){var e=ri;return ri<<=1,(ri&4194048)===0&&(ri=256),e}function Yo(){var e=ui;return ui<<=1,(ui&62914560)===0&&(ui=4194304),e}function Ir(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function al(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Eh(e,t,a,n,i,r){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,h=e.expirationTimes,A=e.hiddenUpdates;for(a=s&~a;0<a;){var z=31-pt(a),M=1<<z;d[z]=0,h[z]=-1;var C=A[z];if(C!==null)for(A[z]=null,z=0;z<C.length;z++){var T=C[z];T!==null&&(T.lane&=-536870913)}a&=~M}n!==0&&Go(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function Go(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-pt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Ho(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-pt(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Pr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qo(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:S0(e.type))}function Ch(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}var sa=Math.random().toString(36).slice(2),at="__reactFiber$"+sa,rt="__reactProps$"+sa,ln="__reactContainer$"+sa,$r="__reactEvents$"+sa,Th="__reactListeners$"+sa,Dh="__reactHandles$"+sa,Lo="__reactResources$"+sa,nl="__reactMarker$"+sa;function Jr(e){delete e[at],delete e[rt],delete e[$r],delete e[Th],delete e[Dh]}function rn(e){var t=e[at];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ln]||a[at]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=r0(e);e!==null;){if(a=e[at])return a;e=r0(e)}return t}e=a,a=e.parentNode}return null}function un(e){if(e=e[at]||e[ln]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ll(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function cn(e){var t=e[Lo];return t||(t=e[Lo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[nl]=!0}var Xo=new Set,Qo={};function Ba(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(Qo[e]=t,e=0;e<t.length;e++)Xo.add(t[e])}var _h=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ko={},Zo={};function Rh(e){return Et.call(Zo,e)?!0:Et.call(Ko,e)?!1:_h.test(e)?Zo[e]=!0:(Ko[e]=!0,!1)}function oi(e,t,a){if(Rh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function si(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Vt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var Wr,Vo;function sn(e){if(Wr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Wr=t&&t[1]||"",Vo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wr+e+Vo}var eu=!1;function tu(e,t){if(!e||eu)return"";eu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(T){var C=T}Reflect.construct(e,[],M)}else{try{M.call()}catch(T){C=T}e.call(M.prototype)}}else{try{throw Error()}catch(T){C=T}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(T){if(T&&C&&typeof T.stack=="string")return[T.stack,C.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),s=r[0],d=r[1];if(s&&d){var h=s.split(`
`),A=d.split(`
`);for(i=n=0;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;for(;i<A.length&&!A[i].includes("DetermineComponentFrameRoot");)i++;if(n===h.length||i===A.length)for(n=h.length-1,i=A.length-1;1<=n&&0<=i&&h[n]!==A[i];)i--;for(;1<=n&&0<=i;n--,i--)if(h[n]!==A[i]){if(n!==1||i!==1)do if(n--,i--,0>i||h[n]!==A[i]){var z=`
`+h[n].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=n&&0<=i);break}}}finally{eu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?sn(a):""}function zh(e){switch(e.tag){case 26:case 27:case 5:return sn(e.type);case 16:return sn("Lazy");case 13:return sn("Suspense");case 19:return sn("SuspenseList");case 0:case 15:return tu(e.type,!1);case 11:return tu(e.type.render,!1);case 1:return tu(e.type,!0);case 31:return sn("Activity");default:return""}}function Io(e){try{var t="";do t+=zh(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Po(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Nh(e){var t=Po(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function di(e){e._valueTracker||(e._valueTracker=Nh(e))}function Fo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Po(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oh=/[\n"\\]/g;function Tt(e){return e.replace(Oh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function au(e,t,a,n,i,r,s,d){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ct(t)):e.value!==""+Ct(t)&&(e.value=""+Ct(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?nu(e,s,Ct(t)):a!=null?nu(e,s,Ct(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+Ct(d):e.removeAttribute("name")}function $o(e,t,a,n,i,r,s,d){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+Ct(a):"",t=t!=null?""+Ct(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=d?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function nu(e,t,a){t==="number"&&fi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function dn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Ct(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jo(e,t,a){if(t!=null&&(t=""+Ct(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ct(a):""}function Wo(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(qe(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Ct(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function fn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Mh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function es(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Mh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function ts(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&es(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&es(e,r,t[r])}function lu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pi(e){return Uh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var iu=null;function ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,hn=null;function as(e){var t=un(e);if(t&&(e=t.stateNode)){var a=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(au(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Tt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[rt]||null;if(!i)throw Error(c(90));au(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Fo(n)}break e;case"textarea":Jo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&dn(e,!!a.multiple,t,!1)}}}var uu=!1;function ns(e,t,a){if(uu)return e(t,a);uu=!0;try{var n=e(t);return n}finally{if(uu=!1,(pn!==null||hn!==null)&&(Ji(),pn&&(t=pn,e=hn,hn=pn=null,as(t),e)))for(t=0;t<e.length;t++)as(e[t])}}function il(e,t){var a=e.stateNode;if(a===null)return null;var n=a[rt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=!1;if(It)try{var rl={};Object.defineProperty(rl,"passive",{get:function(){cu=!0}}),window.addEventListener("test",rl,rl),window.removeEventListener("test",rl,rl)}catch{cu=!1}var da=null,ou=null,hi=null;function ls(){if(hi)return hi;var e,t=ou,a=t.length,n,i="value"in da?da.value:da.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===i[r-n];n++);return hi=i.slice(e,1<n?1-n:void 0)}function gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function is(){return!1}function ut(e){function t(a,n,i,r,s){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(r):r[d]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?xi:is,this.isPropagationStopped=is,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=ut(Ya),ul=E({},Ya,{view:0,detail:0}),kh=ut(ul),su,du,cl,yi=E({},ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cl&&(cl&&e.type==="mousemove"?(su=e.screenX-cl.screenX,du=e.screenY-cl.screenY):du=su=0,cl=e),su)},movementY:function(e){return"movementY"in e?e.movementY:du}}),rs=ut(yi),Bh=E({},yi,{dataTransfer:0}),Yh=ut(Bh),Gh=E({},ul,{relatedTarget:0}),fu=ut(Gh),Hh=E({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),qh=ut(Hh),Lh=E({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xh=ut(Lh),Qh=E({},Ya,{data:0}),us=ut(Qh),Kh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ih(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vh[e])?!!t[e]:!1}function pu(){return Ih}var Ph=E({},ul,{key:function(e){if(e.key){var t=Kh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(e){return e.type==="keypress"?gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fh=ut(Ph),$h=E({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cs=ut($h),Jh=E({},ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),Wh=ut(Jh),eg=E({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),tg=ut(eg),ag=E({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ng=ut(ag),lg=E({},Ya,{newState:0,oldState:0}),ig=ut(lg),rg=[9,13,27,32],hu=It&&"CompositionEvent"in window,ol=null;It&&"documentMode"in document&&(ol=document.documentMode);var ug=It&&"TextEvent"in window&&!ol,os=It&&(!hu||ol&&8<ol&&11>=ol),ss=" ",ds=!1;function fs(e,t){switch(e){case"keyup":return rg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ps(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function cg(e,t){switch(e){case"compositionend":return ps(t);case"keypress":return t.which!==32?null:(ds=!0,ss);case"textInput":return e=t.data,e===ss&&ds?null:e;default:return null}}function og(e,t){if(gn)return e==="compositionend"||!hu&&fs(e,t)?(e=ls(),hi=ou=da=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return os&&t.locale!=="ko"?null:t.data;default:return null}}var sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sg[e.type]:t==="textarea"}function gs(e,t,a,n){pn?hn?hn.push(n):hn=[n]:pn=n,t=lr(t,"onChange"),0<t.length&&(a=new mi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var sl=null,dl=null;function dg(e){Ff(e,0)}function bi(e){var t=ll(e);if(Fo(t))return e}function xs(e,t){if(e==="change")return t}var ms=!1;if(It){var gu;if(It){var xu="oninput"in document;if(!xu){var ys=document.createElement("div");ys.setAttribute("oninput","return;"),xu=typeof ys.oninput=="function"}gu=xu}else gu=!1;ms=gu&&(!document.documentMode||9<document.documentMode)}function bs(){sl&&(sl.detachEvent("onpropertychange",vs),dl=sl=null)}function vs(e){if(e.propertyName==="value"&&bi(dl)){var t=[];gs(t,dl,e,ru(e)),ns(dg,t)}}function fg(e,t,a){e==="focusin"?(bs(),sl=t,dl=a,sl.attachEvent("onpropertychange",vs)):e==="focusout"&&bs()}function pg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(dl)}function hg(e,t){if(e==="click")return bi(t)}function gg(e,t){if(e==="input"||e==="change")return bi(t)}function xg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:xg;function fl(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Et.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function Ss(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ws(e,t){var a=Ss(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ss(a)}}function As(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?As(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Es(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=fi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=fi(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mg=It&&"documentMode"in document&&11>=document.documentMode,xn=null,yu=null,pl=null,bu=!1;function Cs(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||xn==null||xn!==fi(n)||(n=xn,"selectionStart"in n&&mu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),pl&&fl(pl,n)||(pl=n,n=lr(yu,"onSelect"),0<n.length&&(t=new mi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=xn)))}function Ga(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var mn={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},vu={},Ts={};It&&(Ts=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function Ha(e){if(vu[e])return vu[e];if(!mn[e])return e;var t=mn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ts)return vu[e]=t[a];return e}var Ds=Ha("animationend"),_s=Ha("animationiteration"),Rs=Ha("animationstart"),yg=Ha("transitionrun"),bg=Ha("transitionstart"),vg=Ha("transitioncancel"),zs=Ha("transitionend"),Ns=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function Ut(e,t){Ns.set(e,t),Ba(t,[e])}var Os=new WeakMap;function Dt(e,t){if(typeof e=="object"&&e!==null){var a=Os.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Io(t)},Os.set(e,t),t)}return{value:e,source:t,stack:Io(t)}}var _t=[],yn=0,wu=0;function vi(){for(var e=yn,t=wu=yn=0;t<e;){var a=_t[t];_t[t++]=null;var n=_t[t];_t[t++]=null;var i=_t[t];_t[t++]=null;var r=_t[t];if(_t[t++]=null,n!==null&&i!==null){var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}r!==0&&Ms(a,i,r)}}function Si(e,t,a,n){_t[yn++]=e,_t[yn++]=t,_t[yn++]=a,_t[yn++]=n,wu|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Au(e,t,a,n){return Si(e,t,a,n),wi(e)}function bn(e,t){return Si(e,null,null,t),wi(e)}function Ms(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-pt(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function wi(e){if(50<Yl)throw Yl=0,Rc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var vn={};function Sg(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,a,n){return new Sg(e,t,a,n)}function Eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pt(e,t){var a=e.alternate;return a===null?(a=gt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function js(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ai(e,t,a,n,i,r){var s=0;if(n=e,typeof e=="function")Eu(e)&&(s=1);else if(typeof e=="string")s=A1(e,a,O.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case De:return e=gt(31,a,t,i),e.elementType=De,e.lanes=r,e;case Y:return qa(a.children,i,r,t);case W:s=8,i|=24;break;case pe:return e=gt(12,a,t,i|2),e.elementType=pe,e.lanes=r,e;case G:return e=gt(13,a,t,i),e.elementType=G,e.lanes=r,e;case X:return e=gt(19,a,t,i),e.elementType=X,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case re:case ee:s=10;break e;case ne:s=9;break e;case ae:s=11;break e;case V:s=14;break e;case be:s=16,n=null;break e}s=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=gt(s,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function qa(e,t,a,n){return e=gt(7,e,n,t),e.lanes=a,e}function Cu(e,t,a){return e=gt(6,e,null,t),e.lanes=a,e}function Tu(e,t,a){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Sn=[],wn=0,Ei=null,Ci=0,Rt=[],zt=0,La=null,Ft=1,$t="";function Xa(e,t){Sn[wn++]=Ci,Sn[wn++]=Ei,Ei=e,Ci=t}function Us(e,t,a){Rt[zt++]=Ft,Rt[zt++]=$t,Rt[zt++]=La,La=e;var n=Ft;e=$t;var i=32-pt(n)-1;n&=~(1<<i),a+=1;var r=32-pt(t)+i;if(30<r){var s=i-i%5;r=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Ft=1<<32-pt(t)+i|a<<i|n,$t=r+e}else Ft=1<<r|a<<i|n,$t=e}function Du(e){e.return!==null&&(Xa(e,1),Us(e,1,0))}function _u(e){for(;e===Ei;)Ei=Sn[--wn],Sn[wn]=null,Ci=Sn[--wn],Sn[wn]=null;for(;e===La;)La=Rt[--zt],Rt[zt]=null,$t=Rt[--zt],Rt[zt]=null,Ft=Rt[--zt],Rt[zt]=null}var it=null,Oe=null,me=!1,Qa=null,Ht=!1,Ru=Error(c(519));function Ka(e){var t=Error(c(418,""));throw xl(Dt(t,e)),Ru}function ks(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[at]=e,t[rt]=n,a){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(a=0;a<Hl.length;a++)de(Hl[a],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),$o(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),di(t);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Wo(t,n.value,n.defaultValue,n.children),di(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||e0(t.textContent,a)?(n.popover!=null&&(de("beforetoggle",t),de("toggle",t)),n.onScroll!=null&&de("scroll",t),n.onScrollEnd!=null&&de("scrollend",t),n.onClick!=null&&(t.onclick=ir),t=!0):t=!1,t||Ka(e)}function Bs(e){for(it=e.return;it;)switch(it.tag){case 5:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:it=it.return}}function hl(e){if(e!==it)return!1;if(!me)return Bs(e),me=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Kc(e.type,e.memoizedProps)),a=!a),a&&Oe&&Ka(e),Bs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Oe=Bt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Oe=null}}else t===27?(t=Oe,Da(e.type)?(e=Pc,Pc=null,Oe=e):Oe=t):Oe=it?Bt(e.stateNode.nextSibling):null;return!0}function gl(){Oe=it=null,me=!1}function Ys(){var e=Qa;return e!==null&&(st===null?st=e:st.push.apply(st,e),Qa=null),e}function xl(e){Qa===null?Qa=[e]:Qa.push(e)}var zu=j(null),Za=null,Jt=null;function fa(e,t,a){q(zu,t._currentValue),t._currentValue=a}function Wt(e){e._currentValue=zu.current,H(zu)}function Nu(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Ou(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var s=i.child;r=r.firstContext;e:for(;r!==null;){var d=r;r=i;for(var h=0;h<t.length;h++)if(d.context===t[h]){r.lanes|=a,d=r.alternate,d!==null&&(d.lanes|=a),Nu(r.return,a,e),n||(s=null);break e}r=d.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(c(341));s.lanes|=a,r=s.alternate,r!==null&&(r.lanes|=a),Nu(s,a,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function ml(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var d=i.type;ht(i.pendingProps.value,s.value)||(e!==null?e.push(d):e=[d])}}else if(i===Ce.current){if(s=i.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Zl):e=[Zl])}i=i.return}e!==null&&Ou(t,e,a,n),t.flags|=262144}function Ti(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Va(e){Za=e,Jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nt(e){return Gs(Za,e)}function Di(e,t){return Za===null&&Va(e),Gs(e,t)}function Gs(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Jt===null){if(e===null)throw Error(c(308));Jt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Jt=Jt.next=t;return a}var wg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Ag=l.unstable_scheduleCallback,Eg=l.unstable_NormalPriority,Le={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new wg,data:new Map,refCount:0}}function yl(e){e.refCount--,e.refCount===0&&Ag(Eg,function(){e.controller.abort()})}var bl=null,ju=0,An=0,En=null;function Cg(e,t){if(bl===null){var a=bl=[];ju=0,An=kc(),En={status:"pending",value:void 0,then:function(n){a.push(n)}}}return ju++,t.then(Hs,Hs),t}function Hs(){if(--ju===0&&bl!==null){En!==null&&(En.status="fulfilled");var e=bl;bl=null,An=0,En=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Tg(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var qs=R.S;R.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Cg(e,t),qs!==null&&qs(e,t)};var Ia=j(null);function Uu(){var e=Ia.current;return e!==null?e:_e.pooledCache}function _i(e,t){t===null?q(Ia,Ia.current):q(Ia,t.pool)}function Ls(){var e=Uu();return e===null?null:{parent:Le._currentValue,pool:e}}var vl=Error(c(460)),Xs=Error(c(474)),Ri=Error(c(542)),ku={then:function(){}};function Qs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zi(){}function Ks(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(zi,zi),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vs(e),e;default:if(typeof t.status=="string")t.then(zi,zi);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vs(e),e}throw Sl=t,vl}}var Sl=null;function Zs(){if(Sl===null)throw Error(c(459));var e=Sl;return Sl=null,e}function Vs(e){if(e===vl||e===Ri)throw Error(c(483))}var pa=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ve&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=wi(e),Ms(e,null,a),t}return Si(e,n,t,a),wi(e)}function wl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Ho(e,a)}}function Gu(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=s:r=r.next=s,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Hu=!1;function Al(){if(Hu){var e=En;if(e!==null)throw e}}function El(e,t,a,n){Hu=!1;var i=e.updateQueue;pa=!1;var r=i.firstBaseUpdate,s=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var h=d,A=h.next;h.next=null,s===null?r=A:s.next=A,s=h;var z=e.alternate;z!==null&&(z=z.updateQueue,d=z.lastBaseUpdate,d!==s&&(d===null?z.firstBaseUpdate=A:d.next=A,z.lastBaseUpdate=h))}if(r!==null){var M=i.baseState;s=0,z=A=h=null,d=r;do{var C=d.lane&-536870913,T=C!==d.lane;if(T?(he&C)===C:(n&C)===C){C!==0&&C===An&&(Hu=!0),z!==null&&(z=z.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var te=e,$=d;C=t;var Ee=a;switch($.tag){case 1:if(te=$.payload,typeof te=="function"){M=te.call(Ee,M,C);break e}M=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=$.payload,C=typeof te=="function"?te.call(Ee,M,C):te,C==null)break e;M=E({},M,C);break e;case 2:pa=!0}}C=d.callback,C!==null&&(e.flags|=64,T&&(e.flags|=8192),T=i.callbacks,T===null?i.callbacks=[C]:T.push(C))}else T={lane:C,tag:d.tag,payload:d.payload,callback:d.callback,next:null},z===null?(A=z=T,h=M):z=z.next=T,s|=C;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;T=d,d=T.next,T.next=null,i.lastBaseUpdate=T,i.shared.pending=null}}while(!0);z===null&&(h=M),i.baseState=h,i.firstBaseUpdate=A,i.lastBaseUpdate=z,r===null&&(i.shared.lanes=0),Aa|=s,e.lanes=s,e.memoizedState=M}}function Is(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Ps(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Is(a[e],t)}var Cn=j(null),Ni=j(0);function Fs(e,t){e=ra,q(Ni,e),q(Cn,t),ra=e|t.baseLanes}function qu(){q(Ni,ra),q(Cn,Cn.current)}function Lu(){ra=Ni.current,H(Cn),H(Ni)}var xa=0,ue=null,we=null,Ye=null,Oi=!1,Tn=!1,Pa=!1,Mi=0,Cl=0,Dn=null,Dg=0;function Ue(){throw Error(c(321))}function Xu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ht(e[a],t[a]))return!1;return!0}function Qu(e,t,a,n,i,r){return xa=r,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Md:jd,Pa=!1,r=a(n,i),Pa=!1,Tn&&(r=Js(t,a,n,i)),$s(e),r}function $s(e){R.H=Gi;var t=we!==null&&we.next!==null;if(xa=0,Ye=we=ue=null,Oi=!1,Cl=0,Dn=null,t)throw Error(c(300));e===null||Ke||(e=e.dependencies,e!==null&&Ti(e)&&(Ke=!0))}function Js(e,t,a,n){ue=e;var i=0;do{if(Tn&&(Dn=null),Cl=0,Tn=!1,25<=i)throw Error(c(301));if(i+=1,Ye=we=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}R.H=jg,r=t(a,n)}while(Tn);return r}function _g(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?Tl(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(ue.flags|=1024),t}function Ku(){var e=Mi!==0;return Mi=0,e}function Zu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Vu(e){if(Oi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Oi=!1}xa=0,Ye=we=ue=null,Tn=!1,Cl=Mi=0,Dn=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?ue.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ge(){if(we===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Ye===null?ue.memoizedState:Ye.next;if(t!==null)Ye=t,we=e;else{if(e===null)throw ue.alternate===null?Error(c(467)):Error(c(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ye===null?ue.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Tl(e){var t=Cl;return Cl+=1,Dn===null&&(Dn=[]),e=Ks(Dn,e,t),t=ue,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Md:jd),e}function ji(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Tl(e);if(e.$$typeof===ee)return nt(e)}throw Error(c(438,String(e)))}function Pu(e){var t=null,a=ue.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ue.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Iu(),ue.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Fe;return t.index++,a}function ea(e,t){return typeof t=="function"?t(e):t}function Ui(e){var t=Ge();return Fu(t,we,e)}function Fu(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var s=i.next;i.next=r.next,r.next=s}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var d=s=null,h=null,A=t,z=!1;do{var M=A.lane&-536870913;if(M!==A.lane?(he&M)===M:(xa&M)===M){var C=A.revertLane;if(C===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),M===An&&(z=!0);else if((xa&C)===C){A=A.next,C===An&&(z=!0);continue}else M={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},h===null?(d=h=M,s=r):h=h.next=M,ue.lanes|=C,Aa|=C;M=A.action,Pa&&a(r,M),r=A.hasEagerState?A.eagerState:a(r,M)}else C={lane:M,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},h===null?(d=h=C,s=r):h=h.next=C,ue.lanes|=M,Aa|=M;A=A.next}while(A!==null&&A!==t);if(h===null?s=r:h.next=d,!ht(r,e.memoizedState)&&(Ke=!0,z&&(a=En,a!==null)))throw a;e.memoizedState=r,e.baseState=s,e.baseQueue=h,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function $u(e){var t=Ge(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var s=i=i.next;do r=e(r,s.action),s=s.next;while(s!==i);ht(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function Ws(e,t,a){var n=ue,i=Ge(),r=me;if(r){if(a===void 0)throw Error(c(407));a=a()}else a=t();var s=!ht((we||i).memoizedState,a);s&&(i.memoizedState=a,Ke=!0),i=i.queue;var d=ad.bind(null,n,i,e);if(Dl(2048,8,d,[e]),i.getSnapshot!==t||s||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,_n(9,ki(),td.bind(null,n,i,a,t),null),_e===null)throw Error(c(349));r||(xa&124)!==0||ed(n,t,a)}return a}function ed(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ue.updateQueue,t===null?(t=Iu(),ue.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function td(e,t,a,n){t.value=a,t.getSnapshot=n,nd(t)&&ld(e)}function ad(e,t,a){return a(function(){nd(t)&&ld(e)})}function nd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ht(e,a)}catch{return!0}}function ld(e){var t=bn(e,2);t!==null&&vt(t,e,2)}function Ju(e){var t=ct();if(typeof e=="function"){var a=e;if(e=a(),Pa){oa(!0);try{a()}finally{oa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},t}function id(e,t,a,n){return e.baseState=a,Fu(e,we,typeof n=="function"?n:ea)}function Rg(e,t,a,n,i){if(Yi(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};R.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,rd(t,r)):(r.next=a.next,t.pending=a.next=r)}}function rd(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=R.T,s={};R.T=s;try{var d=a(i,n),h=R.S;h!==null&&h(s,d),ud(e,t,d)}catch(A){Wu(e,t,A)}finally{R.T=r}}else try{r=a(i,n),ud(e,t,r)}catch(A){Wu(e,t,A)}}function ud(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){cd(e,t,n)},function(n){return Wu(e,t,n)}):cd(e,t,a)}function cd(e,t,a){t.status="fulfilled",t.value=a,od(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,rd(e,a)))}function Wu(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,od(t),t=t.next;while(t!==n)}e.action=null}function od(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function sd(e,t){return t}function dd(e,t){if(me){var a=_e.formState;if(a!==null){e:{var n=ue;if(me){if(Oe){t:{for(var i=Oe,r=Ht;i.nodeType!==8;){if(!r){i=null;break t}if(i=Bt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Oe=Bt(i.nextSibling),n=i.data==="F!";break e}}Ka(n)}n=!1}n&&(t=a[0])}}return a=ct(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sd,lastRenderedState:t},a.queue=n,a=zd.bind(null,ue,n),n.dispatch=a,n=Ju(!1),r=lc.bind(null,ue,!1,n.queue),n=ct(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Rg.bind(null,ue,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function fd(e){var t=Ge();return pd(t,we,e)}function pd(e,t,a){if(t=Fu(e,t,sd)[0],e=Ui(ea)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Tl(t)}catch(s){throw s===vl?Ri:s}else n=t;t=Ge();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(ue.flags|=2048,_n(9,ki(),zg.bind(null,i,a),null)),[n,r,e]}function zg(e,t){e.action=t}function hd(e){var t=Ge(),a=we;if(a!==null)return pd(t,a,e);Ge(),t=t.memoizedState,a=Ge();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function _n(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ue.updateQueue,t===null&&(t=Iu(),ue.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function ki(){return{destroy:void 0,resource:void 0}}function gd(){return Ge().memoizedState}function Bi(e,t,a,n){var i=ct();n=n===void 0?null:n,ue.flags|=e,i.memoizedState=_n(1|t,ki(),a,n)}function Dl(e,t,a,n){var i=Ge();n=n===void 0?null:n;var r=i.memoizedState.inst;we!==null&&n!==null&&Xu(n,we.memoizedState.deps)?i.memoizedState=_n(t,r,a,n):(ue.flags|=e,i.memoizedState=_n(1|t,r,a,n))}function xd(e,t){Bi(8390656,8,e,t)}function md(e,t){Dl(2048,8,e,t)}function yd(e,t){return Dl(4,2,e,t)}function bd(e,t){return Dl(4,4,e,t)}function vd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sd(e,t,a){a=a!=null?a.concat([e]):null,Dl(4,4,vd.bind(null,t,e),a)}function ec(){}function wd(e,t){var a=Ge();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Xu(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Ad(e,t){var a=Ge();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Xu(t,n[1]))return n[0];if(n=e(),Pa){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[n,t],n}function tc(e,t,a){return a===void 0||(xa&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Df(),ue.lanes|=e,Aa|=e,a)}function Ed(e,t,a,n){return ht(a,t)?a:Cn.current!==null?(e=tc(e,a,n),ht(e,t)||(Ke=!0),e):(xa&42)===0?(Ke=!0,e.memoizedState=a):(e=Df(),ue.lanes|=e,Aa|=e,t)}function Cd(e,t,a,n,i){var r=L.p;L.p=r!==0&&8>r?r:8;var s=R.T,d={};R.T=d,lc(e,!1,t,a);try{var h=i(),A=R.S;if(A!==null&&A(d,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var z=Tg(h,n);_l(e,t,z,bt(e))}else _l(e,t,n,bt(e))}catch(M){_l(e,t,{then:function(){},status:"rejected",reason:M},bt())}finally{L.p=r,R.T=s}}function Ng(){}function ac(e,t,a,n){if(e.tag!==5)throw Error(c(476));var i=Td(e).queue;Cd(e,i,t,F,a===null?Ng:function(){return Dd(e),a(n)})}function Td(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Dd(e){var t=Td(e).next.queue;_l(e,t,{},bt())}function nc(){return nt(Zl)}function _d(){return Ge().memoizedState}function Rd(){return Ge().memoizedState}function Og(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=bt();e=ha(a);var n=ga(t,e,a);n!==null&&(vt(n,t,a),wl(n,t,a)),t={cache:Mu()},e.payload=t;return}t=t.return}}function Mg(e,t,a){var n=bt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Yi(e)?Nd(t,a):(a=Au(e,t,a,n),a!==null&&(vt(a,e,n),Od(a,t,n)))}function zd(e,t,a){var n=bt();_l(e,t,a,n)}function _l(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yi(e))Nd(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,d=r(s,a);if(i.hasEagerState=!0,i.eagerState=d,ht(d,s))return Si(e,t,i,0),_e===null&&vi(),!1}catch{}finally{}if(a=Au(e,t,i,n),a!==null)return vt(a,e,n),Od(a,t,n),!0}return!1}function lc(e,t,a,n){if(n={lane:2,revertLane:kc(),action:n,hasEagerState:!1,eagerState:null,next:null},Yi(e)){if(t)throw Error(c(479))}else t=Au(e,a,n,2),t!==null&&vt(t,e,2)}function Yi(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Nd(e,t){Tn=Oi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Od(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Ho(e,a)}}var Gi={readContext:nt,use:ji,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue},Md={readContext:nt,use:ji,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:xd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Bi(4194308,4,vd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Bi(4194308,4,e,t)},useInsertionEffect:function(e,t){Bi(4,2,e,t)},useMemo:function(e,t){var a=ct();t=t===void 0?null:t;var n=e();if(Pa){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ct();if(a!==void 0){var i=a(t);if(Pa){oa(!0);try{a(t)}finally{oa(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Mg.bind(null,ue,e),[n.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:function(e){e=Ju(e);var t=e.queue,a=zd.bind(null,ue,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ec,useDeferredValue:function(e,t){var a=ct();return tc(a,e,t)},useTransition:function(){var e=Ju(!1);return e=Cd.bind(null,ue,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ue,i=ct();if(me){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),_e===null)throw Error(c(349));(he&124)!==0||ed(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,xd(ad.bind(null,n,r,e),[e]),n.flags|=2048,_n(9,ki(),td.bind(null,n,r,a,t),null),a},useId:function(){var e=ct(),t=_e.identifierPrefix;if(me){var a=$t,n=Ft;a=(n&~(1<<32-pt(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=Mi++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Dg++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:nc,useFormState:dd,useActionState:dd,useOptimistic:function(e){var t=ct();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=lc.bind(null,ue,!0,a),a.dispatch=t,[e,t]},useMemoCache:Pu,useCacheRefresh:function(){return ct().memoizedState=Og.bind(null,ue)}},jd={readContext:nt,use:ji,useCallback:wd,useContext:nt,useEffect:md,useImperativeHandle:Sd,useInsertionEffect:yd,useLayoutEffect:bd,useMemo:Ad,useReducer:Ui,useRef:gd,useState:function(){return Ui(ea)},useDebugValue:ec,useDeferredValue:function(e,t){var a=Ge();return Ed(a,we.memoizedState,e,t)},useTransition:function(){var e=Ui(ea)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Tl(e),t]},useSyncExternalStore:Ws,useId:_d,useHostTransitionStatus:nc,useFormState:fd,useActionState:fd,useOptimistic:function(e,t){var a=Ge();return id(a,we,e,t)},useMemoCache:Pu,useCacheRefresh:Rd},jg={readContext:nt,use:ji,useCallback:wd,useContext:nt,useEffect:md,useImperativeHandle:Sd,useInsertionEffect:yd,useLayoutEffect:bd,useMemo:Ad,useReducer:$u,useRef:gd,useState:function(){return $u(ea)},useDebugValue:ec,useDeferredValue:function(e,t){var a=Ge();return we===null?tc(a,e,t):Ed(a,we.memoizedState,e,t)},useTransition:function(){var e=$u(ea)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Tl(e),t]},useSyncExternalStore:Ws,useId:_d,useHostTransitionStatus:nc,useFormState:hd,useActionState:hd,useOptimistic:function(e,t){var a=Ge();return we!==null?id(a,we,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Pu,useCacheRefresh:Rd},Rn=null,Rl=0;function Hi(e){var t=Rl;return Rl+=1,Rn===null&&(Rn=[]),Ks(Rn,e,t)}function zl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function qi(e,t){throw t.$$typeof===U?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ud(e){var t=e._init;return t(e._payload)}function kd(e){function t(b,m){if(e){var v=b.deletions;v===null?(b.deletions=[m],b.flags|=16):v.push(m)}}function a(b,m){if(!e)return null;for(;m!==null;)t(b,m),m=m.sibling;return null}function n(b){for(var m=new Map;b!==null;)b.key!==null?m.set(b.key,b):m.set(b.index,b),b=b.sibling;return m}function i(b,m){return b=Pt(b,m),b.index=0,b.sibling=null,b}function r(b,m,v){return b.index=v,e?(v=b.alternate,v!==null?(v=v.index,v<m?(b.flags|=67108866,m):v):(b.flags|=67108866,m)):(b.flags|=1048576,m)}function s(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function d(b,m,v,N){return m===null||m.tag!==6?(m=Cu(v,b.mode,N),m.return=b,m):(m=i(m,v),m.return=b,m)}function h(b,m,v,N){var K=v.type;return K===Y?z(b,m,v.props.children,N,v.key):m!==null&&(m.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===be&&Ud(K)===m.type)?(m=i(m,v.props),zl(m,v),m.return=b,m):(m=Ai(v.type,v.key,v.props,null,b.mode,N),zl(m,v),m.return=b,m)}function A(b,m,v,N){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Tu(v,b.mode,N),m.return=b,m):(m=i(m,v.children||[]),m.return=b,m)}function z(b,m,v,N,K){return m===null||m.tag!==7?(m=qa(v,b.mode,N,K),m.return=b,m):(m=i(m,v),m.return=b,m)}function M(b,m,v){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Cu(""+m,b.mode,v),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case k:return v=Ai(m.type,m.key,m.props,null,b.mode,v),zl(v,m),v.return=b,v;case B:return m=Tu(m,b.mode,v),m.return=b,m;case be:var N=m._init;return m=N(m._payload),M(b,m,v)}if(qe(m)||je(m))return m=qa(m,b.mode,v,null),m.return=b,m;if(typeof m.then=="function")return M(b,Hi(m),v);if(m.$$typeof===ee)return M(b,Di(b,m),v);qi(b,m)}return null}function C(b,m,v,N){var K=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return K!==null?null:d(b,m,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case k:return v.key===K?h(b,m,v,N):null;case B:return v.key===K?A(b,m,v,N):null;case be:return K=v._init,v=K(v._payload),C(b,m,v,N)}if(qe(v)||je(v))return K!==null?null:z(b,m,v,N,null);if(typeof v.then=="function")return C(b,m,Hi(v),N);if(v.$$typeof===ee)return C(b,m,Di(b,v),N);qi(b,v)}return null}function T(b,m,v,N,K){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return b=b.get(v)||null,d(m,b,""+N,K);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case k:return b=b.get(N.key===null?v:N.key)||null,h(m,b,N,K);case B:return b=b.get(N.key===null?v:N.key)||null,A(m,b,N,K);case be:var oe=N._init;return N=oe(N._payload),T(b,m,v,N,K)}if(qe(N)||je(N))return b=b.get(v)||null,z(m,b,N,K,null);if(typeof N.then=="function")return T(b,m,v,Hi(N),K);if(N.$$typeof===ee)return T(b,m,v,Di(m,N),K);qi(m,N)}return null}function te(b,m,v,N){for(var K=null,oe=null,I=m,J=m=0,Ve=null;I!==null&&J<v.length;J++){I.index>J?(Ve=I,I=null):Ve=I.sibling;var xe=C(b,I,v[J],N);if(xe===null){I===null&&(I=Ve);break}e&&I&&xe.alternate===null&&t(b,I),m=r(xe,m,J),oe===null?K=xe:oe.sibling=xe,oe=xe,I=Ve}if(J===v.length)return a(b,I),me&&Xa(b,J),K;if(I===null){for(;J<v.length;J++)I=M(b,v[J],N),I!==null&&(m=r(I,m,J),oe===null?K=I:oe.sibling=I,oe=I);return me&&Xa(b,J),K}for(I=n(I);J<v.length;J++)Ve=T(I,b,J,v[J],N),Ve!==null&&(e&&Ve.alternate!==null&&I.delete(Ve.key===null?J:Ve.key),m=r(Ve,m,J),oe===null?K=Ve:oe.sibling=Ve,oe=Ve);return e&&I.forEach(function(Oa){return t(b,Oa)}),me&&Xa(b,J),K}function $(b,m,v,N){if(v==null)throw Error(c(151));for(var K=null,oe=null,I=m,J=m=0,Ve=null,xe=v.next();I!==null&&!xe.done;J++,xe=v.next()){I.index>J?(Ve=I,I=null):Ve=I.sibling;var Oa=C(b,I,xe.value,N);if(Oa===null){I===null&&(I=Ve);break}e&&I&&Oa.alternate===null&&t(b,I),m=r(Oa,m,J),oe===null?K=Oa:oe.sibling=Oa,oe=Oa,I=Ve}if(xe.done)return a(b,I),me&&Xa(b,J),K;if(I===null){for(;!xe.done;J++,xe=v.next())xe=M(b,xe.value,N),xe!==null&&(m=r(xe,m,J),oe===null?K=xe:oe.sibling=xe,oe=xe);return me&&Xa(b,J),K}for(I=n(I);!xe.done;J++,xe=v.next())xe=T(I,b,J,xe.value,N),xe!==null&&(e&&xe.alternate!==null&&I.delete(xe.key===null?J:xe.key),m=r(xe,m,J),oe===null?K=xe:oe.sibling=xe,oe=xe);return e&&I.forEach(function(U1){return t(b,U1)}),me&&Xa(b,J),K}function Ee(b,m,v,N){if(typeof v=="object"&&v!==null&&v.type===Y&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case k:e:{for(var K=v.key;m!==null;){if(m.key===K){if(K=v.type,K===Y){if(m.tag===7){a(b,m.sibling),N=i(m,v.props.children),N.return=b,b=N;break e}}else if(m.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===be&&Ud(K)===m.type){a(b,m.sibling),N=i(m,v.props),zl(N,v),N.return=b,b=N;break e}a(b,m);break}else t(b,m);m=m.sibling}v.type===Y?(N=qa(v.props.children,b.mode,N,v.key),N.return=b,b=N):(N=Ai(v.type,v.key,v.props,null,b.mode,N),zl(N,v),N.return=b,b=N)}return s(b);case B:e:{for(K=v.key;m!==null;){if(m.key===K)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){a(b,m.sibling),N=i(m,v.children||[]),N.return=b,b=N;break e}else{a(b,m);break}else t(b,m);m=m.sibling}N=Tu(v,b.mode,N),N.return=b,b=N}return s(b);case be:return K=v._init,v=K(v._payload),Ee(b,m,v,N)}if(qe(v))return te(b,m,v,N);if(je(v)){if(K=je(v),typeof K!="function")throw Error(c(150));return v=K.call(v),$(b,m,v,N)}if(typeof v.then=="function")return Ee(b,m,Hi(v),N);if(v.$$typeof===ee)return Ee(b,m,Di(b,v),N);qi(b,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,m!==null&&m.tag===6?(a(b,m.sibling),N=i(m,v),N.return=b,b=N):(a(b,m),N=Cu(v,b.mode,N),N.return=b,b=N),s(b)):a(b,m)}return function(b,m,v,N){try{Rl=0;var K=Ee(b,m,v,N);return Rn=null,K}catch(I){if(I===vl||I===Ri)throw I;var oe=gt(29,I,null,b.mode);return oe.lanes=N,oe.return=b,oe}finally{}}}var zn=kd(!0),Bd=kd(!1),Nt=j(null),qt=null;function ma(e){var t=e.alternate;q(Xe,Xe.current&1),q(Nt,e),qt===null&&(t===null||Cn.current!==null||t.memoizedState!==null)&&(qt=e)}function Yd(e){if(e.tag===22){if(q(Xe,Xe.current),q(Nt,e),qt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(qt=e)}}else ya()}function ya(){q(Xe,Xe.current),q(Nt,Nt.current)}function ta(e){H(Nt),qt===e&&(qt=null),H(Xe)}var Xe=j(0);function Li(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ic(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ic(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var rc={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=bt(),i=ha(n);i.payload=t,a!=null&&(i.callback=a),t=ga(e,i,n),t!==null&&(vt(t,e,n),wl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=bt(),i=ha(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ga(e,i,n),t!==null&&(vt(t,e,n),wl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=bt(),n=ha(a);n.tag=2,t!=null&&(n.callback=t),t=ga(e,n,a),t!==null&&(vt(t,e,a),wl(t,e,a))}};function Gd(e,t,a,n,i,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,s):t.prototype&&t.prototype.isPureReactComponent?!fl(a,n)||!fl(i,r):!0}function Hd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&rc.enqueueReplaceState(t,t.state,null)}function Fa(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var Xi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function qd(e){Xi(e)}function Ld(e){console.error(e)}function Xd(e){Xi(e)}function Qi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Qd(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function uc(e,t,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Qi(e,t)},a}function Kd(e){return e=ha(e),e.tag=3,e}function Zd(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){Qd(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Qd(t,a,n),typeof i!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})})}function Ug(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&ml(t,a,i,!0),a=Nt.current,a!==null){switch(a.tag){case 13:return qt===null?Nc():a.alternate===null&&Me===0&&(Me=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===ku?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Mc(e,n,i)),!1;case 22:return a.flags|=65536,n===ku?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Mc(e,n,i)),!1}throw Error(c(435,a.tag))}return Mc(e,n,i),Nc(),!1}if(me)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Ru&&(e=Error(c(422),{cause:n}),xl(Dt(e,a)))):(n!==Ru&&(t=Error(c(423),{cause:n}),xl(Dt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Dt(n,a),i=uc(e.stateNode,n,i),Gu(e,i),Me!==4&&(Me=2)),!1;var r=Error(c(520),{cause:n});if(r=Dt(r,a),Bl===null?Bl=[r]:Bl.push(r),Me!==4&&(Me=2),t===null)return!0;n=Dt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=uc(a.stateNode,n,e),Gu(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ea===null||!Ea.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Kd(i),Zd(i,e,a,n),Gu(a,i),!1}a=a.return}while(a!==null);return!1}var Vd=Error(c(461)),Ke=!1;function Je(e,t,a,n){t.child=e===null?Bd(t,null,a,n):zn(t,e.child,a,n)}function Id(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var s={};for(var d in n)d!=="ref"&&(s[d]=n[d])}else s=n;return Va(t),n=Qu(e,t,a,s,r,i),d=Ku(),e!==null&&!Ke?(Zu(e,t,i),aa(e,t,i)):(me&&d&&Du(t),t.flags|=1,Je(e,t,n,i),t.child)}function Pd(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!Eu(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Fd(e,t,r,n,i)):(e=Ai(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!gc(e,i)){var s=r.memoizedProps;if(a=a.compare,a=a!==null?a:fl,a(s,n)&&e.ref===t.ref)return aa(e,t,i)}return t.flags|=1,e=Pt(r,n),e.ref=t.ref,e.return=t,t.child=e}function Fd(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(fl(r,n)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=n=r,gc(e,i))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,aa(e,t,i)}return cc(e,t,a,n,i)}function $d(e,t,a){var n=t.pendingProps,i=n.children,r=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~n}else t.childLanes=0,t.child=null;return Jd(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_i(t,r!==null?r.cachePool:null),r!==null?Fs(t,r):qu(),Yd(t);else return t.lanes=t.childLanes=536870912,Jd(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(_i(t,r.cachePool),Fs(t,r),ya(),t.memoizedState=null):(e!==null&&_i(t,null),qu(),ya());return Je(e,t,i,a),t.child}function Jd(e,t,a,n){var i=Uu();return i=i===null?null:{parent:Le._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&_i(t,null),qu(),Yd(t),e!==null&&ml(e,t,n,!0),null}function Ki(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function cc(e,t,a,n,i){return Va(t),a=Qu(e,t,a,n,void 0,i),n=Ku(),e!==null&&!Ke?(Zu(e,t,i),aa(e,t,i)):(me&&n&&Du(t),t.flags|=1,Je(e,t,a,i),t.child)}function Wd(e,t,a,n,i,r){return Va(t),t.updateQueue=null,a=Js(t,n,a,i),$s(e),n=Ku(),e!==null&&!Ke?(Zu(e,t,r),aa(e,t,r)):(me&&n&&Du(t),t.flags|=1,Je(e,t,a,r),t.child)}function ef(e,t,a,n,i){if(Va(t),t.stateNode===null){var r=vn,s=a.contextType;typeof s=="object"&&s!==null&&(r=nt(s)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=rc,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},Bu(t),s=a.contextType,r.context=typeof s=="object"&&s!==null?nt(s):vn,r.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(ic(t,a,s,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&rc.enqueueReplaceState(r,r.state,null),El(t,n,r,i),Al(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var d=t.memoizedProps,h=Fa(a,d);r.props=h;var A=r.context,z=a.contextType;s=vn,typeof z=="object"&&z!==null&&(s=nt(z));var M=a.getDerivedStateFromProps;z=typeof M=="function"||typeof r.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,z||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d||A!==s)&&Hd(t,r,n,s),pa=!1;var C=t.memoizedState;r.state=C,El(t,n,r,i),Al(),A=t.memoizedState,d||C!==A||pa?(typeof M=="function"&&(ic(t,a,M,n),A=t.memoizedState),(h=pa||Gd(t,a,h,n,C,A,s))?(z||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=A),r.props=n,r.state=A,r.context=s,n=h):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,Yu(e,t),s=t.memoizedProps,z=Fa(a,s),r.props=z,M=t.pendingProps,C=r.context,A=a.contextType,h=vn,typeof A=="object"&&A!==null&&(h=nt(A)),d=a.getDerivedStateFromProps,(A=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==M||C!==h)&&Hd(t,r,n,h),pa=!1,C=t.memoizedState,r.state=C,El(t,n,r,i),Al();var T=t.memoizedState;s!==M||C!==T||pa||e!==null&&e.dependencies!==null&&Ti(e.dependencies)?(typeof d=="function"&&(ic(t,a,d,n),T=t.memoizedState),(z=pa||Gd(t,a,z,n,C,T,h)||e!==null&&e.dependencies!==null&&Ti(e.dependencies))?(A||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,T,h),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,T,h)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=T),r.props=n,r.state=T,r.context=h,n=z):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,Ki(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=zn(t,e.child,null,i),t.child=zn(t,null,a,i)):Je(e,t,a,i),t.memoizedState=r.state,e=t.child):e=aa(e,t,i),e}function tf(e,t,a,n){return gl(),t.flags|=256,Je(e,t,a,n),t.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sc(e){return{baseLanes:e,cachePool:Ls()}}function dc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ot),e}function af(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),s&&(i=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(i?ma(t):ya(),me){var d=Oe,h;if(h=d){e:{for(h=d,d=Ht;h.nodeType!==8;){if(!d){d=null;break e}if(h=Bt(h.nextSibling),h===null){d=null;break e}}d=h}d!==null?(t.memoizedState={dehydrated:d,treeContext:La!==null?{id:Ft,overflow:$t}:null,retryLane:536870912,hydrationErrors:null},h=gt(18,null,null,0),h.stateNode=d,h.return=t,t.child=h,it=t,Oe=null,h=!0):h=!1}h||Ka(t)}if(d=t.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return Ic(d)?t.lanes=32:t.lanes=536870912,null;ta(t)}return d=n.children,n=n.fallback,i?(ya(),i=t.mode,d=Zi({mode:"hidden",children:d},i),n=qa(n,i,a,null),d.return=t,n.return=t,d.sibling=n,t.child=d,i=t.child,i.memoizedState=sc(a),i.childLanes=dc(e,s,a),t.memoizedState=oc,n):(ma(t),fc(t,d))}if(h=e.memoizedState,h!==null&&(d=h.dehydrated,d!==null)){if(r)t.flags&256?(ma(t),t.flags&=-257,t=pc(e,t,a)):t.memoizedState!==null?(ya(),t.child=e.child,t.flags|=128,t=null):(ya(),i=n.fallback,d=t.mode,n=Zi({mode:"visible",children:n.children},d),i=qa(i,d,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,zn(t,e.child,null,a),n=t.child,n.memoizedState=sc(a),n.childLanes=dc(e,s,a),t.memoizedState=oc,t=i);else if(ma(t),Ic(d)){if(s=d.nextSibling&&d.nextSibling.dataset,s)var A=s.dgst;s=A,n=Error(c(419)),n.stack="",n.digest=s,xl({value:n,source:null,stack:null}),t=pc(e,t,a)}else if(Ke||ml(e,t,a,!1),s=(a&e.childLanes)!==0,Ke||s){if(s=_e,s!==null&&(n=a&-a,n=(n&42)!==0?1:Pr(n),n=(n&(s.suspendedLanes|a))!==0?0:n,n!==0&&n!==h.retryLane))throw h.retryLane=n,bn(e,n),vt(s,e,n),Vd;d.data==="$?"||Nc(),t=pc(e,t,a)}else d.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Oe=Bt(d.nextSibling),it=t,me=!0,Qa=null,Ht=!1,e!==null&&(Rt[zt++]=Ft,Rt[zt++]=$t,Rt[zt++]=La,Ft=e.id,$t=e.overflow,La=t),t=fc(t,n.children),t.flags|=4096);return t}return i?(ya(),i=n.fallback,d=t.mode,h=e.child,A=h.sibling,n=Pt(h,{mode:"hidden",children:n.children}),n.subtreeFlags=h.subtreeFlags&65011712,A!==null?i=Pt(A,i):(i=qa(i,d,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,d=e.child.memoizedState,d===null?d=sc(a):(h=d.cachePool,h!==null?(A=Le._currentValue,h=h.parent!==A?{parent:A,pool:A}:h):h=Ls(),d={baseLanes:d.baseLanes|a,cachePool:h}),i.memoizedState=d,i.childLanes=dc(e,s,a),t.memoizedState=oc,n):(ma(t),a=e.child,e=a.sibling,a=Pt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function fc(e,t){return t=Zi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Zi(e,t){return e=gt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function pc(e,t,a){return zn(t,e.child,null,a),e=fc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Nu(e.return,t,a)}function hc(e,t,a,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i)}function lf(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;if(Je(e,t,n.children,a),n=Xe.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nf(e,a,t);else if(e.tag===19)nf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(q(Xe,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Li(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),hc(t,!1,i,a,r);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Li(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}hc(t,!0,a,null,r);break;case"together":hc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function aa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Aa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ml(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Pt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Pt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function gc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ti(e)))}function kg(e,t,a){switch(t.tag){case 3:ge(t,t.stateNode.containerInfo),fa(t,Le,e.memoizedState.cache),gl();break;case 27:case 5:Ua(t);break;case 4:ge(t,t.stateNode.containerInfo);break;case 10:fa(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ma(t),t.flags|=128,null):(a&t.child.childLanes)!==0?af(e,t,a):(ma(t),e=aa(e,t,a),e!==null?e.sibling:null);ma(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(ml(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return lf(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(Xe,Xe.current),n)break;return null;case 22:case 23:return t.lanes=0,$d(e,t,a);case 24:fa(t,Le,e.memoizedState.cache)}return aa(e,t,a)}function rf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!gc(e,a)&&(t.flags&128)===0)return Ke=!1,kg(e,t,a);Ke=(e.flags&131072)!==0}else Ke=!1,me&&(t.flags&1048576)!==0&&Us(t,Ci,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")Eu(n)?(e=Fa(n,e),t.tag=1,t=ef(null,t,n,e,a)):(t.tag=0,t=cc(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===ae){t.tag=11,t=Id(null,t,n,e,a);break e}else if(i===V){t.tag=14,t=Pd(null,t,n,e,a);break e}}throw t=At(n)||n,Error(c(306,t,""))}}return t;case 0:return cc(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Fa(n,t.pendingProps),ef(e,t,n,i,a);case 3:e:{if(ge(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,Yu(e,t),El(t,n,null,a);var s=t.memoizedState;if(n=s.cache,fa(t,Le,n),n!==r.cache&&Ou(t,[Le],a,!0),Al(),n=s.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=tf(e,t,n,a);break e}else if(n!==i){i=Dt(Error(c(424)),t),xl(i),t=tf(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Oe=Bt(e.firstChild),it=t,me=!0,Qa=null,Ht=!0,a=Bd(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(gl(),n===i){t=aa(e,t,a);break e}Je(e,t,n,a)}t=t.child}return t;case 26:return Ki(e,t),e===null?(a=s0(t.type,null,t.pendingProps,null))?t.memoizedState=a:me||(a=t.type,e=t.pendingProps,n=rr(Z.current).createElement(a),n[at]=t,n[rt]=e,et(n,a,e),Qe(n),t.stateNode=n):t.memoizedState=s0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ua(t),e===null&&me&&(n=t.stateNode=u0(t.type,t.pendingProps,Z.current),it=t,Ht=!0,i=Oe,Da(t.type)?(Pc=i,Oe=Bt(n.firstChild)):Oe=i),Je(e,t,t.pendingProps.children,a),Ki(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((i=n=Oe)&&(n=s1(n,t.type,t.pendingProps,Ht),n!==null?(t.stateNode=n,it=t,Oe=Bt(n.firstChild),Ht=!1,i=!0):i=!1),i||Ka(t)),Ua(t),i=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,n=r.children,Kc(i,r)?n=null:s!==null&&Kc(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=Qu(e,t,_g,null,null,a),Zl._currentValue=i),Ki(e,t),Je(e,t,n,a),t.child;case 6:return e===null&&me&&((e=a=Oe)&&(a=d1(a,t.pendingProps,Ht),a!==null?(t.stateNode=a,it=t,Oe=null,e=!0):e=!1),e||Ka(t)),null;case 13:return af(e,t,a);case 4:return ge(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=zn(t,null,n,a):Je(e,t,n,a),t.child;case 11:return Id(e,t,t.type,t.pendingProps,a);case 7:return Je(e,t,t.pendingProps,a),t.child;case 8:return Je(e,t,t.pendingProps.children,a),t.child;case 12:return Je(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,fa(t,t.type,n.value),Je(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Va(t),i=nt(i),n=n(i),t.flags|=1,Je(e,t,n,a),t.child;case 14:return Pd(e,t,t.type,t.pendingProps,a);case 15:return Fd(e,t,t.type,t.pendingProps,a);case 19:return lf(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=Zi(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Pt(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return $d(e,t,a);case 24:return Va(t),n=nt(Le),e===null?(i=Uu(),i===null&&(i=_e,r=Mu(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},Bu(t),fa(t,Le,i)):((e.lanes&a)!==0&&(Yu(e,t),El(t,null,null,a),Al()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),fa(t,Le,n)):(n=r.cache,fa(t,Le,n),n!==i.cache&&Ou(t,[Le],a,!0))),Je(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function na(e){e.flags|=4}function uf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!g0(t)){if(t=Nt.current,t!==null&&((he&4194048)===he?qt!==null:(he&62914560)!==he&&(he&536870912)===0||t!==qt))throw Sl=ku,Xs;e.flags|=8192}}function Vi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Yo():536870912,e.lanes|=t,jn|=t)}function Nl(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Bg(e,t,a){var n=t.pendingProps;switch(_u(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ne(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wt(Le),tt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(hl(t)?na(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ys())),Ne(t),null;case 26:return a=t.memoizedState,e===null?(na(t),a!==null?(Ne(t),uf(t,a)):(Ne(t),t.flags&=-16777217)):a?a!==e.memoizedState?(na(t),Ne(t),uf(t,a)):(Ne(t),t.flags&=-16777217):(e.memoizedProps!==n&&na(t),Ne(t),t.flags&=-16777217),null;case 27:Zt(t),a=Z.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&na(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Ne(t),null}e=O.current,hl(t)?ks(t):(e=u0(i,n,a),t.stateNode=e,na(t))}return Ne(t),null;case 5:if(Zt(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&na(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Ne(t),null}if(e=O.current,hl(t))ks(t);else{switch(i=rr(Z.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[at]=t,e[rt]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(et(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&na(t)}}return Ne(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&na(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=Z.current,hl(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=it,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[at]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||e0(e.nodeValue,a)),e||Ka(t)}else e=rr(e).createTextNode(n),e[at]=t,t.stateNode=e}return Ne(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=hl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[at]=t}else gl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),i=!1}else i=Ys(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(ta(t),t):(ta(t),null)}if(ta(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var r=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Vi(t,t.updateQueue),Ne(t),null;case 4:return tt(),e===null&&Hc(t.stateNode.containerInfo),Ne(t),null;case 10:return Wt(t.type),Ne(t),null;case 19:if(H(Xe),i=t.memoizedState,i===null)return Ne(t),null;if(n=(t.flags&128)!==0,r=i.rendering,r===null)if(n)Nl(i,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Li(e),r!==null){for(t.flags|=128,Nl(i,!1),e=r.updateQueue,t.updateQueue=e,Vi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)js(a,e),a=a.sibling;return q(Xe,Xe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Gt()>Fi&&(t.flags|=128,n=!0,Nl(i,!1),t.lanes=4194304)}else{if(!n)if(e=Li(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Vi(t,e),Nl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!me)return Ne(t),null}else 2*Gt()-i.renderingStartTime>Fi&&a!==536870912&&(t.flags|=128,n=!0,Nl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Gt(),t.sibling=null,e=Xe.current,q(Xe,n?e&1|2:e&1),t):(Ne(t),null);case 22:case 23:return ta(t),Lu(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),a=t.updateQueue,a!==null&&Vi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&H(Ia),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Wt(Le),Ne(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Yg(e,t){switch(_u(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wt(Le),tt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Zt(t),null;case 13:if(ta(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));gl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Xe),null;case 4:return tt(),null;case 10:return Wt(t.type),null;case 22:case 23:return ta(t),Lu(),e!==null&&H(Ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wt(Le),null;case 25:return null;default:return null}}function cf(e,t){switch(_u(t),t.tag){case 3:Wt(Le),tt();break;case 26:case 27:case 5:Zt(t);break;case 4:tt();break;case 13:ta(t);break;case 19:H(Xe);break;case 10:Wt(t.type);break;case 22:case 23:ta(t),Lu(),e!==null&&H(Ia);break;case 24:Wt(Le)}}function Ol(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,s=a.inst;n=r(),s.destroy=n}a=a.next}while(a!==i)}}catch(d){Te(t,t.return,d)}}function ba(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var s=n.inst,d=s.destroy;if(d!==void 0){s.destroy=void 0,i=t;var h=a,A=d;try{A()}catch(z){Te(i,h,z)}}}n=n.next}while(n!==r)}}catch(z){Te(t,t.return,z)}}function of(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ps(t,a)}catch(n){Te(e,e.return,n)}}}function sf(e,t,a){a.props=Fa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Te(e,t,n)}}function Ml(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){Te(e,t,i)}}function Lt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Te(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Te(e,t,i)}else a.current=null}function df(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Te(e,e.return,i)}}function xc(e,t,a){try{var n=e.stateNode;i1(n,e.type,a,t),n[rt]=t}catch(i){Te(e,e.return,i)}}function ff(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yc(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ir));else if(n!==4&&(n===27&&Da(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(yc(e,t,a),e=e.sibling;e!==null;)yc(e,t,a),e=e.sibling}function Ii(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ii(e,t,a),e=e.sibling;e!==null;)Ii(e,t,a),e=e.sibling}function pf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);et(t,n,a),t[at]=e,t[rt]=a}catch(r){Te(e,e.return,r)}}var la=!1,ke=!1,bc=!1,hf=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function Gg(e,t){if(e=e.containerInfo,Xc=fr,e=Es(e),mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var s=0,d=-1,h=-1,A=0,z=0,M=e,C=null;t:for(;;){for(var T;M!==a||i!==0&&M.nodeType!==3||(d=s+i),M!==r||n!==0&&M.nodeType!==3||(h=s+n),M.nodeType===3&&(s+=M.nodeValue.length),(T=M.firstChild)!==null;)C=M,M=T;for(;;){if(M===e)break t;if(C===a&&++A===i&&(d=s),C===r&&++z===n&&(h=s),(T=M.nextSibling)!==null)break;M=C,C=M.parentNode}M=T}a=d===-1||h===-1?null:{start:d,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qc={focusedElem:e,selectionRange:a},fr=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var te=Fa(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(te,r),n.__reactInternalSnapshotBeforeUpdate=e}catch($){Te(a,a.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Vc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function gf(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:va(e,a),n&4&&Ol(5,a);break;case 1:if(va(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){Te(a,a.return,s)}else{var i=Fa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Te(a,a.return,s)}}n&64&&of(a),n&512&&Ml(a,a.return);break;case 3:if(va(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ps(e,t)}catch(s){Te(a,a.return,s)}}break;case 27:t===null&&n&4&&pf(a);case 26:case 5:va(e,a),t===null&&n&4&&df(a),n&512&&Ml(a,a.return);break;case 12:va(e,a);break;case 13:va(e,a),n&4&&yf(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ig.bind(null,a),f1(e,a))));break;case 22:if(n=a.memoizedState!==null||la,!n){t=t!==null&&t.memoizedState!==null||ke,i=la;var r=ke;la=n,(ke=t)&&!r?Sa(e,a,(a.subtreeFlags&8772)!==0):va(e,a),la=i,ke=r}break;case 30:break;default:va(e,a)}}function xf(e){var t=e.alternate;t!==null&&(e.alternate=null,xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Jr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,ot=!1;function ia(e,t,a){for(a=a.child;a!==null;)mf(e,t,a),a=a.sibling}function mf(e,t,a){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(el,a)}catch{}switch(a.tag){case 26:ke||Lt(a,t),ia(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||Lt(a,t);var n=ze,i=ot;Da(a.type)&&(ze=a.stateNode,ot=!1),ia(e,t,a),Ll(a.stateNode),ze=n,ot=i;break;case 5:ke||Lt(a,t);case 6:if(n=ze,i=ot,ze=null,ia(e,t,a),ze=n,ot=i,ze!==null)if(ot)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(a.stateNode)}catch(r){Te(a,t,r)}else try{ze.removeChild(a.stateNode)}catch(r){Te(a,t,r)}break;case 18:ze!==null&&(ot?(e=ze,i0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Fl(e)):i0(ze,a.stateNode));break;case 4:n=ze,i=ot,ze=a.stateNode.containerInfo,ot=!0,ia(e,t,a),ze=n,ot=i;break;case 0:case 11:case 14:case 15:ke||ba(2,a,t),ke||ba(4,a,t),ia(e,t,a);break;case 1:ke||(Lt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&sf(a,t,n)),ia(e,t,a);break;case 21:ia(e,t,a);break;case 22:ke=(n=ke)||a.memoizedState!==null,ia(e,t,a),ke=n;break;default:ia(e,t,a)}}function yf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fl(e)}catch(a){Te(t,t.return,a)}}function Hg(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new hf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new hf),t;default:throw Error(c(435,e.tag))}}function vc(e,t){var a=Hg(e);t.forEach(function(n){var i=Pg.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function xt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,s=t,d=s;e:for(;d!==null;){switch(d.tag){case 27:if(Da(d.type)){ze=d.stateNode,ot=!1;break e}break;case 5:ze=d.stateNode,ot=!1;break e;case 3:case 4:ze=d.stateNode.containerInfo,ot=!0;break e}d=d.return}if(ze===null)throw Error(c(160));mf(r,s,i),ze=null,ot=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)bf(t,e),t=t.sibling}var kt=null;function bf(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xt(t,e),mt(e),n&4&&(ba(3,e,e.return),Ol(3,e),ba(5,e,e.return));break;case 1:xt(t,e),mt(e),n&512&&(ke||a===null||Lt(a,a.return)),n&64&&la&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=kt;if(xt(t,e),mt(e),n&512&&(ke||a===null||Lt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[nl]||r[at]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),et(r,n,a),r[at]=e,Qe(r),n=r;break e;case"link":var s=p0("link","href",i).get(n+(a.href||""));if(s){for(var d=0;d<s.length;d++)if(r=s[d],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(d,1);break t}}r=i.createElement(n),et(r,n,a),i.head.appendChild(r);break;case"meta":if(s=p0("meta","content",i).get(n+(a.content||""))){for(d=0;d<s.length;d++)if(r=s[d],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(d,1);break t}}r=i.createElement(n),et(r,n,a),i.head.appendChild(r);break;default:throw Error(c(468,n))}r[at]=e,Qe(r),n=r}e.stateNode=n}else h0(i,e.type,e.stateNode);else e.stateNode=f0(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?h0(i,e.type,e.stateNode):f0(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&xc(e,e.memoizedProps,a.memoizedProps)}break;case 27:xt(t,e),mt(e),n&512&&(ke||a===null||Lt(a,a.return)),a!==null&&n&4&&xc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(xt(t,e),mt(e),n&512&&(ke||a===null||Lt(a,a.return)),e.flags&32){i=e.stateNode;try{fn(i,"")}catch(T){Te(e,e.return,T)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,xc(e,i,a!==null?a.memoizedProps:i)),n&1024&&(bc=!0);break;case 6:if(xt(t,e),mt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(T){Te(e,e.return,T)}}break;case 3:if(or=null,i=kt,kt=ur(t.containerInfo),xt(t,e),kt=i,mt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Fl(t.containerInfo)}catch(T){Te(e,e.return,T)}bc&&(bc=!1,vf(e));break;case 4:n=kt,kt=ur(e.stateNode.containerInfo),xt(t,e),mt(e),kt=n;break;case 12:xt(t,e),mt(e);break;case 13:xt(t,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Tc=Gt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,vc(e,n)));break;case 22:i=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,A=la,z=ke;if(la=A||i,ke=z||h,xt(t,e),ke=z,la=A,mt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||h||la||ke||$a(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(r=h.stateNode,i)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{d=h.stateNode;var M=h.memoizedProps.style,C=M!=null&&M.hasOwnProperty("display")?M.display:null;d.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(T){Te(h,h.return,T)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=i?"":h.memoizedProps}catch(T){Te(h,h.return,T)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,vc(e,a))));break;case 19:xt(t,e),mt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,vc(e,n)));break;case 30:break;case 21:break;default:xt(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(ff(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var i=a.stateNode,r=mc(e);Ii(e,r,i);break;case 5:var s=a.stateNode;a.flags&32&&(fn(s,""),a.flags&=-33);var d=mc(e);Ii(e,d,s);break;case 3:case 4:var h=a.stateNode.containerInfo,A=mc(e);yc(e,A,h);break;default:throw Error(c(161))}}catch(z){Te(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function va(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gf(e,t.alternate,t),t=t.sibling}function $a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ba(4,t,t.return),$a(t);break;case 1:Lt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&sf(t,t.return,a),$a(t);break;case 27:Ll(t.stateNode);case 26:case 5:Lt(t,t.return),$a(t);break;case 22:t.memoizedState===null&&$a(t);break;case 30:$a(t);break;default:$a(t)}e=e.sibling}}function Sa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:Sa(i,r,a),Ol(4,r);break;case 1:if(Sa(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(A){Te(n,n.return,A)}if(n=r,i=n.updateQueue,i!==null){var d=n.stateNode;try{var h=i.shared.hiddenCallbacks;if(h!==null)for(i.shared.hiddenCallbacks=null,i=0;i<h.length;i++)Is(h[i],d)}catch(A){Te(n,n.return,A)}}a&&s&64&&of(r),Ml(r,r.return);break;case 27:pf(r);case 26:case 5:Sa(i,r,a),a&&n===null&&s&4&&df(r),Ml(r,r.return);break;case 12:Sa(i,r,a);break;case 13:Sa(i,r,a),a&&s&4&&yf(i,r);break;case 22:r.memoizedState===null&&Sa(i,r,a),Ml(r,r.return);break;case 30:break;default:Sa(i,r,a)}t=t.sibling}}function Sc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&yl(a))}function wc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&yl(e))}function Xt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sf(e,t,a,n),t=t.sibling}function Sf(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(e,t,a,n),i&2048&&Ol(9,t);break;case 1:Xt(e,t,a,n);break;case 3:Xt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&yl(e)));break;case 12:if(i&2048){Xt(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,d=r.onPostCommit;typeof d=="function"&&d(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){Te(t,t.return,h)}}else Xt(e,t,a,n);break;case 13:Xt(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?Xt(e,t,a,n):jl(e,t):r._visibility&2?Xt(e,t,a,n):(r._visibility|=2,Nn(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&Sc(s,t);break;case 24:Xt(e,t,a,n),i&2048&&wc(t.alternate,t);break;default:Xt(e,t,a,n)}}function Nn(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,s=t,d=a,h=n,A=s.flags;switch(s.tag){case 0:case 11:case 15:Nn(r,s,d,h,i),Ol(8,s);break;case 23:break;case 22:var z=s.stateNode;s.memoizedState!==null?z._visibility&2?Nn(r,s,d,h,i):jl(r,s):(z._visibility|=2,Nn(r,s,d,h,i)),i&&A&2048&&Sc(s.alternate,s);break;case 24:Nn(r,s,d,h,i),i&&A&2048&&wc(s.alternate,s);break;default:Nn(r,s,d,h,i)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:jl(a,n),i&2048&&Sc(n.alternate,n);break;case 24:jl(a,n),i&2048&&wc(n.alternate,n);break;default:jl(a,n)}t=t.sibling}}var Ul=8192;function On(e){if(e.subtreeFlags&Ul)for(e=e.child;e!==null;)wf(e),e=e.sibling}function wf(e){switch(e.tag){case 26:On(e),e.flags&Ul&&e.memoizedState!==null&&C1(kt,e.memoizedState,e.memoizedProps);break;case 5:On(e);break;case 3:case 4:var t=kt;kt=ur(e.stateNode.containerInfo),On(e),kt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ul,Ul=16777216,On(e),Ul=t):On(e));break;default:On(e)}}function Af(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ze=n,Cf(n,e)}Af(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ef(e),e=e.sibling}function Ef(e){switch(e.tag){case 0:case 11:case 15:kl(e),e.flags&2048&&ba(9,e,e.return);break;case 3:kl(e);break;case 12:kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Pi(e)):kl(e);break;default:kl(e)}}function Pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ze=n,Cf(n,e)}Af(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ba(8,t,t.return),Pi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Pi(t));break;default:Pi(t)}e=e.sibling}}function Cf(e,t){for(;Ze!==null;){var a=Ze;switch(a.tag){case 0:case 11:case 15:ba(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:yl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ze=n;else e:for(a=e;Ze!==null;){n=Ze;var i=n.sibling,r=n.return;if(xf(n),n===a){Ze=null;break e}if(i!==null){i.return=r,Ze=i;break e}Ze=r}}}var qg={getCacheForType:function(e){var t=nt(Le),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Lg=typeof WeakMap=="function"?WeakMap:Map,ve=0,_e=null,se=null,he=0,Se=0,yt=null,wa=!1,Mn=!1,Ac=!1,ra=0,Me=0,Aa=0,Ja=0,Ec=0,Ot=0,jn=0,Bl=null,st=null,Cc=!1,Tc=0,Fi=1/0,$i=null,Ea=null,We=0,Ca=null,Un=null,kn=0,Dc=0,_c=null,Tf=null,Yl=0,Rc=null;function bt(){if((ve&2)!==0&&he!==0)return he&-he;if(R.T!==null){var e=An;return e!==0?e:kc()}return qo()}function Df(){Ot===0&&(Ot=(he&536870912)===0||me?Bo():536870912);var e=Nt.current;return e!==null&&(e.flags|=32),Ot}function vt(e,t,a){(e===_e&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(Bn(e,0),Ta(e,he,Ot,!1)),al(e,a),((ve&2)===0||e!==_e)&&(e===_e&&((ve&2)===0&&(Ja|=a),Me===4&&Ta(e,he,Ot,!1)),Qt(e))}function _f(e,t,a){if((ve&6)!==0)throw Error(c(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||tl(e,t),i=n?Kg(e,t):Oc(e,t,!0),r=n;do{if(i===0){Mn&&!n&&Ta(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Xg(a)){i=Oc(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var d=e;i=Bl;var h=d.current.memoizedState.isDehydrated;if(h&&(Bn(d,s).flags|=256),s=Oc(d,s,!1),s!==2){if(Ac&&!h){d.errorRecoveryDisabledLanes|=r,Ja|=r,i=4;break e}r=st,st=i,r!==null&&(st===null?st=r:st.push.apply(st,r))}i=s}if(r=!1,i!==2)continue}}if(i===1){Bn(e,0),Ta(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ta(n,t,Ot,!wa);break e;case 2:st=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=Tc+300-Gt(),10<i)){if(Ta(n,t,Ot,!wa),ci(n,0,!0)!==0)break e;n.timeoutHandle=n0(Rf.bind(null,n,a,st,$i,Cc,t,Ot,Ja,jn,wa,r,2,-0,0),i);break e}Rf(n,a,st,$i,Cc,t,Ot,Ja,jn,wa,r,0,-0,0)}}break}while(!0);Qt(e)}function Rf(e,t,a,n,i,r,s,d,h,A,z,M,C,T){if(e.timeoutHandle=-1,M=t.subtreeFlags,(M&8192||(M&16785408)===16785408)&&(Kl={stylesheets:null,count:0,unsuspend:E1},wf(t),M=T1(),M!==null)){e.cancelPendingCommit=M(kf.bind(null,e,t,r,a,n,i,s,d,h,z,1,C,T)),Ta(e,r,s,!A);return}kf(e,t,r,a,n,i,s,d,h)}function Xg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!ht(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ta(e,t,a,n){t&=~Ec,t&=~Ja,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-pt(i),s=1<<r;n[r]=-1,i&=~s}a!==0&&Go(e,a,t)}function Ji(){return(ve&6)===0?(Gl(0),!1):!0}function zc(){if(se!==null){if(Se===0)var e=se.return;else e=se,Jt=Za=null,Vu(e),Rn=null,Rl=0,e=se;for(;e!==null;)cf(e.alternate,e),e=e.return;se=null}}function Bn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,u1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),zc(),_e=e,se=a=Pt(e.current,null),he=t,Se=0,yt=null,wa=!1,Mn=tl(e,t),Ac=!1,jn=Ot=Ec=Ja=Aa=Me=0,st=Bl=null,Cc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-pt(n),r=1<<i;t|=e[i],n&=~r}return ra=t,vi(),a}function zf(e,t){ue=null,R.H=Gi,t===vl||t===Ri?(t=Zs(),Se=3):t===Xs?(t=Zs(),Se=4):Se=t===Vd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,se===null&&(Me=1,Qi(e,Dt(t,e.current)))}function Nf(){var e=R.H;return R.H=Gi,e===null?Gi:e}function Of(){var e=R.A;return R.A=qg,e}function Nc(){Me=4,wa||(he&4194048)!==he&&Nt.current!==null||(Mn=!0),(Aa&134217727)===0&&(Ja&134217727)===0||_e===null||Ta(_e,he,Ot,!1)}function Oc(e,t,a){var n=ve;ve|=2;var i=Nf(),r=Of();(_e!==e||he!==t)&&($i=null,Bn(e,t)),t=!1;var s=Me;e:do try{if(Se!==0&&se!==null){var d=se,h=yt;switch(Se){case 8:zc(),s=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var A=Se;if(Se=0,yt=null,Yn(e,d,h,A),a&&Mn){s=0;break e}break;default:A=Se,Se=0,yt=null,Yn(e,d,h,A)}}Qg(),s=Me;break}catch(z){zf(e,z)}while(!0);return t&&e.shellSuspendCounter++,Jt=Za=null,ve=n,R.H=i,R.A=r,se===null&&(_e=null,he=0,vi()),s}function Qg(){for(;se!==null;)Mf(se)}function Kg(e,t){var a=ve;ve|=2;var n=Nf(),i=Of();_e!==e||he!==t?($i=null,Fi=Gt()+500,Bn(e,t)):Mn=tl(e,t);e:do try{if(Se!==0&&se!==null){t=se;var r=yt;t:switch(Se){case 1:Se=0,yt=null,Yn(e,t,r,1);break;case 2:case 9:if(Qs(r)){Se=0,yt=null,jf(t);break}t=function(){Se!==2&&Se!==9||_e!==e||(Se=7),Qt(e)},r.then(t,t);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:Qs(r)?(Se=0,yt=null,jf(t)):(Se=0,yt=null,Yn(e,t,r,7));break;case 5:var s=null;switch(se.tag){case 26:s=se.memoizedState;case 5:case 27:var d=se;if(!s||g0(s)){Se=0,yt=null;var h=d.sibling;if(h!==null)se=h;else{var A=d.return;A!==null?(se=A,Wi(A)):se=null}break t}}Se=0,yt=null,Yn(e,t,r,5);break;case 6:Se=0,yt=null,Yn(e,t,r,6);break;case 8:zc(),Me=6;break e;default:throw Error(c(462))}}Zg();break}catch(z){zf(e,z)}while(!0);return Jt=Za=null,R.H=n,R.A=i,ve=a,se!==null?0:(_e=null,he=0,vi(),Me)}function Zg(){for(;se!==null&&!hh();)Mf(se)}function Mf(e){var t=rf(e.alternate,e,ra);e.memoizedProps=e.pendingProps,t===null?Wi(e):se=t}function jf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Wd(a,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Wd(a,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Vu(t);default:cf(a,t),t=se=js(t,ra),t=rf(a,t,ra)}e.memoizedProps=e.pendingProps,t===null?Wi(e):se=t}function Yn(e,t,a,n){Jt=Za=null,Vu(t),Rn=null,Rl=0;var i=t.return;try{if(Ug(e,i,t,a,he)){Me=1,Qi(e,Dt(a,e.current)),se=null;return}}catch(r){if(i!==null)throw se=i,r;Me=1,Qi(e,Dt(a,e.current)),se=null;return}t.flags&32768?(me||n===1?e=!0:Mn||(he&536870912)!==0?e=!1:(wa=e=!0,(n===2||n===9||n===3||n===6)&&(n=Nt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Uf(t,e)):Wi(t)}function Wi(e){var t=e;do{if((t.flags&32768)!==0){Uf(t,wa);return}e=t.return;var a=Bg(t.alternate,t,ra);if(a!==null){se=a;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);Me===0&&(Me=5)}function Uf(e,t){do{var a=Yg(e.alternate,e);if(a!==null){a.flags&=32767,se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=a}while(e!==null);Me=6,se=null}function kf(e,t,a,n,i,r,s,d,h){e.cancelPendingCommit=null;do er();while(We!==0);if((ve&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=wu,Eh(e,a,r,s,d,h),e===_e&&(se=_e=null,he=0),Un=t,Ca=e,kn=a,Dc=r,_c=i,Tf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fg(ii,function(){return qf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null,i=L.p,L.p=2,s=ve,ve|=4;try{Gg(e,t,a)}finally{ve=s,L.p=i,R.T=n}}We=1,Bf(),Yf(),Gf()}}function Bf(){if(We===1){We=0;var e=Ca,t=Un,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var n=L.p;L.p=2;var i=ve;ve|=4;try{bf(t,e);var r=Qc,s=Es(e.containerInfo),d=r.focusedElem,h=r.selectionRange;if(s!==d&&d&&d.ownerDocument&&As(d.ownerDocument.documentElement,d)){if(h!==null&&mu(d)){var A=h.start,z=h.end;if(z===void 0&&(z=A),"selectionStart"in d)d.selectionStart=A,d.selectionEnd=Math.min(z,d.value.length);else{var M=d.ownerDocument||document,C=M&&M.defaultView||window;if(C.getSelection){var T=C.getSelection(),te=d.textContent.length,$=Math.min(h.start,te),Ee=h.end===void 0?$:Math.min(h.end,te);!T.extend&&$>Ee&&(s=Ee,Ee=$,$=s);var b=ws(d,$),m=ws(d,Ee);if(b&&m&&(T.rangeCount!==1||T.anchorNode!==b.node||T.anchorOffset!==b.offset||T.focusNode!==m.node||T.focusOffset!==m.offset)){var v=M.createRange();v.setStart(b.node,b.offset),T.removeAllRanges(),$>Ee?(T.addRange(v),T.extend(m.node,m.offset)):(v.setEnd(m.node,m.offset),T.addRange(v))}}}}for(M=[],T=d;T=T.parentNode;)T.nodeType===1&&M.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<M.length;d++){var N=M[d];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}fr=!!Xc,Qc=Xc=null}finally{ve=i,L.p=n,R.T=a}}e.current=t,We=2}}function Yf(){if(We===2){We=0;var e=Ca,t=Un,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var n=L.p;L.p=2;var i=ve;ve|=4;try{gf(e,t.alternate,t)}finally{ve=i,L.p=n,R.T=a}}We=3}}function Gf(){if(We===4||We===3){We=0,gh();var e=Ca,t=Un,a=kn,n=Tf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,Un=Ca=null,Hf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ea=null),Fr(a),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(el,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=R.T,i=L.p,L.p=2,R.T=null;try{for(var r=e.onRecoverableError,s=0;s<n.length;s++){var d=n[s];r(d.value,{componentStack:d.stack})}}finally{R.T=t,L.p=i}}(kn&3)!==0&&er(),Qt(e),i=e.pendingLanes,(a&4194090)!==0&&(i&42)!==0?e===Rc?Yl++:(Yl=0,Rc=e):Yl=0,Gl(0)}}function Hf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,yl(t)))}function er(e){return Bf(),Yf(),Gf(),qf()}function qf(){if(We!==5)return!1;var e=Ca,t=Dc;Dc=0;var a=Fr(kn),n=R.T,i=L.p;try{L.p=32>a?32:a,R.T=null,a=_c,_c=null;var r=Ca,s=kn;if(We=0,Un=Ca=null,kn=0,(ve&6)!==0)throw Error(c(331));var d=ve;if(ve|=4,Ef(r.current),Sf(r,r.current,s,a),ve=d,Gl(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(el,r)}catch{}return!0}finally{L.p=i,R.T=n,Hf(e,t)}}function Lf(e,t,a){t=Dt(a,t),t=uc(e.stateNode,t,2),e=ga(e,t,2),e!==null&&(al(e,2),Qt(e))}function Te(e,t,a){if(e.tag===3)Lf(e,e,a);else for(;t!==null;){if(t.tag===3){Lf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ea===null||!Ea.has(n))){e=Dt(a,e),a=Kd(2),n=ga(t,a,2),n!==null&&(Zd(a,n,t,e),al(n,2),Qt(n));break}}t=t.return}}function Mc(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Lg;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Ac=!0,i.add(a),e=Vg.bind(null,e,t,a),t.then(e,e))}function Vg(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,_e===e&&(he&a)===a&&(Me===4||Me===3&&(he&62914560)===he&&300>Gt()-Tc?(ve&2)===0&&Bn(e,0):Ec|=a,jn===he&&(jn=0)),Qt(e)}function Xf(e,t){t===0&&(t=Yo()),e=bn(e,t),e!==null&&(al(e,t),Qt(e))}function Ig(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Xf(e,a)}function Pg(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),Xf(e,a)}function Fg(e,t){return Zr(e,t)}var tr=null,Gn=null,jc=!1,ar=!1,Uc=!1,Wa=0;function Qt(e){e!==Gn&&e.next===null&&(Gn===null?tr=Gn=e:Gn=Gn.next=e),ar=!0,jc||(jc=!0,Jg())}function Gl(e,t){if(!Uc&&ar){Uc=!0;do for(var a=!1,n=tr;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var s=n.suspendedLanes,d=n.pingedLanes;r=(1<<31-pt(42|e)+1)-1,r&=i&~(s&~d),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Vf(n,r))}else r=he,r=ci(n,n===_e?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||tl(n,r)||(a=!0,Vf(n,r));n=n.next}while(a);Uc=!1}}function $g(){Qf()}function Qf(){ar=jc=!1;var e=0;Wa!==0&&(r1()&&(e=Wa),Wa=0);for(var t=Gt(),a=null,n=tr;n!==null;){var i=n.next,r=Kf(n,t);r===0?(n.next=null,a===null?tr=i:a.next=i,i===null&&(Gn=a)):(a=n,(e!==0||(r&3)!==0)&&(ar=!0)),n=i}Gl(e)}function Kf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-pt(r),d=1<<s,h=i[s];h===-1?((d&a)===0||(d&n)!==0)&&(i[s]=Ah(d,t)):h<=t&&(e.expiredLanes|=d),r&=~d}if(t=_e,a=he,a=ci(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Vr(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||tl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Vr(n),Fr(a)){case 2:case 8:a=Uo;break;case 32:a=ii;break;case 268435456:a=ko;break;default:a=ii}return n=Zf.bind(null,e),a=Zr(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Vr(n),e.callbackPriority=2,e.callbackNode=null,2}function Zf(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(er()&&e.callbackNode!==a)return null;var n=he;return n=ci(e,e===_e?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(_f(e,n,t),Kf(e,Gt()),e.callbackNode!=null&&e.callbackNode===a?Zf.bind(null,e):null)}function Vf(e,t){if(er())return null;_f(e,t,!0)}function Jg(){c1(function(){(ve&6)!==0?Zr(jo,$g):Qf()})}function kc(){return Wa===0&&(Wa=Bo()),Wa}function If(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pi(""+e)}function Pf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Wg(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=If((i[rt]||null).action),s=n.submitter;s&&(t=(t=s[rt]||null)?If(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var d=new mi("action","action",null,n,i);e.push({event:d,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Wa!==0){var h=s?Pf(i,s):new FormData(i);ac(a,{pending:!0,data:h,method:i.method,action:r},null,h)}}else typeof r=="function"&&(d.preventDefault(),h=s?Pf(i,s):new FormData(i),ac(a,{pending:!0,data:h,method:i.method,action:r},r,h))},currentTarget:i}]})}}for(var Bc=0;Bc<Su.length;Bc++){var Yc=Su[Bc],e1=Yc.toLowerCase(),t1=Yc[0].toUpperCase()+Yc.slice(1);Ut(e1,"on"+t1)}Ut(Ds,"onAnimationEnd"),Ut(_s,"onAnimationIteration"),Ut(Rs,"onAnimationStart"),Ut("dblclick","onDoubleClick"),Ut("focusin","onFocus"),Ut("focusout","onBlur"),Ut(yg,"onTransitionRun"),Ut(bg,"onTransitionStart"),Ut(vg,"onTransitionCancel"),Ut(zs,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),Ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ba("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hl));function Ff(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var s=n.length-1;0<=s;s--){var d=n[s],h=d.instance,A=d.currentTarget;if(d=d.listener,h!==r&&i.isPropagationStopped())break e;r=d,i.currentTarget=A;try{r(i)}catch(z){Xi(z)}i.currentTarget=null,r=h}else for(s=0;s<n.length;s++){if(d=n[s],h=d.instance,A=d.currentTarget,d=d.listener,h!==r&&i.isPropagationStopped())break e;r=d,i.currentTarget=A;try{r(i)}catch(z){Xi(z)}i.currentTarget=null,r=h}}}}function de(e,t){var a=t[$r];a===void 0&&(a=t[$r]=new Set);var n=e+"__bubble";a.has(n)||($f(t,e,2,!1),a.add(n))}function Gc(e,t,a){var n=0;t&&(n|=4),$f(a,e,n,t)}var nr="_reactListening"+Math.random().toString(36).slice(2);function Hc(e){if(!e[nr]){e[nr]=!0,Xo.forEach(function(a){a!=="selectionchange"&&(a1.has(a)||Gc(a,!1,e),Gc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nr]||(t[nr]=!0,Gc("selectionchange",!1,t))}}function $f(e,t,a,n){switch(S0(t)){case 2:var i=R1;break;case 8:i=z1;break;default:i=eo}a=i.bind(null,t,a,e),i=void 0,!cu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function qc(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var d=n.stateNode.containerInfo;if(d===i)break;if(s===4)for(s=n.return;s!==null;){var h=s.tag;if((h===3||h===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;d!==null;){if(s=rn(d),s===null)return;if(h=s.tag,h===5||h===6||h===26||h===27){n=r=s;continue e}d=d.parentNode}}n=n.return}ns(function(){var A=r,z=ru(a),M=[];e:{var C=Ns.get(e);if(C!==void 0){var T=mi,te=e;switch(e){case"keypress":if(gi(a)===0)break e;case"keydown":case"keyup":T=Fh;break;case"focusin":te="focus",T=fu;break;case"focusout":te="blur",T=fu;break;case"beforeblur":case"afterblur":T=fu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Yh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Wh;break;case Ds:case _s:case Rs:T=qh;break;case zs:T=tg;break;case"scroll":case"scrollend":T=kh;break;case"wheel":T=ng;break;case"copy":case"cut":case"paste":T=Xh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=cs;break;case"toggle":case"beforetoggle":T=ig}var $=(t&4)!==0,Ee=!$&&(e==="scroll"||e==="scrollend"),b=$?C!==null?C+"Capture":null:C;$=[];for(var m=A,v;m!==null;){var N=m;if(v=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||v===null||b===null||(N=il(m,b),N!=null&&$.push(ql(m,N,v))),Ee)break;m=m.return}0<$.length&&(C=new T(C,te,null,a,z),M.push({event:C,listeners:$}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",C&&a!==iu&&(te=a.relatedTarget||a.fromElement)&&(rn(te)||te[ln]))break e;if((T||C)&&(C=z.window===z?z:(C=z.ownerDocument)?C.defaultView||C.parentWindow:window,T?(te=a.relatedTarget||a.toElement,T=A,te=te?rn(te):null,te!==null&&(Ee=g(te),$=te.tag,te!==Ee||$!==5&&$!==27&&$!==6)&&(te=null)):(T=null,te=A),T!==te)){if($=rs,N="onMouseLeave",b="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&($=cs,N="onPointerLeave",b="onPointerEnter",m="pointer"),Ee=T==null?C:ll(T),v=te==null?C:ll(te),C=new $(N,m+"leave",T,a,z),C.target=Ee,C.relatedTarget=v,N=null,rn(z)===A&&($=new $(b,m+"enter",te,a,z),$.target=v,$.relatedTarget=Ee,N=$),Ee=N,T&&te)t:{for($=T,b=te,m=0,v=$;v;v=Hn(v))m++;for(v=0,N=b;N;N=Hn(N))v++;for(;0<m-v;)$=Hn($),m--;for(;0<v-m;)b=Hn(b),v--;for(;m--;){if($===b||b!==null&&$===b.alternate)break t;$=Hn($),b=Hn(b)}$=null}else $=null;T!==null&&Jf(M,C,T,$,!1),te!==null&&Ee!==null&&Jf(M,Ee,te,$,!0)}}e:{if(C=A?ll(A):window,T=C.nodeName&&C.nodeName.toLowerCase(),T==="select"||T==="input"&&C.type==="file")var K=xs;else if(hs(C))if(ms)K=gg;else{K=pg;var oe=fg}else T=C.nodeName,!T||T.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?A&&lu(A.elementType)&&(K=xs):K=hg;if(K&&(K=K(e,A))){gs(M,K,a,z);break e}oe&&oe(e,C,A),e==="focusout"&&A&&C.type==="number"&&A.memoizedProps.value!=null&&nu(C,"number",C.value)}switch(oe=A?ll(A):window,e){case"focusin":(hs(oe)||oe.contentEditable==="true")&&(xn=oe,yu=A,pl=null);break;case"focusout":pl=yu=xn=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Cs(M,a,z);break;case"selectionchange":if(mg)break;case"keydown":case"keyup":Cs(M,a,z)}var I;if(hu)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else gn?fs(e,a)&&(J="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(J="onCompositionStart");J&&(os&&a.locale!=="ko"&&(gn||J!=="onCompositionStart"?J==="onCompositionEnd"&&gn&&(I=ls()):(da=z,ou="value"in da?da.value:da.textContent,gn=!0)),oe=lr(A,J),0<oe.length&&(J=new us(J,e,null,a,z),M.push({event:J,listeners:oe}),I?J.data=I:(I=ps(a),I!==null&&(J.data=I)))),(I=ug?cg(e,a):og(e,a))&&(J=lr(A,"onBeforeInput"),0<J.length&&(oe=new us("onBeforeInput","beforeinput",null,a,z),M.push({event:oe,listeners:J}),oe.data=I)),Wg(M,e,A,a,z)}Ff(M,t)})}function ql(e,t,a){return{instance:e,listener:t,currentTarget:a}}function lr(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=il(e,a),i!=null&&n.unshift(ql(e,i,r)),i=il(e,t),i!=null&&n.push(ql(e,i,r))),e.tag===3)return n;e=e.return}return[]}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jf(e,t,a,n,i){for(var r=t._reactName,s=[];a!==null&&a!==n;){var d=a,h=d.alternate,A=d.stateNode;if(d=d.tag,h!==null&&h===n)break;d!==5&&d!==26&&d!==27||A===null||(h=A,i?(A=il(a,r),A!=null&&s.unshift(ql(a,A,h))):i||(A=il(a,r),A!=null&&s.push(ql(a,A,h)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var n1=/\r\n?/g,l1=/\u0000|\uFFFD/g;function Wf(e){return(typeof e=="string"?e:""+e).replace(n1,`
`).replace(l1,"")}function e0(e,t){return t=Wf(t),Wf(e)===t}function ir(){}function Ae(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||fn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&fn(e,""+n);break;case"className":si(e,"class",n);break;case"tabIndex":si(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":si(e,a,n);break;case"style":ts(e,n,r);break;case"data":if(t!=="object"){si(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=pi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ae(e,t,"name",i.name,i,null),Ae(e,t,"formEncType",i.formEncType,i,null),Ae(e,t,"formMethod",i.formMethod,i,null),Ae(e,t,"formTarget",i.formTarget,i,null)):(Ae(e,t,"encType",i.encType,i,null),Ae(e,t,"method",i.method,i,null),Ae(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=pi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=ir);break;case"onScroll":n!=null&&de("scroll",e);break;case"onScrollEnd":n!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=pi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":de("beforetoggle",e),de("toggle",e),oi(e,"popover",n);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":oi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=jh.get(a)||a,oi(e,a,n))}}function Lc(e,t,a,n,i,r){switch(a){case"style":ts(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?fn(e,n):(typeof n=="number"||typeof n=="bigint")&&fn(e,""+n);break;case"onScroll":n!=null&&de("scroll",e);break;case"onScrollEnd":n!=null&&de("scrollend",e);break;case"onClick":n!=null&&(e.onclick=ir);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[rt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):oi(e,a,n)}}}function et(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var s=a[r];if(s!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ae(e,t,r,s,a,null)}}i&&Ae(e,t,"srcSet",a.srcSet,a,null),n&&Ae(e,t,"src",a.src,a,null);return;case"input":de("invalid",e);var d=r=s=i=null,h=null,A=null;for(n in a)if(a.hasOwnProperty(n)){var z=a[n];if(z!=null)switch(n){case"name":i=z;break;case"type":s=z;break;case"checked":h=z;break;case"defaultChecked":A=z;break;case"value":r=z;break;case"defaultValue":d=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:Ae(e,t,n,z,a,null)}}$o(e,r,d,h,A,s,i,!1),di(e);return;case"select":de("invalid",e),n=s=r=null;for(i in a)if(a.hasOwnProperty(i)&&(d=a[i],d!=null))switch(i){case"value":r=d;break;case"defaultValue":s=d;break;case"multiple":n=d;default:Ae(e,t,i,d,a,null)}t=r,a=s,e.multiple=!!n,t!=null?dn(e,!!n,t,!1):a!=null&&dn(e,!!n,a,!0);return;case"textarea":de("invalid",e),r=i=n=null;for(s in a)if(a.hasOwnProperty(s)&&(d=a[s],d!=null))switch(s){case"value":n=d;break;case"defaultValue":i=d;break;case"children":r=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(c(91));break;default:Ae(e,t,s,d,a,null)}Wo(e,n,i,r),di(e);return;case"option":for(h in a)if(a.hasOwnProperty(h)&&(n=a[h],n!=null))switch(h){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ae(e,t,h,n,a,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(n=0;n<Hl.length;n++)de(Hl[n],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in a)if(a.hasOwnProperty(A)&&(n=a[A],n!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ae(e,t,A,n,a,null)}return;default:if(lu(t)){for(z in a)a.hasOwnProperty(z)&&(n=a[z],n!==void 0&&Lc(e,t,z,n,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(n=a[d],n!=null&&Ae(e,t,d,n,a,null))}function i1(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,s=null,d=null,h=null,A=null,z=null;for(T in a){var M=a[T];if(a.hasOwnProperty(T)&&M!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":h=M;default:n.hasOwnProperty(T)||Ae(e,t,T,null,n,M)}}for(var C in n){var T=n[C];if(M=a[C],n.hasOwnProperty(C)&&(T!=null||M!=null))switch(C){case"type":r=T;break;case"name":i=T;break;case"checked":A=T;break;case"defaultChecked":z=T;break;case"value":s=T;break;case"defaultValue":d=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:T!==M&&Ae(e,t,C,T,n,M)}}au(e,s,d,h,A,z,r,i);return;case"select":T=s=d=C=null;for(r in a)if(h=a[r],a.hasOwnProperty(r)&&h!=null)switch(r){case"value":break;case"multiple":T=h;default:n.hasOwnProperty(r)||Ae(e,t,r,null,n,h)}for(i in n)if(r=n[i],h=a[i],n.hasOwnProperty(i)&&(r!=null||h!=null))switch(i){case"value":C=r;break;case"defaultValue":d=r;break;case"multiple":s=r;default:r!==h&&Ae(e,t,i,r,n,h)}t=d,a=s,n=T,C!=null?dn(e,!!a,C,!1):!!n!=!!a&&(t!=null?dn(e,!!a,t,!0):dn(e,!!a,a?[]:"",!1));return;case"textarea":T=C=null;for(d in a)if(i=a[d],a.hasOwnProperty(d)&&i!=null&&!n.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Ae(e,t,d,null,n,i)}for(s in n)if(i=n[s],r=a[s],n.hasOwnProperty(s)&&(i!=null||r!=null))switch(s){case"value":C=i;break;case"defaultValue":T=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==r&&Ae(e,t,s,i,n,r)}Jo(e,C,T);return;case"option":for(var te in a)if(C=a[te],a.hasOwnProperty(te)&&C!=null&&!n.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Ae(e,t,te,null,n,C)}for(h in n)if(C=n[h],T=a[h],n.hasOwnProperty(h)&&C!==T&&(C!=null||T!=null))switch(h){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Ae(e,t,h,C,n,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in a)C=a[$],a.hasOwnProperty($)&&C!=null&&!n.hasOwnProperty($)&&Ae(e,t,$,null,n,C);for(A in n)if(C=n[A],T=a[A],n.hasOwnProperty(A)&&C!==T&&(C!=null||T!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:Ae(e,t,A,C,n,T)}return;default:if(lu(t)){for(var Ee in a)C=a[Ee],a.hasOwnProperty(Ee)&&C!==void 0&&!n.hasOwnProperty(Ee)&&Lc(e,t,Ee,void 0,n,C);for(z in n)C=n[z],T=a[z],!n.hasOwnProperty(z)||C===T||C===void 0&&T===void 0||Lc(e,t,z,C,n,T);return}}for(var b in a)C=a[b],a.hasOwnProperty(b)&&C!=null&&!n.hasOwnProperty(b)&&Ae(e,t,b,null,n,C);for(M in n)C=n[M],T=a[M],!n.hasOwnProperty(M)||C===T||C==null&&T==null||Ae(e,t,M,C,n,T)}var Xc=null,Qc=null;function rr(e){return e.nodeType===9?e:e.ownerDocument}function t0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function a0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Kc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zc=null;function r1(){var e=window.event;return e&&e.type==="popstate"?e===Zc?!1:(Zc=e,!0):(Zc=null,!1)}var n0=typeof setTimeout=="function"?setTimeout:void 0,u1=typeof clearTimeout=="function"?clearTimeout:void 0,l0=typeof Promise=="function"?Promise:void 0,c1=typeof queueMicrotask=="function"?queueMicrotask:typeof l0<"u"?function(e){return l0.resolve(null).then(e).catch(o1)}:n0;function o1(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function i0(e,t){var a=t,n=0,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<n&&8>n){a=n;var s=e.ownerDocument;if(a&1&&Ll(s.documentElement),a&2&&Ll(s.body),a&4)for(a=s.head,Ll(a),s=a.firstChild;s;){var d=s.nextSibling,h=s.nodeName;s[nl]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=d}}if(i===0){e.removeChild(r),Fl(t);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=r}while(a);Fl(t)}function Vc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vc(a),Jr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function s1(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[nl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Bt(e.nextSibling),e===null)break}return null}function d1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Bt(e.nextSibling),e===null))return null;return e}function Ic(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function f1(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Pc=null;function r0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function u0(e,t,a){switch(t=rr(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ll(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Jr(e)}var Mt=new Map,c0=new Set;function ur(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=L.d;L.d={f:p1,r:h1,D:g1,C:x1,L:m1,m:y1,X:v1,S:b1,M:S1};function p1(){var e=ua.f(),t=Ji();return e||t}function h1(e){var t=un(e);t!==null&&t.tag===5&&t.type==="form"?Dd(t):ua.r(e)}var qn=typeof document>"u"?null:document;function o0(e,t,a){var n=qn;if(n&&typeof t=="string"&&t){var i=Tt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),c0.has(i)||(c0.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),et(t,"link",e),Qe(t),n.head.appendChild(t)))}}function g1(e){ua.D(e),o0("dns-prefetch",e,null)}function x1(e,t){ua.C(e,t),o0("preconnect",e,t)}function m1(e,t,a){ua.L(e,t,a);var n=qn;if(n&&e&&t){var i='link[rel="preload"][as="'+Tt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Tt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Tt(a.imageSizes)+'"]')):i+='[href="'+Tt(e)+'"]';var r=i;switch(t){case"style":r=Ln(e);break;case"script":r=Xn(e)}Mt.has(r)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Mt.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Xl(r))||t==="script"&&n.querySelector(Ql(r))||(t=n.createElement("link"),et(t,"link",e),Qe(t),n.head.appendChild(t)))}}function y1(e,t){ua.m(e,t);var a=qn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Tt(n)+'"][href="'+Tt(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Xn(e)}if(!Mt.has(r)&&(e=E({rel:"modulepreload",href:e},t),Mt.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ql(r)))return}n=a.createElement("link"),et(n,"link",e),Qe(n),a.head.appendChild(n)}}}function b1(e,t,a){ua.S(e,t,a);var n=qn;if(n&&e){var i=cn(n).hoistableStyles,r=Ln(e);t=t||"default";var s=i.get(r);if(!s){var d={loading:0,preload:null};if(s=n.querySelector(Xl(r)))d.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Mt.get(r))&&Fc(e,a);var h=s=n.createElement("link");Qe(h),et(h,"link",e),h._p=new Promise(function(A,z){h.onload=A,h.onerror=z}),h.addEventListener("load",function(){d.loading|=1}),h.addEventListener("error",function(){d.loading|=2}),d.loading|=4,cr(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:d},i.set(r,s)}}}function v1(e,t){ua.X(e,t);var a=qn;if(a&&e){var n=cn(a).hoistableScripts,i=Xn(e),r=n.get(i);r||(r=a.querySelector(Ql(i)),r||(e=E({src:e,async:!0},t),(t=Mt.get(i))&&$c(e,t),r=a.createElement("script"),Qe(r),et(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function S1(e,t){ua.M(e,t);var a=qn;if(a&&e){var n=cn(a).hoistableScripts,i=Xn(e),r=n.get(i);r||(r=a.querySelector(Ql(i)),r||(e=E({src:e,async:!0,type:"module"},t),(t=Mt.get(i))&&$c(e,t),r=a.createElement("script"),Qe(r),et(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function s0(e,t,a,n){var i=(i=Z.current)?ur(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ln(a.href),a=cn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ln(a.href);var r=cn(i).hoistableStyles,s=r.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=i.querySelector(Xl(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Mt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mt.set(e,a),r||w1(i,e,a,s.state))),t&&n===null)throw Error(c(528,""));return s}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Xn(a),a=cn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ln(e){return'href="'+Tt(e)+'"'}function Xl(e){return'link[rel="stylesheet"]['+e+"]"}function d0(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function w1(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),et(t,"link",a),Qe(t),e.head.appendChild(t))}function Xn(e){return'[src="'+Tt(e)+'"]'}function Ql(e){return"script[async]"+e}function f0(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Tt(a.href)+'"]');if(n)return t.instance=n,Qe(n),n;var i=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Qe(n),et(n,"style",i),cr(n,a.precedence,e),t.instance=n;case"stylesheet":i=Ln(a.href);var r=e.querySelector(Xl(i));if(r)return t.state.loading|=4,t.instance=r,Qe(r),r;n=d0(a),(i=Mt.get(i))&&Fc(n,i),r=(e.ownerDocument||e).createElement("link"),Qe(r);var s=r;return s._p=new Promise(function(d,h){s.onload=d,s.onerror=h}),et(r,"link",n),t.state.loading|=4,cr(r,a.precedence,e),t.instance=r;case"script":return r=Xn(a.src),(i=e.querySelector(Ql(r)))?(t.instance=i,Qe(i),i):(n=a,(i=Mt.get(r))&&(n=E({},a),$c(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Qe(i),et(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,cr(n,a.precedence,e));return t.instance}function cr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,s=0;s<n.length;s++){var d=n[s];if(d.dataset.precedence===t)r=d;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var or=null;function p0(e,t,a){if(or===null){var n=new Map,i=or=new Map;i.set(a,n)}else i=or,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[nl]||r[at]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var d=n.get(s);d?d.push(r):n.set(s,[r])}}return n}function h0(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function A1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function g0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Kl=null;function E1(){}function C1(e,t,a){if(Kl===null)throw Error(c(475));var n=Kl;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Ln(a.href),r=e.querySelector(Xl(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=sr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,Qe(r);return}r=e.ownerDocument||e,a=d0(a),(i=Mt.get(i))&&Fc(a,i),r=r.createElement("link"),Qe(r);var s=r;s._p=new Promise(function(d,h){s.onload=d,s.onerror=h}),et(r,"link",a),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=sr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function T1(){if(Kl===null)throw Error(c(475));var e=Kl;return e.stylesheets&&e.count===0&&Jc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Jc(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function sr(){if(this.count--,this.count===0){if(this.stylesheets)Jc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dr=null;function Jc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dr=new Map,t.forEach(D1,e),dr=null,sr.call(e))}function D1(e,t){if(!(t.state.loading&4)){var a=dr.get(e);if(a)var n=a.get(null);else{a=new Map,dr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var s=i[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}i=t.instance,s=i.getAttribute("data-precedence"),r=a.get(s)||n,r===n&&a.set(null,i),a.set(s,i),this.count++,n=sr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Zl={$$typeof:ee,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function _1(e,t,a,n,i,r,s,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ir(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ir(0),this.hiddenUpdates=Ir(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function x0(e,t,a,n,i,r,s,d,h,A,z,M){return e=new _1(e,t,a,s,d,h,A,M),t=1,r===!0&&(t|=24),r=gt(3,null,null,t),e.current=r,r.stateNode=e,t=Mu(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},Bu(r),e}function m0(e){return e?(e=vn,e):vn}function y0(e,t,a,n,i,r){i=m0(i),n.context===null?n.context=i:n.pendingContext=i,n=ha(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=ga(e,n,t),a!==null&&(vt(a,e,t),wl(a,e,t))}function b0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Wc(e,t){b0(e,t),(e=e.alternate)&&b0(e,t)}function v0(e){if(e.tag===13){var t=bn(e,67108864);t!==null&&vt(t,e,67108864),Wc(e,67108864)}}var fr=!0;function R1(e,t,a,n){var i=R.T;R.T=null;var r=L.p;try{L.p=2,eo(e,t,a,n)}finally{L.p=r,R.T=i}}function z1(e,t,a,n){var i=R.T;R.T=null;var r=L.p;try{L.p=8,eo(e,t,a,n)}finally{L.p=r,R.T=i}}function eo(e,t,a,n){if(fr){var i=to(n);if(i===null)qc(e,t,n,pr,a),w0(e,n);else if(O1(i,e,t,a,n))n.stopPropagation();else if(w0(e,n),t&4&&-1<N1.indexOf(e)){for(;i!==null;){var r=un(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=ka(r.pendingLanes);if(s!==0){var d=r;for(d.pendingLanes|=2,d.entangledLanes|=2;s;){var h=1<<31-pt(s);d.entanglements[1]|=h,s&=~h}Qt(r),(ve&6)===0&&(Fi=Gt()+500,Gl(0))}}break;case 13:d=bn(r,2),d!==null&&vt(d,r,2),Ji(),Wc(r,2)}if(r=to(n),r===null&&qc(e,t,n,pr,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else qc(e,t,n,null,a)}}function to(e){return e=ru(e),ao(e)}var pr=null;function ao(e){if(pr=null,e=rn(e),e!==null){var t=g(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=w(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pr=e,null}function S0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xh()){case jo:return 2;case Uo:return 8;case ii:case mh:return 32;case ko:return 268435456;default:return 32}default:return 32}}var no=!1,_a=null,Ra=null,za=null,Vl=new Map,Il=new Map,Na=[],N1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w0(e,t){switch(e){case"focusin":case"focusout":_a=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":Vl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(t.pointerId)}}function Pl(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=un(t),t!==null&&v0(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function O1(e,t,a,n,i){switch(t){case"focusin":return _a=Pl(_a,e,t,a,n,i),!0;case"dragenter":return Ra=Pl(Ra,e,t,a,n,i),!0;case"mouseover":return za=Pl(za,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return Vl.set(r,Pl(Vl.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,Il.set(r,Pl(Il.get(r)||null,e,t,a,n,i)),!0}return!1}function A0(e){var t=rn(e.target);if(t!==null){var a=g(t);if(a!==null){if(t=a.tag,t===13){if(t=w(a),t!==null){e.blockedOn=t,Ch(e.priority,function(){if(a.tag===13){var n=bt();n=Pr(n);var i=bn(a,n);i!==null&&vt(i,a,n),Wc(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=to(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);iu=n,a.target.dispatchEvent(n),iu=null}else return t=un(a),t!==null&&v0(t),e.blockedOn=a,!1;t.shift()}return!0}function E0(e,t,a){hr(e)&&a.delete(t)}function M1(){no=!1,_a!==null&&hr(_a)&&(_a=null),Ra!==null&&hr(Ra)&&(Ra=null),za!==null&&hr(za)&&(za=null),Vl.forEach(E0),Il.forEach(E0)}function gr(e,t){e.blockedOn===t&&(e.blockedOn=null,no||(no=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,M1)))}var xr=null;function C0(e){xr!==e&&(xr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){xr===e&&(xr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(ao(n||a)===null)continue;break}var r=un(a);r!==null&&(e.splice(t,3),t-=3,ac(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Fl(e){function t(h){return gr(h,e)}_a!==null&&gr(_a,e),Ra!==null&&gr(Ra,e),za!==null&&gr(za,e),Vl.forEach(t),Il.forEach(t);for(var a=0;a<Na.length;a++){var n=Na[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)A0(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],s=i[rt]||null;if(typeof r=="function")s||C0(a);else if(s){var d=null;if(r&&r.hasAttribute("formAction")){if(i=r,s=r[rt]||null)d=s.formAction;else if(ao(i)!==null)continue}else d=s.action;typeof d=="function"?a[n+1]=d:(a.splice(n,3),n-=3),C0(a)}}}function lo(e){this._internalRoot=e}mr.prototype.render=lo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=bt();y0(a,n,e,t,null,null)},mr.prototype.unmount=lo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;y0(e.current,2,null,e,null,null),Ji(),t[ln]=null}};function mr(e){this._internalRoot=e}mr.prototype.unstable_scheduleHydration=function(e){if(e){var t=qo();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Na.length&&t!==0&&t<Na[a].priority;a++);Na.splice(a,0,e),a===0&&A0(e)}};var T0=u.version;if(T0!=="19.1.0")throw Error(c(527,T0,"19.1.0"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=S(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var j1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{el=yr.inject(j1),ft=yr}catch{}}return Jl.createRoot=function(e,t){if(!f(e))throw Error(c(299));var a=!1,n="",i=qd,r=Ld,s=Xd,d=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(d=t.unstable_transitionCallbacks)),t=x0(e,1,!1,null,null,a,n,i,r,s,d,null),e[ln]=t.current,Hc(e),new lo(t)},Jl.hydrateRoot=function(e,t,a){if(!f(e))throw Error(c(299));var n=!1,i="",r=qd,s=Ld,d=Xd,h=null,A=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(h=a.unstable_transitionCallbacks),a.formState!==void 0&&(A=a.formState)),t=x0(e,1,!0,t,a??null,n,i,r,s,d,h,A),t.context=m0(null),a=t.current,n=bt(),n=Pr(n),i=ha(n),i.callback=null,ga(a,i,n),a=n,t.current.lanes=a,al(t,a),Qt(t),e[ln]=t.current,Hc(e),new mr(t)},Jl.version="19.1.0",Jl}var k0;function K1(){if(k0)return uo.exports;k0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),uo.exports=Q1(),uo.exports}var Z1=K1();const br={HEARTS:"hearts",DIAMONDS:"diamonds",CLUBS:"clubs",SPADES:"spades"},fe={ACE:"ace",TWO:"2",THREE:"3",FOUR:"4",FIVE:"5",SIX:"6",SEVEN:"7",EIGHT:"8",NINE:"9",TEN:"10",JACK:"jack",QUEEN:"queen",KING:"king",JOKER:"joker"},P={SETUP:"setup",CARD_VIEWING:"card-viewing",PLAYING:"playing",SCORING:"scoring",FINISHED:"finished"},ti={HUMAN:"human",BOT:"bot"},B0={[fe.ACE]:1,[fe.TWO]:2,[fe.THREE]:3,[fe.FOUR]:4,[fe.FIVE]:5,[fe.SIX]:6,[fe.SEVEN]:7,[fe.EIGHT]:8,[fe.NINE]:9,[fe.TEN]:0,[fe.JACK]:11,[fe.QUEEN]:12,[fe.KING]:-2,[fe.JOKER]:-4},Pe={DECK_SIZE:54,CARDS_PER_PLAYER:4,INITIAL_KNOWN_CARDS:2,ROUNDS_TO_WIN:3,MIN_PLAYERS:2,MAX_PLAYERS:4,JOKER_COUNT:2},V1=[fe.ACE,fe.TWO,fe.THREE,fe.FOUR,fe.FIVE,fe.SIX,fe.SEVEN,fe.EIGHT,fe.NINE,fe.TEN,fe.JACK,fe.QUEEN,fe.KING],I1=[br.HEARTS,br.DIAMONDS,br.CLUBS,br.SPADES],Y0={THINKING_DELAY:{min:4e3,max:6e3}},G0=()=>`card-${Math.random().toString(36).substr(2,9)}-${Date.now()}`,H0=()=>{const l={};I1.forEach(u=>{V1.forEach(o=>{const c=G0();l[c]={id:c,suit:u,rank:o,value:B0[o],isSpecial:o===fe.QUEEN||o===fe.JACK}})});for(let u=0;u<Pe.JOKER_COUNT;u++){const o=G0();l[o]={id:o,suit:null,rank:fe.JOKER,value:B0[fe.JOKER],isSpecial:!1}}return l},P1=l=>{const u=[...l];for(let o=u.length-1;o>0;o--){const c=Math.floor(Math.random()*(o+1));[u[o],u[c]]=[u[c],u[o]]}return u},q0=l=>{const u=Object.keys(l);return P1(u)},L0=(l,u)=>{const o=[...l],c=[...u];return o.forEach(f=>{const g=[];for(let w=0;w<Pe.CARDS_PER_PLAYER;w++){const _=c.pop();if(!_)throw new Error("Not enough cards in deck to deal to all players");g.push({cardId:_,isRevealed:!1,isKnownToPlayer:w<Pe.INITIAL_KNOWN_CARDS,lastSeenTurn:w<Pe.INITIAL_KNOWN_CARDS?0:void 0})}f.cards=g}),{updatedPlayers:o,remainingCards:c}},F1=(l,u)=>l.reduce((o,c)=>{const f=u[c.cardId];return o+(f?f.value:0)},0),X0=(l,u)=>l.isSpecial&&(l.rank===fe.QUEEN||l.rank===fe.JACK),$1=(l,u,o)=>o==="deck"?l.length>0:u.length>0,Q0=(l,u,o)=>{if(!$1(l,u,o))return{drawnCardId:null,newDrawPile:l,newDiscardPile:u};if(o==="deck"){const c=l[l.length-1],f=l.slice(0,-1);return{drawnCardId:c,newDrawPile:f,newDiscardPile:u}}else{const c=u[u.length-1],f=u.slice(0,-1);return{drawnCardId:c,newDrawPile:l,newDiscardPile:f}}},Qn=(l,u)=>[...l,u],jp=l=>l.length===0,xo=(l,u)=>u>=0&&u<Pe.CARDS_PER_PLAYER&&l.cards.length===Pe.CARDS_PER_PLAYER,J1=(l,u,o,c)=>{if(!xo(l,u))throw new Error(`Cannot replace card at index ${u}`);const f=l.cards[u].cardId;return{updatedPlayer:{...l,cards:l.cards.map((w,_)=>_===u?{...w,cardId:o,isKnownToPlayer:!0,lastSeenTurn:c}:w)},replacedCardId:f}},W1=(l,u,o,c)=>l.map(f=>({...f,cards:f.cards.map(g=>g.cardId===o&&f.id===u?{...g,isKnownToPlayer:!0,lastSeenTurn:c}:g)})),K0=(l,u,o,c,f)=>{const g=l.findIndex(k=>k.id===u),w=l.findIndex(k=>k.id===c);if(g===-1||w===-1)throw new Error("Player not found for card swap");const _=l[g],S=l[w];if(!xo(_,o)||!xo(S,f))throw new Error("Invalid card indices for swap");const y=_.cards[o],E=S.cards[f],U=[...l];return U[g]={..._,cards:_.cards.map((k,B)=>B===o?{...E,isKnownToPlayer:!1,lastSeenTurn:void 0}:k)},U[w]={...S,cards:S.cards.map((k,B)=>B===f?{...y,isKnownToPlayer:!1,lastSeenTurn:void 0}:k)},U},ex=l=>{if(l.length===0)throw new Error("Cannot determine winner with no players");return l.reduce((u,o)=>o.score<u.score?o:u)},tx=(l,u)=>{const o=Object.entries(l).find(([,c])=>c>=u);return o?o[0]:null},Yr=(l,u)=>{if(l.round.phase!==P.PLAYING)return!1;const o=l.players[l.round.currentPlayerIndex];return!o||o.id!==u?!1:o.isActive},Gr=(l,u)=>!Yr(l,u)||l.round.stopCalled?!1:l.round.phase===P.PLAYING,Do=l=>!!(jp(l.deck.drawPile)||l.round.stopCalled&&l.round.remainingTurns<=0),ax=l=>Do(l),nx=(l,u)=>(l+1)%u,Z0=l=>{const u=[];(l.players.length<Pe.MIN_PLAYERS||l.players.length>Pe.MAX_PLAYERS)&&u.push(`Invalid player count: ${l.players.length}`),(l.round.phase===P.PLAYING||l.round.phase===P.SCORING)&&l.players.forEach((f,g)=>{f.cards.length!==Pe.CARDS_PER_PLAYER&&u.push(`Player ${g} has ${f.cards.length} cards, expected ${Pe.CARDS_PER_PLAYER}`)}),(l.round.currentPlayerIndex<0||l.round.currentPlayerIndex>=l.players.length)&&u.push(`Invalid current player index: ${l.round.currentPlayerIndex}`);const o=l.deck.drawPile.length+l.deck.discardPile.length+l.players.reduce((f,g)=>f+g.cards.length,0);o!==Pe.DECK_SIZE&&u.push(`Total cards in game: ${o}, expected: ${Pe.DECK_SIZE}`);const c=Object.values(l.match.roundWins).reduce((f,g)=>f+g,0);return c!==l.match.currentRound-1&&l.round.phase!==P.SETUP&&u.push(`Round wins (${c}) don't match current round (${l.match.currentRound})`),u},Mr=(l,u,o)=>!Yr(l,u)||l.ui.selectedCard?!1:o==="deck"?l.deck.drawPile.length>0:l.deck.discardPile.length>0,Up=(l,u,o)=>!(!Yr(l,u)||!l.ui.selectedCard||o<0||o>=Pe.CARDS_PER_PLAYER),jr=l=>{const u=[],o=l.players[l.round.currentPlayerIndex];if(!o||l.round.phase!==P.PLAYING)return u;if(!!!l.ui.selectedCard)Mr(l,o.id,"deck")&&u.push("DRAW_FROM_DECK"),Mr(l,o.id,"discard")&&u.push("DRAW_FROM_DISCARD");else{for(let g=0;g<Pe.CARDS_PER_PLAYER;g++)Up(l,o.id,g)&&u.push(`REPLACE_CARD_${g}`);u.push("DISCARD_DRAWN_CARD");const f=l.ui.selectedCard?l.cards[l.ui.selectedCard]:null;f&&kp(f)&&u.push("USE_SPECIAL_ABILITY")}return Gr(l,o.id)&&u.push("CALL_STOP"),u},kp=(l,u)=>l.isSpecial&&(l.rank===fe.QUEEN||l.rank===fe.JACK),lx=(l,u,o)=>{if(!Yr(l,u))return!1;const c=!!l.ui.selectedCard;switch(o){case"DRAW_FROM_DECK":case"DRAW_FROM_DISCARD":return!c;case"REPLACE_CARD":case"DISCARD_DRAWN_CARD":return c;case"CALL_STOP":return Gr(l,u);case"USE_SPECIAL_ABILITY":{if(!c)return!1;const f=l.cards[l.ui.selectedCard];return kp(f)}default:return!1}},ix=l=>{const u=l.players[l.round.currentPlayerIndex],o=l.players.filter(E=>E.isActive),c=l.round.turnNumber,f=c/l.players.length,g=l.players.map(E=>E.score).filter(E=>E>0),w=g.length>0?g.reduce((E,U)=>E+U,0)/g.length:0,_=Pe.DECK_SIZE,S=l.deck.drawPile.length,y=(_-S)/_*100;return{gameId:l.gameId,phase:l.round.phase,currentRound:l.match.currentRound,turnNumber:l.round.turnNumber,playerCount:l.players.length,activePlayers:o.length,currentPlayerName:u?.name||"None",currentPlayerId:u?.id||null,cardsInDeck:l.deck.drawPile.length,cardsInDiscard:l.deck.discardPile.length,deckEmpty:jp(l.deck.drawPile),deckProgress:Math.round(y),totalTurns:c,averageTurnsPerPlayer:Math.round(f*100)/100,roundsToWin:l.match.roundsToWin,stopCalled:l.round.stopCalled,stopCalledBy:l.round.stopCalledBy,remainingTurns:l.round.remainingTurns,matchWinner:l.match.winner,roundWins:l.match.roundWins,averageScore:Math.round(w*100)/100,playerScores:l.round.phase===P.SCORING||l.round.phase===P.FINISHED?l.players.map(E=>({id:E.id,name:E.name,score:E.score})):null,isValidState:Z0(l).length===0,stateErrors:Z0(l)}},rx=l=>{const u=l.players[l.round.currentPlayerIndex],o=jr(l),c=!!l.ui.selectedCard;return{currentPlayer:{id:u?.id||null,name:u?.name||"None",type:u?.type||null,isActive:u?.isActive||!1,cardCount:u?.cards.length||0,score:u?.score||0},turnState:{hasDrawnCard:c,drawnCardId:l.ui.selectedCard,availableActions:o,canCallStop:u?Gr(l,u.id):!1,validActionsCount:o.length},gameProgression:{phase:l.round.phase,turnNumber:l.round.turnNumber,roundNumber:l.match.currentRound,stopCalled:l.round.stopCalled,remainingTurns:l.round.remainingTurns,shouldEnd:ax(l)},deckState:{drawPileSize:l.deck.drawPile.length,discardPileSize:l.deck.discardPile.length,isEmpty:l.deck.isEmpty,topDiscardCard:l.deck.discardPile.length>0?l.deck.discardPile[l.deck.discardPile.length-1]:null}}},ux=()=>`player-${Math.random().toString(36).substr(2,9)}-${Date.now()}`,cx=(l,u,o)=>({id:o!==void 0?`player-${o}`:ux(),name:l,type:u,cards:[],score:0,isActive:!0,roundWins:0}),ox=(l,u)=>{const o=[];for(let c=0;c<l;c++){const f=c===0,g=f?"Player":`Bot ${c}`,w=u[c]||g;o.push(cx(w,f?ti.HUMAN:ti.BOT,c))}return o},Kn=l=>{const u=l.round.currentPlayerIndex;return l.players[u]||null},sx=l=>l.type===ti.BOT;class vr{static decideDraw(u){const o=Kn(u);if(!o)return null;const c=Mr(u,o.id,"deck"),f=Mr(u,o.id,"discard");return!c&&!f?null:c&&!f?"deck":!c&&f?"discard":Math.random()>.3?"deck":"discard"}static decideReplace(u){const o=Kn(u);if(!o||!u.ui.selectedCard)return null;const c=[];for(let f=0;f<Pe.CARDS_PER_PLAYER;f++)Up(u,o.id,f)&&c.push(f);return c.length===0||Math.random()>.7?null:c[Math.floor(Math.random()*c.length)]}static decideStop(u){const o=Kn(u);return!o||!Gr(u,o.id)?!1:Math.random()<.1}static decideSpecialAbility(){return Math.random()>.5}static decidePeekTarget(u){const o=Kn(u);if(!o)return null;const c=[];return u.players.forEach(f=>{f.id!==o.id&&f.cards.forEach(g=>{g.isKnownToPlayer||c.push(g.cardId)})}),c.length>0?c[Math.floor(Math.random()*c.length)]:null}static decideSwapTarget(u){const o=Kn(u);if(!o)return null;const c=Math.floor(Math.random()*o.cards.length),f=u.players.filter(_=>_.id!==o.id);if(f.length===0)return null;const g=f[Math.floor(Math.random()*f.length)],w=Math.floor(Math.random()*g.cards.length);return{playerCardIndex:c,targetPlayerId:g.id,targetCardIndex:w}}static generateMove(u){const o=Kn(u);if(!o||!sx(o))return null;if(!!u.ui.selectedCard){if(this.decideStop(u))return{action:"call_stop"};const f=this.decideReplace(u);return f!==null?{action:"replace_card",cardIndex:f}:{action:"discard_card"}}else{const f=this.decideDraw(u);return f?{action:f==="deck"?"draw_deck":"draw_discard"}:null}}}const dx=(l=Y0.THINKING_DELAY.min,u=Y0.THINKING_DELAY.max)=>{const o=Math.random()*(u-l)+l;return new Promise(c=>setTimeout(c,o))},Bp={gameId:"",gameMode:"local",maxPlayers:4,match:{currentRound:0,roundsToWin:Pe.ROUNDS_TO_WIN,roundWins:{},winner:null},round:{phase:P.SETUP,currentPlayerIndex:0,stopCalled:!1,stopCalledBy:null,remainingTurns:0,autoStopped:!1,turnNumber:0},players:[],cards:{},deck:{drawPile:[],discardPile:[],isEmpty:!0},lastAction:null,ui:{selectedCard:null,showingPeekCard:null,animationQueue:[],isActionInProgress:!1,currentModal:null,isBotThinking:!1,botThinkingStartTime:null,replacingCard:null,jackSwapMode:null,turnTimer:null,startCountdown:null}},Yp=(l,u)=>{switch(u.type){case"START_GAME":{const{playerCount:o,playerNames:c}=u.payload,f=H0(),g=q0(f),w=ox(o,c),{updatedPlayers:_,remainingCards:S}=L0(w,g),y=[S.pop()],E=S,U={};return _.forEach(k=>{U[k.id]=0}),{...l,gameId:`game-${Date.now()}`,cards:f,players:_,deck:{drawPile:E,discardPile:y,isEmpty:E.length===0},match:{...l.match,currentRound:1,roundWins:U},round:{...l.round,phase:P.CARD_VIEWING,currentPlayerIndex:0,turnNumber:1},lastAction:{type:u.type,playerId:"system",details:u.payload,timestamp:Date.now()}}}case"START_PLAYING":return{...l,round:{...l.round,phase:P.PLAYING},lastAction:{type:u.type,playerId:"system",details:{},timestamp:Date.now()}};case"START_ROUND":{if(l.match.winner)return{...l,round:{...l.round,phase:P.FINISHED}};const o=H0(),c=q0(o),f=l.players.map(y=>({...y,cards:[],score:0,roundWins:l.match.roundWins[y.id]||0})),{updatedPlayers:g,remainingCards:w}=L0(f,c),_=[w.pop()],S=w;return{...l,cards:o,players:g,deck:{drawPile:S,discardPile:_,isEmpty:S.length===0},match:{...l.match,currentRound:l.match.currentRound+1},round:{...l.round,phase:P.PLAYING,currentPlayerIndex:0,stopCalled:!1,stopCalledBy:null,remainingTurns:0,autoStopped:!1,turnNumber:1},ui:{...l.ui,currentModal:null,selectedCard:null,showingPeekCard:null},lastAction:{type:u.type,playerId:"system",details:{},timestamp:Date.now()}}}case"END_ROUND":{const o=l.players.map(_=>{const S=F1(_.cards,l.cards);return{..._,score:S,cards:_.cards.map(y=>({...y,isRevealed:!0}))}}),c=ex(o),f={...l.match.roundWins};f[c.id]=(f[c.id]||0)+1;const g=o.map(_=>({..._,roundWins:f[_.id]||0})),w=tx(f,l.match.roundsToWin);return{...l,players:g,match:{...l.match,roundWins:f,winner:w},round:{...l.round,phase:w?P.FINISHED:P.SCORING},ui:{...l.ui,currentModal:"ROUND_RESULTS"},lastAction:{type:u.type,playerId:"system",details:{roundWinner:c.id,scores:g.map(_=>({id:_.id,score:_.score}))},timestamp:Date.now()}}}case"END_GAME":return{...l,round:{...l.round,phase:P.FINISHED},match:{...l.match,winner:u.payload.winnerId},lastAction:{type:u.type,playerId:"system",details:u.payload,timestamp:Date.now()}};case"RESET_GAME":return{...Bp,gameId:`game-${Date.now()}`};case"DRAW_FROM_DECK":{const{playerId:o}=u.payload,{drawnCardId:c,newDrawPile:f,newDiscardPile:g}=Q0(l.deck.drawPile,l.deck.discardPile,"deck");if(!c)return l;const w=l.cards[c],_=w&&X0(w),y=l.players.find(E=>E.id===o)?.type==="bot";return{...l,deck:{...l.deck,drawPile:f,discardPile:g,isEmpty:f.length===0},ui:{...l.ui,selectedCard:c,currentModal:_&&!y&&w.rank!=="jack"?"special-ability":null,jackSwapMode:_&&!y&&w.rank==="jack"?{isActive:!0,selectedOwnCardIndex:null,drawnCardId:c}:l.ui.jackSwapMode},lastAction:{type:u.type,playerId:o,details:{drawnCardId:c,hasSpecialAbility:_},timestamp:Date.now()}}}case"DRAW_FROM_DISCARD":{const{playerId:o}=u.payload,{drawnCardId:c,newDrawPile:f,newDiscardPile:g}=Q0(l.deck.drawPile,l.deck.discardPile,"discard");return c?{...l,deck:{...l.deck,drawPile:f,discardPile:g},ui:{...l.ui,selectedCard:c},lastAction:{type:u.type,playerId:o,details:{drawnCardId:c},timestamp:Date.now()}}:l}case"REPLACE_CARD":{const{playerId:o,cardIndex:c,drawnCardId:f}=u.payload,g=l.players.findIndex(W=>W.id===o);if(g===-1||c<0||c>=Pe.CARDS_PER_PLAYER)return l;const w=l.players[g];if(!f||l.ui.isActionInProgress)return l;const{updatedPlayer:_,replacedCardId:S}=J1(w,c,f,l.round.turnNumber),y=[...l.players];y[g]=_;const E=Qn(l.deck.discardPile,S),U=l.cards[f],k=X0(U),Y=l.players.find(W=>W.id===o)?.type==="bot";return{...l,players:y,deck:{...l.deck,discardPile:E},ui:{...l.ui,selectedCard:null,currentModal:k&&!Y?U.rank:null,isActionInProgress:!0,replacingCard:l.ui.replacingCard?{...l.ui.replacingCard,phase:"swapping-in"}:null},lastAction:{type:u.type,playerId:o,details:{cardIndex:c,drawnCardId:f,replacedCardId:S,hasSpecialAbility:k},timestamp:Date.now()}}}case"DISCARD_DRAWN_CARD":{const{playerId:o,cardId:c}=u.payload,f=c||l.ui.selectedCard;if(!f)return l;const g=Qn(l.deck.discardPile,f);return{...l,deck:{...l.deck,discardPile:g},ui:{...l.ui,selectedCard:null},lastAction:{type:u.type,playerId:o,details:{cardId:f},timestamp:Date.now()}}}case"END_TURN":{const{playerId:o}=u.payload,c=nx(l.round.currentPlayerIndex,l.players.length);let f=Do(l),g=l.round.remainingTurns;l.round.stopCalled&&(g=Math.max(0,l.round.remainingTurns-1),g===0&&(f=!0));const w={...l,round:{...l.round,currentPlayerIndex:c,turnNumber:l.round.turnNumber+1,remainingTurns:g},ui:{...l.ui,selectedCard:null,showingPeekCard:null,isActionInProgress:!1},lastAction:{type:u.type,playerId:o,details:{shouldEndRound:f},timestamp:Date.now()}};return f?Yp(w,{type:"END_ROUND",payload:{}}):w}case"CALL_STOP":return{...l,round:{...l.round,stopCalled:!0,stopCalledBy:u.payload.playerId,remainingTurns:l.players.length-1},lastAction:{type:u.type,playerId:u.payload.playerId,details:{},timestamp:Date.now()}};case"PEEK_CARD":{const{playerId:o,targetCardId:c}=u.payload,f=W1(l.players,o,c,l.round.turnNumber),g=l.ui.selectedCard,w=g?Qn(l.deck.discardPile,g):l.deck.discardPile;return{...l,players:f,deck:{...l.deck,discardPile:w},ui:{...l.ui,selectedCard:null,showingPeekCard:c,currentModal:"peek-result"},lastAction:{type:u.type,playerId:o,details:{targetCardId:c,discardedCardId:g},timestamp:Date.now()}}}case"SWAP_CARDS":{const{playerId:o,playerCardIndex:c,targetPlayerId:f,targetCardIndex:g}=u.payload,w=l.players.findIndex(B=>B.id===o),_=l.players.findIndex(B=>B.id===f);if(w===-1||_===-1)return l;const S=l.players[w],y=l.players[_];if(c>=S.cards.length||g>=y.cards.length)return l;const E=K0(l.players,o,c,f,g),U=l.ui.selectedCard,k=U?Qn(l.deck.discardPile,U):l.deck.discardPile;return{...l,players:E,deck:{...l.deck,discardPile:k},ui:{...l.ui,selectedCard:null,currentModal:null},lastAction:{type:u.type,playerId:o,details:{playerCardIndex:c,targetPlayerId:f,targetCardIndex:g,discardedCardId:U},timestamp:Date.now()}}}case"USE_SPECIAL_ABILITY":{const{playerId:o,cardId:c,abilityType:f}=u.payload,g=f==="peek"?"PEEK_SELECTION":"SWAP_SELECTION";return{...l,ui:{...l.ui,currentModal:g},lastAction:{type:u.type,playerId:o,details:{cardId:c,abilityType:f},timestamp:Date.now()}}}case"SKIP_SPECIAL_ABILITY":{const{playerId:o,cardId:c}=u.payload;return{...l,ui:{...l.ui,currentModal:null},lastAction:{type:u.type,playerId:o,details:{cardId:c},timestamp:Date.now()}}}case"SELECT_CARD":return{...l,ui:{...l.ui,selectedCard:u.payload.cardId}};case"CLEAR_SELECTION":return{...l,ui:{...l.ui,selectedCard:null}};case"SHOW_PEEK_RESULT":return{...l,ui:{...l.ui,showingPeekCard:u.payload.cardId}};case"HIDE_PEEK_RESULT":return{...l,ui:{...l.ui,showingPeekCard:null}};case"SHOW_MODAL":return{...l,ui:{...l.ui,currentModal:u.payload.modalType}};case"HIDE_MODAL":return{...l,ui:{...l.ui,currentModal:null}};case"ADD_ANIMATION":return{...l,ui:{...l.ui,animationQueue:[...l.ui.animationQueue,u.payload.animation]}};case"COMPLETE_ANIMATION":return{...l,ui:{...l.ui,animationQueue:l.ui.animationQueue.filter(o=>o.id!==u.payload.animationId)}};case"SET_ACTION_IN_PROGRESS":return{...l,ui:{...l.ui,isActionInProgress:u.payload.inProgress}};case"SET_BOT_THINKING":return{...l,ui:{...l.ui,isBotThinking:u.payload.thinking,botThinkingStartTime:u.payload.thinking?Date.now():null}};case"CLEAR_BOT_THINKING":return{...l,ui:{...l.ui,isBotThinking:!1,botThinkingStartTime:null}};case"BOT_MAKE_MOVE":case"BOT_THINKING":return{...l,lastAction:{type:u.type,playerId:u.payload.playerId,details:u.payload,timestamp:Date.now()}};case"START_TURN_TIMER":{const{duration:o}=u.payload,c=Date.now();return{...l,ui:{...l.ui,turnTimer:{isActive:!0,startTime:c,duration:o,remainingTime:o}}}}case"UPDATE_TURN_TIMER":{const{remainingTime:o}=u.payload;return l.ui.turnTimer?{...l,ui:{...l.ui,turnTimer:{...l.ui.turnTimer,remainingTime:o}}}:l}case"STOP_TURN_TIMER":return{...l,ui:{...l.ui,turnTimer:null}};case"TIMER_EXPIRED":return{...l,ui:{...l.ui,turnTimer:null}};case"START_COUNTDOWN":{const{duration:o}=u.payload,c=Date.now();return{...l,ui:{...l.ui,startCountdown:{isActive:!0,startTime:c,duration:o,remainingTime:o}}}}case"UPDATE_COUNTDOWN":{const{remainingTime:o}=u.payload;return l.ui.startCountdown?{...l,ui:{...l.ui,startCountdown:{...l.ui.startCountdown,remainingTime:o}}}:l}case"STOP_COUNTDOWN":return{...l,ui:{...l.ui,startCountdown:null}};case"COUNTDOWN_EXPIRED":return{...l,ui:{...l.ui,startCountdown:null}};case"START_CARD_REPLACEMENT":return{...l,ui:{...l.ui,replacingCard:{playerId:u.payload.playerId,cardIndex:u.payload.cardIndex,phase:"swapping-out"}},lastAction:{type:u.type,playerId:u.payload.playerId,details:u.payload,timestamp:Date.now()}};case"COMPLETE_CARD_REPLACEMENT":return{...l,ui:{...l.ui,replacingCard:null},lastAction:{type:u.type,playerId:"system",details:{},timestamp:Date.now()}};case"START_JACK_SWAP_MODE":return{...l,ui:{...l.ui,jackSwapMode:{isActive:!0,selectedOwnCardIndex:null,drawnCardId:u.payload.drawnCardId},currentModal:null},lastAction:{type:u.type,playerId:"system",details:u.payload,timestamp:Date.now()}};case"SELECT_OWN_CARD_FOR_SWAP":return{...l,ui:{...l.ui,jackSwapMode:l.ui.jackSwapMode?{...l.ui.jackSwapMode,selectedOwnCardIndex:u.payload.cardIndex}:null},lastAction:{type:u.type,playerId:"system",details:u.payload,timestamp:Date.now()}};case"COMPLETE_JACK_SWAP":{const{targetPlayerId:o,targetCardIndex:c}=u.payload,f=l.ui.jackSwapMode;if(!f||f.selectedOwnCardIndex===null)return l;const g=l.players.find(S=>S.id===l.players[l.round.currentPlayerIndex].id);if(!g)return l;const w=K0(l.players,g.id,f.selectedOwnCardIndex,o,c),_=Qn(l.deck.discardPile,f.drawnCardId);return{...l,players:w,deck:{...l.deck,discardPile:_},ui:{...l.ui,selectedCard:null,jackSwapMode:null},lastAction:{type:u.type,playerId:g.id,details:{playerCardIndex:f.selectedOwnCardIndex,targetPlayerId:o,targetCardIndex:c,discardedCardId:f.drawnCardId},timestamp:Date.now()}}}case"CANCEL_JACK_SWAP":{const o=l.ui.jackSwapMode,c=o?Qn(l.deck.discardPile,o.drawnCardId):l.deck.discardPile;return{...l,deck:{...l.deck,discardPile:c},ui:{...l.ui,selectedCard:null,jackSwapMode:null},lastAction:{type:u.type,playerId:"system",details:{discardedCardId:o?.drawnCardId},timestamp:Date.now()}}}case"UPDATE_PLAYER_KNOWLEDGE":case"REVEAL_CARD":case"UPDATE_SCORES":case"SET_CURRENT_PLAYER":case"INCREMENT_TURN":return{...l,lastAction:{type:u.type,playerId:"system",details:u.payload,timestamp:Date.now()}};default:return console.warn(`Unhandled action type: ${u.type}`),l}},Gp=Be.createContext(null);class fx{dispatch;gameState;constructor(u,o){this.dispatch=u,this.gameState=o}updateGameState(u){this.gameState=u}processGameFlow(){switch(this.gameState.round.phase){case P.SETUP:break;case P.CARD_VIEWING:this.handleCardViewingPhase();break;case P.PLAYING:this.handlePlayingPhase();break;case P.SCORING:this.handleScoringPhase();break;case P.FINISHED:this.handleFinishedPhase();break}}handleCardViewingPhase(){}handlePlayingPhase(){if(Do(this.gameState)){this.dispatch({type:"END_ROUND",payload:{}});return}const u=this.getCurrentPlayer();u&&u.type===ti.BOT&&!this.gameState.ui.isBotThinking&&(this.dispatch({type:"SET_BOT_THINKING",payload:{thinking:!0}}),dx().then(()=>{this.dispatch({type:"CLEAR_BOT_THINKING",payload:{}}),this.processBotTurn()}))}handleScoringPhase(){console.log("Round scoring completed. Waiting for user to continue.")}handleFinishedPhase(){console.log("Game finished. Winner:",this.gameState.match.winner)}processBotTurn(){const u=this.getCurrentPlayer();if(!u||u.type!==ti.BOT)return;const o=this.gameState.ui.selectedCard;if(o){const f=this.gameState.cards[o];if(f&&f.isSpecial){this.processBotSpecialAbility(u,f);return}}const c=vr.generateMove(this.gameState);if(!c){console.warn("Bot could not generate a valid move"),this.endTurn();return}switch(console.log(`Bot ${u.name} making move:`,c.action),c.action){case"draw_deck":this.dispatch({type:"DRAW_FROM_DECK",payload:{playerId:u.id}});break;case"draw_discard":this.dispatch({type:"DRAW_FROM_DISCARD",payload:{playerId:u.id}});break;case"replace_card":if(c.cardIndex!==void 0&&this.gameState.ui.selectedCard){const f=c.cardIndex,g=this.gameState.ui.selectedCard;this.dispatch({type:"START_CARD_REPLACEMENT",payload:{playerId:u.id,cardIndex:f}}),setTimeout(()=>{this.dispatch({type:"REPLACE_CARD",payload:{playerId:u.id,cardIndex:f,drawnCardId:g}})},400),setTimeout(()=>this.endTurn(),1e3)}break;case"discard_card":this.gameState.ui.selectedCard&&(this.dispatch({type:"DISCARD_DRAWN_CARD",payload:{playerId:u.id,cardId:this.gameState.ui.selectedCard}}),setTimeout(()=>this.endTurn(),500));break;case"call_stop":this.dispatch({type:"CALL_STOP",payload:{playerId:u.id}}),setTimeout(()=>this.endTurn(),500);break;default:console.warn("Unknown bot action:",c.action),this.endTurn()}}processBotSpecialAbility(u,o){if(!vr.decideSpecialAbility()){this.dispatch({type:"DISCARD_DRAWN_CARD",payload:{playerId:u.id,cardId:o.id}}),setTimeout(()=>this.endTurn(),500);return}if(o.rank===fe.QUEEN){const c=vr.decidePeekTarget(this.gameState);c?this.dispatch({type:"PEEK_CARD",payload:{playerId:u.id,targetCardId:c}}):this.dispatch({type:"DISCARD_DRAWN_CARD",payload:{playerId:u.id,cardId:o.id}}),setTimeout(()=>this.endTurn(),500)}else if(o.rank===fe.JACK){const c=vr.decideSwapTarget(this.gameState);c?this.dispatch({type:"SWAP_CARDS",payload:{playerId:u.id,playerCardIndex:c.playerCardIndex,targetPlayerId:c.targetPlayerId,targetCardIndex:c.targetCardIndex}}):this.dispatch({type:"DISCARD_DRAWN_CARD",payload:{playerId:u.id,cardId:o.id}}),setTimeout(()=>this.endTurn(),500)}else this.processBotTurn()}endTurn(){const u=this.getCurrentPlayer();u&&this.dispatch({type:"END_TURN",payload:{playerId:u.id}})}nextRound(){this.dispatch({type:"START_ROUND",payload:{}})}resetGame(){this.dispatch({type:"RESET_GAME",payload:{}})}validateGameState(){const u=[];this.gameState.players.length===0&&u.push("No players in game"),this.gameState.round.currentPlayerIndex>=this.gameState.players.length&&u.push("Invalid current player index");const o=this.gameState.deck.drawPile.length+this.gameState.deck.discardPile.length+this.gameState.players.reduce((c,f)=>c+f.cards.length,0);return o!==54&&u.push(`Total cards in game: ${o}, expected: 54`),u}getGameStateInfo(){const u=this.getCurrentPlayer(),o=jr(this.gameState);return{phase:this.gameState.round.phase,currentPlayer:u?{id:u.id,name:u.name,type:u.type}:null,turnNumber:this.gameState.round.turnNumber,round:this.gameState.match.currentRound,availableActions:o,deckSize:this.gameState.deck.drawPile.length,discardSize:this.gameState.deck.discardPile.length,stopCalled:this.gameState.round.stopCalled,remainingTurns:this.gameState.round.remainingTurns,validationErrors:this.validateGameState()}}forceProgressScoring(){this.gameState.round.phase===P.SCORING&&(this.gameState.match.winner?this.dispatch({type:"END_GAME",payload:{winnerId:this.gameState.match.winner}}):this.nextRound())}getCurrentPlayer(){return this.gameState.players[this.gameState.round.currentPlayerIndex]||null}}const px=(l,u)=>new fx(l,u),hx=({children:l})=>{const[u,o]=Be.useReducer(Yp,Bp),c=Be.useMemo(()=>{try{return px(o,u)}catch(O){return console.error("Error creating GameFlowManager:",O),null}},[o]),f=Be.useCallback(()=>{if(c)try{c.updateGameState(u),c.processGameFlow()}catch(O){console.error("Error processing game flow:",O)}else console.warn("GameFlowManager is not available")},[c,u]);Be.useEffect(()=>{if(c){const O=setTimeout(f,100);return()=>clearTimeout(O)}},[u.round.phase,u.round.currentPlayerIndex,u.ui.selectedCard,f]),Be.useEffect(()=>{if(u.ui.turnTimer?.isActive){const O=setInterval(()=>{const Z=Date.now()-u.ui.turnTimer.startTime,Ce=Math.max(0,u.ui.turnTimer.duration-Z);if(Ce<=0){o({type:"TIMER_EXPIRED",payload:{}});const ge=X();ge&&o({type:"END_TURN",payload:{playerId:ge.id}})}else o({type:"UPDATE_TURN_TIMER",payload:{remainingTime:Ce}})},100);return()=>clearInterval(O)}},[u.ui.turnTimer?.isActive,u.ui.turnTimer?.startTime]),Be.useEffect(()=>{if(u.ui.startCountdown?.isActive){const O=setInterval(()=>{const Z=Date.now()-u.ui.startCountdown.startTime,Ce=Math.max(0,u.ui.startCountdown.duration-Z);Ce<=0?(o({type:"COUNTDOWN_EXPIRED",payload:{}}),o({type:"START_PLAYING",payload:{}})):o({type:"UPDATE_COUNTDOWN",payload:{remainingTime:Ce}})},100);return()=>clearInterval(O)}},[u.ui.startCountdown?.isActive,u.ui.startCountdown?.startTime]),Be.useEffect(()=>{if(u.round.phase===P.CARD_VIEWING&&!u.ui.startCountdown?.isActive){const O=setTimeout(()=>{o({type:"START_COUNTDOWN",payload:{duration:5e3}})},100);return()=>clearTimeout(O)}},[u.round.phase,u.ui.startCountdown?.isActive]);const g=(O,Q)=>{o({type:"START_GAME",payload:{playerCount:O,playerNames:Q}})},w=O=>{o(O)},_=()=>{const O=X();O&&(u.ui.turnTimer?.isActive&&o({type:"STOP_TURN_TIMER",payload:{}}),o({type:"END_TURN",payload:{playerId:O.id}}))},S=()=>{const O=X();O&&$e()&&(u.ui.turnTimer?.isActive&&o({type:"STOP_TURN_TIMER",payload:{}}),o({type:"CALL_STOP",payload:{playerId:O.id}}),setTimeout(()=>{o({type:"END_TURN",payload:{playerId:O.id}})},500))},y=()=>{const O=X();O&&De()&&o({type:"DRAW_FROM_DECK",payload:{playerId:O.id}})},E=()=>{const O=X();O&&Fe()&&o({type:"DRAW_FROM_DISCARD",payload:{playerId:O.id}})},U=O=>{const Q=X(),Z=u.ui.selectedCard;Q&&Z&&(o({type:"START_CARD_REPLACEMENT",payload:{playerId:Q.id,cardIndex:O}}),setTimeout(()=>{o({type:"REPLACE_CARD",payload:{playerId:Q.id,cardIndex:O,drawnCardId:Z}})},400),Q.type==="human"?o({type:"START_TURN_TIMER",payload:{duration:5e3}}):setTimeout(()=>{o({type:"END_TURN",payload:{playerId:Q.id}})},500))},k=()=>{const O=X(),Q=u.ui.selectedCard;O&&Q&&(o({type:"DISCARD_DRAWN_CARD",payload:{playerId:O.id,cardId:Q}}),setTimeout(()=>{o({type:"END_TURN",payload:{playerId:O.id}})},500))},B=O=>{const Q=X();Q&&o({type:"PEEK_CARD",payload:{playerId:Q.id,targetCardId:O}})},Y=(O,Q,Z)=>{const Ce=X();Ce&&o({type:"SWAP_CARDS",payload:{playerId:Ce.id,playerCardIndex:O,targetPlayerId:Q,targetCardIndex:Z}})},W=(O,Q)=>{const Z=X();Z&&o({type:"USE_SPECIAL_ABILITY",payload:{playerId:Z.id,cardId:O,abilityType:Q}})},pe=O=>{const Q=X();Q&&o({type:"SKIP_SPECIAL_ABILITY",payload:{playerId:Q.id,cardId:O}})},re=O=>{o({type:"SELECT_CARD",payload:{cardId:O}})},ne=()=>{o({type:"CLEAR_SELECTION",payload:{}})},ee=(O,Q)=>{o({type:"SHOW_MODAL",payload:{modalType:O,data:Q}})},ae=()=>{o({type:"HIDE_MODAL",payload:{}})},G=()=>{c?c.processBotTurn():console.log("Bot automation temporarily disabled - GameFlowManager initialization issue")},X=()=>u.players[u.round.currentPlayerIndex]||null,V=O=>u.players.find(Q=>Q.id===O)||null,be=O=>u.cards[O]||null,De=()=>u.deck.drawPile.length>0&&u.round.phase===P.PLAYING,Fe=()=>u.deck.discardPile.length>0&&u.round.phase===P.PLAYING,$e=()=>X()&&!u.round.stopCalled&&u.round.phase===P.PLAYING,q={gameState:u,dispatch:o,startGame:g,makeMove:w,endTurn:_,callStop:S,drawFromDeck:y,drawFromDiscard:E,replaceCard:U,discardDrawnCard:k,peekCard:B,swapCards:Y,useSpecialAbility:W,skipSpecialAbility:pe,selectCard:re,clearSelection:ne,showModal:ee,hideModal:ae,processBotTurn:G,getCurrentPlayer:X,getPlayerById:V,getCardById:be,canDrawFromDeck:De,canDrawFromDiscard:Fe,canCallStop:$e,isPlayerTurn:O=>X()?.id===O,getGameStatistics:()=>ix(u),getTurnAnalysis:()=>rx(u),getPlayerAvailableActions:()=>jr(u),isValidAction:(O,Q)=>lx(u,O,Q),forceEndTurn:()=>{o({type:"END_TURN",payload:{playerId:X()?.id||""}})},forceNextRound:()=>{o({type:"START_ROUND",payload:{}})},getGameFlowInfo:()=>({phase:u.round.phase,currentPlayer:X(),turnNumber:u.round.turnNumber,availableActions:jr(u),validationErrors:[]}),forceProgressScoring:()=>{c&&c.forceProgressScoring()},startCountdown:O=>{o({type:"START_COUNTDOWN",payload:{duration:O}})},stopCountdown:()=>{o({type:"STOP_COUNTDOWN",payload:{}})}};return p.jsx(Gp.Provider,{value:q,children:l})};var dt=function(){return dt=Object.assign||function(u){for(var o,c=1,f=arguments.length;c<f;c++){o=arguments[c];for(var g in o)Object.prototype.hasOwnProperty.call(o,g)&&(u[g]=o[g])}return u},dt.apply(this,arguments)};function ai(l,u,o){if(o||arguments.length===2)for(var c=0,f=u.length,g;c<f;c++)(g||!(c in u))&&(g||(g=Array.prototype.slice.call(u,0,c)),g[c]=u[c]);return l.concat(g||Array.prototype.slice.call(u))}var Re="-ms-",ei="-moz-",ye="-webkit-",Hp="comm",Hr="rule",_o="decl",gx="@import",qp="@keyframes",xx="@layer",Lp=Math.abs,Ro=String.fromCharCode,mo=Object.assign;function mx(l,u){return Ie(l,0)^45?(((u<<2^Ie(l,0))<<2^Ie(l,1))<<2^Ie(l,2))<<2^Ie(l,3):0}function Xp(l){return l.trim()}function ca(l,u){return(l=u.exec(l))?l[0]:l}function ie(l,u,o){return l.replace(u,o)}function _r(l,u,o){return l.indexOf(u,o)}function Ie(l,u){return l.charCodeAt(u)|0}function In(l,u,o){return l.slice(u,o)}function Kt(l){return l.length}function Qp(l){return l.length}function Wl(l,u){return u.push(l),l}function yx(l,u){return l.map(u).join("")}function V0(l,u){return l.filter(function(o){return!ca(o,u)})}var qr=1,Pn=1,Kp=0,jt=0,He=0,Wn="";function Lr(l,u,o,c,f,g,w,_){return{value:l,root:u,parent:o,type:c,props:f,children:g,line:qr,column:Pn,length:w,return:"",siblings:_}}function Ma(l,u){return mo(Lr("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},u)}function Zn(l){for(;l.root;)l=Ma(l.root,{children:[l]});Wl(l,l.siblings)}function bx(){return He}function vx(){return He=jt>0?Ie(Wn,--jt):0,Pn--,He===10&&(Pn=1,qr--),He}function Yt(){return He=jt<Kp?Ie(Wn,jt++):0,Pn++,He===10&&(Pn=1,qr++),He}function tn(){return Ie(Wn,jt)}function Rr(){return jt}function Xr(l,u){return In(Wn,l,u)}function yo(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Sx(l){return qr=Pn=1,Kp=Kt(Wn=l),jt=0,[]}function wx(l){return Wn="",l}function fo(l){return Xp(Xr(jt-1,bo(l===91?l+2:l===40?l+1:l)))}function Ax(l){for(;(He=tn())&&He<33;)Yt();return yo(l)>2||yo(He)>3?"":" "}function Ex(l,u){for(;--u&&Yt()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return Xr(l,Rr()+(u<6&&tn()==32&&Yt()==32))}function bo(l){for(;Yt();)switch(He){case l:return jt;case 34:case 39:l!==34&&l!==39&&bo(He);break;case 40:l===41&&bo(l);break;case 92:Yt();break}return jt}function Cx(l,u){for(;Yt()&&l+He!==57;)if(l+He===84&&tn()===47)break;return"/*"+Xr(u,jt-1)+"*"+Ro(l===47?l:Yt())}function Tx(l){for(;!yo(tn());)Yt();return Xr(l,jt)}function Dx(l){return wx(zr("",null,null,null,[""],l=Sx(l),0,[0],l))}function zr(l,u,o,c,f,g,w,_,S){for(var y=0,E=0,U=w,k=0,B=0,Y=0,W=1,pe=1,re=1,ne=0,ee="",ae=f,G=g,X=c,V=ee;pe;)switch(Y=ne,ne=Yt()){case 40:if(Y!=108&&Ie(V,U-1)==58){_r(V+=ie(fo(ne),"&","&\f"),"&\f",Lp(y?_[y-1]:0))!=-1&&(re=-1);break}case 34:case 39:case 91:V+=fo(ne);break;case 9:case 10:case 13:case 32:V+=Ax(Y);break;case 92:V+=Ex(Rr()-1,7);continue;case 47:switch(tn()){case 42:case 47:Wl(_x(Cx(Yt(),Rr()),u,o,S),S);break;default:V+="/"}break;case 123*W:_[y++]=Kt(V)*re;case 125*W:case 59:case 0:switch(ne){case 0:case 125:pe=0;case 59+E:re==-1&&(V=ie(V,/\f/g,"")),B>0&&Kt(V)-U&&Wl(B>32?P0(V+";",c,o,U-1,S):P0(ie(V," ","")+";",c,o,U-2,S),S);break;case 59:V+=";";default:if(Wl(X=I0(V,u,o,y,E,f,_,ee,ae=[],G=[],U,g),g),ne===123)if(E===0)zr(V,u,X,X,ae,g,U,_,G);else switch(k===99&&Ie(V,3)===110?100:k){case 100:case 108:case 109:case 115:zr(l,X,X,c&&Wl(I0(l,X,X,0,0,f,_,ee,f,ae=[],U,G),G),f,G,U,_,c?ae:G);break;default:zr(V,X,X,X,[""],G,0,_,G)}}y=E=B=0,W=re=1,ee=V="",U=w;break;case 58:U=1+Kt(V),B=Y;default:if(W<1){if(ne==123)--W;else if(ne==125&&W++==0&&vx()==125)continue}switch(V+=Ro(ne),ne*W){case 38:re=E>0?1:(V+="\f",-1);break;case 44:_[y++]=(Kt(V)-1)*re,re=1;break;case 64:tn()===45&&(V+=fo(Yt())),k=tn(),E=U=Kt(ee=V+=Tx(Rr())),ne++;break;case 45:Y===45&&Kt(V)==2&&(W=0)}}return g}function I0(l,u,o,c,f,g,w,_,S,y,E,U){for(var k=f-1,B=f===0?g:[""],Y=Qp(B),W=0,pe=0,re=0;W<c;++W)for(var ne=0,ee=In(l,k+1,k=Lp(pe=w[W])),ae=l;ne<Y;++ne)(ae=Xp(pe>0?B[ne]+" "+ee:ie(ee,/&\f/g,B[ne])))&&(S[re++]=ae);return Lr(l,u,o,f===0?Hr:_,S,y,E,U)}function _x(l,u,o,c){return Lr(l,u,o,Hp,Ro(bx()),In(l,2,-2),0,c)}function P0(l,u,o,c,f){return Lr(l,u,o,_o,In(l,0,c),In(l,c+1,-1),c,f)}function Zp(l,u,o){switch(mx(l,u)){case 5103:return ye+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+l+l;case 4789:return ei+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+l+ei+l+Re+l+l;case 5936:switch(Ie(l,u+11)){case 114:return ye+l+Re+ie(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return ye+l+Re+ie(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return ye+l+Re+ie(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return ye+l+Re+l+l;case 6165:return ye+l+Re+"flex-"+l+l;case 5187:return ye+l+ie(l,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Re+"flex-$1$2")+l;case 5443:return ye+l+Re+"flex-item-"+ie(l,/flex-|-self/g,"")+(ca(l,/flex-|baseline/)?"":Re+"grid-row-"+ie(l,/flex-|-self/g,""))+l;case 4675:return ye+l+Re+"flex-line-pack"+ie(l,/align-content|flex-|-self/g,"")+l;case 5548:return ye+l+Re+ie(l,"shrink","negative")+l;case 5292:return ye+l+Re+ie(l,"basis","preferred-size")+l;case 6060:return ye+"box-"+ie(l,"-grow","")+ye+l+Re+ie(l,"grow","positive")+l;case 4554:return ye+ie(l,/([^-])(transform)/g,"$1"+ye+"$2")+l;case 6187:return ie(ie(ie(l,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),l,"")+l;case 5495:case 3959:return ie(l,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return ie(ie(l,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+l+l;case 4200:if(!ca(l,/flex-|baseline/))return Re+"grid-column-align"+In(l,u)+l;break;case 2592:case 3360:return Re+ie(l,"template-","")+l;case 4384:case 3616:return o&&o.some(function(c,f){return u=f,ca(c.props,/grid-\w+-end/)})?~_r(l+(o=o[u].value),"span",0)?l:Re+ie(l,"-start","")+l+Re+"grid-row-span:"+(~_r(o,"span",0)?ca(o,/\d+/):+ca(o,/\d+/)-+ca(l,/\d+/))+";":Re+ie(l,"-start","")+l;case 4896:case 4128:return o&&o.some(function(c){return ca(c.props,/grid-\w+-start/)})?l:Re+ie(ie(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return ie(l,/(.+)-inline(.+)/,ye+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kt(l)-1-u>6)switch(Ie(l,u+1)){case 109:if(Ie(l,u+4)!==45)break;case 102:return ie(l,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+ei+(Ie(l,u+3)==108?"$3":"$2-$3"))+l;case 115:return~_r(l,"stretch",0)?Zp(ie(l,"stretch","fill-available"),u,o)+l:l}break;case 5152:case 5920:return ie(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,g,w,_,S,y){return Re+f+":"+g+y+(w?Re+f+"-span:"+(_?S:+S-+g)+y:"")+l});case 4949:if(Ie(l,u+6)===121)return ie(l,":",":"+ye)+l;break;case 6444:switch(Ie(l,Ie(l,14)===45?18:11)){case 120:return ie(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(Ie(l,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Re+"$2box$3")+l;case 100:return ie(l,":",":"+Re)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(l,"scroll-","scroll-snap-")+l}return l}function Ur(l,u){for(var o="",c=0;c<l.length;c++)o+=u(l[c],c,l,u)||"";return o}function Rx(l,u,o,c){switch(l.type){case xx:if(l.children.length)break;case gx:case _o:return l.return=l.return||l.value;case Hp:return"";case qp:return l.return=l.value+"{"+Ur(l.children,c)+"}";case Hr:if(!Kt(l.value=l.props.join(",")))return""}return Kt(o=Ur(l.children,c))?l.return=l.value+"{"+o+"}":""}function zx(l){var u=Qp(l);return function(o,c,f,g){for(var w="",_=0;_<u;_++)w+=l[_](o,c,f,g)||"";return w}}function Nx(l){return function(u){u.root||(u=u.return)&&l(u)}}function Ox(l,u,o,c){if(l.length>-1&&!l.return)switch(l.type){case _o:l.return=Zp(l.value,l.length,o);return;case qp:return Ur([Ma(l,{value:ie(l.value,"@","@"+ye)})],c);case Hr:if(l.length)return yx(o=l.props,function(f){switch(ca(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Zn(Ma(l,{props:[ie(f,/:(read-\w+)/,":"+ei+"$1")]})),Zn(Ma(l,{props:[f]})),mo(l,{props:V0(o,c)});break;case"::placeholder":Zn(Ma(l,{props:[ie(f,/:(plac\w+)/,":"+ye+"input-$1")]})),Zn(Ma(l,{props:[ie(f,/:(plac\w+)/,":"+ei+"$1")]})),Zn(Ma(l,{props:[ie(f,/:(plac\w+)/,Re+"input-$1")]})),Zn(Ma(l,{props:[f]})),mo(l,{props:V0(o,c)});break}return""})}}var Mx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},St={},Fn=typeof process<"u"&&St!==void 0&&(St.REACT_APP_SC_ATTR||St.SC_ATTR)||"data-styled",Vp="active",Ip="data-styled-version",Qr="6.1.19",zo=`/*!sc*/
`,kr=typeof window<"u"&&typeof document<"u",jx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&St!==void 0&&St.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&St.REACT_APP_SC_DISABLE_SPEEDY!==""?St.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&St.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&St!==void 0&&St.SC_DISABLE_SPEEDY!==void 0&&St.SC_DISABLE_SPEEDY!==""&&St.SC_DISABLE_SPEEDY!=="false"&&St.SC_DISABLE_SPEEDY),Kr=Object.freeze([]),$n=Object.freeze({});function Ux(l,u,o){return o===void 0&&(o=$n),l.theme!==o.theme&&l.theme||u||o.theme}var Pp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),kx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Bx=/(^-|-$)/g;function F0(l){return l.replace(kx,"-").replace(Bx,"")}var Yx=/(a)(d)/gi,Sr=52,$0=function(l){return String.fromCharCode(l+(l>25?39:97))};function vo(l){var u,o="";for(u=Math.abs(l);u>Sr;u=u/Sr|0)o=$0(u%Sr)+o;return($0(u%Sr)+o).replace(Yx,"$1-$2")}var po,Fp=5381,Vn=function(l,u){for(var o=u.length;o;)l=33*l^u.charCodeAt(--o);return l},$p=function(l){return Vn(Fp,l)};function Jp(l){return vo($p(l)>>>0)}function Gx(l){return l.displayName||l.name||"Component"}function ho(l){return typeof l=="string"&&!0}var Wp=typeof Symbol=="function"&&Symbol.for,eh=Wp?Symbol.for("react.memo"):60115,Hx=Wp?Symbol.for("react.forward_ref"):60112,qx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Lx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},th={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xx=((po={})[Hx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},po[eh]=th,po);function J0(l){return("type"in(u=l)&&u.type.$$typeof)===eh?th:"$$typeof"in l?Xx[l.$$typeof]:qx;var u}var Qx=Object.defineProperty,Kx=Object.getOwnPropertyNames,W0=Object.getOwnPropertySymbols,Zx=Object.getOwnPropertyDescriptor,Vx=Object.getPrototypeOf,ep=Object.prototype;function ah(l,u,o){if(typeof u!="string"){if(ep){var c=Vx(u);c&&c!==ep&&ah(l,c,o)}var f=Kx(u);W0&&(f=f.concat(W0(u)));for(var g=J0(l),w=J0(u),_=0;_<f.length;++_){var S=f[_];if(!(S in Lx||o&&o[S]||w&&S in w||g&&S in g)){var y=Zx(u,S);try{Qx(l,S,y)}catch{}}}}return l}function Jn(l){return typeof l=="function"}function No(l){return typeof l=="object"&&"styledComponentId"in l}function en(l,u){return l&&u?"".concat(l," ").concat(u):l||u||""}function So(l,u){if(l.length===0)return"";for(var o=l[0],c=1;c<l.length;c++)o+=l[c];return o}function ni(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function wo(l,u,o){if(o===void 0&&(o=!1),!o&&!ni(l)&&!Array.isArray(l))return u;if(Array.isArray(u))for(var c=0;c<u.length;c++)l[c]=wo(l[c],u[c]);else if(ni(u))for(var c in u)l[c]=wo(l[c],u[c]);return l}function Oo(l,u){Object.defineProperty(l,"toString",{value:u})}function li(l){for(var u=[],o=1;o<arguments.length;o++)u[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var Ix=function(){function l(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return l.prototype.indexOfGroup=function(u){for(var o=0,c=0;c<u;c++)o+=this.groupSizes[c];return o},l.prototype.insertRules=function(u,o){if(u>=this.groupSizes.length){for(var c=this.groupSizes,f=c.length,g=f;u>=g;)if((g<<=1)<0)throw li(16,"".concat(u));this.groupSizes=new Uint32Array(g),this.groupSizes.set(c),this.length=g;for(var w=f;w<g;w++)this.groupSizes[w]=0}for(var _=this.indexOfGroup(u+1),S=(w=0,o.length);w<S;w++)this.tag.insertRule(_,o[w])&&(this.groupSizes[u]++,_++)},l.prototype.clearGroup=function(u){if(u<this.length){var o=this.groupSizes[u],c=this.indexOfGroup(u),f=c+o;this.groupSizes[u]=0;for(var g=c;g<f;g++)this.tag.deleteRule(c)}},l.prototype.getGroup=function(u){var o="";if(u>=this.length||this.groupSizes[u]===0)return o;for(var c=this.groupSizes[u],f=this.indexOfGroup(u),g=f+c,w=f;w<g;w++)o+="".concat(this.tag.getRule(w)).concat(zo);return o},l}(),Nr=new Map,Br=new Map,Or=1,wr=function(l){if(Nr.has(l))return Nr.get(l);for(;Br.has(Or);)Or++;var u=Or++;return Nr.set(l,u),Br.set(u,l),u},Px=function(l,u){Or=u+1,Nr.set(l,u),Br.set(u,l)},Fx="style[".concat(Fn,"][").concat(Ip,'="').concat(Qr,'"]'),$x=new RegExp("^".concat(Fn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Jx=function(l,u,o){for(var c,f=o.split(","),g=0,w=f.length;g<w;g++)(c=f[g])&&l.registerName(u,c)},Wx=function(l,u){for(var o,c=((o=u.textContent)!==null&&o!==void 0?o:"").split(zo),f=[],g=0,w=c.length;g<w;g++){var _=c[g].trim();if(_){var S=_.match($x);if(S){var y=0|parseInt(S[1],10),E=S[2];y!==0&&(Px(E,y),Jx(l,E,S[3]),l.getTag().insertRules(y,f)),f.length=0}else f.push(_)}}},tp=function(l){for(var u=document.querySelectorAll(Fx),o=0,c=u.length;o<c;o++){var f=u[o];f&&f.getAttribute(Fn)!==Vp&&(Wx(l,f),f.parentNode&&f.parentNode.removeChild(f))}};function em(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var nh=function(l){var u=document.head,o=l||u,c=document.createElement("style"),f=function(_){var S=Array.from(_.querySelectorAll("style[".concat(Fn,"]")));return S[S.length-1]}(o),g=f!==void 0?f.nextSibling:null;c.setAttribute(Fn,Vp),c.setAttribute(Ip,Qr);var w=em();return w&&c.setAttribute("nonce",w),o.insertBefore(c,g),c},tm=function(){function l(u){this.element=nh(u),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var c=document.styleSheets,f=0,g=c.length;f<g;f++){var w=c[f];if(w.ownerNode===o)return w}throw li(17)}(this.element),this.length=0}return l.prototype.insertRule=function(u,o){try{return this.sheet.insertRule(o,u),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},l.prototype.getRule=function(u){var o=this.sheet.cssRules[u];return o&&o.cssText?o.cssText:""},l}(),am=function(){function l(u){this.element=nh(u),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(u,o){if(u<=this.length&&u>=0){var c=document.createTextNode(o);return this.element.insertBefore(c,this.nodes[u]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},l.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},l}(),nm=function(){function l(u){this.rules=[],this.length=0}return l.prototype.insertRule=function(u,o){return u<=this.length&&(this.rules.splice(u,0,o),this.length++,!0)},l.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},l.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},l}(),ap=kr,lm={isServer:!kr,useCSSOMInjection:!jx},lh=function(){function l(u,o,c){u===void 0&&(u=$n),o===void 0&&(o={});var f=this;this.options=dt(dt({},lm),u),this.gs=o,this.names=new Map(c),this.server=!!u.isServer,!this.server&&kr&&ap&&(ap=!1,tp(this)),Oo(this,function(){return function(g){for(var w=g.getTag(),_=w.length,S="",y=function(U){var k=function(re){return Br.get(re)}(U);if(k===void 0)return"continue";var B=g.names.get(k),Y=w.getGroup(U);if(B===void 0||!B.size||Y.length===0)return"continue";var W="".concat(Fn,".g").concat(U,'[id="').concat(k,'"]'),pe="";B!==void 0&&B.forEach(function(re){re.length>0&&(pe+="".concat(re,","))}),S+="".concat(Y).concat(W,'{content:"').concat(pe,'"}').concat(zo)},E=0;E<_;E++)y(E);return S}(f)})}return l.registerId=function(u){return wr(u)},l.prototype.rehydrate=function(){!this.server&&kr&&tp(this)},l.prototype.reconstructWithOptions=function(u,o){return o===void 0&&(o=!0),new l(dt(dt({},this.options),u),this.gs,o&&this.names||void 0)},l.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(u=function(o){var c=o.useCSSOMInjection,f=o.target;return o.isServer?new nm(f):c?new tm(f):new am(f)}(this.options),new Ix(u)));var u},l.prototype.hasNameForId=function(u,o){return this.names.has(u)&&this.names.get(u).has(o)},l.prototype.registerName=function(u,o){if(wr(u),this.names.has(u))this.names.get(u).add(o);else{var c=new Set;c.add(o),this.names.set(u,c)}},l.prototype.insertRules=function(u,o,c){this.registerName(u,o),this.getTag().insertRules(wr(u),c)},l.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},l.prototype.clearRules=function(u){this.getTag().clearGroup(wr(u)),this.clearNames(u)},l.prototype.clearTag=function(){this.tag=void 0},l}(),im=/&/g,rm=/^\s*\/\/.*$/gm;function ih(l,u){return l.map(function(o){return o.type==="rule"&&(o.value="".concat(u," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(u," ")),o.props=o.props.map(function(c){return"".concat(u," ").concat(c)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=ih(o.children,u)),o})}function um(l){var u,o,c,f=$n,g=f.options,w=g===void 0?$n:g,_=f.plugins,S=_===void 0?Kr:_,y=function(k,B,Y){return Y.startsWith(o)&&Y.endsWith(o)&&Y.replaceAll(o,"").length>0?".".concat(u):k},E=S.slice();E.push(function(k){k.type===Hr&&k.value.includes("&")&&(k.props[0]=k.props[0].replace(im,o).replace(c,y))}),w.prefix&&E.push(Ox),E.push(Rx);var U=function(k,B,Y,W){B===void 0&&(B=""),Y===void 0&&(Y=""),W===void 0&&(W="&"),u=W,o=B,c=new RegExp("\\".concat(o,"\\b"),"g");var pe=k.replace(rm,""),re=Dx(Y||B?"".concat(Y," ").concat(B," { ").concat(pe," }"):pe);w.namespace&&(re=ih(re,w.namespace));var ne=[];return Ur(re,zx(E.concat(Nx(function(ee){return ne.push(ee)})))),ne};return U.hash=S.length?S.reduce(function(k,B){return B.name||li(15),Vn(k,B.name)},Fp).toString():"",U}var cm=new lh,Ao=um(),rh=nn.createContext({shouldForwardProp:void 0,styleSheet:cm,stylis:Ao});rh.Consumer;nn.createContext(void 0);function np(){return Be.useContext(rh)}var uh=function(){function l(u,o){var c=this;this.inject=function(f,g){g===void 0&&(g=Ao);var w=c.name+g.hash;f.hasNameForId(c.id,w)||f.insertRules(c.id,w,g(c.rules,w,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=o,Oo(this,function(){throw li(12,String(c.name))})}return l.prototype.getName=function(u){return u===void 0&&(u=Ao),this.name+u.hash},l}(),om=function(l){return l>="A"&&l<="Z"};function lp(l){for(var u="",o=0;o<l.length;o++){var c=l[o];if(o===1&&c==="-"&&l[0]==="-")return l;om(c)?u+="-"+c.toLowerCase():u+=c}return u.startsWith("ms-")?"-"+u:u}var ch=function(l){return l==null||l===!1||l===""},oh=function(l){var u,o,c=[];for(var f in l){var g=l[f];l.hasOwnProperty(f)&&!ch(g)&&(Array.isArray(g)&&g.isCss||Jn(g)?c.push("".concat(lp(f),":"),g,";"):ni(g)?c.push.apply(c,ai(ai(["".concat(f," {")],oh(g),!1),["}"],!1)):c.push("".concat(lp(f),": ").concat((u=f,(o=g)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||u in Mx||u.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return c};function an(l,u,o,c){if(ch(l))return[];if(No(l))return[".".concat(l.styledComponentId)];if(Jn(l)){if(!Jn(g=l)||g.prototype&&g.prototype.isReactComponent||!u)return[l];var f=l(u);return an(f,u,o,c)}var g;return l instanceof uh?o?(l.inject(o,c),[l.getName(c)]):[l]:ni(l)?oh(l):Array.isArray(l)?Array.prototype.concat.apply(Kr,l.map(function(w){return an(w,u,o,c)})):[l.toString()]}function sm(l){for(var u=0;u<l.length;u+=1){var o=l[u];if(Jn(o)&&!No(o))return!1}return!0}var dm=$p(Qr),fm=function(){function l(u,o,c){this.rules=u,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&sm(u),this.componentId=o,this.baseHash=Vn(dm,o),this.baseStyle=c,lh.registerId(o)}return l.prototype.generateAndInjectStyles=function(u,o,c){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,o,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))f=en(f,this.staticRulesId);else{var g=So(an(this.rules,u,o,c)),w=vo(Vn(this.baseHash,g)>>>0);if(!o.hasNameForId(this.componentId,w)){var _=c(g,".".concat(w),void 0,this.componentId);o.insertRules(this.componentId,w,_)}f=en(f,w),this.staticRulesId=w}else{for(var S=Vn(this.baseHash,c.hash),y="",E=0;E<this.rules.length;E++){var U=this.rules[E];if(typeof U=="string")y+=U;else if(U){var k=So(an(U,u,o,c));S=Vn(S,k+E),y+=k}}if(y){var B=vo(S>>>0);o.hasNameForId(this.componentId,B)||o.insertRules(this.componentId,B,c(y,".".concat(B),void 0,this.componentId)),f=en(f,B)}}return f},l}(),sh=nn.createContext(void 0);sh.Consumer;var go={};function pm(l,u,o){var c=No(l),f=l,g=!ho(l),w=u.attrs,_=w===void 0?Kr:w,S=u.componentId,y=S===void 0?function(ae,G){var X=typeof ae!="string"?"sc":F0(ae);go[X]=(go[X]||0)+1;var V="".concat(X,"-").concat(Jp(Qr+X+go[X]));return G?"".concat(G,"-").concat(V):V}(u.displayName,u.parentComponentId):S,E=u.displayName,U=E===void 0?function(ae){return ho(ae)?"styled.".concat(ae):"Styled(".concat(Gx(ae),")")}(l):E,k=u.displayName&&u.componentId?"".concat(F0(u.displayName),"-").concat(u.componentId):u.componentId||y,B=c&&f.attrs?f.attrs.concat(_).filter(Boolean):_,Y=u.shouldForwardProp;if(c&&f.shouldForwardProp){var W=f.shouldForwardProp;if(u.shouldForwardProp){var pe=u.shouldForwardProp;Y=function(ae,G){return W(ae,G)&&pe(ae,G)}}else Y=W}var re=new fm(o,k,c?f.componentStyle:void 0);function ne(ae,G){return function(X,V,be){var De=X.attrs,Fe=X.componentStyle,$e=X.defaultProps,je=X.foldedComponentIds,wt=X.styledComponentId,At=X.target,qe=nn.useContext(sh),R=np(),L=X.shouldForwardProp||R.shouldForwardProp,F=Ux(V,qe,$e)||$n,ce=function(Q,Z,Ce){for(var ge,tt=dt(dt({},Z),{className:void 0,theme:Ce}),Ua=0;Ua<Q.length;Ua+=1){var Zt=Jn(ge=Q[Ua])?ge(tt):ge;for(var Et in Zt)tt[Et]=Et==="className"?en(tt[Et],Zt[Et]):Et==="style"?dt(dt({},tt[Et]),Zt[Et]):Zt[Et]}return Z.className&&(tt.className=en(tt.className,Z.className)),tt}(De,V,F),x=ce.as||At,j={};for(var H in ce)ce[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&ce.theme===F||(H==="forwardedAs"?j.as=ce.forwardedAs:L&&!L(H,x)||(j[H]=ce[H]));var q=function(Q,Z){var Ce=np(),ge=Q.generateAndInjectStyles(Z,Ce.styleSheet,Ce.stylis);return ge}(Fe,ce),O=en(je,wt);return q&&(O+=" "+q),ce.className&&(O+=" "+ce.className),j[ho(x)&&!Pp.has(x)?"class":"className"]=O,be&&(j.ref=be),Be.createElement(x,j)}(ee,ae,G)}ne.displayName=U;var ee=nn.forwardRef(ne);return ee.attrs=B,ee.componentStyle=re,ee.displayName=U,ee.shouldForwardProp=Y,ee.foldedComponentIds=c?en(f.foldedComponentIds,f.styledComponentId):"",ee.styledComponentId=k,ee.target=c?f.target:l,Object.defineProperty(ee,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=c?function(G){for(var X=[],V=1;V<arguments.length;V++)X[V-1]=arguments[V];for(var be=0,De=X;be<De.length;be++)wo(G,De[be],!0);return G}({},f.defaultProps,ae):ae}}),Oo(ee,function(){return".".concat(ee.styledComponentId)}),g&&ah(ee,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ee}function ip(l,u){for(var o=[l[0]],c=0,f=u.length;c<f;c+=1)o.push(u[c],l[c+1]);return o}var rp=function(l){return Object.assign(l,{isCss:!0})};function dh(l){for(var u=[],o=1;o<arguments.length;o++)u[o-1]=arguments[o];if(Jn(l)||ni(l))return rp(an(ip(Kr,ai([l],u,!0))));var c=l;return u.length===0&&c.length===1&&typeof c[0]=="string"?an(c):rp(an(ip(c,u)))}function Eo(l,u,o){if(o===void 0&&(o=$n),!u)throw li(1,u);var c=function(f){for(var g=[],w=1;w<arguments.length;w++)g[w-1]=arguments[w];return l(u,o,dh.apply(void 0,ai([f],g,!1)))};return c.attrs=function(f){return Eo(l,u,dt(dt({},o),{attrs:Array.prototype.concat(o.attrs,f).filter(Boolean)}))},c.withConfig=function(f){return Eo(l,u,dt(dt({},o),f))},c}var fh=function(l){return Eo(pm,l)},D=fh;Pp.forEach(function(l){D[l]=fh(l)});function Mo(l){for(var u=[],o=1;o<arguments.length;o++)u[o-1]=arguments[o];var c=So(dh.apply(void 0,ai([l],u,!1))),f=Jp(c);return new uh(f,c)}const ja=()=>{const l=Be.useContext(Gp);if(!l)throw new Error("useGame must be used within a GameProvider");const{gameState:u,...o}=l,c=u.ui.isActionInProgress;return{gameState:u,actions:{gameState:u,...o},isLoading:c,error:null}},hm=D.div`
  position: relative;
  display: inline-block;
`,gm=D.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  z-index: 1000;
  pointer-events: none;
  opacity: ${l=>l.visible?1:0};
  transform: ${l=>l.visible?"scale(1)":"scale(0.95)"};
  transition: all 0.2s ease-in-out;
  
  /* Position based on prop */
  ${l=>{switch(l.position){case"top":return`
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) ${l.visible?"translateY(-4px) scale(1)":"translateY(-4px) scale(0.95)"};
          margin-bottom: 4px;
        `;case"bottom":return`
          top: 100%;
          left: 50%;
          transform: translateX(-50%) ${l.visible?"translateY(4px) scale(1)":"translateY(4px) scale(0.95)"};
          margin-top: 4px;
        `;case"left":return`
          right: 100%;
          top: 50%;
          transform: translateY(-50%) ${l.visible?"translateX(-4px) scale(1)":"translateX(-4px) scale(0.95)"};
          margin-right: 4px;
        `;case"right":return`
          left: 100%;
          top: 50%;
          transform: translateY(-50%) ${l.visible?"translateX(4px) scale(1)":"translateX(4px) scale(0.95)"};
          margin-left: 4px;
        `;default:return""}}}
  
  /* Arrow */
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    
    ${l=>{switch(l.position){case"top":return`
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-top-color: rgba(0, 0, 0, 0.9);
          `;case"bottom":return`
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-bottom-color: rgba(0, 0, 0, 0.9);
          `;case"left":return`
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
            border-left-color: rgba(0, 0, 0, 0.9);
          `;case"right":return`
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
            border-right-color: rgba(0, 0, 0, 0.9);
          `;default:return""}}}
  }
  
  @media (max-width: 768px) {
    font-size: 11px;
    padding: 6px 10px;
  }
`,xm=({content:l,children:u,position:o="top",delay:c=500})=>{const[f,g]=Be.useState(!1),[w,_]=Be.useState(null),S=()=>{w&&clearTimeout(w);const E=setTimeout(()=>g(!0),c);_(E)},y=()=>{w&&(clearTimeout(w),_(null)),g(!1)};return p.jsxs(hm,{onMouseEnter:S,onMouseLeave:y,onFocus:S,onBlur:y,children:[u,p.jsx(gm,{position:o,visible:f,children:l})]})},mm=D.div`
  position: relative;
  aspect-ratio: 3/4;
  width: 100px;
  height: 133px;
  border-radius: 10px;
  border: 2px solid ${l=>l.shouldShowCard?"#FFD700":!l.showAsOpponent&&l.isKnownToPlayer?"#34D399":"#1E40AF"};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: ${l=>l.isClickable?"pointer":"default"};
  transform: perspective(1000px) rotateY(0deg);
  background: ${l=>l.shouldShowCard?"white":"linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)"};
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.1);
  
  /* Smooth card entrance animation */
  animation: cardEntrance 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  
  @keyframes cardEntrance {
    0% {
      opacity: 0;
      transform: perspective(1000px) rotateY(-90deg) scale(0.8);
    }
    100% {
      opacity: 1;
      transform: perspective(1000px) rotateY(0deg) scale(1);
    }
  }
  
  /* Enhanced card flip animation for revealed cards */
  ${l=>l.isRevealed&&`
    animation: cardReveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    
    @keyframes cardReveal {
      0% {
        transform: perspective(1000px) rotateY(0deg) scale(1);
      }
      50% {
        transform: perspective(1000px) rotateY(90deg) scale(1.05);
      }
      100% {
        transform: perspective(1000px) rotateY(0deg) scale(1);
      }
    }
  `}
  
  /* Card replacement animations handled by global CSS */
  
  /* Pulse animation for available actions */
  ${l=>l.isClickable&&`
    animation: actionPulse 2s infinite;
    
    @keyframes actionPulse {
      0%, 100% {
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.1),
                    0 0 0 0 rgba(255, 215, 0, 0.7);
      }
      50% {
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.1),
                    0 0 0 8px rgba(255, 215, 0, 0);
      }
    }
  `}
  
  /* Memory indicator glow for known cards */
  ${l=>!l.showAsOpponent&&l.isKnownToPlayer&&!l.shouldShowCard&&`
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.1), 
                0 0 15px rgba(52, 211, 153, 0.3);
  `}
  
  @media (max-width: 768px) {
    width: 70px;
    height: 93px;
    border-radius: 8px;
    border-width: 2px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 480px) {
    width: 55px;
    height: 73px;
    border-radius: 6px;
    border-width: 1px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  
  ${l=>l.isClickable&&`
    &:hover {
      transform: perspective(1000px) rotateY(5deg) translateY(-8px) scale(1.05);
      box-shadow: 0 20px 40px rgba(255, 215, 0, 0.4), 0 8px 16px rgba(0, 0, 0, 0.2);
      border-color: #FFA500;
      filter: brightness(1.1);
    }
    
    &:active {
      transform: perspective(1000px) rotateY(5deg) translateY(-4px) scale(1.02);
      box-shadow: 0 12px 25px rgba(255, 215, 0, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3);
      transition: all 0.1s ease;
    }
  `}
  
  ${l=>l.shouldShowCard&&!l.isClickable&&`
    &:hover {
      transform: perspective(1000px) rotateY(2deg) translateY(-2px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
      filter: brightness(1.05);
    }
    
    &:active {
      transform: perspective(1000px) rotateY(1deg) translateY(-1px);
      transition: all 0.1s ease;
    }
  `}
  
  /* Enhanced hidden card hover for non-opponents */
  ${l=>!l.shouldShowCard&&!l.showAsOpponent&&`
    &:hover {
      transform: perspective(1000px) translateY(-4px) scale(1.02);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      border-color: ${l.isKnownToPlayer?"#10B981":"#3B82F6"};
      filter: brightness(1.1);
    }
    
    &:active {
      transform: perspective(1000px) translateY(-2px) scale(1.01);
      transition: all 0.1s ease;
    }
  `}
  
  ${l=>l.isRevealed&&`
    border-color: #FF6B6B;
    box-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
  `}
`,ym=D.div`
  padding: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  position: relative;
  background: ${l=>{switch(l.suit){case"hearts":return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)";case"diamonds":return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)";case"clubs":return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)";case"spades":return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)";default:return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)"}}};
  border: 2px solid rgba(255, 215, 0, 0.3);
`,up=D.div`
  font-size: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: bold;
  line-height: 0.9;
  color: ${l=>l.color};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 7px;
  }
`,cp=D.div`
  font-size: 12px;
  line-height: 0.9;
  color: ${l=>l.color};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 8px;
  }
`,bm=D.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  transform: rotate(180deg);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 0.8;
  margin: 0;
  padding: 0;
`,vm=D.div`
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  .large-suit {
    font-size: 64px;
    font-weight: bold;
    color: ${l=>l.color};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    
    @media (max-width: 768px) {
      font-size: 40px;
    }
    
    @media (max-width: 480px) {
      font-size: 28px;
    }
  }
  
  .joker {
    font-size: 48px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
`,Sm=D.div`
  position: absolute;
  top: 3px;
  right: 3px;
  font-size: 10px;
  font-weight: bold;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #FF8C00;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 10;
  
  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
    font-size: 10px;
    top: 2px;
    right: 2px;
    border-width: 1px;
  }
  
  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
    font-size: 8px;
    top: 1px;
    right: 1px;
  }
`,wm=D.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  
  .back-inner {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 50%, #1E40AF 100%);
    border-radius: 8px;
    border: 3px solid #60A5FA;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.2);
    
    &::before {
      content: '';
      position: absolute;
      inset: 8px;
      border: 2px solid rgba(147, 197, 253, 0.7);
      border-radius: 4px;
    }
    
    &::after {
      content: '';
      position: absolute;
      inset: 12px;
      border: 1px solid rgba(191, 219, 254, 0.5);
      border-radius: 4px;
    }
  }
`,Am=D.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .main-diamond {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
    transform: rotate(45deg);
    border: 2px solid #FF8C00;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    
    &::before {
      content: '';
      position: absolute;
      inset: 4px;
      background: linear-gradient(135deg, #E6F3FF 0%, #CCE7FF 100%);
      border: 1px solid #FFD700;
      border-radius: 2px;
    }
    
    &::after {
      content: '';
      position: absolute;
      inset: 8px;
      background: linear-gradient(135deg, #FFFFFF 0%, #F0F8FF 100%);
      border-radius: 2px;
    }
  }
  
  .corner-accent {
    position: absolute;
    width: 12px;
    height: 12px;
    background: #FFA500;
    transform: rotate(45deg);
    border: 1px solid #FF8C00;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    
    &.top-left { top: -8px; left: -8px; }
    &.top-right { top: -8px; right: -8px; }
    &.bottom-left { bottom: -8px; left: -8px; }
    &.bottom-right { bottom: -8px; right: -8px; }
  }
`,Em=D.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 165, 0, 0.4);
  border-radius: 12px;
  border: 3px dashed #FFA500;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
  cursor: pointer;
  z-index: 20;
  animation: overlaySlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  @keyframes overlaySlideIn {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes borderPulse {
    0%, 100% { 
      border-color: #FFA500;
      box-shadow: 0 0 0 0 rgba(255, 165, 0, 0.7);
    }
    50% { 
      border-color: #FFD700;
      box-shadow: 0 0 0 4px rgba(255, 165, 0, 0);
    }
  }
  
  animation: overlaySlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
             borderPulse 2s infinite;
             
  &:hover {
    background: rgba(255, 165, 0, 0.6);
    border-color: #FFD700;
    animation: overlaySlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
               borderPulse 1s infinite;
  }
  
  &:active {
    background: rgba(255, 165, 0, 0.8);
    transform: scale(0.98);
    animation: none;
    transition: all 0.1s ease;
  }
  
  .replace-text {
    background: linear-gradient(135deg, #FF8C00 0%, #FFA500 100%);
    color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 0px 12px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border: 2px solid #FF6B00;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: auto;
    cursor: pointer;
    transform: translateY(0);
    
    &:hover {
      transform: scale(1.08) translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
      background: linear-gradient(135deg, #FFA500 0%, #FFB733 100%);
    }
    
    &:active {
      transform: scale(1.02) translateY(0);
      transition: all 0.1s ease;
    }
  }
`,Cm=D.div`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 18px;
  height: 18px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 3px 6px rgba(255, 215, 0, 0.4), 0 0 12px rgba(255, 215, 0, 0.3);
  animation: specialPulse 2s infinite;
  
  &::after {
    content: '⭐';
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  
  @keyframes specialPulse {
    0%, 100% { 
      opacity: 1;
      transform: scale(1);
      box-shadow: 0 3px 6px rgba(255, 215, 0, 0.4), 0 0 12px rgba(255, 215, 0, 0.3);
    }
    50% { 
      opacity: 0.8;
      transform: scale(1.1);
      box-shadow: 0 4px 8px rgba(255, 215, 0, 0.6), 0 0 16px rgba(255, 215, 0, 0.5);
    }
  }
  
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    top: 3px;
    right: 3px;
    
    &::after {
      font-size: 8px;
    }
  }
  
  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
    top: 2px;
    right: 2px;
    
    &::after {
      font-size: 7px;
    }
  }
`,Tm=D.div`
  position: absolute;
  bottom: 4px;
  left: 4px;
  width: 18px;
  height: 18px;
  background: linear-gradient(135deg, #6366F1 0%, #4F46E5 100%);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  font-family: 'JetBrains Mono', monospace;
  color: white;
  z-index: 15;
  
  &::after {
    content: '${l=>l.position}';
  }
  
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    font-size: 10px;
    bottom: 3px;
    left: 3px;
    border-width: 1px;
  }
  
  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
    font-size: 9px;
    bottom: 2px;
    left: 2px;
  }
`,Dm=({playerCard:l,cardIndex:u,playerId:o,showAsOpponent:c,isCurrentPlayer:f,isHumanPlayer:g})=>{const{gameState:w,actions:_}=ja(),S=_.getCardById(l.cardId),y=w.ui.selectedCard,E=w.ui.replacingCard,U=E&&E.cardIndex===u&&E.playerId===o,k=U?E.phase:null;nn.useEffect(()=>{U&&console.log(`Card ${u} is replacing! Phase: ${k}`,{cardIndex:u,replacingCard:E,isReplacing:U,replacementPhase:k,playerId:o})},[U,k,u]);const B=w.ui.jackSwapMode;nn.useEffect(()=>{if(U&&k==="swapping-in"){const V=setTimeout(()=>{_.makeMove({type:"COMPLETE_CARD_REPLACEMENT",payload:{}})},400);return()=>clearTimeout(V)}},[U,k,_]);const Y=l.isRevealed||!c&&l.isKnownToPlayer&&w.round.phase===P.CARD_VIEWING||!c&&l.isKnownToPlayer&&w.ui.showingPeekCard===l.cardId||w.round.phase===P.SCORING||w.round.phase===P.FINISHED,W=()=>{B?.isActive&&g?!c&&f?_.makeMove({type:"SELECT_OWN_CARD_FOR_SWAP",payload:{cardIndex:u}}):c&&B.selectedOwnCardIndex!==null&&_.makeMove({type:"COMPLETE_JACK_SWAP",payload:{targetPlayerId:o,targetCardIndex:u}}):y&&f&&g&&_.replaceCard(u)},pe=!w.ui.isActionInProgress&&(y&&f&&g||B?.isActive&&!c&&f&&g||B?.isActive&&c&&B.selectedOwnCardIndex!==null&&w.players[w.round.currentPlayerIndex]?.type==="human"),re=()=>S?S.suit==="hearts"||S.suit==="diamonds"?"#DC2626":"#1F2937":"#6B7280",ne=()=>{if(!S?.suit)return"";switch(S.suit){case"hearts":return"♥";case"diamonds":return"♦";case"clubs":return"♣";case"spades":return"♠";default:return""}},ee=()=>S?S.rank==="joker"?"JOK":S.rank==="ace"?"A":S.rank==="king"?"K":S.rank==="queen"?"Q":S.rank==="jack"?"J":S.rank:"",G=w.round.phase===P.CARD_VIEWING?S?Y?S.rank==="joker"?`Joker (${S.value} pts)`:`${ee()} of ${S.suit} (${S.value} pts)`:c?"Opponent's hidden card":"Your hidden card":"Unknown card":"",X=p.jsxs(mm,{isClickable:!!pe,shouldShowCard:!!Y,isRevealed:!!l.isRevealed,isKnownToPlayer:!!l.isKnownToPlayer,showAsOpponent:c,isReplacing:!!U,replacementPhase:k,onClick:W,className:`
        ${U&&k==="swapping-out"?"card-swapping-out":""}
        ${U&&k==="swapping-in"?"card-swapping-in":""}
      `.trim(),style:{animation:U&&k==="swapping-out"?"cardSwapOut 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards":U&&k==="swapping-in"?"cardSwapIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards":void 0},children:[Y&&S?p.jsxs(ym,{suit:S.suit||"default","data-testid":"card-face",children:[p.jsxs("div",{style:{textAlign:"left"},"data-testid":"card-corner-tl",children:[p.jsx(up,{color:re(),"data-testid":"card-rank-tl",children:ee()}),S.suit&&p.jsx(cp,{color:re(),"data-testid":"card-suit",children:ne()})]}),p.jsxs(vm,{color:re(),"data-testid":"card-center",children:[S.rank==="joker"?p.jsx("div",{className:"joker",children:"🃏"}):p.jsx("div",{className:"large-suit",children:ne()}),p.jsx(Sm,{"data-testid":"card-point-value",children:S.value})]}),p.jsxs(bm,{"data-testid":"card-corner-br",children:[p.jsx(up,{color:re(),"data-testid":"card-rank-br",children:ee()}),S.suit&&p.jsx(cp,{color:re(),children:ne()})]}),S.isSpecial&&p.jsx(Cm,{"data-testid":"special-card-indicator"})]}):p.jsx(wm,{"data-testid":"card-back",children:p.jsx("div",{className:"back-inner",children:p.jsxs(Am,{children:[p.jsx("div",{className:"main-diamond"}),p.jsx("div",{className:"corner-accent top-left"}),p.jsx("div",{className:"corner-accent top-right"}),p.jsx("div",{className:"corner-accent bottom-left"}),p.jsx("div",{className:"corner-accent bottom-right"})]})})}),pe&&p.jsx(Em,{onClick:W,children:p.jsx("div",{className:"replace-text",children:B?.isActive?!c&&f?B.selectedOwnCardIndex===u?"Selected for Swap":"Click to Select":"Click to Swap":"Click to Replace"})}),!c&&p.jsx(Tm,{position:u+1,"data-testid":"card-position"})]});return G?p.jsx(xm,{content:G,position:"top",delay:300,children:X}):X},_m=D.div`
  background: ${l=>l.isCurrentPlayer?"linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 165, 0, 0.1) 100%)":"rgba(255, 255, 255, 0.08)"};
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: ${l=>l.showAsOpponent?"16px":"20px"};
  border: 2px solid ${l=>l.isCurrentPlayer?"#FFD700":"rgba(255, 255, 255, 0.2)"};
  box-shadow: ${l=>l.isCurrentPlayer?"0 8px 32px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.2)":"0 4px 16px rgba(0, 0, 0, 0.2)"};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${l=>l.isCurrentPlayer?"linear-gradient(90deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)":"transparent"};
    animation: ${l=>l.isCurrentPlayer?"shimmer 2s infinite":"none"};
  }
  
  @keyframes shimmer {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
  }
  
  @media (max-width: 768px) {
    padding: ${l=>l.showAsOpponent?"12px":"16px"};
    border-radius: 12px;
  }
`,Rm=D.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l=>l.showAsOpponent?"12px":"16px"};
  gap: 12px;
  
  @media (max-width: 768px) {
    margin-bottom: 12px;
    gap: 8px;
  }
`,zm=D.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`,Nm=D.h3`
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  color: white;
  font-size: ${l=>l.showAsOpponent?"16px":"18px"};
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: ${l=>l.showAsOpponent?"14px":"16px"};
  }
`,op=D.span`
  font-size: 10px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border: 1px solid;
  
  ${l=>l.variant==="bot"&&`
    background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%);
    color: white;
    border-color: #1E40AF;
  `}
  
  ${l=>l.variant==="turn"&&`
    background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
    color: #000;
    border-color: #FF8C00;
    animation: turnPulse 2s infinite;
  `}
  
  @keyframes turnPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.9; }
  }
  
  @media (max-width: 768px) {
    font-size: 9px;
    padding: 3px 6px;
  }
`,Om=D.div`
  text-align: right;
  color: white;
  min-width: 0;
  
  .score {
    font-size: ${l=>l.showAsOpponent?"13px":"14px"};
    margin-bottom: 2px;
    font-family: 'JetBrains Mono', monospace;
    
    .label {
      opacity: 0.8;
      margin-right: 4px;
    }
    
    .value {
      font-weight: bold;
      color: #FFD700;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    }
  }
  
  .wins {
    font-size: ${l=>l.showAsOpponent?"11px":"12px"};
    opacity: 0.7;
    font-family: 'Inter', sans-serif;
  }
  
  @media (max-width: 768px) {
    .score {
      font-size: ${l=>l.showAsOpponent?"12px":"13px"};
    }
    
    .wins {
      font-size: ${l=>l.showAsOpponent?"10px":"11px"};
    }
  }
`,Mm=D.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: ${l=>(l.showAsOpponent,"20px")};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    gap: ${l=>(l.showAsOpponent,"16px")};
  }
  
  @media (max-width: 480px) {
    gap: ${l=>(l.showAsOpponent,"12px")};
  }
`,jm=D.div`
  margin-top: 12px;
  text-align: center;
  
  .thinking {
    background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%);
    color: white;
    font-size: 12px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 20px;
    border: 2px solid #1E40AF;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    animation: thinkingPulse 1.5s infinite;
  }
  
  .thinking::before {
    content: '🤖';
    font-size: 14px;
  }
  
  @keyframes thinkingPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.02); }
  }
  
  @media (max-width: 768px) {
    margin-top: 8px;
    
    .thinking {
      font-size: 11px;
      padding: 6px 12px;
    }
  }
`,sp=({player:l,isCurrentPlayer:u,showAsOpponent:o})=>{const{gameState:c}=ja(),g=c.round.phase===P.SCORING||c.round.phase===P.FINISHED||!o&&(c.round.phase===P.PLAYING||c.round.stopCalled)?l.score:null,w=c.ui.isBotThinking&&u&&l.type==="bot";return p.jsxs(_m,{isCurrentPlayer:u,showAsOpponent:o,children:[p.jsxs(Rm,{showAsOpponent:o,children:[p.jsxs(zm,{children:[p.jsx(Nm,{showAsOpponent:o,children:l.name}),l.type==="bot"&&p.jsx(op,{variant:"bot",children:"BOT"}),u&&p.jsx(op,{variant:"turn",children:"TURN"})]}),p.jsxs(Om,{showAsOpponent:o,children:[g!==null&&p.jsxs("div",{className:"score",children:[p.jsx("span",{className:"label",children:c.round.phase===P.SCORING||c.round.phase===P.FINISHED?"Final:":"Points:"}),p.jsx("span",{className:"value",children:g})]}),p.jsxs("div",{className:"wins",children:["Round wins: ",l.roundWins]})]})]}),p.jsx(Mm,{showAsOpponent:o,children:l.cards.map((_,S)=>p.jsx(Dm,{playerCard:_,cardIndex:S,playerId:l.id,showAsOpponent:o,isCurrentPlayer:u,isHumanPlayer:l.type==="human"},S))}),w&&p.jsx(jm,{children:p.jsx("div",{className:"thinking",children:"Bot is thinking..."})})]})},Um=D.div`
  position: absolute;
  z-index: 1000;
  pointer-events: none;
  opacity: ${l=>l.visible?1:0};
  transform: ${l=>{switch(l.position){case"top":return l.visible?"translateY(-8px)":"translateY(-4px)";case"bottom":return l.visible?"translateY(8px)":"translateY(4px)";case"left":return l.visible?"translateX(-8px)":"translateX(-4px)";case"right":return l.visible?"translateX(8px)":"translateX(4px)";default:return l.visible?"translateY(-8px)":"translateY(-4px)"}}};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${l=>{switch(l.position){case"top":return`
          bottom: 100%;
          left: 50%;
          transform-origin: bottom center;
          margin-left: -50px;
        `;case"bottom":return`
          top: 100%;
          left: 50%;
          transform-origin: top center;
          margin-left: -50px;
        `;case"left":return`
          right: 100%;
          top: 50%;
          transform-origin: center right;
          margin-top: -12px;
        `;case"right":return`
          left: 100%;
          top: 50%;
          transform-origin: center left;
          margin-top: -12px;
        `;default:return`
          bottom: 100%;
          left: 50%;
          transform-origin: bottom center;
          margin-left: -50px;
        `}}}
`,km=D.div`
  background: ${l=>{switch(l.variant){case"primary":return"linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)";case"success":return"linear-gradient(135deg, #10B981 0%, #059669 100%)";case"warning":return"linear-gradient(135deg, #F59E0B 0%, #D97706 100%)";case"info":return"linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)";default:return"linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)"}}};
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 0 8px rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    
    ${l=>`border-top-color: ${(()=>{switch(l.variant){case"primary":return"#1E40AF";case"success":return"#059669";case"warning":return"#D97706";case"info":return"#7C3AED";default:return"#1E40AF"}})()};`}
  }
  
  @media (max-width: 768px) {
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 6px;
  }
`,ph=Mo`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
`,Bm=Mo`
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
`,Ym=Mo`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`,Gm=D.div`
  position: absolute;
  inset: -2px;
  border-radius: 10px;
  background: ${l=>{switch(l.variant){case"primary":return"linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)";case"success":return"linear-gradient(135deg, #10B981 0%, #059669 100%)";case"warning":return"linear-gradient(135deg, #F59E0B 0%, #D97706 100%)";case"info":return"linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)";default:return"linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)"}}};
  opacity: 0.3;
  animation: ${l=>l.actionType==="thinking"?ph:"pulse"} 2s infinite;
  z-index: -1;
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.1;
    }
  }
  
  /* Ripple effect for action types */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    animation: ${Bm} 3s infinite;
    opacity: 0.6;
  }
`,Hm=D(km)`
  ${l=>l.actionType==="thinking"&&`
    animation: ${ph} 2s infinite ease-in-out;
  `}
  
  ${l=>l.actionType&&`
    &::before {
      content: '';
      font-size: 14px;
      margin-right: 6px;
      ${(()=>{switch(l.actionType){case"draw":return"content: '🃏';";case"discard":return"content: '🗑️';";case"replace":return"content: '🔄';";case"peek":return"content: '👁️';";case"swap":return"content: '🔀';";case"thinking":return"content: '🤖';";case"turn":return"content: '⭐';";default:return"content: '⚡';"}})()}
    }
  `}
  
  /* Shimmer effect for active actions */
  ${l=>(l.actionType==="draw"||l.actionType==="replace")&&`
    background: linear-gradient(90deg, 
      ${l.variant==="success"?"#10B981":"#3B82F6"} 0%, 
      rgba(255, 255, 255, 0.3) 50%, 
      ${l.variant==="success"?"#059669":"#1E40AF"} 100%);
    background-size: 200px 100%;
    animation: ${Ym} 2s infinite;
  `}
`,Co=({action:l,visible:u,position:o="top",variant:c="primary",actionType:f})=>p.jsx(Um,{visible:u,position:o,variant:c,children:p.jsxs(Hm,{variant:c,actionType:f,children:[p.jsx(Gm,{variant:c,actionType:f}),l]})}),qm=D.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(8px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 165, 0, 0.02) 100%);
    border-radius: 18px;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    gap: 24px;
    padding: 20px;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    gap: 16px;
    padding: 16px;
    border-radius: 12px;
  }
`,dp=D.div`
  text-align: center;
  position: relative;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`,fp=D.div`
  width: 120px;
  height: 160px;
  border-radius: 12px;
  border: 3px solid ${l=>l.isEmpty?"#6B7280":l.isDiscard?l.canDraw?"#8B5CF6":"#D1D5DB":l.canDraw?"#3B82F6":"#1E40AF"};
  position: relative;
  cursor: ${l=>l.canDraw?"pointer":"default"};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${l=>l.isEmpty?"linear-gradient(135deg, #6B7280 0%, #4B5563 100%)":l.isDiscard?"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)":"linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)"};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  
  /* Draw animation pulse */
  ${l=>l.canDraw&&`
    animation: drawPulse 2s infinite;
    
    @keyframes drawPulse {
      0%, 100% {
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2), 
                    0 0 0 0 ${l.isDiscard?"rgba(139, 92, 246, 0.7)":"rgba(59, 130, 246, 0.7)"};
      }
      50% {
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2), 
                    0 0 0 8px ${l.isDiscard?"rgba(139, 92, 246, 0)":"rgba(59, 130, 246, 0)"};
      }
    }
  `}
  
  @media (max-width: 768px) {
    width: 80px;
    height: 107px;
    border-radius: 8px;
    border-width: 2px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 80px;
    border-radius: 6px;
    border-width: 1px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  
  ${l=>l.canDraw&&`
    &:hover {
      transform: scale(1.05) translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      border-color: ${l.isDiscard?"#A855F7":"#60A5FA"};
    }
  `}
  
  ${l=>l.isEmpty&&`
    border-style: dashed;
    opacity: 0.6;
  `}
`,pp=D.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1E40AF 0%, #3730A3 100%);
  border-radius: 12px;
  transform: ${l=>`translate(${l.layer*4}px, ${l.layer*4}px)`};
  z-index: ${l=>-l.layer};
`,Lm=D.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
  border-radius: 10px;
  border: 2px solid #60A5FA;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 8px;
    border: 2px solid rgba(147, 197, 253, 0.5);
    border-radius: 6px;
  }
`,hp=D.div`
  color: white;
  text-align: center;
  z-index: 10;
  
  .deck-label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  
  .deck-count {
    font-size: 24px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 768px) {
      font-size: 18px;
    }
    
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
  
  .empty-label {
    color: #9CA3AF;
    font-size: 12px;
  }
`,Xm=D.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  color: ${l=>l.color};
  position: relative;
  border-radius: 10px;
  border: 2px solid rgba(255, 215, 0, 0.3);
  background: linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%);
  box-sizing: border-box;
  
  .rank {
    font-size: 16px;
    font-weight: bold;
    font-family: 'JetBrains Mono', monospace;
    
    @media (max-width: 768px) {
      font-size: 12px;
    }
    
    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
  
  .suit {
    font-size: 20px;
    line-height: 1;
  }
  
  .center {
    font-size: 32px;
    font-weight: bold;
    
    @media (max-width: 768px) {
      font-size: 24px;
    }
    
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
  
  .value {
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 2px 4px;
    font-weight: bold;
  }
`,gp=D.div`
  position: absolute;
  top: -12px;
  right: -12px;
  background: ${l=>l.color};
  color: white;
  font-size: 10px;
  padding: 4px 6px;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  animation: pulse 2s infinite;
  z-index: 20;
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  
  @media (max-width: 768px) {
    top: -8px;
    right: -8px;
    font-size: 8px;
    padding: 2px 4px;
  }
`,xp=D.div`
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-top: 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.5px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  padding: 8px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 100%);
    border-color: rgba(255, 215, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 12px;
    padding: 6px 12px;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
    margin-top: 8px;
    padding: 4px 8px;
    border-radius: 6px;
  }
`,Qm=D.div`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  border-radius: 50%;
  border: 1px solid #FF8C00;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,Km=D.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${l=>l.percentage}%;
    background: ${l=>l.percentage>66?"linear-gradient(90deg, #10B981 0%, #34D399 100%)":l.percentage>33?"linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%)":"linear-gradient(90deg, #EF4444 0%, #F87171 100%)"};
    transition: width 0.3s ease, background 0.3s ease;
    animation: ${l=>l.percentage<=33?"lowDeckPulse 1.5s infinite":"none"};
  }
  
  @keyframes lowDeckPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`,Zm=D.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: ${l=>{const u=l.cardsLeft/l.total*100;return u>66?"linear-gradient(135deg, #10B981 0%, #059669 100%)":u>33?"linear-gradient(135deg, #F59E0B 0%, #D97706 100%)":"linear-gradient(135deg, #EF4444 0%, #DC2626 100%)"}};
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-family: 'JetBrains Mono', monospace;
  
  ${l=>l.cardsLeft/l.total*100<=33?`
      animation: urgentBlink 1s infinite;
      
      @keyframes urgentBlink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
      }
    `:""}
  
  @media (max-width: 768px) {
    font-size: 9px;
    padding: 1px 4px;
    top: -6px;
    right: -6px;
  }
`,Vm=()=>{const{gameState:l,actions:u}=ja(),[o,c]=Be.useState(null),g=u.getCurrentPlayer()?.type==="human",w=!!l.ui.selectedCard,_=u.canDrawFromDeck()&&g&&!w,S=u.canDrawFromDiscard()&&g&&!w,y=l.deck.discardPile[l.deck.discardPile.length-1],E=y?u.getCardById(y):null,U=Y=>Y==="hearts"||Y==="diamonds"?"#DC2626":"#1F2937",k=Y=>{if(!Y)return"";switch(Y){case"hearts":return"♥";case"diamonds":return"♦";case"clubs":return"♣";case"spades":return"♠";default:return""}},B=Y=>Y?Y==="joker"?"JOK":Y==="ace"?"A":Y==="king"?"K":Y==="queen"?"Q":Y==="jack"?"J":Y:"";return p.jsxs(qm,{children:[p.jsxs(dp,{children:[p.jsxs(fp,{canDraw:_,isEmpty:l.deck.drawPile.length===0,onClick:_?()=>u.drawFromDeck():void 0,onMouseEnter:()=>c("deck"),onMouseLeave:()=>c(null),children:[_&&p.jsx(Co,{action:"Click to draw",visible:o==="deck",position:"top",variant:"primary"}),l.deck.drawPile.length>0&&p.jsxs(p.Fragment,{children:[p.jsx(pp,{layer:1}),p.jsx(pp,{layer:2})]}),p.jsxs(Lm,{children:[p.jsx(hp,{children:l.deck.drawPile.length>0?p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"deck-label",children:"DECK"}),p.jsx("div",{className:"deck-count",children:l.deck.drawPile.length})]}):p.jsx("div",{className:"empty-label",children:"EMPTY"})}),l.deck.drawPile.length>0&&p.jsxs(p.Fragment,{children:[p.jsx(Km,{percentage:l.deck.drawPile.length/54*100}),p.jsxs(Zm,{cardsLeft:l.deck.drawPile.length,total:54,children:[Math.round(l.deck.drawPile.length/54*100),"%"]})]})]}),_&&p.jsx(gp,{color:"#10B981",children:"DRAW"})]}),p.jsx(xp,{children:"Draw Pile"})]}),p.jsxs(dp,{children:[p.jsxs(fp,{canDraw:S,isEmpty:l.deck.discardPile.length===0,isDiscard:!0,onClick:S?()=>u.drawFromDiscard():void 0,onMouseEnter:()=>c("discard"),onMouseLeave:()=>c(null),children:[S&&p.jsx(Co,{action:"Click to draw",visible:o==="discard",position:"top",variant:"info"}),l.deck.discardPile.length>0&&E?p.jsxs(Xm,{color:U(E.suit||"spades"),children:[p.jsxs("div",{style:{position:"absolute",top:"8px",left:"8px",textAlign:"left",lineHeight:"1"},children:[p.jsx("div",{className:"rank",children:B(E.rank)}),E.suit&&p.jsx("div",{className:"suit",children:k(E.suit)})]}),p.jsx("div",{className:"center",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:E.rank==="joker"?"🃏":k(E.suit||"spades")}),p.jsxs("div",{style:{position:"absolute",bottom:"8px",right:"8px",transform:"rotate(180deg)",textAlign:"right",lineHeight:"1"},children:[p.jsx("div",{className:"rank",children:B(E.rank)}),E.suit&&p.jsx("div",{className:"suit",children:k(E.suit)})]}),E.isSpecial&&p.jsx(Qm,{})]}):p.jsx(hp,{children:p.jsxs("div",{className:"empty-label",children:[p.jsx("div",{children:"DISCARD"}),p.jsx("div",{children:"PILE"})]})}),S&&p.jsx(gp,{color:"#8B5CF6",children:"DRAW"})]}),p.jsxs(xp,{children:["Discard (",l.deck.discardPile.length,")"]})]})]})},Im=D.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,mp=D.div`
  display: flex;
  flex-direction: column;
`,yp=D.label`
  font-size: 14px;
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 8px;
`,Pm=D.select`
  width: 100%;
  padding: 12px 16px;
  border: 3px solid #FFD700;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  background: white;
  color: #1F2937;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #FFA500;
    box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.3);
  }
`,Fm=D.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`,$m=D.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  border: 3px solid #FFD700;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  background: white;
  color: #1F2937;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #FFA500;
    box-shadow: inset 0 0 0 2px rgba(255, 165, 0, 0.3);
  }
  
  &::placeholder {
    color: #9CA3AF;
    font-weight: 400;
  }
`,Ar=D.button`
  width: 100%;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 3px solid;
  position: relative;
  z-index: 100;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  border-color: #047857;
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4), 0 3px 8px rgba(0, 0, 0, 0.2);
  
  /* Enhanced accessibility */
  &:focus {
    outline: none;
    ring: 3px solid rgba(16, 185, 129, 0.5);
    ring-offset: 2px;
  }
  
  /* Ripple effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
    pointer-events: none;
  }
  
  &:active::before {
    width: 300px;
    height: 300px;
  }
  
  &:hover {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.6), 0 5px 15px rgba(0, 0, 0, 0.3);
    border-color: #065F46;
  }
  
  &:active {
    transform: translateY(-1px) scale(1.01);
    transition: all 0.1s ease;
  }
  
  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 16px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 15px;
    border-radius: 10px;
  }
`,Jm=D.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`,Er=D.button`
  padding: 14px 28px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 3px solid;
  position: relative;
  z-index: 100;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  
  /* Enhanced accessibility */
  &:focus {
    outline: none;
    ring: 3px solid rgba(255, 255, 255, 0.5);
    ring-offset: 2px;
  }
  
  /* Ripple effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
    pointer-events: none;
  }
  
  &:active::before {
    width: 300px;
    height: 300px;
  }
  
  ${l=>{switch(l.variant){case"discard":return`
          background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
          color: white;
          border-color: #B91C1C;
          box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4), 0 3px 8px rgba(0, 0, 0, 0.2);
          
          &:hover {
            background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%);
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 10px 30px rgba(239, 68, 68, 0.6), 0 5px 15px rgba(0, 0, 0, 0.3);
            border-color: #991B1B;
          }
          
          &:focus {
            ring-color: rgba(239, 68, 68, 0.7);
          }
        `;case"stop":return`
          background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
          color: white;
          border-color: #B45309;
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4), 0 3px 8px rgba(0, 0, 0, 0.2);
          animation: stopPulse 3s infinite;
          
          &:hover {
            background: linear-gradient(135deg, #D97706 0%, #B45309 100%);
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 10px 30px rgba(245, 158, 11, 0.6), 0 5px 15px rgba(0, 0, 0, 0.3);
            border-color: #92400E;
            animation: none;
          }
          
          &:focus {
            ring-color: rgba(245, 158, 11, 0.7);
          }
          
          @keyframes stopPulse {
            0%, 100% { 
              box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4), 0 3px 8px rgba(0, 0, 0, 0.2);
            }
            50% { 
              box-shadow: 0 8px 25px rgba(245, 158, 11, 0.6), 0 4px 12px rgba(0, 0, 0, 0.3);
            }
          }
        `;case"dev":return`
          background: linear-gradient(135deg, #6B7280 0%, #4B5563 100%);
          color: white;
          border-color: #374151;
          font-size: 14px;
          padding: 10px 20px;
          box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3), 0 2px 6px rgba(0, 0, 0, 0.2);
          opacity: 0.8;
          
          &:hover {
            background: linear-gradient(135deg, #4B5563 0%, #374151 100%);
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 6px 18px rgba(107, 114, 128, 0.4), 0 3px 9px rgba(0, 0, 0, 0.3);
            opacity: 1;
          }
          
          &:focus {
            ring-color: rgba(107, 114, 128, 0.7);
          }
        `}}}
  
  &:active {
    transform: translateY(-1px) scale(1.01);
    transition: all 0.1s ease;
  }
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 15px;
    border-radius: 12px;
    
    ${l=>l.variant==="dev"&&`
      padding: 8px 16px;
      font-size: 13px;
    `}
  }
  
  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 10px;
    
    ${l=>l.variant==="dev"&&`
      padding: 6px 12px;
      font-size: 12px;
    `}
  }
`,Wm=D.div`
  text-align: center;
  
  .panel {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 24px;
    backdrop-filter: blur(8px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 16px;
  }
  
  .title {
    color: white;
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 16px;
  }
  
  .winner {
    color: #FEF08A;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
    
    .score {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.9);
      margin-top: 4px;
    }
  }
  
  .scores {
    color: white;
    margin-bottom: 16px;
    
    .scores-title {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      padding-bottom: 8px;
    }
    
    .player-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      margin-bottom: 8px;
      padding: 8px 12px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.05);
      
      &.winner {
        background: rgba(254, 240, 138, 0.2);
        border: 1px solid rgba(254, 240, 138, 0.5);
      }
      
      .rank {
        font-weight: bold;
        margin-right: 12px;
      }
      
      .name {
        flex: 1;
        text-align: left;
        
        .bot-label {
          font-size: 10px;
          background: rgba(59, 130, 246, 0.8);
          color: white;
          padding: 2px 6px;
          border-radius: 4px;
          margin-left: 8px;
        }
      }
      
      .score {
        font-weight: bold;
      }
    }
  }
  
  .progress {
    color: white;
    
    .progress-title {
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 8px;
    }
    
    .progress-row {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      margin-bottom: 4px;
    }
  }
`,ey=D.div`
  text-align: center;
  
  .panel {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 24px;
    backdrop-filter: blur(8px);
    border: 2px solid rgba(255, 255, 255, 0.2);
  }
  
  .title {
    color: white;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 12px;
  }
  
  .description {
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    margin-bottom: 16px;
  }
`,ty=D.div`
  text-align: center;
  
  .panel {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 32px;
    backdrop-filter: blur(8px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 16px;
  }
  
  .title {
    color: white;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 16px;
  }
  
  .winner {
    color: #FEF08A;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }
  
  .standings {
    color: white;
    
    .standings-title {
      font-weight: bold;
      margin-bottom: 8px;
    }
    
    .player-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      margin-bottom: 4px;
    }
  }
`,bp=()=>{const{gameState:l,actions:u}=ja(),[o,c]=Be.useState(2),[f,g]=Be.useState(["You","Bot 1","Bot 2","Bot 3"]),_=u.getCurrentPlayer()?.type==="human",S=!!l.ui.selectedCard,y=u.canCallStop()&&_;if(l.round.phase===P.SETUP)return p.jsxs(Im,{children:[p.jsxs(mp,{children:[p.jsx(yp,{children:"Number of Players"}),p.jsxs(Pm,{value:o,onChange:E=>c(Number(E.target.value)),children:[p.jsx("option",{value:2,children:"2 Players"}),p.jsx("option",{value:3,children:"3 Players"}),p.jsx("option",{value:4,children:"4 Players"})]})]}),p.jsxs(mp,{children:[p.jsx(yp,{children:"Player Names"}),p.jsx(Fm,{children:Array.from({length:o},(E,U)=>p.jsx($m,{type:"text",value:f[U],onChange:k=>{const B=[...f];B[U]=k.target.value,g(B)},placeholder:U===0?"Your name":`Bot ${U}`},U))})]}),p.jsx(Ar,{onClick:()=>u.startGame(o,f.slice(0,o)),children:"🎮 Start Game 🎮"})]});if(l.round.phase===P.CARD_VIEWING){const E=l.ui.startCountdown,U=E?.isActive,k=E?Math.ceil(E.remainingTime/1e3):0,B=()=>{U?(u.stopCountdown(),u.makeMove({type:"START_PLAYING",payload:{}})):u.startCountdown(5e3)};return p.jsx(ey,{children:p.jsxs("div",{className:"panel",children:[p.jsx("h3",{className:"title",children:"Memorize Your Cards!"}),p.jsx("p",{className:"description",children:"Look at your face-up cards and remember them. They will be hidden once the game starts."}),p.jsx(Ar,{onClick:B,children:U?`🚀 Starting in ${k}s (Click to start now)`:"🚀 Game starting automatically..."})]})})}if(l.round.phase===P.PLAYING)return p.jsxs(Jm,{children:[S&&_&&p.jsx(Er,{variant:"discard",onClick:()=>u.discardDrawnCard(),children:"🗑️ Discard Card"}),l.ui.jackSwapMode?.isActive&&_&&p.jsx(Er,{variant:"stop",onClick:()=>u.makeMove({type:"CANCEL_JACK_SWAP",payload:{}}),children:"✖️ Cancel Swap"}),y&&p.jsx(Er,{variant:"stop",onClick:()=>u.callStop(),children:"✋ Call Stop"}),_&&!S&&p.jsx(Er,{variant:"dev",onClick:()=>u.forceEndTurn(),children:l.ui.turnTimer?.isActive?`⏱️ End Turn (${Math.ceil(l.ui.turnTimer.remainingTime/1e3)}s)`:"⏭️ End Turn"}),!1]});if(l.round.phase===P.SCORING){const E=l.players.map(Y=>({...Y,roundScore:Y.score})).sort((Y,W)=>Y.roundScore-W.roundScore),U=E[0],k=l.match.winner!==null,B=k?l.players.find(Y=>Y.id===l.match.winner):null;return p.jsxs(Wm,{children:[p.jsxs("div",{className:"panel",children:[p.jsx("h2",{className:"title",children:k?"🎉 Match Complete! 🎉":`Round ${l.match.currentRound} Results`}),!k&&p.jsxs("div",{className:"winner",children:["👑 ",U.name," wins Round ",l.match.currentRound,"!",p.jsxs("div",{className:"score",children:["With ",U.roundScore," points"]})]}),k&&B&&p.jsxs("div",{className:"winner",children:[B.name," wins the match!"]}),p.jsxs("div",{className:"scores",children:[p.jsx("h4",{className:"scores-title",children:k?"Final Standings":"Round Scores"}),E.map((Y,W)=>p.jsxs("div",{className:`player-row ${W===0&&!k?"winner":""}`,children:[p.jsxs("span",{className:"rank",children:[W+1,"."]}),p.jsxs("span",{className:"name",children:[Y.name,Y.type==="bot"&&p.jsx("span",{className:"bot-label",children:"BOT"})]}),p.jsx("span",{className:"score",children:k?`${Y.roundWins} wins`:`${Y.roundScore} pts`})]},Y.id))]}),!k&&p.jsxs("div",{className:"progress",children:[p.jsx("h4",{className:"progress-title",children:"Match Progress"}),l.players.map(Y=>p.jsxs("div",{className:"progress-row",children:[p.jsx("span",{children:Y.name}),p.jsxs("span",{children:[Y.roundWins,"/",l.match.roundsToWin]})]},Y.id))]})]}),p.jsx(Ar,{onClick:()=>u.forceProgressScoring(),children:k?"🔄 New Game":"▶️ Continue to Next Round"})]})}return l.round.phase===P.FINISHED?p.jsxs(ty,{children:[p.jsxs("div",{className:"panel",children:[p.jsx("h2",{className:"title",children:"🎉 Game Complete! 🎉"}),l.match.winner&&p.jsxs("div",{className:"winner",children:[l.players.find(E=>E.id===l.match.winner)?.name," wins the match!"]}),p.jsxs("div",{className:"standings",children:[p.jsx("h4",{className:"standings-title",children:"Final Standings:"}),l.players.sort((E,U)=>U.roundWins-E.roundWins).map((E,U)=>p.jsxs("div",{className:"player-row",children:[p.jsxs("span",{children:[U+1,". ",E.name]}),p.jsxs("span",{children:[E.roundWins," round",E.roundWins!==1?"s":""]})]},E.id))]})]}),p.jsx(Ar,{onClick:()=>window.location.reload(),children:"🔄 New Game"})]}):null},ay=D.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.25) 100%);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(12px);
  border: 2px solid rgba(255, 215, 0, 0.3);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(255, 215, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 165, 0, 0.02) 100%);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 215, 0, 0.6) 50%, transparent 100%);
    animation: statusShimmer 3s infinite;
  }
  
  @keyframes statusShimmer {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 12px;
    border-width: 1px;
  }
  
  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 10px;
  }
`,ny=D.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  text-align: center;
  color: white;
  position: relative;
  z-index: 10;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
  
  @media (max-width: 480px) {
    gap: 16px;
  }
`,Cr=D.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 16px 12px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 215, 0, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 12px 8px;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 6px;
    border-radius: 8px;
  }
`,Tr=D.div`
  font-size: 13px;
  opacity: 0.85;
  margin-bottom: 6px;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: rgba(255, 215, 0, 0.9);
  
  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 4px;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
    margin-bottom: 3px;
  }
`,vp=D.div`
  font-weight: bold;
  font-size: 18px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  font-family: 'Playfair Display', serif;
  color: white;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`,ly=D.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 480px) {
    gap: 4px;
    flex-direction: column;
  }
`,iy=D.span`
  font-size: 12px;
  background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: bold;
  text-shadow: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border: 1px solid #1E40AF;
  
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 9px;
    padding: 2px 4px;
    border-radius: 6px;
  }
`,ry=D.div`
  grid-column: span 2;
  background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
  border: 2px solid #B91C1C;
  animation: alertPulse 2s infinite;
  
  @keyframes alertPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.02); opacity: 0.95; }
  }
  
  @media (min-width: 768px) {
    grid-column: span 4;
  }
  
  @media (max-width: 768px) {
    padding: 12px;
    border-radius: 8px;
    border-width: 1px;
  }
  
  @media (max-width: 480px) {
    padding: 8px;
    border-radius: 6px;
  }
`,uy=D.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 4px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 2px;
  }
`,cy=D.div`
  font-size: 14px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
  }
`,oy=D.div`
  position: relative;
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 8px;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${l=>l.progress}%;
    background: linear-gradient(90deg, #10B981 0%, #34D399 100%);
    border-radius: 4px;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  @media (max-width: 768px) {
    height: 6px;
    margin-top: 6px;
  }
`,sy=D.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-family: 'JetBrains Mono', monospace;
  
  .turn-number {
    font-size: 18px;
    font-weight: bold;
    color: ${l=>l.isUrgent?"#EF4444":"#34D399"};
    animation: ${l=>l.isUrgent?"urgentTurn 1s infinite":"none"};
  }
  
  @keyframes urgentTurn {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  
  @media (max-width: 768px) {
    .turn-number {
      font-size: 16px;
    }
  }
`,Sp=D.div`
  grid-column: span 2;
  
  @media (min-width: 768px) {
    grid-column: span 4;
  }
`,wp=D.div`
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 8px;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
    margin-bottom: 4px;
  }
`,Ap=D.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  height: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  @media (max-width: 768px) {
    height: 6px;
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    height: 4px;
    border-radius: 4px;
  }
`,Ep=D.div`
  background: ${l=>l.progress>80?"linear-gradient(90deg, #EF4444 0%, #DC2626 100%)":l.progress>60?"linear-gradient(90deg, #F59E0B 0%, #D97706 100%)":"linear-gradient(90deg, #10B981 0%, #059669 100%)"};
  border-radius: 8px;
  height: 100%;
  width: ${l=>l.progress}%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${l=>l.progress>80?"0 2px 8px rgba(239, 68, 68, 0.4), 0 0 12px rgba(239, 68, 68, 0.2)":l.progress>60?"0 2px 8px rgba(245, 158, 11, 0.4), 0 0 12px rgba(245, 158, 11, 0.2)":"0 2px 8px rgba(16, 185, 129, 0.4), 0 0 12px rgba(16, 185, 129, 0.2)"};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
    animation: progressShine 2s infinite;
  }
  
  @keyframes progressShine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @media (max-width: 768px) {
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    border-radius: 4px;
  }
`,Cp=D.div`
  font-size: 12px;
  margin-top: 8px;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  
  @media (max-width: 768px) {
    font-size: 11px;
    margin-top: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
    margin-top: 4px;
  }
`,dy=()=>{const{gameState:l,actions:u}=ja(),o=u.getCurrentPlayer(),c=f=>{switch(f){case P.SETUP:return"Game Setup";case P.CARD_VIEWING:return"Card Viewing";case P.PLAYING:return"Playing";case P.SCORING:return"Round Complete";case P.FINISHED:return"Game Finished";default:return f}};return p.jsx(ay,{children:p.jsxs(ny,{children:[p.jsxs(Cr,{children:[p.jsx(Tr,{children:"Phase"}),p.jsx(vp,{children:c(l.round.phase)})]}),p.jsxs(Cr,{children:[p.jsx(Tr,{children:"Round"}),p.jsx(vp,{children:l.match.currentRound})]}),(l.round.phase===P.PLAYING||l.round.phase===P.CARD_VIEWING)&&o&&p.jsxs(Cr,{children:[p.jsx(Tr,{children:"Current Player"}),p.jsxs(ly,{children:[p.jsx("span",{children:o.name}),o.type==="bot"&&p.jsx(iy,{children:"BOT"})]})]}),l.round.phase===P.PLAYING&&p.jsxs(Cr,{children:[p.jsx(Tr,{children:"Turn"}),p.jsx(sy,{isUrgent:l.round.stopCalled&&l.round.remainingTurns<=2,children:p.jsx("span",{className:"turn-number",children:l.round.turnNumber})}),l.round.stopCalled&&p.jsx(oy,{progress:(l.players.length-l.round.remainingTurns)/l.players.length*100})]}),l.round.stopCalled&&p.jsxs(ry,{children:[p.jsx(uy,{children:"🛑 STOP CALLED! 🛑"}),p.jsxs(cy,{children:[l.round.stopCalledBy&&(()=>{const f=l.players.find(g=>g.id===l.round.stopCalledBy);return f?`${f.name} called stop • `:""})(),l.round.remainingTurns," turn",l.round.remainingTurns!==1?"s":""," remaining"]})]}),l.round.phase===P.PLAYING&&p.jsxs(Sp,{children:[p.jsx(wp,{children:"Deck Progress"}),p.jsx(Ap,{children:p.jsx(Ep,{progress:(54-l.deck.drawPile.length)/54*100})}),p.jsxs(Cp,{children:[l.deck.drawPile.length," cards remaining • Turn ",l.round.turnNumber]})]}),l.match.roundsToWin>1&&p.jsxs(Sp,{children:[p.jsx(wp,{children:"Match Progress"}),p.jsx(Ap,{children:p.jsx(Ep,{progress:l.match.currentRound/l.match.roundsToWin*100})}),p.jsxs(Cp,{children:["Round ",l.match.currentRound," of ",l.match.roundsToWin]})]})]})})},fy=D.div`
  text-align: center;
  position: relative;
`,py=D.div`
  margin-bottom: 16px;
`,hy=D.div`
  width: 120px;
  height: 160px;
  background: white;
  border-radius: 12px;
  border: 3px solid #FFD700;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4), 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: cardPulse 2s infinite;
  
  @keyframes cardPulse {
    0%, 100% { 
      transform: scale(1);
      box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4), 0 4px 10px rgba(0, 0, 0, 0.2);
    }
    50% { 
      transform: scale(1.05);
      box-shadow: 0 12px 35px rgba(255, 215, 0, 0.6), 0 6px 15px rgba(0, 0, 0, 0.3);
    }
  }
  
  @media (max-width: 768px) {
    width: 80px;
    height: 107px;
    border-width: 2px;
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 80px;
    border-width: 1px;
  }
`,gy=D.div`
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${l=>l.color};
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 6px;
  }
  
  @media (max-width: 480px) {
    padding: 4px;
  }
`,xy=D.div`
  position: absolute;
  top: 8px;
  left: 8px;
  text-align: left;
  line-height: 1;
  
  @media (max-width: 768px) {
    top: 6px;
    left: 6px;
  }
  
  @media (max-width: 480px) {
    top: 4px;
    left: 4px;
  }
`,Tp=D.div`
  font-size: 16px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: bold;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
  }
`,Dp=D.div`
  font-size: 20px;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`,my=D.div`
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,yy=D.div`
  font-size: 12px;
  font-weight: bold;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: white;
  border-radius: 6px;
  padding: 4px 8px;
  border: 2px solid #FF8C00;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 2px 6px;
    border-width: 1px;
  }
  
  @media (max-width: 480px) {
    font-size: 8px;
    padding: 2px 4px;
  }
`,by=D.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  text-align: right;
  transform: rotate(180deg);
  line-height: 1;
  
  @media (max-width: 768px) {
    bottom: 6px;
    right: 6px;
  }
  
  @media (max-width: 480px) {
    bottom: 4px;
    right: 4px;
  }
`,vy=D.div`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
    top: 4px;
    right: 4px;
    border-width: 1px;
  }
  
  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
    top: 2px;
    right: 2px;
  }
`,Sy=D.div`
  color: white;
  text-align: center;
`,wy=D.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 4px;
  }
`,Ay=()=>{const{gameState:l,actions:u}=ja(),o=l.ui.selectedCard,c=o?u.getCardById(o):null;if(!c)return null;const f=()=>c.suit==="hearts"||c.suit==="diamonds"?"#DC2626":"#1F2937",g=()=>{switch(c.suit){case"hearts":return"♥";case"diamonds":return"♦";case"clubs":return"♣";case"spades":return"♠";default:return""}},w=()=>c.rank==="joker"?"JOK":c.rank==="ace"?"A":c.rank==="king"?"K":c.rank==="queen"?"Q":c.rank==="jack"?"J":c.rank?.toUpperCase()||"";return p.jsxs(fy,{children:[p.jsx(py,{children:p.jsxs(hy,{children:[p.jsxs(gy,{color:f(),children:[p.jsxs(xy,{children:[p.jsx(Tp,{children:w()}),c.suit&&p.jsx(Dp,{children:g()})]}),p.jsx(my,{children:p.jsxs(yy,{children:[c.value," pts"]})}),p.jsxs(by,{children:[p.jsx(Tp,{children:w()}),c.suit&&p.jsx(Dp,{children:g()})]})]}),c.isSpecial&&p.jsx(vy,{})]})}),p.jsx(Sy,{children:p.jsx(wy,{children:"Drawn Card"})})]})},Ey=D.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  animation: modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  @keyframes modalSlideIn {
    0% {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    100% {
      opacity: 1;
      backdrop-filter: blur(8px);
    }
  }
`,Cy=D.div`
  background: linear-gradient(135deg, #1A1A2E 0%, #16213E 100%);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.2);
  max-width: 42rem;
  width: 95%;
  max-height: 90vh;
  overflow-y: auto;
  border: 3px solid rgba(255, 215, 0, 0.4);
  position: relative;
  animation: modalContentSlide 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  @keyframes modalContentSlide {
    0% {
      opacity: 0;
      transform: scale(0.9) translateY(20px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    width: 98%;
    border-radius: 16px;
    border-width: 2px;
  }
`,Ty=D.div`
  background: ${l=>l.abilityType==="peek"?"linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)":"linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)"};
  color: white;
  padding: 24px;
  border-radius: 17px 17px 0 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 215, 0, 0.8) 50%, transparent 100%);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 13px 13px 0 0;
  }
`,Dy=D.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  z-index: 10;
`,_y=D.h2`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  margin: 0 0 8px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Ry=D.p`
  font-size: 14px;
  opacity: 0.95;
  margin: 0;
  font-family: 'Inter', sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,zy=D.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 24px;
  font-weight: bold;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
    transition: all 0.1s ease;
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 20px;
  }
`,Ny=D.div`
  padding: 32px;
  color: white;
  
  @media (max-width: 768px) {
    padding: 24px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
  }
`,Oy=D.div`
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 165, 0, 0.1) 100%);
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 32px;
  backdrop-filter: blur(8px);
  
  @media (max-width: 768px) {
    padding: 16px;
    margin-bottom: 24px;
    border-radius: 12px;
  }
`,My=D.h3`
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  font-size: 18px;
  color: #FFD700;
  margin: 0 0 8px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,jy=D.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,_p=D.div`
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`,Rp=D.h3`
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  font-size: 20px;
  color: white;
  margin: 0 0 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`,Dr=D.div`
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,zp=D.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: rgba(255, 215, 0, 0.9);
  margin: 0 0 12px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 10px;
  }
`,Uy=D.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  
  @media (max-width: 768px) {
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`,ky=D.div`
  aspect-ratio: 3/4;
  border-radius: 10px;
  border: 2px solid ${l=>l.isSelected?"#FFD700":"rgba(255, 255, 255, 0.3)"};
  background: ${l=>l.isSelected?"linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 165, 0, 0.1) 100%)":"rgba(255, 255, 255, 0.1)"};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
    opacity: ${l=>l.isSelected?1:0};
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: ${l=>l.isSelected?"#FFA500":"rgba(255, 215, 0, 0.6)"};
    background: ${l=>l.isSelected?"linear-gradient(135deg, rgba(255, 215, 0, 0.3) 0%, rgba(255, 165, 0, 0.2) 100%)":"rgba(255, 255, 255, 0.15)"};
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: scale(1.02) translateY(0);
    transition: all 0.1s ease;
  }
  
  @media (max-width: 768px) {
    border-radius: 8px;
    border-width: 1px;
  }
`,By=D.div`
  padding: 8px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 6px;
  }
`,Yy=D.div`
  font-size: 12px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  color: ${l=>l.isKnown?"#10B981":"rgba(255, 255, 255, 0.8)"};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
  }
`,Np=D.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: rgba(255, 215, 0, 0.9);
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 10px;
  }
`,Op=D.span`
  color: #10B981;
  font-weight: bold;
`,Gy=D.div`
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    padding: 12px;
    border-radius: 10px;
  }
`,Hy=D.h5`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 11px;
    margin-bottom: 6px;
  }
`,qy=D.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%);
  padding: 24px 32px;
  border-radius: 0 0 17px 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid rgba(255, 215, 0, 0.2);
  
  @media (max-width: 768px) {
    padding: 20px 24px;
    border-radius: 0 0 13px 13px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`,Ly=D.button`
  background: linear-gradient(135deg, #6B7280 0%, #4B5563 100%);
  color: white;
  border: 2px solid #374151;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: linear-gradient(135deg, #4B5563 0%, #374151 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(107, 114, 128, 0.4);
  }
  
  &:active {
    transform: translateY(0);
    transition: all 0.1s ease;
  }
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`,Xy=D.button`
  background: ${l=>l.disabled?"linear-gradient(135deg, #9CA3AF 0%, #6B7280 100%)":"linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)"};
  color: white;
  border: 2px solid ${l=>l.disabled?"#6B7280":"#1E40AF"};
  padding: 12px 32px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  cursor: ${l=>l.disabled?"not-allowed":"pointer"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${l=>l.disabled?.6:1};
  
  ${l=>!l.disabled&&`
    &:hover {
      background: linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%);
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
      border-color: #1E3A8A;
    }
    
    &:active {
      transform: translateY(0);
      transition: all 0.1s ease;
    }
  `}
  
  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`,Qy=({card:l,abilityType:u,onClose:o,onUse:c,onSkip:f})=>{const{gameState:g,actions:w}=ja(),[_,S]=Be.useState(null),[y,E]=Be.useState({playerCardIndex:null,targetPlayerId:null,targetCardIndex:null}),[U,k]=Be.useState(null),B=w.getCurrentPlayer(),Y=g.players.filter(G=>G.id!==B?.id),W=()=>{switch(u){case"peek":return"Look at any card on the table (yours or an opponent's)";case"swap":return"Swap one of your cards with an opponent's card";default:return""}},pe=G=>{S(G)},re=(G,X,V)=>{E(G==="player"?be=>({...be,playerCardIndex:V}):be=>({...be,targetPlayerId:X,targetCardIndex:V}))},ne=()=>u==="peek"?_!==null:u==="swap"?y.playerCardIndex!==null&&y.targetPlayerId!==null&&y.targetCardIndex!==null:!1,ee=()=>{u==="peek"&&_?c({targetCardId:_}):u==="swap"&&ne()&&c({playerCardIndex:y.playerCardIndex,targetPlayerId:y.targetPlayerId,targetCardIndex:y.targetCardIndex}),o()},ae=(G,X,V)=>p.jsx(Uy,{children:G.cards.map((be,De)=>{const Fe=V==="peek"&&_===be.cardId||V==="player"&&y.playerCardIndex===De||V==="target"&&y.targetPlayerId===G.id&&y.targetCardIndex===De,$e=`${G.id}-${De}`,je=U===$e,wt=()=>u==="peek"?Fe?"Selected to peek":"Click to peek":u==="swap"?X?Fe?"Your card selected":"Click to select your card":Fe?"Target card selected":"Click to select target":"Click to select",At=()=>u==="peek"?"info":u==="swap"&&X?"primary":u==="swap"&&!X?"success":"primary";return p.jsxs(ky,{isSelected:Fe,onMouseEnter:()=>k($e),onMouseLeave:()=>k(null),onClick:()=>{u==="peek"?pe(be.cardId):u==="swap"&&(X?re("player",void 0,De):re("target",G.id,De))},children:[p.jsx(Co,{action:wt(),visible:je&&!Fe,position:"top",variant:At()}),p.jsx(By,{children:p.jsxs(Yy,{isKnown:!1,children:["Card ",De+1]})})]},De)})});return p.jsx(Ey,{children:p.jsxs(Cy,{children:[p.jsx(Ty,{abilityType:u,children:p.jsxs(Dy,{children:[p.jsxs("div",{children:[p.jsxs(_y,{children:["✨ Special Ability: ",u==="peek"?"Peek":"Swap"]}),p.jsx(Ry,{children:W()})]}),p.jsx(zy,{onClick:o,children:"×"})]})}),p.jsxs(Ny,{children:[p.jsxs(Oy,{children:[p.jsxs(My,{children:["You drew: ",l.rank==="joker"?"joker":`${l.rank} of ${l.suit}`]}),p.jsx(jy,{children:"This card has a special ability. Choose to use it or skip it."})]}),u==="peek"&&p.jsxs(_p,{children:[p.jsx(Rp,{children:"Choose a card to peek at:"}),B&&p.jsxs(Dr,{children:[p.jsx(zp,{children:"Your Cards:"}),ae(B,!0,"peek")]}),Y.map(G=>p.jsxs(Dr,{children:[p.jsxs(zp,{children:[G.name,"'s Cards:"]}),ae(G,!1,"peek")]},G.id))]}),u==="swap"&&p.jsxs(_p,{children:[p.jsx(Rp,{children:"Choose cards to swap:"}),B&&p.jsxs(Dr,{children:[p.jsxs(Np,{children:["Step 1: Select one of your cards",y.playerCardIndex!==null&&p.jsxs(Op,{children:["✓ Card ",y.playerCardIndex+1," selected"]})]}),ae(B,!0,"player")]}),p.jsxs(Dr,{children:[p.jsxs(Np,{children:["Step 2: Select an opponent's card to swap with",y.targetPlayerId&&y.targetCardIndex!==null&&p.jsxs(Op,{children:["✓ ",Y.find(G=>G.id===y.targetPlayerId)?.name,"'s card ",y.targetCardIndex+1," selected"]})]}),Y.map(G=>p.jsxs(Gy,{children:[p.jsxs(Hy,{children:[G.name,":"]}),ae(G,!1,"target")]},G.id))]})]})]}),p.jsxs(qy,{children:[p.jsx(Ly,{onClick:()=>{f(),o()},children:"Skip Ability"}),p.jsx(Xy,{onClick:ee,disabled:!ne(),children:"Use Ability"})]})]})})},Ky=D.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  animation: peekFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  @keyframes peekFadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`,Zy=D.div`
  background: linear-gradient(135deg, #1A1A2E 0%, #16213E 100%);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7), 0 0 40px rgba(52, 211, 153, 0.3);
  max-width: 24rem;
  width: 95%;
  border: 3px solid rgba(52, 211, 153, 0.4);
  position: relative;
  animation: peekSlideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  @keyframes peekSlideUp {
    0% {
      opacity: 0;
      transform: scale(0.8) translateY(30px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    width: 90%;
    border-radius: 16px;
    border-width: 2px;
  }
`,Vy=D.div`
  background: linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%);
  color: white;
  padding: 20px;
  border-radius: 17px 17px 0 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, rgba(52, 211, 153, 0.8) 50%, transparent 100%);
  }
  
  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 13px 13px 0 0;
  }
`,Iy=D.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
`,Py=D.h2`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`,Fy=D.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 20px;
  font-weight: bold;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
    transition: all 0.1s ease;
  }
  
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 18px;
  }
`,$y=D.div`
  padding: 32px;
  color: white;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 24px;
  }
`,Jy=D.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,Wy=D.div`
  width: 128px;
  height: 176px;
  background: ${l=>{switch(l.suit){case"hearts":return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)";case"diamonds":return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)";case"clubs":return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)";case"spades":return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)";default:return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)"}}};
  border-radius: 12px;
  border: 3px solid rgba(52, 211, 153, 0.6);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(52, 211, 153, 0.3);
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  animation: cardRevealGlow 2s infinite;
  
  @keyframes cardRevealGlow {
    0%, 100% {
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(52, 211, 153, 0.3);
    }
    50% {
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 30px rgba(52, 211, 153, 0.5);
    }
  }
  
  @media (max-width: 768px) {
    width: 112px;
    height: 154px;
    padding: 10px;
    border-radius: 10px;
    border-width: 2px;
  }
`,Mp=D.div`
  text-align: ${l=>l.rotated?"right":"left"};
  color: ${l=>l.color};
  transform: ${l=>l.rotated?"rotate(180deg)":"none"};
  
  .rank {
    font-size: 16px;
    font-weight: bold;
    line-height: 0.9;
    font-family: 'JetBrains Mono', monospace;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  
  .suit {
    font-size: 20px;
    line-height: 0.9;
    
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`,eb=D.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  .points-badge {
    background: linear-gradient(135deg, #1F2937 0%, #374151 100%);
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 8px;
    border: 2px solid #6B7280;
    font-family: 'JetBrains Mono', monospace;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 768px) {
      font-size: 11px;
      padding: 3px 6px;
    }
  }
`,tb=D.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  border-radius: 50%;
  border: 2px solid #FF8C00;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
    top: 6px;
    right: 6px;
    border-width: 1px;
  }
`,ab=D.div`
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`,nb=D.h3`
  font-size: 18px;
  font-weight: bold;
  color: #34D399;
  margin: 0 0 8px 0;
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 6px;
  }
`,lb=D.p`
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 8px 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  
  .points-value {
    font-weight: bold;
    color: #FFD700;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 6px;
  }
`,ib=D.p`
  color: #FFD700;
  font-weight: bold;
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,rb=D.div`
  background: linear-gradient(135deg, rgba(52, 211, 153, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%);
  border: 2px solid rgba(52, 211, 153, 0.3);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  
  p {
    color: rgba(52, 211, 153, 0.9);
    font-size: 13px;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    padding: 12px;
    margin-bottom: 20px;
    border-radius: 10px;
    
    p {
      font-size: 12px;
    }
  }
`,ub=D.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%);
  padding: 20px 32px;
  border-radius: 0 0 17px 17px;
  border-top: 2px solid rgba(52, 211, 153, 0.2);
  
  @media (max-width: 768px) {
    padding: 16px 24px;
    border-radius: 0 0 13px 13px;
  }
`,cb=D.button`
  width: 100%;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  border: 2px solid #047857;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
    border-color: #065F46;
  }
  
  &:active {
    transform: translateY(0);
    transition: all 0.1s ease;
  }
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 13px;
  }
`,ob=({card:l,onClose:u})=>{const o=()=>l.suit==="hearts"||l.suit==="diamonds"?"#DC2626":"#1F2937",c=()=>{if(!l.suit)return"";switch(l.suit){case"hearts":return"♥";case"diamonds":return"♦";case"clubs":return"♣";case"spades":return"♠";default:return""}},f=()=>l.rank==="joker"?"JOK":l.rank==="ace"?"A":l.rank==="king"?"K":l.rank==="queen"?"Q":l.rank==="jack"?"J":l.rank;return p.jsx(Ky,{children:p.jsxs(Zy,{children:[p.jsx(Vy,{children:p.jsxs(Iy,{children:[p.jsx(Py,{children:"👀 Peek Result"}),p.jsx(Fy,{onClick:u,children:"×"})]})}),p.jsxs($y,{children:[p.jsx(Jy,{children:p.jsxs(Wy,{suit:l.suit||"default",children:[p.jsxs(Mp,{color:o(),children:[p.jsx("div",{className:"rank",children:f()}),l.suit&&p.jsx("div",{className:"suit",children:c()})]}),p.jsx(eb,{children:p.jsxs("div",{className:"points-badge",children:[l.value," pts"]})}),p.jsxs(Mp,{color:o(),rotated:!0,children:[p.jsx("div",{className:"rank",children:f()}),l.suit&&p.jsx("div",{className:"suit",children:c()})]}),l.isSpecial&&p.jsx(tb,{})]})}),p.jsxs(ab,{children:[p.jsx(nb,{children:l.rank==="joker"?"Joker":`${f()} of ${l.suit}`}),p.jsxs(lb,{children:["Worth ",p.jsxs("span",{className:"points-value",children:[l.value," points"]})]}),l.isSpecial&&p.jsx(ib,{children:"✨ Special Card"})]}),p.jsx(rb,{children:p.jsx("p",{children:"💡 Remember this card for your strategy!"})})]}),p.jsx(ub,{children:p.jsx(cb,{onClick:u,children:"Got it!"})})]})})},sb=D.div`
  min-height: 100vh;
  background: linear-gradient(135deg, 
    #6a1b9a 0%,    /* Purple */
    #d32f2f 25%,   /* Red */
    #ff6f00 50%,   /* Orange */
    #388e3c 75%,   /* Green */
    #1976d2 100%   /* Blue */
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg,
      rgba(255, 193, 7, 0.3) 0%,
      rgba(233, 30, 99, 0.3) 25%,
      rgba(76, 175, 80, 0.3) 50%,
      rgba(33, 150, 243, 0.3) 75%,
      rgba(156, 39, 176, 0.3) 100%
    );
  }
`,db=D.div`
  max-width: 800px;
  width: 100%;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 4px;
  }
  
  @media (max-width: 480px) {
    padding: 8px;
  }
`,fb=D.div`
  background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
  border-radius: 16px;
  padding: 8px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 4px solid #ffeb3b;
  
  @media (max-width: 768px) {
    border-radius: 12px;
    padding: 6px;
    border-width: 3px;
  }
  
  @media (max-width: 480px) {
    border-radius: 8px;
    padding: 4px;
    border-width: 2px;
  }
`,pb=D.div`
  background: linear-gradient(135deg, #4caf50 0%, #2e7d32 100%);
  border-radius: 12px;
  padding: 12px;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2);
  border: 4px solid #8bc34a;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    border-radius: 8px;
    padding: 8px;
    border-width: 3px;
  }
  
  @media (max-width: 480px) {
    border-radius: 6px;
    padding: 6px;
    border-width: 2px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg,
      rgba(76, 175, 80, 0.2) 25%,
      transparent 25%
    ),
    linear-gradient(-45deg,
      rgba(76, 175, 80, 0.2) 25%,
      transparent 25%
    );
    background-size: 20px 20px;
    opacity: 0.3;
    
    @media (max-width: 480px) {
      background-size: 15px 15px;
    }
  }
`,hb=D.h1`
  font-size: ${l=>l.isPlaying?"2rem":"3rem"};
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  background: linear-gradient(135deg, #ffeb3b 0%, #ff9800 50%, #f44336 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${l=>l.isPlaying?"8px":"16px"};
  text-align: center;
  letter-spacing: ${l=>l.isPlaying?"1px":"2px"};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: ${l=>l.isPlaying?"1.5rem":"2rem"};
    letter-spacing: ${l=>l.isPlaying?"0.5px":"1px"};
    margin-bottom: ${l=>l.isPlaying?"6px":"12px"};
  }
  
  @media (max-width: 480px) {
    font-size: ${l=>l.isPlaying?"1.25rem":"1.5rem"};
    letter-spacing: 0.5px;
    margin-bottom: ${l=>l.isPlaying?"4px":"8px"};
  }
`,gb=D.div`
  border-top: 4px solid #ffeb3b;
  width: 160px;
  margin: 0 auto 24px;
  opacity: 0.9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`,xb=D.div`
  background: linear-gradient(135deg, #00bcd4 0%, #2196f3 50%, #9c27b0 100%);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 450px;
  margin: 0 auto;
  border: 4px solid #e91e63;
  backdrop-filter: blur(8px);
  overflow: visible;
`,mb=D.h2`
  font-size: 2rem;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 16px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`,yb=D.p`
  color: #ffffff;
  margin-bottom: 24px;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,bb=D.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`,vb=D.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`,Sb=D.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
  
  @media (max-width: 480px) {
    gap: 12px;
  }
`,wb=D.div`
  display: flex;
  justify-content: center;
`,Ab=D.div`
  display: flex;
  justify-content: center;
`,Eb=D.div`
  text-align: center;
  margin-top: 16px;
  
  @media (max-width: 768px) {
    margin-top: 12px;
  }
  
  @media (max-width: 480px) {
    margin-top: 8px;
  }
`,Cb=()=>{const{gameState:l,actions:u}=ja(),o=l.ui.selectedCard,c=o?u.getCardById(o):null,f=c?.isSpecial&&l.ui.currentModal==="special-ability",g=l.ui.currentModal==="peek-result"&&l.ui.showingPeekCard,w=g?u.getCardById(l.ui.showingPeekCard):null,_=y=>{c&&(c.rank==="queen"?u.peekCard(y.targetCardId):c.rank==="jack"&&u.swapCards(y.playerCardIndex,y.targetPlayerId,y.targetCardIndex))},S=()=>{c&&u.skipSpecialAbility(c.id)};return p.jsx(sb,{children:p.jsxs(db,{children:[p.jsx(fb,{children:p.jsxs(pb,{children:[p.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[p.jsx(hb,{isPlaying:l.round.phase!==P.SETUP,children:"Alzheimer's Card Game"}),p.jsx(gb,{})]}),l.round.phase===P.SETUP&&p.jsx("div",{style:{textAlign:"center"},children:p.jsxs(xb,{children:[p.jsx(mb,{children:"Welcome to the Table!"}),p.jsx(yb,{children:"Ready to test your memory? Start a new game to begin playing."}),p.jsx(bp,{})]})}),(l.round.phase===P.CARD_VIEWING||l.round.phase===P.PLAYING||l.round.phase===P.SCORING||l.round.phase===P.FINISHED)&&p.jsxs(bb,{children:[l.players.length>1&&p.jsx(vb,{children:l.players.slice(1).map((y,E)=>p.jsx(sp,{player:y,isCurrentPlayer:l.round.currentPlayerIndex===E+1,showAsOpponent:!0},y.id))}),p.jsxs(Sb,{children:[p.jsx(Vm,{}),p.jsx(Ay,{})]}),l.players.length>0&&p.jsx(wb,{children:p.jsx(sp,{player:l.players[0],isCurrentPlayer:l.round.currentPlayerIndex===0,showAsOpponent:!1})}),p.jsx(Ab,{children:p.jsx(bp,{})}),p.jsx(Eb,{children:p.jsx(dy,{})})]})]})}),f&&c&&p.jsx(Qy,{card:c,abilityType:c.rank==="queen"?"peek":"swap",onClose:()=>u.hideModal(),onUse:_,onSkip:S}),g&&w&&p.jsx(ob,{card:w,onClose:()=>{u.hideModal(),l.ui.showingPeekCard&&u.makeMove({type:"HIDE_PEEK_RESULT",payload:{}})}})]})})};function Tb(){return p.jsx(hx,{children:p.jsx(Cb,{})})}Z1.createRoot(document.getElementById("root")).render(p.jsx(Be.StrictMode,{children:p.jsx(Tb,{})}));
