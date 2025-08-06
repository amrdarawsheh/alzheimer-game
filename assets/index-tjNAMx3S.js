(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const g of f)if(g.type==="childList")for(const S of g.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&c(S)}).observe(document,{childList:!0,subtree:!0});function o(f){const g={};return f.integrity&&(g.integrity=f.integrity),f.referrerPolicy&&(g.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?g.credentials="include":f.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function c(f){if(f.ep)return;f.ep=!0;const g=o(f);fetch(f.href,g)}})();function U1(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var io={exports:{}},Jl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function k1(){if(_0)return Jl;_0=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function o(c,f,g){var S=null;if(g!==void 0&&(S=""+g),f.key!==void 0&&(S=""+f.key),"key"in f){g={};for(var D in f)D!=="key"&&(g[D]=f[D])}else g=f;return f=g.ref,{$$typeof:l,type:c,key:S,ref:f!==void 0?f:null,props:g}}return Jl.Fragment=u,Jl.jsx=o,Jl.jsxs=o,Jl}var R0;function B1(){return R0||(R0=1,io.exports=k1()),io.exports}var p=B1(),ro={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function Y1(){if(z0)return le;z0=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),S=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),k=Symbol.iterator;function U(x){return x===null||typeof x!="object"?null:(x=k&&x[k]||x["@@iterator"],typeof x=="function"?x:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,F={};function fe(x,j,H){this.props=x,this.context=j,this.refs=F,this.updater=H||B}fe.prototype.isReactComponent={},fe.prototype.setState=function(x,j){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,j,"setState")},fe.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function he(){}he.prototype=fe.prototype;function ae(x,j,H){this.props=x,this.context=j,this.refs=F,this.updater=H||B}var ee=ae.prototype=new he;ee.constructor=ae,Y(ee,fe.prototype),ee.isPureReactComponent=!0;var ne=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},X=Object.prototype.hasOwnProperty;function K(x,j,H,q,O,I){return H=I.ref,{$$typeof:l,type:x,key:j,ref:H!==void 0?H:null,props:I}}function pe(x,j){return K(x.type,j,void 0,void 0,void 0,x.props)}function be(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function Ue(x){var j={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(H){return j[H]})}var Ke=/\/+/g;function ze(x,j){return typeof x=="object"&&x!==null&&x.key!=null?Ue(""+x.key):j.toString(36)}function rt(){}function Ge(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(rt,rt):(x.status="pending",x.then(function(j){x.status==="pending"&&(x.status="fulfilled",x.value=j)},function(j){x.status==="pending"&&(x.status="rejected",x.reason=j)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Xe(x,j,H,q,O){var I=typeof x;(I==="undefined"||I==="boolean")&&(x=null);var P=!1;if(x===null)P=!0;else switch(I){case"bigint":case"string":case"number":P=!0;break;case"object":switch(x.$$typeof){case l:case u:P=!0;break;case E:return P=x._init,Xe(P(x._payload),j,H,q,O)}}if(P)return O=O(x),P=q===""?"."+ze(x,0):q,ne(O)?(H="",P!=null&&(H=P.replace(Ke,"$&/")+"/"),Xe(O,j,H,"",function(at){return at})):O!=null&&(be(O)&&(O=pe(O,H+(O.key==null||x&&x.key===O.key?"":(""+O.key).replace(Ke,"$&/")+"/")+P)),j.push(O)),1;P=0;var Te=q===""?".":q+":";if(ne(x))for(var xe=0;xe<x.length;xe++)q=x[xe],I=Te+ze(q,xe),P+=Xe(q,j,H,I,O);else if(xe=U(x),typeof xe=="function")for(x=xe.call(x),xe=0;!(q=x.next()).done;)q=q.value,I=Te+ze(q,xe++),P+=Xe(q,j,H,I,O);else if(I==="object"){if(typeof x.then=="function")return Xe(Ge(x),j,H,q,O);throw j=String(x),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return P}function R(x,j,H){if(x==null)return x;var q=[],O=0;return Xe(x,q,"","",function(I){return j.call(H,I,O++)}),q}function L(x){if(x._status===-1){var j=x._result;j=j(),j.then(function(H){(x._status===0||x._status===-1)&&(x._status=1,x._result=H)},function(H){(x._status===0||x._status===-1)&&(x._status=2,x._result=H)}),x._status===-1&&(x._status=0,x._result=j)}if(x._status===1)return x._result.default;throw x._result}var $=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function ue(){}return le.Children={map:R,forEach:function(x,j,H){R(x,function(){j.apply(this,arguments)},H)},count:function(x){var j=0;return R(x,function(){j++}),j},toArray:function(x){return R(x,function(j){return j})||[]},only:function(x){if(!be(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},le.Component=fe,le.Fragment=o,le.Profiler=f,le.PureComponent=ae,le.StrictMode=c,le.Suspense=v,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,le.__COMPILER_RUNTIME={__proto__:null,c:function(x){return G.H.useMemoCache(x)}},le.cache=function(x){return function(){return x.apply(null,arguments)}},le.cloneElement=function(x,j,H){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var q=Y({},x.props),O=x.key,I=void 0;if(j!=null)for(P in j.ref!==void 0&&(I=void 0),j.key!==void 0&&(O=""+j.key),j)!X.call(j,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&j.ref===void 0||(q[P]=j[P]);var P=arguments.length-2;if(P===1)q.children=H;else if(1<P){for(var Te=Array(P),xe=0;xe<P;xe++)Te[xe]=arguments[xe+2];q.children=Te}return K(x.type,O,void 0,void 0,I,q)},le.createContext=function(x){return x={$$typeof:S,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:g,_context:x},x},le.createElement=function(x,j,H){var q,O={},I=null;if(j!=null)for(q in j.key!==void 0&&(I=""+j.key),j)X.call(j,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(O[q]=j[q]);var P=arguments.length-2;if(P===1)O.children=H;else if(1<P){for(var Te=Array(P),xe=0;xe<P;xe++)Te[xe]=arguments[xe+2];O.children=Te}if(x&&x.defaultProps)for(q in P=x.defaultProps,P)O[q]===void 0&&(O[q]=P[q]);return K(x,I,void 0,void 0,null,O)},le.createRef=function(){return{current:null}},le.forwardRef=function(x){return{$$typeof:D,render:x}},le.isValidElement=be,le.lazy=function(x){return{$$typeof:E,_payload:{_status:-1,_result:x},_init:L}},le.memo=function(x,j){return{$$typeof:y,type:x,compare:j===void 0?null:j}},le.startTransition=function(x){var j=G.T,H={};G.T=H;try{var q=x(),O=G.S;O!==null&&O(H,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(ue,$)}catch(I){$(I)}finally{G.T=j}},le.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},le.use=function(x){return G.H.use(x)},le.useActionState=function(x,j,H){return G.H.useActionState(x,j,H)},le.useCallback=function(x,j){return G.H.useCallback(x,j)},le.useContext=function(x){return G.H.useContext(x)},le.useDebugValue=function(){},le.useDeferredValue=function(x,j){return G.H.useDeferredValue(x,j)},le.useEffect=function(x,j,H){var q=G.H;if(typeof H=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return q.useEffect(x,j)},le.useId=function(){return G.H.useId()},le.useImperativeHandle=function(x,j,H){return G.H.useImperativeHandle(x,j,H)},le.useInsertionEffect=function(x,j){return G.H.useInsertionEffect(x,j)},le.useLayoutEffect=function(x,j){return G.H.useLayoutEffect(x,j)},le.useMemo=function(x,j){return G.H.useMemo(x,j)},le.useOptimistic=function(x,j){return G.H.useOptimistic(x,j)},le.useReducer=function(x,j,H){return G.H.useReducer(x,j,H)},le.useRef=function(x){return G.H.useRef(x)},le.useState=function(x){return G.H.useState(x)},le.useSyncExternalStore=function(x,j,H){return G.H.useSyncExternalStore(x,j,H)},le.useTransition=function(){return G.H.useTransition()},le.version="19.1.0",le}var N0;function Do(){return N0||(N0=1,ro.exports=Y1()),ro.exports}var Ye=Do();const oa=U1(Ye);var uo={exports:{}},Wl={},co={exports:{}},oo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function G1(){return O0||(O0=1,function(l){function u(R,L){var $=R.length;R.push(L);e:for(;0<$;){var ue=$-1>>>1,x=R[ue];if(0<f(x,L))R[ue]=L,R[$]=x,$=ue;else break e}}function o(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var L=R[0],$=R.pop();if($!==L){R[0]=$;e:for(var ue=0,x=R.length,j=x>>>1;ue<j;){var H=2*(ue+1)-1,q=R[H],O=H+1,I=R[O];if(0>f(q,$))O<x&&0>f(I,q)?(R[ue]=I,R[O]=$,ue=O):(R[ue]=q,R[H]=$,ue=H);else if(O<x&&0>f(I,$))R[ue]=I,R[O]=$,ue=O;else break e}}return L}function f(R,L){var $=R.sortIndex-L.sortIndex;return $!==0?$:R.id-L.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;l.unstable_now=function(){return g.now()}}else{var S=Date,D=S.now();l.unstable_now=function(){return S.now()-D}}var v=[],y=[],E=1,k=null,U=3,B=!1,Y=!1,F=!1,fe=!1,he=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function ne(R){for(var L=o(y);L!==null;){if(L.callback===null)c(y);else if(L.startTime<=R)c(y),L.sortIndex=L.expirationTime,u(v,L);else break;L=o(y)}}function G(R){if(F=!1,ne(R),!Y)if(o(v)!==null)Y=!0,X||(X=!0,ze());else{var L=o(y);L!==null&&Xe(G,L.startTime-R)}}var X=!1,K=-1,pe=5,be=-1;function Ue(){return fe?!0:!(l.unstable_now()-be<pe)}function Ke(){if(fe=!1,X){var R=l.unstable_now();be=R;var L=!0;try{e:{Y=!1,F&&(F=!1,ae(K),K=-1),B=!0;var $=U;try{t:{for(ne(R),k=o(v);k!==null&&!(k.expirationTime>R&&Ue());){var ue=k.callback;if(typeof ue=="function"){k.callback=null,U=k.priorityLevel;var x=ue(k.expirationTime<=R);if(R=l.unstable_now(),typeof x=="function"){k.callback=x,ne(R),L=!0;break t}k===o(v)&&c(v),ne(R)}else c(v);k=o(v)}if(k!==null)L=!0;else{var j=o(y);j!==null&&Xe(G,j.startTime-R),L=!1}}break e}finally{k=null,U=$,B=!1}L=void 0}}finally{L?ze():X=!1}}}var ze;if(typeof ee=="function")ze=function(){ee(Ke)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Ge=rt.port2;rt.port1.onmessage=Ke,ze=function(){Ge.postMessage(null)}}else ze=function(){he(Ke,0)};function Xe(R,L){K=he(function(){R(l.unstable_now())},L)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(R){R.callback=null},l.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pe=0<R?Math.floor(1e3/R):5},l.unstable_getCurrentPriorityLevel=function(){return U},l.unstable_next=function(R){switch(U){case 1:case 2:case 3:var L=3;break;default:L=U}var $=U;U=L;try{return R()}finally{U=$}},l.unstable_requestPaint=function(){fe=!0},l.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var $=U;U=R;try{return L()}finally{U=$}},l.unstable_scheduleCallback=function(R,L,$){var ue=l.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ue+$:ue):$=ue,R){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=$+x,R={id:E++,callback:L,priorityLevel:R,startTime:$,expirationTime:x,sortIndex:-1},$>ue?(R.sortIndex=$,u(y,R),o(v)===null&&R===o(y)&&(F?(ae(K),K=-1):F=!0,Xe(G,$-ue))):(R.sortIndex=x,u(v,R),Y||B||(Y=!0,X||(X=!0,ze()))),R},l.unstable_shouldYield=Ue,l.unstable_wrapCallback=function(R){var L=U;return function(){var $=U;U=L;try{return R.apply(this,arguments)}finally{U=$}}}}(oo)),oo}var M0;function H1(){return M0||(M0=1,co.exports=G1()),co.exports}var so={exports:{}},it={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function q1(){if(j0)return it;j0=1;var l=Do();function u(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(u(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},f=Symbol.for("react.portal");function g(v,y,E){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:k==null?null:""+k,children:v,containerInfo:y,implementation:E}}var S=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,it.createPortal=function(v,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(u(299));return g(v,y,null,E)},it.flushSync=function(v){var y=S.T,E=c.p;try{if(S.T=null,c.p=2,v)return v()}finally{S.T=y,c.p=E,c.d.f()}},it.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,c.d.C(v,y))},it.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},it.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var E=y.as,k=D(E,y.crossOrigin),U=typeof y.integrity=="string"?y.integrity:void 0,B=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?c.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:k,integrity:U,fetchPriority:B}):E==="script"&&c.d.X(v,{crossOrigin:k,integrity:U,fetchPriority:B,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},it.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=D(y.as,y.crossOrigin);c.d.M(v,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&c.d.M(v)},it.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,k=D(E,y.crossOrigin);c.d.L(v,E,{crossOrigin:k,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},it.preloadModule=function(v,y){if(typeof v=="string")if(y){var E=D(y.as,y.crossOrigin);c.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else c.d.m(v)},it.requestFormReset=function(v){c.d.r(v)},it.unstable_batchedUpdates=function(v,y){return v(y)},it.useFormState=function(v,y,E){return S.H.useFormState(v,y,E)},it.useFormStatus=function(){return S.H.useHostTransitionStatus()},it.version="19.1.0",it}var U0;function L1(){if(U0)return so.exports;U0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),so.exports=q1(),so.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function X1(){if(k0)return Wl;k0=1;var l=H1(),u=Do(),o=L1();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function S(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(g(e)!==e)throw Error(c(188))}function v(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return D(i),e;if(r===n)return D(i),t;r=r.sibling}throw Error(c(188))}if(a.return!==n.return)a=i,n=r;else{for(var s=!1,d=i.child;d;){if(d===a){s=!0,a=i,n=r;break}if(d===n){s=!0,n=i,a=r;break}d=d.sibling}if(!s){for(d=r.child;d;){if(d===a){s=!0,a=r,n=i;break}if(d===n){s=!0,n=r,a=i;break}d=d.sibling}if(!s)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,k=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),fe=Symbol.for("react.profiler"),he=Symbol.for("react.provider"),ae=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),Ue=Symbol.for("react.memo_cache_sentinel"),Ke=Symbol.iterator;function ze(e){return e===null||typeof e!="object"?null:(e=Ke&&e[Ke]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function Ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case fe:return"Profiler";case F:return"StrictMode";case G:return"Suspense";case X:return"SuspenseList";case be:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case ee:return(e.displayName||"Context")+".Provider";case ae:return(e._context.displayName||"Context")+".Consumer";case ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:Ge(e.type)||"Memo";case pe:t=e._payload,e=e._init;try{return Ge(e(t))}catch{}}return null}var Xe=Array.isArray,R=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ue=[],x=-1;function j(e){return{current:e}}function H(e){0>x||(e.current=ue[x],ue[x]=null,x--)}function q(e,t){x++,ue[x]=e.current,e.current=t}var O=j(null),I=j(null),P=j(null),Te=j(null);function xe(e,t){switch(q(P,t),q(I,e),q(O,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?a0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=a0(t),e=n0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(O),q(O,e)}function at(){H(O),H(I),H(P)}function Ya(e){e.memoizedState!==null&&q(Te,e);var t=O.current,a=n0(t,e.type);t!==a&&(q(I,e),q(O,a))}function Kt(e){I.current===e&&(H(O),H(I)),Te.current===e&&(H(Te),Pl._currentValue=$)}var Et=Object.prototype.hasOwnProperty,Kr=l.unstable_scheduleCallback,Pr=l.unstable_cancelCallback,ph=l.unstable_shouldYield,hh=l.unstable_requestPaint,Gt=l.unstable_now,gh=l.unstable_getCurrentPriorityLevel,Uo=l.unstable_ImmediatePriority,ko=l.unstable_UserBlockingPriority,ri=l.unstable_NormalPriority,xh=l.unstable_LowPriority,Bo=l.unstable_IdlePriority,mh=l.log,yh=l.unstable_setDisableYieldValue,tl=null,ht=null;function sa(e){if(typeof mh=="function"&&yh(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(tl,e)}catch{}}var gt=Math.clz32?Math.clz32:Sh,bh=Math.log,vh=Math.LN2;function Sh(e){return e>>>=0,e===0?32:31-(bh(e)/vh|0)|0}var ui=256,ci=4194304;function Ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function oi(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var d=n&134217727;return d!==0?(n=d&~r,n!==0?i=Ga(n):(s&=d,s!==0?i=Ga(s):a||(a=d&~e,a!==0&&(i=Ga(a))))):(d=n&~r,d!==0?i=Ga(d):s!==0?i=Ga(s):a||(a=n&~e,a!==0&&(i=Ga(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function al(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function wh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yo(){var e=ui;return ui<<=1,(ui&4194048)===0&&(ui=256),e}function Go(){var e=ci;return ci<<=1,(ci&62914560)===0&&(ci=4194304),e}function Fr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function nl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ah(e,t,a,n,i,r){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,h=e.expirationTimes,A=e.hiddenUpdates;for(a=s&~a;0<a;){var z=31-gt(a),M=1<<z;d[z]=0,h[z]=-1;var C=A[z];if(C!==null)for(A[z]=null,z=0;z<C.length;z++){var T=C[z];T!==null&&(T.lane&=-536870913)}a&=~M}n!==0&&Ho(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function Ho(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-gt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function qo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-gt(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Zr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Lo(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:w0(e.type))}function Eh(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}var da=Math.random().toString(36).slice(2),nt="__reactFiber$"+da,ct="__reactProps$"+da,un="__reactContainer$"+da,$r="__reactEvents$"+da,Ch="__reactListeners$"+da,Th="__reactHandles$"+da,Xo="__reactResources$"+da,ll="__reactMarker$"+da;function Jr(e){delete e[nt],delete e[ct],delete e[$r],delete e[Ch],delete e[Th]}function cn(e){var t=e[nt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[un]||a[nt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=u0(e);e!==null;){if(a=e[nt])return a;e=u0(e)}return t}e=a,a=e.parentNode}return null}function on(e){if(e=e[nt]||e[un]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function il(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function sn(e){var t=e[Xo];return t||(t=e[Xo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Pe(e){e[ll]=!0}var Io=new Set,Qo={};function Ha(e,t){dn(e,t),dn(e+"Capture",t)}function dn(e,t){for(Qo[e]=t,e=0;e<t.length;e++)Io.add(t[e])}var Dh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ko={},Po={};function _h(e){return Et.call(Po,e)?!0:Et.call(Ko,e)?!1:Dh.test(e)?Po[e]=!0:(Ko[e]=!0,!1)}function si(e,t,a){if(_h(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function di(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Pt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var Wr,Fo;function fn(e){if(Wr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Wr=t&&t[1]||"",Fo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wr+e+Fo}var eu=!1;function tu(e,t){if(!e||eu)return"";eu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(T){var C=T}Reflect.construct(e,[],M)}else{try{M.call()}catch(T){C=T}e.call(M.prototype)}}else{try{throw Error()}catch(T){C=T}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(T){if(T&&C&&typeof T.stack=="string")return[T.stack,C.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),s=r[0],d=r[1];if(s&&d){var h=s.split(`
`),A=d.split(`
`);for(i=n=0;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;for(;i<A.length&&!A[i].includes("DetermineComponentFrameRoot");)i++;if(n===h.length||i===A.length)for(n=h.length-1,i=A.length-1;1<=n&&0<=i&&h[n]!==A[i];)i--;for(;1<=n&&0<=i;n--,i--)if(h[n]!==A[i]){if(n!==1||i!==1)do if(n--,i--,0>i||h[n]!==A[i]){var z=`
`+h[n].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=n&&0<=i);break}}}finally{eu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?fn(a):""}function Rh(e){switch(e.tag){case 26:case 27:case 5:return fn(e.type);case 16:return fn("Lazy");case 13:return fn("Suspense");case 19:return fn("SuspenseList");case 0:case 15:return tu(e.type,!1);case 11:return tu(e.type.render,!1);case 1:return tu(e.type,!0);case 31:return fn("Activity");default:return""}}function Zo(e){try{var t="";do t+=Rh(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zh(e){var t=Vo(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fi(e){e._valueTracker||(e._valueTracker=zh(e))}function $o(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Vo(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nh=/[\n"\\]/g;function Tt(e){return e.replace(Nh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function au(e,t,a,n,i,r,s,d){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ct(t)):e.value!==""+Ct(t)&&(e.value=""+Ct(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?nu(e,s,Ct(t)):a!=null?nu(e,s,Ct(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+Ct(d):e.removeAttribute("name")}function Jo(e,t,a,n,i,r,s,d){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+Ct(a):"",t=t!=null?""+Ct(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=d?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function nu(e,t,a){t==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function pn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Ct(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wo(e,t,a){if(t!=null&&(t=""+Ct(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ct(a):""}function es(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(Xe(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Ct(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function hn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Oh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ts(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Oh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function as(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&ts(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&ts(e,r,t[r])}function lu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hi(e){return jh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var iu=null;function ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gn=null,xn=null;function ns(e){var t=on(e);if(t&&(e=t.stateNode)){var a=e[ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(au(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Tt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[ct]||null;if(!i)throw Error(c(90));au(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&$o(n)}break e;case"textarea":Wo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&pn(e,!!a.multiple,t,!1)}}}var uu=!1;function ls(e,t,a){if(uu)return e(t,a);uu=!0;try{var n=e(t);return n}finally{if(uu=!1,(gn!==null||xn!==null)&&(Wi(),gn&&(t=gn,e=xn,xn=gn=null,ns(t),e)))for(t=0;t<e.length;t++)ns(e[t])}}function rl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ct]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=!1;if(Ft)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){cu=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{cu=!1}var fa=null,ou=null,gi=null;function is(){if(gi)return gi;var e,t=ou,a=t.length,n,i="value"in fa?fa.value:fa.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===i[r-n];n++);return gi=i.slice(e,1<n?1-n:void 0)}function xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mi(){return!0}function rs(){return!1}function ot(e){function t(a,n,i,r,s){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(r):r[d]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?mi:rs,this.isPropagationStopped=rs,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=mi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=mi)},persist:function(){},isPersistent:mi}),t}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yi=ot(qa),cl=E({},qa,{view:0,detail:0}),Uh=ot(cl),su,du,ol,bi=E({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ol&&(ol&&e.type==="mousemove"?(su=e.screenX-ol.screenX,du=e.screenY-ol.screenY):du=su=0,ol=e),su)},movementY:function(e){return"movementY"in e?e.movementY:du}}),us=ot(bi),kh=E({},bi,{dataTransfer:0}),Bh=ot(kh),Yh=E({},cl,{relatedTarget:0}),fu=ot(Yh),Gh=E({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Hh=ot(Gh),qh=E({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lh=ot(qh),Xh=E({},qa,{data:0}),cs=ot(Xh),Ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ph(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kh[e])?!!t[e]:!1}function pu(){return Ph}var Fh=E({},cl,{key:function(e){if(e.key){var t=Ih[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zh=ot(Fh),Vh=E({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),os=ot(Vh),$h=E({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),Jh=ot($h),Wh=E({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),eg=ot(Wh),tg=E({},bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ag=ot(tg),ng=E({},qa,{newState:0,oldState:0}),lg=ot(ng),ig=[9,13,27,32],hu=Ft&&"CompositionEvent"in window,sl=null;Ft&&"documentMode"in document&&(sl=document.documentMode);var rg=Ft&&"TextEvent"in window&&!sl,ss=Ft&&(!hu||sl&&8<sl&&11>=sl),ds=" ",fs=!1;function ps(e,t){switch(e){case"keyup":return ig.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function ug(e,t){switch(e){case"compositionend":return hs(t);case"keypress":return t.which!==32?null:(fs=!0,ds);case"textInput":return e=t.data,e===ds&&fs?null:e;default:return null}}function cg(e,t){if(mn)return e==="compositionend"||!hu&&ps(e,t)?(e=is(),gi=ou=fa=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ss&&t.locale!=="ko"?null:t.data;default:return null}}var og={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!og[e.type]:t==="textarea"}function xs(e,t,a,n){gn?xn?xn.push(n):xn=[n]:gn=n,t=ir(t,"onChange"),0<t.length&&(a=new yi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var dl=null,fl=null;function sg(e){$f(e,0)}function vi(e){var t=il(e);if($o(t))return e}function ms(e,t){if(e==="change")return t}var ys=!1;if(Ft){var gu;if(Ft){var xu="oninput"in document;if(!xu){var bs=document.createElement("div");bs.setAttribute("oninput","return;"),xu=typeof bs.oninput=="function"}gu=xu}else gu=!1;ys=gu&&(!document.documentMode||9<document.documentMode)}function vs(){dl&&(dl.detachEvent("onpropertychange",Ss),fl=dl=null)}function Ss(e){if(e.propertyName==="value"&&vi(fl)){var t=[];xs(t,fl,e,ru(e)),ls(sg,t)}}function dg(e,t,a){e==="focusin"?(vs(),dl=t,fl=a,dl.attachEvent("onpropertychange",Ss)):e==="focusout"&&vs()}function fg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vi(fl)}function pg(e,t){if(e==="click")return vi(t)}function hg(e,t){if(e==="input"||e==="change")return vi(t)}function gg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:gg;function pl(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Et.call(t,i)||!xt(e[i],t[i]))return!1}return!0}function ws(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function As(e,t){var a=ws(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ws(a)}}function Es(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Es(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=pi(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var xg=Ft&&"documentMode"in document&&11>=document.documentMode,yn=null,yu=null,hl=null,bu=!1;function Ts(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||yn==null||yn!==pi(n)||(n=yn,"selectionStart"in n&&mu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),hl&&pl(hl,n)||(hl=n,n=ir(yu,"onSelect"),0<n.length&&(t=new yi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=yn)))}function La(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var bn={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},vu={},Ds={};Ft&&(Ds=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function Xa(e){if(vu[e])return vu[e];if(!bn[e])return e;var t=bn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ds)return vu[e]=t[a];return e}var _s=Xa("animationend"),Rs=Xa("animationiteration"),zs=Xa("animationstart"),mg=Xa("transitionrun"),yg=Xa("transitionstart"),bg=Xa("transitioncancel"),Ns=Xa("transitionend"),Os=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function Ut(e,t){Os.set(e,t),Ha(t,[e])}var Ms=new WeakMap;function Dt(e,t){if(typeof e=="object"&&e!==null){var a=Ms.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Zo(t)},Ms.set(e,t),t)}return{value:e,source:t,stack:Zo(t)}}var _t=[],vn=0,wu=0;function Si(){for(var e=vn,t=wu=vn=0;t<e;){var a=_t[t];_t[t++]=null;var n=_t[t];_t[t++]=null;var i=_t[t];_t[t++]=null;var r=_t[t];if(_t[t++]=null,n!==null&&i!==null){var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}r!==0&&js(a,i,r)}}function wi(e,t,a,n){_t[vn++]=e,_t[vn++]=t,_t[vn++]=a,_t[vn++]=n,wu|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Au(e,t,a,n){return wi(e,t,a,n),Ai(e)}function Sn(e,t){return wi(e,null,null,t),Ai(e)}function js(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-gt(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function Ai(e){if(50<Gl)throw Gl=0,Rc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var wn={};function vg(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,a,n){return new vg(e,t,a,n)}function Eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zt(e,t){var a=e.alternate;return a===null?(a=mt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Us(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ei(e,t,a,n,i,r){var s=0;if(n=e,typeof e=="function")Eu(e)&&(s=1);else if(typeof e=="string")s=w1(e,a,O.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case be:return e=mt(31,a,t,i),e.elementType=be,e.lanes=r,e;case Y:return Ia(a.children,i,r,t);case F:s=8,i|=24;break;case fe:return e=mt(12,a,t,i|2),e.elementType=fe,e.lanes=r,e;case G:return e=mt(13,a,t,i),e.elementType=G,e.lanes=r,e;case X:return e=mt(19,a,t,i),e.elementType=X,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case he:case ee:s=10;break e;case ae:s=9;break e;case ne:s=11;break e;case K:s=14;break e;case pe:s=16,n=null;break e}s=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=mt(s,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function Ia(e,t,a,n){return e=mt(7,e,n,t),e.lanes=a,e}function Cu(e,t,a){return e=mt(6,e,null,t),e.lanes=a,e}function Tu(e,t,a){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var An=[],En=0,Ci=null,Ti=0,Rt=[],zt=0,Qa=null,Vt=1,$t="";function Ka(e,t){An[En++]=Ti,An[En++]=Ci,Ci=e,Ti=t}function ks(e,t,a){Rt[zt++]=Vt,Rt[zt++]=$t,Rt[zt++]=Qa,Qa=e;var n=Vt;e=$t;var i=32-gt(n)-1;n&=~(1<<i),a+=1;var r=32-gt(t)+i;if(30<r){var s=i-i%5;r=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Vt=1<<32-gt(t)+i|a<<i|n,$t=r+e}else Vt=1<<r|a<<i|n,$t=e}function Du(e){e.return!==null&&(Ka(e,1),ks(e,1,0))}function _u(e){for(;e===Ci;)Ci=An[--En],An[En]=null,Ti=An[--En],An[En]=null;for(;e===Qa;)Qa=Rt[--zt],Rt[zt]=null,$t=Rt[--zt],Rt[zt]=null,Vt=Rt[--zt],Rt[zt]=null}var ut=null,Me=null,ye=!1,Pa=null,Ht=!1,Ru=Error(c(519));function Fa(e){var t=Error(c(418,""));throw ml(Dt(t,e)),Ru}function Bs(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[nt]=e,t[ct]=n,a){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(a=0;a<ql.length;a++)se(ql[a],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),Jo(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),fi(t);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),es(t,n.value,n.defaultValue,n.children),fi(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||t0(t.textContent,a)?(n.popover!=null&&(se("beforetoggle",t),se("toggle",t)),n.onScroll!=null&&se("scroll",t),n.onScrollEnd!=null&&se("scrollend",t),n.onClick!=null&&(t.onclick=rr),t=!0):t=!1,t||Fa(e)}function Ys(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:ut=ut.return}}function gl(e){if(e!==ut)return!1;if(!ye)return Ys(e),ye=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qc(e.type,e.memoizedProps)),a=!a),a&&Me&&Fa(e),Ys(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Me=Bt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Me=null}}else t===27?(t=Me,_a(e.type)?(e=Zc,Zc=null,Me=e):Me=t):Me=ut?Bt(e.stateNode.nextSibling):null;return!0}function xl(){Me=ut=null,ye=!1}function Gs(){var e=Pa;return e!==null&&(ft===null?ft=e:ft.push.apply(ft,e),Pa=null),e}function ml(e){Pa===null?Pa=[e]:Pa.push(e)}var zu=j(null),Za=null,Jt=null;function pa(e,t,a){q(zu,t._currentValue),t._currentValue=a}function Wt(e){e._currentValue=zu.current,H(zu)}function Nu(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Ou(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var s=i.child;r=r.firstContext;e:for(;r!==null;){var d=r;r=i;for(var h=0;h<t.length;h++)if(d.context===t[h]){r.lanes|=a,d=r.alternate,d!==null&&(d.lanes|=a),Nu(r.return,a,e),n||(s=null);break e}r=d.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(c(341));s.lanes|=a,r=s.alternate,r!==null&&(r.lanes|=a),Nu(s,a,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function yl(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var d=i.type;xt(i.pendingProps.value,s.value)||(e!==null?e.push(d):e=[d])}}else if(i===Te.current){if(s=i.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Pl):e=[Pl])}i=i.return}e!==null&&Ou(t,e,a,n),t.flags|=262144}function Di(e){for(e=e.firstContext;e!==null;){if(!xt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Va(e){Za=e,Jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function lt(e){return Hs(Za,e)}function _i(e,t){return Za===null&&Va(e),Hs(e,t)}function Hs(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Jt===null){if(e===null)throw Error(c(308));Jt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Jt=Jt.next=t;return a}var Sg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},wg=l.unstable_scheduleCallback,Ag=l.unstable_NormalPriority,Ie={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new Sg,data:new Map,refCount:0}}function bl(e){e.refCount--,e.refCount===0&&wg(Ag,function(){e.controller.abort()})}var vl=null,ju=0,Cn=0,Tn=null;function Eg(e,t){if(vl===null){var a=vl=[];ju=0,Cn=kc(),Tn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return ju++,t.then(qs,qs),t}function qs(){if(--ju===0&&vl!==null){Tn!==null&&(Tn.status="fulfilled");var e=vl;vl=null,Cn=0,Tn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Cg(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Ls=R.S;R.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Eg(e,t),Ls!==null&&Ls(e,t)};var $a=j(null);function Uu(){var e=$a.current;return e!==null?e:_e.pooledCache}function Ri(e,t){t===null?q($a,$a.current):q($a,t.pool)}function Xs(){var e=Uu();return e===null?null:{parent:Ie._currentValue,pool:e}}var Sl=Error(c(460)),Is=Error(c(474)),zi=Error(c(542)),ku={then:function(){}};function Qs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ni(){}function Ks(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ni,Ni),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Fs(e),e;default:if(typeof t.status=="string")t.then(Ni,Ni);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Fs(e),e}throw wl=t,Sl}}var wl=null;function Ps(){if(wl===null)throw Error(c(459));var e=wl;return wl=null,e}function Fs(e){if(e===Sl||e===zi)throw Error(c(483))}var ha=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Se&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Ai(e),js(e,null,a),t}return wi(e,n,t,a),Ai(e)}function Al(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,qo(e,a)}}function Gu(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=s:r=r.next=s,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Hu=!1;function El(){if(Hu){var e=Tn;if(e!==null)throw e}}function Cl(e,t,a,n){Hu=!1;var i=e.updateQueue;ha=!1;var r=i.firstBaseUpdate,s=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var h=d,A=h.next;h.next=null,s===null?r=A:s.next=A,s=h;var z=e.alternate;z!==null&&(z=z.updateQueue,d=z.lastBaseUpdate,d!==s&&(d===null?z.firstBaseUpdate=A:d.next=A,z.lastBaseUpdate=h))}if(r!==null){var M=i.baseState;s=0,z=A=h=null,d=r;do{var C=d.lane&-536870913,T=C!==d.lane;if(T?(ge&C)===C:(n&C)===C){C!==0&&C===Cn&&(Hu=!0),z!==null&&(z=z.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var te=e,J=d;C=t;var Ce=a;switch(J.tag){case 1:if(te=J.payload,typeof te=="function"){M=te.call(Ce,M,C);break e}M=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=J.payload,C=typeof te=="function"?te.call(Ce,M,C):te,C==null)break e;M=E({},M,C);break e;case 2:ha=!0}}C=d.callback,C!==null&&(e.flags|=64,T&&(e.flags|=8192),T=i.callbacks,T===null?i.callbacks=[C]:T.push(C))}else T={lane:C,tag:d.tag,payload:d.payload,callback:d.callback,next:null},z===null?(A=z=T,h=M):z=z.next=T,s|=C;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;T=d,d=T.next,T.next=null,i.lastBaseUpdate=T,i.shared.pending=null}}while(!0);z===null&&(h=M),i.baseState=h,i.firstBaseUpdate=A,i.lastBaseUpdate=z,r===null&&(i.shared.lanes=0),Ea|=s,e.lanes=s,e.memoizedState=M}}function Zs(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Vs(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zs(a[e],t)}var Dn=j(null),Oi=j(0);function $s(e,t){e=ra,q(Oi,e),q(Dn,t),ra=e|t.baseLanes}function qu(){q(Oi,ra),q(Dn,Dn.current)}function Lu(){ra=Oi.current,H(Dn),H(Oi)}var ma=0,re=null,Ae=null,He=null,Mi=!1,_n=!1,Ja=!1,ji=0,Tl=0,Rn=null,Tg=0;function ke(){throw Error(c(321))}function Xu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!xt(e[a],t[a]))return!1;return!0}function Iu(e,t,a,n,i,r){return ma=r,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?jd:Ud,Ja=!1,r=a(n,i),Ja=!1,_n&&(r=Ws(t,a,n,i)),Js(e),r}function Js(e){R.H=Hi;var t=Ae!==null&&Ae.next!==null;if(ma=0,He=Ae=re=null,Mi=!1,Tl=0,Rn=null,t)throw Error(c(300));e===null||Fe||(e=e.dependencies,e!==null&&Di(e)&&(Fe=!0))}function Ws(e,t,a,n){re=e;var i=0;do{if(_n&&(Rn=null),Tl=0,_n=!1,25<=i)throw Error(c(301));if(i+=1,He=Ae=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}R.H=Mg,r=t(a,n)}while(_n);return r}function Dg(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?Dl(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(re.flags|=1024),t}function Qu(){var e=ji!==0;return ji=0,e}function Ku(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Pu(e){if(Mi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Mi=!1}ma=0,He=Ae=re=null,_n=!1,Tl=ji=0,Rn=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?re.memoizedState=He=e:He=He.next=e,He}function qe(){if(Ae===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=He===null?re.memoizedState:He.next;if(t!==null)He=t,Ae=e;else{if(e===null)throw re.alternate===null?Error(c(467)):Error(c(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},He===null?re.memoizedState=He=e:He=He.next=e}return He}function Fu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dl(e){var t=Tl;return Tl+=1,Rn===null&&(Rn=[]),e=Ks(Rn,e,t),t=re,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?jd:Ud),e}function Ui(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Dl(e);if(e.$$typeof===ee)return lt(e)}throw Error(c(438,String(e)))}function Zu(e){var t=null,a=re.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=re.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Fu(),re.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ue;return t.index++,a}function ea(e,t){return typeof t=="function"?t(e):t}function ki(e){var t=qe();return Vu(t,Ae,e)}function Vu(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var s=i.next;i.next=r.next,r.next=s}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var d=s=null,h=null,A=t,z=!1;do{var M=A.lane&-536870913;if(M!==A.lane?(ge&M)===M:(ma&M)===M){var C=A.revertLane;if(C===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),M===Cn&&(z=!0);else if((ma&C)===C){A=A.next,C===Cn&&(z=!0);continue}else M={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},h===null?(d=h=M,s=r):h=h.next=M,re.lanes|=C,Ea|=C;M=A.action,Ja&&a(r,M),r=A.hasEagerState?A.eagerState:a(r,M)}else C={lane:M,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},h===null?(d=h=C,s=r):h=h.next=C,re.lanes|=M,Ea|=M;A=A.next}while(A!==null&&A!==t);if(h===null?s=r:h.next=d,!xt(r,e.memoizedState)&&(Fe=!0,z&&(a=Tn,a!==null)))throw a;e.memoizedState=r,e.baseState=s,e.baseQueue=h,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function $u(e){var t=qe(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var s=i=i.next;do r=e(r,s.action),s=s.next;while(s!==i);xt(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function ed(e,t,a){var n=re,i=qe(),r=ye;if(r){if(a===void 0)throw Error(c(407));a=a()}else a=t();var s=!xt((Ae||i).memoizedState,a);s&&(i.memoizedState=a,Fe=!0),i=i.queue;var d=nd.bind(null,n,i,e);if(_l(2048,8,d,[e]),i.getSnapshot!==t||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,zn(9,Bi(),ad.bind(null,n,i,a,t),null),_e===null)throw Error(c(349));r||(ma&124)!==0||td(n,t,a)}return a}function td(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=re.updateQueue,t===null?(t=Fu(),re.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ad(e,t,a,n){t.value=a,t.getSnapshot=n,ld(t)&&id(e)}function nd(e,t,a){return a(function(){ld(t)&&id(e)})}function ld(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!xt(e,a)}catch{return!0}}function id(e){var t=Sn(e,2);t!==null&&wt(t,e,2)}function Ju(e){var t=st();if(typeof e=="function"){var a=e;if(e=a(),Ja){sa(!0);try{a()}finally{sa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},t}function rd(e,t,a,n){return e.baseState=a,Vu(e,Ae,typeof n=="function"?n:ea)}function _g(e,t,a,n,i){if(Gi(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};R.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,ud(t,r)):(r.next=a.next,t.pending=a.next=r)}}function ud(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=R.T,s={};R.T=s;try{var d=a(i,n),h=R.S;h!==null&&h(s,d),cd(e,t,d)}catch(A){Wu(e,t,A)}finally{R.T=r}}else try{r=a(i,n),cd(e,t,r)}catch(A){Wu(e,t,A)}}function cd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){od(e,t,n)},function(n){return Wu(e,t,n)}):od(e,t,a)}function od(e,t,a){t.status="fulfilled",t.value=a,sd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ud(e,a)))}function Wu(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,sd(t),t=t.next;while(t!==n)}e.action=null}function sd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dd(e,t){return t}function fd(e,t){if(ye){var a=_e.formState;if(a!==null){e:{var n=re;if(ye){if(Me){t:{for(var i=Me,r=Ht;i.nodeType!==8;){if(!r){i=null;break t}if(i=Bt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Me=Bt(i.nextSibling),n=i.data==="F!";break e}}Fa(n)}n=!1}n&&(t=a[0])}}return a=st(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dd,lastRenderedState:t},a.queue=n,a=Nd.bind(null,re,n),n.dispatch=a,n=Ju(!1),r=lc.bind(null,re,!1,n.queue),n=st(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=_g.bind(null,re,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function pd(e){var t=qe();return hd(t,Ae,e)}function hd(e,t,a){if(t=Vu(e,t,dd)[0],e=ki(ea)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Dl(t)}catch(s){throw s===Sl?zi:s}else n=t;t=qe();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(re.flags|=2048,zn(9,Bi(),Rg.bind(null,i,a),null)),[n,r,e]}function Rg(e,t){e.action=t}function gd(e){var t=qe(),a=Ae;if(a!==null)return hd(t,a,e);qe(),t=t.memoizedState,a=qe();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function zn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=re.updateQueue,t===null&&(t=Fu(),re.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Bi(){return{destroy:void 0,resource:void 0}}function xd(){return qe().memoizedState}function Yi(e,t,a,n){var i=st();n=n===void 0?null:n,re.flags|=e,i.memoizedState=zn(1|t,Bi(),a,n)}function _l(e,t,a,n){var i=qe();n=n===void 0?null:n;var r=i.memoizedState.inst;Ae!==null&&n!==null&&Xu(n,Ae.memoizedState.deps)?i.memoizedState=zn(t,r,a,n):(re.flags|=e,i.memoizedState=zn(1|t,r,a,n))}function md(e,t){Yi(8390656,8,e,t)}function yd(e,t){_l(2048,8,e,t)}function bd(e,t){return _l(4,2,e,t)}function vd(e,t){return _l(4,4,e,t)}function Sd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wd(e,t,a){a=a!=null?a.concat([e]):null,_l(4,4,Sd.bind(null,t,e),a)}function ec(){}function Ad(e,t){var a=qe();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Xu(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Ed(e,t){var a=qe();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Xu(t,n[1]))return n[0];if(n=e(),Ja){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[n,t],n}function tc(e,t,a){return a===void 0||(ma&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=_f(),re.lanes|=e,Ea|=e,a)}function Cd(e,t,a,n){return xt(a,t)?a:Dn.current!==null?(e=tc(e,a,n),xt(e,t)||(Fe=!0),e):(ma&42)===0?(Fe=!0,e.memoizedState=a):(e=_f(),re.lanes|=e,Ea|=e,t)}function Td(e,t,a,n,i){var r=L.p;L.p=r!==0&&8>r?r:8;var s=R.T,d={};R.T=d,lc(e,!1,t,a);try{var h=i(),A=R.S;if(A!==null&&A(d,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var z=Cg(h,n);Rl(e,t,z,St(e))}else Rl(e,t,n,St(e))}catch(M){Rl(e,t,{then:function(){},status:"rejected",reason:M},St())}finally{L.p=r,R.T=s}}function zg(){}function ac(e,t,a,n){if(e.tag!==5)throw Error(c(476));var i=Dd(e).queue;Td(e,i,t,$,a===null?zg:function(){return _d(e),a(n)})}function Dd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function _d(e){var t=Dd(e).next.queue;Rl(e,t,{},St())}function nc(){return lt(Pl)}function Rd(){return qe().memoizedState}function zd(){return qe().memoizedState}function Ng(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=St();e=ga(a);var n=xa(t,e,a);n!==null&&(wt(n,t,a),Al(n,t,a)),t={cache:Mu()},e.payload=t;return}t=t.return}}function Og(e,t,a){var n=St();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Gi(e)?Od(t,a):(a=Au(e,t,a,n),a!==null&&(wt(a,e,n),Md(a,t,n)))}function Nd(e,t,a){var n=St();Rl(e,t,a,n)}function Rl(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gi(e))Od(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,d=r(s,a);if(i.hasEagerState=!0,i.eagerState=d,xt(d,s))return wi(e,t,i,0),_e===null&&Si(),!1}catch{}finally{}if(a=Au(e,t,i,n),a!==null)return wt(a,e,n),Md(a,t,n),!0}return!1}function lc(e,t,a,n){if(n={lane:2,revertLane:kc(),action:n,hasEagerState:!1,eagerState:null,next:null},Gi(e)){if(t)throw Error(c(479))}else t=Au(e,a,n,2),t!==null&&wt(t,e,2)}function Gi(e){var t=e.alternate;return e===re||t!==null&&t===re}function Od(e,t){_n=Mi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Md(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,qo(e,a)}}var Hi={readContext:lt,use:Ui,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke},jd={readContext:lt,use:Ui,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:md,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Yi(4194308,4,Sd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Yi(4194308,4,e,t)},useInsertionEffect:function(e,t){Yi(4,2,e,t)},useMemo:function(e,t){var a=st();t=t===void 0?null:t;var n=e();if(Ja){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=st();if(a!==void 0){var i=a(t);if(Ja){sa(!0);try{a(t)}finally{sa(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Og.bind(null,re,e),[n.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=Ju(e);var t=e.queue,a=Nd.bind(null,re,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ec,useDeferredValue:function(e,t){var a=st();return tc(a,e,t)},useTransition:function(){var e=Ju(!1);return e=Td.bind(null,re,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=re,i=st();if(ye){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),_e===null)throw Error(c(349));(ge&124)!==0||td(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,md(nd.bind(null,n,r,e),[e]),n.flags|=2048,zn(9,Bi(),ad.bind(null,n,r,a,t),null),a},useId:function(){var e=st(),t=_e.identifierPrefix;if(ye){var a=$t,n=Vt;a=(n&~(1<<32-gt(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=ji++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Tg++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:nc,useFormState:fd,useActionState:fd,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=lc.bind(null,re,!0,a),a.dispatch=t,[e,t]},useMemoCache:Zu,useCacheRefresh:function(){return st().memoizedState=Ng.bind(null,re)}},Ud={readContext:lt,use:Ui,useCallback:Ad,useContext:lt,useEffect:yd,useImperativeHandle:wd,useInsertionEffect:bd,useLayoutEffect:vd,useMemo:Ed,useReducer:ki,useRef:xd,useState:function(){return ki(ea)},useDebugValue:ec,useDeferredValue:function(e,t){var a=qe();return Cd(a,Ae.memoizedState,e,t)},useTransition:function(){var e=ki(ea)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Dl(e),t]},useSyncExternalStore:ed,useId:Rd,useHostTransitionStatus:nc,useFormState:pd,useActionState:pd,useOptimistic:function(e,t){var a=qe();return rd(a,Ae,e,t)},useMemoCache:Zu,useCacheRefresh:zd},Mg={readContext:lt,use:Ui,useCallback:Ad,useContext:lt,useEffect:yd,useImperativeHandle:wd,useInsertionEffect:bd,useLayoutEffect:vd,useMemo:Ed,useReducer:$u,useRef:xd,useState:function(){return $u(ea)},useDebugValue:ec,useDeferredValue:function(e,t){var a=qe();return Ae===null?tc(a,e,t):Cd(a,Ae.memoizedState,e,t)},useTransition:function(){var e=$u(ea)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Dl(e),t]},useSyncExternalStore:ed,useId:Rd,useHostTransitionStatus:nc,useFormState:gd,useActionState:gd,useOptimistic:function(e,t){var a=qe();return Ae!==null?rd(a,Ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Zu,useCacheRefresh:zd},Nn=null,zl=0;function qi(e){var t=zl;return zl+=1,Nn===null&&(Nn=[]),Ks(Nn,e,t)}function Nl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Li(e,t){throw t.$$typeof===k?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function kd(e){var t=e._init;return t(e._payload)}function Bd(e){function t(b,m){if(e){var w=b.deletions;w===null?(b.deletions=[m],b.flags|=16):w.push(m)}}function a(b,m){if(!e)return null;for(;m!==null;)t(b,m),m=m.sibling;return null}function n(b){for(var m=new Map;b!==null;)b.key!==null?m.set(b.key,b):m.set(b.index,b),b=b.sibling;return m}function i(b,m){return b=Zt(b,m),b.index=0,b.sibling=null,b}function r(b,m,w){return b.index=w,e?(w=b.alternate,w!==null?(w=w.index,w<m?(b.flags|=67108866,m):w):(b.flags|=67108866,m)):(b.flags|=1048576,m)}function s(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function d(b,m,w,N){return m===null||m.tag!==6?(m=Cu(w,b.mode,N),m.return=b,m):(m=i(m,w),m.return=b,m)}function h(b,m,w,N){var Q=w.type;return Q===Y?z(b,m,w.props.children,N,w.key):m!==null&&(m.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===pe&&kd(Q)===m.type)?(m=i(m,w.props),Nl(m,w),m.return=b,m):(m=Ei(w.type,w.key,w.props,null,b.mode,N),Nl(m,w),m.return=b,m)}function A(b,m,w,N){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=Tu(w,b.mode,N),m.return=b,m):(m=i(m,w.children||[]),m.return=b,m)}function z(b,m,w,N,Q){return m===null||m.tag!==7?(m=Ia(w,b.mode,N,Q),m.return=b,m):(m=i(m,w),m.return=b,m)}function M(b,m,w){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Cu(""+m,b.mode,w),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case U:return w=Ei(m.type,m.key,m.props,null,b.mode,w),Nl(w,m),w.return=b,w;case B:return m=Tu(m,b.mode,w),m.return=b,m;case pe:var N=m._init;return m=N(m._payload),M(b,m,w)}if(Xe(m)||ze(m))return m=Ia(m,b.mode,w,null),m.return=b,m;if(typeof m.then=="function")return M(b,qi(m),w);if(m.$$typeof===ee)return M(b,_i(b,m),w);Li(b,m)}return null}function C(b,m,w,N){var Q=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return Q!==null?null:d(b,m,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case U:return w.key===Q?h(b,m,w,N):null;case B:return w.key===Q?A(b,m,w,N):null;case pe:return Q=w._init,w=Q(w._payload),C(b,m,w,N)}if(Xe(w)||ze(w))return Q!==null?null:z(b,m,w,N,null);if(typeof w.then=="function")return C(b,m,qi(w),N);if(w.$$typeof===ee)return C(b,m,_i(b,w),N);Li(b,w)}return null}function T(b,m,w,N,Q){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return b=b.get(w)||null,d(m,b,""+N,Q);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case U:return b=b.get(N.key===null?w:N.key)||null,h(m,b,N,Q);case B:return b=b.get(N.key===null?w:N.key)||null,A(m,b,N,Q);case pe:var ce=N._init;return N=ce(N._payload),T(b,m,w,N,Q)}if(Xe(N)||ze(N))return b=b.get(w)||null,z(m,b,N,Q,null);if(typeof N.then=="function")return T(b,m,w,qi(N),Q);if(N.$$typeof===ee)return T(b,m,w,_i(m,N),Q);Li(m,N)}return null}function te(b,m,w,N){for(var Q=null,ce=null,Z=m,W=m=0,Ve=null;Z!==null&&W<w.length;W++){Z.index>W?(Ve=Z,Z=null):Ve=Z.sibling;var me=C(b,Z,w[W],N);if(me===null){Z===null&&(Z=Ve);break}e&&Z&&me.alternate===null&&t(b,Z),m=r(me,m,W),ce===null?Q=me:ce.sibling=me,ce=me,Z=Ve}if(W===w.length)return a(b,Z),ye&&Ka(b,W),Q;if(Z===null){for(;W<w.length;W++)Z=M(b,w[W],N),Z!==null&&(m=r(Z,m,W),ce===null?Q=Z:ce.sibling=Z,ce=Z);return ye&&Ka(b,W),Q}for(Z=n(Z);W<w.length;W++)Ve=T(Z,b,W,w[W],N),Ve!==null&&(e&&Ve.alternate!==null&&Z.delete(Ve.key===null?W:Ve.key),m=r(Ve,m,W),ce===null?Q=Ve:ce.sibling=Ve,ce=Ve);return e&&Z.forEach(function(Ma){return t(b,Ma)}),ye&&Ka(b,W),Q}function J(b,m,w,N){if(w==null)throw Error(c(151));for(var Q=null,ce=null,Z=m,W=m=0,Ve=null,me=w.next();Z!==null&&!me.done;W++,me=w.next()){Z.index>W?(Ve=Z,Z=null):Ve=Z.sibling;var Ma=C(b,Z,me.value,N);if(Ma===null){Z===null&&(Z=Ve);break}e&&Z&&Ma.alternate===null&&t(b,Z),m=r(Ma,m,W),ce===null?Q=Ma:ce.sibling=Ma,ce=Ma,Z=Ve}if(me.done)return a(b,Z),ye&&Ka(b,W),Q;if(Z===null){for(;!me.done;W++,me=w.next())me=M(b,me.value,N),me!==null&&(m=r(me,m,W),ce===null?Q=me:ce.sibling=me,ce=me);return ye&&Ka(b,W),Q}for(Z=n(Z);!me.done;W++,me=w.next())me=T(Z,b,W,me.value,N),me!==null&&(e&&me.alternate!==null&&Z.delete(me.key===null?W:me.key),m=r(me,m,W),ce===null?Q=me:ce.sibling=me,ce=me);return e&&Z.forEach(function(j1){return t(b,j1)}),ye&&Ka(b,W),Q}function Ce(b,m,w,N){if(typeof w=="object"&&w!==null&&w.type===Y&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case U:e:{for(var Q=w.key;m!==null;){if(m.key===Q){if(Q=w.type,Q===Y){if(m.tag===7){a(b,m.sibling),N=i(m,w.props.children),N.return=b,b=N;break e}}else if(m.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===pe&&kd(Q)===m.type){a(b,m.sibling),N=i(m,w.props),Nl(N,w),N.return=b,b=N;break e}a(b,m);break}else t(b,m);m=m.sibling}w.type===Y?(N=Ia(w.props.children,b.mode,N,w.key),N.return=b,b=N):(N=Ei(w.type,w.key,w.props,null,b.mode,N),Nl(N,w),N.return=b,b=N)}return s(b);case B:e:{for(Q=w.key;m!==null;){if(m.key===Q)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){a(b,m.sibling),N=i(m,w.children||[]),N.return=b,b=N;break e}else{a(b,m);break}else t(b,m);m=m.sibling}N=Tu(w,b.mode,N),N.return=b,b=N}return s(b);case pe:return Q=w._init,w=Q(w._payload),Ce(b,m,w,N)}if(Xe(w))return te(b,m,w,N);if(ze(w)){if(Q=ze(w),typeof Q!="function")throw Error(c(150));return w=Q.call(w),J(b,m,w,N)}if(typeof w.then=="function")return Ce(b,m,qi(w),N);if(w.$$typeof===ee)return Ce(b,m,_i(b,w),N);Li(b,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,m!==null&&m.tag===6?(a(b,m.sibling),N=i(m,w),N.return=b,b=N):(a(b,m),N=Cu(w,b.mode,N),N.return=b,b=N),s(b)):a(b,m)}return function(b,m,w,N){try{zl=0;var Q=Ce(b,m,w,N);return Nn=null,Q}catch(Z){if(Z===Sl||Z===zi)throw Z;var ce=mt(29,Z,null,b.mode);return ce.lanes=N,ce.return=b,ce}finally{}}}var On=Bd(!0),Yd=Bd(!1),Nt=j(null),qt=null;function ya(e){var t=e.alternate;q(Qe,Qe.current&1),q(Nt,e),qt===null&&(t===null||Dn.current!==null||t.memoizedState!==null)&&(qt=e)}function Gd(e){if(e.tag===22){if(q(Qe,Qe.current),q(Nt,e),qt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(qt=e)}}else ba()}function ba(){q(Qe,Qe.current),q(Nt,Nt.current)}function ta(e){H(Nt),qt===e&&(qt=null),H(Qe)}var Qe=j(0);function Xi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Fc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ic(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var rc={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=St(),i=ga(n);i.payload=t,a!=null&&(i.callback=a),t=xa(e,i,n),t!==null&&(wt(t,e,n),Al(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=St(),i=ga(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=xa(e,i,n),t!==null&&(wt(t,e,n),Al(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=St(),n=ga(a);n.tag=2,t!=null&&(n.callback=t),t=xa(e,n,a),t!==null&&(wt(t,e,a),Al(t,e,a))}};function Hd(e,t,a,n,i,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,s):t.prototype&&t.prototype.isPureReactComponent?!pl(a,n)||!pl(i,r):!0}function qd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&rc.enqueueReplaceState(t,t.state,null)}function Wa(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var Ii=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ld(e){Ii(e)}function Xd(e){console.error(e)}function Id(e){Ii(e)}function Qi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Qd(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function uc(e,t,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Qi(e,t)},a}function Kd(e){return e=ga(e),e.tag=3,e}function Pd(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){Qd(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Qd(t,a,n),typeof i!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})})}function jg(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&yl(t,a,i,!0),a=Nt.current,a!==null){switch(a.tag){case 13:return qt===null?Nc():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===ku?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Mc(e,n,i)),!1;case 22:return a.flags|=65536,n===ku?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Mc(e,n,i)),!1}throw Error(c(435,a.tag))}return Mc(e,n,i),Nc(),!1}if(ye)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Ru&&(e=Error(c(422),{cause:n}),ml(Dt(e,a)))):(n!==Ru&&(t=Error(c(423),{cause:n}),ml(Dt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Dt(n,a),i=uc(e.stateNode,n,i),Gu(e,i),je!==4&&(je=2)),!1;var r=Error(c(520),{cause:n});if(r=Dt(r,a),Yl===null?Yl=[r]:Yl.push(r),je!==4&&(je=2),t===null)return!0;n=Dt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=uc(a.stateNode,n,e),Gu(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ca===null||!Ca.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Kd(i),Pd(i,e,a,n),Gu(a,i),!1}a=a.return}while(a!==null);return!1}var Fd=Error(c(461)),Fe=!1;function We(e,t,a,n){t.child=e===null?Yd(t,null,a,n):On(t,e.child,a,n)}function Zd(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var s={};for(var d in n)d!=="ref"&&(s[d]=n[d])}else s=n;return Va(t),n=Iu(e,t,a,s,r,i),d=Qu(),e!==null&&!Fe?(Ku(e,t,i),aa(e,t,i)):(ye&&d&&Du(t),t.flags|=1,We(e,t,n,i),t.child)}function Vd(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!Eu(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,$d(e,t,r,n,i)):(e=Ei(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!gc(e,i)){var s=r.memoizedProps;if(a=a.compare,a=a!==null?a:pl,a(s,n)&&e.ref===t.ref)return aa(e,t,i)}return t.flags|=1,e=Zt(r,n),e.ref=t.ref,e.return=t,t.child=e}function $d(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(pl(r,n)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=n=r,gc(e,i))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,aa(e,t,i)}return cc(e,t,a,n,i)}function Jd(e,t,a){var n=t.pendingProps,i=n.children,r=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~n}else t.childLanes=0,t.child=null;return Wd(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ri(t,r!==null?r.cachePool:null),r!==null?$s(t,r):qu(),Gd(t);else return t.lanes=t.childLanes=536870912,Wd(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(Ri(t,r.cachePool),$s(t,r),ba(),t.memoizedState=null):(e!==null&&Ri(t,null),qu(),ba());return We(e,t,i,a),t.child}function Wd(e,t,a,n){var i=Uu();return i=i===null?null:{parent:Ie._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Ri(t,null),qu(),Gd(t),e!==null&&yl(e,t,n,!0),null}function Ki(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function cc(e,t,a,n,i){return Va(t),a=Iu(e,t,a,n,void 0,i),n=Qu(),e!==null&&!Fe?(Ku(e,t,i),aa(e,t,i)):(ye&&n&&Du(t),t.flags|=1,We(e,t,a,i),t.child)}function ef(e,t,a,n,i,r){return Va(t),t.updateQueue=null,a=Ws(t,n,a,i),Js(e),n=Qu(),e!==null&&!Fe?(Ku(e,t,r),aa(e,t,r)):(ye&&n&&Du(t),t.flags|=1,We(e,t,a,r),t.child)}function tf(e,t,a,n,i){if(Va(t),t.stateNode===null){var r=wn,s=a.contextType;typeof s=="object"&&s!==null&&(r=lt(s)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=rc,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},Bu(t),s=a.contextType,r.context=typeof s=="object"&&s!==null?lt(s):wn,r.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(ic(t,a,s,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&rc.enqueueReplaceState(r,r.state,null),Cl(t,n,r,i),El(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var d=t.memoizedProps,h=Wa(a,d);r.props=h;var A=r.context,z=a.contextType;s=wn,typeof z=="object"&&z!==null&&(s=lt(z));var M=a.getDerivedStateFromProps;z=typeof M=="function"||typeof r.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,z||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d||A!==s)&&qd(t,r,n,s),ha=!1;var C=t.memoizedState;r.state=C,Cl(t,n,r,i),El(),A=t.memoizedState,d||C!==A||ha?(typeof M=="function"&&(ic(t,a,M,n),A=t.memoizedState),(h=ha||Hd(t,a,h,n,C,A,s))?(z||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=A),r.props=n,r.state=A,r.context=s,n=h):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,Yu(e,t),s=t.memoizedProps,z=Wa(a,s),r.props=z,M=t.pendingProps,C=r.context,A=a.contextType,h=wn,typeof A=="object"&&A!==null&&(h=lt(A)),d=a.getDerivedStateFromProps,(A=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==M||C!==h)&&qd(t,r,n,h),ha=!1,C=t.memoizedState,r.state=C,Cl(t,n,r,i),El();var T=t.memoizedState;s!==M||C!==T||ha||e!==null&&e.dependencies!==null&&Di(e.dependencies)?(typeof d=="function"&&(ic(t,a,d,n),T=t.memoizedState),(z=ha||Hd(t,a,z,n,C,T,h)||e!==null&&e.dependencies!==null&&Di(e.dependencies))?(A||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,T,h),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,T,h)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=T),r.props=n,r.state=T,r.context=h,n=z):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,Ki(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=On(t,e.child,null,i),t.child=On(t,null,a,i)):We(e,t,a,i),t.memoizedState=r.state,e=t.child):e=aa(e,t,i),e}function af(e,t,a,n){return xl(),t.flags|=256,We(e,t,a,n),t.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sc(e){return{baseLanes:e,cachePool:Xs()}}function dc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ot),e}function nf(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),s&&(i=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(ye){if(i?ya(t):ba(),ye){var d=Me,h;if(h=d){e:{for(h=d,d=Ht;h.nodeType!==8;){if(!d){d=null;break e}if(h=Bt(h.nextSibling),h===null){d=null;break e}}d=h}d!==null?(t.memoizedState={dehydrated:d,treeContext:Qa!==null?{id:Vt,overflow:$t}:null,retryLane:536870912,hydrationErrors:null},h=mt(18,null,null,0),h.stateNode=d,h.return=t,t.child=h,ut=t,Me=null,h=!0):h=!1}h||Fa(t)}if(d=t.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return Fc(d)?t.lanes=32:t.lanes=536870912,null;ta(t)}return d=n.children,n=n.fallback,i?(ba(),i=t.mode,d=Pi({mode:"hidden",children:d},i),n=Ia(n,i,a,null),d.return=t,n.return=t,d.sibling=n,t.child=d,i=t.child,i.memoizedState=sc(a),i.childLanes=dc(e,s,a),t.memoizedState=oc,n):(ya(t),fc(t,d))}if(h=e.memoizedState,h!==null&&(d=h.dehydrated,d!==null)){if(r)t.flags&256?(ya(t),t.flags&=-257,t=pc(e,t,a)):t.memoizedState!==null?(ba(),t.child=e.child,t.flags|=128,t=null):(ba(),i=n.fallback,d=t.mode,n=Pi({mode:"visible",children:n.children},d),i=Ia(i,d,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,On(t,e.child,null,a),n=t.child,n.memoizedState=sc(a),n.childLanes=dc(e,s,a),t.memoizedState=oc,t=i);else if(ya(t),Fc(d)){if(s=d.nextSibling&&d.nextSibling.dataset,s)var A=s.dgst;s=A,n=Error(c(419)),n.stack="",n.digest=s,ml({value:n,source:null,stack:null}),t=pc(e,t,a)}else if(Fe||yl(e,t,a,!1),s=(a&e.childLanes)!==0,Fe||s){if(s=_e,s!==null&&(n=a&-a,n=(n&42)!==0?1:Zr(n),n=(n&(s.suspendedLanes|a))!==0?0:n,n!==0&&n!==h.retryLane))throw h.retryLane=n,Sn(e,n),wt(s,e,n),Fd;d.data==="$?"||Nc(),t=pc(e,t,a)}else d.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Me=Bt(d.nextSibling),ut=t,ye=!0,Pa=null,Ht=!1,e!==null&&(Rt[zt++]=Vt,Rt[zt++]=$t,Rt[zt++]=Qa,Vt=e.id,$t=e.overflow,Qa=t),t=fc(t,n.children),t.flags|=4096);return t}return i?(ba(),i=n.fallback,d=t.mode,h=e.child,A=h.sibling,n=Zt(h,{mode:"hidden",children:n.children}),n.subtreeFlags=h.subtreeFlags&65011712,A!==null?i=Zt(A,i):(i=Ia(i,d,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,d=e.child.memoizedState,d===null?d=sc(a):(h=d.cachePool,h!==null?(A=Ie._currentValue,h=h.parent!==A?{parent:A,pool:A}:h):h=Xs(),d={baseLanes:d.baseLanes|a,cachePool:h}),i.memoizedState=d,i.childLanes=dc(e,s,a),t.memoizedState=oc,n):(ya(t),a=e.child,e=a.sibling,a=Zt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function fc(e,t){return t=Pi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Pi(e,t){return e=mt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function pc(e,t,a){return On(t,e.child,null,a),e=fc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Nu(e.return,t,a)}function hc(e,t,a,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i)}function rf(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;if(We(e,t,n.children,a),n=Qe.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lf(e,a,t);else if(e.tag===19)lf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(q(Qe,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Xi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),hc(t,!1,i,a,r);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xi(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}hc(t,!0,a,null,r);break;case"together":hc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function aa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ea|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(yl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Zt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Zt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function gc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Di(e)))}function Ug(e,t,a){switch(t.tag){case 3:xe(t,t.stateNode.containerInfo),pa(t,Ie,e.memoizedState.cache),xl();break;case 27:case 5:Ya(t);break;case 4:xe(t,t.stateNode.containerInfo);break;case 10:pa(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ya(t),t.flags|=128,null):(a&t.child.childLanes)!==0?nf(e,t,a):(ya(t),e=aa(e,t,a),e!==null?e.sibling:null);ya(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(yl(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return rf(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(Qe,Qe.current),n)break;return null;case 22:case 23:return t.lanes=0,Jd(e,t,a);case 24:pa(t,Ie,e.memoizedState.cache)}return aa(e,t,a)}function uf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!gc(e,a)&&(t.flags&128)===0)return Fe=!1,Ug(e,t,a);Fe=(e.flags&131072)!==0}else Fe=!1,ye&&(t.flags&1048576)!==0&&ks(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")Eu(n)?(e=Wa(n,e),t.tag=1,t=tf(null,t,n,e,a)):(t.tag=0,t=cc(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===ne){t.tag=11,t=Zd(null,t,n,e,a);break e}else if(i===K){t.tag=14,t=Vd(null,t,n,e,a);break e}}throw t=Ge(n)||n,Error(c(306,t,""))}}return t;case 0:return cc(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Wa(n,t.pendingProps),tf(e,t,n,i,a);case 3:e:{if(xe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,Yu(e,t),Cl(t,n,null,a);var s=t.memoizedState;if(n=s.cache,pa(t,Ie,n),n!==r.cache&&Ou(t,[Ie],a,!0),El(),n=s.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=af(e,t,n,a);break e}else if(n!==i){i=Dt(Error(c(424)),t),ml(i),t=af(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=Bt(e.firstChild),ut=t,ye=!0,Pa=null,Ht=!0,a=Yd(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xl(),n===i){t=aa(e,t,a);break e}We(e,t,n,a)}t=t.child}return t;case 26:return Ki(e,t),e===null?(a=d0(t.type,null,t.pendingProps,null))?t.memoizedState=a:ye||(a=t.type,e=t.pendingProps,n=ur(P.current).createElement(a),n[nt]=t,n[ct]=e,tt(n,a,e),Pe(n),t.stateNode=n):t.memoizedState=d0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ya(t),e===null&&ye&&(n=t.stateNode=c0(t.type,t.pendingProps,P.current),ut=t,Ht=!0,i=Me,_a(t.type)?(Zc=i,Me=Bt(n.firstChild)):Me=i),We(e,t,t.pendingProps.children,a),Ki(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ye&&((i=n=Me)&&(n=o1(n,t.type,t.pendingProps,Ht),n!==null?(t.stateNode=n,ut=t,Me=Bt(n.firstChild),Ht=!1,i=!0):i=!1),i||Fa(t)),Ya(t),i=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,n=r.children,Qc(i,r)?n=null:s!==null&&Qc(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=Iu(e,t,Dg,null,null,a),Pl._currentValue=i),Ki(e,t),We(e,t,n,a),t.child;case 6:return e===null&&ye&&((e=a=Me)&&(a=s1(a,t.pendingProps,Ht),a!==null?(t.stateNode=a,ut=t,Me=null,e=!0):e=!1),e||Fa(t)),null;case 13:return nf(e,t,a);case 4:return xe(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=On(t,null,n,a):We(e,t,n,a),t.child;case 11:return Zd(e,t,t.type,t.pendingProps,a);case 7:return We(e,t,t.pendingProps,a),t.child;case 8:return We(e,t,t.pendingProps.children,a),t.child;case 12:return We(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,pa(t,t.type,n.value),We(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Va(t),i=lt(i),n=n(i),t.flags|=1,We(e,t,n,a),t.child;case 14:return Vd(e,t,t.type,t.pendingProps,a);case 15:return $d(e,t,t.type,t.pendingProps,a);case 19:return rf(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=Pi(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Zt(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Jd(e,t,a);case 24:return Va(t),n=lt(Ie),e===null?(i=Uu(),i===null&&(i=_e,r=Mu(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},Bu(t),pa(t,Ie,i)):((e.lanes&a)!==0&&(Yu(e,t),Cl(t,null,null,a),El()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),pa(t,Ie,n)):(n=r.cache,pa(t,Ie,n),n!==i.cache&&Ou(t,[Ie],a,!0))),We(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function na(e){e.flags|=4}function cf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!x0(t)){if(t=Nt.current,t!==null&&((ge&4194048)===ge?qt!==null:(ge&62914560)!==ge&&(ge&536870912)===0||t!==qt))throw wl=ku,Is;e.flags|=8192}}function Fi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Go():536870912,e.lanes|=t,kn|=t)}function Ol(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function kg(e,t,a){var n=t.pendingProps;switch(_u(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wt(Ie),at(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(gl(t)?na(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gs())),Oe(t),null;case 26:return a=t.memoizedState,e===null?(na(t),a!==null?(Oe(t),cf(t,a)):(Oe(t),t.flags&=-16777217)):a?a!==e.memoizedState?(na(t),Oe(t),cf(t,a)):(Oe(t),t.flags&=-16777217):(e.memoizedProps!==n&&na(t),Oe(t),t.flags&=-16777217),null;case 27:Kt(t),a=P.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&na(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Oe(t),null}e=O.current,gl(t)?Bs(t):(e=c0(i,n,a),t.stateNode=e,na(t))}return Oe(t),null;case 5:if(Kt(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&na(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Oe(t),null}if(e=O.current,gl(t))Bs(t);else{switch(i=ur(P.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[nt]=t,e[ct]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(tt(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&na(t)}}return Oe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&na(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=P.current,gl(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=ut,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[nt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||t0(e.nodeValue,a)),e||Fa(t)}else e=ur(e).createTextNode(n),e[nt]=t,t.stateNode=e}return Oe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=gl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[nt]=t}else xl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),i=!1}else i=Gs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(ta(t),t):(ta(t),null)}if(ta(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var r=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Fi(t,t.updateQueue),Oe(t),null;case 4:return at(),e===null&&Hc(t.stateNode.containerInfo),Oe(t),null;case 10:return Wt(t.type),Oe(t),null;case 19:if(H(Qe),i=t.memoizedState,i===null)return Oe(t),null;if(n=(t.flags&128)!==0,r=i.rendering,r===null)if(n)Ol(i,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Xi(e),r!==null){for(t.flags|=128,Ol(i,!1),e=r.updateQueue,t.updateQueue=e,Fi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Us(a,e),a=a.sibling;return q(Qe,Qe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Gt()>$i&&(t.flags|=128,n=!0,Ol(i,!1),t.lanes=4194304)}else{if(!n)if(e=Xi(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Fi(t,e),Ol(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ye)return Oe(t),null}else 2*Gt()-i.renderingStartTime>$i&&a!==536870912&&(t.flags|=128,n=!0,Ol(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Gt(),t.sibling=null,e=Qe.current,q(Qe,n?e&1|2:e&1),t):(Oe(t),null);case 22:case 23:return ta(t),Lu(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),a=t.updateQueue,a!==null&&Fi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&H($a),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Wt(Ie),Oe(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Bg(e,t){switch(_u(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wt(Ie),at(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Kt(t),null;case 13:if(ta(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));xl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Qe),null;case 4:return at(),null;case 10:return Wt(t.type),null;case 22:case 23:return ta(t),Lu(),e!==null&&H($a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wt(Ie),null;case 25:return null;default:return null}}function of(e,t){switch(_u(t),t.tag){case 3:Wt(Ie),at();break;case 26:case 27:case 5:Kt(t);break;case 4:at();break;case 13:ta(t);break;case 19:H(Qe);break;case 10:Wt(t.type);break;case 22:case 23:ta(t),Lu(),e!==null&&H($a);break;case 24:Wt(Ie)}}function Ml(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,s=a.inst;n=r(),s.destroy=n}a=a.next}while(a!==i)}}catch(d){De(t,t.return,d)}}function va(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var s=n.inst,d=s.destroy;if(d!==void 0){s.destroy=void 0,i=t;var h=a,A=d;try{A()}catch(z){De(i,h,z)}}}n=n.next}while(n!==r)}}catch(z){De(t,t.return,z)}}function sf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Vs(t,a)}catch(n){De(e,e.return,n)}}}function df(e,t,a){a.props=Wa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){De(e,t,n)}}function jl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){De(e,t,i)}}function Lt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){De(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){De(e,t,i)}else a.current=null}function ff(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){De(e,e.return,i)}}function xc(e,t,a){try{var n=e.stateNode;l1(n,e.type,a,t),n[ct]=t}catch(i){De(e,e.return,i)}}function pf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_a(e.type)||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_a(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yc(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=rr));else if(n!==4&&(n===27&&_a(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(yc(e,t,a),e=e.sibling;e!==null;)yc(e,t,a),e=e.sibling}function Zi(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&_a(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Zi(e,t,a),e=e.sibling;e!==null;)Zi(e,t,a),e=e.sibling}function hf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);tt(t,n,a),t[nt]=e,t[ct]=a}catch(r){De(e,e.return,r)}}var la=!1,Be=!1,bc=!1,gf=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function Yg(e,t){if(e=e.containerInfo,Xc=pr,e=Cs(e),mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var s=0,d=-1,h=-1,A=0,z=0,M=e,C=null;t:for(;;){for(var T;M!==a||i!==0&&M.nodeType!==3||(d=s+i),M!==r||n!==0&&M.nodeType!==3||(h=s+n),M.nodeType===3&&(s+=M.nodeValue.length),(T=M.firstChild)!==null;)C=M,M=T;for(;;){if(M===e)break t;if(C===a&&++A===i&&(d=s),C===r&&++z===n&&(h=s),(T=M.nextSibling)!==null)break;M=C,C=M.parentNode}M=T}a=d===-1||h===-1?null:{start:d,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ic={focusedElem:e,selectionRange:a},pr=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var te=Wa(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(te,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(J){De(a,a.return,J)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Pc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Pc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function xf(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(e,a),n&4&&Ml(5,a);break;case 1:if(Sa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){De(a,a.return,s)}else{var i=Wa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){De(a,a.return,s)}}n&64&&sf(a),n&512&&jl(a,a.return);break;case 3:if(Sa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Vs(e,t)}catch(s){De(a,a.return,s)}}break;case 27:t===null&&n&4&&hf(a);case 26:case 5:Sa(e,a),t===null&&n&4&&ff(a),n&512&&jl(a,a.return);break;case 12:Sa(e,a);break;case 13:Sa(e,a),n&4&&bf(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Pg.bind(null,a),d1(e,a))));break;case 22:if(n=a.memoizedState!==null||la,!n){t=t!==null&&t.memoizedState!==null||Be,i=la;var r=Be;la=n,(Be=t)&&!r?wa(e,a,(a.subtreeFlags&8772)!==0):Sa(e,a),la=i,Be=r}break;case 30:break;default:Sa(e,a)}}function mf(e){var t=e.alternate;t!==null&&(e.alternate=null,mf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Jr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,dt=!1;function ia(e,t,a){for(a=a.child;a!==null;)yf(e,t,a),a=a.sibling}function yf(e,t,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(tl,a)}catch{}switch(a.tag){case 26:Be||Lt(a,t),ia(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Be||Lt(a,t);var n=Ne,i=dt;_a(a.type)&&(Ne=a.stateNode,dt=!1),ia(e,t,a),Xl(a.stateNode),Ne=n,dt=i;break;case 5:Be||Lt(a,t);case 6:if(n=Ne,i=dt,Ne=null,ia(e,t,a),Ne=n,dt=i,Ne!==null)if(dt)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(a.stateNode)}catch(r){De(a,t,r)}else try{Ne.removeChild(a.stateNode)}catch(r){De(a,t,r)}break;case 18:Ne!==null&&(dt?(e=Ne,r0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),$l(e)):r0(Ne,a.stateNode));break;case 4:n=Ne,i=dt,Ne=a.stateNode.containerInfo,dt=!0,ia(e,t,a),Ne=n,dt=i;break;case 0:case 11:case 14:case 15:Be||va(2,a,t),Be||va(4,a,t),ia(e,t,a);break;case 1:Be||(Lt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&df(a,t,n)),ia(e,t,a);break;case 21:ia(e,t,a);break;case 22:Be=(n=Be)||a.memoizedState!==null,ia(e,t,a),Be=n;break;default:ia(e,t,a)}}function bf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$l(e)}catch(a){De(t,t.return,a)}}function Gg(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gf),t;default:throw Error(c(435,e.tag))}}function vc(e,t){var a=Gg(e);t.forEach(function(n){var i=Fg.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function yt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,s=t,d=s;e:for(;d!==null;){switch(d.tag){case 27:if(_a(d.type)){Ne=d.stateNode,dt=!1;break e}break;case 5:Ne=d.stateNode,dt=!1;break e;case 3:case 4:Ne=d.stateNode.containerInfo,dt=!0;break e}d=d.return}if(Ne===null)throw Error(c(160));yf(r,s,i),Ne=null,dt=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)vf(t,e),t=t.sibling}var kt=null;function vf(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yt(t,e),bt(e),n&4&&(va(3,e,e.return),Ml(3,e),va(5,e,e.return));break;case 1:yt(t,e),bt(e),n&512&&(Be||a===null||Lt(a,a.return)),n&64&&la&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=kt;if(yt(t,e),bt(e),n&512&&(Be||a===null||Lt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[ll]||r[nt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),tt(r,n,a),r[nt]=e,Pe(r),n=r;break e;case"link":var s=h0("link","href",i).get(n+(a.href||""));if(s){for(var d=0;d<s.length;d++)if(r=s[d],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(d,1);break t}}r=i.createElement(n),tt(r,n,a),i.head.appendChild(r);break;case"meta":if(s=h0("meta","content",i).get(n+(a.content||""))){for(d=0;d<s.length;d++)if(r=s[d],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(d,1);break t}}r=i.createElement(n),tt(r,n,a),i.head.appendChild(r);break;default:throw Error(c(468,n))}r[nt]=e,Pe(r),n=r}e.stateNode=n}else g0(i,e.type,e.stateNode);else e.stateNode=p0(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?g0(i,e.type,e.stateNode):p0(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&xc(e,e.memoizedProps,a.memoizedProps)}break;case 27:yt(t,e),bt(e),n&512&&(Be||a===null||Lt(a,a.return)),a!==null&&n&4&&xc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(yt(t,e),bt(e),n&512&&(Be||a===null||Lt(a,a.return)),e.flags&32){i=e.stateNode;try{hn(i,"")}catch(T){De(e,e.return,T)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,xc(e,i,a!==null?a.memoizedProps:i)),n&1024&&(bc=!0);break;case 6:if(yt(t,e),bt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(T){De(e,e.return,T)}}break;case 3:if(sr=null,i=kt,kt=cr(t.containerInfo),yt(t,e),kt=i,bt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{$l(t.containerInfo)}catch(T){De(e,e.return,T)}bc&&(bc=!1,Sf(e));break;case 4:n=kt,kt=cr(e.stateNode.containerInfo),yt(t,e),bt(e),kt=n;break;case 12:yt(t,e),bt(e);break;case 13:yt(t,e),bt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Tc=Gt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,vc(e,n)));break;case 22:i=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,A=la,z=Be;if(la=A||i,Be=z||h,yt(t,e),Be=z,la=A,bt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||h||la||Be||en(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(r=h.stateNode,i)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{d=h.stateNode;var M=h.memoizedProps.style,C=M!=null&&M.hasOwnProperty("display")?M.display:null;d.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(T){De(h,h.return,T)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=i?"":h.memoizedProps}catch(T){De(h,h.return,T)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,vc(e,a))));break;case 19:yt(t,e),bt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,vc(e,n)));break;case 30:break;case 21:break;default:yt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(pf(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var i=a.stateNode,r=mc(e);Zi(e,r,i);break;case 5:var s=a.stateNode;a.flags&32&&(hn(s,""),a.flags&=-33);var d=mc(e);Zi(e,d,s);break;case 3:case 4:var h=a.stateNode.containerInfo,A=mc(e);yc(e,A,h);break;default:throw Error(c(161))}}catch(z){De(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)xf(e,t.alternate,t),t=t.sibling}function en(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:va(4,t,t.return),en(t);break;case 1:Lt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&df(t,t.return,a),en(t);break;case 27:Xl(t.stateNode);case 26:case 5:Lt(t,t.return),en(t);break;case 22:t.memoizedState===null&&en(t);break;case 30:en(t);break;default:en(t)}e=e.sibling}}function wa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:wa(i,r,a),Ml(4,r);break;case 1:if(wa(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(A){De(n,n.return,A)}if(n=r,i=n.updateQueue,i!==null){var d=n.stateNode;try{var h=i.shared.hiddenCallbacks;if(h!==null)for(i.shared.hiddenCallbacks=null,i=0;i<h.length;i++)Zs(h[i],d)}catch(A){De(n,n.return,A)}}a&&s&64&&sf(r),jl(r,r.return);break;case 27:hf(r);case 26:case 5:wa(i,r,a),a&&n===null&&s&4&&ff(r),jl(r,r.return);break;case 12:wa(i,r,a);break;case 13:wa(i,r,a),a&&s&4&&bf(i,r);break;case 22:r.memoizedState===null&&wa(i,r,a),jl(r,r.return);break;case 30:break;default:wa(i,r,a)}t=t.sibling}}function Sc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&bl(a))}function wc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bl(e))}function Xt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wf(e,t,a,n),t=t.sibling}function wf(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(e,t,a,n),i&2048&&Ml(9,t);break;case 1:Xt(e,t,a,n);break;case 3:Xt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bl(e)));break;case 12:if(i&2048){Xt(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,d=r.onPostCommit;typeof d=="function"&&d(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){De(t,t.return,h)}}else Xt(e,t,a,n);break;case 13:Xt(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?Xt(e,t,a,n):Ul(e,t):r._visibility&2?Xt(e,t,a,n):(r._visibility|=2,Mn(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&Sc(s,t);break;case 24:Xt(e,t,a,n),i&2048&&wc(t.alternate,t);break;default:Xt(e,t,a,n)}}function Mn(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,s=t,d=a,h=n,A=s.flags;switch(s.tag){case 0:case 11:case 15:Mn(r,s,d,h,i),Ml(8,s);break;case 23:break;case 22:var z=s.stateNode;s.memoizedState!==null?z._visibility&2?Mn(r,s,d,h,i):Ul(r,s):(z._visibility|=2,Mn(r,s,d,h,i)),i&&A&2048&&Sc(s.alternate,s);break;case 24:Mn(r,s,d,h,i),i&&A&2048&&wc(s.alternate,s);break;default:Mn(r,s,d,h,i)}t=t.sibling}}function Ul(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Ul(a,n),i&2048&&Sc(n.alternate,n);break;case 24:Ul(a,n),i&2048&&wc(n.alternate,n);break;default:Ul(a,n)}t=t.sibling}}var kl=8192;function jn(e){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)Af(e),e=e.sibling}function Af(e){switch(e.tag){case 26:jn(e),e.flags&kl&&e.memoizedState!==null&&E1(kt,e.memoizedState,e.memoizedProps);break;case 5:jn(e);break;case 3:case 4:var t=kt;kt=cr(e.stateNode.containerInfo),jn(e),kt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=kl,kl=16777216,jn(e),kl=t):jn(e));break;default:jn(e)}}function Ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Bl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ze=n,Tf(n,e)}Ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cf(e),e=e.sibling}function Cf(e){switch(e.tag){case 0:case 11:case 15:Bl(e),e.flags&2048&&va(9,e,e.return);break;case 3:Bl(e);break;case 12:Bl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Vi(e)):Bl(e);break;default:Bl(e)}}function Vi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ze=n,Tf(n,e)}Ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:va(8,t,t.return),Vi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Vi(t));break;default:Vi(t)}e=e.sibling}}function Tf(e,t){for(;Ze!==null;){var a=Ze;switch(a.tag){case 0:case 11:case 15:va(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:bl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ze=n;else e:for(a=e;Ze!==null;){n=Ze;var i=n.sibling,r=n.return;if(mf(n),n===a){Ze=null;break e}if(i!==null){i.return=r,Ze=i;break e}Ze=r}}}var Hg={getCacheForType:function(e){var t=lt(Ie),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},qg=typeof WeakMap=="function"?WeakMap:Map,Se=0,_e=null,oe=null,ge=0,we=0,vt=null,Aa=!1,Un=!1,Ac=!1,ra=0,je=0,Ea=0,tn=0,Ec=0,Ot=0,kn=0,Yl=null,ft=null,Cc=!1,Tc=0,$i=1/0,Ji=null,Ca=null,et=0,Ta=null,Bn=null,Yn=0,Dc=0,_c=null,Df=null,Gl=0,Rc=null;function St(){if((Se&2)!==0&&ge!==0)return ge&-ge;if(R.T!==null){var e=Cn;return e!==0?e:kc()}return Lo()}function _f(){Ot===0&&(Ot=(ge&536870912)===0||ye?Yo():536870912);var e=Nt.current;return e!==null&&(e.flags|=32),Ot}function wt(e,t,a){(e===_e&&(we===2||we===9)||e.cancelPendingCommit!==null)&&(Gn(e,0),Da(e,ge,Ot,!1)),nl(e,a),((Se&2)===0||e!==_e)&&(e===_e&&((Se&2)===0&&(tn|=a),je===4&&Da(e,ge,Ot,!1)),It(e))}function Rf(e,t,a){if((Se&6)!==0)throw Error(c(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||al(e,t),i=n?Ig(e,t):Oc(e,t,!0),r=n;do{if(i===0){Un&&!n&&Da(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Lg(a)){i=Oc(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var d=e;i=Yl;var h=d.current.memoizedState.isDehydrated;if(h&&(Gn(d,s).flags|=256),s=Oc(d,s,!1),s!==2){if(Ac&&!h){d.errorRecoveryDisabledLanes|=r,tn|=r,i=4;break e}r=ft,ft=i,r!==null&&(ft===null?ft=r:ft.push.apply(ft,r))}i=s}if(r=!1,i!==2)continue}}if(i===1){Gn(e,0),Da(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Da(n,t,Ot,!Aa);break e;case 2:ft=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=Tc+300-Gt(),10<i)){if(Da(n,t,Ot,!Aa),oi(n,0,!0)!==0)break e;n.timeoutHandle=l0(zf.bind(null,n,a,ft,Ji,Cc,t,Ot,tn,kn,Aa,r,2,-0,0),i);break e}zf(n,a,ft,Ji,Cc,t,Ot,tn,kn,Aa,r,0,-0,0)}}break}while(!0);It(e)}function zf(e,t,a,n,i,r,s,d,h,A,z,M,C,T){if(e.timeoutHandle=-1,M=t.subtreeFlags,(M&8192||(M&16785408)===16785408)&&(Kl={stylesheets:null,count:0,unsuspend:A1},Af(t),M=C1(),M!==null)){e.cancelPendingCommit=M(Bf.bind(null,e,t,r,a,n,i,s,d,h,z,1,C,T)),Da(e,r,s,!A);return}Bf(e,t,r,a,n,i,s,d,h)}function Lg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!xt(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Da(e,t,a,n){t&=~Ec,t&=~tn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-gt(i),s=1<<r;n[r]=-1,i&=~s}a!==0&&Ho(e,a,t)}function Wi(){return(Se&6)===0?(Hl(0),!1):!0}function zc(){if(oe!==null){if(we===0)var e=oe.return;else e=oe,Jt=Za=null,Pu(e),Nn=null,zl=0,e=oe;for(;e!==null;)of(e.alternate,e),e=e.return;oe=null}}function Gn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,r1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),zc(),_e=e,oe=a=Zt(e.current,null),ge=t,we=0,vt=null,Aa=!1,Un=al(e,t),Ac=!1,kn=Ot=Ec=tn=Ea=je=0,ft=Yl=null,Cc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-gt(n),r=1<<i;t|=e[i],n&=~r}return ra=t,Si(),a}function Nf(e,t){re=null,R.H=Hi,t===Sl||t===zi?(t=Ps(),we=3):t===Is?(t=Ps(),we=4):we=t===Fd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,vt=t,oe===null&&(je=1,Qi(e,Dt(t,e.current)))}function Of(){var e=R.H;return R.H=Hi,e===null?Hi:e}function Mf(){var e=R.A;return R.A=Hg,e}function Nc(){je=4,Aa||(ge&4194048)!==ge&&Nt.current!==null||(Un=!0),(Ea&134217727)===0&&(tn&134217727)===0||_e===null||Da(_e,ge,Ot,!1)}function Oc(e,t,a){var n=Se;Se|=2;var i=Of(),r=Mf();(_e!==e||ge!==t)&&(Ji=null,Gn(e,t)),t=!1;var s=je;e:do try{if(we!==0&&oe!==null){var d=oe,h=vt;switch(we){case 8:zc(),s=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var A=we;if(we=0,vt=null,Hn(e,d,h,A),a&&Un){s=0;break e}break;default:A=we,we=0,vt=null,Hn(e,d,h,A)}}Xg(),s=je;break}catch(z){Nf(e,z)}while(!0);return t&&e.shellSuspendCounter++,Jt=Za=null,Se=n,R.H=i,R.A=r,oe===null&&(_e=null,ge=0,Si()),s}function Xg(){for(;oe!==null;)jf(oe)}function Ig(e,t){var a=Se;Se|=2;var n=Of(),i=Mf();_e!==e||ge!==t?(Ji=null,$i=Gt()+500,Gn(e,t)):Un=al(e,t);e:do try{if(we!==0&&oe!==null){t=oe;var r=vt;t:switch(we){case 1:we=0,vt=null,Hn(e,t,r,1);break;case 2:case 9:if(Qs(r)){we=0,vt=null,Uf(t);break}t=function(){we!==2&&we!==9||_e!==e||(we=7),It(e)},r.then(t,t);break e;case 3:we=7;break e;case 4:we=5;break e;case 7:Qs(r)?(we=0,vt=null,Uf(t)):(we=0,vt=null,Hn(e,t,r,7));break;case 5:var s=null;switch(oe.tag){case 26:s=oe.memoizedState;case 5:case 27:var d=oe;if(!s||x0(s)){we=0,vt=null;var h=d.sibling;if(h!==null)oe=h;else{var A=d.return;A!==null?(oe=A,er(A)):oe=null}break t}}we=0,vt=null,Hn(e,t,r,5);break;case 6:we=0,vt=null,Hn(e,t,r,6);break;case 8:zc(),je=6;break e;default:throw Error(c(462))}}Qg();break}catch(z){Nf(e,z)}while(!0);return Jt=Za=null,R.H=n,R.A=i,Se=a,oe!==null?0:(_e=null,ge=0,Si(),je)}function Qg(){for(;oe!==null&&!ph();)jf(oe)}function jf(e){var t=uf(e.alternate,e,ra);e.memoizedProps=e.pendingProps,t===null?er(e):oe=t}function Uf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=ef(a,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=ef(a,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:Pu(t);default:of(a,t),t=oe=Us(t,ra),t=uf(a,t,ra)}e.memoizedProps=e.pendingProps,t===null?er(e):oe=t}function Hn(e,t,a,n){Jt=Za=null,Pu(t),Nn=null,zl=0;var i=t.return;try{if(jg(e,i,t,a,ge)){je=1,Qi(e,Dt(a,e.current)),oe=null;return}}catch(r){if(i!==null)throw oe=i,r;je=1,Qi(e,Dt(a,e.current)),oe=null;return}t.flags&32768?(ye||n===1?e=!0:Un||(ge&536870912)!==0?e=!1:(Aa=e=!0,(n===2||n===9||n===3||n===6)&&(n=Nt.current,n!==null&&n.tag===13&&(n.flags|=16384))),kf(t,e)):er(t)}function er(e){var t=e;do{if((t.flags&32768)!==0){kf(t,Aa);return}e=t.return;var a=kg(t.alternate,t,ra);if(a!==null){oe=a;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);je===0&&(je=5)}function kf(e,t){do{var a=Bg(e.alternate,e);if(a!==null){a.flags&=32767,oe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){oe=e;return}oe=e=a}while(e!==null);je=6,oe=null}function Bf(e,t,a,n,i,r,s,d,h){e.cancelPendingCommit=null;do tr();while(et!==0);if((Se&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=wu,Ah(e,a,r,s,d,h),e===_e&&(oe=_e=null,ge=0),Bn=t,Ta=e,Yn=a,Dc=r,_c=i,Df=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Zg(ri,function(){return Lf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null,i=L.p,L.p=2,s=Se,Se|=4;try{Yg(e,t,a)}finally{Se=s,L.p=i,R.T=n}}et=1,Yf(),Gf(),Hf()}}function Yf(){if(et===1){et=0;var e=Ta,t=Bn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var n=L.p;L.p=2;var i=Se;Se|=4;try{vf(t,e);var r=Ic,s=Cs(e.containerInfo),d=r.focusedElem,h=r.selectionRange;if(s!==d&&d&&d.ownerDocument&&Es(d.ownerDocument.documentElement,d)){if(h!==null&&mu(d)){var A=h.start,z=h.end;if(z===void 0&&(z=A),"selectionStart"in d)d.selectionStart=A,d.selectionEnd=Math.min(z,d.value.length);else{var M=d.ownerDocument||document,C=M&&M.defaultView||window;if(C.getSelection){var T=C.getSelection(),te=d.textContent.length,J=Math.min(h.start,te),Ce=h.end===void 0?J:Math.min(h.end,te);!T.extend&&J>Ce&&(s=Ce,Ce=J,J=s);var b=As(d,J),m=As(d,Ce);if(b&&m&&(T.rangeCount!==1||T.anchorNode!==b.node||T.anchorOffset!==b.offset||T.focusNode!==m.node||T.focusOffset!==m.offset)){var w=M.createRange();w.setStart(b.node,b.offset),T.removeAllRanges(),J>Ce?(T.addRange(w),T.extend(m.node,m.offset)):(w.setEnd(m.node,m.offset),T.addRange(w))}}}}for(M=[],T=d;T=T.parentNode;)T.nodeType===1&&M.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<M.length;d++){var N=M[d];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}pr=!!Xc,Ic=Xc=null}finally{Se=i,L.p=n,R.T=a}}e.current=t,et=2}}function Gf(){if(et===2){et=0;var e=Ta,t=Bn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var n=L.p;L.p=2;var i=Se;Se|=4;try{xf(e,t.alternate,t)}finally{Se=i,L.p=n,R.T=a}}et=3}}function Hf(){if(et===4||et===3){et=0,hh();var e=Ta,t=Bn,a=Yn,n=Df;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,Bn=Ta=null,qf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ca=null),Vr(a),t=t.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(tl,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=R.T,i=L.p,L.p=2,R.T=null;try{for(var r=e.onRecoverableError,s=0;s<n.length;s++){var d=n[s];r(d.value,{componentStack:d.stack})}}finally{R.T=t,L.p=i}}(Yn&3)!==0&&tr(),It(e),i=e.pendingLanes,(a&4194090)!==0&&(i&42)!==0?e===Rc?Gl++:(Gl=0,Rc=e):Gl=0,Hl(0)}}function qf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,bl(t)))}function tr(e){return Yf(),Gf(),Hf(),Lf()}function Lf(){if(et!==5)return!1;var e=Ta,t=Dc;Dc=0;var a=Vr(Yn),n=R.T,i=L.p;try{L.p=32>a?32:a,R.T=null,a=_c,_c=null;var r=Ta,s=Yn;if(et=0,Bn=Ta=null,Yn=0,(Se&6)!==0)throw Error(c(331));var d=Se;if(Se|=4,Cf(r.current),wf(r,r.current,s,a),Se=d,Hl(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(tl,r)}catch{}return!0}finally{L.p=i,R.T=n,qf(e,t)}}function Xf(e,t,a){t=Dt(a,t),t=uc(e.stateNode,t,2),e=xa(e,t,2),e!==null&&(nl(e,2),It(e))}function De(e,t,a){if(e.tag===3)Xf(e,e,a);else for(;t!==null;){if(t.tag===3){Xf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ca===null||!Ca.has(n))){e=Dt(a,e),a=Kd(2),n=xa(t,a,2),n!==null&&(Pd(a,n,t,e),nl(n,2),It(n));break}}t=t.return}}function Mc(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new qg;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Ac=!0,i.add(a),e=Kg.bind(null,e,t,a),t.then(e,e))}function Kg(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,_e===e&&(ge&a)===a&&(je===4||je===3&&(ge&62914560)===ge&&300>Gt()-Tc?(Se&2)===0&&Gn(e,0):Ec|=a,kn===ge&&(kn=0)),It(e)}function If(e,t){t===0&&(t=Go()),e=Sn(e,t),e!==null&&(nl(e,t),It(e))}function Pg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),If(e,a)}function Fg(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),If(e,a)}function Zg(e,t){return Kr(e,t)}var ar=null,qn=null,jc=!1,nr=!1,Uc=!1,an=0;function It(e){e!==qn&&e.next===null&&(qn===null?ar=qn=e:qn=qn.next=e),nr=!0,jc||(jc=!0,$g())}function Hl(e,t){if(!Uc&&nr){Uc=!0;do for(var a=!1,n=ar;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var s=n.suspendedLanes,d=n.pingedLanes;r=(1<<31-gt(42|e)+1)-1,r&=i&~(s&~d),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Ff(n,r))}else r=ge,r=oi(n,n===_e?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||al(n,r)||(a=!0,Ff(n,r));n=n.next}while(a);Uc=!1}}function Vg(){Qf()}function Qf(){nr=jc=!1;var e=0;an!==0&&(i1()&&(e=an),an=0);for(var t=Gt(),a=null,n=ar;n!==null;){var i=n.next,r=Kf(n,t);r===0?(n.next=null,a===null?ar=i:a.next=i,i===null&&(qn=a)):(a=n,(e!==0||(r&3)!==0)&&(nr=!0)),n=i}Hl(e)}function Kf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-gt(r),d=1<<s,h=i[s];h===-1?((d&a)===0||(d&n)!==0)&&(i[s]=wh(d,t)):h<=t&&(e.expiredLanes|=d),r&=~d}if(t=_e,a=ge,a=oi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(we===2||we===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Pr(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||al(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Pr(n),Vr(a)){case 2:case 8:a=ko;break;case 32:a=ri;break;case 268435456:a=Bo;break;default:a=ri}return n=Pf.bind(null,e),a=Kr(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Pr(n),e.callbackPriority=2,e.callbackNode=null,2}function Pf(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(tr()&&e.callbackNode!==a)return null;var n=ge;return n=oi(e,e===_e?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Rf(e,n,t),Kf(e,Gt()),e.callbackNode!=null&&e.callbackNode===a?Pf.bind(null,e):null)}function Ff(e,t){if(tr())return null;Rf(e,t,!0)}function $g(){u1(function(){(Se&6)!==0?Kr(Uo,Vg):Qf()})}function kc(){return an===0&&(an=Yo()),an}function Zf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hi(""+e)}function Vf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Jg(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=Zf((i[ct]||null).action),s=n.submitter;s&&(t=(t=s[ct]||null)?Zf(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var d=new yi("action","action",null,n,i);e.push({event:d,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(an!==0){var h=s?Vf(i,s):new FormData(i);ac(a,{pending:!0,data:h,method:i.method,action:r},null,h)}}else typeof r=="function"&&(d.preventDefault(),h=s?Vf(i,s):new FormData(i),ac(a,{pending:!0,data:h,method:i.method,action:r},r,h))},currentTarget:i}]})}}for(var Bc=0;Bc<Su.length;Bc++){var Yc=Su[Bc],Wg=Yc.toLowerCase(),e1=Yc[0].toUpperCase()+Yc.slice(1);Ut(Wg,"on"+e1)}Ut(_s,"onAnimationEnd"),Ut(Rs,"onAnimationIteration"),Ut(zs,"onAnimationStart"),Ut("dblclick","onDoubleClick"),Ut("focusin","onFocus"),Ut("focusout","onBlur"),Ut(mg,"onTransitionRun"),Ut(yg,"onTransitionStart"),Ut(bg,"onTransitionCancel"),Ut(Ns,"onTransitionEnd"),dn("onMouseEnter",["mouseout","mouseover"]),dn("onMouseLeave",["mouseout","mouseover"]),dn("onPointerEnter",["pointerout","pointerover"]),dn("onPointerLeave",["pointerout","pointerover"]),Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function $f(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var s=n.length-1;0<=s;s--){var d=n[s],h=d.instance,A=d.currentTarget;if(d=d.listener,h!==r&&i.isPropagationStopped())break e;r=d,i.currentTarget=A;try{r(i)}catch(z){Ii(z)}i.currentTarget=null,r=h}else for(s=0;s<n.length;s++){if(d=n[s],h=d.instance,A=d.currentTarget,d=d.listener,h!==r&&i.isPropagationStopped())break e;r=d,i.currentTarget=A;try{r(i)}catch(z){Ii(z)}i.currentTarget=null,r=h}}}}function se(e,t){var a=t[$r];a===void 0&&(a=t[$r]=new Set);var n=e+"__bubble";a.has(n)||(Jf(t,e,2,!1),a.add(n))}function Gc(e,t,a){var n=0;t&&(n|=4),Jf(a,e,n,t)}var lr="_reactListening"+Math.random().toString(36).slice(2);function Hc(e){if(!e[lr]){e[lr]=!0,Io.forEach(function(a){a!=="selectionchange"&&(t1.has(a)||Gc(a,!1,e),Gc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lr]||(t[lr]=!0,Gc("selectionchange",!1,t))}}function Jf(e,t,a,n){switch(w0(t)){case 2:var i=_1;break;case 8:i=R1;break;default:i=eo}a=i.bind(null,t,a,e),i=void 0,!cu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function qc(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var d=n.stateNode.containerInfo;if(d===i)break;if(s===4)for(s=n.return;s!==null;){var h=s.tag;if((h===3||h===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;d!==null;){if(s=cn(d),s===null)return;if(h=s.tag,h===5||h===6||h===26||h===27){n=r=s;continue e}d=d.parentNode}}n=n.return}ls(function(){var A=r,z=ru(a),M=[];e:{var C=Os.get(e);if(C!==void 0){var T=yi,te=e;switch(e){case"keypress":if(xi(a)===0)break e;case"keydown":case"keyup":T=Zh;break;case"focusin":te="focus",T=fu;break;case"focusout":te="blur",T=fu;break;case"beforeblur":case"afterblur":T=fu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Bh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Jh;break;case _s:case Rs:case zs:T=Hh;break;case Ns:T=eg;break;case"scroll":case"scrollend":T=Uh;break;case"wheel":T=ag;break;case"copy":case"cut":case"paste":T=Lh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=os;break;case"toggle":case"beforetoggle":T=lg}var J=(t&4)!==0,Ce=!J&&(e==="scroll"||e==="scrollend"),b=J?C!==null?C+"Capture":null:C;J=[];for(var m=A,w;m!==null;){var N=m;if(w=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||w===null||b===null||(N=rl(m,b),N!=null&&J.push(Ll(m,N,w))),Ce)break;m=m.return}0<J.length&&(C=new T(C,te,null,a,z),M.push({event:C,listeners:J}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",C&&a!==iu&&(te=a.relatedTarget||a.fromElement)&&(cn(te)||te[un]))break e;if((T||C)&&(C=z.window===z?z:(C=z.ownerDocument)?C.defaultView||C.parentWindow:window,T?(te=a.relatedTarget||a.toElement,T=A,te=te?cn(te):null,te!==null&&(Ce=g(te),J=te.tag,te!==Ce||J!==5&&J!==27&&J!==6)&&(te=null)):(T=null,te=A),T!==te)){if(J=us,N="onMouseLeave",b="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(J=os,N="onPointerLeave",b="onPointerEnter",m="pointer"),Ce=T==null?C:il(T),w=te==null?C:il(te),C=new J(N,m+"leave",T,a,z),C.target=Ce,C.relatedTarget=w,N=null,cn(z)===A&&(J=new J(b,m+"enter",te,a,z),J.target=w,J.relatedTarget=Ce,N=J),Ce=N,T&&te)t:{for(J=T,b=te,m=0,w=J;w;w=Ln(w))m++;for(w=0,N=b;N;N=Ln(N))w++;for(;0<m-w;)J=Ln(J),m--;for(;0<w-m;)b=Ln(b),w--;for(;m--;){if(J===b||b!==null&&J===b.alternate)break t;J=Ln(J),b=Ln(b)}J=null}else J=null;T!==null&&Wf(M,C,T,J,!1),te!==null&&Ce!==null&&Wf(M,Ce,te,J,!0)}}e:{if(C=A?il(A):window,T=C.nodeName&&C.nodeName.toLowerCase(),T==="select"||T==="input"&&C.type==="file")var Q=ms;else if(gs(C))if(ys)Q=hg;else{Q=fg;var ce=dg}else T=C.nodeName,!T||T.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?A&&lu(A.elementType)&&(Q=ms):Q=pg;if(Q&&(Q=Q(e,A))){xs(M,Q,a,z);break e}ce&&ce(e,C,A),e==="focusout"&&A&&C.type==="number"&&A.memoizedProps.value!=null&&nu(C,"number",C.value)}switch(ce=A?il(A):window,e){case"focusin":(gs(ce)||ce.contentEditable==="true")&&(yn=ce,yu=A,hl=null);break;case"focusout":hl=yu=yn=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Ts(M,a,z);break;case"selectionchange":if(xg)break;case"keydown":case"keyup":Ts(M,a,z)}var Z;if(hu)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else mn?ps(e,a)&&(W="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(W="onCompositionStart");W&&(ss&&a.locale!=="ko"&&(mn||W!=="onCompositionStart"?W==="onCompositionEnd"&&mn&&(Z=is()):(fa=z,ou="value"in fa?fa.value:fa.textContent,mn=!0)),ce=ir(A,W),0<ce.length&&(W=new cs(W,e,null,a,z),M.push({event:W,listeners:ce}),Z?W.data=Z:(Z=hs(a),Z!==null&&(W.data=Z)))),(Z=rg?ug(e,a):cg(e,a))&&(W=ir(A,"onBeforeInput"),0<W.length&&(ce=new cs("onBeforeInput","beforeinput",null,a,z),M.push({event:ce,listeners:W}),ce.data=Z)),Jg(M,e,A,a,z)}$f(M,t)})}function Ll(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ir(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=rl(e,a),i!=null&&n.unshift(Ll(e,i,r)),i=rl(e,t),i!=null&&n.push(Ll(e,i,r))),e.tag===3)return n;e=e.return}return[]}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wf(e,t,a,n,i){for(var r=t._reactName,s=[];a!==null&&a!==n;){var d=a,h=d.alternate,A=d.stateNode;if(d=d.tag,h!==null&&h===n)break;d!==5&&d!==26&&d!==27||A===null||(h=A,i?(A=rl(a,r),A!=null&&s.unshift(Ll(a,A,h))):i||(A=rl(a,r),A!=null&&s.push(Ll(a,A,h)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var a1=/\r\n?/g,n1=/\u0000|\uFFFD/g;function e0(e){return(typeof e=="string"?e:""+e).replace(a1,`
`).replace(n1,"")}function t0(e,t){return t=e0(t),e0(e)===t}function rr(){}function Ee(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||hn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&hn(e,""+n);break;case"className":di(e,"class",n);break;case"tabIndex":di(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":di(e,a,n);break;case"style":as(e,n,r);break;case"data":if(t!=="object"){di(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=hi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ee(e,t,"name",i.name,i,null),Ee(e,t,"formEncType",i.formEncType,i,null),Ee(e,t,"formMethod",i.formMethod,i,null),Ee(e,t,"formTarget",i.formTarget,i,null)):(Ee(e,t,"encType",i.encType,i,null),Ee(e,t,"method",i.method,i,null),Ee(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=hi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=rr);break;case"onScroll":n!=null&&se("scroll",e);break;case"onScrollEnd":n!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=hi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":se("beforetoggle",e),se("toggle",e),si(e,"popover",n);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":si(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Mh.get(a)||a,si(e,a,n))}}function Lc(e,t,a,n,i,r){switch(a){case"style":as(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?hn(e,n):(typeof n=="number"||typeof n=="bigint")&&hn(e,""+n);break;case"onScroll":n!=null&&se("scroll",e);break;case"onScrollEnd":n!=null&&se("scrollend",e);break;case"onClick":n!=null&&(e.onclick=rr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[ct]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):si(e,a,n)}}}function tt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var s=a[r];if(s!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,r,s,a,null)}}i&&Ee(e,t,"srcSet",a.srcSet,a,null),n&&Ee(e,t,"src",a.src,a,null);return;case"input":se("invalid",e);var d=r=s=i=null,h=null,A=null;for(n in a)if(a.hasOwnProperty(n)){var z=a[n];if(z!=null)switch(n){case"name":i=z;break;case"type":s=z;break;case"checked":h=z;break;case"defaultChecked":A=z;break;case"value":r=z;break;case"defaultValue":d=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:Ee(e,t,n,z,a,null)}}Jo(e,r,d,h,A,s,i,!1),fi(e);return;case"select":se("invalid",e),n=s=r=null;for(i in a)if(a.hasOwnProperty(i)&&(d=a[i],d!=null))switch(i){case"value":r=d;break;case"defaultValue":s=d;break;case"multiple":n=d;default:Ee(e,t,i,d,a,null)}t=r,a=s,e.multiple=!!n,t!=null?pn(e,!!n,t,!1):a!=null&&pn(e,!!n,a,!0);return;case"textarea":se("invalid",e),r=i=n=null;for(s in a)if(a.hasOwnProperty(s)&&(d=a[s],d!=null))switch(s){case"value":n=d;break;case"defaultValue":i=d;break;case"children":r=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(c(91));break;default:Ee(e,t,s,d,a,null)}es(e,n,i,r),fi(e);return;case"option":for(h in a)if(a.hasOwnProperty(h)&&(n=a[h],n!=null))switch(h){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ee(e,t,h,n,a,null)}return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(n=0;n<ql.length;n++)se(ql[n],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in a)if(a.hasOwnProperty(A)&&(n=a[A],n!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,A,n,a,null)}return;default:if(lu(t)){for(z in a)a.hasOwnProperty(z)&&(n=a[z],n!==void 0&&Lc(e,t,z,n,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(n=a[d],n!=null&&Ee(e,t,d,n,a,null))}function l1(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,s=null,d=null,h=null,A=null,z=null;for(T in a){var M=a[T];if(a.hasOwnProperty(T)&&M!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":h=M;default:n.hasOwnProperty(T)||Ee(e,t,T,null,n,M)}}for(var C in n){var T=n[C];if(M=a[C],n.hasOwnProperty(C)&&(T!=null||M!=null))switch(C){case"type":r=T;break;case"name":i=T;break;case"checked":A=T;break;case"defaultChecked":z=T;break;case"value":s=T;break;case"defaultValue":d=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:T!==M&&Ee(e,t,C,T,n,M)}}au(e,s,d,h,A,z,r,i);return;case"select":T=s=d=C=null;for(r in a)if(h=a[r],a.hasOwnProperty(r)&&h!=null)switch(r){case"value":break;case"multiple":T=h;default:n.hasOwnProperty(r)||Ee(e,t,r,null,n,h)}for(i in n)if(r=n[i],h=a[i],n.hasOwnProperty(i)&&(r!=null||h!=null))switch(i){case"value":C=r;break;case"defaultValue":d=r;break;case"multiple":s=r;default:r!==h&&Ee(e,t,i,r,n,h)}t=d,a=s,n=T,C!=null?pn(e,!!a,C,!1):!!n!=!!a&&(t!=null?pn(e,!!a,t,!0):pn(e,!!a,a?[]:"",!1));return;case"textarea":T=C=null;for(d in a)if(i=a[d],a.hasOwnProperty(d)&&i!=null&&!n.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Ee(e,t,d,null,n,i)}for(s in n)if(i=n[s],r=a[s],n.hasOwnProperty(s)&&(i!=null||r!=null))switch(s){case"value":C=i;break;case"defaultValue":T=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==r&&Ee(e,t,s,i,n,r)}Wo(e,C,T);return;case"option":for(var te in a)if(C=a[te],a.hasOwnProperty(te)&&C!=null&&!n.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Ee(e,t,te,null,n,C)}for(h in n)if(C=n[h],T=a[h],n.hasOwnProperty(h)&&C!==T&&(C!=null||T!=null))switch(h){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Ee(e,t,h,C,n,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in a)C=a[J],a.hasOwnProperty(J)&&C!=null&&!n.hasOwnProperty(J)&&Ee(e,t,J,null,n,C);for(A in n)if(C=n[A],T=a[A],n.hasOwnProperty(A)&&C!==T&&(C!=null||T!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:Ee(e,t,A,C,n,T)}return;default:if(lu(t)){for(var Ce in a)C=a[Ce],a.hasOwnProperty(Ce)&&C!==void 0&&!n.hasOwnProperty(Ce)&&Lc(e,t,Ce,void 0,n,C);for(z in n)C=n[z],T=a[z],!n.hasOwnProperty(z)||C===T||C===void 0&&T===void 0||Lc(e,t,z,C,n,T);return}}for(var b in a)C=a[b],a.hasOwnProperty(b)&&C!=null&&!n.hasOwnProperty(b)&&Ee(e,t,b,null,n,C);for(M in n)C=n[M],T=a[M],!n.hasOwnProperty(M)||C===T||C==null&&T==null||Ee(e,t,M,C,n,T)}var Xc=null,Ic=null;function ur(e){return e.nodeType===9?e:e.ownerDocument}function a0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function n0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kc=null;function i1(){var e=window.event;return e&&e.type==="popstate"?e===Kc?!1:(Kc=e,!0):(Kc=null,!1)}var l0=typeof setTimeout=="function"?setTimeout:void 0,r1=typeof clearTimeout=="function"?clearTimeout:void 0,i0=typeof Promise=="function"?Promise:void 0,u1=typeof queueMicrotask=="function"?queueMicrotask:typeof i0<"u"?function(e){return i0.resolve(null).then(e).catch(c1)}:l0;function c1(e){setTimeout(function(){throw e})}function _a(e){return e==="head"}function r0(e,t){var a=t,n=0,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<n&&8>n){a=n;var s=e.ownerDocument;if(a&1&&Xl(s.documentElement),a&2&&Xl(s.body),a&4)for(a=s.head,Xl(a),s=a.firstChild;s;){var d=s.nextSibling,h=s.nodeName;s[ll]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=d}}if(i===0){e.removeChild(r),$l(t);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=r}while(a);$l(t)}function Pc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pc(a),Jr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function o1(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[ll])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Bt(e.nextSibling),e===null)break}return null}function s1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Bt(e.nextSibling),e===null))return null;return e}function Fc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function d1(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Zc=null;function u0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function c0(e,t,a){switch(t=ur(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Xl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Jr(e)}var Mt=new Map,o0=new Set;function cr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=L.d;L.d={f:f1,r:p1,D:h1,C:g1,L:x1,m:m1,X:b1,S:y1,M:v1};function f1(){var e=ua.f(),t=Wi();return e||t}function p1(e){var t=on(e);t!==null&&t.tag===5&&t.type==="form"?_d(t):ua.r(e)}var Xn=typeof document>"u"?null:document;function s0(e,t,a){var n=Xn;if(n&&typeof t=="string"&&t){var i=Tt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),o0.has(i)||(o0.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),tt(t,"link",e),Pe(t),n.head.appendChild(t)))}}function h1(e){ua.D(e),s0("dns-prefetch",e,null)}function g1(e,t){ua.C(e,t),s0("preconnect",e,t)}function x1(e,t,a){ua.L(e,t,a);var n=Xn;if(n&&e&&t){var i='link[rel="preload"][as="'+Tt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Tt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Tt(a.imageSizes)+'"]')):i+='[href="'+Tt(e)+'"]';var r=i;switch(t){case"style":r=In(e);break;case"script":r=Qn(e)}Mt.has(r)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Mt.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Il(r))||t==="script"&&n.querySelector(Ql(r))||(t=n.createElement("link"),tt(t,"link",e),Pe(t),n.head.appendChild(t)))}}function m1(e,t){ua.m(e,t);var a=Xn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Tt(n)+'"][href="'+Tt(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Qn(e)}if(!Mt.has(r)&&(e=E({rel:"modulepreload",href:e},t),Mt.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ql(r)))return}n=a.createElement("link"),tt(n,"link",e),Pe(n),a.head.appendChild(n)}}}function y1(e,t,a){ua.S(e,t,a);var n=Xn;if(n&&e){var i=sn(n).hoistableStyles,r=In(e);t=t||"default";var s=i.get(r);if(!s){var d={loading:0,preload:null};if(s=n.querySelector(Il(r)))d.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Mt.get(r))&&Vc(e,a);var h=s=n.createElement("link");Pe(h),tt(h,"link",e),h._p=new Promise(function(A,z){h.onload=A,h.onerror=z}),h.addEventListener("load",function(){d.loading|=1}),h.addEventListener("error",function(){d.loading|=2}),d.loading|=4,or(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:d},i.set(r,s)}}}function b1(e,t){ua.X(e,t);var a=Xn;if(a&&e){var n=sn(a).hoistableScripts,i=Qn(e),r=n.get(i);r||(r=a.querySelector(Ql(i)),r||(e=E({src:e,async:!0},t),(t=Mt.get(i))&&$c(e,t),r=a.createElement("script"),Pe(r),tt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function v1(e,t){ua.M(e,t);var a=Xn;if(a&&e){var n=sn(a).hoistableScripts,i=Qn(e),r=n.get(i);r||(r=a.querySelector(Ql(i)),r||(e=E({src:e,async:!0,type:"module"},t),(t=Mt.get(i))&&$c(e,t),r=a.createElement("script"),Pe(r),tt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function d0(e,t,a,n){var i=(i=P.current)?cr(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=In(a.href),a=sn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=In(a.href);var r=sn(i).hoistableStyles,s=r.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=i.querySelector(Il(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Mt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mt.set(e,a),r||S1(i,e,a,s.state))),t&&n===null)throw Error(c(528,""));return s}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Qn(a),a=sn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function In(e){return'href="'+Tt(e)+'"'}function Il(e){return'link[rel="stylesheet"]['+e+"]"}function f0(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function S1(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),tt(t,"link",a),Pe(t),e.head.appendChild(t))}function Qn(e){return'[src="'+Tt(e)+'"]'}function Ql(e){return"script[async]"+e}function p0(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Tt(a.href)+'"]');if(n)return t.instance=n,Pe(n),n;var i=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Pe(n),tt(n,"style",i),or(n,a.precedence,e),t.instance=n;case"stylesheet":i=In(a.href);var r=e.querySelector(Il(i));if(r)return t.state.loading|=4,t.instance=r,Pe(r),r;n=f0(a),(i=Mt.get(i))&&Vc(n,i),r=(e.ownerDocument||e).createElement("link"),Pe(r);var s=r;return s._p=new Promise(function(d,h){s.onload=d,s.onerror=h}),tt(r,"link",n),t.state.loading|=4,or(r,a.precedence,e),t.instance=r;case"script":return r=Qn(a.src),(i=e.querySelector(Ql(r)))?(t.instance=i,Pe(i),i):(n=a,(i=Mt.get(r))&&(n=E({},a),$c(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Pe(i),tt(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,or(n,a.precedence,e));return t.instance}function or(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,s=0;s<n.length;s++){var d=n[s];if(d.dataset.precedence===t)r=d;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Vc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var sr=null;function h0(e,t,a){if(sr===null){var n=new Map,i=sr=new Map;i.set(a,n)}else i=sr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[ll]||r[nt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var d=n.get(s);d?d.push(r):n.set(s,[r])}}return n}function g0(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function w1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function x0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Kl=null;function A1(){}function E1(e,t,a){if(Kl===null)throw Error(c(475));var n=Kl;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=In(a.href),r=e.querySelector(Il(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=dr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,Pe(r);return}r=e.ownerDocument||e,a=f0(a),(i=Mt.get(i))&&Vc(a,i),r=r.createElement("link"),Pe(r);var s=r;s._p=new Promise(function(d,h){s.onload=d,s.onerror=h}),tt(r,"link",a),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=dr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function C1(){if(Kl===null)throw Error(c(475));var e=Kl;return e.stylesheets&&e.count===0&&Jc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Jc(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function dr(){if(this.count--,this.count===0){if(this.stylesheets)Jc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fr=null;function Jc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fr=new Map,t.forEach(T1,e),fr=null,dr.call(e))}function T1(e,t){if(!(t.state.loading&4)){var a=fr.get(e);if(a)var n=a.get(null);else{a=new Map,fr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var s=i[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}i=t.instance,s=i.getAttribute("data-precedence"),r=a.get(s)||n,r===n&&a.set(null,i),a.set(s,i),this.count++,n=dr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Pl={$$typeof:ee,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function D1(e,t,a,n,i,r,s,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fr(0),this.hiddenUpdates=Fr(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function m0(e,t,a,n,i,r,s,d,h,A,z,M){return e=new D1(e,t,a,s,d,h,A,M),t=1,r===!0&&(t|=24),r=mt(3,null,null,t),e.current=r,r.stateNode=e,t=Mu(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},Bu(r),e}function y0(e){return e?(e=wn,e):wn}function b0(e,t,a,n,i,r){i=y0(i),n.context===null?n.context=i:n.pendingContext=i,n=ga(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=xa(e,n,t),a!==null&&(wt(a,e,t),Al(a,e,t))}function v0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Wc(e,t){v0(e,t),(e=e.alternate)&&v0(e,t)}function S0(e){if(e.tag===13){var t=Sn(e,67108864);t!==null&&wt(t,e,67108864),Wc(e,67108864)}}var pr=!0;function _1(e,t,a,n){var i=R.T;R.T=null;var r=L.p;try{L.p=2,eo(e,t,a,n)}finally{L.p=r,R.T=i}}function R1(e,t,a,n){var i=R.T;R.T=null;var r=L.p;try{L.p=8,eo(e,t,a,n)}finally{L.p=r,R.T=i}}function eo(e,t,a,n){if(pr){var i=to(n);if(i===null)qc(e,t,n,hr,a),A0(e,n);else if(N1(i,e,t,a,n))n.stopPropagation();else if(A0(e,n),t&4&&-1<z1.indexOf(e)){for(;i!==null;){var r=on(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Ga(r.pendingLanes);if(s!==0){var d=r;for(d.pendingLanes|=2,d.entangledLanes|=2;s;){var h=1<<31-gt(s);d.entanglements[1]|=h,s&=~h}It(r),(Se&6)===0&&($i=Gt()+500,Hl(0))}}break;case 13:d=Sn(r,2),d!==null&&wt(d,r,2),Wi(),Wc(r,2)}if(r=to(n),r===null&&qc(e,t,n,hr,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else qc(e,t,n,null,a)}}function to(e){return e=ru(e),ao(e)}var hr=null;function ao(e){if(hr=null,e=cn(e),e!==null){var t=g(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=S(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hr=e,null}function w0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gh()){case Uo:return 2;case ko:return 8;case ri:case xh:return 32;case Bo:return 268435456;default:return 32}default:return 32}}var no=!1,Ra=null,za=null,Na=null,Fl=new Map,Zl=new Map,Oa=[],z1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function A0(e,t){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Fl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(t.pointerId)}}function Vl(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=on(t),t!==null&&S0(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function N1(e,t,a,n,i){switch(t){case"focusin":return Ra=Vl(Ra,e,t,a,n,i),!0;case"dragenter":return za=Vl(za,e,t,a,n,i),!0;case"mouseover":return Na=Vl(Na,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return Fl.set(r,Vl(Fl.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,Zl.set(r,Vl(Zl.get(r)||null,e,t,a,n,i)),!0}return!1}function E0(e){var t=cn(e.target);if(t!==null){var a=g(t);if(a!==null){if(t=a.tag,t===13){if(t=S(a),t!==null){e.blockedOn=t,Eh(e.priority,function(){if(a.tag===13){var n=St();n=Zr(n);var i=Sn(a,n);i!==null&&wt(i,a,n),Wc(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=to(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);iu=n,a.target.dispatchEvent(n),iu=null}else return t=on(a),t!==null&&S0(t),e.blockedOn=a,!1;t.shift()}return!0}function C0(e,t,a){gr(e)&&a.delete(t)}function O1(){no=!1,Ra!==null&&gr(Ra)&&(Ra=null),za!==null&&gr(za)&&(za=null),Na!==null&&gr(Na)&&(Na=null),Fl.forEach(C0),Zl.forEach(C0)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,no||(no=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,O1)))}var mr=null;function T0(e){mr!==e&&(mr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){mr===e&&(mr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(ao(n||a)===null)continue;break}var r=on(a);r!==null&&(e.splice(t,3),t-=3,ac(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function $l(e){function t(h){return xr(h,e)}Ra!==null&&xr(Ra,e),za!==null&&xr(za,e),Na!==null&&xr(Na,e),Fl.forEach(t),Zl.forEach(t);for(var a=0;a<Oa.length;a++){var n=Oa[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)E0(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],s=i[ct]||null;if(typeof r=="function")s||T0(a);else if(s){var d=null;if(r&&r.hasAttribute("formAction")){if(i=r,s=r[ct]||null)d=s.formAction;else if(ao(i)!==null)continue}else d=s.action;typeof d=="function"?a[n+1]=d:(a.splice(n,3),n-=3),T0(a)}}}function lo(e){this._internalRoot=e}yr.prototype.render=lo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=St();b0(a,n,e,t,null,null)},yr.prototype.unmount=lo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;b0(e.current,2,null,e,null,null),Wi(),t[un]=null}};function yr(e){this._internalRoot=e}yr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lo();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Oa.length&&t!==0&&t<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&E0(e)}};var D0=u.version;if(D0!=="19.1.0")throw Error(c(527,D0,"19.1.0"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var M1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!br.isDisabled&&br.supportsFiber)try{tl=br.inject(M1),ht=br}catch{}}return Wl.createRoot=function(e,t){if(!f(e))throw Error(c(299));var a=!1,n="",i=Ld,r=Xd,s=Id,d=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(d=t.unstable_transitionCallbacks)),t=m0(e,1,!1,null,null,a,n,i,r,s,d,null),e[un]=t.current,Hc(e),new lo(t)},Wl.hydrateRoot=function(e,t,a){if(!f(e))throw Error(c(299));var n=!1,i="",r=Ld,s=Xd,d=Id,h=null,A=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(h=a.unstable_transitionCallbacks),a.formState!==void 0&&(A=a.formState)),t=m0(e,1,!0,t,a??null,n,i,r,s,d,h,A),t.context=y0(null),a=t.current,n=St(),n=Zr(n),i=ga(n),i.callback=null,xa(a,i,n),a=n,t.current.lanes=a,nl(t,a),It(t),e[un]=t.current,Hc(e),new yr(t)},Wl.version="19.1.0",Wl}var B0;function I1(){if(B0)return uo.exports;B0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),uo.exports=X1(),uo.exports}var Q1=I1();const vr={HEARTS:"hearts",DIAMONDS:"diamonds",CLUBS:"clubs",SPADES:"spades"},de={ACE:"ace",TWO:"2",THREE:"3",FOUR:"4",FIVE:"5",SIX:"6",SEVEN:"7",EIGHT:"8",NINE:"9",TEN:"10",JACK:"jack",QUEEN:"queen",KING:"king",JOKER:"joker"},V={SETUP:"setup",CARD_VIEWING:"card-viewing",PLAYING:"playing",SCORING:"scoring",FINISHED:"finished"},ai={HUMAN:"human",BOT:"bot"},Y0={[de.ACE]:1,[de.TWO]:2,[de.THREE]:3,[de.FOUR]:4,[de.FIVE]:5,[de.SIX]:6,[de.SEVEN]:7,[de.EIGHT]:8,[de.NINE]:9,[de.TEN]:0,[de.JACK]:11,[de.QUEEN]:12,[de.KING]:-2,[de.JOKER]:-4},Je={DECK_SIZE:54,CARDS_PER_PLAYER:4,INITIAL_KNOWN_CARDS:2,ROUNDS_TO_WIN:3,MIN_PLAYERS:2,MAX_PLAYERS:4,JOKER_COUNT:2},K1=[de.ACE,de.TWO,de.THREE,de.FOUR,de.FIVE,de.SIX,de.SEVEN,de.EIGHT,de.NINE,de.TEN,de.JACK,de.QUEEN,de.KING],P1=[vr.HEARTS,vr.DIAMONDS,vr.CLUBS,vr.SPADES],G0={THINKING_DELAY:{min:4e3,max:6e3}},H0=()=>`card-${Math.random().toString(36).substr(2,9)}-${Date.now()}`,q0=()=>{const l={};P1.forEach(u=>{K1.forEach(o=>{const c=H0();l[c]={id:c,suit:u,rank:o,value:Y0[o],isSpecial:o===de.QUEEN||o===de.JACK}})});for(let u=0;u<Je.JOKER_COUNT;u++){const o=H0();l[o]={id:o,suit:null,rank:de.JOKER,value:Y0[de.JOKER],isSpecial:!1}}return l},F1=l=>{const u=[...l];for(let o=u.length-1;o>0;o--){const c=Math.floor(Math.random()*(o+1));[u[o],u[c]]=[u[c],u[o]]}return u},L0=l=>{const u=Object.keys(l);return F1(u)},X0=(l,u)=>{const o=[...l],c=[...u];return o.forEach(f=>{const g=[];for(let S=0;S<Je.CARDS_PER_PLAYER;S++){const D=c.pop();if(!D)throw new Error("Not enough cards in deck to deal to all players");g.push({cardId:D,isRevealed:!1,isKnownToPlayer:S<Je.INITIAL_KNOWN_CARDS,lastSeenTurn:S<Je.INITIAL_KNOWN_CARDS?0:void 0})}f.cards=g}),{updatedPlayers:o,remainingCards:c}},Z1=(l,u)=>l.reduce((o,c)=>{const f=u[c.cardId];return o+(f?f.value:0)},0),I0=(l,u)=>l.isSpecial&&(l.rank===de.QUEEN||l.rank===de.JACK),V1=(l,u,o)=>o==="deck"?l.length>0:u.length>0,Q0=(l,u,o)=>{if(!V1(l,u,o))return{drawnCardId:null,newDrawPile:l,newDiscardPile:u};if(o==="deck"){const c=l[l.length-1],f=l.slice(0,-1);return{drawnCardId:c,newDrawPile:f,newDiscardPile:u}}else{const c=u[u.length-1],f=u.slice(0,-1);return{drawnCardId:c,newDrawPile:l,newDiscardPile:f}}},ja=(l,u)=>[...l,u],jp=l=>l.length===0,mo=(l,u)=>u>=0&&u<Je.CARDS_PER_PLAYER&&l.cards.length===Je.CARDS_PER_PLAYER,$1=(l,u,o,c)=>{if(!mo(l,u))throw new Error(`Cannot replace card at index ${u}`);const f=l.cards[u].cardId;return{updatedPlayer:{...l,cards:l.cards.map((S,D)=>D===u?{...S,cardId:o,isKnownToPlayer:!0,lastSeenTurn:c}:S)},replacedCardId:f}},K0=(l,u,o,c)=>l.map(f=>({...f,cards:f.cards.map(g=>g.cardId===o&&f.id===u?{...g,isKnownToPlayer:!0,lastSeenTurn:c}:g)})),P0=(l,u,o,c,f)=>{const g=l.findIndex(U=>U.id===u),S=l.findIndex(U=>U.id===c);if(g===-1||S===-1)throw new Error("Player not found for card swap");const D=l[g],v=l[S];if(!mo(D,o)||!mo(v,f))throw new Error("Invalid card indices for swap");const y=D.cards[o],E=v.cards[f],k=[...l];return k[g]={...D,cards:D.cards.map((U,B)=>B===o?{...E,isKnownToPlayer:!1,lastSeenTurn:void 0}:U)},k[S]={...v,cards:v.cards.map((U,B)=>B===f?{...y,isKnownToPlayer:!1,lastSeenTurn:void 0}:U)},k},J1=l=>{if(l.length===0)throw new Error("Cannot determine winner with no players");return l.reduce((u,o)=>o.score<u.score?o:u)},W1=(l,u)=>{const o=Object.entries(l).find(([,c])=>c>=u);return o?o[0]:null},Yr=(l,u)=>{if(l.round.phase!==V.PLAYING)return!1;const o=l.players[l.round.currentPlayerIndex];return!o||o.id!==u?!1:o.isActive},Gr=(l,u)=>!Yr(l,u)||l.round.stopCalled?!1:l.round.phase===V.PLAYING,_o=l=>!!(jp(l.deck.drawPile)||l.round.stopCalled&&l.round.remainingTurns<=0),ex=l=>_o(l),tx=(l,u)=>(l+1)%u,F0=l=>{const u=[];(l.players.length<Je.MIN_PLAYERS||l.players.length>Je.MAX_PLAYERS)&&u.push(`Invalid player count: ${l.players.length}`),(l.round.phase===V.PLAYING||l.round.phase===V.SCORING)&&l.players.forEach((f,g)=>{f.cards.length!==Je.CARDS_PER_PLAYER&&u.push(`Player ${g} has ${f.cards.length} cards, expected ${Je.CARDS_PER_PLAYER}`)}),(l.round.currentPlayerIndex<0||l.round.currentPlayerIndex>=l.players.length)&&u.push(`Invalid current player index: ${l.round.currentPlayerIndex}`);const o=l.deck.drawPile.length+l.deck.discardPile.length+l.players.reduce((f,g)=>f+g.cards.length,0);o!==Je.DECK_SIZE&&u.push(`Total cards in game: ${o}, expected: ${Je.DECK_SIZE}`);const c=Object.values(l.match.roundWins).reduce((f,g)=>f+g,0);return c!==l.match.currentRound-1&&l.round.phase!==V.SETUP&&u.push(`Round wins (${c}) don't match current round (${l.match.currentRound})`),u},Mr=(l,u,o)=>!Yr(l,u)||l.ui.selectedCard?!1:o==="deck"?l.deck.drawPile.length>0:l.deck.discardPile.length>0,Up=(l,u,o)=>!(!Yr(l,u)||!l.ui.selectedCard||o<0||o>=Je.CARDS_PER_PLAYER),jr=l=>{const u=[],o=l.players[l.round.currentPlayerIndex];if(!o||l.round.phase!==V.PLAYING)return u;if(!!!l.ui.selectedCard)Mr(l,o.id,"deck")&&u.push("DRAW_FROM_DECK"),Mr(l,o.id,"discard")&&u.push("DRAW_FROM_DISCARD");else{for(let g=0;g<Je.CARDS_PER_PLAYER;g++)Up(l,o.id,g)&&u.push(`REPLACE_CARD_${g}`);u.push("DISCARD_DRAWN_CARD");const f=l.ui.selectedCard?l.cards[l.ui.selectedCard]:null;f&&kp(f)&&u.push("USE_SPECIAL_ABILITY")}return Gr(l,o.id)&&u.push("CALL_STOP"),u},kp=(l,u)=>l.isSpecial&&(l.rank===de.QUEEN||l.rank===de.JACK),ax=(l,u,o)=>{if(!Yr(l,u))return!1;const c=!!l.ui.selectedCard;switch(o){case"DRAW_FROM_DECK":case"DRAW_FROM_DISCARD":return!c;case"REPLACE_CARD":case"DISCARD_DRAWN_CARD":return c;case"CALL_STOP":return Gr(l,u);case"USE_SPECIAL_ABILITY":{if(!c)return!1;const f=l.cards[l.ui.selectedCard];return kp(f)}default:return!1}},nx=l=>{const u=l.players[l.round.currentPlayerIndex],o=l.players.filter(E=>E.isActive),c=l.round.turnNumber,f=c/l.players.length,g=l.players.map(E=>E.score).filter(E=>E>0),S=g.length>0?g.reduce((E,k)=>E+k,0)/g.length:0,D=Je.DECK_SIZE,v=l.deck.drawPile.length,y=(D-v)/D*100;return{gameId:l.gameId,phase:l.round.phase,currentRound:l.match.currentRound,turnNumber:l.round.turnNumber,playerCount:l.players.length,activePlayers:o.length,currentPlayerName:u?.name||"None",currentPlayerId:u?.id||null,cardsInDeck:l.deck.drawPile.length,cardsInDiscard:l.deck.discardPile.length,deckEmpty:jp(l.deck.drawPile),deckProgress:Math.round(y),totalTurns:c,averageTurnsPerPlayer:Math.round(f*100)/100,roundsToWin:l.match.roundsToWin,stopCalled:l.round.stopCalled,stopCalledBy:l.round.stopCalledBy,remainingTurns:l.round.remainingTurns,matchWinner:l.match.winner,roundWins:l.match.roundWins,averageScore:Math.round(S*100)/100,playerScores:l.round.phase===V.SCORING||l.round.phase===V.FINISHED?l.players.map(E=>({id:E.id,name:E.name,score:E.score})):null,isValidState:F0(l).length===0,stateErrors:F0(l)}},lx=l=>{const u=l.players[l.round.currentPlayerIndex],o=jr(l),c=!!l.ui.selectedCard;return{currentPlayer:{id:u?.id||null,name:u?.name||"None",type:u?.type||null,isActive:u?.isActive||!1,cardCount:u?.cards.length||0,score:u?.score||0},turnState:{hasDrawnCard:c,drawnCardId:l.ui.selectedCard,availableActions:o,canCallStop:u?Gr(l,u.id):!1,validActionsCount:o.length},gameProgression:{phase:l.round.phase,turnNumber:l.round.turnNumber,roundNumber:l.match.currentRound,stopCalled:l.round.stopCalled,remainingTurns:l.round.remainingTurns,shouldEnd:ex(l)},deckState:{drawPileSize:l.deck.drawPile.length,discardPileSize:l.deck.discardPile.length,isEmpty:l.deck.isEmpty,topDiscardCard:l.deck.discardPile.length>0?l.deck.discardPile[l.deck.discardPile.length-1]:null}}},ix=()=>`player-${Math.random().toString(36).substr(2,9)}-${Date.now()}`,rx=(l,u,o)=>({id:o!==void 0?`player-${o}`:ix(),name:l,type:u,cards:[],score:0,isActive:!0,roundWins:0}),ux=(l,u)=>{const o=[];for(let c=0;c<l;c++){const f=c===0,g=f?"Player":`Bot ${c}`,S=u[c]||g;o.push(rx(S,f?ai.HUMAN:ai.BOT,c))}return o},Kn=l=>{const u=l.round.currentPlayerIndex;return l.players[u]||null},cx=l=>l.type===ai.BOT;class Sr{static decideDraw(u){const o=Kn(u);if(!o)return null;const c=Mr(u,o.id,"deck"),f=Mr(u,o.id,"discard");return!c&&!f?null:c&&!f?"deck":!c&&f?"discard":Math.random()>.3?"deck":"discard"}static decideReplace(u){const o=Kn(u);if(!o||!u.ui.selectedCard)return null;const c=[];for(let f=0;f<Je.CARDS_PER_PLAYER;f++)Up(u,o.id,f)&&c.push(f);return c.length===0||Math.random()>.7?null:c[Math.floor(Math.random()*c.length)]}static decideStop(u){const o=Kn(u);return!o||!Gr(u,o.id)?!1:Math.random()<.1}static decideSpecialAbility(){return Math.random()>.5}static decidePeekTarget(u){const o=Kn(u);if(!o)return null;const c=[];return u.players.forEach(f=>{f.id!==o.id&&f.cards.forEach(g=>{g.isKnownToPlayer||c.push(g.cardId)})}),c.length>0?c[Math.floor(Math.random()*c.length)]:null}static decideSwapTarget(u){const o=Kn(u);if(!o)return null;const c=Math.floor(Math.random()*o.cards.length),f=u.players.filter(D=>D.id!==o.id);if(f.length===0)return null;const g=f[Math.floor(Math.random()*f.length)],S=Math.floor(Math.random()*g.cards.length);return{playerCardIndex:c,targetPlayerId:g.id,targetCardIndex:S}}static generateMove(u){const o=Kn(u);if(!o||!cx(o))return null;if(!!u.ui.selectedCard){if(this.decideStop(u))return{action:"call_stop"};const f=this.decideReplace(u);return f!==null?{action:"replace_card",cardIndex:f}:{action:"discard_card"}}else{const f=this.decideDraw(u);return f?{action:f==="deck"?"draw_deck":"draw_discard"}:null}}}const ox=(l=G0.THINKING_DELAY.min,u=G0.THINKING_DELAY.max)=>{const o=Math.random()*(u-l)+l;return new Promise(c=>setTimeout(c,o))},Bp={gameId:"",gameMode:"local",maxPlayers:4,match:{currentRound:0,roundsToWin:Je.ROUNDS_TO_WIN,roundWins:{},winner:null},round:{phase:V.SETUP,currentPlayerIndex:0,stopCalled:!1,stopCalledBy:null,remainingTurns:0,autoStopped:!1,turnNumber:0},players:[],cards:{},deck:{drawPile:[],discardPile:[],isEmpty:!0},lastAction:null,ui:{selectedCard:null,drawnFrom:null,showingPeekCard:null,animationQueue:[],isActionInProgress:!1,currentModal:null,isBotThinking:!1,botThinkingStartTime:null,replacingCard:null,jackSwapMode:null,queenPeekMode:null,jackSwapAnimation:null,turnTimer:null,startCountdown:null}},Ua=(l,u)=>{switch(u.type){case"START_GAME":{const{playerCount:o,playerNames:c}=u.payload,f=q0(),g=L0(f),S=ux(o,c),{updatedPlayers:D,remainingCards:v}=X0(S,g),y=[v.pop()],E=v,k={};return D.forEach(U=>{k[U.id]=0}),{...l,gameId:`game-${Date.now()}`,cards:f,players:D,deck:{drawPile:E,discardPile:y,isEmpty:E.length===0},match:{...l.match,currentRound:1,roundWins:k},round:{...l.round,phase:V.CARD_VIEWING,currentPlayerIndex:0,turnNumber:1},lastAction:{type:u.type,playerId:"system",details:u.payload,timestamp:Date.now()}}}case"START_PLAYING":return{...l,round:{...l.round,phase:V.PLAYING},lastAction:{type:u.type,playerId:"system",details:{},timestamp:Date.now()}};case"START_ROUND":{if(l.match.winner)return{...l,round:{...l.round,phase:V.FINISHED}};const o=q0(),c=L0(o),f=l.players.map(y=>({...y,cards:[],score:0,roundWins:l.match.roundWins[y.id]||0})),{updatedPlayers:g,remainingCards:S}=X0(f,c),D=[S.pop()],v=S;return{...l,cards:o,players:g,deck:{drawPile:v,discardPile:D,isEmpty:v.length===0},match:{...l.match,currentRound:l.match.currentRound+1},round:{...l.round,phase:V.PLAYING,currentPlayerIndex:0,stopCalled:!1,stopCalledBy:null,remainingTurns:0,autoStopped:!1,turnNumber:1},ui:{...l.ui,currentModal:null,selectedCard:null,showingPeekCard:null},lastAction:{type:u.type,playerId:"system",details:{},timestamp:Date.now()}}}case"END_ROUND":{const o=l.players.map(D=>{const v=Z1(D.cards,l.cards);return{...D,score:v,cards:D.cards.map(y=>({...y,isRevealed:!0}))}}),c=J1(o),f={...l.match.roundWins};f[c.id]=(f[c.id]||0)+1;const g=o.map(D=>({...D,roundWins:f[D.id]||0})),S=W1(f,l.match.roundsToWin);return{...l,players:g,match:{...l.match,roundWins:f,winner:S},round:{...l.round,phase:S?V.FINISHED:V.SCORING},ui:{...l.ui,currentModal:"ROUND_RESULTS"},lastAction:{type:u.type,playerId:"system",details:{roundWinner:c.id,scores:g.map(D=>({id:D.id,score:D.score}))},timestamp:Date.now()}}}case"END_GAME":return{...l,round:{...l.round,phase:V.FINISHED},match:{...l.match,winner:u.payload.winnerId},lastAction:{type:u.type,playerId:"system",details:u.payload,timestamp:Date.now()}};case"RESET_GAME":return{...Bp,gameId:`game-${Date.now()}`};case"DRAW_FROM_DECK":{const{playerId:o}=u.payload,{drawnCardId:c,newDrawPile:f,newDiscardPile:g}=Q0(l.deck.drawPile,l.deck.discardPile,"deck");if(!c)return l;const D=l.players.find(E=>E.id===o)?.type==="bot",v=l.cards[c],y=v&&I0(v);return{...l,deck:{...l.deck,drawPile:f,discardPile:g,isEmpty:f.length===0},ui:{...l.ui,selectedCard:c,drawnFrom:"deck",currentModal:null,jackSwapMode:y&&!D&&v.rank==="jack"?{isActive:!0,selectedOwnCardIndex:null,drawnCardId:c}:l.ui.jackSwapMode,queenPeekMode:y&&!D&&v.rank==="queen"?{isActive:!0,drawnCardId:c}:l.ui.queenPeekMode},lastAction:{type:u.type,playerId:o,details:{drawnCardId:c,hasSpecialAbility:y},timestamp:Date.now()}}}case"DRAW_FROM_DISCARD":{const{playerId:o}=u.payload,{drawnCardId:c,newDrawPile:f,newDiscardPile:g}=Q0(l.deck.drawPile,l.deck.discardPile,"discard");return c?{...l,deck:{...l.deck,drawPile:f,discardPile:g},ui:{...l.ui,selectedCard:c,drawnFrom:"discard"},lastAction:{type:u.type,playerId:o,details:{drawnCardId:c},timestamp:Date.now()}}:l}case"REPLACE_CARD":{const{playerId:o,cardIndex:c,drawnCardId:f}=u.payload,g=l.players.findIndex(F=>F.id===o);if(g===-1||c<0||c>=Je.CARDS_PER_PLAYER)return l;const S=l.players[g];if(!f||l.ui.isActionInProgress)return l;const{updatedPlayer:D,replacedCardId:v}=$1(S,c,f,l.round.turnNumber),y=[...l.players];y[g]=D;const E=ja(l.deck.discardPile,v),k=l.cards[f],U=I0(k),Y=l.players.find(F=>F.id===o)?.type==="bot";return{...l,players:y,deck:{...l.deck,discardPile:E},ui:{...l.ui,selectedCard:null,currentModal:U&&!Y?k.rank:null,isActionInProgress:!0,replacingCard:l.ui.replacingCard?{...l.ui.replacingCard,phase:"swapping-in"}:null},lastAction:{type:u.type,playerId:o,details:{cardIndex:c,drawnCardId:f,replacedCardId:v,hasSpecialAbility:U},timestamp:Date.now()}}}case"DISCARD_DRAWN_CARD":{const{playerId:o,cardId:c}=u.payload,f=c||l.ui.selectedCard;if(!f)return l;const g=ja(l.deck.discardPile,f);return{...l,deck:{...l.deck,discardPile:g},ui:{...l.ui,selectedCard:null},lastAction:{type:u.type,playerId:o,details:{cardId:f},timestamp:Date.now()}}}case"END_TURN":{const{playerId:o}=u.payload,c=tx(l.round.currentPlayerIndex,l.players.length);let f=_o(l),g=l.round.remainingTurns;l.round.stopCalled&&(g=Math.max(0,l.round.remainingTurns-1),g===0&&(f=!0));const S={...l,round:{...l.round,currentPlayerIndex:c,turnNumber:l.round.turnNumber+1,remainingTurns:g},ui:{...l.ui,selectedCard:null,drawnFrom:null,showingPeekCard:null,isActionInProgress:!1},lastAction:{type:u.type,playerId:o,details:{shouldEndRound:f},timestamp:Date.now()}};return f?Ua(S,{type:"END_ROUND",payload:{}}):S}case"CALL_STOP":return{...l,round:{...l.round,stopCalled:!0,stopCalledBy:u.payload.playerId,remainingTurns:l.players.length-1},lastAction:{type:u.type,playerId:u.payload.playerId,details:{},timestamp:Date.now()}};case"PEEK_CARD":{const{playerId:o,targetCardId:c}=u.payload,f=K0(l.players,o,c,l.round.turnNumber),g=l.ui.selectedCard,S=g?ja(l.deck.discardPile,g):l.deck.discardPile,D={...l,players:f,deck:{...l.deck,discardPile:S},ui:{...l.ui,selectedCard:null,showingPeekCard:c,currentModal:"peek-result"},lastAction:{type:u.type,playerId:o,details:{targetCardId:c,discardedCardId:g},timestamp:Date.now()}};return Ua(D,{type:"END_TURN",payload:{playerId:o}})}case"SWAP_CARDS":{const{playerId:o,playerCardIndex:c,targetPlayerId:f,targetCardIndex:g}=u.payload,S=l.players.findIndex(E=>E.id===o),D=l.players.findIndex(E=>E.id===f);if(S===-1||D===-1)return l;const v=l.players[S],y=l.players[D];return c>=v.cards.length||g>=y.cards.length?l:{...l,ui:{...l.ui,jackSwapAnimation:{isActive:!0,playerCardInfo:{playerId:o,cardIndex:c},targetCardInfo:{playerId:f,cardIndex:g},phase:"swapping-out",startTime:Date.now()},jackSwapMode:null},lastAction:{type:u.type,playerId:o,details:{playerCardIndex:c,targetPlayerId:f,targetCardIndex:g},timestamp:Date.now()}}}case"JACK_SWAP_ANIMATION_PHASE":{const{phase:o}=u.payload;return l.ui.jackSwapAnimation?.isActive?{...l,ui:{...l.ui,jackSwapAnimation:{...l.ui.jackSwapAnimation,phase:o}}}:l}case"COMPLETE_JACK_SWAP_ANIMATION":{if(!l.ui.jackSwapAnimation?.isActive)return l;const{playerCardInfo:o,targetCardInfo:c}=l.ui.jackSwapAnimation;if(!o||!c)return l;const f=P0(l.players,o.playerId,o.cardIndex,c.playerId,c.cardIndex),g=l.ui.selectedCard,S=g?ja(l.deck.discardPile,g):l.deck.discardPile,D={...l,players:f,deck:{...l.deck,discardPile:S},ui:{...l.ui,selectedCard:null,currentModal:null,jackSwapAnimation:null}};return Ua(D,{type:"END_TURN",payload:{playerId:o.playerId}})}case"USE_SPECIAL_ABILITY":{const{playerId:o,cardId:c,abilityType:f}=u.payload,g=f==="peek"?"PEEK_SELECTION":"SWAP_SELECTION";return{...l,ui:{...l.ui,currentModal:g},lastAction:{type:u.type,playerId:o,details:{cardId:c,abilityType:f},timestamp:Date.now()}}}case"SKIP_SPECIAL_ABILITY":{const{playerId:o,cardId:c}=u.payload;return{...l,ui:{...l.ui,currentModal:null},lastAction:{type:u.type,playerId:o,details:{cardId:c},timestamp:Date.now()}}}case"SELECT_CARD":return{...l,ui:{...l.ui,selectedCard:u.payload.cardId}};case"CLEAR_SELECTION":return{...l,ui:{...l.ui,selectedCard:null}};case"SHOW_PEEK_RESULT":return{...l,ui:{...l.ui,showingPeekCard:u.payload.cardId}};case"HIDE_PEEK_RESULT":return{...l,ui:{...l.ui,showingPeekCard:null}};case"SHOW_MODAL":return{...l,ui:{...l.ui,currentModal:u.payload.modalType}};case"HIDE_MODAL":return{...l,ui:{...l.ui,currentModal:null}};case"ADD_ANIMATION":return{...l,ui:{...l.ui,animationQueue:[...l.ui.animationQueue,u.payload.animation]}};case"COMPLETE_ANIMATION":return{...l,ui:{...l.ui,animationQueue:l.ui.animationQueue.filter(o=>o.id!==u.payload.animationId)}};case"SET_ACTION_IN_PROGRESS":return{...l,ui:{...l.ui,isActionInProgress:u.payload.inProgress}};case"SET_BOT_THINKING":return{...l,ui:{...l.ui,isBotThinking:u.payload.thinking,botThinkingStartTime:u.payload.thinking?Date.now():null}};case"CLEAR_BOT_THINKING":return{...l,ui:{...l.ui,isBotThinking:!1,botThinkingStartTime:null}};case"BOT_MAKE_MOVE":case"BOT_THINKING":return{...l,lastAction:{type:u.type,playerId:u.payload.playerId,details:u.payload,timestamp:Date.now()}};case"START_TURN_TIMER":{const{duration:o}=u.payload,c=Date.now();return{...l,ui:{...l.ui,turnTimer:{isActive:!0,startTime:c,duration:o,remainingTime:o}}}}case"UPDATE_TURN_TIMER":{const{remainingTime:o}=u.payload;return l.ui.turnTimer?{...l,ui:{...l.ui,turnTimer:{...l.ui.turnTimer,remainingTime:o}}}:l}case"STOP_TURN_TIMER":return{...l,ui:{...l.ui,turnTimer:null}};case"TIMER_EXPIRED":return{...l,ui:{...l.ui,turnTimer:null}};case"START_COUNTDOWN":{const{duration:o}=u.payload,c=Date.now();return{...l,ui:{...l.ui,startCountdown:{isActive:!0,startTime:c,duration:o,remainingTime:o}}}}case"UPDATE_COUNTDOWN":{const{remainingTime:o}=u.payload;return l.ui.startCountdown?{...l,ui:{...l.ui,startCountdown:{...l.ui.startCountdown,remainingTime:o}}}:l}case"STOP_COUNTDOWN":return{...l,ui:{...l.ui,startCountdown:null}};case"COUNTDOWN_EXPIRED":return{...l,ui:{...l.ui,startCountdown:null}};case"START_CARD_REPLACEMENT":return{...l,ui:{...l.ui,replacingCard:{playerId:u.payload.playerId,cardIndex:u.payload.cardIndex,phase:"swapping-out"}},lastAction:{type:u.type,playerId:u.payload.playerId,details:u.payload,timestamp:Date.now()}};case"COMPLETE_CARD_REPLACEMENT":return{...l,ui:{...l.ui,replacingCard:null},lastAction:{type:u.type,playerId:"system",details:{},timestamp:Date.now()}};case"START_JACK_SWAP_MODE":return{...l,ui:{...l.ui,jackSwapMode:{isActive:!0,selectedOwnCardIndex:null,drawnCardId:u.payload.drawnCardId},currentModal:null},lastAction:{type:u.type,playerId:"system",details:u.payload,timestamp:Date.now()}};case"SELECT_OWN_CARD_FOR_SWAP":return{...l,ui:{...l.ui,jackSwapMode:l.ui.jackSwapMode?{...l.ui.jackSwapMode,selectedOwnCardIndex:u.payload.cardIndex}:null},lastAction:{type:u.type,playerId:"system",details:u.payload,timestamp:Date.now()}};case"COMPLETE_JACK_SWAP":{const{targetPlayerId:o,targetCardIndex:c}=u.payload,f=l.ui.jackSwapMode;if(!f||f.selectedOwnCardIndex===null)return l;const g=l.players.find(y=>y.id===l.players[l.round.currentPlayerIndex].id);if(!g)return l;const S=P0(l.players,g.id,f.selectedOwnCardIndex,o,c),D=ja(l.deck.discardPile,f.drawnCardId),v={...l,players:S,deck:{...l.deck,discardPile:D},ui:{...l.ui,selectedCard:null,jackSwapMode:null},lastAction:{type:u.type,playerId:g.id,details:{playerCardIndex:f.selectedOwnCardIndex,targetPlayerId:o,targetCardIndex:c,discardedCardId:f.drawnCardId},timestamp:Date.now()}};return Ua(v,{type:"END_TURN",payload:{playerId:g.id}})}case"CANCEL_JACK_SWAP":{const o=l.ui.jackSwapMode,c=l.players.find(S=>S.id===l.players[l.round.currentPlayerIndex].id),f=o?ja(l.deck.discardPile,o.drawnCardId):l.deck.discardPile,g={...l,deck:{...l.deck,discardPile:f},ui:{...l.ui,selectedCard:null,jackSwapMode:null},lastAction:{type:u.type,playerId:c?.id||"system",details:{discardedCardId:o?.drawnCardId},timestamp:Date.now()}};return c?Ua(g,{type:"END_TURN",payload:{playerId:c.id}}):g}case"START_QUEEN_PEEK_MODE":return{...l,ui:{...l.ui,queenPeekMode:{isActive:!0,drawnCardId:u.payload.drawnCardId},currentModal:null},lastAction:{type:u.type,playerId:"system",details:u.payload,timestamp:Date.now()}};case"COMPLETE_QUEEN_PEEK":{const{targetCardId:o}=u.payload,c=l.ui.queenPeekMode,f=l.players.find(v=>v.id===l.players[l.round.currentPlayerIndex].id);if(!c||!f)return l;const g=K0(l.players,f.id,o,l.round.turnNumber),S=ja(l.deck.discardPile,c.drawnCardId),D={...l,players:g,deck:{...l.deck,discardPile:S},ui:{...l.ui,selectedCard:null,queenPeekMode:null,showingPeekCard:o},lastAction:{type:u.type,playerId:f.id,details:{targetCardId:o,discardedCardId:c.drawnCardId},timestamp:Date.now()}};return Ua(D,{type:"END_TURN",payload:{playerId:f.id}})}case"CANCEL_QUEEN_PEEK":{const o=l.ui.queenPeekMode,c=l.players.find(S=>S.id===l.players[l.round.currentPlayerIndex].id),f=o?ja(l.deck.discardPile,o.drawnCardId):l.deck.discardPile,g={...l,deck:{...l.deck,discardPile:f},ui:{...l.ui,selectedCard:null,queenPeekMode:null},lastAction:{type:u.type,playerId:c?.id||"system",details:{discardedCardId:o?.drawnCardId},timestamp:Date.now()}};return c?Ua(g,{type:"END_TURN",payload:{playerId:c.id}}):g}case"UPDATE_PLAYER_KNOWLEDGE":case"REVEAL_CARD":case"UPDATE_SCORES":case"SET_CURRENT_PLAYER":case"INCREMENT_TURN":return{...l,lastAction:{type:u.type,playerId:"system",details:u.payload,timestamp:Date.now()}};default:return console.warn(`Unhandled action type: ${u.type}`),l}},Yp=Ye.createContext(null);class sx{dispatch;gameState;constructor(u,o){this.dispatch=u,this.gameState=o}updateGameState(u){this.gameState=u}processGameFlow(){switch(this.gameState.round.phase){case V.SETUP:break;case V.CARD_VIEWING:this.handleCardViewingPhase();break;case V.PLAYING:this.handlePlayingPhase();break;case V.SCORING:this.handleScoringPhase();break;case V.FINISHED:this.handleFinishedPhase();break}}handleCardViewingPhase(){}handlePlayingPhase(){if(_o(this.gameState)){this.dispatch({type:"END_ROUND",payload:{}});return}const u=this.getCurrentPlayer();u&&u.type===ai.BOT&&!this.gameState.ui.isBotThinking&&(this.dispatch({type:"SET_BOT_THINKING",payload:{thinking:!0}}),ox().then(()=>{this.dispatch({type:"CLEAR_BOT_THINKING",payload:{}}),this.processBotTurn()}))}handleScoringPhase(){console.log("Round scoring completed. Waiting for user to continue.")}handleFinishedPhase(){console.log("Game finished. Winner:",this.gameState.match.winner)}processBotTurn(){const u=this.getCurrentPlayer();if(!u||u.type!==ai.BOT)return;const o=this.gameState.ui.selectedCard;if(o){const f=this.gameState.cards[o];if(f&&f.isSpecial){this.processBotSpecialAbility(u,f);return}}const c=Sr.generateMove(this.gameState);if(!c){console.warn("Bot could not generate a valid move"),this.endTurn();return}switch(console.log(`Bot ${u.name} making move:`,c.action),c.action){case"draw_deck":this.dispatch({type:"DRAW_FROM_DECK",payload:{playerId:u.id}});break;case"draw_discard":this.dispatch({type:"DRAW_FROM_DISCARD",payload:{playerId:u.id}});break;case"replace_card":if(c.cardIndex!==void 0&&this.gameState.ui.selectedCard){const f=c.cardIndex,g=this.gameState.ui.selectedCard;this.dispatch({type:"START_CARD_REPLACEMENT",payload:{playerId:u.id,cardIndex:f}}),setTimeout(()=>{this.dispatch({type:"REPLACE_CARD",payload:{playerId:u.id,cardIndex:f,drawnCardId:g}})},400),setTimeout(()=>this.endTurn(),1e3)}break;case"discard_card":this.gameState.ui.selectedCard&&(this.dispatch({type:"DISCARD_DRAWN_CARD",payload:{playerId:u.id,cardId:this.gameState.ui.selectedCard}}),setTimeout(()=>this.endTurn(),500));break;case"call_stop":this.dispatch({type:"CALL_STOP",payload:{playerId:u.id}}),setTimeout(()=>this.endTurn(),500);break;default:console.warn("Unknown bot action:",c.action),this.endTurn()}}processBotSpecialAbility(u,o){if(!Sr.decideSpecialAbility()){this.dispatch({type:"DISCARD_DRAWN_CARD",payload:{playerId:u.id,cardId:o.id}}),setTimeout(()=>this.endTurn(),500);return}if(o.rank===de.QUEEN){const c=Sr.decidePeekTarget(this.gameState);c?this.dispatch({type:"PEEK_CARD",payload:{playerId:u.id,targetCardId:c}}):this.dispatch({type:"DISCARD_DRAWN_CARD",payload:{playerId:u.id,cardId:o.id}}),setTimeout(()=>this.endTurn(),500)}else if(o.rank===de.JACK){const c=Sr.decideSwapTarget(this.gameState);c?this.dispatch({type:"SWAP_CARDS",payload:{playerId:u.id,playerCardIndex:c.playerCardIndex,targetPlayerId:c.targetPlayerId,targetCardIndex:c.targetCardIndex}}):this.dispatch({type:"DISCARD_DRAWN_CARD",payload:{playerId:u.id,cardId:o.id}}),setTimeout(()=>this.endTurn(),500)}else this.processBotTurn()}endTurn(){const u=this.getCurrentPlayer();u&&this.dispatch({type:"END_TURN",payload:{playerId:u.id}})}nextRound(){this.dispatch({type:"START_ROUND",payload:{}})}resetGame(){this.dispatch({type:"RESET_GAME",payload:{}})}validateGameState(){const u=[];this.gameState.players.length===0&&u.push("No players in game"),this.gameState.round.currentPlayerIndex>=this.gameState.players.length&&u.push("Invalid current player index");const o=this.gameState.deck.drawPile.length+this.gameState.deck.discardPile.length+this.gameState.players.reduce((c,f)=>c+f.cards.length,0);return o!==54&&u.push(`Total cards in game: ${o}, expected: 54`),u}getGameStateInfo(){const u=this.getCurrentPlayer(),o=jr(this.gameState);return{phase:this.gameState.round.phase,currentPlayer:u?{id:u.id,name:u.name,type:u.type}:null,turnNumber:this.gameState.round.turnNumber,round:this.gameState.match.currentRound,availableActions:o,deckSize:this.gameState.deck.drawPile.length,discardSize:this.gameState.deck.discardPile.length,stopCalled:this.gameState.round.stopCalled,remainingTurns:this.gameState.round.remainingTurns,validationErrors:this.validateGameState()}}forceProgressScoring(){this.gameState.round.phase===V.SCORING&&(this.gameState.match.winner?this.dispatch({type:"END_GAME",payload:{winnerId:this.gameState.match.winner}}):this.nextRound())}getCurrentPlayer(){return this.gameState.players[this.gameState.round.currentPlayerIndex]||null}}const dx=(l,u)=>new sx(l,u),fx=({children:l})=>{const[u,o]=Ye.useReducer(Ua,Bp),c=Ye.useMemo(()=>{try{return dx(o,u)}catch(O){return console.error("Error creating GameFlowManager:",O),null}},[o]),f=Ye.useCallback(()=>{if(c)try{c.updateGameState(u),c.processGameFlow()}catch(O){console.error("Error processing game flow:",O)}else console.warn("GameFlowManager is not available")},[c,u]);Ye.useEffect(()=>{if(c){const O=setTimeout(f,100);return()=>clearTimeout(O)}},[u.round.phase,u.round.currentPlayerIndex,u.ui.selectedCard,f]),Ye.useEffect(()=>{if(u.ui.turnTimer?.isActive){const O=setInterval(()=>{const P=Date.now()-u.ui.turnTimer.startTime,Te=Math.max(0,u.ui.turnTimer.duration-P);if(Te<=0){o({type:"TIMER_EXPIRED",payload:{}});const xe=X();xe&&o({type:"END_TURN",payload:{playerId:xe.id}})}else o({type:"UPDATE_TURN_TIMER",payload:{remainingTime:Te}})},100);return()=>clearInterval(O)}},[u.ui.turnTimer?.isActive,u.ui.turnTimer?.startTime]),Ye.useEffect(()=>{if(u.ui.startCountdown?.isActive){const O=setInterval(()=>{const P=Date.now()-u.ui.startCountdown.startTime,Te=Math.max(0,u.ui.startCountdown.duration-P);Te<=0?(o({type:"COUNTDOWN_EXPIRED",payload:{}}),o({type:"START_PLAYING",payload:{}})):o({type:"UPDATE_COUNTDOWN",payload:{remainingTime:Te}})},100);return()=>clearInterval(O)}},[u.ui.startCountdown?.isActive,u.ui.startCountdown?.startTime]),Ye.useEffect(()=>{if(u.round.phase===V.CARD_VIEWING&&!u.ui.startCountdown?.isActive){const O=setTimeout(()=>{o({type:"START_COUNTDOWN",payload:{duration:5e3}})},100);return()=>clearTimeout(O)}},[u.round.phase,u.ui.startCountdown?.isActive]);const g=(O,I)=>{o({type:"START_GAME",payload:{playerCount:O,playerNames:I}})},S=O=>{o(O)},D=()=>{const O=X();O&&(u.ui.turnTimer?.isActive&&o({type:"STOP_TURN_TIMER",payload:{}}),o({type:"END_TURN",payload:{playerId:O.id}}))},v=()=>{const O=X();O&&Ke()&&(u.ui.turnTimer?.isActive&&o({type:"STOP_TURN_TIMER",payload:{}}),o({type:"CALL_STOP",payload:{playerId:O.id}}),setTimeout(()=>{o({type:"END_TURN",payload:{playerId:O.id}})},500))},y=()=>{const O=X();O&&be()&&o({type:"DRAW_FROM_DECK",payload:{playerId:O.id}})},E=()=>{const O=X();O&&Ue()&&o({type:"DRAW_FROM_DISCARD",payload:{playerId:O.id}})},k=O=>{const I=X(),P=u.ui.selectedCard;I&&P&&(o({type:"START_CARD_REPLACEMENT",payload:{playerId:I.id,cardIndex:O}}),setTimeout(()=>{o({type:"REPLACE_CARD",payload:{playerId:I.id,cardIndex:O,drawnCardId:P}})},400),I.type==="human"?o({type:"START_TURN_TIMER",payload:{duration:5e3}}):setTimeout(()=>{o({type:"END_TURN",payload:{playerId:I.id}})},500))},U=()=>{const O=X(),I=u.ui.selectedCard;O&&I&&(o({type:"DISCARD_DRAWN_CARD",payload:{playerId:O.id,cardId:I}}),setTimeout(()=>{o({type:"END_TURN",payload:{playerId:O.id}})},500))},B=O=>{const I=X();I&&o({type:"PEEK_CARD",payload:{playerId:I.id,targetCardId:O}})},Y=(O,I,P)=>{const Te=X();Te&&o({type:"SWAP_CARDS",payload:{playerId:Te.id,playerCardIndex:O,targetPlayerId:I,targetCardIndex:P}})},F=(O,I)=>{const P=X();P&&o({type:"USE_SPECIAL_ABILITY",payload:{playerId:P.id,cardId:O,abilityType:I}})},fe=O=>{const I=X();I&&o({type:"SKIP_SPECIAL_ABILITY",payload:{playerId:I.id,cardId:O}})},he=O=>{o({type:"SELECT_CARD",payload:{cardId:O}})},ae=()=>{o({type:"CLEAR_SELECTION",payload:{}})},ee=(O,I)=>{o({type:"SHOW_MODAL",payload:{modalType:O,data:I}})},ne=()=>{o({type:"HIDE_MODAL",payload:{}})},G=()=>{c?c.processBotTurn():console.log("Bot automation temporarily disabled - GameFlowManager initialization issue")},X=()=>u.players[u.round.currentPlayerIndex]||null,K=O=>u.players.find(I=>I.id===O)||null,pe=O=>u.cards[O]||null,be=()=>u.deck.drawPile.length>0&&u.round.phase===V.PLAYING,Ue=()=>u.deck.discardPile.length>0&&u.round.phase===V.PLAYING,Ke=()=>X()&&!u.round.stopCalled&&u.round.phase===V.PLAYING,q={gameState:u,dispatch:o,startGame:g,makeMove:S,endTurn:D,callStop:v,drawFromDeck:y,drawFromDiscard:E,replaceCard:k,discardDrawnCard:U,peekCard:B,swapCards:Y,useSpecialAbility:F,skipSpecialAbility:fe,selectCard:he,clearSelection:ae,showModal:ee,hideModal:ne,processBotTurn:G,getCurrentPlayer:X,getPlayerById:K,getCardById:pe,canDrawFromDeck:be,canDrawFromDiscard:Ue,canCallStop:Ke,isPlayerTurn:O=>X()?.id===O,getGameStatistics:()=>nx(u),getTurnAnalysis:()=>lx(u),getPlayerAvailableActions:()=>jr(u),isValidAction:(O,I)=>ax(u,O,I),forceEndTurn:()=>{o({type:"END_TURN",payload:{playerId:X()?.id||""}})},forceNextRound:()=>{o({type:"START_ROUND",payload:{}})},getGameFlowInfo:()=>({phase:u.round.phase,currentPlayer:X(),turnNumber:u.round.turnNumber,availableActions:jr(u),validationErrors:[]}),forceProgressScoring:()=>{c&&c.forceProgressScoring()},startCountdown:O=>{o({type:"START_COUNTDOWN",payload:{duration:O}})},stopCountdown:()=>{o({type:"STOP_COUNTDOWN",payload:{}})}};return p.jsx(Yp.Provider,{value:q,children:l})};var pt=function(){return pt=Object.assign||function(u){for(var o,c=1,f=arguments.length;c<f;c++){o=arguments[c];for(var g in o)Object.prototype.hasOwnProperty.call(o,g)&&(u[g]=o[g])}return u},pt.apply(this,arguments)};function ni(l,u,o){if(o||arguments.length===2)for(var c=0,f=u.length,g;c<f;c++)(g||!(c in u))&&(g||(g=Array.prototype.slice.call(u,0,c)),g[c]=u[c]);return l.concat(g||Array.prototype.slice.call(u))}var Re="-ms-",ti="-moz-",ve="-webkit-",Gp="comm",Hr="rule",Ro="decl",px="@import",Hp="@keyframes",hx="@layer",qp=Math.abs,zo=String.fromCharCode,yo=Object.assign;function gx(l,u){return $e(l,0)^45?(((u<<2^$e(l,0))<<2^$e(l,1))<<2^$e(l,2))<<2^$e(l,3):0}function Lp(l){return l.trim()}function ca(l,u){return(l=u.exec(l))?l[0]:l}function ie(l,u,o){return l.replace(u,o)}function _r(l,u,o){return l.indexOf(u,o)}function $e(l,u){return l.charCodeAt(u)|0}function Zn(l,u,o){return l.slice(u,o)}function Qt(l){return l.length}function Xp(l){return l.length}function ei(l,u){return u.push(l),l}function xx(l,u){return l.map(u).join("")}function Z0(l,u){return l.filter(function(o){return!ca(o,u)})}var qr=1,Vn=1,Ip=0,jt=0,Le=0,el="";function Lr(l,u,o,c,f,g,S,D){return{value:l,root:u,parent:o,type:c,props:f,children:g,line:qr,column:Vn,length:S,return:"",siblings:D}}function ka(l,u){return yo(Lr("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},u)}function Pn(l){for(;l.root;)l=ka(l.root,{children:[l]});ei(l,l.siblings)}function mx(){return Le}function yx(){return Le=jt>0?$e(el,--jt):0,Vn--,Le===10&&(Vn=1,qr--),Le}function Yt(){return Le=jt<Ip?$e(el,jt++):0,Vn++,Le===10&&(Vn=1,qr++),Le}function ln(){return $e(el,jt)}function Rr(){return jt}function Xr(l,u){return Zn(el,l,u)}function bo(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bx(l){return qr=Vn=1,Ip=Qt(el=l),jt=0,[]}function vx(l){return el="",l}function fo(l){return Lp(Xr(jt-1,vo(l===91?l+2:l===40?l+1:l)))}function Sx(l){for(;(Le=ln())&&Le<33;)Yt();return bo(l)>2||bo(Le)>3?"":" "}function wx(l,u){for(;--u&&Yt()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Xr(l,Rr()+(u<6&&ln()==32&&Yt()==32))}function vo(l){for(;Yt();)switch(Le){case l:return jt;case 34:case 39:l!==34&&l!==39&&vo(Le);break;case 40:l===41&&vo(l);break;case 92:Yt();break}return jt}function Ax(l,u){for(;Yt()&&l+Le!==57;)if(l+Le===84&&ln()===47)break;return"/*"+Xr(u,jt-1)+"*"+zo(l===47?l:Yt())}function Ex(l){for(;!bo(ln());)Yt();return Xr(l,jt)}function Cx(l){return vx(zr("",null,null,null,[""],l=bx(l),0,[0],l))}function zr(l,u,o,c,f,g,S,D,v){for(var y=0,E=0,k=S,U=0,B=0,Y=0,F=1,fe=1,he=1,ae=0,ee="",ne=f,G=g,X=c,K=ee;fe;)switch(Y=ae,ae=Yt()){case 40:if(Y!=108&&$e(K,k-1)==58){_r(K+=ie(fo(ae),"&","&\f"),"&\f",qp(y?D[y-1]:0))!=-1&&(he=-1);break}case 34:case 39:case 91:K+=fo(ae);break;case 9:case 10:case 13:case 32:K+=Sx(Y);break;case 92:K+=wx(Rr()-1,7);continue;case 47:switch(ln()){case 42:case 47:ei(Tx(Ax(Yt(),Rr()),u,o,v),v);break;default:K+="/"}break;case 123*F:D[y++]=Qt(K)*he;case 125*F:case 59:case 0:switch(ae){case 0:case 125:fe=0;case 59+E:he==-1&&(K=ie(K,/\f/g,"")),B>0&&Qt(K)-k&&ei(B>32?$0(K+";",c,o,k-1,v):$0(ie(K," ","")+";",c,o,k-2,v),v);break;case 59:K+=";";default:if(ei(X=V0(K,u,o,y,E,f,D,ee,ne=[],G=[],k,g),g),ae===123)if(E===0)zr(K,u,X,X,ne,g,k,D,G);else switch(U===99&&$e(K,3)===110?100:U){case 100:case 108:case 109:case 115:zr(l,X,X,c&&ei(V0(l,X,X,0,0,f,D,ee,f,ne=[],k,G),G),f,G,k,D,c?ne:G);break;default:zr(K,X,X,X,[""],G,0,D,G)}}y=E=B=0,F=he=1,ee=K="",k=S;break;case 58:k=1+Qt(K),B=Y;default:if(F<1){if(ae==123)--F;else if(ae==125&&F++==0&&yx()==125)continue}switch(K+=zo(ae),ae*F){case 38:he=E>0?1:(K+="\f",-1);break;case 44:D[y++]=(Qt(K)-1)*he,he=1;break;case 64:ln()===45&&(K+=fo(Yt())),U=ln(),E=k=Qt(ee=K+=Ex(Rr())),ae++;break;case 45:Y===45&&Qt(K)==2&&(F=0)}}return g}function V0(l,u,o,c,f,g,S,D,v,y,E,k){for(var U=f-1,B=f===0?g:[""],Y=Xp(B),F=0,fe=0,he=0;F<c;++F)for(var ae=0,ee=Zn(l,U+1,U=qp(fe=S[F])),ne=l;ae<Y;++ae)(ne=Lp(fe>0?B[ae]+" "+ee:ie(ee,/&\f/g,B[ae])))&&(v[he++]=ne);return Lr(l,u,o,f===0?Hr:D,v,y,E,k)}function Tx(l,u,o,c){return Lr(l,u,o,Gp,zo(mx()),Zn(l,2,-2),0,c)}function $0(l,u,o,c,f){return Lr(l,u,o,Ro,Zn(l,0,c),Zn(l,c+1,-1),c,f)}function Qp(l,u,o){switch(gx(l,u)){case 5103:return ve+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ve+l+l;case 4789:return ti+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return ve+l+ti+l+Re+l+l;case 5936:switch($e(l,u+11)){case 114:return ve+l+Re+ie(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return ve+l+Re+ie(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return ve+l+Re+ie(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return ve+l+Re+l+l;case 6165:return ve+l+Re+"flex-"+l+l;case 5187:return ve+l+ie(l,/(\w+).+(:[^]+)/,ve+"box-$1$2"+Re+"flex-$1$2")+l;case 5443:return ve+l+Re+"flex-item-"+ie(l,/flex-|-self/g,"")+(ca(l,/flex-|baseline/)?"":Re+"grid-row-"+ie(l,/flex-|-self/g,""))+l;case 4675:return ve+l+Re+"flex-line-pack"+ie(l,/align-content|flex-|-self/g,"")+l;case 5548:return ve+l+Re+ie(l,"shrink","negative")+l;case 5292:return ve+l+Re+ie(l,"basis","preferred-size")+l;case 6060:return ve+"box-"+ie(l,"-grow","")+ve+l+Re+ie(l,"grow","positive")+l;case 4554:return ve+ie(l,/([^-])(transform)/g,"$1"+ve+"$2")+l;case 6187:return ie(ie(ie(l,/(zoom-|grab)/,ve+"$1"),/(image-set)/,ve+"$1"),l,"")+l;case 5495:case 3959:return ie(l,/(image-set\([^]*)/,ve+"$1$`$1");case 4968:return ie(ie(l,/(.+:)(flex-)?(.*)/,ve+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ve+l+l;case 4200:if(!ca(l,/flex-|baseline/))return Re+"grid-column-align"+Zn(l,u)+l;break;case 2592:case 3360:return Re+ie(l,"template-","")+l;case 4384:case 3616:return o&&o.some(function(c,f){return u=f,ca(c.props,/grid-\w+-end/)})?~_r(l+(o=o[u].value),"span",0)?l:Re+ie(l,"-start","")+l+Re+"grid-row-span:"+(~_r(o,"span",0)?ca(o,/\d+/):+ca(o,/\d+/)-+ca(l,/\d+/))+";":Re+ie(l,"-start","")+l;case 4896:case 4128:return o&&o.some(function(c){return ca(c.props,/grid-\w+-start/)})?l:Re+ie(ie(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return ie(l,/(.+)-inline(.+)/,ve+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Qt(l)-1-u>6)switch($e(l,u+1)){case 109:if($e(l,u+4)!==45)break;case 102:return ie(l,/(.+:)(.+)-([^]+)/,"$1"+ve+"$2-$3$1"+ti+($e(l,u+3)==108?"$3":"$2-$3"))+l;case 115:return~_r(l,"stretch",0)?Qp(ie(l,"stretch","fill-available"),u,o)+l:l}break;case 5152:case 5920:return ie(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,g,S,D,v,y){return Re+f+":"+g+y+(S?Re+f+"-span:"+(D?v:+v-+g)+y:"")+l});case 4949:if($e(l,u+6)===121)return ie(l,":",":"+ve)+l;break;case 6444:switch($e(l,$e(l,14)===45?18:11)){case 120:return ie(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ve+($e(l,14)===45?"inline-":"")+"box$3$1"+ve+"$2$3$1"+Re+"$2box$3")+l;case 100:return ie(l,":",":"+Re)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(l,"scroll-","scroll-snap-")+l}return l}function Ur(l,u){for(var o="",c=0;c<l.length;c++)o+=u(l[c],c,l,u)||"";return o}function Dx(l,u,o,c){switch(l.type){case hx:if(l.children.length)break;case px:case Ro:return l.return=l.return||l.value;case Gp:return"";case Hp:return l.return=l.value+"{"+Ur(l.children,c)+"}";case Hr:if(!Qt(l.value=l.props.join(",")))return""}return Qt(o=Ur(l.children,c))?l.return=l.value+"{"+o+"}":""}function _x(l){var u=Xp(l);return function(o,c,f,g){for(var S="",D=0;D<u;D++)S+=l[D](o,c,f,g)||"";return S}}function Rx(l){return function(u){u.root||(u=u.return)&&l(u)}}function zx(l,u,o,c){if(l.length>-1&&!l.return)switch(l.type){case Ro:l.return=Qp(l.value,l.length,o);return;case Hp:return Ur([ka(l,{value:ie(l.value,"@","@"+ve)})],c);case Hr:if(l.length)return xx(o=l.props,function(f){switch(ca(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Pn(ka(l,{props:[ie(f,/:(read-\w+)/,":"+ti+"$1")]})),Pn(ka(l,{props:[f]})),yo(l,{props:Z0(o,c)});break;case"::placeholder":Pn(ka(l,{props:[ie(f,/:(plac\w+)/,":"+ve+"input-$1")]})),Pn(ka(l,{props:[ie(f,/:(plac\w+)/,":"+ti+"$1")]})),Pn(ka(l,{props:[ie(f,/:(plac\w+)/,Re+"input-$1")]})),Pn(ka(l,{props:[f]})),yo(l,{props:Z0(o,c)});break}return""})}}var Nx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},At={},$n=typeof process<"u"&&At!==void 0&&(At.REACT_APP_SC_ATTR||At.SC_ATTR)||"data-styled",Kp="active",Pp="data-styled-version",Ir="6.1.19",No=`/*!sc*/
`,kr=typeof window<"u"&&typeof document<"u",Ox=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==""?At.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&At.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.SC_DISABLE_SPEEDY!==void 0&&At.SC_DISABLE_SPEEDY!==""&&At.SC_DISABLE_SPEEDY!=="false"&&At.SC_DISABLE_SPEEDY),Qr=Object.freeze([]),Jn=Object.freeze({});function Mx(l,u,o){return o===void 0&&(o=Jn),l.theme!==o.theme&&l.theme||u||o.theme}var Fp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ux=/(^-|-$)/g;function J0(l){return l.replace(jx,"-").replace(Ux,"")}var kx=/(a)(d)/gi,wr=52,W0=function(l){return String.fromCharCode(l+(l>25?39:97))};function So(l){var u,o="";for(u=Math.abs(l);u>wr;u=u/wr|0)o=W0(u%wr)+o;return(W0(u%wr)+o).replace(kx,"$1-$2")}var po,Zp=5381,Fn=function(l,u){for(var o=u.length;o;)l=33*l^u.charCodeAt(--o);return l},Vp=function(l){return Fn(Zp,l)};function $p(l){return So(Vp(l)>>>0)}function Bx(l){return l.displayName||l.name||"Component"}function ho(l){return typeof l=="string"&&!0}var Jp=typeof Symbol=="function"&&Symbol.for,Wp=Jp?Symbol.for("react.memo"):60115,Yx=Jp?Symbol.for("react.forward_ref"):60112,Gx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Hx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},eh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qx=((po={})[Yx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},po[Wp]=eh,po);function ep(l){return("type"in(u=l)&&u.type.$$typeof)===Wp?eh:"$$typeof"in l?qx[l.$$typeof]:Gx;var u}var Lx=Object.defineProperty,Xx=Object.getOwnPropertyNames,tp=Object.getOwnPropertySymbols,Ix=Object.getOwnPropertyDescriptor,Qx=Object.getPrototypeOf,ap=Object.prototype;function th(l,u,o){if(typeof u!="string"){if(ap){var c=Qx(u);c&&c!==ap&&th(l,c,o)}var f=Xx(u);tp&&(f=f.concat(tp(u)));for(var g=ep(l),S=ep(u),D=0;D<f.length;++D){var v=f[D];if(!(v in Hx||o&&o[v]||S&&v in S||g&&v in g)){var y=Ix(u,v);try{Lx(l,v,y)}catch{}}}}return l}function Wn(l){return typeof l=="function"}function Oo(l){return typeof l=="object"&&"styledComponentId"in l}function nn(l,u){return l&&u?"".concat(l," ").concat(u):l||u||""}function wo(l,u){if(l.length===0)return"";for(var o=l[0],c=1;c<l.length;c++)o+=l[c];return o}function li(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Ao(l,u,o){if(o===void 0&&(o=!1),!o&&!li(l)&&!Array.isArray(l))return u;if(Array.isArray(u))for(var c=0;c<u.length;c++)l[c]=Ao(l[c],u[c]);else if(li(u))for(var c in u)l[c]=Ao(l[c],u[c]);return l}function Mo(l,u){Object.defineProperty(l,"toString",{value:u})}function ii(l){for(var u=[],o=1;o<arguments.length;o++)u[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var Kx=function(){function l(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return l.prototype.indexOfGroup=function(u){for(var o=0,c=0;c<u;c++)o+=this.groupSizes[c];return o},l.prototype.insertRules=function(u,o){if(u>=this.groupSizes.length){for(var c=this.groupSizes,f=c.length,g=f;u>=g;)if((g<<=1)<0)throw ii(16,"".concat(u));this.groupSizes=new Uint32Array(g),this.groupSizes.set(c),this.length=g;for(var S=f;S<g;S++)this.groupSizes[S]=0}for(var D=this.indexOfGroup(u+1),v=(S=0,o.length);S<v;S++)this.tag.insertRule(D,o[S])&&(this.groupSizes[u]++,D++)},l.prototype.clearGroup=function(u){if(u<this.length){var o=this.groupSizes[u],c=this.indexOfGroup(u),f=c+o;this.groupSizes[u]=0;for(var g=c;g<f;g++)this.tag.deleteRule(c)}},l.prototype.getGroup=function(u){var o="";if(u>=this.length||this.groupSizes[u]===0)return o;for(var c=this.groupSizes[u],f=this.indexOfGroup(u),g=f+c,S=f;S<g;S++)o+="".concat(this.tag.getRule(S)).concat(No);return o},l}(),Nr=new Map,Br=new Map,Or=1,Ar=function(l){if(Nr.has(l))return Nr.get(l);for(;Br.has(Or);)Or++;var u=Or++;return Nr.set(l,u),Br.set(u,l),u},Px=function(l,u){Or=u+1,Nr.set(l,u),Br.set(u,l)},Fx="style[".concat($n,"][").concat(Pp,'="').concat(Ir,'"]'),Zx=new RegExp("^".concat($n,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Vx=function(l,u,o){for(var c,f=o.split(","),g=0,S=f.length;g<S;g++)(c=f[g])&&l.registerName(u,c)},$x=function(l,u){for(var o,c=((o=u.textContent)!==null&&o!==void 0?o:"").split(No),f=[],g=0,S=c.length;g<S;g++){var D=c[g].trim();if(D){var v=D.match(Zx);if(v){var y=0|parseInt(v[1],10),E=v[2];y!==0&&(Px(E,y),Vx(l,E,v[3]),l.getTag().insertRules(y,f)),f.length=0}else f.push(D)}}},np=function(l){for(var u=document.querySelectorAll(Fx),o=0,c=u.length;o<c;o++){var f=u[o];f&&f.getAttribute($n)!==Kp&&($x(l,f),f.parentNode&&f.parentNode.removeChild(f))}};function Jx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ah=function(l){var u=document.head,o=l||u,c=document.createElement("style"),f=function(D){var v=Array.from(D.querySelectorAll("style[".concat($n,"]")));return v[v.length-1]}(o),g=f!==void 0?f.nextSibling:null;c.setAttribute($n,Kp),c.setAttribute(Pp,Ir);var S=Jx();return S&&c.setAttribute("nonce",S),o.insertBefore(c,g),c},Wx=function(){function l(u){this.element=ah(u),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var c=document.styleSheets,f=0,g=c.length;f<g;f++){var S=c[f];if(S.ownerNode===o)return S}throw ii(17)}(this.element),this.length=0}return l.prototype.insertRule=function(u,o){try{return this.sheet.insertRule(o,u),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},l.prototype.getRule=function(u){var o=this.sheet.cssRules[u];return o&&o.cssText?o.cssText:""},l}(),em=function(){function l(u){this.element=ah(u),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(u,o){if(u<=this.length&&u>=0){var c=document.createTextNode(o);return this.element.insertBefore(c,this.nodes[u]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},l.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},l}(),tm=function(){function l(u){this.rules=[],this.length=0}return l.prototype.insertRule=function(u,o){return u<=this.length&&(this.rules.splice(u,0,o),this.length++,!0)},l.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},l.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},l}(),lp=kr,am={isServer:!kr,useCSSOMInjection:!Ox},nh=function(){function l(u,o,c){u===void 0&&(u=Jn),o===void 0&&(o={});var f=this;this.options=pt(pt({},am),u),this.gs=o,this.names=new Map(c),this.server=!!u.isServer,!this.server&&kr&&lp&&(lp=!1,np(this)),Mo(this,function(){return function(g){for(var S=g.getTag(),D=S.length,v="",y=function(k){var U=function(he){return Br.get(he)}(k);if(U===void 0)return"continue";var B=g.names.get(U),Y=S.getGroup(k);if(B===void 0||!B.size||Y.length===0)return"continue";var F="".concat($n,".g").concat(k,'[id="').concat(U,'"]'),fe="";B!==void 0&&B.forEach(function(he){he.length>0&&(fe+="".concat(he,","))}),v+="".concat(Y).concat(F,'{content:"').concat(fe,'"}').concat(No)},E=0;E<D;E++)y(E);return v}(f)})}return l.registerId=function(u){return Ar(u)},l.prototype.rehydrate=function(){!this.server&&kr&&np(this)},l.prototype.reconstructWithOptions=function(u,o){return o===void 0&&(o=!0),new l(pt(pt({},this.options),u),this.gs,o&&this.names||void 0)},l.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(u=function(o){var c=o.useCSSOMInjection,f=o.target;return o.isServer?new tm(f):c?new Wx(f):new em(f)}(this.options),new Kx(u)));var u},l.prototype.hasNameForId=function(u,o){return this.names.has(u)&&this.names.get(u).has(o)},l.prototype.registerName=function(u,o){if(Ar(u),this.names.has(u))this.names.get(u).add(o);else{var c=new Set;c.add(o),this.names.set(u,c)}},l.prototype.insertRules=function(u,o,c){this.registerName(u,o),this.getTag().insertRules(Ar(u),c)},l.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},l.prototype.clearRules=function(u){this.getTag().clearGroup(Ar(u)),this.clearNames(u)},l.prototype.clearTag=function(){this.tag=void 0},l}(),nm=/&/g,lm=/^\s*\/\/.*$/gm;function lh(l,u){return l.map(function(o){return o.type==="rule"&&(o.value="".concat(u," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(u," ")),o.props=o.props.map(function(c){return"".concat(u," ").concat(c)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=lh(o.children,u)),o})}function im(l){var u,o,c,f=Jn,g=f.options,S=g===void 0?Jn:g,D=f.plugins,v=D===void 0?Qr:D,y=function(U,B,Y){return Y.startsWith(o)&&Y.endsWith(o)&&Y.replaceAll(o,"").length>0?".".concat(u):U},E=v.slice();E.push(function(U){U.type===Hr&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(nm,o).replace(c,y))}),S.prefix&&E.push(zx),E.push(Dx);var k=function(U,B,Y,F){B===void 0&&(B=""),Y===void 0&&(Y=""),F===void 0&&(F="&"),u=F,o=B,c=new RegExp("\\".concat(o,"\\b"),"g");var fe=U.replace(lm,""),he=Cx(Y||B?"".concat(Y," ").concat(B," { ").concat(fe," }"):fe);S.namespace&&(he=lh(he,S.namespace));var ae=[];return Ur(he,_x(E.concat(Rx(function(ee){return ae.push(ee)})))),ae};return k.hash=v.length?v.reduce(function(U,B){return B.name||ii(15),Fn(U,B.name)},Zp).toString():"",k}var rm=new nh,Eo=im(),ih=oa.createContext({shouldForwardProp:void 0,styleSheet:rm,stylis:Eo});ih.Consumer;oa.createContext(void 0);function ip(){return Ye.useContext(ih)}var rh=function(){function l(u,o){var c=this;this.inject=function(f,g){g===void 0&&(g=Eo);var S=c.name+g.hash;f.hasNameForId(c.id,S)||f.insertRules(c.id,S,g(c.rules,S,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=o,Mo(this,function(){throw ii(12,String(c.name))})}return l.prototype.getName=function(u){return u===void 0&&(u=Eo),this.name+u.hash},l}(),um=function(l){return l>="A"&&l<="Z"};function rp(l){for(var u="",o=0;o<l.length;o++){var c=l[o];if(o===1&&c==="-"&&l[0]==="-")return l;um(c)?u+="-"+c.toLowerCase():u+=c}return u.startsWith("ms-")?"-"+u:u}var uh=function(l){return l==null||l===!1||l===""},ch=function(l){var u,o,c=[];for(var f in l){var g=l[f];l.hasOwnProperty(f)&&!uh(g)&&(Array.isArray(g)&&g.isCss||Wn(g)?c.push("".concat(rp(f),":"),g,";"):li(g)?c.push.apply(c,ni(ni(["".concat(f," {")],ch(g),!1),["}"],!1)):c.push("".concat(rp(f),": ").concat((u=f,(o=g)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||u in Nx||u.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return c};function rn(l,u,o,c){if(uh(l))return[];if(Oo(l))return[".".concat(l.styledComponentId)];if(Wn(l)){if(!Wn(g=l)||g.prototype&&g.prototype.isReactComponent||!u)return[l];var f=l(u);return rn(f,u,o,c)}var g;return l instanceof rh?o?(l.inject(o,c),[l.getName(c)]):[l]:li(l)?ch(l):Array.isArray(l)?Array.prototype.concat.apply(Qr,l.map(function(S){return rn(S,u,o,c)})):[l.toString()]}function cm(l){for(var u=0;u<l.length;u+=1){var o=l[u];if(Wn(o)&&!Oo(o))return!1}return!0}var om=Vp(Ir),sm=function(){function l(u,o,c){this.rules=u,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&cm(u),this.componentId=o,this.baseHash=Fn(om,o),this.baseStyle=c,nh.registerId(o)}return l.prototype.generateAndInjectStyles=function(u,o,c){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,o,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))f=nn(f,this.staticRulesId);else{var g=wo(rn(this.rules,u,o,c)),S=So(Fn(this.baseHash,g)>>>0);if(!o.hasNameForId(this.componentId,S)){var D=c(g,".".concat(S),void 0,this.componentId);o.insertRules(this.componentId,S,D)}f=nn(f,S),this.staticRulesId=S}else{for(var v=Fn(this.baseHash,c.hash),y="",E=0;E<this.rules.length;E++){var k=this.rules[E];if(typeof k=="string")y+=k;else if(k){var U=wo(rn(k,u,o,c));v=Fn(v,U+E),y+=U}}if(y){var B=So(v>>>0);o.hasNameForId(this.componentId,B)||o.insertRules(this.componentId,B,c(y,".".concat(B),void 0,this.componentId)),f=nn(f,B)}}return f},l}(),oh=oa.createContext(void 0);oh.Consumer;var go={};function dm(l,u,o){var c=Oo(l),f=l,g=!ho(l),S=u.attrs,D=S===void 0?Qr:S,v=u.componentId,y=v===void 0?function(ne,G){var X=typeof ne!="string"?"sc":J0(ne);go[X]=(go[X]||0)+1;var K="".concat(X,"-").concat($p(Ir+X+go[X]));return G?"".concat(G,"-").concat(K):K}(u.displayName,u.parentComponentId):v,E=u.displayName,k=E===void 0?function(ne){return ho(ne)?"styled.".concat(ne):"Styled(".concat(Bx(ne),")")}(l):E,U=u.displayName&&u.componentId?"".concat(J0(u.displayName),"-").concat(u.componentId):u.componentId||y,B=c&&f.attrs?f.attrs.concat(D).filter(Boolean):D,Y=u.shouldForwardProp;if(c&&f.shouldForwardProp){var F=f.shouldForwardProp;if(u.shouldForwardProp){var fe=u.shouldForwardProp;Y=function(ne,G){return F(ne,G)&&fe(ne,G)}}else Y=F}var he=new sm(o,U,c?f.componentStyle:void 0);function ae(ne,G){return function(X,K,pe){var be=X.attrs,Ue=X.componentStyle,Ke=X.defaultProps,ze=X.foldedComponentIds,rt=X.styledComponentId,Ge=X.target,Xe=oa.useContext(oh),R=ip(),L=X.shouldForwardProp||R.shouldForwardProp,$=Mx(K,Xe,Ke)||Jn,ue=function(I,P,Te){for(var xe,at=pt(pt({},P),{className:void 0,theme:Te}),Ya=0;Ya<I.length;Ya+=1){var Kt=Wn(xe=I[Ya])?xe(at):xe;for(var Et in Kt)at[Et]=Et==="className"?nn(at[Et],Kt[Et]):Et==="style"?pt(pt({},at[Et]),Kt[Et]):Kt[Et]}return P.className&&(at.className=nn(at.className,P.className)),at}(be,K,$),x=ue.as||Ge,j={};for(var H in ue)ue[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&ue.theme===$||(H==="forwardedAs"?j.as=ue.forwardedAs:L&&!L(H,x)||(j[H]=ue[H]));var q=function(I,P){var Te=ip(),xe=I.generateAndInjectStyles(P,Te.styleSheet,Te.stylis);return xe}(Ue,ue),O=nn(ze,rt);return q&&(O+=" "+q),ue.className&&(O+=" "+ue.className),j[ho(x)&&!Fp.has(x)?"class":"className"]=O,pe&&(j.ref=pe),Ye.createElement(x,j)}(ee,ne,G)}ae.displayName=k;var ee=oa.forwardRef(ae);return ee.attrs=B,ee.componentStyle=he,ee.displayName=k,ee.shouldForwardProp=Y,ee.foldedComponentIds=c?nn(f.foldedComponentIds,f.styledComponentId):"",ee.styledComponentId=U,ee.target=c?f.target:l,Object.defineProperty(ee,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ne){this._foldedDefaultProps=c?function(G){for(var X=[],K=1;K<arguments.length;K++)X[K-1]=arguments[K];for(var pe=0,be=X;pe<be.length;pe++)Ao(G,be[pe],!0);return G}({},f.defaultProps,ne):ne}}),Mo(ee,function(){return".".concat(ee.styledComponentId)}),g&&th(ee,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ee}function up(l,u){for(var o=[l[0]],c=0,f=u.length;c<f;c+=1)o.push(u[c],l[c+1]);return o}var cp=function(l){return Object.assign(l,{isCss:!0})};function sh(l){for(var u=[],o=1;o<arguments.length;o++)u[o-1]=arguments[o];if(Wn(l)||li(l))return cp(rn(up(Qr,ni([l],u,!0))));var c=l;return u.length===0&&c.length===1&&typeof c[0]=="string"?rn(c):cp(rn(up(c,u)))}function Co(l,u,o){if(o===void 0&&(o=Jn),!u)throw ii(1,u);var c=function(f){for(var g=[],S=1;S<arguments.length;S++)g[S-1]=arguments[S];return l(u,o,sh.apply(void 0,ni([f],g,!1)))};return c.attrs=function(f){return Co(l,u,pt(pt({},o),{attrs:Array.prototype.concat(o.attrs,f).filter(Boolean)}))},c.withConfig=function(f){return Co(l,u,pt(pt({},o),f))},c}var dh=function(l){return Co(dm,l)},_=dh;Fp.forEach(function(l){_[l]=dh(l)});function jo(l){for(var u=[],o=1;o<arguments.length;o++)u[o-1]=arguments[o];var c=wo(sh.apply(void 0,ni([l],u,!1))),f=$p(c);return new rh(f,c)}const Ba=()=>{const l=Ye.useContext(Yp);if(!l)throw new Error("useGame must be used within a GameProvider");const{gameState:u,...o}=l,c=u.ui.isActionInProgress;return{gameState:u,actions:{gameState:u,...o},isLoading:c,error:null}},fm=_.div`
  position: relative;
  display: inline-block;
`,pm=_.div`
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
`,hm=({content:l,children:u,position:o="top",delay:c=500})=>{const[f,g]=Ye.useState(!1),[S,D]=Ye.useState(null),v=()=>{S&&clearTimeout(S);const E=setTimeout(()=>g(!0),c);D(E)},y=()=>{S&&(clearTimeout(S),D(null)),g(!1)};return p.jsxs(fm,{onMouseEnter:v,onMouseLeave:y,onFocus:v,onBlur:y,children:[u,p.jsx(pm,{position:o,visible:f,children:l})]})},gm=_.div`
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
`,xm=_.div`
  padding: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  position: relative;
  background: ${l=>{switch(l.suit){case"hearts":return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)";case"diamonds":return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)";case"clubs":return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)";case"spades":return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)";default:return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)"}}};
  border: 2px solid rgba(255, 215, 0, 0.3);
`,op=_.div`
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
`,sp=_.div`
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
`,mm=_.div`
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
`,ym=_.div`
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
`,bm=_.div`
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
`,vm=_.div`
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
`,Sm=_.div`
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
`,wm=_.div`
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
`,Am=_.div`
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
`,Em=_.div`
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
`,Cm=({playerCard:l,cardIndex:u,playerId:o,showAsOpponent:c,isCurrentPlayer:f,isHumanPlayer:g})=>{const{gameState:S,actions:D}=Ba(),v=D.getCardById(l.cardId),y=S.ui.selectedCard,E=S.ui.replacingCard,k=E&&E.cardIndex===u&&E.playerId===o,U=k?E.phase:null;oa.useEffect(()=>{k&&console.log(`Card ${u} is replacing! Phase: ${U}`,{cardIndex:u,replacingCard:E,isReplacing:k,replacementPhase:U,playerId:o})},[k,U,u]);const B=S.ui.jackSwapMode,Y=S.ui.queenPeekMode,F=S.ui.jackSwapAnimation;oa.useEffect(()=>{if(k&&U==="swapping-in"){const Ge=setTimeout(()=>{D.makeMove({type:"COMPLETE_CARD_REPLACEMENT",payload:{}})},400);return()=>clearTimeout(Ge)}},[k,U,D]),oa.useEffect(()=>{if(F?.isActive){if(F.phase==="swapping-out"){const Ge=setTimeout(()=>{D.makeMove({type:"JACK_SWAP_ANIMATION_PHASE",payload:{phase:"swapping-in"}})},600);return()=>clearTimeout(Ge)}else if(F.phase==="swapping-in"){const Ge=setTimeout(()=>{D.makeMove({type:"COMPLETE_JACK_SWAP_ANIMATION",payload:{}})},600);return()=>clearTimeout(Ge)}}},[F,D]),oa.useEffect(()=>{if(S.ui.showingPeekCard===l.cardId){const Ge=setTimeout(()=>{D.makeMove({type:"HIDE_PEEK_RESULT",payload:{}})},3e3);return()=>clearTimeout(Ge)}},[S.ui.showingPeekCard,l.cardId,D]);const fe=l.isRevealed||!c&&l.isKnownToPlayer&&S.round.phase===V.CARD_VIEWING||!c&&l.isKnownToPlayer&&S.ui.showingPeekCard===l.cardId||S.round.phase===V.SCORING||S.round.phase===V.FINISHED,ae=S.players[S.round.currentPlayerIndex]?.type==="human",ee=()=>{Y?.isActive&&ae?D.makeMove({type:"COMPLETE_QUEEN_PEEK",payload:{targetCardId:l.cardId}}):B?.isActive&&ae?!c&&f?D.makeMove({type:"SELECT_OWN_CARD_FOR_SWAP",payload:{cardIndex:u}}):c&&B.selectedOwnCardIndex!==null&&D.makeMove({type:"COMPLETE_JACK_SWAP",payload:{targetPlayerId:o,targetCardIndex:u}}):y&&f&&g&&D.replaceCard(u)},ne=F?.isActive&&F.playerCardInfo?.playerId===o&&F.playerCardInfo?.cardIndex===u,G=F?.isActive&&F.targetCardInfo?.playerId===o&&F.targetCardInfo?.cardIndex===u,X=ne||G,K=!S.ui.isActionInProgress&&!F?.isActive&&(Y?.isActive&&ae||y&&f&&g||B?.isActive&&!c&&f&&ae||B?.isActive&&c&&B.selectedOwnCardIndex!==null&&ae),pe=()=>v?v.suit==="hearts"||v.suit==="diamonds"?"#DC2626":"#1F2937":"#6B7280",be=()=>{if(!v?.suit)return"";switch(v.suit){case"hearts":return"♥";case"diamonds":return"♦";case"clubs":return"♣";case"spades":return"♠";default:return""}},Ue=()=>v?v.rank==="joker"?"JOK":v.rank==="ace"?"A":v.rank==="king"?"K":v.rank==="queen"?"Q":v.rank==="jack"?"J":v.rank:"",ze=S.round.phase===V.CARD_VIEWING?v?fe?v.rank==="joker"?`Joker (${v.value} pts)`:`${Ue()} of ${v.suit} (${v.value} pts)`:c?"Opponent's hidden card":"Your hidden card":"Unknown card":"",rt=p.jsxs(gm,{isClickable:!!K,shouldShowCard:!!fe,isRevealed:!!l.isRevealed,isKnownToPlayer:!!l.isKnownToPlayer,showAsOpponent:c,isReplacing:!!k,replacementPhase:U,onClick:ee,className:`
        ${k&&U==="swapping-out"?"card-swapping-out":""}
        ${k&&U==="swapping-in"?"card-swapping-in":""}
        ${B?.isActive&&!c&&f&&B.selectedOwnCardIndex===u?"jack-card-selected":""}
        ${B?.isActive&&c&&B.selectedOwnCardIndex!==null?"jack-swap-target":""}
        ${B?.isActive?"jack-swap-mode-active":""}
        ${X&&F?.phase==="swapping-out"?"jack-swapping-out":""}
        ${X&&F?.phase==="swapping-in"?"jack-swapping-in":""}
        
        
      `.trim(),style:{animation:k&&U==="swapping-out"?"cardSwapOut 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards":k&&U==="swapping-in"?"cardSwapIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards":void 0},children:[fe&&v?p.jsxs(xm,{suit:v.suit||"default","data-testid":"card-face",children:[p.jsxs("div",{style:{textAlign:"left"},"data-testid":"card-corner-tl",children:[p.jsx(op,{color:pe(),"data-testid":"card-rank-tl",children:Ue()}),v.suit&&p.jsx(sp,{color:pe(),"data-testid":"card-suit",children:be()})]}),p.jsxs(ym,{color:pe(),"data-testid":"card-center",children:[v.rank==="joker"?p.jsx("div",{className:"joker",children:"🃏"}):p.jsx("div",{className:"large-suit",children:be()}),p.jsx(bm,{"data-testid":"card-point-value",children:v.value})]}),p.jsxs(mm,{"data-testid":"card-corner-br",children:[p.jsx(op,{color:pe(),"data-testid":"card-rank-br",children:Ue()}),v.suit&&p.jsx(sp,{color:pe(),children:be()})]}),v.isSpecial&&p.jsx(Am,{"data-testid":"special-card-indicator"})]}):p.jsx(vm,{"data-testid":"card-back",children:p.jsx("div",{className:"back-inner",children:p.jsxs(Sm,{children:[p.jsx("div",{className:"main-diamond"}),p.jsx("div",{className:"corner-accent top-left"}),p.jsx("div",{className:"corner-accent top-right"}),p.jsx("div",{className:"corner-accent bottom-left"}),p.jsx("div",{className:"corner-accent bottom-right"})]})})}),K&&p.jsx(wm,{onClick:ee,children:p.jsx("div",{className:"replace-text",children:Y?.isActive?"Click to Peek":B?.isActive?!c&&f?B.selectedOwnCardIndex===u?"Selected for Swap":"Click to Select":"Click to Swap":"Click to Replace"})}),B?.isActive&&!K&&p.jsx("div",{className:"swap-indicator-overlay"}),!c&&p.jsx(Em,{position:u+1,"data-testid":"card-position"})]});return ze?p.jsx(hm,{content:ze,position:"top",delay:300,children:rt}):rt},Tm=_.div`
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
`,Dm=_.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l=>l.showAsOpponent?"12px":"16px"};
  gap: 12px;
  
  @media (max-width: 768px) {
    margin-bottom: 12px;
    gap: 8px;
  }
`,_m=_.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`,Rm=_.h3`
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
`,dp=_.span`
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
`,zm=_.div`
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
`,Nm=_.div`
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
`,Om=_.div`
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
`,fp=({player:l,isCurrentPlayer:u,showAsOpponent:o})=>{const{gameState:c}=Ba(),g=c.round.phase===V.SCORING||c.round.phase===V.FINISHED||!o&&(c.round.phase===V.PLAYING||c.round.stopCalled)?l.score:null,S=c.ui.isBotThinking&&u&&l.type==="bot";return p.jsxs(Tm,{isCurrentPlayer:u,showAsOpponent:o,children:[p.jsxs(Dm,{showAsOpponent:o,children:[p.jsxs(_m,{children:[p.jsx(Rm,{showAsOpponent:o,children:l.name}),l.type==="bot"&&p.jsx(dp,{variant:"bot",children:"BOT"}),u&&p.jsx(dp,{variant:"turn",children:"TURN"})]}),p.jsxs(zm,{showAsOpponent:o,children:[g!==null&&p.jsxs("div",{className:"score",children:[p.jsx("span",{className:"label",children:c.round.phase===V.SCORING||c.round.phase===V.FINISHED?"Final:":"Points:"}),p.jsx("span",{className:"value",children:g})]}),p.jsxs("div",{className:"wins",children:["Round wins: ",l.roundWins]})]})]}),p.jsx(Nm,{showAsOpponent:o,children:l.cards.map((D,v)=>p.jsx(Cm,{playerCard:D,cardIndex:v,playerId:l.id,showAsOpponent:o,isCurrentPlayer:u,isHumanPlayer:l.type==="human"},v))}),S&&p.jsx(Om,{children:p.jsx("div",{className:"thinking",children:"Bot is thinking..."})})]})},Mm=_.div`
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
`,jm=_.div`
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
`,fh=jo`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
`,Um=jo`
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
`,km=jo`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`,Bm=_.div`
  position: absolute;
  inset: -2px;
  border-radius: 10px;
  background: ${l=>{switch(l.variant){case"primary":return"linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)";case"success":return"linear-gradient(135deg, #10B981 0%, #059669 100%)";case"warning":return"linear-gradient(135deg, #F59E0B 0%, #D97706 100%)";case"info":return"linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)";default:return"linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)"}}};
  opacity: 0.3;
  animation: ${l=>l.actionType==="thinking"?fh:"pulse"} 2s infinite;
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
    animation: ${Um} 3s infinite;
    opacity: 0.6;
  }
`,Ym=_(jm)`
  ${l=>l.actionType==="thinking"&&`
    animation: ${fh} 2s infinite ease-in-out;
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
    animation: ${km} 2s infinite;
  `}
`,To=({action:l,visible:u,position:o="top",variant:c="primary",actionType:f})=>p.jsx(Mm,{visible:u,position:o,variant:c,children:p.jsxs(Ym,{variant:c,actionType:f,children:[p.jsx(Bm,{variant:c,actionType:f}),l]})}),Gm=_.div`
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
`,pp=_.div`
  text-align: center;
  position: relative;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`,hp=_.div`
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
`,gp=_.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1E40AF 0%, #3730A3 100%);
  border-radius: 12px;
  transform: ${l=>`translate(${l.layer*4}px, ${l.layer*4}px)`};
  z-index: ${l=>-l.layer};
`,Hm=_.div`
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
`,xp=_.div`
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
`,qm=_.div`
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
`,mp=_.div`
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
`,Lm=_.div`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  border-radius: 50%;
  border: 1px solid #FF8C00;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,Xm=_.div`
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
`,Im=_.div`
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
`,Qm=()=>{const{gameState:l,actions:u}=Ba(),[o,c]=Ye.useState(null),g=u.getCurrentPlayer()?.type==="human",S=!!l.ui.selectedCard,D=u.canDrawFromDeck()&&g&&!S&&!l.ui.isActionInProgress,v=u.canDrawFromDiscard()&&g&&!S&&!l.ui.isActionInProgress,y=l.deck.discardPile[l.deck.discardPile.length-1],E=y?u.getCardById(y):null,k=Y=>Y==="hearts"||Y==="diamonds"?"#DC2626":"#1F2937",U=Y=>{if(!Y)return"";switch(Y){case"hearts":return"♥";case"diamonds":return"♦";case"clubs":return"♣";case"spades":return"♠";default:return""}},B=Y=>Y?Y==="joker"?"JOK":Y==="ace"?"A":Y==="king"?"K":Y==="queen"?"Q":Y==="jack"?"J":Y:"";return p.jsxs(Gm,{children:[p.jsx(pp,{children:p.jsxs(hp,{canDraw:D,isEmpty:l.deck.drawPile.length===0,onClick:D?()=>u.drawFromDeck():void 0,onMouseEnter:()=>c("deck"),onMouseLeave:()=>c(null),children:[D&&p.jsx(To,{action:"Click to draw",visible:o==="deck",position:"top",variant:"primary"}),l.deck.drawPile.length>0&&p.jsxs(p.Fragment,{children:[p.jsx(gp,{layer:1}),p.jsx(gp,{layer:2})]}),p.jsxs(Hm,{children:[p.jsx(xp,{children:l.deck.drawPile.length>0?p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"deck-label",children:"DECK"}),p.jsx("div",{className:"deck-count",children:l.deck.drawPile.length})]}):p.jsx("div",{className:"empty-label",children:"EMPTY"})}),l.deck.drawPile.length>0&&p.jsxs(p.Fragment,{children:[p.jsx(Xm,{percentage:l.deck.drawPile.length/54*100}),p.jsxs(Im,{cardsLeft:l.deck.drawPile.length,total:54,children:[Math.round(l.deck.drawPile.length/54*100),"%"]})]})]}),D&&p.jsx(mp,{color:"#10B981",children:"DRAW"})]})}),p.jsx(pp,{children:p.jsxs(hp,{canDraw:v,isEmpty:l.deck.discardPile.length===0,isDiscard:!0,onClick:v?()=>u.drawFromDiscard():void 0,onMouseEnter:()=>c("discard"),onMouseLeave:()=>c(null),children:[v&&p.jsx(To,{action:"Click to draw",visible:o==="discard",position:"top",variant:"info"}),l.deck.discardPile.length>0&&E?p.jsxs(qm,{color:k(E.suit||"spades"),children:[p.jsxs("div",{style:{position:"absolute",top:"8px",left:"8px",textAlign:"left",lineHeight:"1"},children:[p.jsx("div",{className:"rank",children:B(E.rank)}),E.suit&&p.jsx("div",{className:"suit",children:U(E.suit)})]}),p.jsx("div",{className:"center",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:E.rank==="joker"?"🃏":U(E.suit||"spades")}),p.jsxs("div",{style:{position:"absolute",bottom:"8px",right:"8px",transform:"rotate(180deg)",textAlign:"right",lineHeight:"1"},children:[p.jsx("div",{className:"rank",children:B(E.rank)}),E.suit&&p.jsx("div",{className:"suit",children:U(E.suit)})]}),E.isSpecial&&p.jsx(Lm,{})]}):p.jsx(xp,{children:p.jsxs("div",{className:"empty-label",children:[p.jsx("div",{children:"DISCARD"}),p.jsx("div",{children:"PILE"})]})}),v&&p.jsx(mp,{color:"#8B5CF6",children:"DRAW"})]})})]})},Km=_.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,yp=_.div`
  display: flex;
  flex-direction: column;
`,bp=_.label`
  font-size: 14px;
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 8px;
`,Pm=_.select`
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
`,Fm=_.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`,Zm=_.input`
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
`,Er=_.button`
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
`,Vm=_.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`,xo=_.button`
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
`,$m=_.div`
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
`,Jm=_.div`
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
`,Wm=_.div`
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
`,vp=()=>{const{gameState:l,actions:u}=Ba(),[o,c]=Ye.useState(2),[f,g]=Ye.useState(["You","Bot 1","Bot 2","Bot 3"]),D=u.getCurrentPlayer()?.type==="human",v=!!l.ui.selectedCard,y=u.canCallStop()&&D;if(l.round.phase===V.SETUP)return p.jsxs(Km,{children:[p.jsxs(yp,{children:[p.jsx(bp,{children:"Number of Players"}),p.jsxs(Pm,{value:o,onChange:E=>c(Number(E.target.value)),children:[p.jsx("option",{value:2,children:"2 Players"}),p.jsx("option",{value:3,children:"3 Players"}),p.jsx("option",{value:4,children:"4 Players"})]})]}),p.jsxs(yp,{children:[p.jsx(bp,{children:"Player Names"}),p.jsx(Fm,{children:Array.from({length:o},(E,k)=>p.jsx(Zm,{type:"text",value:f[k],onChange:U=>{const B=[...f];B[k]=U.target.value,g(B)},placeholder:k===0?"Your name":`Bot ${k}`},k))})]}),p.jsx(Er,{onClick:()=>u.startGame(o,f.slice(0,o)),children:"🎮 Start Game 🎮"})]});if(l.round.phase===V.CARD_VIEWING){const E=l.ui.startCountdown,k=E?.isActive,U=E?Math.ceil(E.remainingTime/1e3):0,B=()=>{k?(u.stopCountdown(),u.makeMove({type:"START_PLAYING",payload:{}})):u.startCountdown(5e3)};return p.jsx(Jm,{children:p.jsxs("div",{className:"panel",children:[p.jsx("h3",{className:"title",children:"Memorize Your Cards!"}),p.jsx("p",{className:"description",children:"Look at your face-up cards and remember them. They will be hidden once the game starts."}),p.jsx(Er,{onClick:B,children:k?`🚀 Starting in ${U}s (Click to start now)`:"🚀 Game starting automatically..."})]})})}if(l.round.phase===V.PLAYING)return p.jsxs(Vm,{children:[v&&D&&p.jsx(xo,{variant:"discard",onClick:()=>u.discardDrawnCard(),children:"🗑️ Discard Card"}),l.ui.jackSwapMode?.isActive&&D&&p.jsx(xo,{variant:"stop",onClick:()=>u.makeMove({type:"CANCEL_JACK_SWAP",payload:{}}),children:"✖️ Cancel Swap"}),y&&p.jsx(xo,{variant:"stop",onClick:()=>u.callStop(),children:l.ui.turnTimer?.isActive?`✋ Call Stop (${Math.ceil(l.ui.turnTimer.remainingTime/1e3)}s to end turn)`:"✋ Call Stop"})]});if(l.round.phase===V.SCORING){const E=l.players.map(Y=>({...Y,roundScore:Y.score})).sort((Y,F)=>Y.roundScore-F.roundScore),k=E[0],U=l.match.winner!==null,B=U?l.players.find(Y=>Y.id===l.match.winner):null;return p.jsxs($m,{children:[p.jsxs("div",{className:"panel",children:[p.jsx("h2",{className:"title",children:U?"🎉 Match Complete! 🎉":`Round ${l.match.currentRound} Results`}),!U&&p.jsxs("div",{className:"winner",children:["👑 ",k.name," wins Round ",l.match.currentRound,"!",p.jsxs("div",{className:"score",children:["With ",k.roundScore," points"]})]}),U&&B&&p.jsxs("div",{className:"winner",children:[B.name," wins the match!"]}),p.jsxs("div",{className:"scores",children:[p.jsx("h4",{className:"scores-title",children:U?"Final Standings":"Round Scores"}),E.map((Y,F)=>p.jsxs("div",{className:`player-row ${F===0&&!U?"winner":""}`,children:[p.jsxs("span",{className:"rank",children:[F+1,"."]}),p.jsxs("span",{className:"name",children:[Y.name,Y.type==="bot"&&p.jsx("span",{className:"bot-label",children:"BOT"})]}),p.jsx("span",{className:"score",children:U?`${Y.roundWins} wins`:`${Y.roundScore} pts`})]},Y.id))]}),!U&&p.jsxs("div",{className:"progress",children:[p.jsx("h4",{className:"progress-title",children:"Match Progress"}),l.players.map(Y=>p.jsxs("div",{className:"progress-row",children:[p.jsx("span",{children:Y.name}),p.jsxs("span",{children:[Y.roundWins,"/",l.match.roundsToWin]})]},Y.id))]})]}),p.jsx(Er,{onClick:()=>u.forceProgressScoring(),children:U?"🔄 New Game":"▶️ Continue to Next Round"})]})}return l.round.phase===V.FINISHED?p.jsxs(Wm,{children:[p.jsxs("div",{className:"panel",children:[p.jsx("h2",{className:"title",children:"🎉 Game Complete! 🎉"}),l.match.winner&&p.jsxs("div",{className:"winner",children:[l.players.find(E=>E.id===l.match.winner)?.name," wins the match!"]}),p.jsxs("div",{className:"standings",children:[p.jsx("h4",{className:"standings-title",children:"Final Standings:"}),l.players.sort((E,k)=>k.roundWins-E.roundWins).map((E,k)=>p.jsxs("div",{className:"player-row",children:[p.jsxs("span",{children:[k+1,". ",E.name]}),p.jsxs("span",{children:[E.roundWins," round",E.roundWins!==1?"s":""]})]},E.id))]})]}),p.jsx(Er,{onClick:()=>window.location.reload(),children:"🔄 New Game"})]}):null},ey=_.div`
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
`,ty=_.div`
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
`,Cr=_.div`
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
`,Tr=_.div`
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
`,Sp=_.div`
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
`,ay=_.div`
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
`,ny=_.span`
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
`,ly=_.div`
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
`,iy=_.div`
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
`,ry=_.div`
  font-size: 14px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
  }
`,uy=_.div`
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
`,cy=_.div`
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
`,wp=_.div`
  grid-column: span 2;
  
  @media (min-width: 768px) {
    grid-column: span 4;
  }
`,Ap=_.div`
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
`,Ep=_.div`
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
`,Cp=_.div`
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
`,Tp=_.div`
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
`,oy=()=>{const{gameState:l,actions:u}=Ba(),o=u.getCurrentPlayer(),c=f=>{switch(f){case V.SETUP:return"Game Setup";case V.CARD_VIEWING:return"Card Viewing";case V.PLAYING:return"Playing";case V.SCORING:return"Round Complete";case V.FINISHED:return"Game Finished";default:return f}};return p.jsx(ey,{children:p.jsxs(ty,{children:[p.jsxs(Cr,{children:[p.jsx(Tr,{children:"Phase"}),p.jsx(Sp,{children:c(l.round.phase)})]}),p.jsxs(Cr,{children:[p.jsx(Tr,{children:"Round"}),p.jsx(Sp,{children:l.match.currentRound})]}),(l.round.phase===V.PLAYING||l.round.phase===V.CARD_VIEWING)&&o&&p.jsxs(Cr,{children:[p.jsx(Tr,{children:"Current Player"}),p.jsxs(ay,{children:[p.jsx("span",{children:o.name}),o.type==="bot"&&p.jsx(ny,{children:"BOT"})]})]}),l.round.phase===V.PLAYING&&p.jsxs(Cr,{children:[p.jsx(Tr,{children:"Turn"}),p.jsx(cy,{isUrgent:l.round.stopCalled&&l.round.remainingTurns<=2,children:p.jsx("span",{className:"turn-number",children:l.round.turnNumber})}),l.round.stopCalled&&p.jsx(uy,{progress:(l.players.length-l.round.remainingTurns)/l.players.length*100})]}),l.round.stopCalled&&p.jsxs(ly,{children:[p.jsx(iy,{children:"🛑 STOP CALLED! 🛑"}),p.jsxs(ry,{children:[l.round.stopCalledBy&&(()=>{const f=l.players.find(g=>g.id===l.round.stopCalledBy);return f?`${f.name} called stop • `:""})(),l.round.remainingTurns," turn",l.round.remainingTurns!==1?"s":""," remaining"]})]}),l.round.phase===V.PLAYING&&p.jsxs(wp,{children:[p.jsx(Ap,{children:"Deck Progress"}),p.jsx(Ep,{children:p.jsx(Cp,{progress:(54-l.deck.drawPile.length)/54*100})}),p.jsxs(Tp,{children:[l.deck.drawPile.length," cards remaining • Turn ",l.round.turnNumber]})]}),l.match.roundsToWin>1&&p.jsxs(wp,{children:[p.jsx(Ap,{children:"Match Progress"}),p.jsx(Ep,{children:p.jsx(Cp,{progress:l.match.currentRound/l.match.roundsToWin*100})}),p.jsxs(Tp,{children:["Round ",l.match.currentRound," of ",l.match.roundsToWin]})]})]})})},sy=_.div`
  text-align: center;
  position: relative;
`,dy=_.div`
  margin-bottom: 16px;
`,fy=_.div`
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
`,py=_.div`
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
`,hy=_.div`
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
`,Dp=_.div`
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
`,_p=_.div`
  font-size: 20px;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`,gy=_.div`
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,xy=_.div`
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
`,my=_.div`
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
`,yy=_.div`
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
`,by=_.div`
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
`,vy=_.div`
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
`,Sy=()=>{const{gameState:l,actions:u}=Ba(),o=l.ui.selectedCard,c=o?u.getCardById(o):null,f=u.getCurrentPlayer();if(!c)return null;const g=l.ui.drawnFrom==="discard"||f&&f.type==="human",S=()=>c.suit==="hearts"||c.suit==="diamonds"?"#DC2626":"#1F2937",D=()=>{switch(c.suit){case"hearts":return"♥";case"diamonds":return"♦";case"clubs":return"♣";case"spades":return"♠";default:return""}},v=()=>c.rank==="joker"?"JOK":c.rank==="ace"?"A":c.rank==="king"?"K":c.rank==="queen"?"Q":c.rank==="jack"?"J":c.rank?.toUpperCase()||"";return p.jsx(sy,{children:p.jsx(dy,{children:p.jsx(fy,{children:g?p.jsxs(py,{color:S(),children:[p.jsxs(hy,{children:[p.jsx(Dp,{children:v()}),c.suit&&p.jsx(_p,{children:D()})]}),p.jsx(gy,{children:p.jsxs(xy,{children:[c.value," pts"]})}),p.jsxs(my,{children:[p.jsx(Dp,{children:v()}),c.suit&&p.jsx(_p,{children:D()})]}),c.isSpecial&&p.jsx(yy,{})]}):p.jsx(by,{children:p.jsx("div",{className:"back-inner",children:p.jsxs(vy,{children:[p.jsx("div",{className:"main-diamond"}),p.jsx("div",{className:"corner-accent top-left"}),p.jsx("div",{className:"corner-accent top-right"}),p.jsx("div",{className:"corner-accent bottom-left"}),p.jsx("div",{className:"corner-accent bottom-right"})]})})})})})})},wy=_.div`
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
`,Ay=_.div`
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
`,Ey=_.div`
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
`,Cy=_.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  z-index: 10;
`,Ty=_.h2`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  margin: 0 0 8px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Dy=_.p`
  font-size: 14px;
  opacity: 0.95;
  margin: 0;
  font-family: 'Inter', sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,_y=_.button`
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
`,Ry=_.div`
  padding: 32px;
  color: white;
  
  @media (max-width: 768px) {
    padding: 24px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
  }
`,zy=_.div`
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
`,Ny=_.h3`
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  font-size: 18px;
  color: #FFD700;
  margin: 0 0 8px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Oy=_.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Rp=_.div`
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`,zp=_.h3`
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
`,Dr=_.div`
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,Np=_.h4`
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
`,My=_.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  
  @media (max-width: 768px) {
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`,jy=_.div`
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
`,Uy=_.div`
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
`,ky=_.div`
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
`,Op=_.h4`
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
`,Mp=_.span`
  color: #10B981;
  font-weight: bold;
`,By=_.div`
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    padding: 12px;
    border-radius: 10px;
  }
`,Yy=_.h5`
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
`,Gy=_.div`
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
`,Hy=_.button`
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
`,qy=_.button`
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
`,Ly=({card:l,abilityType:u,onClose:o,onUse:c,onSkip:f})=>{const{gameState:g,actions:S}=Ba(),[D,v]=Ye.useState(null),[y,E]=Ye.useState({playerCardIndex:null,targetPlayerId:null,targetCardIndex:null}),[k,U]=Ye.useState(null),B=S.getCurrentPlayer(),Y=g.players.filter(G=>G.id!==B?.id),F=()=>{switch(u){case"peek":return"Look at any card on the table (yours or an opponent's)";case"swap":return"Swap one of your cards with an opponent's card";default:return""}},fe=G=>{v(G)},he=(G,X,K)=>{E(G==="player"?pe=>({...pe,playerCardIndex:K}):pe=>({...pe,targetPlayerId:X,targetCardIndex:K}))},ae=()=>u==="peek"?D!==null:u==="swap"?y.playerCardIndex!==null&&y.targetPlayerId!==null&&y.targetCardIndex!==null:!1,ee=()=>{u==="peek"&&D?c({targetCardId:D}):u==="swap"&&ae()&&c({playerCardIndex:y.playerCardIndex,targetPlayerId:y.targetPlayerId,targetCardIndex:y.targetCardIndex}),o()},ne=(G,X,K)=>p.jsx(My,{children:G.cards.map((pe,be)=>{const Ue=K==="peek"&&D===pe.cardId||K==="player"&&y.playerCardIndex===be||K==="target"&&y.targetPlayerId===G.id&&y.targetCardIndex===be,Ke=`${G.id}-${be}`,ze=k===Ke,rt=()=>u==="peek"?Ue?"Selected to peek":"Click to peek":u==="swap"?X?Ue?"Your card selected":"Click to select your card":Ue?"Target card selected":"Click to select target":"Click to select",Ge=()=>u==="peek"?"info":u==="swap"&&X?"primary":u==="swap"&&!X?"success":"primary";return p.jsxs(jy,{isSelected:Ue,onMouseEnter:()=>U(Ke),onMouseLeave:()=>U(null),onClick:()=>{u==="peek"?fe(pe.cardId):u==="swap"&&(X?he("player",void 0,be):he("target",G.id,be))},children:[p.jsx(To,{action:rt(),visible:ze&&!Ue,position:"top",variant:Ge()}),p.jsx(Uy,{children:p.jsxs(ky,{isKnown:!1,children:["Card ",be+1]})})]},be)})});return p.jsx(wy,{children:p.jsxs(Ay,{children:[p.jsx(Ey,{abilityType:u,children:p.jsxs(Cy,{children:[p.jsxs("div",{children:[p.jsxs(Ty,{children:["✨ Special Ability: ",u==="peek"?"Peek":"Swap"]}),p.jsx(Dy,{children:F()})]}),p.jsx(_y,{onClick:o,children:"×"})]})}),p.jsxs(Ry,{children:[p.jsxs(zy,{children:[p.jsxs(Ny,{children:["You drew: ",l.rank==="joker"?"joker":`${l.rank} of ${l.suit}`]}),p.jsx(Oy,{children:"This card has a special ability. Choose to use it or skip it."})]}),u==="peek"&&p.jsxs(Rp,{children:[p.jsx(zp,{children:"Choose a card to peek at:"}),B&&p.jsxs(Dr,{children:[p.jsx(Np,{children:"Your Cards:"}),ne(B,!0,"peek")]}),Y.map(G=>p.jsxs(Dr,{children:[p.jsxs(Np,{children:[G.name,"'s Cards:"]}),ne(G,!1,"peek")]},G.id))]}),u==="swap"&&p.jsxs(Rp,{children:[p.jsx(zp,{children:"Choose cards to swap:"}),B&&p.jsxs(Dr,{children:[p.jsxs(Op,{children:["Step 1: Select one of your cards",y.playerCardIndex!==null&&p.jsxs(Mp,{children:["✓ Card ",y.playerCardIndex+1," selected"]})]}),ne(B,!0,"player")]}),p.jsxs(Dr,{children:[p.jsxs(Op,{children:["Step 2: Select an opponent's card to swap with",y.targetPlayerId&&y.targetCardIndex!==null&&p.jsxs(Mp,{children:["✓ ",Y.find(G=>G.id===y.targetPlayerId)?.name,"'s card ",y.targetCardIndex+1," selected"]})]}),Y.map(G=>p.jsxs(By,{children:[p.jsxs(Yy,{children:[G.name,":"]}),ne(G,!1,"target")]},G.id))]})]})]}),p.jsxs(Gy,{children:[p.jsx(Hy,{onClick:()=>{f(),o()},children:"Skip Ability"}),p.jsx(qy,{onClick:ee,disabled:!ae(),children:"Use Ability"})]})]})})},Xy=_.div`
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
`,Iy=_.div`
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
`,Qy=_.div`
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
`,Ky=_.div`
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
`,Py=_.div`
  background: linear-gradient(135deg, #00bcd4 0%, #2196f3 50%, #9c27b0 100%);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 450px;
  margin: 0 auto;
  border: 4px solid #e91e63;
  backdrop-filter: blur(8px);
  overflow: visible;
`,Fy=_.h2`
  font-size: 2rem;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 16px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`,Zy=_.p`
  color: #ffffff;
  margin-bottom: 24px;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,Vy=_.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`,$y=_.div`
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
`,Jy=_.div`
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
`,Wy=_.div`
  display: flex;
  justify-content: center;
`,eb=_.div`
  display: flex;
  justify-content: center;
`,tb=_.div`
  text-align: center;
  margin-top: 16px;
  
  @media (max-width: 768px) {
    margin-top: 12px;
  }
  
  @media (max-width: 480px) {
    margin-top: 8px;
  }
`,ab=()=>{const{gameState:l,actions:u}=Ba(),o=l.ui.selectedCard,c=o?u.getCardById(o):null,f=c?.isSpecial&&l.ui.currentModal==="special-ability",g=D=>{c&&c.rank==="jack"&&u.swapCards(D.playerCardIndex,D.targetPlayerId,D.targetCardIndex)},S=()=>{c&&u.skipSpecialAbility(c.id)};return p.jsx(Xy,{children:p.jsxs(Iy,{children:[p.jsx(Qy,{children:p.jsxs(Ky,{children:[l.round.phase===V.SETUP&&p.jsx("div",{style:{textAlign:"center"},children:p.jsxs(Py,{children:[p.jsx(Fy,{children:"Welcome to the Table!"}),p.jsx(Zy,{children:"Ready to test your memory? Start a new game to begin playing."}),p.jsx(vp,{})]})}),(l.round.phase===V.CARD_VIEWING||l.round.phase===V.PLAYING||l.round.phase===V.SCORING||l.round.phase===V.FINISHED)&&p.jsxs(Vy,{children:[l.players.length>1&&p.jsx($y,{children:l.players.slice(1).map((D,v)=>p.jsx(fp,{player:D,isCurrentPlayer:l.round.currentPlayerIndex===v+1,showAsOpponent:!0},D.id))}),p.jsxs(Jy,{children:[p.jsx(Qm,{}),p.jsx(Sy,{})]}),l.players.length>0&&p.jsx(Wy,{children:p.jsx(fp,{player:l.players[0],isCurrentPlayer:l.round.currentPlayerIndex===0,showAsOpponent:!1})}),p.jsx(eb,{children:p.jsx(vp,{})}),p.jsx(tb,{children:p.jsx(oy,{})})]})]})}),f&&c&&p.jsx(Ly,{card:c,abilityType:c.rank==="queen"?"peek":"swap",onClose:()=>u.hideModal(),onUse:g,onSkip:S})]})})};_.div`
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
`;_.div`
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
`;_.div`
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
`;_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
`;_.h2`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;_.button`
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
`;_.div`
  padding: 32px;
  color: white;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 24px;
  }
`;_.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;_.div`
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
`;_.div`
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
`;_.div`
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
`;_.div`
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
`;_.div`
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;_.h3`
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
`;_.p`
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
`;_.p`
  color: #FFD700;
  font-weight: bold;
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;_.div`
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
`;_.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%);
  padding: 20px 32px;
  border-radius: 0 0 17px 17px;
  border-top: 2px solid rgba(52, 211, 153, 0.2);
  
  @media (max-width: 768px) {
    padding: 16px 24px;
    border-radius: 0 0 13px 13px;
  }
`;_.button`
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
`;function nb(){return p.jsx(fx,{children:p.jsx(ab,{})})}Q1.createRoot(document.getElementById("root")).render(p.jsx(Ye.StrictMode,{children:p.jsx(nb,{})}));
