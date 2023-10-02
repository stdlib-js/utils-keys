// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arguments@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object-like@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-enumerable-property@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-type-of@v0.1.0-esm/index.mjs";function f(t){return Object.keys(Object(t))}var l=void 0!==Object.keys,d=Array.prototype.slice;var p=n(o,"prototype"),u=!n({toString:null},"toString");function c(t){return t.constructor&&t.constructor.prototype===t}var m=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],a="undefined"==typeof window?void 0:window;var h=function(){var t;if("undefined"===i(a))return!1;for(t in a)try{-1===s(m,t)&&r(a,t)&&null!==a[t]&&"object"===i(a[t])&&c(a[t])}catch(t){return!0}return!1}(),g="undefined"!=typeof window;var j=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var v=l?function(){return 2!==(f(arguments)||"").length}(1,2)?function(e){return t(e)?f(d.call(e)):f(e)}:f:function(n){var o,s,i,f,l,d,m;if(f=[],t(n)){for(m=0;m<n.length;m++)f.push(m.toString());return f}if("string"==typeof n){if(n.length>0&&!r(n,"0"))for(m=0;m<n.length;m++)f.push(m.toString())}else{if(!1==(i="function"==typeof n)&&!e(n))return f;s=p&&i}for(l in n)s&&"prototype"===l||!r(n,l)||f.push(String(l));if(u)for(o=function(t){if(!1===g&&!h)return c(t);try{return c(t)}catch(t){return!1}}(n),m=0;m<j.length;m++)d=j[m],o&&"constructor"===d||!r(n,d)||f.push(String(d));return f};export{v as default};
//# sourceMappingURL=index.mjs.map
