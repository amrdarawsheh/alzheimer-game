(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const g of p)if(g.type==="childList")for(const A of g.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&c(A)}).observe(document,{childList:!0,subtree:!0});function s(p){const g={};return p.integrity&&(g.integrity=p.integrity),p.referrerPolicy&&(g.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?g.credentials="include":p.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function c(p){if(p.ep)return;p.ep=!0;const g=s(p);fetch(p.href,g)}})();function Ux(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var ns={exports:{}},Pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function Bx(){if(D0)return Pl;D0=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function s(c,p,g){var A=null;if(g!==void 0&&(A=""+g),p.key!==void 0&&(A=""+p.key),"key"in p){g={};for(var v in p)v!=="key"&&(g[v]=p[v])}else g=p;return p=g.ref,{$$typeof:l,type:c,key:A,ref:p!==void 0?p:null,props:g}}return Pl.Fragment=u,Pl.jsx=s,Pl.jsxs=s,Pl}var R0;function kx(){return R0||(R0=1,ns.exports=Bx()),ns.exports}var f=kx(),ls={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function Yx(){if(z0)return ne;z0=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),A=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),B=Symbol.iterator;function k(x){return x===null||typeof x!="object"?null:(x=B&&x[B]||x["@@iterator"],typeof x=="function"?x:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,te={};function pe(x,M,z){this.props=x,this.context=M,this.refs=te,this.updater=z||H}pe.prototype.isReactComponent={},pe.prototype.setState=function(x,M){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,M,"setState")},pe.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function fe(){}fe.prototype=pe.prototype;function ce(x,M,z){this.props=x,this.context=M,this.refs=te,this.updater=z||H}var W=ce.prototype=new fe;W.constructor=ce,q(W,pe.prototype),W.isPureReactComponent=!0;var ae=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},L=Object.prototype.hasOwnProperty;function K(x,M,z,U,X,ee){return z=ee.ref,{$$typeof:l,type:x,key:M,ref:z!==void 0?z:null,props:ee}}function be(x,M){return K(x.type,M,void 0,void 0,void 0,x.props)}function Ce(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function Ie(x){var M={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(z){return M[z]})}var $e=/\/+/g;function Oe(x,M){return typeof x=="object"&&x!==null&&x.key!=null?Ie(""+x.key):M.toString(36)}function wt(){}function Et(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(wt,wt):(x.status="pending",x.then(function(M){x.status==="pending"&&(x.status="fulfilled",x.value=M)},function(M){x.status==="pending"&&(x.status="rejected",x.reason=M)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function He(x,M,z,U,X){var ee=typeof x;(ee==="undefined"||ee==="boolean")&&(x=null);var F=!1;if(x===null)F=!0;else switch(ee){case"bigint":case"string":case"number":F=!0;break;case"object":switch(x.$$typeof){case l:case u:F=!0;break;case T:return F=x._init,He(F(x._payload),M,z,U,X)}}if(F)return X=X(x),F=U===""?"."+Oe(x,0):U,ae(X)?(z="",F!=null&&(z=F.replace($e,"$&/")+"/"),He(X,M,z,"",function(tt){return tt})):X!=null&&(Ce(X)&&(X=be(X,z+(X.key==null||x&&x.key===X.key?"":(""+X.key).replace($e,"$&/")+"/")+F)),M.push(X)),1;F=0;var Xe=U===""?".":U+":";if(ae(x))for(var me=0;me<x.length;me++)U=x[me],ee=Xe+Oe(U,me),F+=He(U,M,z,ee,X);else if(me=k(x),typeof me=="function")for(x=me.call(x),me=0;!(U=x.next()).done;)U=U.value,ee=Xe+Oe(U,me++),F+=He(U,M,z,ee,X);else if(ee==="object"){if(typeof x.then=="function")return He(Et(x),M,z,U,X);throw M=String(x),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return F}function _(x,M,z){if(x==null)return x;var U=[],X=0;return He(x,U,"","",function(ee){return M.call(z,ee,X++)}),U}function Y(x){if(x._status===-1){var M=x._result;M=M(),M.then(function(z){(x._status===0||x._status===-1)&&(x._status=1,x._result=z)},function(z){(x._status===0||x._status===-1)&&(x._status=2,x._result=z)}),x._status===-1&&(x._status=0,x._result=M)}if(x._status===1)return x._result.default;throw x._result}var V=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function re(){}return ne.Children={map:_,forEach:function(x,M,z){_(x,function(){M.apply(this,arguments)},z)},count:function(x){var M=0;return _(x,function(){M++}),M},toArray:function(x){return _(x,function(M){return M})||[]},only:function(x){if(!Ce(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ne.Component=pe,ne.Fragment=s,ne.Profiler=p,ne.PureComponent=ce,ne.StrictMode=c,ne.Suspense=D,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ne.__COMPILER_RUNTIME={__proto__:null,c:function(x){return G.H.useMemoCache(x)}},ne.cache=function(x){return function(){return x.apply(null,arguments)}},ne.cloneElement=function(x,M,z){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var U=q({},x.props),X=x.key,ee=void 0;if(M!=null)for(F in M.ref!==void 0&&(ee=void 0),M.key!==void 0&&(X=""+M.key),M)!L.call(M,F)||F==="key"||F==="__self"||F==="__source"||F==="ref"&&M.ref===void 0||(U[F]=M[F]);var F=arguments.length-2;if(F===1)U.children=z;else if(1<F){for(var Xe=Array(F),me=0;me<F;me++)Xe[me]=arguments[me+2];U.children=Xe}return K(x.type,X,void 0,void 0,ee,U)},ne.createContext=function(x){return x={$$typeof:A,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:g,_context:x},x},ne.createElement=function(x,M,z){var U,X={},ee=null;if(M!=null)for(U in M.key!==void 0&&(ee=""+M.key),M)L.call(M,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(X[U]=M[U]);var F=arguments.length-2;if(F===1)X.children=z;else if(1<F){for(var Xe=Array(F),me=0;me<F;me++)Xe[me]=arguments[me+2];X.children=Xe}if(x&&x.defaultProps)for(U in F=x.defaultProps,F)X[U]===void 0&&(X[U]=F[U]);return K(x,ee,void 0,void 0,null,X)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(x){return{$$typeof:v,render:x}},ne.isValidElement=Ce,ne.lazy=function(x){return{$$typeof:T,_payload:{_status:-1,_result:x},_init:Y}},ne.memo=function(x,M){return{$$typeof:y,type:x,compare:M===void 0?null:M}},ne.startTransition=function(x){var M=G.T,z={};G.T=z;try{var U=x(),X=G.S;X!==null&&X(z,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(re,V)}catch(ee){V(ee)}finally{G.T=M}},ne.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ne.use=function(x){return G.H.use(x)},ne.useActionState=function(x,M,z){return G.H.useActionState(x,M,z)},ne.useCallback=function(x,M){return G.H.useCallback(x,M)},ne.useContext=function(x){return G.H.useContext(x)},ne.useDebugValue=function(){},ne.useDeferredValue=function(x,M){return G.H.useDeferredValue(x,M)},ne.useEffect=function(x,M,z){var U=G.H;if(typeof z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return U.useEffect(x,M)},ne.useId=function(){return G.H.useId()},ne.useImperativeHandle=function(x,M,z){return G.H.useImperativeHandle(x,M,z)},ne.useInsertionEffect=function(x,M){return G.H.useInsertionEffect(x,M)},ne.useLayoutEffect=function(x,M){return G.H.useLayoutEffect(x,M)},ne.useMemo=function(x,M){return G.H.useMemo(x,M)},ne.useOptimistic=function(x,M){return G.H.useOptimistic(x,M)},ne.useReducer=function(x,M,z){return G.H.useReducer(x,M,z)},ne.useRef=function(x){return G.H.useRef(x)},ne.useState=function(x){return G.H.useState(x)},ne.useSyncExternalStore=function(x,M,z){return G.H.useSyncExternalStore(x,M,z)},ne.useTransition=function(){return G.H.useTransition()},ne.version="19.1.0",ne}var _0;function Ts(){return _0||(_0=1,ls.exports=Yx()),ls.exports}var Be=Ts();const Wl=Ux(Be);var is={exports:{}},Il={},rs={exports:{}},us={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function Gx(){return N0||(N0=1,function(l){function u(_,Y){var V=_.length;_.push(Y);e:for(;0<V;){var re=V-1>>>1,x=_[re];if(0<p(x,Y))_[re]=Y,_[V]=x,V=re;else break e}}function s(_){return _.length===0?null:_[0]}function c(_){if(_.length===0)return null;var Y=_[0],V=_.pop();if(V!==Y){_[0]=V;e:for(var re=0,x=_.length,M=x>>>1;re<M;){var z=2*(re+1)-1,U=_[z],X=z+1,ee=_[X];if(0>p(U,V))X<x&&0>p(ee,U)?(_[re]=ee,_[X]=V,re=X):(_[re]=U,_[z]=V,re=z);else if(X<x&&0>p(ee,V))_[re]=ee,_[X]=V,re=X;else break e}}return Y}function p(_,Y){var V=_.sortIndex-Y.sortIndex;return V!==0?V:_.id-Y.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;l.unstable_now=function(){return g.now()}}else{var A=Date,v=A.now();l.unstable_now=function(){return A.now()-v}}var D=[],y=[],T=1,B=null,k=3,H=!1,q=!1,te=!1,pe=!1,fe=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function ae(_){for(var Y=s(y);Y!==null;){if(Y.callback===null)c(y);else if(Y.startTime<=_)c(y),Y.sortIndex=Y.expirationTime,u(D,Y);else break;Y=s(y)}}function G(_){if(te=!1,ae(_),!q)if(s(D)!==null)q=!0,L||(L=!0,Oe());else{var Y=s(y);Y!==null&&He(G,Y.startTime-_)}}var L=!1,K=-1,be=5,Ce=-1;function Ie(){return pe?!0:!(l.unstable_now()-Ce<be)}function $e(){if(pe=!1,L){var _=l.unstable_now();Ce=_;var Y=!0;try{e:{q=!1,te&&(te=!1,ce(K),K=-1),H=!0;var V=k;try{t:{for(ae(_),B=s(D);B!==null&&!(B.expirationTime>_&&Ie());){var re=B.callback;if(typeof re=="function"){B.callback=null,k=B.priorityLevel;var x=re(B.expirationTime<=_);if(_=l.unstable_now(),typeof x=="function"){B.callback=x,ae(_),Y=!0;break t}B===s(D)&&c(D),ae(_)}else c(D);B=s(D)}if(B!==null)Y=!0;else{var M=s(y);M!==null&&He(G,M.startTime-_),Y=!1}}break e}finally{B=null,k=V,H=!1}Y=void 0}}finally{Y?Oe():L=!1}}}var Oe;if(typeof W=="function")Oe=function(){W($e)};else if(typeof MessageChannel<"u"){var wt=new MessageChannel,Et=wt.port2;wt.port1.onmessage=$e,Oe=function(){Et.postMessage(null)}}else Oe=function(){fe($e,0)};function He(_,Y){K=fe(function(){_(l.unstable_now())},Y)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(_){_.callback=null},l.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):be=0<_?Math.floor(1e3/_):5},l.unstable_getCurrentPriorityLevel=function(){return k},l.unstable_next=function(_){switch(k){case 1:case 2:case 3:var Y=3;break;default:Y=k}var V=k;k=Y;try{return _()}finally{k=V}},l.unstable_requestPaint=function(){pe=!0},l.unstable_runWithPriority=function(_,Y){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var V=k;k=_;try{return Y()}finally{k=V}},l.unstable_scheduleCallback=function(_,Y,V){var re=l.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?re+V:re):V=re,_){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=V+x,_={id:T++,callback:Y,priorityLevel:_,startTime:V,expirationTime:x,sortIndex:-1},V>re?(_.sortIndex=V,u(y,_),s(D)===null&&_===s(y)&&(te?(ce(K),K=-1):te=!0,He(G,V-re))):(_.sortIndex=x,u(D,_),q||H||(q=!0,L||(L=!0,Oe()))),_},l.unstable_shouldYield=Ie,l.unstable_wrapCallback=function(_){var Y=k;return function(){var V=k;k=Y;try{return _.apply(this,arguments)}finally{k=V}}}}(us)),us}var j0;function Hx(){return j0||(j0=1,rs.exports=Gx()),rs.exports}var cs={exports:{}},lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function qx(){if(O0)return lt;O0=1;var l=Ts();function u(D){var y="https://react.dev/errors/"+D;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)y+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+D+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(u(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},p=Symbol.for("react.portal");function g(D,y,T){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:B==null?null:""+B,children:D,containerInfo:y,implementation:T}}var A=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(D,y){if(D==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,lt.createPortal=function(D,y){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(u(299));return g(D,y,null,T)},lt.flushSync=function(D){var y=A.T,T=c.p;try{if(A.T=null,c.p=2,D)return D()}finally{A.T=y,c.p=T,c.d.f()}},lt.preconnect=function(D,y){typeof D=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,c.d.C(D,y))},lt.prefetchDNS=function(D){typeof D=="string"&&c.d.D(D)},lt.preinit=function(D,y){if(typeof D=="string"&&y&&typeof y.as=="string"){var T=y.as,B=v(T,y.crossOrigin),k=typeof y.integrity=="string"?y.integrity:void 0,H=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;T==="style"?c.d.S(D,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:B,integrity:k,fetchPriority:H}):T==="script"&&c.d.X(D,{crossOrigin:B,integrity:k,fetchPriority:H,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},lt.preinitModule=function(D,y){if(typeof D=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var T=v(y.as,y.crossOrigin);c.d.M(D,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&c.d.M(D)},lt.preload=function(D,y){if(typeof D=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var T=y.as,B=v(T,y.crossOrigin);c.d.L(D,T,{crossOrigin:B,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},lt.preloadModule=function(D,y){if(typeof D=="string")if(y){var T=v(y.as,y.crossOrigin);c.d.m(D,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else c.d.m(D)},lt.requestFormReset=function(D){c.d.r(D)},lt.unstable_batchedUpdates=function(D,y){return D(y)},lt.useFormState=function(D,y,T){return A.H.useFormState(D,y,T)},lt.useFormStatus=function(){return A.H.useHostTransitionStatus()},lt.version="19.1.0",lt}var M0;function Lx(){if(M0)return cs.exports;M0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),cs.exports=qx(),cs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function Xx(){if(U0)return Il;U0=1;var l=Hx(),u=Ts(),s=Lx();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function A(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(g(e)!==e)throw Error(c(188))}function D(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return v(i),e;if(r===n)return v(i),t;r=r.sibling}throw Error(c(188))}if(a.return!==n.return)a=i,n=r;else{for(var o=!1,d=i.child;d;){if(d===a){o=!0,a=i,n=r;break}if(d===n){o=!0,n=i,a=r;break}d=d.sibling}if(!o){for(d=r.child;d;){if(d===a){o=!0,a=r,n=i;break}if(d===n){o=!0,n=r,a=i;break}d=d.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,B=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),te=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),fe=Symbol.for("react.provider"),ce=Symbol.for("react.consumer"),W=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),Ce=Symbol.for("react.activity"),Ie=Symbol.for("react.memo_cache_sentinel"),$e=Symbol.iterator;function Oe(e){return e===null||typeof e!="object"?null:(e=$e&&e[$e]||e["@@iterator"],typeof e=="function"?e:null)}var wt=Symbol.for("react.client.reference");function Et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===wt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case pe:return"Profiler";case te:return"StrictMode";case G:return"Suspense";case L:return"SuspenseList";case Ce:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case W:return(e.displayName||"Context")+".Provider";case ce:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:Et(e.type)||"Memo";case be:t=e._payload,e=e._init;try{return Et(e(t))}catch{}}return null}var He=Array.isArray,_=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},re=[],x=-1;function M(e){return{current:e}}function z(e){0>x||(e.current=re[x],re[x]=null,x--)}function U(e,t){x++,re[x]=e.current,e.current=t}var X=M(null),ee=M(null),F=M(null),Xe=M(null);function me(e,t){switch(U(F,t),U(ee,e),U(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?t0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=t0(t),e=a0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(X),U(X,e)}function tt(){z(X),z(ee),z(F)}function Ua(e){e.memoizedState!==null&&U(Xe,e);var t=X.current,a=a0(t,e.type);t!==a&&(U(ee,e),U(X,a))}function Zt(e){ee.current===e&&(z(X),z(ee)),Xe.current===e&&(z(Xe),Ql._currentValue=V)}var At=Object.prototype.hasOwnProperty,Qr=l.unstable_scheduleCallback,Kr=l.unstable_cancelCallback,ph=l.unstable_shouldYield,hh=l.unstable_requestPaint,Gt=l.unstable_now,gh=l.unstable_getCurrentPriorityLevel,Os=l.unstable_ImmediatePriority,Ms=l.unstable_UserBlockingPriority,li=l.unstable_NormalPriority,xh=l.unstable_LowPriority,Us=l.unstable_IdlePriority,mh=l.log,yh=l.unstable_setDisableYieldValue,Jn=null,ft=null;function oa(e){if(typeof mh=="function"&&yh(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(Jn,e)}catch{}}var pt=Math.clz32?Math.clz32:Sh,bh=Math.log,vh=Math.LN2;function Sh(e){return e>>>=0,e===0?32:31-(bh(e)/vh|0)|0}var ii=256,ri=4194304;function Ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ui(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var d=n&134217727;return d!==0?(n=d&~r,n!==0?i=Ba(n):(o&=d,o!==0?i=Ba(o):a||(a=d&~e,a!==0&&(i=Ba(a))))):(d=n&~r,d!==0?i=Ba(d):o!==0?i=Ba(o):a||(a=n&~e,a!==0&&(i=Ba(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function Wn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function wh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bs(){var e=ii;return ii<<=1,(ii&4194048)===0&&(ii=256),e}function ks(){var e=ri;return ri<<=1,(ri&62914560)===0&&(ri=4194304),e}function Zr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function el(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Eh(e,t,a,n,i,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,h=e.expirationTimes,w=e.hiddenUpdates;for(a=o&~a;0<a;){var N=31-pt(a),O=1<<N;d[N]=0,h[N]=-1;var E=w[N];if(E!==null)for(w[N]=null,N=0;N<E.length;N++){var C=E[N];C!==null&&(C.lane&=-536870913)}a&=~O}n!==0&&Ys(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function Ys(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-pt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Gs(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-pt(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Vr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hs(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:S0(e.type))}function Ah(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var da=Math.random().toString(36).slice(2),at="__reactFiber$"+da,rt="__reactProps$"+da,nn="__reactContainer$"+da,Pr="__reactEvents$"+da,Th="__reactListeners$"+da,Ch="__reactHandles$"+da,qs="__reactResources$"+da,tl="__reactMarker$"+da;function Ir(e){delete e[at],delete e[rt],delete e[Pr],delete e[Th],delete e[Ch]}function ln(e){var t=e[at];if(t)return t;for(var a=e.parentNode;a;){if(t=a[nn]||a[at]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=r0(e);e!==null;){if(a=e[at])return a;e=r0(e)}return t}e=a,a=e.parentNode}return null}function rn(e){if(e=e[at]||e[nn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function al(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function un(e){var t=e[qs];return t||(t=e[qs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[tl]=!0}var Ls=new Set,Xs={};function ka(e,t){cn(e,t),cn(e+"Capture",t)}function cn(e,t){for(Xs[e]=t,e=0;e<t.length;e++)Ls.add(t[e])}var Dh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qs={},Ks={};function Rh(e){return At.call(Ks,e)?!0:At.call(Qs,e)?!1:Dh.test(e)?Ks[e]=!0:(Qs[e]=!0,!1)}function ci(e,t,a){if(Rh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function si(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Vt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var $r,Zs;function sn(e){if($r===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);$r=t&&t[1]||"",Zs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$r+e+Zs}var Jr=!1;function Wr(e,t){if(!e||Jr)return"";Jr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(C){var E=C}Reflect.construct(e,[],O)}else{try{O.call()}catch(C){E=C}e.call(O.prototype)}}else{try{throw Error()}catch(C){E=C}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(C){if(C&&E&&typeof C.stack=="string")return[C.stack,E.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),o=r[0],d=r[1];if(o&&d){var h=o.split(`
`),w=d.split(`
`);for(i=n=0;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;for(;i<w.length&&!w[i].includes("DetermineComponentFrameRoot");)i++;if(n===h.length||i===w.length)for(n=h.length-1,i=w.length-1;1<=n&&0<=i&&h[n]!==w[i];)i--;for(;1<=n&&0<=i;n--,i--)if(h[n]!==w[i]){if(n!==1||i!==1)do if(n--,i--,0>i||h[n]!==w[i]){var N=`
`+h[n].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=n&&0<=i);break}}}finally{Jr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?sn(a):""}function zh(e){switch(e.tag){case 26:case 27:case 5:return sn(e.type);case 16:return sn("Lazy");case 13:return sn("Suspense");case 19:return sn("SuspenseList");case 0:case 15:return Wr(e.type,!1);case 11:return Wr(e.type.render,!1);case 1:return Wr(e.type,!0);case 31:return sn("Activity");default:return""}}function Vs(e){try{var t="";do t+=zh(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _h(e){var t=Fs(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oi(e){e._valueTracker||(e._valueTracker=_h(e))}function Ps(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Fs(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nh=/[\n"\\]/g;function Ct(e){return e.replace(Nh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function eu(e,t,a,n,i,r,o,d){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Tt(t)):e.value!==""+Tt(t)&&(e.value=""+Tt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?tu(e,o,Tt(t)):a!=null?tu(e,o,Tt(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+Tt(d):e.removeAttribute("name")}function Is(e,t,a,n,i,r,o,d){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+Tt(a):"",t=t!=null?""+Tt(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=d?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function tu(e,t,a){t==="number"&&di(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function on(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Tt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $s(e,t,a){if(t!=null&&(t=""+Tt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Tt(a):""}function Js(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(He(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Tt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function dn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var jh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ws(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||jh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function eo(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&Ws(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&Ws(e,r,t[r])}function au(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fi(e){return Mh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var nu=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function to(e){var t=rn(e);if(t&&(e=t.stateNode)){var a=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(eu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ct(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[rt]||null;if(!i)throw Error(c(90));eu(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Ps(n)}break e;case"textarea":$s(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&on(e,!!a.multiple,t,!1)}}}var iu=!1;function ao(e,t,a){if(iu)return e(t,a);iu=!0;try{var n=e(t);return n}finally{if(iu=!1,(fn!==null||pn!==null)&&($i(),fn&&(t=fn,e=pn,pn=fn=null,to(t),e)))for(t=0;t<e.length;t++)to(e[t])}}function nl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[rt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(Ft)try{var ll={};Object.defineProperty(ll,"passive",{get:function(){ru=!0}}),window.addEventListener("test",ll,ll),window.removeEventListener("test",ll,ll)}catch{ru=!1}var fa=null,uu=null,pi=null;function no(){if(pi)return pi;var e,t=uu,a=t.length,n,i="value"in fa?fa.value:fa.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===i[r-n];n++);return pi=i.slice(e,1<n?1-n:void 0)}function hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gi(){return!0}function lo(){return!1}function ut(e){function t(a,n,i,r,o){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(r):r[d]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?gi:lo,this.isPropagationStopped=lo,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gi)},persist:function(){},isPersistent:gi}),t}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xi=ut(Ya),il=T({},Ya,{view:0,detail:0}),Uh=ut(il),cu,su,rl,mi=T({},il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rl&&(rl&&e.type==="mousemove"?(cu=e.screenX-rl.screenX,su=e.screenY-rl.screenY):su=cu=0,rl=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:su}}),io=ut(mi),Bh=T({},mi,{dataTransfer:0}),kh=ut(Bh),Yh=T({},il,{relatedTarget:0}),ou=ut(Yh),Gh=T({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),Hh=ut(Gh),qh=T({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lh=ut(qh),Xh=T({},Ya,{data:0}),ro=ut(Xh),Qh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zh[e])?!!t[e]:!1}function du(){return Vh}var Fh=T({},il,{key:function(e){if(e.key){var t=Qh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ph=ut(Fh),Ih=T({},mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uo=ut(Ih),$h=T({},il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),Jh=ut($h),Wh=T({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),eg=ut(Wh),tg=T({},mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ag=ut(tg),ng=T({},Ya,{newState:0,oldState:0}),lg=ut(ng),ig=[9,13,27,32],fu=Ft&&"CompositionEvent"in window,ul=null;Ft&&"documentMode"in document&&(ul=document.documentMode);var rg=Ft&&"TextEvent"in window&&!ul,co=Ft&&(!fu||ul&&8<ul&&11>=ul),so=" ",oo=!1;function fo(e,t){switch(e){case"keyup":return ig.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function po(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function ug(e,t){switch(e){case"compositionend":return po(t);case"keypress":return t.which!==32?null:(oo=!0,so);case"textInput":return e=t.data,e===so&&oo?null:e;default:return null}}function cg(e,t){if(hn)return e==="compositionend"||!fu&&fo(e,t)?(e=no(),pi=uu=fa=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return co&&t.locale!=="ko"?null:t.data;default:return null}}var sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sg[e.type]:t==="textarea"}function go(e,t,a,n){fn?pn?pn.push(n):pn=[n]:fn=n,t=nr(t,"onChange"),0<t.length&&(a=new xi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var cl=null,sl=null;function og(e){If(e,0)}function yi(e){var t=al(e);if(Ps(t))return e}function xo(e,t){if(e==="change")return t}var mo=!1;if(Ft){var pu;if(Ft){var hu="oninput"in document;if(!hu){var yo=document.createElement("div");yo.setAttribute("oninput","return;"),hu=typeof yo.oninput=="function"}pu=hu}else pu=!1;mo=pu&&(!document.documentMode||9<document.documentMode)}function bo(){cl&&(cl.detachEvent("onpropertychange",vo),sl=cl=null)}function vo(e){if(e.propertyName==="value"&&yi(sl)){var t=[];go(t,sl,e,lu(e)),ao(og,t)}}function dg(e,t,a){e==="focusin"?(bo(),cl=t,sl=a,cl.attachEvent("onpropertychange",vo)):e==="focusout"&&bo()}function fg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(sl)}function pg(e,t){if(e==="click")return yi(t)}function hg(e,t){if(e==="input"||e==="change")return yi(t)}function gg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:gg;function ol(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!At.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function So(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wo(e,t){var a=So(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=So(a)}}function Eo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Eo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ao(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=di(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=di(e.document)}return t}function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var xg=Ft&&"documentMode"in document&&11>=document.documentMode,gn=null,xu=null,dl=null,mu=!1;function To(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mu||gn==null||gn!==di(n)||(n=gn,"selectionStart"in n&&gu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),dl&&ol(dl,n)||(dl=n,n=nr(xu,"onSelect"),0<n.length&&(t=new xi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=gn)))}function Ga(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var xn={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},yu={},Co={};Ft&&(Co=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function Ha(e){if(yu[e])return yu[e];if(!xn[e])return e;var t=xn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Co)return yu[e]=t[a];return e}var Do=Ha("animationend"),Ro=Ha("animationiteration"),zo=Ha("animationstart"),mg=Ha("transitionrun"),yg=Ha("transitionstart"),bg=Ha("transitioncancel"),_o=Ha("transitionend"),No=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function Ut(e,t){No.set(e,t),ka(t,[e])}var jo=new WeakMap;function Dt(e,t){if(typeof e=="object"&&e!==null){var a=jo.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Vs(t)},jo.set(e,t),t)}return{value:e,source:t,stack:Vs(t)}}var Rt=[],mn=0,vu=0;function bi(){for(var e=mn,t=vu=mn=0;t<e;){var a=Rt[t];Rt[t++]=null;var n=Rt[t];Rt[t++]=null;var i=Rt[t];Rt[t++]=null;var r=Rt[t];if(Rt[t++]=null,n!==null&&i!==null){var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}r!==0&&Oo(a,i,r)}}function vi(e,t,a,n){Rt[mn++]=e,Rt[mn++]=t,Rt[mn++]=a,Rt[mn++]=n,vu|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Su(e,t,a,n){return vi(e,t,a,n),Si(e)}function yn(e,t){return vi(e,null,null,t),Si(e)}function Oo(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-pt(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function Si(e){if(50<Bl)throw Bl=0,Dc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var bn={};function vg(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,a,n){return new vg(e,t,a,n)}function wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pt(e,t){var a=e.alternate;return a===null?(a=gt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Mo(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function wi(e,t,a,n,i,r){var o=0;if(n=e,typeof e=="function")wu(e)&&(o=1);else if(typeof e=="string")o=wx(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ce:return e=gt(31,a,t,i),e.elementType=Ce,e.lanes=r,e;case q:return qa(a.children,i,r,t);case te:o=8,i|=24;break;case pe:return e=gt(12,a,t,i|2),e.elementType=pe,e.lanes=r,e;case G:return e=gt(13,a,t,i),e.elementType=G,e.lanes=r,e;case L:return e=gt(19,a,t,i),e.elementType=L,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fe:case W:o=10;break e;case ce:o=9;break e;case ae:o=11;break e;case K:o=14;break e;case be:o=16,n=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=gt(o,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function qa(e,t,a,n){return e=gt(7,e,n,t),e.lanes=a,e}function Eu(e,t,a){return e=gt(6,e,null,t),e.lanes=a,e}function Au(e,t,a){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vn=[],Sn=0,Ei=null,Ai=0,zt=[],_t=0,La=null,It=1,$t="";function Xa(e,t){vn[Sn++]=Ai,vn[Sn++]=Ei,Ei=e,Ai=t}function Uo(e,t,a){zt[_t++]=It,zt[_t++]=$t,zt[_t++]=La,La=e;var n=It;e=$t;var i=32-pt(n)-1;n&=~(1<<i),a+=1;var r=32-pt(t)+i;if(30<r){var o=i-i%5;r=(n&(1<<o)-1).toString(32),n>>=o,i-=o,It=1<<32-pt(t)+i|a<<i|n,$t=r+e}else It=1<<r|a<<i|n,$t=e}function Tu(e){e.return!==null&&(Xa(e,1),Uo(e,1,0))}function Cu(e){for(;e===Ei;)Ei=vn[--Sn],vn[Sn]=null,Ai=vn[--Sn],vn[Sn]=null;for(;e===La;)La=zt[--_t],zt[_t]=null,$t=zt[--_t],zt[_t]=null,It=zt[--_t],zt[_t]=null}var it=null,Ne=null,xe=!1,Qa=null,Ht=!1,Du=Error(c(519));function Ka(e){var t=Error(c(418,""));throw hl(Dt(t,e)),Du}function Bo(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[at]=e,t[rt]=n,a){case"dialog":oe("cancel",t),oe("close",t);break;case"iframe":case"object":case"embed":oe("load",t);break;case"video":case"audio":for(a=0;a<Yl.length;a++)oe(Yl[a],t);break;case"source":oe("error",t);break;case"img":case"image":case"link":oe("error",t),oe("load",t);break;case"details":oe("toggle",t);break;case"input":oe("invalid",t),Is(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),oi(t);break;case"select":oe("invalid",t);break;case"textarea":oe("invalid",t),Js(t,n.value,n.defaultValue,n.children),oi(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||e0(t.textContent,a)?(n.popover!=null&&(oe("beforetoggle",t),oe("toggle",t)),n.onScroll!=null&&oe("scroll",t),n.onScrollEnd!=null&&oe("scrollend",t),n.onClick!=null&&(t.onclick=lr),t=!0):t=!1,t||Ka(e)}function ko(e){for(it=e.return;it;)switch(it.tag){case 5:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:it=it.return}}function fl(e){if(e!==it)return!1;if(!xe)return ko(e),xe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xc(e.type,e.memoizedProps)),a=!a),a&&Ne&&Ka(e),ko(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ne=kt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ne=null}}else t===27?(t=Ne,Ra(e.type)?(e=Vc,Vc=null,Ne=e):Ne=t):Ne=it?kt(e.stateNode.nextSibling):null;return!0}function pl(){Ne=it=null,xe=!1}function Yo(){var e=Qa;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),Qa=null),e}function hl(e){Qa===null?Qa=[e]:Qa.push(e)}var Ru=M(null),Za=null,Jt=null;function pa(e,t,a){U(Ru,t._currentValue),t._currentValue=a}function Wt(e){e._currentValue=Ru.current,z(Ru)}function zu(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function _u(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var o=i.child;r=r.firstContext;e:for(;r!==null;){var d=r;r=i;for(var h=0;h<t.length;h++)if(d.context===t[h]){r.lanes|=a,d=r.alternate,d!==null&&(d.lanes|=a),zu(r.return,a,e),n||(o=null);break e}r=d.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(c(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),zu(o,a,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function gl(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var d=i.type;ht(i.pendingProps.value,o.value)||(e!==null?e.push(d):e=[d])}}else if(i===Xe.current){if(o=i.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Ql):e=[Ql])}i=i.return}e!==null&&_u(t,e,a,n),t.flags|=262144}function Ti(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Va(e){Za=e,Jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nt(e){return Go(Za,e)}function Ci(e,t){return Za===null&&Va(e),Go(e,t)}function Go(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Jt===null){if(e===null)throw Error(c(308));Jt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Jt=Jt.next=t;return a}var Sg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},wg=l.unstable_scheduleCallback,Eg=l.unstable_NormalPriority,qe={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nu(){return{controller:new Sg,data:new Map,refCount:0}}function xl(e){e.refCount--,e.refCount===0&&wg(Eg,function(){e.controller.abort()})}var ml=null,ju=0,wn=0,En=null;function Ag(e,t){if(ml===null){var a=ml=[];ju=0,wn=Mc(),En={status:"pending",value:void 0,then:function(n){a.push(n)}}}return ju++,t.then(Ho,Ho),t}function Ho(){if(--ju===0&&ml!==null){En!==null&&(En.status="fulfilled");var e=ml;ml=null,wn=0,En=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Tg(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var qo=_.S;_.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ag(e,t),qo!==null&&qo(e,t)};var Fa=M(null);function Ou(){var e=Fa.current;return e!==null?e:De.pooledCache}function Di(e,t){t===null?U(Fa,Fa.current):U(Fa,t.pool)}function Lo(){var e=Ou();return e===null?null:{parent:qe._currentValue,pool:e}}var yl=Error(c(460)),Xo=Error(c(474)),Ri=Error(c(542)),Mu={then:function(){}};function Qo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zi(){}function Ko(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(zi,zi),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vo(e),e;default:if(typeof t.status=="string")t.then(zi,zi);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vo(e),e}throw bl=t,yl}}var bl=null;function Zo(){if(bl===null)throw Error(c(459));var e=bl;return bl=null,e}function Vo(e){if(e===yl||e===Ri)throw Error(c(483))}var ha=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ve&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Si(e),Oo(e,null,a),t}return vi(e,n,t,a),Si(e)}function vl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Gs(e,a)}}function ku(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Yu=!1;function Sl(){if(Yu){var e=En;if(e!==null)throw e}}function wl(e,t,a,n){Yu=!1;var i=e.updateQueue;ha=!1;var r=i.firstBaseUpdate,o=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var h=d,w=h.next;h.next=null,o===null?r=w:o.next=w,o=h;var N=e.alternate;N!==null&&(N=N.updateQueue,d=N.lastBaseUpdate,d!==o&&(d===null?N.firstBaseUpdate=w:d.next=w,N.lastBaseUpdate=h))}if(r!==null){var O=i.baseState;o=0,N=w=h=null,d=r;do{var E=d.lane&-536870913,C=E!==d.lane;if(C?(he&E)===E:(n&E)===E){E!==0&&E===wn&&(Yu=!0),N!==null&&(N=N.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var $=e,P=d;E=t;var Ae=a;switch(P.tag){case 1:if($=P.payload,typeof $=="function"){O=$.call(Ae,O,E);break e}O=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=P.payload,E=typeof $=="function"?$.call(Ae,O,E):$,E==null)break e;O=T({},O,E);break e;case 2:ha=!0}}E=d.callback,E!==null&&(e.flags|=64,C&&(e.flags|=8192),C=i.callbacks,C===null?i.callbacks=[E]:C.push(E))}else C={lane:E,tag:d.tag,payload:d.payload,callback:d.callback,next:null},N===null?(w=N=C,h=O):N=N.next=C,o|=E;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;C=d,d=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);N===null&&(h=O),i.baseState=h,i.firstBaseUpdate=w,i.lastBaseUpdate=N,r===null&&(i.shared.lanes=0),Aa|=o,e.lanes=o,e.memoizedState=O}}function Fo(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Po(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Fo(a[e],t)}var An=M(null),_i=M(0);function Io(e,t){e=ra,U(_i,e),U(An,t),ra=e|t.baseLanes}function Gu(){U(_i,ra),U(An,An.current)}function Hu(){ra=_i.current,z(An),z(_i)}var ma=0,ie=null,we=null,ke=null,Ni=!1,Tn=!1,Pa=!1,ji=0,El=0,Cn=null,Cg=0;function Me(){throw Error(c(321))}function qu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ht(e[a],t[a]))return!1;return!0}function Lu(e,t,a,n,i,r){return ma=r,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?Od:Md,Pa=!1,r=a(n,i),Pa=!1,Tn&&(r=Jo(t,a,n,i)),$o(e),r}function $o(e){_.H=Yi;var t=we!==null&&we.next!==null;if(ma=0,ke=we=ie=null,Ni=!1,El=0,Cn=null,t)throw Error(c(300));e===null||Ke||(e=e.dependencies,e!==null&&Ti(e)&&(Ke=!0))}function Jo(e,t,a,n){ie=e;var i=0;do{if(Tn&&(Cn=null),El=0,Tn=!1,25<=i)throw Error(c(301));if(i+=1,ke=we=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}_.H=Og,r=t(a,n)}while(Tn);return r}function Dg(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?Al(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(ie.flags|=1024),t}function Xu(){var e=ji!==0;return ji=0,e}function Qu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ku(e){if(Ni){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ni=!1}ma=0,ke=we=ie=null,Tn=!1,El=ji=0,Cn=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ie.memoizedState=ke=e:ke=ke.next=e,ke}function Ye(){if(we===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=ke===null?ie.memoizedState:ke.next;if(t!==null)ke=t,we=e;else{if(e===null)throw ie.alternate===null?Error(c(467)):Error(c(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},ke===null?ie.memoizedState=ke=e:ke=ke.next=e}return ke}function Zu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Al(e){var t=El;return El+=1,Cn===null&&(Cn=[]),e=Ko(Cn,e,t),t=ie,(ke===null?t.memoizedState:ke.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Od:Md),e}function Oi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Al(e);if(e.$$typeof===W)return nt(e)}throw Error(c(438,String(e)))}function Vu(e){var t=null,a=ie.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ie.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Zu(),ie.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ie;return t.index++,a}function ea(e,t){return typeof t=="function"?t(e):t}function Mi(e){var t=Ye();return Fu(t,we,e)}function Fu(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var o=i.next;i.next=r.next,r.next=o}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var d=o=null,h=null,w=t,N=!1;do{var O=w.lane&-536870913;if(O!==w.lane?(he&O)===O:(ma&O)===O){var E=w.revertLane;if(E===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),O===wn&&(N=!0);else if((ma&E)===E){w=w.next,E===wn&&(N=!0);continue}else O={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},h===null?(d=h=O,o=r):h=h.next=O,ie.lanes|=E,Aa|=E;O=w.action,Pa&&a(r,O),r=w.hasEagerState?w.eagerState:a(r,O)}else E={lane:O,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},h===null?(d=h=E,o=r):h=h.next=E,ie.lanes|=O,Aa|=O;w=w.next}while(w!==null&&w!==t);if(h===null?o=r:h.next=d,!ht(r,e.memoizedState)&&(Ke=!0,N&&(a=En,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=h,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Pu(e){var t=Ye(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do r=e(r,o.action),o=o.next;while(o!==i);ht(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function Wo(e,t,a){var n=ie,i=Ye(),r=xe;if(r){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!ht((we||i).memoizedState,a);o&&(i.memoizedState=a,Ke=!0),i=i.queue;var d=ad.bind(null,n,i,e);if(Tl(2048,8,d,[e]),i.getSnapshot!==t||o||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Dn(9,Ui(),td.bind(null,n,i,a,t),null),De===null)throw Error(c(349));r||(ma&124)!==0||ed(n,t,a)}return a}function ed(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ie.updateQueue,t===null?(t=Zu(),ie.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function td(e,t,a,n){t.value=a,t.getSnapshot=n,nd(t)&&ld(e)}function ad(e,t,a){return a(function(){nd(t)&&ld(e)})}function nd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ht(e,a)}catch{return!0}}function ld(e){var t=yn(e,2);t!==null&&vt(t,e,2)}function Iu(e){var t=ct();if(typeof e=="function"){var a=e;if(e=a(),Pa){oa(!0);try{a()}finally{oa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},t}function id(e,t,a,n){return e.baseState=a,Fu(e,we,typeof n=="function"?n:ea)}function Rg(e,t,a,n,i){if(ki(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};_.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,rd(t,r)):(r.next=a.next,t.pending=a.next=r)}}function rd(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=_.T,o={};_.T=o;try{var d=a(i,n),h=_.S;h!==null&&h(o,d),ud(e,t,d)}catch(w){$u(e,t,w)}finally{_.T=r}}else try{r=a(i,n),ud(e,t,r)}catch(w){$u(e,t,w)}}function ud(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){cd(e,t,n)},function(n){return $u(e,t,n)}):cd(e,t,a)}function cd(e,t,a){t.status="fulfilled",t.value=a,sd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,rd(e,a)))}function $u(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,sd(t),t=t.next;while(t!==n)}e.action=null}function sd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function od(e,t){return t}function dd(e,t){if(xe){var a=De.formState;if(a!==null){e:{var n=ie;if(xe){if(Ne){t:{for(var i=Ne,r=Ht;i.nodeType!==8;){if(!r){i=null;break t}if(i=kt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Ne=kt(i.nextSibling),n=i.data==="F!";break e}}Ka(n)}n=!1}n&&(t=a[0])}}return a=ct(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:od,lastRenderedState:t},a.queue=n,a=_d.bind(null,ie,n),n.dispatch=a,n=Iu(!1),r=ac.bind(null,ie,!1,n.queue),n=ct(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Rg.bind(null,ie,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function fd(e){var t=Ye();return pd(t,we,e)}function pd(e,t,a){if(t=Fu(e,t,od)[0],e=Mi(ea)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Al(t)}catch(o){throw o===yl?Ri:o}else n=t;t=Ye();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(ie.flags|=2048,Dn(9,Ui(),zg.bind(null,i,a),null)),[n,r,e]}function zg(e,t){e.action=t}function hd(e){var t=Ye(),a=we;if(a!==null)return pd(t,a,e);Ye(),t=t.memoizedState,a=Ye();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Dn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ie.updateQueue,t===null&&(t=Zu(),ie.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Ui(){return{destroy:void 0,resource:void 0}}function gd(){return Ye().memoizedState}function Bi(e,t,a,n){var i=ct();n=n===void 0?null:n,ie.flags|=e,i.memoizedState=Dn(1|t,Ui(),a,n)}function Tl(e,t,a,n){var i=Ye();n=n===void 0?null:n;var r=i.memoizedState.inst;we!==null&&n!==null&&qu(n,we.memoizedState.deps)?i.memoizedState=Dn(t,r,a,n):(ie.flags|=e,i.memoizedState=Dn(1|t,r,a,n))}function xd(e,t){Bi(8390656,8,e,t)}function md(e,t){Tl(2048,8,e,t)}function yd(e,t){return Tl(4,2,e,t)}function bd(e,t){return Tl(4,4,e,t)}function vd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sd(e,t,a){a=a!=null?a.concat([e]):null,Tl(4,4,vd.bind(null,t,e),a)}function Ju(){}function wd(e,t){var a=Ye();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&qu(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Ed(e,t){var a=Ye();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&qu(t,n[1]))return n[0];if(n=e(),Pa){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[n,t],n}function Wu(e,t,a){return a===void 0||(ma&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Df(),ie.lanes|=e,Aa|=e,a)}function Ad(e,t,a,n){return ht(a,t)?a:An.current!==null?(e=Wu(e,a,n),ht(e,t)||(Ke=!0),e):(ma&42)===0?(Ke=!0,e.memoizedState=a):(e=Df(),ie.lanes|=e,Aa|=e,t)}function Td(e,t,a,n,i){var r=Y.p;Y.p=r!==0&&8>r?r:8;var o=_.T,d={};_.T=d,ac(e,!1,t,a);try{var h=i(),w=_.S;if(w!==null&&w(d,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var N=Tg(h,n);Cl(e,t,N,bt(e))}else Cl(e,t,n,bt(e))}catch(O){Cl(e,t,{then:function(){},status:"rejected",reason:O},bt())}finally{Y.p=r,_.T=o}}function _g(){}function ec(e,t,a,n){if(e.tag!==5)throw Error(c(476));var i=Cd(e).queue;Td(e,i,t,V,a===null?_g:function(){return Dd(e),a(n)})}function Cd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:V},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Dd(e){var t=Cd(e).next.queue;Cl(e,t,{},bt())}function tc(){return nt(Ql)}function Rd(){return Ye().memoizedState}function zd(){return Ye().memoizedState}function Ng(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=bt();e=ga(a);var n=xa(t,e,a);n!==null&&(vt(n,t,a),vl(n,t,a)),t={cache:Nu()},e.payload=t;return}t=t.return}}function jg(e,t,a){var n=bt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ki(e)?Nd(t,a):(a=Su(e,t,a,n),a!==null&&(vt(a,e,n),jd(a,t,n)))}function _d(e,t,a){var n=bt();Cl(e,t,a,n)}function Cl(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ki(e))Nd(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,d=r(o,a);if(i.hasEagerState=!0,i.eagerState=d,ht(d,o))return vi(e,t,i,0),De===null&&bi(),!1}catch{}finally{}if(a=Su(e,t,i,n),a!==null)return vt(a,e,n),jd(a,t,n),!0}return!1}function ac(e,t,a,n){if(n={lane:2,revertLane:Mc(),action:n,hasEagerState:!1,eagerState:null,next:null},ki(e)){if(t)throw Error(c(479))}else t=Su(e,a,n,2),t!==null&&vt(t,e,2)}function ki(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Nd(e,t){Tn=Ni=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function jd(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Gs(e,a)}}var Yi={readContext:nt,use:Oi,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me},Od={readContext:nt,use:Oi,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:xd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Bi(4194308,4,vd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Bi(4194308,4,e,t)},useInsertionEffect:function(e,t){Bi(4,2,e,t)},useMemo:function(e,t){var a=ct();t=t===void 0?null:t;var n=e();if(Pa){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ct();if(a!==void 0){var i=a(t);if(Pa){oa(!0);try{a(t)}finally{oa(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=jg.bind(null,ie,e),[n.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:function(e){e=Iu(e);var t=e.queue,a=_d.bind(null,ie,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ju,useDeferredValue:function(e,t){var a=ct();return Wu(a,e,t)},useTransition:function(){var e=Iu(!1);return e=Td.bind(null,ie,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ie,i=ct();if(xe){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),De===null)throw Error(c(349));(he&124)!==0||ed(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,xd(ad.bind(null,n,r,e),[e]),n.flags|=2048,Dn(9,Ui(),td.bind(null,n,r,a,t),null),a},useId:function(){var e=ct(),t=De.identifierPrefix;if(xe){var a=$t,n=It;a=(n&~(1<<32-pt(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=ji++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Cg++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:tc,useFormState:dd,useActionState:dd,useOptimistic:function(e){var t=ct();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ac.bind(null,ie,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vu,useCacheRefresh:function(){return ct().memoizedState=Ng.bind(null,ie)}},Md={readContext:nt,use:Oi,useCallback:wd,useContext:nt,useEffect:md,useImperativeHandle:Sd,useInsertionEffect:yd,useLayoutEffect:bd,useMemo:Ed,useReducer:Mi,useRef:gd,useState:function(){return Mi(ea)},useDebugValue:Ju,useDeferredValue:function(e,t){var a=Ye();return Ad(a,we.memoizedState,e,t)},useTransition:function(){var e=Mi(ea)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:Al(e),t]},useSyncExternalStore:Wo,useId:Rd,useHostTransitionStatus:tc,useFormState:fd,useActionState:fd,useOptimistic:function(e,t){var a=Ye();return id(a,we,e,t)},useMemoCache:Vu,useCacheRefresh:zd},Og={readContext:nt,use:Oi,useCallback:wd,useContext:nt,useEffect:md,useImperativeHandle:Sd,useInsertionEffect:yd,useLayoutEffect:bd,useMemo:Ed,useReducer:Pu,useRef:gd,useState:function(){return Pu(ea)},useDebugValue:Ju,useDeferredValue:function(e,t){var a=Ye();return we===null?Wu(a,e,t):Ad(a,we.memoizedState,e,t)},useTransition:function(){var e=Pu(ea)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:Al(e),t]},useSyncExternalStore:Wo,useId:Rd,useHostTransitionStatus:tc,useFormState:hd,useActionState:hd,useOptimistic:function(e,t){var a=Ye();return we!==null?id(a,we,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:zd},Rn=null,Dl=0;function Gi(e){var t=Dl;return Dl+=1,Rn===null&&(Rn=[]),Ko(Rn,e,t)}function Rl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Hi(e,t){throw t.$$typeof===B?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ud(e){var t=e._init;return t(e._payload)}function Bd(e){function t(b,m){if(e){var S=b.deletions;S===null?(b.deletions=[m],b.flags|=16):S.push(m)}}function a(b,m){if(!e)return null;for(;m!==null;)t(b,m),m=m.sibling;return null}function n(b){for(var m=new Map;b!==null;)b.key!==null?m.set(b.key,b):m.set(b.index,b),b=b.sibling;return m}function i(b,m){return b=Pt(b,m),b.index=0,b.sibling=null,b}function r(b,m,S){return b.index=S,e?(S=b.alternate,S!==null?(S=S.index,S<m?(b.flags|=67108866,m):S):(b.flags|=67108866,m)):(b.flags|=1048576,m)}function o(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function d(b,m,S,j){return m===null||m.tag!==6?(m=Eu(S,b.mode,j),m.return=b,m):(m=i(m,S),m.return=b,m)}function h(b,m,S,j){var Q=S.type;return Q===q?N(b,m,S.props.children,j,S.key):m!==null&&(m.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===be&&Ud(Q)===m.type)?(m=i(m,S.props),Rl(m,S),m.return=b,m):(m=wi(S.type,S.key,S.props,null,b.mode,j),Rl(m,S),m.return=b,m)}function w(b,m,S,j){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=Au(S,b.mode,j),m.return=b,m):(m=i(m,S.children||[]),m.return=b,m)}function N(b,m,S,j,Q){return m===null||m.tag!==7?(m=qa(S,b.mode,j,Q),m.return=b,m):(m=i(m,S),m.return=b,m)}function O(b,m,S){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Eu(""+m,b.mode,S),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case k:return S=wi(m.type,m.key,m.props,null,b.mode,S),Rl(S,m),S.return=b,S;case H:return m=Au(m,b.mode,S),m.return=b,m;case be:var j=m._init;return m=j(m._payload),O(b,m,S)}if(He(m)||Oe(m))return m=qa(m,b.mode,S,null),m.return=b,m;if(typeof m.then=="function")return O(b,Gi(m),S);if(m.$$typeof===W)return O(b,Ci(b,m),S);Hi(b,m)}return null}function E(b,m,S,j){var Q=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return Q!==null?null:d(b,m,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case k:return S.key===Q?h(b,m,S,j):null;case H:return S.key===Q?w(b,m,S,j):null;case be:return Q=S._init,S=Q(S._payload),E(b,m,S,j)}if(He(S)||Oe(S))return Q!==null?null:N(b,m,S,j,null);if(typeof S.then=="function")return E(b,m,Gi(S),j);if(S.$$typeof===W)return E(b,m,Ci(b,S),j);Hi(b,S)}return null}function C(b,m,S,j,Q){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return b=b.get(S)||null,d(m,b,""+j,Q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case k:return b=b.get(j.key===null?S:j.key)||null,h(m,b,j,Q);case H:return b=b.get(j.key===null?S:j.key)||null,w(m,b,j,Q);case be:var ue=j._init;return j=ue(j._payload),C(b,m,S,j,Q)}if(He(j)||Oe(j))return b=b.get(S)||null,N(m,b,j,Q,null);if(typeof j.then=="function")return C(b,m,S,Gi(j),Q);if(j.$$typeof===W)return C(b,m,S,Ci(m,j),Q);Hi(m,j)}return null}function $(b,m,S,j){for(var Q=null,ue=null,Z=m,I=m=0,Ve=null;Z!==null&&I<S.length;I++){Z.index>I?(Ve=Z,Z=null):Ve=Z.sibling;var ge=E(b,Z,S[I],j);if(ge===null){Z===null&&(Z=Ve);break}e&&Z&&ge.alternate===null&&t(b,Z),m=r(ge,m,I),ue===null?Q=ge:ue.sibling=ge,ue=ge,Z=Ve}if(I===S.length)return a(b,Z),xe&&Xa(b,I),Q;if(Z===null){for(;I<S.length;I++)Z=O(b,S[I],j),Z!==null&&(m=r(Z,m,I),ue===null?Q=Z:ue.sibling=Z,ue=Z);return xe&&Xa(b,I),Q}for(Z=n(Z);I<S.length;I++)Ve=C(Z,b,I,S[I],j),Ve!==null&&(e&&Ve.alternate!==null&&Z.delete(Ve.key===null?I:Ve.key),m=r(Ve,m,I),ue===null?Q=Ve:ue.sibling=Ve,ue=Ve);return e&&Z.forEach(function(Oa){return t(b,Oa)}),xe&&Xa(b,I),Q}function P(b,m,S,j){if(S==null)throw Error(c(151));for(var Q=null,ue=null,Z=m,I=m=0,Ve=null,ge=S.next();Z!==null&&!ge.done;I++,ge=S.next()){Z.index>I?(Ve=Z,Z=null):Ve=Z.sibling;var Oa=E(b,Z,ge.value,j);if(Oa===null){Z===null&&(Z=Ve);break}e&&Z&&Oa.alternate===null&&t(b,Z),m=r(Oa,m,I),ue===null?Q=Oa:ue.sibling=Oa,ue=Oa,Z=Ve}if(ge.done)return a(b,Z),xe&&Xa(b,I),Q;if(Z===null){for(;!ge.done;I++,ge=S.next())ge=O(b,ge.value,j),ge!==null&&(m=r(ge,m,I),ue===null?Q=ge:ue.sibling=ge,ue=ge);return xe&&Xa(b,I),Q}for(Z=n(Z);!ge.done;I++,ge=S.next())ge=C(Z,b,I,ge.value,j),ge!==null&&(e&&ge.alternate!==null&&Z.delete(ge.key===null?I:ge.key),m=r(ge,m,I),ue===null?Q=ge:ue.sibling=ge,ue=ge);return e&&Z.forEach(function(Mx){return t(b,Mx)}),xe&&Xa(b,I),Q}function Ae(b,m,S,j){if(typeof S=="object"&&S!==null&&S.type===q&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case k:e:{for(var Q=S.key;m!==null;){if(m.key===Q){if(Q=S.type,Q===q){if(m.tag===7){a(b,m.sibling),j=i(m,S.props.children),j.return=b,b=j;break e}}else if(m.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===be&&Ud(Q)===m.type){a(b,m.sibling),j=i(m,S.props),Rl(j,S),j.return=b,b=j;break e}a(b,m);break}else t(b,m);m=m.sibling}S.type===q?(j=qa(S.props.children,b.mode,j,S.key),j.return=b,b=j):(j=wi(S.type,S.key,S.props,null,b.mode,j),Rl(j,S),j.return=b,b=j)}return o(b);case H:e:{for(Q=S.key;m!==null;){if(m.key===Q)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){a(b,m.sibling),j=i(m,S.children||[]),j.return=b,b=j;break e}else{a(b,m);break}else t(b,m);m=m.sibling}j=Au(S,b.mode,j),j.return=b,b=j}return o(b);case be:return Q=S._init,S=Q(S._payload),Ae(b,m,S,j)}if(He(S))return $(b,m,S,j);if(Oe(S)){if(Q=Oe(S),typeof Q!="function")throw Error(c(150));return S=Q.call(S),P(b,m,S,j)}if(typeof S.then=="function")return Ae(b,m,Gi(S),j);if(S.$$typeof===W)return Ae(b,m,Ci(b,S),j);Hi(b,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,m!==null&&m.tag===6?(a(b,m.sibling),j=i(m,S),j.return=b,b=j):(a(b,m),j=Eu(S,b.mode,j),j.return=b,b=j),o(b)):a(b,m)}return function(b,m,S,j){try{Dl=0;var Q=Ae(b,m,S,j);return Rn=null,Q}catch(Z){if(Z===yl||Z===Ri)throw Z;var ue=gt(29,Z,null,b.mode);return ue.lanes=j,ue.return=b,ue}finally{}}}var zn=Bd(!0),kd=Bd(!1),Nt=M(null),qt=null;function ya(e){var t=e.alternate;U(Le,Le.current&1),U(Nt,e),qt===null&&(t===null||An.current!==null||t.memoizedState!==null)&&(qt=e)}function Yd(e){if(e.tag===22){if(U(Le,Le.current),U(Nt,e),qt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(qt=e)}}else ba()}function ba(){U(Le,Le.current),U(Nt,Nt.current)}function ta(e){z(Nt),qt===e&&(qt=null),z(Le)}var Le=M(0);function qi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Zc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function nc(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:T({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lc={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=bt(),i=ga(n);i.payload=t,a!=null&&(i.callback=a),t=xa(e,i,n),t!==null&&(vt(t,e,n),vl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=bt(),i=ga(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=xa(e,i,n),t!==null&&(vt(t,e,n),vl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=bt(),n=ga(a);n.tag=2,t!=null&&(n.callback=t),t=xa(e,n,a),t!==null&&(vt(t,e,a),vl(t,e,a))}};function Gd(e,t,a,n,i,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,o):t.prototype&&t.prototype.isPureReactComponent?!ol(a,n)||!ol(i,r):!0}function Hd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&lc.enqueueReplaceState(t,t.state,null)}function Ia(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=T({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var Li=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function qd(e){Li(e)}function Ld(e){console.error(e)}function Xd(e){Li(e)}function Xi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Qd(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ic(e,t,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Xi(e,t)},a}function Kd(e){return e=ga(e),e.tag=3,e}function Zd(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){Qd(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Qd(t,a,n),typeof i!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})})}function Mg(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&gl(t,a,i,!0),a=Nt.current,a!==null){switch(a.tag){case 13:return qt===null?zc():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Mu?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Nc(e,n,i)),!1;case 22:return a.flags|=65536,n===Mu?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Nc(e,n,i)),!1}throw Error(c(435,a.tag))}return Nc(e,n,i),zc(),!1}if(xe)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Du&&(e=Error(c(422),{cause:n}),hl(Dt(e,a)))):(n!==Du&&(t=Error(c(423),{cause:n}),hl(Dt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Dt(n,a),i=ic(e.stateNode,n,i),ku(e,i),je!==4&&(je=2)),!1;var r=Error(c(520),{cause:n});if(r=Dt(r,a),Ul===null?Ul=[r]:Ul.push(r),je!==4&&(je=2),t===null)return!0;n=Dt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=ic(a.stateNode,n,e),ku(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ta===null||!Ta.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Kd(i),Zd(i,e,a,n),ku(a,i),!1}a=a.return}while(a!==null);return!1}var Vd=Error(c(461)),Ke=!1;function Je(e,t,a,n){t.child=e===null?kd(t,null,a,n):zn(t,e.child,a,n)}function Fd(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var o={};for(var d in n)d!=="ref"&&(o[d]=n[d])}else o=n;return Va(t),n=Lu(e,t,a,o,r,i),d=Xu(),e!==null&&!Ke?(Qu(e,t,i),aa(e,t,i)):(xe&&d&&Tu(t),t.flags|=1,Je(e,t,n,i),t.child)}function Pd(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!wu(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Id(e,t,r,n,i)):(e=wi(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!pc(e,i)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:ol,a(o,n)&&e.ref===t.ref)return aa(e,t,i)}return t.flags|=1,e=Pt(r,n),e.ref=t.ref,e.return=t,t.child=e}function Id(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(ol(r,n)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=n=r,pc(e,i))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,aa(e,t,i)}return rc(e,t,a,n,i)}function $d(e,t,a){var n=t.pendingProps,i=n.children,r=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~n}else t.childLanes=0,t.child=null;return Jd(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Di(t,r!==null?r.cachePool:null),r!==null?Io(t,r):Gu(),Yd(t);else return t.lanes=t.childLanes=536870912,Jd(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(Di(t,r.cachePool),Io(t,r),ba(),t.memoizedState=null):(e!==null&&Di(t,null),Gu(),ba());return Je(e,t,i,a),t.child}function Jd(e,t,a,n){var i=Ou();return i=i===null?null:{parent:qe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Di(t,null),Gu(),Yd(t),e!==null&&gl(e,t,n,!0),null}function Qi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function rc(e,t,a,n,i){return Va(t),a=Lu(e,t,a,n,void 0,i),n=Xu(),e!==null&&!Ke?(Qu(e,t,i),aa(e,t,i)):(xe&&n&&Tu(t),t.flags|=1,Je(e,t,a,i),t.child)}function Wd(e,t,a,n,i,r){return Va(t),t.updateQueue=null,a=Jo(t,n,a,i),$o(e),n=Xu(),e!==null&&!Ke?(Qu(e,t,r),aa(e,t,r)):(xe&&n&&Tu(t),t.flags|=1,Je(e,t,a,r),t.child)}function ef(e,t,a,n,i){if(Va(t),t.stateNode===null){var r=bn,o=a.contextType;typeof o=="object"&&o!==null&&(r=nt(o)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=lc,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},Uu(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?nt(o):bn,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(nc(t,a,o,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&lc.enqueueReplaceState(r,r.state,null),wl(t,n,r,i),Sl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var d=t.memoizedProps,h=Ia(a,d);r.props=h;var w=r.context,N=a.contextType;o=bn,typeof N=="object"&&N!==null&&(o=nt(N));var O=a.getDerivedStateFromProps;N=typeof O=="function"||typeof r.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,N||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d||w!==o)&&Hd(t,r,n,o),ha=!1;var E=t.memoizedState;r.state=E,wl(t,n,r,i),Sl(),w=t.memoizedState,d||E!==w||ha?(typeof O=="function"&&(nc(t,a,O,n),w=t.memoizedState),(h=ha||Gd(t,a,h,n,E,w,o))?(N||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=w),r.props=n,r.state=w,r.context=o,n=h):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,Bu(e,t),o=t.memoizedProps,N=Ia(a,o),r.props=N,O=t.pendingProps,E=r.context,w=a.contextType,h=bn,typeof w=="object"&&w!==null&&(h=nt(w)),d=a.getDerivedStateFromProps,(w=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==O||E!==h)&&Hd(t,r,n,h),ha=!1,E=t.memoizedState,r.state=E,wl(t,n,r,i),Sl();var C=t.memoizedState;o!==O||E!==C||ha||e!==null&&e.dependencies!==null&&Ti(e.dependencies)?(typeof d=="function"&&(nc(t,a,d,n),C=t.memoizedState),(N=ha||Gd(t,a,N,n,E,C,h)||e!==null&&e.dependencies!==null&&Ti(e.dependencies))?(w||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,C,h),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,C,h)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=C),r.props=n,r.state=C,r.context=h,n=N):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,Qi(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=zn(t,e.child,null,i),t.child=zn(t,null,a,i)):Je(e,t,a,i),t.memoizedState=r.state,e=t.child):e=aa(e,t,i),e}function tf(e,t,a,n){return pl(),t.flags|=256,Je(e,t,a,n),t.child}var uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cc(e){return{baseLanes:e,cachePool:Lo()}}function sc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=jt),e}function af(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(i?ya(t):ba(),xe){var d=Ne,h;if(h=d){e:{for(h=d,d=Ht;h.nodeType!==8;){if(!d){d=null;break e}if(h=kt(h.nextSibling),h===null){d=null;break e}}d=h}d!==null?(t.memoizedState={dehydrated:d,treeContext:La!==null?{id:It,overflow:$t}:null,retryLane:536870912,hydrationErrors:null},h=gt(18,null,null,0),h.stateNode=d,h.return=t,t.child=h,it=t,Ne=null,h=!0):h=!1}h||Ka(t)}if(d=t.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return Zc(d)?t.lanes=32:t.lanes=536870912,null;ta(t)}return d=n.children,n=n.fallback,i?(ba(),i=t.mode,d=Ki({mode:"hidden",children:d},i),n=qa(n,i,a,null),d.return=t,n.return=t,d.sibling=n,t.child=d,i=t.child,i.memoizedState=cc(a),i.childLanes=sc(e,o,a),t.memoizedState=uc,n):(ya(t),oc(t,d))}if(h=e.memoizedState,h!==null&&(d=h.dehydrated,d!==null)){if(r)t.flags&256?(ya(t),t.flags&=-257,t=dc(e,t,a)):t.memoizedState!==null?(ba(),t.child=e.child,t.flags|=128,t=null):(ba(),i=n.fallback,d=t.mode,n=Ki({mode:"visible",children:n.children},d),i=qa(i,d,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,zn(t,e.child,null,a),n=t.child,n.memoizedState=cc(a),n.childLanes=sc(e,o,a),t.memoizedState=uc,t=i);else if(ya(t),Zc(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var w=o.dgst;o=w,n=Error(c(419)),n.stack="",n.digest=o,hl({value:n,source:null,stack:null}),t=dc(e,t,a)}else if(Ke||gl(e,t,a,!1),o=(a&e.childLanes)!==0,Ke||o){if(o=De,o!==null&&(n=a&-a,n=(n&42)!==0?1:Vr(n),n=(n&(o.suspendedLanes|a))!==0?0:n,n!==0&&n!==h.retryLane))throw h.retryLane=n,yn(e,n),vt(o,e,n),Vd;d.data==="$?"||zc(),t=dc(e,t,a)}else d.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Ne=kt(d.nextSibling),it=t,xe=!0,Qa=null,Ht=!1,e!==null&&(zt[_t++]=It,zt[_t++]=$t,zt[_t++]=La,It=e.id,$t=e.overflow,La=t),t=oc(t,n.children),t.flags|=4096);return t}return i?(ba(),i=n.fallback,d=t.mode,h=e.child,w=h.sibling,n=Pt(h,{mode:"hidden",children:n.children}),n.subtreeFlags=h.subtreeFlags&65011712,w!==null?i=Pt(w,i):(i=qa(i,d,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,d=e.child.memoizedState,d===null?d=cc(a):(h=d.cachePool,h!==null?(w=qe._currentValue,h=h.parent!==w?{parent:w,pool:w}:h):h=Lo(),d={baseLanes:d.baseLanes|a,cachePool:h}),i.memoizedState=d,i.childLanes=sc(e,o,a),t.memoizedState=uc,n):(ya(t),a=e.child,e=a.sibling,a=Pt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function oc(e,t){return t=Ki({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ki(e,t){return e=gt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function dc(e,t,a){return zn(t,e.child,null,a),e=oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),zu(e.return,t,a)}function fc(e,t,a,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i)}function lf(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;if(Je(e,t,n.children,a),n=Le.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nf(e,a,t);else if(e.tag===19)nf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(U(Le,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&qi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),fc(t,!1,i,a,r);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qi(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}fc(t,!0,a,null,r);break;case"together":fc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function aa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Aa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(gl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Pt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Pt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function pc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ti(e)))}function Ug(e,t,a){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),pa(t,qe,e.memoizedState.cache),pl();break;case 27:case 5:Ua(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:pa(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ya(t),t.flags|=128,null):(a&t.child.childLanes)!==0?af(e,t,a):(ya(t),e=aa(e,t,a),e!==null?e.sibling:null);ya(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(gl(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return lf(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(Le,Le.current),n)break;return null;case 22:case 23:return t.lanes=0,$d(e,t,a);case 24:pa(t,qe,e.memoizedState.cache)}return aa(e,t,a)}function rf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!pc(e,a)&&(t.flags&128)===0)return Ke=!1,Ug(e,t,a);Ke=(e.flags&131072)!==0}else Ke=!1,xe&&(t.flags&1048576)!==0&&Uo(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")wu(n)?(e=Ia(n,e),t.tag=1,t=ef(null,t,n,e,a)):(t.tag=0,t=rc(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===ae){t.tag=11,t=Fd(null,t,n,e,a);break e}else if(i===K){t.tag=14,t=Pd(null,t,n,e,a);break e}}throw t=Et(n)||n,Error(c(306,t,""))}}return t;case 0:return rc(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Ia(n,t.pendingProps),ef(e,t,n,i,a);case 3:e:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,Bu(e,t),wl(t,n,null,a);var o=t.memoizedState;if(n=o.cache,pa(t,qe,n),n!==r.cache&&_u(t,[qe],a,!0),Sl(),n=o.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=tf(e,t,n,a);break e}else if(n!==i){i=Dt(Error(c(424)),t),hl(i),t=tf(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ne=kt(e.firstChild),it=t,xe=!0,Qa=null,Ht=!0,a=kd(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(pl(),n===i){t=aa(e,t,a);break e}Je(e,t,n,a)}t=t.child}return t;case 26:return Qi(e,t),e===null?(a=o0(t.type,null,t.pendingProps,null))?t.memoizedState=a:xe||(a=t.type,e=t.pendingProps,n=ir(F.current).createElement(a),n[at]=t,n[rt]=e,et(n,a,e),Qe(n),t.stateNode=n):t.memoizedState=o0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ua(t),e===null&&xe&&(n=t.stateNode=u0(t.type,t.pendingProps,F.current),it=t,Ht=!0,i=Ne,Ra(t.type)?(Vc=i,Ne=kt(n.firstChild)):Ne=i),Je(e,t,t.pendingProps.children,a),Qi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((i=n=Ne)&&(n=sx(n,t.type,t.pendingProps,Ht),n!==null?(t.stateNode=n,it=t,Ne=kt(n.firstChild),Ht=!1,i=!0):i=!1),i||Ka(t)),Ua(t),i=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,n=r.children,Xc(i,r)?n=null:o!==null&&Xc(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Lu(e,t,Dg,null,null,a),Ql._currentValue=i),Qi(e,t),Je(e,t,n,a),t.child;case 6:return e===null&&xe&&((e=a=Ne)&&(a=ox(a,t.pendingProps,Ht),a!==null?(t.stateNode=a,it=t,Ne=null,e=!0):e=!1),e||Ka(t)),null;case 13:return af(e,t,a);case 4:return me(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=zn(t,null,n,a):Je(e,t,n,a),t.child;case 11:return Fd(e,t,t.type,t.pendingProps,a);case 7:return Je(e,t,t.pendingProps,a),t.child;case 8:return Je(e,t,t.pendingProps.children,a),t.child;case 12:return Je(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,pa(t,t.type,n.value),Je(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Va(t),i=nt(i),n=n(i),t.flags|=1,Je(e,t,n,a),t.child;case 14:return Pd(e,t,t.type,t.pendingProps,a);case 15:return Id(e,t,t.type,t.pendingProps,a);case 19:return lf(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=Ki(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Pt(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return $d(e,t,a);case 24:return Va(t),n=nt(qe),e===null?(i=Ou(),i===null&&(i=De,r=Nu(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},Uu(t),pa(t,qe,i)):((e.lanes&a)!==0&&(Bu(e,t),wl(t,null,null,a),Sl()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),pa(t,qe,n)):(n=r.cache,pa(t,qe,n),n!==i.cache&&_u(t,[qe],a,!0))),Je(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function na(e){e.flags|=4}function uf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!g0(t)){if(t=Nt.current,t!==null&&((he&4194048)===he?qt!==null:(he&62914560)!==he&&(he&536870912)===0||t!==qt))throw bl=Mu,Xo;e.flags|=8192}}function Zi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ks():536870912,e.lanes|=t,On|=t)}function zl(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Bg(e,t,a){var n=t.pendingProps;switch(Cu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wt(qe),tt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(fl(t)?na(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Yo())),_e(t),null;case 26:return a=t.memoizedState,e===null?(na(t),a!==null?(_e(t),uf(t,a)):(_e(t),t.flags&=-16777217)):a?a!==e.memoizedState?(na(t),_e(t),uf(t,a)):(_e(t),t.flags&=-16777217):(e.memoizedProps!==n&&na(t),_e(t),t.flags&=-16777217),null;case 27:Zt(t),a=F.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&na(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return _e(t),null}e=X.current,fl(t)?Bo(t):(e=u0(i,n,a),t.stateNode=e,na(t))}return _e(t),null;case 5:if(Zt(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&na(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return _e(t),null}if(e=X.current,fl(t))Bo(t);else{switch(i=ir(F.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[at]=t,e[rt]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(et(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&na(t)}}return _e(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&na(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=F.current,fl(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=it,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[at]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||e0(e.nodeValue,a)),e||Ka(t)}else e=ir(e).createTextNode(n),e[at]=t,t.stateNode=e}return _e(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=fl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[at]=t}else pl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else i=Yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(ta(t),t):(ta(t),null)}if(ta(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var r=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Zi(t,t.updateQueue),_e(t),null;case 4:return tt(),e===null&&Yc(t.stateNode.containerInfo),_e(t),null;case 10:return Wt(t.type),_e(t),null;case 19:if(z(Le),i=t.memoizedState,i===null)return _e(t),null;if(n=(t.flags&128)!==0,r=i.rendering,r===null)if(n)zl(i,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=qi(e),r!==null){for(t.flags|=128,zl(i,!1),e=r.updateQueue,t.updateQueue=e,Zi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Mo(a,e),a=a.sibling;return U(Le,Le.current&1|2),t.child}e=e.sibling}i.tail!==null&&Gt()>Pi&&(t.flags|=128,n=!0,zl(i,!1),t.lanes=4194304)}else{if(!n)if(e=qi(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Zi(t,e),zl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!xe)return _e(t),null}else 2*Gt()-i.renderingStartTime>Pi&&a!==536870912&&(t.flags|=128,n=!0,zl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Gt(),t.sibling=null,e=Le.current,U(Le,n?e&1|2:e&1),t):(_e(t),null);case 22:case 23:return ta(t),Hu(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),a=t.updateQueue,a!==null&&Zi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&z(Fa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Wt(qe),_e(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function kg(e,t){switch(Cu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wt(qe),tt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Zt(t),null;case 13:if(ta(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));pl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(Le),null;case 4:return tt(),null;case 10:return Wt(t.type),null;case 22:case 23:return ta(t),Hu(),e!==null&&z(Fa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wt(qe),null;case 25:return null;default:return null}}function cf(e,t){switch(Cu(t),t.tag){case 3:Wt(qe),tt();break;case 26:case 27:case 5:Zt(t);break;case 4:tt();break;case 13:ta(t);break;case 19:z(Le);break;case 10:Wt(t.type);break;case 22:case 23:ta(t),Hu(),e!==null&&z(Fa);break;case 24:Wt(qe)}}function _l(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,o=a.inst;n=r(),o.destroy=n}a=a.next}while(a!==i)}}catch(d){Te(t,t.return,d)}}function va(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var o=n.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,i=t;var h=a,w=d;try{w()}catch(N){Te(i,h,N)}}}n=n.next}while(n!==r)}}catch(N){Te(t,t.return,N)}}function sf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Po(t,a)}catch(n){Te(e,e.return,n)}}}function of(e,t,a){a.props=Ia(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Te(e,t,n)}}function Nl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){Te(e,t,i)}}function Lt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Te(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Te(e,t,i)}else a.current=null}function df(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Te(e,e.return,i)}}function hc(e,t,a){try{var n=e.stateNode;lx(n,e.type,a,t),n[rt]=t}catch(i){Te(e,e.return,i)}}function ff(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xc(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=lr));else if(n!==4&&(n===27&&Ra(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(xc(e,t,a),e=e.sibling;e!==null;)xc(e,t,a),e=e.sibling}function Vi(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vi(e,t,a),e=e.sibling;e!==null;)Vi(e,t,a),e=e.sibling}function pf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);et(t,n,a),t[at]=e,t[rt]=a}catch(r){Te(e,e.return,r)}}var la=!1,Ue=!1,mc=!1,hf=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function Yg(e,t){if(e=e.containerInfo,qc=dr,e=Ao(e),gu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,d=-1,h=-1,w=0,N=0,O=e,E=null;t:for(;;){for(var C;O!==a||i!==0&&O.nodeType!==3||(d=o+i),O!==r||n!==0&&O.nodeType!==3||(h=o+n),O.nodeType===3&&(o+=O.nodeValue.length),(C=O.firstChild)!==null;)E=O,O=C;for(;;){if(O===e)break t;if(E===a&&++w===i&&(d=o),E===r&&++N===n&&(h=o),(C=O.nextSibling)!==null)break;O=E,E=O.parentNode}O=C}a=d===-1||h===-1?null:{start:d,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lc={focusedElem:e,selectionRange:a},dr=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var $=Ia(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate($,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(P){Te(a,a.return,P)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Kc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function gf(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(e,a),n&4&&_l(5,a);break;case 1:if(Sa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){Te(a,a.return,o)}else{var i=Ia(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Te(a,a.return,o)}}n&64&&sf(a),n&512&&Nl(a,a.return);break;case 3:if(Sa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Po(e,t)}catch(o){Te(a,a.return,o)}}break;case 27:t===null&&n&4&&pf(a);case 26:case 5:Sa(e,a),t===null&&n&4&&df(a),n&512&&Nl(a,a.return);break;case 12:Sa(e,a);break;case 13:Sa(e,a),n&4&&yf(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Vg.bind(null,a),dx(e,a))));break;case 22:if(n=a.memoizedState!==null||la,!n){t=t!==null&&t.memoizedState!==null||Ue,i=la;var r=Ue;la=n,(Ue=t)&&!r?wa(e,a,(a.subtreeFlags&8772)!==0):Sa(e,a),la=i,Ue=r}break;case 30:break;default:Sa(e,a)}}function xf(e){var t=e.alternate;t!==null&&(e.alternate=null,xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ir(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,st=!1;function ia(e,t,a){for(a=a.child;a!==null;)mf(e,t,a),a=a.sibling}function mf(e,t,a){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Jn,a)}catch{}switch(a.tag){case 26:Ue||Lt(a,t),ia(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ue||Lt(a,t);var n=ze,i=st;Ra(a.type)&&(ze=a.stateNode,st=!1),ia(e,t,a),Hl(a.stateNode),ze=n,st=i;break;case 5:Ue||Lt(a,t);case 6:if(n=ze,i=st,ze=null,ia(e,t,a),ze=n,st=i,ze!==null)if(st)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(a.stateNode)}catch(r){Te(a,t,r)}else try{ze.removeChild(a.stateNode)}catch(r){Te(a,t,r)}break;case 18:ze!==null&&(st?(e=ze,i0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Fl(e)):i0(ze,a.stateNode));break;case 4:n=ze,i=st,ze=a.stateNode.containerInfo,st=!0,ia(e,t,a),ze=n,st=i;break;case 0:case 11:case 14:case 15:Ue||va(2,a,t),Ue||va(4,a,t),ia(e,t,a);break;case 1:Ue||(Lt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&of(a,t,n)),ia(e,t,a);break;case 21:ia(e,t,a);break;case 22:Ue=(n=Ue)||a.memoizedState!==null,ia(e,t,a),Ue=n;break;default:ia(e,t,a)}}function yf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fl(e)}catch(a){Te(t,t.return,a)}}function Gg(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new hf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new hf),t;default:throw Error(c(435,e.tag))}}function yc(e,t){var a=Gg(e);t.forEach(function(n){var i=Fg.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function xt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 27:if(Ra(d.type)){ze=d.stateNode,st=!1;break e}break;case 5:ze=d.stateNode,st=!1;break e;case 3:case 4:ze=d.stateNode.containerInfo,st=!0;break e}d=d.return}if(ze===null)throw Error(c(160));mf(r,o,i),ze=null,st=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)bf(t,e),t=t.sibling}var Bt=null;function bf(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xt(t,e),mt(e),n&4&&(va(3,e,e.return),_l(3,e),va(5,e,e.return));break;case 1:xt(t,e),mt(e),n&512&&(Ue||a===null||Lt(a,a.return)),n&64&&la&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Bt;if(xt(t,e),mt(e),n&512&&(Ue||a===null||Lt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[tl]||r[at]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),et(r,n,a),r[at]=e,Qe(r),n=r;break e;case"link":var o=p0("link","href",i).get(n+(a.href||""));if(o){for(var d=0;d<o.length;d++)if(r=o[d],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(d,1);break t}}r=i.createElement(n),et(r,n,a),i.head.appendChild(r);break;case"meta":if(o=p0("meta","content",i).get(n+(a.content||""))){for(d=0;d<o.length;d++)if(r=o[d],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(d,1);break t}}r=i.createElement(n),et(r,n,a),i.head.appendChild(r);break;default:throw Error(c(468,n))}r[at]=e,Qe(r),n=r}e.stateNode=n}else h0(i,e.type,e.stateNode);else e.stateNode=f0(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?h0(i,e.type,e.stateNode):f0(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&hc(e,e.memoizedProps,a.memoizedProps)}break;case 27:xt(t,e),mt(e),n&512&&(Ue||a===null||Lt(a,a.return)),a!==null&&n&4&&hc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(xt(t,e),mt(e),n&512&&(Ue||a===null||Lt(a,a.return)),e.flags&32){i=e.stateNode;try{dn(i,"")}catch(C){Te(e,e.return,C)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,hc(e,i,a!==null?a.memoizedProps:i)),n&1024&&(mc=!0);break;case 6:if(xt(t,e),mt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(C){Te(e,e.return,C)}}break;case 3:if(cr=null,i=Bt,Bt=rr(t.containerInfo),xt(t,e),Bt=i,mt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Fl(t.containerInfo)}catch(C){Te(e,e.return,C)}mc&&(mc=!1,vf(e));break;case 4:n=Bt,Bt=rr(e.stateNode.containerInfo),xt(t,e),mt(e),Bt=n;break;case 12:xt(t,e),mt(e);break;case 13:xt(t,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ac=Gt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,yc(e,n)));break;case 22:i=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,w=la,N=Ue;if(la=w||i,Ue=N||h,xt(t,e),Ue=N,la=w,mt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||h||la||Ue||$a(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(r=h.stateNode,i)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=h.stateNode;var O=h.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null;d.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(C){Te(h,h.return,C)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=i?"":h.memoizedProps}catch(C){Te(h,h.return,C)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,yc(e,a))));break;case 19:xt(t,e),mt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,yc(e,n)));break;case 30:break;case 21:break;default:xt(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(ff(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var i=a.stateNode,r=gc(e);Vi(e,r,i);break;case 5:var o=a.stateNode;a.flags&32&&(dn(o,""),a.flags&=-33);var d=gc(e);Vi(e,d,o);break;case 3:case 4:var h=a.stateNode.containerInfo,w=gc(e);xc(e,w,h);break;default:throw Error(c(161))}}catch(N){Te(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gf(e,t.alternate,t),t=t.sibling}function $a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:va(4,t,t.return),$a(t);break;case 1:Lt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&of(t,t.return,a),$a(t);break;case 27:Hl(t.stateNode);case 26:case 5:Lt(t,t.return),$a(t);break;case 22:t.memoizedState===null&&$a(t);break;case 30:$a(t);break;default:$a(t)}e=e.sibling}}function wa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:wa(i,r,a),_l(4,r);break;case 1:if(wa(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(w){Te(n,n.return,w)}if(n=r,i=n.updateQueue,i!==null){var d=n.stateNode;try{var h=i.shared.hiddenCallbacks;if(h!==null)for(i.shared.hiddenCallbacks=null,i=0;i<h.length;i++)Fo(h[i],d)}catch(w){Te(n,n.return,w)}}a&&o&64&&sf(r),Nl(r,r.return);break;case 27:pf(r);case 26:case 5:wa(i,r,a),a&&n===null&&o&4&&df(r),Nl(r,r.return);break;case 12:wa(i,r,a);break;case 13:wa(i,r,a),a&&o&4&&yf(i,r);break;case 22:r.memoizedState===null&&wa(i,r,a),Nl(r,r.return);break;case 30:break;default:wa(i,r,a)}t=t.sibling}}function bc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&xl(a))}function vc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xl(e))}function Xt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sf(e,t,a,n),t=t.sibling}function Sf(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(e,t,a,n),i&2048&&_l(9,t);break;case 1:Xt(e,t,a,n);break;case 3:Xt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xl(e)));break;case 12:if(i&2048){Xt(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,d=r.onPostCommit;typeof d=="function"&&d(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){Te(t,t.return,h)}}else Xt(e,t,a,n);break;case 13:Xt(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?Xt(e,t,a,n):jl(e,t):r._visibility&2?Xt(e,t,a,n):(r._visibility|=2,_n(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&bc(o,t);break;case 24:Xt(e,t,a,n),i&2048&&vc(t.alternate,t);break;default:Xt(e,t,a,n)}}function _n(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,o=t,d=a,h=n,w=o.flags;switch(o.tag){case 0:case 11:case 15:_n(r,o,d,h,i),_l(8,o);break;case 23:break;case 22:var N=o.stateNode;o.memoizedState!==null?N._visibility&2?_n(r,o,d,h,i):jl(r,o):(N._visibility|=2,_n(r,o,d,h,i)),i&&w&2048&&bc(o.alternate,o);break;case 24:_n(r,o,d,h,i),i&&w&2048&&vc(o.alternate,o);break;default:_n(r,o,d,h,i)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:jl(a,n),i&2048&&bc(n.alternate,n);break;case 24:jl(a,n),i&2048&&vc(n.alternate,n);break;default:jl(a,n)}t=t.sibling}}var Ol=8192;function Nn(e){if(e.subtreeFlags&Ol)for(e=e.child;e!==null;)wf(e),e=e.sibling}function wf(e){switch(e.tag){case 26:Nn(e),e.flags&Ol&&e.memoizedState!==null&&Ax(Bt,e.memoizedState,e.memoizedProps);break;case 5:Nn(e);break;case 3:case 4:var t=Bt;Bt=rr(e.stateNode.containerInfo),Nn(e),Bt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ol,Ol=16777216,Nn(e),Ol=t):Nn(e));break;default:Nn(e)}}function Ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ml(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ze=n,Tf(n,e)}Ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Af(e),e=e.sibling}function Af(e){switch(e.tag){case 0:case 11:case 15:Ml(e),e.flags&2048&&va(9,e,e.return);break;case 3:Ml(e);break;case 12:Ml(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fi(e)):Ml(e);break;default:Ml(e)}}function Fi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ze=n,Tf(n,e)}Ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:va(8,t,t.return),Fi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Fi(t));break;default:Fi(t)}e=e.sibling}}function Tf(e,t){for(;Ze!==null;){var a=Ze;switch(a.tag){case 0:case 11:case 15:va(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:xl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ze=n;else e:for(a=e;Ze!==null;){n=Ze;var i=n.sibling,r=n.return;if(xf(n),n===a){Ze=null;break e}if(i!==null){i.return=r,Ze=i;break e}Ze=r}}}var Hg={getCacheForType:function(e){var t=nt(qe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},qg=typeof WeakMap=="function"?WeakMap:Map,ve=0,De=null,se=null,he=0,Se=0,yt=null,Ea=!1,jn=!1,Sc=!1,ra=0,je=0,Aa=0,Ja=0,wc=0,jt=0,On=0,Ul=null,ot=null,Ec=!1,Ac=0,Pi=1/0,Ii=null,Ta=null,We=0,Ca=null,Mn=null,Un=0,Tc=0,Cc=null,Cf=null,Bl=0,Dc=null;function bt(){if((ve&2)!==0&&he!==0)return he&-he;if(_.T!==null){var e=wn;return e!==0?e:Mc()}return Hs()}function Df(){jt===0&&(jt=(he&536870912)===0||xe?Bs():536870912);var e=Nt.current;return e!==null&&(e.flags|=32),jt}function vt(e,t,a){(e===De&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(Bn(e,0),Da(e,he,jt,!1)),el(e,a),((ve&2)===0||e!==De)&&(e===De&&((ve&2)===0&&(Ja|=a),je===4&&Da(e,he,jt,!1)),Qt(e))}function Rf(e,t,a){if((ve&6)!==0)throw Error(c(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Wn(e,t),i=n?Qg(e,t):_c(e,t,!0),r=n;do{if(i===0){jn&&!n&&Da(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Lg(a)){i=_c(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var d=e;i=Ul;var h=d.current.memoizedState.isDehydrated;if(h&&(Bn(d,o).flags|=256),o=_c(d,o,!1),o!==2){if(Sc&&!h){d.errorRecoveryDisabledLanes|=r,Ja|=r,i=4;break e}r=ot,ot=i,r!==null&&(ot===null?ot=r:ot.push.apply(ot,r))}i=o}if(r=!1,i!==2)continue}}if(i===1){Bn(e,0),Da(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Da(n,t,jt,!Ea);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=Ac+300-Gt(),10<i)){if(Da(n,t,jt,!Ea),ui(n,0,!0)!==0)break e;n.timeoutHandle=n0(zf.bind(null,n,a,ot,Ii,Ec,t,jt,Ja,On,Ea,r,2,-0,0),i);break e}zf(n,a,ot,Ii,Ec,t,jt,Ja,On,Ea,r,0,-0,0)}}break}while(!0);Qt(e)}function zf(e,t,a,n,i,r,o,d,h,w,N,O,E,C){if(e.timeoutHandle=-1,O=t.subtreeFlags,(O&8192||(O&16785408)===16785408)&&(Xl={stylesheets:null,count:0,unsuspend:Ex},wf(t),O=Tx(),O!==null)){e.cancelPendingCommit=O(Bf.bind(null,e,t,r,a,n,i,o,d,h,N,1,E,C)),Da(e,r,o,!w);return}Bf(e,t,r,a,n,i,o,d,h)}function Lg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!ht(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Da(e,t,a,n){t&=~wc,t&=~Ja,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-pt(i),o=1<<r;n[r]=-1,i&=~o}a!==0&&Ys(e,a,t)}function $i(){return(ve&6)===0?(kl(0),!1):!0}function Rc(){if(se!==null){if(Se===0)var e=se.return;else e=se,Jt=Za=null,Ku(e),Rn=null,Dl=0,e=se;for(;e!==null;)cf(e.alternate,e),e=e.return;se=null}}function Bn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,rx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Rc(),De=e,se=a=Pt(e.current,null),he=t,Se=0,yt=null,Ea=!1,jn=Wn(e,t),Sc=!1,On=jt=wc=Ja=Aa=je=0,ot=Ul=null,Ec=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-pt(n),r=1<<i;t|=e[i],n&=~r}return ra=t,bi(),a}function _f(e,t){ie=null,_.H=Yi,t===yl||t===Ri?(t=Zo(),Se=3):t===Xo?(t=Zo(),Se=4):Se=t===Vd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,se===null&&(je=1,Xi(e,Dt(t,e.current)))}function Nf(){var e=_.H;return _.H=Yi,e===null?Yi:e}function jf(){var e=_.A;return _.A=Hg,e}function zc(){je=4,Ea||(he&4194048)!==he&&Nt.current!==null||(jn=!0),(Aa&134217727)===0&&(Ja&134217727)===0||De===null||Da(De,he,jt,!1)}function _c(e,t,a){var n=ve;ve|=2;var i=Nf(),r=jf();(De!==e||he!==t)&&(Ii=null,Bn(e,t)),t=!1;var o=je;e:do try{if(Se!==0&&se!==null){var d=se,h=yt;switch(Se){case 8:Rc(),o=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var w=Se;if(Se=0,yt=null,kn(e,d,h,w),a&&jn){o=0;break e}break;default:w=Se,Se=0,yt=null,kn(e,d,h,w)}}Xg(),o=je;break}catch(N){_f(e,N)}while(!0);return t&&e.shellSuspendCounter++,Jt=Za=null,ve=n,_.H=i,_.A=r,se===null&&(De=null,he=0,bi()),o}function Xg(){for(;se!==null;)Of(se)}function Qg(e,t){var a=ve;ve|=2;var n=Nf(),i=jf();De!==e||he!==t?(Ii=null,Pi=Gt()+500,Bn(e,t)):jn=Wn(e,t);e:do try{if(Se!==0&&se!==null){t=se;var r=yt;t:switch(Se){case 1:Se=0,yt=null,kn(e,t,r,1);break;case 2:case 9:if(Qo(r)){Se=0,yt=null,Mf(t);break}t=function(){Se!==2&&Se!==9||De!==e||(Se=7),Qt(e)},r.then(t,t);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:Qo(r)?(Se=0,yt=null,Mf(t)):(Se=0,yt=null,kn(e,t,r,7));break;case 5:var o=null;switch(se.tag){case 26:o=se.memoizedState;case 5:case 27:var d=se;if(!o||g0(o)){Se=0,yt=null;var h=d.sibling;if(h!==null)se=h;else{var w=d.return;w!==null?(se=w,Ji(w)):se=null}break t}}Se=0,yt=null,kn(e,t,r,5);break;case 6:Se=0,yt=null,kn(e,t,r,6);break;case 8:Rc(),je=6;break e;default:throw Error(c(462))}}Kg();break}catch(N){_f(e,N)}while(!0);return Jt=Za=null,_.H=n,_.A=i,ve=a,se!==null?0:(De=null,he=0,bi(),je)}function Kg(){for(;se!==null&&!ph();)Of(se)}function Of(e){var t=rf(e.alternate,e,ra);e.memoizedProps=e.pendingProps,t===null?Ji(e):se=t}function Mf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Wd(a,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Wd(a,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Ku(t);default:cf(a,t),t=se=Mo(t,ra),t=rf(a,t,ra)}e.memoizedProps=e.pendingProps,t===null?Ji(e):se=t}function kn(e,t,a,n){Jt=Za=null,Ku(t),Rn=null,Dl=0;var i=t.return;try{if(Mg(e,i,t,a,he)){je=1,Xi(e,Dt(a,e.current)),se=null;return}}catch(r){if(i!==null)throw se=i,r;je=1,Xi(e,Dt(a,e.current)),se=null;return}t.flags&32768?(xe||n===1?e=!0:jn||(he&536870912)!==0?e=!1:(Ea=e=!0,(n===2||n===9||n===3||n===6)&&(n=Nt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Uf(t,e)):Ji(t)}function Ji(e){var t=e;do{if((t.flags&32768)!==0){Uf(t,Ea);return}e=t.return;var a=Bg(t.alternate,t,ra);if(a!==null){se=a;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);je===0&&(je=5)}function Uf(e,t){do{var a=kg(e.alternate,e);if(a!==null){a.flags&=32767,se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=a}while(e!==null);je=6,se=null}function Bf(e,t,a,n,i,r,o,d,h){e.cancelPendingCommit=null;do Wi();while(We!==0);if((ve&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=vu,Eh(e,a,r,o,d,h),e===De&&(se=De=null,he=0),Mn=t,Ca=e,Un=a,Tc=r,Cc=i,Cf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Pg(li,function(){return qf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null,i=Y.p,Y.p=2,o=ve,ve|=4;try{Yg(e,t,a)}finally{ve=o,Y.p=i,_.T=n}}We=1,kf(),Yf(),Gf()}}function kf(){if(We===1){We=0;var e=Ca,t=Mn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null;var n=Y.p;Y.p=2;var i=ve;ve|=4;try{bf(t,e);var r=Lc,o=Ao(e.containerInfo),d=r.focusedElem,h=r.selectionRange;if(o!==d&&d&&d.ownerDocument&&Eo(d.ownerDocument.documentElement,d)){if(h!==null&&gu(d)){var w=h.start,N=h.end;if(N===void 0&&(N=w),"selectionStart"in d)d.selectionStart=w,d.selectionEnd=Math.min(N,d.value.length);else{var O=d.ownerDocument||document,E=O&&O.defaultView||window;if(E.getSelection){var C=E.getSelection(),$=d.textContent.length,P=Math.min(h.start,$),Ae=h.end===void 0?P:Math.min(h.end,$);!C.extend&&P>Ae&&(o=Ae,Ae=P,P=o);var b=wo(d,P),m=wo(d,Ae);if(b&&m&&(C.rangeCount!==1||C.anchorNode!==b.node||C.anchorOffset!==b.offset||C.focusNode!==m.node||C.focusOffset!==m.offset)){var S=O.createRange();S.setStart(b.node,b.offset),C.removeAllRanges(),P>Ae?(C.addRange(S),C.extend(m.node,m.offset)):(S.setEnd(m.node,m.offset),C.addRange(S))}}}}for(O=[],C=d;C=C.parentNode;)C.nodeType===1&&O.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<O.length;d++){var j=O[d];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}dr=!!qc,Lc=qc=null}finally{ve=i,Y.p=n,_.T=a}}e.current=t,We=2}}function Yf(){if(We===2){We=0;var e=Ca,t=Mn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=_.T,_.T=null;var n=Y.p;Y.p=2;var i=ve;ve|=4;try{gf(e,t.alternate,t)}finally{ve=i,Y.p=n,_.T=a}}We=3}}function Gf(){if(We===4||We===3){We=0,hh();var e=Ca,t=Mn,a=Un,n=Cf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,Mn=Ca=null,Hf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ta=null),Fr(a),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Jn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=_.T,i=Y.p,Y.p=2,_.T=null;try{for(var r=e.onRecoverableError,o=0;o<n.length;o++){var d=n[o];r(d.value,{componentStack:d.stack})}}finally{_.T=t,Y.p=i}}(Un&3)!==0&&Wi(),Qt(e),i=e.pendingLanes,(a&4194090)!==0&&(i&42)!==0?e===Dc?Bl++:(Bl=0,Dc=e):Bl=0,kl(0)}}function Hf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,xl(t)))}function Wi(e){return kf(),Yf(),Gf(),qf()}function qf(){if(We!==5)return!1;var e=Ca,t=Tc;Tc=0;var a=Fr(Un),n=_.T,i=Y.p;try{Y.p=32>a?32:a,_.T=null,a=Cc,Cc=null;var r=Ca,o=Un;if(We=0,Mn=Ca=null,Un=0,(ve&6)!==0)throw Error(c(331));var d=ve;if(ve|=4,Af(r.current),Sf(r,r.current,o,a),ve=d,kl(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Jn,r)}catch{}return!0}finally{Y.p=i,_.T=n,Hf(e,t)}}function Lf(e,t,a){t=Dt(a,t),t=ic(e.stateNode,t,2),e=xa(e,t,2),e!==null&&(el(e,2),Qt(e))}function Te(e,t,a){if(e.tag===3)Lf(e,e,a);else for(;t!==null;){if(t.tag===3){Lf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ta===null||!Ta.has(n))){e=Dt(a,e),a=Kd(2),n=xa(t,a,2),n!==null&&(Zd(a,n,t,e),el(n,2),Qt(n));break}}t=t.return}}function Nc(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new qg;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Sc=!0,i.add(a),e=Zg.bind(null,e,t,a),t.then(e,e))}function Zg(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,De===e&&(he&a)===a&&(je===4||je===3&&(he&62914560)===he&&300>Gt()-Ac?(ve&2)===0&&Bn(e,0):wc|=a,On===he&&(On=0)),Qt(e)}function Xf(e,t){t===0&&(t=ks()),e=yn(e,t),e!==null&&(el(e,t),Qt(e))}function Vg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Xf(e,a)}function Fg(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),Xf(e,a)}function Pg(e,t){return Qr(e,t)}var er=null,Yn=null,jc=!1,tr=!1,Oc=!1,Wa=0;function Qt(e){e!==Yn&&e.next===null&&(Yn===null?er=Yn=e:Yn=Yn.next=e),tr=!0,jc||(jc=!0,$g())}function kl(e,t){if(!Oc&&tr){Oc=!0;do for(var a=!1,n=er;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var o=n.suspendedLanes,d=n.pingedLanes;r=(1<<31-pt(42|e)+1)-1,r&=i&~(o&~d),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Vf(n,r))}else r=he,r=ui(n,n===De?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||Wn(n,r)||(a=!0,Vf(n,r));n=n.next}while(a);Oc=!1}}function Ig(){Qf()}function Qf(){tr=jc=!1;var e=0;Wa!==0&&(ix()&&(e=Wa),Wa=0);for(var t=Gt(),a=null,n=er;n!==null;){var i=n.next,r=Kf(n,t);r===0?(n.next=null,a===null?er=i:a.next=i,i===null&&(Yn=a)):(a=n,(e!==0||(r&3)!==0)&&(tr=!0)),n=i}kl(e)}function Kf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-pt(r),d=1<<o,h=i[o];h===-1?((d&a)===0||(d&n)!==0)&&(i[o]=wh(d,t)):h<=t&&(e.expiredLanes|=d),r&=~d}if(t=De,a=he,a=ui(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Kr(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Wn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Kr(n),Fr(a)){case 2:case 8:a=Ms;break;case 32:a=li;break;case 268435456:a=Us;break;default:a=li}return n=Zf.bind(null,e),a=Qr(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Kr(n),e.callbackPriority=2,e.callbackNode=null,2}function Zf(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Wi()&&e.callbackNode!==a)return null;var n=he;return n=ui(e,e===De?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Rf(e,n,t),Kf(e,Gt()),e.callbackNode!=null&&e.callbackNode===a?Zf.bind(null,e):null)}function Vf(e,t){if(Wi())return null;Rf(e,t,!0)}function $g(){ux(function(){(ve&6)!==0?Qr(Os,Ig):Qf()})}function Mc(){return Wa===0&&(Wa=Bs()),Wa}function Ff(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fi(""+e)}function Pf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Jg(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=Ff((i[rt]||null).action),o=n.submitter;o&&(t=(t=o[rt]||null)?Ff(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var d=new xi("action","action",null,n,i);e.push({event:d,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Wa!==0){var h=o?Pf(i,o):new FormData(i);ec(a,{pending:!0,data:h,method:i.method,action:r},null,h)}}else typeof r=="function"&&(d.preventDefault(),h=o?Pf(i,o):new FormData(i),ec(a,{pending:!0,data:h,method:i.method,action:r},r,h))},currentTarget:i}]})}}for(var Uc=0;Uc<bu.length;Uc++){var Bc=bu[Uc],Wg=Bc.toLowerCase(),ex=Bc[0].toUpperCase()+Bc.slice(1);Ut(Wg,"on"+ex)}Ut(Do,"onAnimationEnd"),Ut(Ro,"onAnimationIteration"),Ut(zo,"onAnimationStart"),Ut("dblclick","onDoubleClick"),Ut("focusin","onFocus"),Ut("focusout","onBlur"),Ut(mg,"onTransitionRun"),Ut(yg,"onTransitionStart"),Ut(bg,"onTransitionCancel"),Ut(_o,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ka("onBeforeInput",["compositionend","keypress","textInput","paste"]),ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function If(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var o=n.length-1;0<=o;o--){var d=n[o],h=d.instance,w=d.currentTarget;if(d=d.listener,h!==r&&i.isPropagationStopped())break e;r=d,i.currentTarget=w;try{r(i)}catch(N){Li(N)}i.currentTarget=null,r=h}else for(o=0;o<n.length;o++){if(d=n[o],h=d.instance,w=d.currentTarget,d=d.listener,h!==r&&i.isPropagationStopped())break e;r=d,i.currentTarget=w;try{r(i)}catch(N){Li(N)}i.currentTarget=null,r=h}}}}function oe(e,t){var a=t[Pr];a===void 0&&(a=t[Pr]=new Set);var n=e+"__bubble";a.has(n)||($f(t,e,2,!1),a.add(n))}function kc(e,t,a){var n=0;t&&(n|=4),$f(a,e,n,t)}var ar="_reactListening"+Math.random().toString(36).slice(2);function Yc(e){if(!e[ar]){e[ar]=!0,Ls.forEach(function(a){a!=="selectionchange"&&(tx.has(a)||kc(a,!1,e),kc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ar]||(t[ar]=!0,kc("selectionchange",!1,t))}}function $f(e,t,a,n){switch(S0(t)){case 2:var i=Rx;break;case 8:i=zx;break;default:i=Jc}a=i.bind(null,t,a,e),i=void 0,!ru||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Gc(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var d=n.stateNode.containerInfo;if(d===i)break;if(o===4)for(o=n.return;o!==null;){var h=o.tag;if((h===3||h===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;d!==null;){if(o=ln(d),o===null)return;if(h=o.tag,h===5||h===6||h===26||h===27){n=r=o;continue e}d=d.parentNode}}n=n.return}ao(function(){var w=r,N=lu(a),O=[];e:{var E=No.get(e);if(E!==void 0){var C=xi,$=e;switch(e){case"keypress":if(hi(a)===0)break e;case"keydown":case"keyup":C=Ph;break;case"focusin":$="focus",C=ou;break;case"focusout":$="blur",C=ou;break;case"beforeblur":case"afterblur":C=ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=io;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=kh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Jh;break;case Do:case Ro:case zo:C=Hh;break;case _o:C=eg;break;case"scroll":case"scrollend":C=Uh;break;case"wheel":C=ag;break;case"copy":case"cut":case"paste":C=Lh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=uo;break;case"toggle":case"beforetoggle":C=lg}var P=(t&4)!==0,Ae=!P&&(e==="scroll"||e==="scrollend"),b=P?E!==null?E+"Capture":null:E;P=[];for(var m=w,S;m!==null;){var j=m;if(S=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||S===null||b===null||(j=nl(m,b),j!=null&&P.push(Gl(m,j,S))),Ae)break;m=m.return}0<P.length&&(E=new C(E,$,null,a,N),O.push({event:E,listeners:P}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",E&&a!==nu&&($=a.relatedTarget||a.fromElement)&&(ln($)||$[nn]))break e;if((C||E)&&(E=N.window===N?N:(E=N.ownerDocument)?E.defaultView||E.parentWindow:window,C?($=a.relatedTarget||a.toElement,C=w,$=$?ln($):null,$!==null&&(Ae=g($),P=$.tag,$!==Ae||P!==5&&P!==27&&P!==6)&&($=null)):(C=null,$=w),C!==$)){if(P=io,j="onMouseLeave",b="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(P=uo,j="onPointerLeave",b="onPointerEnter",m="pointer"),Ae=C==null?E:al(C),S=$==null?E:al($),E=new P(j,m+"leave",C,a,N),E.target=Ae,E.relatedTarget=S,j=null,ln(N)===w&&(P=new P(b,m+"enter",$,a,N),P.target=S,P.relatedTarget=Ae,j=P),Ae=j,C&&$)t:{for(P=C,b=$,m=0,S=P;S;S=Gn(S))m++;for(S=0,j=b;j;j=Gn(j))S++;for(;0<m-S;)P=Gn(P),m--;for(;0<S-m;)b=Gn(b),S--;for(;m--;){if(P===b||b!==null&&P===b.alternate)break t;P=Gn(P),b=Gn(b)}P=null}else P=null;C!==null&&Jf(O,E,C,P,!1),$!==null&&Ae!==null&&Jf(O,Ae,$,P,!0)}}e:{if(E=w?al(w):window,C=E.nodeName&&E.nodeName.toLowerCase(),C==="select"||C==="input"&&E.type==="file")var Q=xo;else if(ho(E))if(mo)Q=hg;else{Q=fg;var ue=dg}else C=E.nodeName,!C||C.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?w&&au(w.elementType)&&(Q=xo):Q=pg;if(Q&&(Q=Q(e,w))){go(O,Q,a,N);break e}ue&&ue(e,E,w),e==="focusout"&&w&&E.type==="number"&&w.memoizedProps.value!=null&&tu(E,"number",E.value)}switch(ue=w?al(w):window,e){case"focusin":(ho(ue)||ue.contentEditable==="true")&&(gn=ue,xu=w,dl=null);break;case"focusout":dl=xu=gn=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,To(O,a,N);break;case"selectionchange":if(xg)break;case"keydown":case"keyup":To(O,a,N)}var Z;if(fu)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else hn?fo(e,a)&&(I="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(co&&a.locale!=="ko"&&(hn||I!=="onCompositionStart"?I==="onCompositionEnd"&&hn&&(Z=no()):(fa=N,uu="value"in fa?fa.value:fa.textContent,hn=!0)),ue=nr(w,I),0<ue.length&&(I=new ro(I,e,null,a,N),O.push({event:I,listeners:ue}),Z?I.data=Z:(Z=po(a),Z!==null&&(I.data=Z)))),(Z=rg?ug(e,a):cg(e,a))&&(I=nr(w,"onBeforeInput"),0<I.length&&(ue=new ro("onBeforeInput","beforeinput",null,a,N),O.push({event:ue,listeners:I}),ue.data=Z)),Jg(O,e,w,a,N)}If(O,t)})}function Gl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function nr(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=nl(e,a),i!=null&&n.unshift(Gl(e,i,r)),i=nl(e,t),i!=null&&n.push(Gl(e,i,r))),e.tag===3)return n;e=e.return}return[]}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jf(e,t,a,n,i){for(var r=t._reactName,o=[];a!==null&&a!==n;){var d=a,h=d.alternate,w=d.stateNode;if(d=d.tag,h!==null&&h===n)break;d!==5&&d!==26&&d!==27||w===null||(h=w,i?(w=nl(a,r),w!=null&&o.unshift(Gl(a,w,h))):i||(w=nl(a,r),w!=null&&o.push(Gl(a,w,h)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var ax=/\r\n?/g,nx=/\u0000|\uFFFD/g;function Wf(e){return(typeof e=="string"?e:""+e).replace(ax,`
`).replace(nx,"")}function e0(e,t){return t=Wf(t),Wf(e)===t}function lr(){}function Ee(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||dn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&dn(e,""+n);break;case"className":si(e,"class",n);break;case"tabIndex":si(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":si(e,a,n);break;case"style":eo(e,n,r);break;case"data":if(t!=="object"){si(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=fi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ee(e,t,"name",i.name,i,null),Ee(e,t,"formEncType",i.formEncType,i,null),Ee(e,t,"formMethod",i.formMethod,i,null),Ee(e,t,"formTarget",i.formTarget,i,null)):(Ee(e,t,"encType",i.encType,i,null),Ee(e,t,"method",i.method,i,null),Ee(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=fi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=lr);break;case"onScroll":n!=null&&oe("scroll",e);break;case"onScrollEnd":n!=null&&oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=fi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":oe("beforetoggle",e),oe("toggle",e),ci(e,"popover",n);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ci(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Oh.get(a)||a,ci(e,a,n))}}function Hc(e,t,a,n,i,r){switch(a){case"style":eo(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?dn(e,n):(typeof n=="number"||typeof n=="bigint")&&dn(e,""+n);break;case"onScroll":n!=null&&oe("scroll",e);break;case"onScrollEnd":n!=null&&oe("scrollend",e);break;case"onClick":n!=null&&(e.onclick=lr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[rt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):ci(e,a,n)}}}function et(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",e),oe("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,r,o,a,null)}}i&&Ee(e,t,"srcSet",a.srcSet,a,null),n&&Ee(e,t,"src",a.src,a,null);return;case"input":oe("invalid",e);var d=r=o=i=null,h=null,w=null;for(n in a)if(a.hasOwnProperty(n)){var N=a[n];if(N!=null)switch(n){case"name":i=N;break;case"type":o=N;break;case"checked":h=N;break;case"defaultChecked":w=N;break;case"value":r=N;break;case"defaultValue":d=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,t));break;default:Ee(e,t,n,N,a,null)}}Is(e,r,d,h,w,o,i,!1),oi(e);return;case"select":oe("invalid",e),n=o=r=null;for(i in a)if(a.hasOwnProperty(i)&&(d=a[i],d!=null))switch(i){case"value":r=d;break;case"defaultValue":o=d;break;case"multiple":n=d;default:Ee(e,t,i,d,a,null)}t=r,a=o,e.multiple=!!n,t!=null?on(e,!!n,t,!1):a!=null&&on(e,!!n,a,!0);return;case"textarea":oe("invalid",e),r=i=n=null;for(o in a)if(a.hasOwnProperty(o)&&(d=a[o],d!=null))switch(o){case"value":n=d;break;case"defaultValue":i=d;break;case"children":r=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(c(91));break;default:Ee(e,t,o,d,a,null)}Js(e,n,i,r),oi(e);return;case"option":for(h in a)if(a.hasOwnProperty(h)&&(n=a[h],n!=null))switch(h){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ee(e,t,h,n,a,null)}return;case"dialog":oe("beforetoggle",e),oe("toggle",e),oe("cancel",e),oe("close",e);break;case"iframe":case"object":oe("load",e);break;case"video":case"audio":for(n=0;n<Yl.length;n++)oe(Yl[n],e);break;case"image":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"embed":case"source":case"link":oe("error",e),oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(n=a[w],n!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,w,n,a,null)}return;default:if(au(t)){for(N in a)a.hasOwnProperty(N)&&(n=a[N],n!==void 0&&Hc(e,t,N,n,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(n=a[d],n!=null&&Ee(e,t,d,n,a,null))}function lx(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,o=null,d=null,h=null,w=null,N=null;for(C in a){var O=a[C];if(a.hasOwnProperty(C)&&O!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":h=O;default:n.hasOwnProperty(C)||Ee(e,t,C,null,n,O)}}for(var E in n){var C=n[E];if(O=a[E],n.hasOwnProperty(E)&&(C!=null||O!=null))switch(E){case"type":r=C;break;case"name":i=C;break;case"checked":w=C;break;case"defaultChecked":N=C;break;case"value":o=C;break;case"defaultValue":d=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:C!==O&&Ee(e,t,E,C,n,O)}}eu(e,o,d,h,w,N,r,i);return;case"select":C=o=d=E=null;for(r in a)if(h=a[r],a.hasOwnProperty(r)&&h!=null)switch(r){case"value":break;case"multiple":C=h;default:n.hasOwnProperty(r)||Ee(e,t,r,null,n,h)}for(i in n)if(r=n[i],h=a[i],n.hasOwnProperty(i)&&(r!=null||h!=null))switch(i){case"value":E=r;break;case"defaultValue":d=r;break;case"multiple":o=r;default:r!==h&&Ee(e,t,i,r,n,h)}t=d,a=o,n=C,E!=null?on(e,!!a,E,!1):!!n!=!!a&&(t!=null?on(e,!!a,t,!0):on(e,!!a,a?[]:"",!1));return;case"textarea":C=E=null;for(d in a)if(i=a[d],a.hasOwnProperty(d)&&i!=null&&!n.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Ee(e,t,d,null,n,i)}for(o in n)if(i=n[o],r=a[o],n.hasOwnProperty(o)&&(i!=null||r!=null))switch(o){case"value":E=i;break;case"defaultValue":C=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==r&&Ee(e,t,o,i,n,r)}$s(e,E,C);return;case"option":for(var $ in a)if(E=a[$],a.hasOwnProperty($)&&E!=null&&!n.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:Ee(e,t,$,null,n,E)}for(h in n)if(E=n[h],C=a[h],n.hasOwnProperty(h)&&E!==C&&(E!=null||C!=null))switch(h){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:Ee(e,t,h,E,n,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in a)E=a[P],a.hasOwnProperty(P)&&E!=null&&!n.hasOwnProperty(P)&&Ee(e,t,P,null,n,E);for(w in n)if(E=n[w],C=a[w],n.hasOwnProperty(w)&&E!==C&&(E!=null||C!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(c(137,t));break;default:Ee(e,t,w,E,n,C)}return;default:if(au(t)){for(var Ae in a)E=a[Ae],a.hasOwnProperty(Ae)&&E!==void 0&&!n.hasOwnProperty(Ae)&&Hc(e,t,Ae,void 0,n,E);for(N in n)E=n[N],C=a[N],!n.hasOwnProperty(N)||E===C||E===void 0&&C===void 0||Hc(e,t,N,E,n,C);return}}for(var b in a)E=a[b],a.hasOwnProperty(b)&&E!=null&&!n.hasOwnProperty(b)&&Ee(e,t,b,null,n,E);for(O in n)E=n[O],C=a[O],!n.hasOwnProperty(O)||E===C||E==null&&C==null||Ee(e,t,O,E,n,C)}var qc=null,Lc=null;function ir(e){return e.nodeType===9?e:e.ownerDocument}function t0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function a0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Xc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qc=null;function ix(){var e=window.event;return e&&e.type==="popstate"?e===Qc?!1:(Qc=e,!0):(Qc=null,!1)}var n0=typeof setTimeout=="function"?setTimeout:void 0,rx=typeof clearTimeout=="function"?clearTimeout:void 0,l0=typeof Promise=="function"?Promise:void 0,ux=typeof queueMicrotask=="function"?queueMicrotask:typeof l0<"u"?function(e){return l0.resolve(null).then(e).catch(cx)}:n0;function cx(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function i0(e,t){var a=t,n=0,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<n&&8>n){a=n;var o=e.ownerDocument;if(a&1&&Hl(o.documentElement),a&2&&Hl(o.body),a&4)for(a=o.head,Hl(a),o=a.firstChild;o;){var d=o.nextSibling,h=o.nodeName;o[tl]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=d}}if(i===0){e.removeChild(r),Fl(t);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=r}while(a);Fl(t)}function Kc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kc(a),Ir(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function sx(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[tl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=kt(e.nextSibling),e===null)break}return null}function ox(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=kt(e.nextSibling),e===null))return null;return e}function Zc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function dx(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Vc=null;function r0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function u0(e,t,a){switch(t=ir(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Hl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ir(e)}var Ot=new Map,c0=new Set;function rr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=Y.d;Y.d={f:fx,r:px,D:hx,C:gx,L:xx,m:mx,X:bx,S:yx,M:vx};function fx(){var e=ua.f(),t=$i();return e||t}function px(e){var t=rn(e);t!==null&&t.tag===5&&t.type==="form"?Dd(t):ua.r(e)}var Hn=typeof document>"u"?null:document;function s0(e,t,a){var n=Hn;if(n&&typeof t=="string"&&t){var i=Ct(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),c0.has(i)||(c0.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),et(t,"link",e),Qe(t),n.head.appendChild(t)))}}function hx(e){ua.D(e),s0("dns-prefetch",e,null)}function gx(e,t){ua.C(e,t),s0("preconnect",e,t)}function xx(e,t,a){ua.L(e,t,a);var n=Hn;if(n&&e&&t){var i='link[rel="preload"][as="'+Ct(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Ct(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Ct(a.imageSizes)+'"]')):i+='[href="'+Ct(e)+'"]';var r=i;switch(t){case"style":r=qn(e);break;case"script":r=Ln(e)}Ot.has(r)||(e=T({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(ql(r))||t==="script"&&n.querySelector(Ll(r))||(t=n.createElement("link"),et(t,"link",e),Qe(t),n.head.appendChild(t)))}}function mx(e,t){ua.m(e,t);var a=Hn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Ct(n)+'"][href="'+Ct(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ln(e)}if(!Ot.has(r)&&(e=T({rel:"modulepreload",href:e},t),Ot.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ll(r)))return}n=a.createElement("link"),et(n,"link",e),Qe(n),a.head.appendChild(n)}}}function yx(e,t,a){ua.S(e,t,a);var n=Hn;if(n&&e){var i=un(n).hoistableStyles,r=qn(e);t=t||"default";var o=i.get(r);if(!o){var d={loading:0,preload:null};if(o=n.querySelector(ql(r)))d.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(r))&&Fc(e,a);var h=o=n.createElement("link");Qe(h),et(h,"link",e),h._p=new Promise(function(w,N){h.onload=w,h.onerror=N}),h.addEventListener("load",function(){d.loading|=1}),h.addEventListener("error",function(){d.loading|=2}),d.loading|=4,ur(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:d},i.set(r,o)}}}function bx(e,t){ua.X(e,t);var a=Hn;if(a&&e){var n=un(a).hoistableScripts,i=Ln(e),r=n.get(i);r||(r=a.querySelector(Ll(i)),r||(e=T({src:e,async:!0},t),(t=Ot.get(i))&&Pc(e,t),r=a.createElement("script"),Qe(r),et(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function vx(e,t){ua.M(e,t);var a=Hn;if(a&&e){var n=un(a).hoistableScripts,i=Ln(e),r=n.get(i);r||(r=a.querySelector(Ll(i)),r||(e=T({src:e,async:!0,type:"module"},t),(t=Ot.get(i))&&Pc(e,t),r=a.createElement("script"),Qe(r),et(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function o0(e,t,a,n){var i=(i=F.current)?rr(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=qn(a.href),a=un(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=qn(a.href);var r=un(i).hoistableStyles,o=r.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=i.querySelector(ql(e)))&&!r._p&&(o.instance=r,o.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),r||Sx(i,e,a,o.state))),t&&n===null)throw Error(c(528,""));return o}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ln(a),a=un(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function qn(e){return'href="'+Ct(e)+'"'}function ql(e){return'link[rel="stylesheet"]['+e+"]"}function d0(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Sx(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),et(t,"link",a),Qe(t),e.head.appendChild(t))}function Ln(e){return'[src="'+Ct(e)+'"]'}function Ll(e){return"script[async]"+e}function f0(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Ct(a.href)+'"]');if(n)return t.instance=n,Qe(n),n;var i=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Qe(n),et(n,"style",i),ur(n,a.precedence,e),t.instance=n;case"stylesheet":i=qn(a.href);var r=e.querySelector(ql(i));if(r)return t.state.loading|=4,t.instance=r,Qe(r),r;n=d0(a),(i=Ot.get(i))&&Fc(n,i),r=(e.ownerDocument||e).createElement("link"),Qe(r);var o=r;return o._p=new Promise(function(d,h){o.onload=d,o.onerror=h}),et(r,"link",n),t.state.loading|=4,ur(r,a.precedence,e),t.instance=r;case"script":return r=Ln(a.src),(i=e.querySelector(Ll(r)))?(t.instance=i,Qe(i),i):(n=a,(i=Ot.get(r))&&(n=T({},a),Pc(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Qe(i),et(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,ur(n,a.precedence,e));return t.instance}function ur(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,o=0;o<n.length;o++){var d=n[o];if(d.dataset.precedence===t)r=d;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Pc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var cr=null;function p0(e,t,a){if(cr===null){var n=new Map,i=cr=new Map;i.set(a,n)}else i=cr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[tl]||r[at]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var d=n.get(o);d?d.push(r):n.set(o,[r])}}return n}function h0(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function wx(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function g0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Xl=null;function Ex(){}function Ax(e,t,a){if(Xl===null)throw Error(c(475));var n=Xl;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=qn(a.href),r=e.querySelector(ql(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=sr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,Qe(r);return}r=e.ownerDocument||e,a=d0(a),(i=Ot.get(i))&&Fc(a,i),r=r.createElement("link"),Qe(r);var o=r;o._p=new Promise(function(d,h){o.onload=d,o.onerror=h}),et(r,"link",a),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=sr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Tx(){if(Xl===null)throw Error(c(475));var e=Xl;return e.stylesheets&&e.count===0&&Ic(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Ic(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function sr(){if(this.count--,this.count===0){if(this.stylesheets)Ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var or=null;function Ic(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,or=new Map,t.forEach(Cx,e),or=null,sr.call(e))}function Cx(e,t){if(!(t.state.loading&4)){var a=or.get(e);if(a)var n=a.get(null);else{a=new Map,or.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var o=i[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}i=t.instance,o=i.getAttribute("data-precedence"),r=a.get(o)||n,r===n&&a.set(null,i),a.set(o,i),this.count++,n=sr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Ql={$$typeof:W,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function Dx(e,t,a,n,i,r,o,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zr(0),this.hiddenUpdates=Zr(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function x0(e,t,a,n,i,r,o,d,h,w,N,O){return e=new Dx(e,t,a,o,d,h,w,O),t=1,r===!0&&(t|=24),r=gt(3,null,null,t),e.current=r,r.stateNode=e,t=Nu(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},Uu(r),e}function m0(e){return e?(e=bn,e):bn}function y0(e,t,a,n,i,r){i=m0(i),n.context===null?n.context=i:n.pendingContext=i,n=ga(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=xa(e,n,t),a!==null&&(vt(a,e,t),vl(a,e,t))}function b0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function $c(e,t){b0(e,t),(e=e.alternate)&&b0(e,t)}function v0(e){if(e.tag===13){var t=yn(e,67108864);t!==null&&vt(t,e,67108864),$c(e,67108864)}}var dr=!0;function Rx(e,t,a,n){var i=_.T;_.T=null;var r=Y.p;try{Y.p=2,Jc(e,t,a,n)}finally{Y.p=r,_.T=i}}function zx(e,t,a,n){var i=_.T;_.T=null;var r=Y.p;try{Y.p=8,Jc(e,t,a,n)}finally{Y.p=r,_.T=i}}function Jc(e,t,a,n){if(dr){var i=Wc(n);if(i===null)Gc(e,t,n,fr,a),w0(e,n);else if(Nx(i,e,t,a,n))n.stopPropagation();else if(w0(e,n),t&4&&-1<_x.indexOf(e)){for(;i!==null;){var r=rn(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=Ba(r.pendingLanes);if(o!==0){var d=r;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var h=1<<31-pt(o);d.entanglements[1]|=h,o&=~h}Qt(r),(ve&6)===0&&(Pi=Gt()+500,kl(0))}}break;case 13:d=yn(r,2),d!==null&&vt(d,r,2),$i(),$c(r,2)}if(r=Wc(n),r===null&&Gc(e,t,n,fr,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else Gc(e,t,n,null,a)}}function Wc(e){return e=lu(e),es(e)}var fr=null;function es(e){if(fr=null,e=ln(e),e!==null){var t=g(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=A(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fr=e,null}function S0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gh()){case Os:return 2;case Ms:return 8;case li:case xh:return 32;case Us:return 268435456;default:return 32}default:return 32}}var ts=!1,za=null,_a=null,Na=null,Kl=new Map,Zl=new Map,ja=[],_x="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w0(e,t){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Kl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(t.pointerId)}}function Vl(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=rn(t),t!==null&&v0(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Nx(e,t,a,n,i){switch(t){case"focusin":return za=Vl(za,e,t,a,n,i),!0;case"dragenter":return _a=Vl(_a,e,t,a,n,i),!0;case"mouseover":return Na=Vl(Na,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return Kl.set(r,Vl(Kl.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,Zl.set(r,Vl(Zl.get(r)||null,e,t,a,n,i)),!0}return!1}function E0(e){var t=ln(e.target);if(t!==null){var a=g(t);if(a!==null){if(t=a.tag,t===13){if(t=A(a),t!==null){e.blockedOn=t,Ah(e.priority,function(){if(a.tag===13){var n=bt();n=Vr(n);var i=yn(a,n);i!==null&&vt(i,a,n),$c(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Wc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);nu=n,a.target.dispatchEvent(n),nu=null}else return t=rn(a),t!==null&&v0(t),e.blockedOn=a,!1;t.shift()}return!0}function A0(e,t,a){pr(e)&&a.delete(t)}function jx(){ts=!1,za!==null&&pr(za)&&(za=null),_a!==null&&pr(_a)&&(_a=null),Na!==null&&pr(Na)&&(Na=null),Kl.forEach(A0),Zl.forEach(A0)}function hr(e,t){e.blockedOn===t&&(e.blockedOn=null,ts||(ts=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,jx)))}var gr=null;function T0(e){gr!==e&&(gr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){gr===e&&(gr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(es(n||a)===null)continue;break}var r=rn(a);r!==null&&(e.splice(t,3),t-=3,ec(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Fl(e){function t(h){return hr(h,e)}za!==null&&hr(za,e),_a!==null&&hr(_a,e),Na!==null&&hr(Na,e),Kl.forEach(t),Zl.forEach(t);for(var a=0;a<ja.length;a++){var n=ja[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)E0(a),a.blockedOn===null&&ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],o=i[rt]||null;if(typeof r=="function")o||T0(a);else if(o){var d=null;if(r&&r.hasAttribute("formAction")){if(i=r,o=r[rt]||null)d=o.formAction;else if(es(i)!==null)continue}else d=o.action;typeof d=="function"?a[n+1]=d:(a.splice(n,3),n-=3),T0(a)}}}function as(e){this._internalRoot=e}xr.prototype.render=as.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=bt();y0(a,n,e,t,null,null)},xr.prototype.unmount=as.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;y0(e.current,2,null,e,null,null),$i(),t[nn]=null}};function xr(e){this._internalRoot=e}xr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hs();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ja.length&&t!==0&&t<ja[a].priority;a++);ja.splice(a,0,e),a===0&&E0(e)}};var C0=u.version;if(C0!=="19.1.0")throw Error(c(527,C0,"19.1.0"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=D(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Ox={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mr.isDisabled&&mr.supportsFiber)try{Jn=mr.inject(Ox),ft=mr}catch{}}return Il.createRoot=function(e,t){if(!p(e))throw Error(c(299));var a=!1,n="",i=qd,r=Ld,o=Xd,d=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(d=t.unstable_transitionCallbacks)),t=x0(e,1,!1,null,null,a,n,i,r,o,d,null),e[nn]=t.current,Yc(e),new as(t)},Il.hydrateRoot=function(e,t,a){if(!p(e))throw Error(c(299));var n=!1,i="",r=qd,o=Ld,d=Xd,h=null,w=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(h=a.unstable_transitionCallbacks),a.formState!==void 0&&(w=a.formState)),t=x0(e,1,!0,t,a??null,n,i,r,o,d,h,w),t.context=m0(null),a=t.current,n=bt(),n=Vr(n),i=ga(n),i.callback=null,xa(a,i,n),a=n,t.current.lanes=a,el(t,a),Qt(t),e[nn]=t.current,Yc(e),new xr(t)},Il.version="19.1.0",Il}var B0;function Qx(){if(B0)return is.exports;B0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),is.exports=Xx(),is.exports}var Kx=Qx();const yr={HEARTS:"hearts",DIAMONDS:"diamonds",CLUBS:"clubs",SPADES:"spades"},de={ACE:"ace",TWO:"2",THREE:"3",FOUR:"4",FIVE:"5",SIX:"6",SEVEN:"7",EIGHT:"8",NINE:"9",TEN:"10",JACK:"jack",QUEEN:"queen",KING:"king",JOKER:"joker"},J={SETUP:"setup",CARD_VIEWING:"card-viewing",PLAYING:"playing",SCORING:"scoring",FINISHED:"finished"},ei={HUMAN:"human",BOT:"bot"},k0={[de.ACE]:1,[de.TWO]:2,[de.THREE]:3,[de.FOUR]:4,[de.FIVE]:5,[de.SIX]:6,[de.SEVEN]:7,[de.EIGHT]:8,[de.NINE]:9,[de.TEN]:0,[de.JACK]:11,[de.QUEEN]:12,[de.KING]:-2,[de.JOKER]:-4},Pe={DECK_SIZE:54,CARDS_PER_PLAYER:4,INITIAL_KNOWN_CARDS:2,ROUNDS_TO_WIN:3,MIN_PLAYERS:2,MAX_PLAYERS:4,JOKER_COUNT:2},Zx=[de.ACE,de.TWO,de.THREE,de.FOUR,de.FIVE,de.SIX,de.SEVEN,de.EIGHT,de.NINE,de.TEN,de.JACK,de.QUEEN,de.KING],Vx=[yr.HEARTS,yr.DIAMONDS,yr.CLUBS,yr.SPADES],Y0={THINKING_DELAY:{min:4e3,max:6e3}},G0=()=>`card-${Math.random().toString(36).substr(2,9)}-${Date.now()}`,H0=()=>{const l={};Vx.forEach(u=>{Zx.forEach(s=>{const c=G0();l[c]={id:c,suit:u,rank:s,value:k0[s],isSpecial:s===de.QUEEN||s===de.JACK}})});for(let u=0;u<Pe.JOKER_COUNT;u++){const s=G0();l[s]={id:s,suit:null,rank:de.JOKER,value:k0[de.JOKER],isSpecial:!1}}return l},Fx=l=>{const u=[...l];for(let s=u.length-1;s>0;s--){const c=Math.floor(Math.random()*(s+1));[u[s],u[c]]=[u[c],u[s]]}return u},q0=l=>{const u=Object.keys(l);return Fx(u)},L0=(l,u)=>{const s=[...l],c=[...u];return s.forEach(p=>{const g=[];for(let A=0;A<Pe.CARDS_PER_PLAYER;A++){const v=c.pop();if(!v)throw new Error("Not enough cards in deck to deal to all players");g.push({cardId:v,isRevealed:!1,isKnownToPlayer:A<Pe.INITIAL_KNOWN_CARDS,lastSeenTurn:A<Pe.INITIAL_KNOWN_CARDS?0:void 0})}p.cards=g}),{updatedPlayers:s,remainingCards:c}},Px=(l,u)=>l.reduce((s,c)=>{const p=u[c.cardId];return s+(p?p.value:0)},0),X0=(l,u)=>l.isSpecial&&(l.rank===de.QUEEN||l.rank===de.JACK),Ix=(l,u,s)=>s==="deck"?l.length>0:u.length>0,Q0=(l,u,s)=>{if(!Ix(l,u,s))return{drawnCardId:null,newDrawPile:l,newDiscardPile:u};if(s==="deck"){const c=l[l.length-1],p=l.slice(0,-1);return{drawnCardId:c,newDrawPile:p,newDiscardPile:u}}else{const c=u[u.length-1],p=u.slice(0,-1);return{drawnCardId:c,newDrawPile:l,newDiscardPile:p}}},br=(l,u)=>[...l,u],Op=l=>l.length===0,gs=(l,u)=>u>=0&&u<Pe.CARDS_PER_PLAYER&&l.cards.length===Pe.CARDS_PER_PLAYER,$x=(l,u,s,c)=>{if(!gs(l,u))throw new Error(`Cannot replace card at index ${u}`);const p=l.cards[u].cardId;return{updatedPlayer:{...l,cards:l.cards.map((A,v)=>v===u?{...A,cardId:s,isKnownToPlayer:!0,lastSeenTurn:c}:A)},replacedCardId:p}},Jx=(l,u,s,c)=>l.map(p=>({...p,cards:p.cards.map(g=>g.cardId===s&&p.id===u?{...g,isKnownToPlayer:!0,lastSeenTurn:c}:g)})),Wx=(l,u,s,c,p)=>{const g=l.findIndex(k=>k.id===u),A=l.findIndex(k=>k.id===c);if(g===-1||A===-1)throw new Error("Player not found for card swap");const v=l[g],D=l[A];if(!gs(v,s)||!gs(D,p))throw new Error("Invalid card indices for swap");const y=v.cards[s],T=D.cards[p],B=[...l];return B[g]={...v,cards:v.cards.map((k,H)=>H===s?{...T,isKnownToPlayer:!1,lastSeenTurn:void 0}:k)},B[A]={...D,cards:D.cards.map((k,H)=>H===p?{...y,isKnownToPlayer:!1,lastSeenTurn:void 0}:k)},B},e1=l=>{if(l.length===0)throw new Error("Cannot determine winner with no players");return l.reduce((u,s)=>s.score<u.score?s:u)},t1=(l,u)=>{const s=Object.entries(l).find(([,c])=>c>=u);return s?s[0]:null},Br=(l,u)=>{if(l.round.phase!==J.PLAYING)return!1;const s=l.players[l.round.currentPlayerIndex];return!s||s.id!==u?!1:s.isActive},kr=(l,u)=>!Br(l,u)||l.round.stopCalled?!1:l.round.phase===J.PLAYING,Cs=l=>!!(Op(l.deck.drawPile)||l.round.stopCalled&&l.round.remainingTurns<=0),a1=l=>Cs(l),n1=(l,u)=>(l+1)%u,K0=l=>{const u=[];(l.players.length<Pe.MIN_PLAYERS||l.players.length>Pe.MAX_PLAYERS)&&u.push(`Invalid player count: ${l.players.length}`),(l.round.phase===J.PLAYING||l.round.phase===J.SCORING)&&l.players.forEach((p,g)=>{p.cards.length!==Pe.CARDS_PER_PLAYER&&u.push(`Player ${g} has ${p.cards.length} cards, expected ${Pe.CARDS_PER_PLAYER}`)}),(l.round.currentPlayerIndex<0||l.round.currentPlayerIndex>=l.players.length)&&u.push(`Invalid current player index: ${l.round.currentPlayerIndex}`);const s=l.deck.drawPile.length+l.deck.discardPile.length+l.players.reduce((p,g)=>p+g.cards.length,0);s!==Pe.DECK_SIZE&&u.push(`Total cards in game: ${s}, expected: ${Pe.DECK_SIZE}`);const c=Object.values(l.match.roundWins).reduce((p,g)=>p+g,0);return c!==l.match.currentRound-1&&l.round.phase!==J.SETUP&&u.push(`Round wins (${c}) don't match current round (${l.match.currentRound})`),u},Nr=(l,u,s)=>!Br(l,u)||l.ui.selectedCard?!1:s==="deck"?l.deck.drawPile.length>0:l.deck.discardPile.length>0,Mp=(l,u,s)=>!(!Br(l,u)||!l.ui.selectedCard||s<0||s>=Pe.CARDS_PER_PLAYER),jr=l=>{const u=[],s=l.players[l.round.currentPlayerIndex];if(!s||l.round.phase!==J.PLAYING)return u;if(!!!l.ui.selectedCard)Nr(l,s.id,"deck")&&u.push("DRAW_FROM_DECK"),Nr(l,s.id,"discard")&&u.push("DRAW_FROM_DISCARD");else{for(let g=0;g<Pe.CARDS_PER_PLAYER;g++)Mp(l,s.id,g)&&u.push(`REPLACE_CARD_${g}`);u.push("DISCARD_DRAWN_CARD");const p=l.ui.selectedCard?l.cards[l.ui.selectedCard]:null;p&&Up(p)&&u.push("USE_SPECIAL_ABILITY")}return kr(l,s.id)&&u.push("CALL_STOP"),u},Up=(l,u)=>l.isSpecial&&(l.rank===de.QUEEN||l.rank===de.JACK),l1=(l,u,s)=>{if(!Br(l,u))return!1;const c=!!l.ui.selectedCard;switch(s){case"DRAW_FROM_DECK":case"DRAW_FROM_DISCARD":return!c;case"REPLACE_CARD":case"DISCARD_DRAWN_CARD":return c;case"CALL_STOP":return kr(l,u);case"USE_SPECIAL_ABILITY":{if(!c)return!1;const p=l.cards[l.ui.selectedCard];return Up(p)}default:return!1}},i1=l=>{const u=l.players[l.round.currentPlayerIndex],s=l.players.filter(T=>T.isActive),c=l.round.turnNumber,p=c/l.players.length,g=l.players.map(T=>T.score).filter(T=>T>0),A=g.length>0?g.reduce((T,B)=>T+B,0)/g.length:0,v=Pe.DECK_SIZE,D=l.deck.drawPile.length,y=(v-D)/v*100;return{gameId:l.gameId,phase:l.round.phase,currentRound:l.match.currentRound,turnNumber:l.round.turnNumber,playerCount:l.players.length,activePlayers:s.length,currentPlayerName:u?.name||"None",currentPlayerId:u?.id||null,cardsInDeck:l.deck.drawPile.length,cardsInDiscard:l.deck.discardPile.length,deckEmpty:Op(l.deck.drawPile),deckProgress:Math.round(y),totalTurns:c,averageTurnsPerPlayer:Math.round(p*100)/100,roundsToWin:l.match.roundsToWin,stopCalled:l.round.stopCalled,stopCalledBy:l.round.stopCalledBy,remainingTurns:l.round.remainingTurns,matchWinner:l.match.winner,roundWins:l.match.roundWins,averageScore:Math.round(A*100)/100,playerScores:l.round.phase===J.SCORING||l.round.phase===J.FINISHED?l.players.map(T=>({id:T.id,name:T.name,score:T.score})):null,isValidState:K0(l).length===0,stateErrors:K0(l)}},r1=l=>{const u=l.players[l.round.currentPlayerIndex],s=jr(l),c=!!l.ui.selectedCard;return{currentPlayer:{id:u?.id||null,name:u?.name||"None",type:u?.type||null,isActive:u?.isActive||!1,cardCount:u?.cards.length||0,score:u?.score||0},turnState:{hasDrawnCard:c,drawnCardId:l.ui.selectedCard,availableActions:s,canCallStop:u?kr(l,u.id):!1,validActionsCount:s.length},gameProgression:{phase:l.round.phase,turnNumber:l.round.turnNumber,roundNumber:l.match.currentRound,stopCalled:l.round.stopCalled,remainingTurns:l.round.remainingTurns,shouldEnd:a1(l)},deckState:{drawPileSize:l.deck.drawPile.length,discardPileSize:l.deck.discardPile.length,isEmpty:l.deck.isEmpty,topDiscardCard:l.deck.discardPile.length>0?l.deck.discardPile[l.deck.discardPile.length-1]:null}}},u1=()=>`player-${Math.random().toString(36).substr(2,9)}-${Date.now()}`,c1=(l,u,s)=>({id:s!==void 0?`player-${s}`:u1(),name:l,type:u,cards:[],score:0,isActive:!0,roundWins:0}),s1=(l,u)=>{const s=[];for(let c=0;c<l;c++){const p=c===0,g=p?"Player":`Bot ${c}`,A=u[c]||g;s.push(c1(A,p?ei.HUMAN:ei.BOT,c))}return s},Xn=l=>{const u=l.round.currentPlayerIndex;return l.players[u]||null},o1=l=>l.type===ei.BOT;class vr{static decideDraw(u){const s=Xn(u);if(!s)return null;const c=Nr(u,s.id,"deck"),p=Nr(u,s.id,"discard");return!c&&!p?null:c&&!p?"deck":!c&&p?"discard":Math.random()>.3?"deck":"discard"}static decideReplace(u){const s=Xn(u);if(!s||!u.ui.selectedCard)return null;const c=[];for(let p=0;p<Pe.CARDS_PER_PLAYER;p++)Mp(u,s.id,p)&&c.push(p);return c.length===0||Math.random()>.7?null:c[Math.floor(Math.random()*c.length)]}static decideStop(u){const s=Xn(u);return!s||!kr(u,s.id)?!1:Math.random()<.1}static decideSpecialAbility(){return Math.random()>.5}static decidePeekTarget(u){const s=Xn(u);if(!s)return null;const c=[];return u.players.forEach(p=>{p.id!==s.id&&p.cards.forEach(g=>{g.isKnownToPlayer||c.push(g.cardId)})}),c.length>0?c[Math.floor(Math.random()*c.length)]:null}static decideSwapTarget(u){const s=Xn(u);if(!s)return null;const c=Math.floor(Math.random()*s.cards.length),p=u.players.filter(v=>v.id!==s.id);if(p.length===0)return null;const g=p[Math.floor(Math.random()*p.length)],A=Math.floor(Math.random()*g.cards.length);return{playerCardIndex:c,targetPlayerId:g.id,targetCardIndex:A}}static generateMove(u){const s=Xn(u);if(!s||!o1(s))return null;if(!!u.ui.selectedCard){if(this.decideStop(u))return{action:"call_stop"};const p=this.decideReplace(u);return p!==null?{action:"replace_card",cardIndex:p}:{action:"discard_card"}}else{const p=this.decideDraw(u);return p?{action:p==="deck"?"draw_deck":"draw_discard"}:null}}}const d1=(l=Y0.THINKING_DELAY.min,u=Y0.THINKING_DELAY.max)=>{const s=Math.random()*(u-l)+l;return new Promise(c=>setTimeout(c,s))},Bp={gameId:"",gameMode:"local",maxPlayers:4,match:{currentRound:0,roundsToWin:Pe.ROUNDS_TO_WIN,roundWins:{},winner:null},round:{phase:J.SETUP,currentPlayerIndex:0,stopCalled:!1,stopCalledBy:null,remainingTurns:0,autoStopped:!1,turnNumber:0},players:[],cards:{},deck:{drawPile:[],discardPile:[],isEmpty:!0},lastAction:null,ui:{selectedCard:null,showingPeekCard:null,animationQueue:[],isActionInProgress:!1,currentModal:null,isBotThinking:!1,botThinkingStartTime:null,turnTimer:null}},kp=(l,u)=>{switch(u.type){case"START_GAME":{const{playerCount:s,playerNames:c}=u.payload,p=H0(),g=q0(p),A=s1(s,c),{updatedPlayers:v,remainingCards:D}=L0(A,g),y=[D.pop()],T=D,B={};return v.forEach(k=>{B[k.id]=0}),{...l,gameId:`game-${Date.now()}`,cards:p,players:v,deck:{drawPile:T,discardPile:y,isEmpty:T.length===0},match:{...l.match,currentRound:1,roundWins:B},round:{...l.round,phase:J.CARD_VIEWING,currentPlayerIndex:0,turnNumber:1},lastAction:{type:u.type,playerId:"system",details:u.payload,timestamp:Date.now()}}}case"START_PLAYING":return{...l,round:{...l.round,phase:J.PLAYING},lastAction:{type:u.type,playerId:"system",details:{},timestamp:Date.now()}};case"START_ROUND":{const s=H0(),c=q0(s),p=l.players.map(y=>({...y,cards:[],score:0,roundWins:l.match.roundWins[y.id]||0})),{updatedPlayers:g,remainingCards:A}=L0(p,c),v=[A.pop()],D=A;return{...l,cards:s,players:g,deck:{drawPile:D,discardPile:v,isEmpty:D.length===0},match:{...l.match,currentRound:l.match.currentRound+1},round:{...l.round,phase:J.PLAYING,currentPlayerIndex:0,stopCalled:!1,stopCalledBy:null,remainingTurns:0,autoStopped:!1,turnNumber:1},ui:{...l.ui,currentModal:null,selectedCard:null,showingPeekCard:null},lastAction:{type:u.type,playerId:"system",details:{},timestamp:Date.now()}}}case"END_ROUND":{const s=l.players.map(v=>{const D=Px(v.cards,l.cards);return{...v,score:D,cards:v.cards.map(y=>({...y,isRevealed:!0}))}}),c=e1(s),p={...l.match.roundWins};p[c.id]=(p[c.id]||0)+1;const g=s.map(v=>({...v,roundWins:p[v.id]||0})),A=t1(p,l.match.roundsToWin);return{...l,players:g,match:{...l.match,roundWins:p,winner:A},round:{...l.round,phase:A?J.FINISHED:J.SCORING},ui:{...l.ui,currentModal:"ROUND_RESULTS"},lastAction:{type:u.type,playerId:"system",details:{roundWinner:c.id,scores:g.map(v=>({id:v.id,score:v.score}))},timestamp:Date.now()}}}case"END_GAME":return{...l,round:{...l.round,phase:J.FINISHED},match:{...l.match,winner:u.payload.winnerId},lastAction:{type:u.type,playerId:"system",details:u.payload,timestamp:Date.now()}};case"RESET_GAME":return{...Bp,gameId:`game-${Date.now()}`};case"DRAW_FROM_DECK":{const{playerId:s}=u.payload,{drawnCardId:c,newDrawPile:p,newDiscardPile:g}=Q0(l.deck.drawPile,l.deck.discardPile,"deck");if(!c)return l;const A=l.cards[c],v=A&&X0(A),y=l.players.find(T=>T.id===s)?.type==="bot";return{...l,deck:{...l.deck,drawPile:p,discardPile:g,isEmpty:p.length===0},ui:{...l.ui,selectedCard:c,currentModal:v&&!y?"special-ability":null},lastAction:{type:u.type,playerId:s,details:{drawnCardId:c,hasSpecialAbility:v},timestamp:Date.now()}}}case"DRAW_FROM_DISCARD":{const{playerId:s}=u.payload,{drawnCardId:c,newDrawPile:p,newDiscardPile:g}=Q0(l.deck.drawPile,l.deck.discardPile,"discard");return c?{...l,deck:{...l.deck,drawPile:p,discardPile:g},ui:{...l.ui,selectedCard:c},lastAction:{type:u.type,playerId:s,details:{drawnCardId:c},timestamp:Date.now()}}:l}case"REPLACE_CARD":{const{playerId:s,cardIndex:c,drawnCardId:p}=u.payload,g=l.players.findIndex(te=>te.id===s);if(g===-1||c<0||c>=Pe.CARDS_PER_PLAYER)return l;const A=l.players[g];if(!p||l.ui.isActionInProgress)return l;const{updatedPlayer:v,replacedCardId:D}=$x(A,c,p,l.round.turnNumber),y=[...l.players];y[g]=v;const T=br(l.deck.discardPile,D),B=l.cards[p],k=X0(B),q=l.players.find(te=>te.id===s)?.type==="bot";return{...l,players:y,deck:{...l.deck,discardPile:T},ui:{...l.ui,selectedCard:null,currentModal:k&&!q?B.rank:null,isActionInProgress:!0},lastAction:{type:u.type,playerId:s,details:{cardIndex:c,drawnCardId:p,replacedCardId:D,hasSpecialAbility:k},timestamp:Date.now()}}}case"DISCARD_DRAWN_CARD":{const{playerId:s,cardId:c}=u.payload,p=c||l.ui.selectedCard;if(!p)return l;const g=br(l.deck.discardPile,p);return{...l,deck:{...l.deck,discardPile:g},ui:{...l.ui,selectedCard:null},lastAction:{type:u.type,playerId:s,details:{cardId:p},timestamp:Date.now()}}}case"END_TURN":{const{playerId:s}=u.payload,c=n1(l.round.currentPlayerIndex,l.players.length);let p=Cs(l),g=l.round.remainingTurns;l.round.stopCalled&&(g=Math.max(0,l.round.remainingTurns-1),g===0&&(p=!0));const A={...l,round:{...l.round,currentPlayerIndex:c,turnNumber:l.round.turnNumber+1,remainingTurns:g},ui:{...l.ui,selectedCard:null,showingPeekCard:null,isActionInProgress:!1},lastAction:{type:u.type,playerId:s,details:{shouldEndRound:p},timestamp:Date.now()}};return p?kp(A,{type:"END_ROUND",payload:{}}):A}case"CALL_STOP":return{...l,round:{...l.round,stopCalled:!0,stopCalledBy:u.payload.playerId,remainingTurns:l.players.length-1},lastAction:{type:u.type,playerId:u.payload.playerId,details:{},timestamp:Date.now()}};case"PEEK_CARD":{const{playerId:s,targetCardId:c}=u.payload,p=Jx(l.players,s,c,l.round.turnNumber),g=l.ui.selectedCard,A=g?br(l.deck.discardPile,g):l.deck.discardPile;return{...l,players:p,deck:{...l.deck,discardPile:A},ui:{...l.ui,selectedCard:null,showingPeekCard:c,currentModal:"peek-result"},lastAction:{type:u.type,playerId:s,details:{targetCardId:c,discardedCardId:g},timestamp:Date.now()}}}case"SWAP_CARDS":{const{playerId:s,playerCardIndex:c,targetPlayerId:p,targetCardIndex:g}=u.payload,A=l.players.findIndex(H=>H.id===s),v=l.players.findIndex(H=>H.id===p);if(A===-1||v===-1)return l;const D=l.players[A],y=l.players[v];if(c>=D.cards.length||g>=y.cards.length)return l;const T=Wx(l.players,s,c,p,g),B=l.ui.selectedCard,k=B?br(l.deck.discardPile,B):l.deck.discardPile;return{...l,players:T,deck:{...l.deck,discardPile:k},ui:{...l.ui,selectedCard:null,currentModal:null},lastAction:{type:u.type,playerId:s,details:{playerCardIndex:c,targetPlayerId:p,targetCardIndex:g,discardedCardId:B},timestamp:Date.now()}}}case"USE_SPECIAL_ABILITY":{const{playerId:s,cardId:c,abilityType:p}=u.payload,g=p==="peek"?"PEEK_SELECTION":"SWAP_SELECTION";return{...l,ui:{...l.ui,currentModal:g},lastAction:{type:u.type,playerId:s,details:{cardId:c,abilityType:p},timestamp:Date.now()}}}case"SKIP_SPECIAL_ABILITY":{const{playerId:s,cardId:c}=u.payload;return{...l,ui:{...l.ui,currentModal:null},lastAction:{type:u.type,playerId:s,details:{cardId:c},timestamp:Date.now()}}}case"SELECT_CARD":return{...l,ui:{...l.ui,selectedCard:u.payload.cardId}};case"CLEAR_SELECTION":return{...l,ui:{...l.ui,selectedCard:null}};case"SHOW_PEEK_RESULT":return{...l,ui:{...l.ui,showingPeekCard:u.payload.cardId}};case"HIDE_PEEK_RESULT":return{...l,ui:{...l.ui,showingPeekCard:null}};case"SHOW_MODAL":return{...l,ui:{...l.ui,currentModal:u.payload.modalType}};case"HIDE_MODAL":return{...l,ui:{...l.ui,currentModal:null}};case"ADD_ANIMATION":return{...l,ui:{...l.ui,animationQueue:[...l.ui.animationQueue,u.payload.animation]}};case"COMPLETE_ANIMATION":return{...l,ui:{...l.ui,animationQueue:l.ui.animationQueue.filter(s=>s.id!==u.payload.animationId)}};case"SET_ACTION_IN_PROGRESS":return{...l,ui:{...l.ui,isActionInProgress:u.payload.inProgress}};case"SET_BOT_THINKING":return{...l,ui:{...l.ui,isBotThinking:u.payload.thinking,botThinkingStartTime:u.payload.thinking?Date.now():null}};case"CLEAR_BOT_THINKING":return{...l,ui:{...l.ui,isBotThinking:!1,botThinkingStartTime:null}};case"BOT_MAKE_MOVE":case"BOT_THINKING":return{...l,lastAction:{type:u.type,playerId:u.payload.playerId,details:u.payload,timestamp:Date.now()}};case"START_TURN_TIMER":{const{duration:s}=u.payload,c=Date.now();return{...l,ui:{...l.ui,turnTimer:{isActive:!0,startTime:c,duration:s,remainingTime:s}}}}case"UPDATE_TURN_TIMER":{const{remainingTime:s}=u.payload;return l.ui.turnTimer?{...l,ui:{...l.ui,turnTimer:{...l.ui.turnTimer,remainingTime:s}}}:l}case"STOP_TURN_TIMER":return{...l,ui:{...l.ui,turnTimer:null}};case"TIMER_EXPIRED":return{...l,ui:{...l.ui,turnTimer:null}};case"UPDATE_PLAYER_KNOWLEDGE":case"REVEAL_CARD":case"UPDATE_SCORES":case"SET_CURRENT_PLAYER":case"INCREMENT_TURN":return{...l,lastAction:{type:u.type,playerId:"system",details:u.payload,timestamp:Date.now()}};default:return console.warn(`Unhandled action type: ${u.type}`),l}},Yp=Be.createContext(null);class f1{dispatch;gameState;constructor(u,s){this.dispatch=u,this.gameState=s}updateGameState(u){this.gameState=u}processGameFlow(){switch(this.gameState.round.phase){case J.SETUP:break;case J.CARD_VIEWING:this.handleCardViewingPhase();break;case J.PLAYING:this.handlePlayingPhase();break;case J.SCORING:this.handleScoringPhase();break;case J.FINISHED:this.handleFinishedPhase();break}}handleCardViewingPhase(){}handlePlayingPhase(){if(Cs(this.gameState)){this.dispatch({type:"END_ROUND",payload:{}});return}const u=this.getCurrentPlayer();u&&u.type===ei.BOT&&!this.gameState.ui.isBotThinking&&(this.dispatch({type:"SET_BOT_THINKING",payload:{thinking:!0}}),d1().then(()=>{this.dispatch({type:"CLEAR_BOT_THINKING",payload:{}}),this.processBotTurn()}))}handleScoringPhase(){console.log("Round scoring completed. Waiting for user to continue.")}handleFinishedPhase(){console.log("Game finished. Winner:",this.gameState.match.winner)}processBotTurn(){const u=this.getCurrentPlayer();if(!u||u.type!==ei.BOT)return;const s=this.gameState.ui.selectedCard;if(s){const p=this.gameState.cards[s];if(p&&p.isSpecial){this.processBotSpecialAbility(u,p);return}}const c=vr.generateMove(this.gameState);if(!c){console.warn("Bot could not generate a valid move"),this.endTurn();return}switch(console.log(`Bot ${u.name} making move:`,c.action),c.action){case"draw_deck":this.dispatch({type:"DRAW_FROM_DECK",payload:{playerId:u.id}});break;case"draw_discard":this.dispatch({type:"DRAW_FROM_DISCARD",payload:{playerId:u.id}});break;case"replace_card":c.cardIndex!==void 0&&this.gameState.ui.selectedCard&&(this.dispatch({type:"REPLACE_CARD",payload:{playerId:u.id,cardIndex:c.cardIndex,drawnCardId:this.gameState.ui.selectedCard}}),setTimeout(()=>this.endTurn(),500));break;case"discard_card":this.gameState.ui.selectedCard&&(this.dispatch({type:"DISCARD_DRAWN_CARD",payload:{playerId:u.id,cardId:this.gameState.ui.selectedCard}}),setTimeout(()=>this.endTurn(),500));break;case"call_stop":this.dispatch({type:"CALL_STOP",payload:{playerId:u.id}}),setTimeout(()=>this.endTurn(),500);break;default:console.warn("Unknown bot action:",c.action),this.endTurn()}}processBotSpecialAbility(u,s){if(!vr.decideSpecialAbility()){this.dispatch({type:"DISCARD_DRAWN_CARD",payload:{playerId:u.id,cardId:s.id}}),setTimeout(()=>this.endTurn(),500);return}if(s.rank===de.QUEEN){const c=vr.decidePeekTarget(this.gameState);c?this.dispatch({type:"PEEK_CARD",payload:{playerId:u.id,targetCardId:c}}):this.dispatch({type:"DISCARD_DRAWN_CARD",payload:{playerId:u.id,cardId:s.id}}),setTimeout(()=>this.endTurn(),500)}else if(s.rank===de.JACK){const c=vr.decideSwapTarget(this.gameState);c?this.dispatch({type:"SWAP_CARDS",payload:{playerId:u.id,playerCardIndex:c.playerCardIndex,targetPlayerId:c.targetPlayerId,targetCardIndex:c.targetCardIndex}}):this.dispatch({type:"DISCARD_DRAWN_CARD",payload:{playerId:u.id,cardId:s.id}}),setTimeout(()=>this.endTurn(),500)}else this.processBotTurn()}endTurn(){const u=this.getCurrentPlayer();u&&this.dispatch({type:"END_TURN",payload:{playerId:u.id}})}nextRound(){this.dispatch({type:"START_ROUND",payload:{}})}resetGame(){this.dispatch({type:"RESET_GAME",payload:{}})}validateGameState(){const u=[];this.gameState.players.length===0&&u.push("No players in game"),this.gameState.round.currentPlayerIndex>=this.gameState.players.length&&u.push("Invalid current player index");const s=this.gameState.deck.drawPile.length+this.gameState.deck.discardPile.length+this.gameState.players.reduce((c,p)=>c+p.cards.length,0);return s!==54&&u.push(`Total cards in game: ${s}, expected: 54`),u}getGameStateInfo(){const u=this.getCurrentPlayer(),s=jr(this.gameState);return{phase:this.gameState.round.phase,currentPlayer:u?{id:u.id,name:u.name,type:u.type}:null,turnNumber:this.gameState.round.turnNumber,round:this.gameState.match.currentRound,availableActions:s,deckSize:this.gameState.deck.drawPile.length,discardSize:this.gameState.deck.discardPile.length,stopCalled:this.gameState.round.stopCalled,remainingTurns:this.gameState.round.remainingTurns,validationErrors:this.validateGameState()}}forceProgressScoring(){this.gameState.round.phase===J.SCORING&&(this.gameState.match.winner?this.dispatch({type:"END_GAME",payload:{winnerId:this.gameState.match.winner}}):this.nextRound())}getCurrentPlayer(){return this.gameState.players[this.gameState.round.currentPlayerIndex]||null}}const p1=(l,u)=>new f1(l,u),h1=({children:l})=>{const[u,s]=Be.useReducer(kp,Bp),c=Be.useMemo(()=>{try{return p1(s,u)}catch(z){return console.error("Error creating GameFlowManager:",z),null}},[s]),p=Be.useCallback(()=>{if(c)try{c.updateGameState(u),c.processGameFlow()}catch(z){console.error("Error processing game flow:",z)}else console.warn("GameFlowManager is not available")},[c,u]);Be.useEffect(()=>{if(c){const z=setTimeout(p,100);return()=>clearTimeout(z)}},[u.round.phase,u.round.currentPlayerIndex,u.ui.selectedCard,p]),Be.useEffect(()=>{if(u.ui.turnTimer?.isActive){const z=setInterval(()=>{const X=Date.now()-u.ui.turnTimer.startTime,ee=Math.max(0,u.ui.turnTimer.duration-X);if(ee<=0){s({type:"TIMER_EXPIRED",payload:{}});const F=L();F&&s({type:"END_TURN",payload:{playerId:F.id}})}else s({type:"UPDATE_TURN_TIMER",payload:{remainingTime:ee}})},100);return()=>clearInterval(z)}},[u.ui.turnTimer?.isActive,u.ui.turnTimer?.startTime]);const g=(z,U)=>{s({type:"START_GAME",payload:{playerCount:z,playerNames:U}})},A=z=>{s(z)},v=()=>{const z=L();z&&(u.ui.turnTimer?.isActive&&s({type:"STOP_TURN_TIMER",payload:{}}),s({type:"END_TURN",payload:{playerId:z.id}}))},D=()=>{const z=L();z&&$e()&&(u.ui.turnTimer?.isActive&&s({type:"STOP_TURN_TIMER",payload:{}}),s({type:"CALL_STOP",payload:{playerId:z.id}}),setTimeout(()=>{s({type:"END_TURN",payload:{playerId:z.id}})},500))},y=()=>{const z=L();z&&Ce()&&s({type:"DRAW_FROM_DECK",payload:{playerId:z.id}})},T=()=>{const z=L();z&&Ie()&&s({type:"DRAW_FROM_DISCARD",payload:{playerId:z.id}})},B=z=>{const U=L(),X=u.ui.selectedCard;U&&X&&(s({type:"REPLACE_CARD",payload:{playerId:U.id,cardIndex:z,drawnCardId:X}}),U.type==="human"?s({type:"START_TURN_TIMER",payload:{duration:5e3}}):setTimeout(()=>{s({type:"END_TURN",payload:{playerId:U.id}})},500))},k=()=>{const z=L(),U=u.ui.selectedCard;z&&U&&(s({type:"DISCARD_DRAWN_CARD",payload:{playerId:z.id,cardId:U}}),setTimeout(()=>{s({type:"END_TURN",payload:{playerId:z.id}})},500))},H=z=>{const U=L();U&&s({type:"PEEK_CARD",payload:{playerId:U.id,targetCardId:z}})},q=(z,U,X)=>{const ee=L();ee&&s({type:"SWAP_CARDS",payload:{playerId:ee.id,playerCardIndex:z,targetPlayerId:U,targetCardIndex:X}})},te=(z,U)=>{const X=L();X&&s({type:"USE_SPECIAL_ABILITY",payload:{playerId:X.id,cardId:z,abilityType:U}})},pe=z=>{const U=L();U&&s({type:"SKIP_SPECIAL_ABILITY",payload:{playerId:U.id,cardId:z}})},fe=z=>{s({type:"SELECT_CARD",payload:{cardId:z}})},ce=()=>{s({type:"CLEAR_SELECTION",payload:{}})},W=(z,U)=>{s({type:"SHOW_MODAL",payload:{modalType:z,data:U}})},ae=()=>{s({type:"HIDE_MODAL",payload:{}})},G=()=>{c?c.processBotTurn():console.log("Bot automation temporarily disabled - GameFlowManager initialization issue")},L=()=>u.players[u.round.currentPlayerIndex]||null,K=z=>u.players.find(U=>U.id===z)||null,be=z=>u.cards[z]||null,Ce=()=>u.deck.drawPile.length>0&&u.round.phase===J.PLAYING,Ie=()=>u.deck.discardPile.length>0&&u.round.phase===J.PLAYING,$e=()=>L()&&!u.round.stopCalled&&u.round.phase===J.PLAYING,M={gameState:u,dispatch:s,startGame:g,makeMove:A,endTurn:v,callStop:D,drawFromDeck:y,drawFromDiscard:T,replaceCard:B,discardDrawnCard:k,peekCard:H,swapCards:q,useSpecialAbility:te,skipSpecialAbility:pe,selectCard:fe,clearSelection:ce,showModal:W,hideModal:ae,processBotTurn:G,getCurrentPlayer:L,getPlayerById:K,getCardById:be,canDrawFromDeck:Ce,canDrawFromDiscard:Ie,canCallStop:$e,isPlayerTurn:z=>L()?.id===z,getGameStatistics:()=>i1(u),getTurnAnalysis:()=>r1(u),getPlayerAvailableActions:()=>jr(u),isValidAction:(z,U)=>l1(u,z,U),forceEndTurn:()=>{s({type:"END_TURN",payload:{playerId:L()?.id||""}})},forceNextRound:()=>{s({type:"START_ROUND",payload:{}})},getGameFlowInfo:()=>({phase:u.round.phase,currentPlayer:L(),turnNumber:u.round.turnNumber,availableActions:jr(u),validationErrors:[]}),forceProgressScoring:()=>{s({type:"END_ROUND",payload:{}})}};return f.jsx(Yp.Provider,{value:M,children:l})};var dt=function(){return dt=Object.assign||function(u){for(var s,c=1,p=arguments.length;c<p;c++){s=arguments[c];for(var g in s)Object.prototype.hasOwnProperty.call(s,g)&&(u[g]=s[g])}return u},dt.apply(this,arguments)};function ti(l,u,s){if(s||arguments.length===2)for(var c=0,p=u.length,g;c<p;c++)(g||!(c in u))&&(g||(g=Array.prototype.slice.call(u,0,c)),g[c]=u[c]);return l.concat(g||Array.prototype.slice.call(u))}var Re="-ms-",Jl="-moz-",ye="-webkit-",Gp="comm",Yr="rule",Ds="decl",g1="@import",Hp="@keyframes",x1="@layer",qp=Math.abs,Rs=String.fromCharCode,xs=Object.assign;function m1(l,u){return Fe(l,0)^45?(((u<<2^Fe(l,0))<<2^Fe(l,1))<<2^Fe(l,2))<<2^Fe(l,3):0}function Lp(l){return l.trim()}function ca(l,u){return(l=u.exec(l))?l[0]:l}function le(l,u,s){return l.replace(u,s)}function Cr(l,u,s){return l.indexOf(u,s)}function Fe(l,u){return l.charCodeAt(u)|0}function Zn(l,u,s){return l.slice(u,s)}function Kt(l){return l.length}function Xp(l){return l.length}function $l(l,u){return u.push(l),l}function y1(l,u){return l.map(u).join("")}function Z0(l,u){return l.filter(function(s){return!ca(s,u)})}var Gr=1,Vn=1,Qp=0,Mt=0,Ge=0,$n="";function Hr(l,u,s,c,p,g,A,v){return{value:l,root:u,parent:s,type:c,props:p,children:g,line:Gr,column:Vn,length:A,return:"",siblings:v}}function Ma(l,u){return xs(Hr("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},u)}function Qn(l){for(;l.root;)l=Ma(l.root,{children:[l]});$l(l,l.siblings)}function b1(){return Ge}function v1(){return Ge=Mt>0?Fe($n,--Mt):0,Vn--,Ge===10&&(Vn=1,Gr--),Ge}function Yt(){return Ge=Mt<Qp?Fe($n,Mt++):0,Vn++,Ge===10&&(Vn=1,Gr++),Ge}function tn(){return Fe($n,Mt)}function Dr(){return Mt}function qr(l,u){return Zn($n,l,u)}function ms(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function S1(l){return Gr=Vn=1,Qp=Kt($n=l),Mt=0,[]}function w1(l){return $n="",l}function ss(l){return Lp(qr(Mt-1,ys(l===91?l+2:l===40?l+1:l)))}function E1(l){for(;(Ge=tn())&&Ge<33;)Yt();return ms(l)>2||ms(Ge)>3?"":" "}function A1(l,u){for(;--u&&Yt()&&!(Ge<48||Ge>102||Ge>57&&Ge<65||Ge>70&&Ge<97););return qr(l,Dr()+(u<6&&tn()==32&&Yt()==32))}function ys(l){for(;Yt();)switch(Ge){case l:return Mt;case 34:case 39:l!==34&&l!==39&&ys(Ge);break;case 40:l===41&&ys(l);break;case 92:Yt();break}return Mt}function T1(l,u){for(;Yt()&&l+Ge!==57;)if(l+Ge===84&&tn()===47)break;return"/*"+qr(u,Mt-1)+"*"+Rs(l===47?l:Yt())}function C1(l){for(;!ms(tn());)Yt();return qr(l,Mt)}function D1(l){return w1(Rr("",null,null,null,[""],l=S1(l),0,[0],l))}function Rr(l,u,s,c,p,g,A,v,D){for(var y=0,T=0,B=A,k=0,H=0,q=0,te=1,pe=1,fe=1,ce=0,W="",ae=p,G=g,L=c,K=W;pe;)switch(q=ce,ce=Yt()){case 40:if(q!=108&&Fe(K,B-1)==58){Cr(K+=le(ss(ce),"&","&\f"),"&\f",qp(y?v[y-1]:0))!=-1&&(fe=-1);break}case 34:case 39:case 91:K+=ss(ce);break;case 9:case 10:case 13:case 32:K+=E1(q);break;case 92:K+=A1(Dr()-1,7);continue;case 47:switch(tn()){case 42:case 47:$l(R1(T1(Yt(),Dr()),u,s,D),D);break;default:K+="/"}break;case 123*te:v[y++]=Kt(K)*fe;case 125*te:case 59:case 0:switch(ce){case 0:case 125:pe=0;case 59+T:fe==-1&&(K=le(K,/\f/g,"")),H>0&&Kt(K)-B&&$l(H>32?F0(K+";",c,s,B-1,D):F0(le(K," ","")+";",c,s,B-2,D),D);break;case 59:K+=";";default:if($l(L=V0(K,u,s,y,T,p,v,W,ae=[],G=[],B,g),g),ce===123)if(T===0)Rr(K,u,L,L,ae,g,B,v,G);else switch(k===99&&Fe(K,3)===110?100:k){case 100:case 108:case 109:case 115:Rr(l,L,L,c&&$l(V0(l,L,L,0,0,p,v,W,p,ae=[],B,G),G),p,G,B,v,c?ae:G);break;default:Rr(K,L,L,L,[""],G,0,v,G)}}y=T=H=0,te=fe=1,W=K="",B=A;break;case 58:B=1+Kt(K),H=q;default:if(te<1){if(ce==123)--te;else if(ce==125&&te++==0&&v1()==125)continue}switch(K+=Rs(ce),ce*te){case 38:fe=T>0?1:(K+="\f",-1);break;case 44:v[y++]=(Kt(K)-1)*fe,fe=1;break;case 64:tn()===45&&(K+=ss(Yt())),k=tn(),T=B=Kt(W=K+=C1(Dr())),ce++;break;case 45:q===45&&Kt(K)==2&&(te=0)}}return g}function V0(l,u,s,c,p,g,A,v,D,y,T,B){for(var k=p-1,H=p===0?g:[""],q=Xp(H),te=0,pe=0,fe=0;te<c;++te)for(var ce=0,W=Zn(l,k+1,k=qp(pe=A[te])),ae=l;ce<q;++ce)(ae=Lp(pe>0?H[ce]+" "+W:le(W,/&\f/g,H[ce])))&&(D[fe++]=ae);return Hr(l,u,s,p===0?Yr:v,D,y,T,B)}function R1(l,u,s,c){return Hr(l,u,s,Gp,Rs(b1()),Zn(l,2,-2),0,c)}function F0(l,u,s,c,p){return Hr(l,u,s,Ds,Zn(l,0,c),Zn(l,c+1,-1),c,p)}function Kp(l,u,s){switch(m1(l,u)){case 5103:return ye+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+l+l;case 4789:return Jl+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+l+Jl+l+Re+l+l;case 5936:switch(Fe(l,u+11)){case 114:return ye+l+Re+le(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return ye+l+Re+le(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return ye+l+Re+le(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return ye+l+Re+l+l;case 6165:return ye+l+Re+"flex-"+l+l;case 5187:return ye+l+le(l,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Re+"flex-$1$2")+l;case 5443:return ye+l+Re+"flex-item-"+le(l,/flex-|-self/g,"")+(ca(l,/flex-|baseline/)?"":Re+"grid-row-"+le(l,/flex-|-self/g,""))+l;case 4675:return ye+l+Re+"flex-line-pack"+le(l,/align-content|flex-|-self/g,"")+l;case 5548:return ye+l+Re+le(l,"shrink","negative")+l;case 5292:return ye+l+Re+le(l,"basis","preferred-size")+l;case 6060:return ye+"box-"+le(l,"-grow","")+ye+l+Re+le(l,"grow","positive")+l;case 4554:return ye+le(l,/([^-])(transform)/g,"$1"+ye+"$2")+l;case 6187:return le(le(le(l,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),l,"")+l;case 5495:case 3959:return le(l,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return le(le(l,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+l+l;case 4200:if(!ca(l,/flex-|baseline/))return Re+"grid-column-align"+Zn(l,u)+l;break;case 2592:case 3360:return Re+le(l,"template-","")+l;case 4384:case 3616:return s&&s.some(function(c,p){return u=p,ca(c.props,/grid-\w+-end/)})?~Cr(l+(s=s[u].value),"span",0)?l:Re+le(l,"-start","")+l+Re+"grid-row-span:"+(~Cr(s,"span",0)?ca(s,/\d+/):+ca(s,/\d+/)-+ca(l,/\d+/))+";":Re+le(l,"-start","")+l;case 4896:case 4128:return s&&s.some(function(c){return ca(c.props,/grid-\w+-start/)})?l:Re+le(le(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return le(l,/(.+)-inline(.+)/,ye+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kt(l)-1-u>6)switch(Fe(l,u+1)){case 109:if(Fe(l,u+4)!==45)break;case 102:return le(l,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+Jl+(Fe(l,u+3)==108?"$3":"$2-$3"))+l;case 115:return~Cr(l,"stretch",0)?Kp(le(l,"stretch","fill-available"),u,s)+l:l}break;case 5152:case 5920:return le(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,p,g,A,v,D,y){return Re+p+":"+g+y+(A?Re+p+"-span:"+(v?D:+D-+g)+y:"")+l});case 4949:if(Fe(l,u+6)===121)return le(l,":",":"+ye)+l;break;case 6444:switch(Fe(l,Fe(l,14)===45?18:11)){case 120:return le(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(Fe(l,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Re+"$2box$3")+l;case 100:return le(l,":",":"+Re)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return le(l,"scroll-","scroll-snap-")+l}return l}function Or(l,u){for(var s="",c=0;c<l.length;c++)s+=u(l[c],c,l,u)||"";return s}function z1(l,u,s,c){switch(l.type){case x1:if(l.children.length)break;case g1:case Ds:return l.return=l.return||l.value;case Gp:return"";case Hp:return l.return=l.value+"{"+Or(l.children,c)+"}";case Yr:if(!Kt(l.value=l.props.join(",")))return""}return Kt(s=Or(l.children,c))?l.return=l.value+"{"+s+"}":""}function _1(l){var u=Xp(l);return function(s,c,p,g){for(var A="",v=0;v<u;v++)A+=l[v](s,c,p,g)||"";return A}}function N1(l){return function(u){u.root||(u=u.return)&&l(u)}}function j1(l,u,s,c){if(l.length>-1&&!l.return)switch(l.type){case Ds:l.return=Kp(l.value,l.length,s);return;case Hp:return Or([Ma(l,{value:le(l.value,"@","@"+ye)})],c);case Yr:if(l.length)return y1(s=l.props,function(p){switch(ca(p,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Qn(Ma(l,{props:[le(p,/:(read-\w+)/,":"+Jl+"$1")]})),Qn(Ma(l,{props:[p]})),xs(l,{props:Z0(s,c)});break;case"::placeholder":Qn(Ma(l,{props:[le(p,/:(plac\w+)/,":"+ye+"input-$1")]})),Qn(Ma(l,{props:[le(p,/:(plac\w+)/,":"+Jl+"$1")]})),Qn(Ma(l,{props:[le(p,/:(plac\w+)/,Re+"input-$1")]})),Qn(Ma(l,{props:[p]})),xs(l,{props:Z0(s,c)});break}return""})}}var O1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},St={},Fn=typeof process<"u"&&St!==void 0&&(St.REACT_APP_SC_ATTR||St.SC_ATTR)||"data-styled",Zp="active",Vp="data-styled-version",Lr="6.1.19",zs=`/*!sc*/
`,Mr=typeof window<"u"&&typeof document<"u",M1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&St!==void 0&&St.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&St.REACT_APP_SC_DISABLE_SPEEDY!==""?St.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&St.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&St!==void 0&&St.SC_DISABLE_SPEEDY!==void 0&&St.SC_DISABLE_SPEEDY!==""&&St.SC_DISABLE_SPEEDY!=="false"&&St.SC_DISABLE_SPEEDY),Xr=Object.freeze([]),Pn=Object.freeze({});function U1(l,u,s){return s===void 0&&(s=Pn),l.theme!==s.theme&&l.theme||u||s.theme}var Fp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),B1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,k1=/(^-|-$)/g;function P0(l){return l.replace(B1,"-").replace(k1,"")}var Y1=/(a)(d)/gi,Sr=52,I0=function(l){return String.fromCharCode(l+(l>25?39:97))};function bs(l){var u,s="";for(u=Math.abs(l);u>Sr;u=u/Sr|0)s=I0(u%Sr)+s;return(I0(u%Sr)+s).replace(Y1,"$1-$2")}var os,Pp=5381,Kn=function(l,u){for(var s=u.length;s;)l=33*l^u.charCodeAt(--s);return l},Ip=function(l){return Kn(Pp,l)};function $p(l){return bs(Ip(l)>>>0)}function G1(l){return l.displayName||l.name||"Component"}function ds(l){return typeof l=="string"&&!0}var Jp=typeof Symbol=="function"&&Symbol.for,Wp=Jp?Symbol.for("react.memo"):60115,H1=Jp?Symbol.for("react.forward_ref"):60112,q1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},L1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},eh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},X1=((os={})[H1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},os[Wp]=eh,os);function $0(l){return("type"in(u=l)&&u.type.$$typeof)===Wp?eh:"$$typeof"in l?X1[l.$$typeof]:q1;var u}var Q1=Object.defineProperty,K1=Object.getOwnPropertyNames,J0=Object.getOwnPropertySymbols,Z1=Object.getOwnPropertyDescriptor,V1=Object.getPrototypeOf,W0=Object.prototype;function th(l,u,s){if(typeof u!="string"){if(W0){var c=V1(u);c&&c!==W0&&th(l,c,s)}var p=K1(u);J0&&(p=p.concat(J0(u)));for(var g=$0(l),A=$0(u),v=0;v<p.length;++v){var D=p[v];if(!(D in L1||s&&s[D]||A&&D in A||g&&D in g)){var y=Z1(u,D);try{Q1(l,D,y)}catch{}}}}return l}function In(l){return typeof l=="function"}function _s(l){return typeof l=="object"&&"styledComponentId"in l}function en(l,u){return l&&u?"".concat(l," ").concat(u):l||u||""}function vs(l,u){if(l.length===0)return"";for(var s=l[0],c=1;c<l.length;c++)s+=l[c];return s}function ai(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Ss(l,u,s){if(s===void 0&&(s=!1),!s&&!ai(l)&&!Array.isArray(l))return u;if(Array.isArray(u))for(var c=0;c<u.length;c++)l[c]=Ss(l[c],u[c]);else if(ai(u))for(var c in u)l[c]=Ss(l[c],u[c]);return l}function Ns(l,u){Object.defineProperty(l,"toString",{value:u})}function ni(l){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var F1=function(){function l(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return l.prototype.indexOfGroup=function(u){for(var s=0,c=0;c<u;c++)s+=this.groupSizes[c];return s},l.prototype.insertRules=function(u,s){if(u>=this.groupSizes.length){for(var c=this.groupSizes,p=c.length,g=p;u>=g;)if((g<<=1)<0)throw ni(16,"".concat(u));this.groupSizes=new Uint32Array(g),this.groupSizes.set(c),this.length=g;for(var A=p;A<g;A++)this.groupSizes[A]=0}for(var v=this.indexOfGroup(u+1),D=(A=0,s.length);A<D;A++)this.tag.insertRule(v,s[A])&&(this.groupSizes[u]++,v++)},l.prototype.clearGroup=function(u){if(u<this.length){var s=this.groupSizes[u],c=this.indexOfGroup(u),p=c+s;this.groupSizes[u]=0;for(var g=c;g<p;g++)this.tag.deleteRule(c)}},l.prototype.getGroup=function(u){var s="";if(u>=this.length||this.groupSizes[u]===0)return s;for(var c=this.groupSizes[u],p=this.indexOfGroup(u),g=p+c,A=p;A<g;A++)s+="".concat(this.tag.getRule(A)).concat(zs);return s},l}(),zr=new Map,Ur=new Map,_r=1,wr=function(l){if(zr.has(l))return zr.get(l);for(;Ur.has(_r);)_r++;var u=_r++;return zr.set(l,u),Ur.set(u,l),u},P1=function(l,u){_r=u+1,zr.set(l,u),Ur.set(u,l)},I1="style[".concat(Fn,"][").concat(Vp,'="').concat(Lr,'"]'),$1=new RegExp("^".concat(Fn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),J1=function(l,u,s){for(var c,p=s.split(","),g=0,A=p.length;g<A;g++)(c=p[g])&&l.registerName(u,c)},W1=function(l,u){for(var s,c=((s=u.textContent)!==null&&s!==void 0?s:"").split(zs),p=[],g=0,A=c.length;g<A;g++){var v=c[g].trim();if(v){var D=v.match($1);if(D){var y=0|parseInt(D[1],10),T=D[2];y!==0&&(P1(T,y),J1(l,T,D[3]),l.getTag().insertRules(y,p)),p.length=0}else p.push(v)}}},ep=function(l){for(var u=document.querySelectorAll(I1),s=0,c=u.length;s<c;s++){var p=u[s];p&&p.getAttribute(Fn)!==Zp&&(W1(l,p),p.parentNode&&p.parentNode.removeChild(p))}};function em(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ah=function(l){var u=document.head,s=l||u,c=document.createElement("style"),p=function(v){var D=Array.from(v.querySelectorAll("style[".concat(Fn,"]")));return D[D.length-1]}(s),g=p!==void 0?p.nextSibling:null;c.setAttribute(Fn,Zp),c.setAttribute(Vp,Lr);var A=em();return A&&c.setAttribute("nonce",A),s.insertBefore(c,g),c},tm=function(){function l(u){this.element=ah(u),this.element.appendChild(document.createTextNode("")),this.sheet=function(s){if(s.sheet)return s.sheet;for(var c=document.styleSheets,p=0,g=c.length;p<g;p++){var A=c[p];if(A.ownerNode===s)return A}throw ni(17)}(this.element),this.length=0}return l.prototype.insertRule=function(u,s){try{return this.sheet.insertRule(s,u),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},l.prototype.getRule=function(u){var s=this.sheet.cssRules[u];return s&&s.cssText?s.cssText:""},l}(),am=function(){function l(u){this.element=ah(u),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(u,s){if(u<=this.length&&u>=0){var c=document.createTextNode(s);return this.element.insertBefore(c,this.nodes[u]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},l.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},l}(),nm=function(){function l(u){this.rules=[],this.length=0}return l.prototype.insertRule=function(u,s){return u<=this.length&&(this.rules.splice(u,0,s),this.length++,!0)},l.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},l.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},l}(),tp=Mr,lm={isServer:!Mr,useCSSOMInjection:!M1},nh=function(){function l(u,s,c){u===void 0&&(u=Pn),s===void 0&&(s={});var p=this;this.options=dt(dt({},lm),u),this.gs=s,this.names=new Map(c),this.server=!!u.isServer,!this.server&&Mr&&tp&&(tp=!1,ep(this)),Ns(this,function(){return function(g){for(var A=g.getTag(),v=A.length,D="",y=function(B){var k=function(fe){return Ur.get(fe)}(B);if(k===void 0)return"continue";var H=g.names.get(k),q=A.getGroup(B);if(H===void 0||!H.size||q.length===0)return"continue";var te="".concat(Fn,".g").concat(B,'[id="').concat(k,'"]'),pe="";H!==void 0&&H.forEach(function(fe){fe.length>0&&(pe+="".concat(fe,","))}),D+="".concat(q).concat(te,'{content:"').concat(pe,'"}').concat(zs)},T=0;T<v;T++)y(T);return D}(p)})}return l.registerId=function(u){return wr(u)},l.prototype.rehydrate=function(){!this.server&&Mr&&ep(this)},l.prototype.reconstructWithOptions=function(u,s){return s===void 0&&(s=!0),new l(dt(dt({},this.options),u),this.gs,s&&this.names||void 0)},l.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(u=function(s){var c=s.useCSSOMInjection,p=s.target;return s.isServer?new nm(p):c?new tm(p):new am(p)}(this.options),new F1(u)));var u},l.prototype.hasNameForId=function(u,s){return this.names.has(u)&&this.names.get(u).has(s)},l.prototype.registerName=function(u,s){if(wr(u),this.names.has(u))this.names.get(u).add(s);else{var c=new Set;c.add(s),this.names.set(u,c)}},l.prototype.insertRules=function(u,s,c){this.registerName(u,s),this.getTag().insertRules(wr(u),c)},l.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},l.prototype.clearRules=function(u){this.getTag().clearGroup(wr(u)),this.clearNames(u)},l.prototype.clearTag=function(){this.tag=void 0},l}(),im=/&/g,rm=/^\s*\/\/.*$/gm;function lh(l,u){return l.map(function(s){return s.type==="rule"&&(s.value="".concat(u," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(u," ")),s.props=s.props.map(function(c){return"".concat(u," ").concat(c)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=lh(s.children,u)),s})}function um(l){var u,s,c,p=Pn,g=p.options,A=g===void 0?Pn:g,v=p.plugins,D=v===void 0?Xr:v,y=function(k,H,q){return q.startsWith(s)&&q.endsWith(s)&&q.replaceAll(s,"").length>0?".".concat(u):k},T=D.slice();T.push(function(k){k.type===Yr&&k.value.includes("&")&&(k.props[0]=k.props[0].replace(im,s).replace(c,y))}),A.prefix&&T.push(j1),T.push(z1);var B=function(k,H,q,te){H===void 0&&(H=""),q===void 0&&(q=""),te===void 0&&(te="&"),u=te,s=H,c=new RegExp("\\".concat(s,"\\b"),"g");var pe=k.replace(rm,""),fe=D1(q||H?"".concat(q," ").concat(H," { ").concat(pe," }"):pe);A.namespace&&(fe=lh(fe,A.namespace));var ce=[];return Or(fe,_1(T.concat(N1(function(W){return ce.push(W)})))),ce};return B.hash=D.length?D.reduce(function(k,H){return H.name||ni(15),Kn(k,H.name)},Pp).toString():"",B}var cm=new nh,ws=um(),ih=Wl.createContext({shouldForwardProp:void 0,styleSheet:cm,stylis:ws});ih.Consumer;Wl.createContext(void 0);function ap(){return Be.useContext(ih)}var rh=function(){function l(u,s){var c=this;this.inject=function(p,g){g===void 0&&(g=ws);var A=c.name+g.hash;p.hasNameForId(c.id,A)||p.insertRules(c.id,A,g(c.rules,A,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=s,Ns(this,function(){throw ni(12,String(c.name))})}return l.prototype.getName=function(u){return u===void 0&&(u=ws),this.name+u.hash},l}(),sm=function(l){return l>="A"&&l<="Z"};function np(l){for(var u="",s=0;s<l.length;s++){var c=l[s];if(s===1&&c==="-"&&l[0]==="-")return l;sm(c)?u+="-"+c.toLowerCase():u+=c}return u.startsWith("ms-")?"-"+u:u}var uh=function(l){return l==null||l===!1||l===""},ch=function(l){var u,s,c=[];for(var p in l){var g=l[p];l.hasOwnProperty(p)&&!uh(g)&&(Array.isArray(g)&&g.isCss||In(g)?c.push("".concat(np(p),":"),g,";"):ai(g)?c.push.apply(c,ti(ti(["".concat(p," {")],ch(g),!1),["}"],!1)):c.push("".concat(np(p),": ").concat((u=p,(s=g)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||u in O1||u.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return c};function an(l,u,s,c){if(uh(l))return[];if(_s(l))return[".".concat(l.styledComponentId)];if(In(l)){if(!In(g=l)||g.prototype&&g.prototype.isReactComponent||!u)return[l];var p=l(u);return an(p,u,s,c)}var g;return l instanceof rh?s?(l.inject(s,c),[l.getName(c)]):[l]:ai(l)?ch(l):Array.isArray(l)?Array.prototype.concat.apply(Xr,l.map(function(A){return an(A,u,s,c)})):[l.toString()]}function om(l){for(var u=0;u<l.length;u+=1){var s=l[u];if(In(s)&&!_s(s))return!1}return!0}var dm=Ip(Lr),fm=function(){function l(u,s,c){this.rules=u,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&om(u),this.componentId=s,this.baseHash=Kn(dm,s),this.baseStyle=c,nh.registerId(s)}return l.prototype.generateAndInjectStyles=function(u,s,c){var p=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,s,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))p=en(p,this.staticRulesId);else{var g=vs(an(this.rules,u,s,c)),A=bs(Kn(this.baseHash,g)>>>0);if(!s.hasNameForId(this.componentId,A)){var v=c(g,".".concat(A),void 0,this.componentId);s.insertRules(this.componentId,A,v)}p=en(p,A),this.staticRulesId=A}else{for(var D=Kn(this.baseHash,c.hash),y="",T=0;T<this.rules.length;T++){var B=this.rules[T];if(typeof B=="string")y+=B;else if(B){var k=vs(an(B,u,s,c));D=Kn(D,k+T),y+=k}}if(y){var H=bs(D>>>0);s.hasNameForId(this.componentId,H)||s.insertRules(this.componentId,H,c(y,".".concat(H),void 0,this.componentId)),p=en(p,H)}}return p},l}(),sh=Wl.createContext(void 0);sh.Consumer;var fs={};function pm(l,u,s){var c=_s(l),p=l,g=!ds(l),A=u.attrs,v=A===void 0?Xr:A,D=u.componentId,y=D===void 0?function(ae,G){var L=typeof ae!="string"?"sc":P0(ae);fs[L]=(fs[L]||0)+1;var K="".concat(L,"-").concat($p(Lr+L+fs[L]));return G?"".concat(G,"-").concat(K):K}(u.displayName,u.parentComponentId):D,T=u.displayName,B=T===void 0?function(ae){return ds(ae)?"styled.".concat(ae):"Styled(".concat(G1(ae),")")}(l):T,k=u.displayName&&u.componentId?"".concat(P0(u.displayName),"-").concat(u.componentId):u.componentId||y,H=c&&p.attrs?p.attrs.concat(v).filter(Boolean):v,q=u.shouldForwardProp;if(c&&p.shouldForwardProp){var te=p.shouldForwardProp;if(u.shouldForwardProp){var pe=u.shouldForwardProp;q=function(ae,G){return te(ae,G)&&pe(ae,G)}}else q=te}var fe=new fm(s,k,c?p.componentStyle:void 0);function ce(ae,G){return function(L,K,be){var Ce=L.attrs,Ie=L.componentStyle,$e=L.defaultProps,Oe=L.foldedComponentIds,wt=L.styledComponentId,Et=L.target,He=Wl.useContext(sh),_=ap(),Y=L.shouldForwardProp||_.shouldForwardProp,V=U1(K,He,$e)||Pn,re=function(ee,F,Xe){for(var me,tt=dt(dt({},F),{className:void 0,theme:Xe}),Ua=0;Ua<ee.length;Ua+=1){var Zt=In(me=ee[Ua])?me(tt):me;for(var At in Zt)tt[At]=At==="className"?en(tt[At],Zt[At]):At==="style"?dt(dt({},tt[At]),Zt[At]):Zt[At]}return F.className&&(tt.className=en(tt.className,F.className)),tt}(Ce,K,V),x=re.as||Et,M={};for(var z in re)re[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&re.theme===V||(z==="forwardedAs"?M.as=re.forwardedAs:Y&&!Y(z,x)||(M[z]=re[z]));var U=function(ee,F){var Xe=ap(),me=ee.generateAndInjectStyles(F,Xe.styleSheet,Xe.stylis);return me}(Ie,re),X=en(Oe,wt);return U&&(X+=" "+U),re.className&&(X+=" "+re.className),M[ds(x)&&!Fp.has(x)?"class":"className"]=X,be&&(M.ref=be),Be.createElement(x,M)}(W,ae,G)}ce.displayName=B;var W=Wl.forwardRef(ce);return W.attrs=H,W.componentStyle=fe,W.displayName=B,W.shouldForwardProp=q,W.foldedComponentIds=c?en(p.foldedComponentIds,p.styledComponentId):"",W.styledComponentId=k,W.target=c?p.target:l,Object.defineProperty(W,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=c?function(G){for(var L=[],K=1;K<arguments.length;K++)L[K-1]=arguments[K];for(var be=0,Ce=L;be<Ce.length;be++)Ss(G,Ce[be],!0);return G}({},p.defaultProps,ae):ae}}),Ns(W,function(){return".".concat(W.styledComponentId)}),g&&th(W,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),W}function lp(l,u){for(var s=[l[0]],c=0,p=u.length;c<p;c+=1)s.push(u[c],l[c+1]);return s}var ip=function(l){return Object.assign(l,{isCss:!0})};function oh(l){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];if(In(l)||ai(l))return ip(an(lp(Xr,ti([l],u,!0))));var c=l;return u.length===0&&c.length===1&&typeof c[0]=="string"?an(c):ip(an(lp(c,u)))}function Es(l,u,s){if(s===void 0&&(s=Pn),!u)throw ni(1,u);var c=function(p){for(var g=[],A=1;A<arguments.length;A++)g[A-1]=arguments[A];return l(u,s,oh.apply(void 0,ti([p],g,!1)))};return c.attrs=function(p){return Es(l,u,dt(dt({},s),{attrs:Array.prototype.concat(s.attrs,p).filter(Boolean)}))},c.withConfig=function(p){return Es(l,u,dt(dt({},s),p))},c}var dh=function(l){return Es(pm,l)},R=dh;Fp.forEach(function(l){R[l]=dh(l)});function js(l){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];var c=vs(oh.apply(void 0,ti([l],u,!1))),p=$p(c);return new rh(p,c)}const sa=()=>{const l=Be.useContext(Yp);if(!l)throw new Error("useGame must be used within a GameProvider");const{gameState:u,...s}=l,c=u.ui.isActionInProgress;return{gameState:u,actions:{gameState:u,...s},isLoading:c,error:null}},hm=R.div`
  position: relative;
  display: inline-block;
`,gm=R.div`
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
`,xm=({content:l,children:u,position:s="top",delay:c=500})=>{const[p,g]=Be.useState(!1),[A,v]=Be.useState(null),D=()=>{A&&clearTimeout(A);const T=setTimeout(()=>g(!0),c);v(T)},y=()=>{A&&(clearTimeout(A),v(null)),g(!1)};return f.jsxs(hm,{onMouseEnter:D,onMouseLeave:y,onFocus:D,onBlur:y,children:[u,f.jsx(gm,{position:s,visible:p,children:l})]})},mm=R.div`
  position: relative;
  aspect-ratio: 3/4;
  width: 100px;
  height: 133px;
  border-radius: 10px;
  border: 2px solid ${l=>l.shouldShowCard?"#FFD700":!l.showAsOpponent&&l.isKnownToPlayer?"#34D399":"#1E40AF"};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
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
`,ym=R.div`
  padding: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  position: relative;
  background: ${l=>{switch(l.suit){case"hearts":return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)";case"diamonds":return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)";case"clubs":return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)";case"spades":return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)";default:return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)"}}};
  border: 2px solid rgba(255, 215, 0, 0.3);
`,rp=R.div`
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
`,up=R.div`
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
`,bm=R.div`
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
`,vm=R.div`
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
`,Sm=R.div`
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
`,wm=R.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  
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
`,Em=R.div`
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
`,Am=R.div`
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
    padding: 8px 12px;
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
`,Tm=R.div`
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
`,Cm=R.div`
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
`,Dm=({playerCard:l,cardIndex:u,showAsOpponent:s,isCurrentPlayer:c,isHumanPlayer:p})=>{const{gameState:g,actions:A}=sa(),v=A.getCardById(l.cardId),D=g.ui.selectedCard,y=l.isRevealed||!s&&l.isKnownToPlayer&&g.round.phase===J.CARD_VIEWING||!s&&l.isKnownToPlayer&&g.ui.showingPeekCard===l.cardId,T=()=>{D&&c&&p&&A.replaceCard(u)},B=D&&c&&p,k=()=>v?v.suit==="hearts"||v.suit==="diamonds"?"#DC2626":"#1F2937":"#6B7280",H=()=>{if(!v?.suit)return"";switch(v.suit){case"hearts":return"♥";case"diamonds":return"♦";case"clubs":return"♣";case"spades":return"♠";default:return""}},q=()=>v?v.rank==="joker"?"JOK":v.rank==="ace"?"A":v.rank==="king"?"K":v.rank==="queen"?"Q":v.rank==="jack"?"J":v.rank:"",pe=g.round.phase===J.CARD_VIEWING?v?y?v.rank==="joker"?`Joker (${v.value} pts)`:`${q()} of ${v.suit} (${v.value} pts)`:s?"Opponent's hidden card":"Your hidden card":"Unknown card":"",fe=f.jsxs(mm,{isClickable:!!B,shouldShowCard:!!y,isRevealed:!!l.isRevealed,isKnownToPlayer:!!l.isKnownToPlayer,showAsOpponent:s,onClick:T,children:[y&&v?f.jsxs(ym,{suit:v.suit||"default","data-testid":"card-face",children:[f.jsxs("div",{style:{textAlign:"left"},"data-testid":"card-corner-tl",children:[f.jsx(rp,{color:k(),"data-testid":"card-rank-tl",children:q()}),v.suit&&f.jsx(up,{color:k(),"data-testid":"card-suit",children:H()})]}),f.jsxs(vm,{color:k(),"data-testid":"card-center",children:[v.rank==="joker"?f.jsx("div",{className:"joker",children:"🃏"}):f.jsx("div",{className:"large-suit",children:H()}),f.jsx(Sm,{"data-testid":"card-point-value",children:v.value})]}),f.jsxs(bm,{"data-testid":"card-corner-br",children:[f.jsx(rp,{color:k(),"data-testid":"card-rank-br",children:q()}),v.suit&&f.jsx(up,{color:k(),children:H()})]}),v.isSpecial&&f.jsx(Tm,{"data-testid":"special-card-indicator"})]}):f.jsx(wm,{"data-testid":"card-back",children:f.jsx("div",{className:"back-inner",children:f.jsxs(Em,{children:[f.jsx("div",{className:"main-diamond"}),f.jsx("div",{className:"corner-accent top-left"}),f.jsx("div",{className:"corner-accent top-right"}),f.jsx("div",{className:"corner-accent bottom-left"}),f.jsx("div",{className:"corner-accent bottom-right"})]})})}),B&&f.jsx(Am,{onClick:T,children:f.jsx("div",{className:"replace-text",children:"Click to Replace"})}),!s&&f.jsx(Cm,{position:u+1,"data-testid":"card-position"})]});return pe?f.jsx(xm,{content:pe,position:"top",delay:300,children:fe}):fe},Rm=R.div`
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
`,zm=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l=>l.showAsOpponent?"12px":"16px"};
  gap: 12px;
  
  @media (max-width: 768px) {
    margin-bottom: 12px;
    gap: 8px;
  }
`,_m=R.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`,Nm=R.h3`
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
`,cp=R.span`
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
`,jm=R.div`
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
`,Om=R.div`
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
`,Mm=R.div`
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
`,sp=({player:l,isCurrentPlayer:u,showAsOpponent:s})=>{const{gameState:c}=sa(),p=l.score>0?l.score:null,g=c.ui.isBotThinking&&u&&l.type==="bot";return f.jsxs(Rm,{isCurrentPlayer:u,showAsOpponent:s,children:[f.jsxs(zm,{showAsOpponent:s,children:[f.jsxs(_m,{children:[f.jsx(Nm,{showAsOpponent:s,children:l.name}),l.type==="bot"&&f.jsx(cp,{variant:"bot",children:"BOT"}),u&&f.jsx(cp,{variant:"turn",children:"TURN"})]}),f.jsxs(jm,{showAsOpponent:s,children:[p!==null&&f.jsxs("div",{className:"score",children:[f.jsx("span",{className:"label",children:"Score:"}),f.jsx("span",{className:"value",children:p})]}),f.jsxs("div",{className:"wins",children:["Round wins: ",l.roundWins]})]})]}),f.jsx(Om,{showAsOpponent:s,children:l.cards.map((A,v)=>f.jsx(Dm,{playerCard:A,cardIndex:v,playerId:l.id,showAsOpponent:s,isCurrentPlayer:u,isHumanPlayer:l.type==="human"},v))}),g&&f.jsx(Mm,{children:f.jsx("div",{className:"thinking",children:"Bot is thinking..."})})]})},Um=R.div`
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
`,Bm=R.div`
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
`,fh=js`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
`,km=js`
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
`,Ym=js`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`,Gm=R.div`
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
    animation: ${km} 3s infinite;
    opacity: 0.6;
  }
`,Hm=R(Bm)`
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
    animation: ${Ym} 2s infinite;
  `}
`,As=({action:l,visible:u,position:s="top",variant:c="primary",actionType:p})=>f.jsx(Um,{visible:u,position:s,variant:c,children:f.jsxs(Hm,{variant:c,actionType:p,children:[f.jsx(Gm,{variant:c,actionType:p}),l]})}),qm=R.div`
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
`,op=R.div`
  text-align: center;
  position: relative;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`,dp=R.div`
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
`,fp=R.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1E40AF 0%, #3730A3 100%);
  border-radius: 12px;
  transform: ${l=>`translate(${l.layer*4}px, ${l.layer*4}px)`};
  z-index: ${l=>-l.layer};
`,Lm=R.div`
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
`,pp=R.div`
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
`,Xm=R.div`
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
`,hp=R.div`
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
`,gp=R.div`
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
`,Qm=R.div`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  border-radius: 50%;
  border: 1px solid #FF8C00;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,Km=R.div`
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
`,Zm=R.div`
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
`,Vm=()=>{const{gameState:l,actions:u}=sa(),[s,c]=Be.useState(null),g=u.getCurrentPlayer()?.type==="human",A=!!l.ui.selectedCard,v=u.canDrawFromDeck()&&g&&!A,D=u.canDrawFromDiscard()&&g&&!A,y=l.deck.discardPile[l.deck.discardPile.length-1],T=y?u.getCardById(y):null,B=q=>q==="hearts"||q==="diamonds"?"#DC2626":"#1F2937",k=q=>{if(!q)return"";switch(q){case"hearts":return"♥";case"diamonds":return"♦";case"clubs":return"♣";case"spades":return"♠";default:return""}},H=q=>q?q==="joker"?"JOK":q==="ace"?"A":q==="king"?"K":q==="queen"?"Q":q==="jack"?"J":q:"";return f.jsxs(qm,{children:[f.jsxs(op,{children:[f.jsxs(dp,{canDraw:v,isEmpty:l.deck.drawPile.length===0,onClick:v?()=>u.drawFromDeck():void 0,onMouseEnter:()=>c("deck"),onMouseLeave:()=>c(null),children:[v&&f.jsx(As,{action:"Click to draw",visible:s==="deck",position:"top",variant:"primary"}),l.deck.drawPile.length>0&&f.jsxs(f.Fragment,{children:[f.jsx(fp,{layer:1}),f.jsx(fp,{layer:2})]}),f.jsxs(Lm,{children:[f.jsx(pp,{children:l.deck.drawPile.length>0?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"deck-label",children:"DECK"}),f.jsx("div",{className:"deck-count",children:l.deck.drawPile.length})]}):f.jsx("div",{className:"empty-label",children:"EMPTY"})}),l.deck.drawPile.length>0&&f.jsxs(f.Fragment,{children:[f.jsx(Km,{percentage:l.deck.drawPile.length/54*100}),f.jsxs(Zm,{cardsLeft:l.deck.drawPile.length,total:54,children:[Math.round(l.deck.drawPile.length/54*100),"%"]})]})]}),v&&f.jsx(hp,{color:"#10B981",children:"DRAW"})]}),f.jsx(gp,{children:"Draw Pile"})]}),f.jsxs(op,{children:[f.jsxs(dp,{canDraw:D,isEmpty:l.deck.discardPile.length===0,isDiscard:!0,onClick:D?()=>u.drawFromDiscard():void 0,onMouseEnter:()=>c("discard"),onMouseLeave:()=>c(null),children:[D&&f.jsx(As,{action:"Click to draw",visible:s==="discard",position:"top",variant:"info"}),l.deck.discardPile.length>0&&T?f.jsxs(Xm,{color:B(T.suit||"spades"),children:[f.jsxs("div",{style:{position:"absolute",top:"8px",left:"8px",textAlign:"left",lineHeight:"1"},children:[f.jsx("div",{className:"rank",children:H(T.rank)}),T.suit&&f.jsx("div",{className:"suit",children:k(T.suit)})]}),f.jsx("div",{className:"center",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:T.rank==="joker"?"🃏":k(T.suit||"spades")}),f.jsxs("div",{style:{position:"absolute",bottom:"8px",right:"8px",transform:"rotate(180deg)",textAlign:"right",lineHeight:"1"},children:[f.jsx("div",{className:"rank",children:H(T.rank)}),T.suit&&f.jsx("div",{className:"suit",children:k(T.suit)})]}),T.isSpecial&&f.jsx(Qm,{})]}):f.jsx(pp,{children:f.jsxs("div",{className:"empty-label",children:[f.jsx("div",{children:"DISCARD"}),f.jsx("div",{children:"PILE"})]})}),D&&f.jsx(hp,{color:"#8B5CF6",children:"DRAW"})]}),f.jsxs(gp,{children:["Discard (",l.deck.discardPile.length,")"]})]})]})},Fm=R.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,xp=R.div`
  display: flex;
  flex-direction: column;
`,mp=R.label`
  font-size: 14px;
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 8px;
`,Pm=R.select`
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
`,Im=R.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`,$m=R.input`
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
`,ps=R.button`
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
`,Jm=R.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`,hs=R.button`
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
`,Wm=R.div`
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
`,ey=R.div`
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
`,yp=()=>{const{gameState:l,actions:u}=sa(),[s,c]=Be.useState(2),[p,g]=Be.useState(["You","Bot 1","Bot 2","Bot 3"]),v=u.getCurrentPlayer()?.type==="human",D=!!l.ui.selectedCard,y=u.canCallStop()&&v;return l.round.phase===J.SETUP?f.jsxs(Fm,{children:[f.jsxs(xp,{children:[f.jsx(mp,{children:"Number of Players"}),f.jsxs(Pm,{value:s,onChange:T=>c(Number(T.target.value)),children:[f.jsx("option",{value:2,children:"2 Players"}),f.jsx("option",{value:3,children:"3 Players"}),f.jsx("option",{value:4,children:"4 Players"})]})]}),f.jsxs(xp,{children:[f.jsx(mp,{children:"Player Names"}),f.jsx(Im,{children:Array.from({length:s},(T,B)=>f.jsx($m,{type:"text",value:p[B],onChange:k=>{const H=[...p];H[B]=k.target.value,g(H)},placeholder:B===0?"Your name":`Bot ${B}`},B))})]}),f.jsx(ps,{onClick:()=>u.startGame(s,p.slice(0,s)),children:"🎮 Start Game 🎮"})]}):l.round.phase===J.CARD_VIEWING?f.jsx(Wm,{children:f.jsxs("div",{className:"panel",children:[f.jsx("h3",{className:"title",children:"Memorize Your Cards!"}),f.jsx("p",{className:"description",children:"Look at your face-up cards and remember them. They will be hidden once the game starts."}),f.jsx(ps,{onClick:()=>u.makeMove({type:"START_PLAYING",payload:{}}),children:"🚀 Start Playing"})]})}):l.round.phase===J.PLAYING?f.jsxs(Jm,{children:[D&&v&&f.jsx(hs,{variant:"discard",onClick:()=>u.discardDrawnCard(),children:"🗑️ Discard Card"}),y&&f.jsx(hs,{variant:"stop",onClick:()=>u.callStop(),children:"✋ Call Stop"}),v&&!D&&f.jsx(hs,{variant:"dev",onClick:()=>u.forceEndTurn(),children:l.ui.turnTimer?.isActive?`⏱️ End Turn (${Math.ceil(l.ui.turnTimer.remainingTime/1e3)}s)`:"⏭️ End Turn"}),!1]}):l.round.phase===J.SCORING?null:l.round.phase===J.FINISHED?f.jsxs(ey,{children:[f.jsxs("div",{className:"panel",children:[f.jsx("h2",{className:"title",children:"🎉 Game Complete! 🎉"}),l.match.winner&&f.jsxs("div",{className:"winner",children:[l.players.find(T=>T.id===l.match.winner)?.name," wins the match!"]}),f.jsxs("div",{className:"standings",children:[f.jsx("h4",{className:"standings-title",children:"Final Standings:"}),l.players.sort((T,B)=>B.roundWins-T.roundWins).map((T,B)=>f.jsxs("div",{className:"player-row",children:[f.jsxs("span",{children:[B+1,". ",T.name]}),f.jsxs("span",{children:[T.roundWins," round",T.roundWins!==1?"s":""]})]},T.id))]})]}),f.jsx(ps,{onClick:()=>window.location.reload(),children:"🔄 New Game"})]}):null},ty=R.div`
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
`,ay=R.div`
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
`,Er=R.div`
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
`,Ar=R.div`
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
`,bp=R.div`
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
`,ny=R.div`
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
`,ly=R.span`
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
`,iy=R.div`
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
`,ry=R.div`
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
`,uy=R.div`
  font-size: 14px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
  }
`,cy=R.div`
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
`,sy=R.div`
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
`,vp=R.div`
  grid-column: span 2;
  
  @media (min-width: 768px) {
    grid-column: span 4;
  }
`,Sp=R.div`
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
`,wp=R.div`
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
`,Ep=R.div`
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
`,Ap=R.div`
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
`,oy=()=>{const{gameState:l,actions:u}=sa(),s=u.getCurrentPlayer(),c=p=>{switch(p){case J.SETUP:return"Game Setup";case J.CARD_VIEWING:return"Card Viewing";case J.PLAYING:return"Playing";case J.SCORING:return"Round Complete";case J.FINISHED:return"Game Finished";default:return p}};return f.jsx(ty,{children:f.jsxs(ay,{children:[f.jsxs(Er,{children:[f.jsx(Ar,{children:"Phase"}),f.jsx(bp,{children:c(l.round.phase)})]}),f.jsxs(Er,{children:[f.jsx(Ar,{children:"Round"}),f.jsx(bp,{children:l.match.currentRound})]}),(l.round.phase===J.PLAYING||l.round.phase===J.CARD_VIEWING)&&s&&f.jsxs(Er,{children:[f.jsx(Ar,{children:"Current Player"}),f.jsxs(ny,{children:[f.jsx("span",{children:s.name}),s.type==="bot"&&f.jsx(ly,{children:"BOT"})]})]}),l.round.phase===J.PLAYING&&f.jsxs(Er,{children:[f.jsx(Ar,{children:"Turn"}),f.jsx(sy,{isUrgent:l.round.stopCalled&&l.round.remainingTurns<=2,children:f.jsx("span",{className:"turn-number",children:l.round.turnNumber})}),l.round.stopCalled&&f.jsx(cy,{progress:(l.players.length-l.round.remainingTurns)/l.players.length*100})]}),l.round.stopCalled&&f.jsxs(iy,{children:[f.jsx(ry,{children:"STOP CALLED!"}),f.jsxs(uy,{children:[l.round.remainingTurns," turn",l.round.remainingTurns!==1?"s":""," remaining"]})]}),l.round.phase===J.PLAYING&&f.jsxs(vp,{children:[f.jsx(Sp,{children:"Deck Progress"}),f.jsx(wp,{children:f.jsx(Ep,{progress:(54-l.deck.drawPile.length)/54*100})}),f.jsxs(Ap,{children:[l.deck.drawPile.length," cards remaining • Turn ",l.round.turnNumber]})]}),l.match.roundsToWin>1&&f.jsxs(vp,{children:[f.jsx(Sp,{children:"Match Progress"}),f.jsx(wp,{children:f.jsx(Ep,{progress:l.match.currentRound/l.match.roundsToWin*100})}),f.jsxs(Ap,{children:["Round ",l.match.currentRound," of ",l.match.roundsToWin]})]})]})})},dy=R.div`
  text-align: center;
  position: relative;
`,fy=R.div`
  margin-bottom: 16px;
`,py=R.div`
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
`,hy=R.div`
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
`,gy=R.div`
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
`,Tp=R.div`
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
`,Cp=R.div`
  font-size: 20px;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`,xy=R.div`
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,my=R.div`
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
`,yy=R.div`
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
`,by=R.div`
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
`,vy=R.div`
  color: white;
  text-align: center;
`,Sy=R.div`
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
`,wy=()=>{const{gameState:l,actions:u}=sa(),s=l.ui.selectedCard,c=s?u.getCardById(s):null;if(!c)return null;const p=()=>c.suit==="hearts"||c.suit==="diamonds"?"#DC2626":"#1F2937",g=()=>{switch(c.suit){case"hearts":return"♥";case"diamonds":return"♦";case"clubs":return"♣";case"spades":return"♠";default:return""}},A=()=>c.rank==="joker"?"JOK":c.rank==="ace"?"A":c.rank==="king"?"K":c.rank==="queen"?"Q":c.rank==="jack"?"J":c.rank?.toUpperCase()||"";return f.jsxs(dy,{children:[f.jsx(fy,{children:f.jsxs(py,{children:[f.jsxs(hy,{color:p(),children:[f.jsxs(gy,{children:[f.jsx(Tp,{children:A()}),c.suit&&f.jsx(Cp,{children:g()})]}),f.jsx(xy,{children:f.jsxs(my,{children:[c.value," pts"]})}),f.jsxs(yy,{children:[f.jsx(Tp,{children:A()}),c.suit&&f.jsx(Cp,{children:g()})]})]}),c.isSpecial&&f.jsx(by,{})]})}),f.jsx(vy,{children:f.jsx(Sy,{children:"Drawn Card"})})]})},Ey=R.div`
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
`,Ay=R.div`
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
`,Ty=R.div`
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
`,Cy=R.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  z-index: 10;
`,Dy=R.h2`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  margin: 0 0 8px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Ry=R.p`
  font-size: 14px;
  opacity: 0.95;
  margin: 0;
  font-family: 'Inter', sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,zy=R.button`
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
`,_y=R.div`
  padding: 32px;
  color: white;
  
  @media (max-width: 768px) {
    padding: 24px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
  }
`,Ny=R.div`
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
`,jy=R.h3`
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  font-size: 18px;
  color: #FFD700;
  margin: 0 0 8px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Oy=R.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Dp=R.div`
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`,Rp=R.h3`
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
`,Tr=R.div`
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,zp=R.h4`
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
`,My=R.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  
  @media (max-width: 768px) {
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`,Uy=R.div`
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
`,By=R.div`
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
`,ky=R.div`
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
`,_p=R.h4`
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
`,Np=R.span`
  color: #10B981;
  font-weight: bold;
`,Yy=R.div`
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    padding: 12px;
    border-radius: 10px;
  }
`,Gy=R.h5`
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
`,Hy=R.div`
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
`,qy=R.button`
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
`,Ly=R.button`
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
`,Xy=({card:l,abilityType:u,onClose:s,onUse:c,onSkip:p})=>{const{gameState:g,actions:A}=sa(),[v,D]=Be.useState(null),[y,T]=Be.useState({playerCardIndex:null,targetPlayerId:null,targetCardIndex:null}),[B,k]=Be.useState(null),H=A.getCurrentPlayer(),q=g.players.filter(G=>G.id!==H?.id),te=()=>{switch(u){case"peek":return"Look at any card on the table (yours or an opponent's)";case"swap":return"Swap one of your cards with an opponent's card";default:return""}},pe=G=>{D(G)},fe=(G,L,K)=>{T(G==="player"?be=>({...be,playerCardIndex:K}):be=>({...be,targetPlayerId:L,targetCardIndex:K}))},ce=()=>u==="peek"?v!==null:u==="swap"?y.playerCardIndex!==null&&y.targetPlayerId!==null&&y.targetCardIndex!==null:!1,W=()=>{u==="peek"&&v?c({targetCardId:v}):u==="swap"&&ce()&&c({playerCardIndex:y.playerCardIndex,targetPlayerId:y.targetPlayerId,targetCardIndex:y.targetCardIndex}),s()},ae=(G,L,K)=>f.jsx(My,{children:G.cards.map((be,Ce)=>{const Ie=K==="peek"&&v===be.cardId||K==="player"&&y.playerCardIndex===Ce||K==="target"&&y.targetPlayerId===G.id&&y.targetCardIndex===Ce,$e=`${G.id}-${Ce}`,Oe=B===$e,wt=()=>u==="peek"?Ie?"Selected to peek":"Click to peek":u==="swap"?L?Ie?"Your card selected":"Click to select your card":Ie?"Target card selected":"Click to select target":"Click to select",Et=()=>u==="peek"?"info":u==="swap"&&L?"primary":u==="swap"&&!L?"success":"primary";return f.jsxs(Uy,{isSelected:Ie,onMouseEnter:()=>k($e),onMouseLeave:()=>k(null),onClick:()=>{u==="peek"?pe(be.cardId):u==="swap"&&(L?fe("player",void 0,Ce):fe("target",G.id,Ce))},children:[f.jsx(As,{action:wt(),visible:Oe&&!Ie,position:"top",variant:Et()}),f.jsx(By,{children:f.jsxs(ky,{isKnown:!1,children:["Card ",Ce+1]})})]},Ce)})});return f.jsx(Ey,{children:f.jsxs(Ay,{children:[f.jsx(Ty,{abilityType:u,children:f.jsxs(Cy,{children:[f.jsxs("div",{children:[f.jsxs(Dy,{children:["✨ Special Ability: ",u==="peek"?"Peek":"Swap"]}),f.jsx(Ry,{children:te()})]}),f.jsx(zy,{onClick:s,children:"×"})]})}),f.jsxs(_y,{children:[f.jsxs(Ny,{children:[f.jsxs(jy,{children:["You drew: ",l.rank==="joker"?"joker":`${l.rank} of ${l.suit}`]}),f.jsx(Oy,{children:"This card has a special ability. Choose to use it or skip it."})]}),u==="peek"&&f.jsxs(Dp,{children:[f.jsx(Rp,{children:"Choose a card to peek at:"}),H&&f.jsxs(Tr,{children:[f.jsx(zp,{children:"Your Cards:"}),ae(H,!0,"peek")]}),q.map(G=>f.jsxs(Tr,{children:[f.jsxs(zp,{children:[G.name,"'s Cards:"]}),ae(G,!1,"peek")]},G.id))]}),u==="swap"&&f.jsxs(Dp,{children:[f.jsx(Rp,{children:"Choose cards to swap:"}),H&&f.jsxs(Tr,{children:[f.jsxs(_p,{children:["Step 1: Select one of your cards",y.playerCardIndex!==null&&f.jsxs(Np,{children:["✓ Card ",y.playerCardIndex+1," selected"]})]}),ae(H,!0,"player")]}),f.jsxs(Tr,{children:[f.jsxs(_p,{children:["Step 2: Select an opponent's card to swap with",y.targetPlayerId&&y.targetCardIndex!==null&&f.jsxs(Np,{children:["✓ ",q.find(G=>G.id===y.targetPlayerId)?.name,"'s card ",y.targetCardIndex+1," selected"]})]}),q.map(G=>f.jsxs(Yy,{children:[f.jsxs(Gy,{children:[G.name,":"]}),ae(G,!1,"target")]},G.id))]})]})]}),f.jsxs(Hy,{children:[f.jsx(qy,{onClick:()=>{p(),s()},children:"Skip Ability"}),f.jsx(Ly,{onClick:W,disabled:!ce(),children:"Use Ability"})]})]})})},Qy=R.div`
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
`,Ky=R.div`
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
`,Zy=R.div`
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
`,Vy=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
`,Fy=R.h2`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`,Py=R.button`
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
`,Iy=R.div`
  padding: 32px;
  color: white;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 24px;
  }
`,$y=R.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,Jy=R.div`
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
`,jp=R.div`
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
`,Wy=R.div`
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
`,eb=R.div`
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
`,tb=R.div`
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`,ab=R.h3`
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
`,nb=R.p`
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
`,lb=R.p`
  color: #FFD700;
  font-weight: bold;
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,ib=R.div`
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
`,rb=R.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%);
  padding: 20px 32px;
  border-radius: 0 0 17px 17px;
  border-top: 2px solid rgba(52, 211, 153, 0.2);
  
  @media (max-width: 768px) {
    padding: 16px 24px;
    border-radius: 0 0 13px 13px;
  }
`,ub=R.button`
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
`,cb=({card:l,onClose:u})=>{const s=()=>l.suit==="hearts"||l.suit==="diamonds"?"#DC2626":"#1F2937",c=()=>{if(!l.suit)return"";switch(l.suit){case"hearts":return"♥";case"diamonds":return"♦";case"clubs":return"♣";case"spades":return"♠";default:return""}},p=()=>l.rank==="joker"?"JOK":l.rank==="ace"?"A":l.rank==="king"?"K":l.rank==="queen"?"Q":l.rank==="jack"?"J":l.rank;return f.jsx(Qy,{children:f.jsxs(Ky,{children:[f.jsx(Zy,{children:f.jsxs(Vy,{children:[f.jsx(Fy,{children:"👀 Peek Result"}),f.jsx(Py,{onClick:u,children:"×"})]})}),f.jsxs(Iy,{children:[f.jsx($y,{children:f.jsxs(Jy,{suit:l.suit||"default",children:[f.jsxs(jp,{color:s(),children:[f.jsx("div",{className:"rank",children:p()}),l.suit&&f.jsx("div",{className:"suit",children:c()})]}),f.jsx(Wy,{children:f.jsxs("div",{className:"points-badge",children:[l.value," pts"]})}),f.jsxs(jp,{color:s(),rotated:!0,children:[f.jsx("div",{className:"rank",children:p()}),l.suit&&f.jsx("div",{className:"suit",children:c()})]}),l.isSpecial&&f.jsx(eb,{})]})}),f.jsxs(tb,{children:[f.jsx(ab,{children:l.rank==="joker"?"Joker":`${p()} of ${l.suit}`}),f.jsxs(nb,{children:["Worth ",f.jsxs("span",{className:"points-value",children:[l.value," points"]})]}),l.isSpecial&&f.jsx(lb,{children:"✨ Special Card"})]}),f.jsx(ib,{children:f.jsx("p",{children:"💡 Remember this card for your strategy!"})})]}),f.jsx(rb,{children:f.jsx(ub,{onClick:u,children:"Got it!"})})]})})},sb=({onContinue:l})=>{const{gameState:u}=sa(),s=Be.useRef(null);Be.useEffect(()=>{const v=D=>{D.key!=="Escape"&&D.key==="Enter"&&l()};return document.addEventListener("keydown",v),s.current&&s.current.focus(),()=>document.removeEventListener("keydown",v)},[l]);const c=u.players.map(v=>({...v,roundScore:v.score})).sort((v,D)=>v.roundScore-D.roundScore),p=c[0],g=u.match.winner!==null,A=g?u.players.find(v=>v.id===u.match.winner):null;return f.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-2 sm:p-4 overflow-y-auto",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:f.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-lg w-full my-2 sm:my-4 min-h-fit max-h-[calc(100vh-1rem)] sm:max-h-[calc(100vh-2rem)] overflow-y-auto",children:[f.jsxs("div",{className:`
          text-white p-6 rounded-t-lg
          ${g?"bg-gradient-to-r from-yellow-500 to-orange-500":"bg-gradient-to-r from-blue-500 to-purple-500"}
        `,children:[f.jsx("h2",{id:"modal-title",className:"text-2xl font-bold text-center",children:g?"🎉 Match Complete! 🎉":`Round ${u.match.currentRound} Results`}),g&&A&&f.jsxs("p",{className:"text-center text-lg mt-2",children:[A.name," wins the match!"]})]}),f.jsxs("div",{className:"p-6",children:[!g&&f.jsxs("div",{className:"text-center mb-6",children:[f.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-yellow-100 border-4 border-yellow-400 rounded-full mb-3",children:f.jsx("span",{className:"text-2xl",children:"👑"})}),f.jsxs("h3",{className:"text-xl font-bold text-gray-800",children:[p.name," wins Round ",u.match.currentRound,"!"]}),f.jsxs("p",{className:"text-gray-600",children:["With ",p.roundScore," points"]})]}),f.jsxs("div",{className:"space-y-3",children:[f.jsx("h4",{className:"font-semibold text-gray-800 border-b border-gray-200 pb-2",children:g?"Final Standings":"Round Scores"}),c.map((v,D)=>f.jsxs("div",{className:`
                  flex items-center justify-between p-3 rounded-lg
                  ${D===0&&!g?"bg-yellow-50 border border-yellow-200":"bg-gray-50"}
                `,children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                    ${D===0?"bg-yellow-500 text-white":"bg-gray-400 text-white"}
                  `,children:D+1}),f.jsxs("div",{children:[f.jsxs("div",{className:"font-semibold text-gray-800",children:[v.name,v.type==="bot"&&f.jsx("span",{className:"ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",children:"BOT"})]}),g&&f.jsxs("div",{className:"text-sm text-gray-600",children:[v.roundWins," round",v.roundWins!==1?"s":""," won"]})]})]}),f.jsxs("div",{className:"text-right",children:[f.jsx("div",{className:"font-bold text-lg",children:g?`${v.roundWins} wins`:`${v.roundScore} pts`}),!g&&D===0&&f.jsx("div",{className:"text-xs text-yellow-600 font-semibold",children:"Round Winner!"})]})]},v.id))]}),!g&&f.jsxs("div",{className:"mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4",children:[f.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"Match Progress"}),f.jsx("div",{className:"space-y-2",children:u.players.map(v=>f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-sm text-blue-700",children:v.name}),f.jsxs("div",{className:"flex items-center gap-1",children:[Array.from({length:u.match.roundsToWin},(D,y)=>f.jsx("div",{className:`
                            w-3 h-3 rounded-full
                            ${y<v.roundWins?"bg-blue-500":"bg-gray-200"}
                          `},y)),f.jsxs("span",{className:"ml-2 text-sm text-blue-700",children:[v.roundWins,"/",u.match.roundsToWin]})]})]},v.id))})]}),f.jsx("div",{className:"mt-4 text-center",children:f.jsxs("div",{className:"grid grid-cols-3 gap-4 text-sm text-gray-600",children:[f.jsxs("div",{children:[f.jsx("div",{className:"font-semibold",children:"Round"}),f.jsx("div",{children:u.match.currentRound})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-semibold",children:"Total Turns"}),f.jsx("div",{children:u.round.turnNumber})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-semibold",children:"Cards Left"}),f.jsx("div",{children:u.deck.drawPile.length})]})]})})]}),f.jsx("div",{className:"bg-gray-50 px-6 py-4 rounded-b-lg",children:f.jsx("button",{ref:s,onClick:l,className:`
              w-full px-6 py-3 rounded font-semibold transition-colors focus:outline-none focus:ring-4 focus:ring-opacity-50
              ${g?"bg-green-600 text-white hover:bg-green-700 focus:ring-green-300":"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300"}
            `,"aria-label":g?"Start a new game":"Continue to the next round",children:g?"New Game":"Continue to Next Round"})})]})})},ob=R.div`
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
`,db=R.div`
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
`,fb=R.div`
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
`,pb=R.div`
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
`,hb=R.h1`
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
`,gb=R.div`
  border-top: 4px solid #ffeb3b;
  width: 160px;
  margin: 0 auto 24px;
  opacity: 0.9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`,xb=R.div`
  background: linear-gradient(135deg, #00bcd4 0%, #2196f3 50%, #9c27b0 100%);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 450px;
  margin: 0 auto;
  border: 4px solid #e91e63;
  backdrop-filter: blur(8px);
  overflow: visible;
`,mb=R.h2`
  font-size: 2rem;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 16px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`,yb=R.p`
  color: #ffffff;
  margin-bottom: 24px;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,bb=R.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`,vb=R.div`
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
`,Sb=R.div`
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
`,wb=R.div`
  display: flex;
  justify-content: center;
`,Eb=R.div`
  display: flex;
  justify-content: center;
`,Ab=R.div`
  text-align: center;
  margin-top: 16px;
  
  @media (max-width: 768px) {
    margin-top: 12px;
  }
  
  @media (max-width: 480px) {
    margin-top: 8px;
  }
`,Tb=()=>{const{gameState:l,actions:u}=sa(),s=l.ui.selectedCard,c=s?u.getCardById(s):null,p=c?.isSpecial&&l.ui.currentModal==="special-ability",g=l.ui.currentModal==="peek-result"&&l.ui.showingPeekCard,A=g?u.getCardById(l.ui.showingPeekCard):null,v=l.round.phase===J.SCORING,D=T=>{c&&(c.rank==="queen"?u.peekCard(T.targetCardId):c.rank==="jack"&&u.swapCards(T.playerCardIndex,T.targetPlayerId,T.targetCardIndex))},y=()=>{c&&u.skipSpecialAbility(c.id)};return f.jsx(ob,{children:f.jsxs(db,{children:[f.jsx(fb,{children:f.jsxs(pb,{children:[f.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[f.jsx(hb,{isPlaying:l.round.phase!==J.SETUP,children:"Alzheimer's Card Game"}),f.jsx(gb,{})]}),l.round.phase===J.SETUP&&f.jsx("div",{style:{textAlign:"center"},children:f.jsxs(xb,{children:[f.jsx(mb,{children:"Welcome to the Table!"}),f.jsx(yb,{children:"Ready to test your memory? Start a new game to begin playing."}),f.jsx(yp,{})]})}),(l.round.phase===J.CARD_VIEWING||l.round.phase===J.PLAYING||l.round.phase===J.SCORING||l.round.phase===J.FINISHED)&&f.jsxs(bb,{children:[l.players.length>1&&f.jsx(vb,{children:l.players.slice(1).map((T,B)=>f.jsx(sp,{player:T,isCurrentPlayer:l.round.currentPlayerIndex===B+1,showAsOpponent:!0},T.id))}),f.jsxs(Sb,{children:[f.jsx(Vm,{}),f.jsx(wy,{})]}),l.players.length>0&&f.jsx(wb,{children:f.jsx(sp,{player:l.players[0],isCurrentPlayer:l.round.currentPlayerIndex===0,showAsOpponent:!1})}),f.jsx(Eb,{children:f.jsx(yp,{})}),f.jsx(Ab,{children:f.jsx(oy,{})})]})]})}),p&&c&&f.jsx(Xy,{card:c,abilityType:c.rank==="queen"?"peek":"swap",onClose:()=>u.hideModal(),onUse:D,onSkip:y}),g&&A&&f.jsx(cb,{card:A,onClose:()=>{u.hideModal(),l.ui.showingPeekCard&&u.makeMove({type:"HIDE_PEEK_RESULT",payload:{}})}}),v&&f.jsx(sb,{onContinue:()=>u.forceProgressScoring()})]})})};function Cb(){return f.jsx(h1,{children:f.jsx(Tb,{})})}Kx.createRoot(document.getElementById("root")).render(f.jsx(Be.StrictMode,{children:f.jsx(Cb,{})}));
