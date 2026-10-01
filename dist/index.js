"use strict";var d=function(v,t){return function(){try{return t||v((t={exports:{}}).exports,t),t.exports}catch(s){throw (t=0, s)}};};var p=d(function(J,w){
var l=require('@stdlib/strided-base-reinterpret-complex64/dist'),f=require('@stdlib/complex-float32-base-div/dist').assign,o=5;function k(v,t,s,c,n,j,h){var a,e,i,r,x,y,q,u;if(v<=0)return n;if(a=l(t,0),e=l(n,0),i=c*2,r=h*2,x=s*2,y=j*2,s===1&&j===1){if(q=v%o,q>0)for(u=0;u<q;u++)f(a[i],a[i+1],e[r],e[r+1],e,1,r),i+=x,r+=y;if(v<o)return n;for(u=q;u<v;u+=o)f(a[i],a[i+1],e[r],e[r+1],e,1,r),f(a[i+2],a[i+3],e[r+2],e[r+3],e,1,r+2),f(a[i+4],a[i+5],e[r+4],e[r+5],e,1,r+4),f(a[i+6],a[i+7],e[r+6],e[r+7],e,1,r+6),f(a[i+8],a[i+9],e[r+8],e[r+9],e,1,r+8),i+=o*2,r+=o*2;return n}for(u=0;u<v;u++)f(a[i],a[i+1],e[r],e[r+1],e,1,r),i+=x,r+=y;return n}w.exports=k
});var g=d(function(K,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),z=p();function A(v,t,s,c,n){return z(v,t,s,R(v,s),c,n,R(v,n))}_.exports=A
});var O=d(function(L,M){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=g(),C=p();B(E,"ndarray",C);M.exports=E
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=O(),m,b=F(D(__dirname,"./native.js"));G(b)?m=H:m=b;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
