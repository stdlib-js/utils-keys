// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).objectKeys=e()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return r&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,e){return null!=t&&i.call(t,e)}var f="function"==typeof Symbol?Symbol.toStringTag:"";var c,l=n()?function(t){var e,r,n;if(null==t)return o.call(t);r=t[f],e=u(t,f);try{t[f]=void 0}catch(e){return o.call(t)}return n=o.call(t),e?t[f]=r:delete t[f],n}:function(t){return o.call(t)};function a(t){return"[object Arguments]"===l(t)}c=function(){return a(arguments)}();var p=c,s="function"==typeof Object.defineProperty?Object.defineProperty:null;var y,b=Object.defineProperty,v=Object.prototype,g=v.toString,d=v.__defineGetter__,h=v.__defineSetter__,m=v.__lookupGetter__,j=v.__lookupSetter__;y=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?b:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===g.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===g.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(m.call(t,e)||j.call(t,e)?(n=t.__proto__,t.__proto__=v,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&d&&d.call(t,e,r.get),u&&h&&h.call(t,e,r.set),t};var w=y;function _(t,e,r){w(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function O(t){return"string"==typeof t}var S=String.prototype.valueOf;var E=n();function I(t){return"object"==typeof t&&(t instanceof String||(E?function(t){try{return S.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function T(t){return O(t)||I(t)}function P(t){return"number"==typeof t}_(T,"isPrimitive",O),_(T,"isObject",I);var A=Number,N=A.prototype.toString;var k=n();function x(t){return"object"==typeof t&&(t instanceof A||(k?function(t){try{return N.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function B(t){return P(t)||x(t)}function V(t){return t!=t}function F(t){return P(t)&&V(t)}function L(t){return x(t)&&V(t.valueOf())}function G(t){return F(t)||L(t)}_(B,"isPrimitive",P),_(B,"isObject",x),_(G,"isPrimitive",F),_(G,"isObject",L);var Y=Number.POSITIVE_INFINITY,C=A.NEGATIVE_INFINITY,M=Math.floor;function X(t){return M(t)===t}function H(t){return t<Y&&t>C&&X(t)}function W(t){return P(t)&&H(t)}function D(t){return x(t)&&H(t.valueOf())}function K(t){return W(t)||D(t)}_(K,"isPrimitive",W),_(K,"isObject",D);var R=Object.prototype.propertyIsEnumerable;var U=!R.call("beep","0");function q(t,e){var r;return null!=t&&(!(r=R.call(t,e))&&U&&T(t)?!F(e=+e)&&W(e)&&e>=0&&e<t.length:r)}var z=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var J=p?a:function(t){return null!==t&&"object"==typeof t&&!z(t)&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!q(t,"callee")},Q=Array.prototype.slice;function Z(t){return null!==t&&"object"==typeof t}_(Z,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!z(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Z));var $=q((function(){}),"prototype"),tt=!q({toString:null},"toString");function et(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=9007199254740991}function rt(t,e,r){var n,o;if(!et(t)&&!O(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!W(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(G(e)){for(;o<n;o++)if(G(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var nt=/./;function ot(t){return"boolean"==typeof t}var it=Boolean.prototype.toString;var ut=n();function ft(t){return"object"==typeof t&&(t instanceof Boolean||(ut?function(t){try{return it.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function ct(t){return ot(t)||ft(t)}function lt(){return new Function("return this;")()}_(ct,"isPrimitive",ot),_(ct,"isObject",ft);var at="object"==typeof self?self:null,pt="object"==typeof window?window:null,st="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},yt="object"==typeof st?st:null;var bt=function(t){if(arguments.length){if(!ot(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return lt()}if(at)return at;if(pt)return pt;if(yt)return yt;throw new Error("unexpected error. Unable to resolve global object.")}(),vt=bt.document&&bt.document.childNodes,gt=Int8Array;function dt(){return/^\s*function\s*([^(]*)/i}var ht=/^\s*function\s*([^(]*)/i;function mt(t){var e,r,n,o;if(("Object"===(r=l(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=ht.exec(n.toString()))return e[1]}return Z(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}_(dt,"REGEXP",ht);var jt="function"==typeof nt||"object"==typeof gt||"function"==typeof vt?function(t){return mt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?mt(t).toLowerCase():e};function wt(t){return t.constructor&&t.constructor.prototype===t}var _t=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ot="undefined"==typeof window?void 0:window;var St=function(){var t;if("undefined"===jt(Ot))return!1;for(t in Ot)try{-1===rt(_t,t)&&u(Ot,t)&&null!==Ot[t]&&"object"===jt(Ot[t])&&wt(Ot[t])}catch(t){return!0}return!1}(),Et="undefined"!=typeof window;var It,Tt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];return It=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return J(e)?t(Q.call(e)):t(e)}:t:function(t){var e,r,n,o,i,f,c;if(o=[],J(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!Z(t))return o;r=$&&n}for(i in t)r&&"prototype"===i||!u(t,i)||o.push(String(i));if(tt)for(e=function(t){if(!1===Et&&!St)return wt(t);try{return wt(t)}catch(t){return!1}}(t),c=0;c<Tt.length;c++)f=Tt[c],e&&"constructor"===f||!u(t,f)||o.push(String(f));return o},It}));
//# sourceMappingURL=browser.js.map
