"use strict";var e=function(r,i){return function(){try{return i||r((i={exports:{}}).exports,i),i.exports}catch(n){throw (i=0, n)}};};var c=e(function(Cr,q){
var y=require('@stdlib/object-ctor/dist'),F=y.keys;function K(r){return F(y(r))}q.exports=K
});var h=e(function(Hr,g){
var z=c();function J(){return(z(arguments)||"").length!==2}function Q(){return J(1,2)}g.exports=Q
});var d=e(function(Ir,b){
var V=typeof Object.keys!="undefined";b.exports=V
});var x=e(function(Lr,w){
var Z=require('@stdlib/assert-is-arguments/dist'),O=c(),$=Array.prototype.slice;function rr(r){return Z(r)?O($.call(r)):O(r)}w.exports=rr
});var S=e(function(jr,k){
var er=require('@stdlib/assert-is-enumerable-property/dist'),tr=require('@stdlib/utils-noop/dist'),ir=er(tr,"prototype");k.exports=ir
});var m=e(function(Dr,P){
var or=require('@stdlib/assert-is-enumerable-property/dist'),sr={toString:null},nr=!or(sr,"toString");P.exports=nr
});var l=e(function(Wr,E){
function ur(r){return r.constructor&&r.constructor.prototype===r}E.exports=ur
});var _=e(function(Mr,ar){ar.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var N=e(function(Rr,A){
var cr=typeof window=="undefined"?void 0:window;A.exports=cr
});var H=e(function(Tr,C){
var pr=require('@stdlib/assert-has-own-property/dist'),fr=require('@stdlib/utils-index-of/dist'),B=require('@stdlib/utils-type-of/dist'),lr=l(),vr=_(),s=N(),U;function yr(){var r;if(B(s)==="undefined")return!1;for(r in s)try{fr(vr,r)===-1&&pr(s,r)&&s[r]!==null&&B(s[r])==="object"&&lr(s[r])}catch(i){return!0}return!1}U=yr();C.exports=U
});var L=e(function(Xr,I){
var qr=typeof window!="undefined";I.exports=qr
});var W=e(function(Yr,D){
var gr=H(),j=l(),hr=L();function br(r){if(hr===!1&&!gr)return j(r);try{return j(r)}catch(i){return!1}}D.exports=br
});var M=e(function(Gr,dr){dr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var X=e(function(Fr,T){
var Or=require('@stdlib/assert-is-object-like/dist'),v=require('@stdlib/assert-has-own-property/dist'),wr=require('@stdlib/assert-is-arguments/dist'),xr=S(),kr=m(),Sr=W(),R=M();function Pr(r){var i,n,f,o,u,a,t;if(o=[],wr(r)){for(t=0;t<r.length;t++)o.push(t.toString());return o}if(typeof r=="string"){if(r.length>0&&!v(r,"0"))for(t=0;t<r.length;t++)o.push(t.toString())}else{if(f=typeof r=="function",f===!1&&!Or(r))return o;n=xr&&f}for(u in r)!(n&&u==="prototype")&&v(r,u)&&o.push(String(u));if(kr)for(i=Sr(r),t=0;t<R.length;t++)a=R[t],!(i&&a==="constructor")&&v(r,a)&&o.push(String(a));return o}T.exports=Pr
});var G=e(function(Kr,Y){
var mr=h(),Er=d(),_r=c(),Ar=x(),Nr=X(),p;Er?mr()?p=Ar:p=_r:p=Nr;Y.exports=p
});var Br=G();module.exports=Br;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
