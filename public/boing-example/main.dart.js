(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.kY(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.hb(b)
return new s(c,this)}:function(){if(s===null)s=A.hb(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.hb(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
hh(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fr(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.he==null){A.kM()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.f(A.hM("Return interceptor for "+A.n(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.f0
if(o==null)o=$.f0=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.kU(a)
if(p!=null)return p
if(typeof a=="function")return B.ad
s=Object.getPrototypeOf(a)
if(s==null)return B.X
if(s===Object.prototype)return B.X
if(typeof q=="function"){o=$.f0
if(o==null)o=$.f0=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.r,enumerable:false,writable:true,configurable:true})
return B.r}return B.r},
hy(a,b){if(a<0||a>4294967295)throw A.f(A.ag(a,0,4294967295,"length",null))
return J.hz(new Array(a),b)},
fU(a,b){if(a>4294967295)throw A.f(A.ag(a,0,4294967295,"length",null))
return J.hz(new Array(a),b)},
hz(a,b){var s=A.r(a,b.h("y<0>"))
s.$flags=1
return s},
hA(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
j3(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.hA(r))break;++b}return b},
j4(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.h(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.hA(q))break}return b},
b_(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b8.prototype
return J.bJ.prototype}if(typeof a=="string")return J.b9.prototype
if(a==null)return J.bI.prototype
if(typeof a=="boolean")return J.cQ.prototype
if(Array.isArray(a))return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ac.prototype
if(typeof a=="symbol")return J.bb.prototype
if(typeof a=="bigint")return J.ba.prototype
return a}if(a instanceof A.k)return a
return J.fr(a)},
b0(a){if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(Array.isArray(a))return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ac.prototype
if(typeof a=="symbol")return J.bb.prototype
if(typeof a=="bigint")return J.ba.prototype
return a}if(a instanceof A.k)return a
return J.fr(a)},
fq(a){if(a==null)return a
if(Array.isArray(a))return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ac.prototype
if(typeof a=="symbol")return J.bb.prototype
if(typeof a=="bigint")return J.ba.prototype
return a}if(a instanceof A.k)return a
return J.fr(a)},
kI(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b8.prototype
return J.bJ.prototype}if(a==null)return a
if(!(a instanceof A.k))return J.bj.prototype
return a},
hd(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ac.prototype
if(typeof a=="symbol")return J.bb.prototype
if(typeof a=="bigint")return J.ba.prototype
return a}if(a instanceof A.k)return a
return J.fr(a)},
Q(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.b_(a).D(a,b)},
fK(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.kP(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b0(a).k(a,b)},
iF(a){return J.hd(a).bh(a)},
fL(a){return J.hd(a).bi(a)},
iG(a,b,c){return J.hd(a).ad(a,b,c)},
fM(a,b){return J.fq(a).C(a,b)},
b2(a){return J.b_(a).gm(a)},
bs(a){return J.fq(a).gv(a)},
ar(a){return J.b0(a).gj(a)},
hk(a){return J.b_(a).gA(a)},
iH(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.kI(a).gb_(a)},
iI(a,b,c){return J.fq(a).a4(a,b,c)},
hl(a,b){return J.fq(a).I(a,b)},
aJ(a){return J.b_(a).i(a)},
bG:function bG(){},
cQ:function cQ(){},
bI:function bI(){},
bL:function bL(){},
av:function av(){},
d6:function d6(){},
bj:function bj(){},
ac:function ac(){},
ba:function ba(){},
bb:function bb(){},
y:function y(a){this.$ti=a},
e5:function e5(a){this.$ti=a},
bt:function bt(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bK:function bK(){},
b8:function b8(){},
bJ:function bJ(){},
b9:function b9(){}},A={fV:function fV(){},
iO(a,b,c){if(t.X.b(a))return new A.c8(a,b.h("@<0>").q(c).h("c8<1,2>"))
return new A.aM(a,b.h("@<0>").q(c).h("aM<1,2>"))},
A(a){return new A.bc("Field '"+a+"' has not been initialized.")},
j7(a){return new A.bc("Field '"+a+"' has already been initialized.")},
aj(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
eu(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ha(a,b,c){return a},
hf(a){var s,r
for(s=$.Y.length,r=0;r<s;++r)if(a===$.Y[r])return!0
return!1},
es(a,b,c,d){A.ah(b,"start")
if(c!=null){A.ah(c,"end")
if(b>c)A.p(A.ag(b,0,c,"start",null))}return new A.c2(a,b,c,d.h("c2<0>"))},
ja(a,b,c,d){if(t.X.b(a))return new A.bB(a,b,c.h("@<0>").q(d).h("bB<1,2>"))
return new A.aS(a,b,c.h("@<0>").q(d).h("aS<1,2>"))},
js(a,b,c){var s="count"
if(t.X.b(a)){A.dH(b,s,t.S)
A.ah(b,s)
return new A.b6(a,b,c.h("b6<0>"))}A.dH(b,s,t.S)
A.ah(b,s)
return new A.ai(a,b,c.h("ai<0>"))},
fS(){return new A.bh("No element")},
j1(){return new A.bh("Too few elements")},
aB:function aB(){},
bv:function bv(a,b){this.a=a
this.$ti=b},
aM:function aM(a,b){this.a=a
this.$ti=b},
c8:function c8(a,b){this.a=a
this.$ti=b},
c7:function c7(){},
bw:function bw(a,b){this.a=a
this.$ti=b},
bc:function bc(a){this.a=a},
en:function en(){},
j:function j(){},
R:function R(){},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aR:function aR(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aS:function aS(a,b,c){this.a=a
this.b=b
this.$ti=c},
bB:function bB(a,b,c){this.a=a
this.b=b
this.$ti=c},
bS:function bS(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
a2:function a2(a,b,c){this.a=a
this.b=b
this.$ti=c},
ai:function ai(a,b,c){this.a=a
this.b=b
this.$ti=c},
b6:function b6(a,b,c){this.a=a
this.b=b
this.$ti=c},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
aN:function aN(a){this.$ti=a},
bC:function bC(a){this.$ti=a},
O:function O(){},
az:function az(a){this.a=a},
cu:function cu(){},
ir(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
kP(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aJ(a)
return s},
Z(a,b,c,d,e,f){var s
A.I(b)
s=t.j
return new A.bH(a,A.d(c),s.a(d),s.a(e),A.d(f))},
li(a,b,c,d,e,f){var s
A.I(b)
s=t.j
return new A.bH(a,A.d(c),s.a(d),s.a(e),A.d(f))},
bY(a){var s,r=$.hF
if(r==null)r=$.hF=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
ei(a){var s,r,q,p
if(a instanceof A.k)return A.X(A.aG(a),null)
s=J.b_(a)
if(s===B.ac||s===B.ae||t.ak.b(a)){r=B.u(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.X(A.aG(a),null)},
jm(a){if(typeof a=="number"||A.fh(a))return J.aJ(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.as)return a.i(0)
return"Instance of '"+A.ei(a)+"'"},
bf(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jl(a){var s=A.bf(a).getFullYear()+0
return s},
jj(a){var s=A.bf(a).getMonth()+1
return s},
jf(a){var s=A.bf(a).getDate()+0
return s},
jg(a){var s=A.bf(a).getHours()+0
return s},
ji(a){var s=A.bf(a).getMinutes()+0
return s},
jk(a){var s=A.bf(a).getSeconds()+0
return s},
jh(a){var s=A.bf(a).getMilliseconds()+0
return s},
je(a){var s=a.$thrownJsError
if(s==null)return null
return A.aF(s)},
hG(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.L(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
h(a,b){if(a==null)J.ar(a)
throw A.f(A.fo(a,b))},
fo(a,b){var s,r="index"
if(!A.i9(b))return new A.a4(!0,b,r,null)
s=A.d(J.ar(a))
if(b<0||b>=s)return A.e1(b,s,a,null,r)
return A.jp(b,r)},
kx(a){return new A.a4(!0,a,null,null)},
f(a){return A.L(a,new Error())},
L(a,b){var s
if(a==null)a=new A.ak()
b.dartException=a
s=A.kZ
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
kZ(){return J.aJ(this.dartException)},
p(a,b){throw A.L(a,b==null?new Error():b)},
G(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.p(A.jZ(a,b,c),s)},
jZ(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.c4("'"+s+"': Cannot "+o+" "+l+k+n)},
ap(a){throw A.f(A.M(a))},
al(a){var s,r,q,p,o,n
a=A.kX(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.r([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.ez(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
eA(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
hL(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
fW(a,b){var s=b==null,r=s?null:b.method
return new A.cS(a,r,s?null:b.receiver)},
aq(a){var s
if(a==null)return new A.d3(a)
if(a instanceof A.bD){s=a.a
return A.aH(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.aH(a,a.dartException)
return A.ku(a)},
aH(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ku(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.cL(r,16)&8191)===10)switch(q){case 438:return A.aH(a,A.fW(A.n(s)+" (Error "+q+")",null))
case 445:case 5007:A.n(s)
return A.aH(a,new A.bX())}}if(a instanceof TypeError){p=$.iv()
o=$.iw()
n=$.ix()
m=$.iy()
l=$.iB()
k=$.iC()
j=$.iA()
$.iz()
i=$.iE()
h=$.iD()
g=p.H(s)
if(g!=null)return A.aH(a,A.fW(A.I(s),g))
else{g=o.H(s)
if(g!=null){g.method="call"
return A.aH(a,A.fW(A.I(s),g))}else if(n.H(s)!=null||m.H(s)!=null||l.H(s)!=null||k.H(s)!=null||j.H(s)!=null||m.H(s)!=null||i.H(s)!=null||h.H(s)!=null){A.I(s)
return A.aH(a,new A.bX())}}return A.aH(a,new A.dd(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.c_()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.aH(a,new A.a4(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.c_()
return a},
aF(a){var s
if(a instanceof A.bD)return a.b
if(a==null)return new A.cm(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.cm(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fG(a){if(a==null)return J.b2(a)
if(typeof a=="object")return A.bY(a)
return J.b2(a)},
kB(a){if(typeof a=="number")return B.c.gm(a)
if(a instanceof A.dt)return A.bY(a)
if(a instanceof A.az)return a.gm(0)
return A.fG(a)},
ik(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
ka(a,b,c,d,e,f){t.Z.a(a)
switch(A.d(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.f(A.dS("Unsupported number of arguments for wrapped closure"))},
cy(a,b){var s=a.$identity
if(!!s)return s
s=A.kC(a,b)
a.$identity=s
return s},
kC(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ka)},
iT(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.da().constructor.prototype):Object.create(new A.b3(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.hs(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.iP(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.hs(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
iP(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.f("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.iM)}throw A.f("Error in functionType of tearoff")},
iQ(a,b,c,d){var s=A.hr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
hs(a,b,c,d){if(c)return A.iS(a,b,d)
return A.iQ(b.length,d,a,b)},
iR(a,b,c,d){var s=A.hr,r=A.iN
switch(b?-1:a){case 0:throw A.f(new A.d8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
iS(a,b,c){var s,r
if($.hp==null)$.hp=A.ho("interceptor")
if($.hq==null)$.hq=A.ho("receiver")
s=b.length
r=A.iR(s,c,a,b)
return r},
hb(a){return A.iT(a)},
iM(a,b){return A.f7(v.typeUniverse,A.aG(a.a),b)},
hr(a){return a.a},
iN(a){return a.b},
ho(a){var s,r,q,p=new A.b3("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.f(A.dG("Field name "+a+" not found.",null))},
kJ(a){return v.getIsolateTag(a)},
lj(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kU(a){var s,r,q,p,o,n=A.I($.im.$1(a)),m=$.fp[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fv[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.fa($.ii.$2(a,n))
if(q!=null){m=$.fp[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fv[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.fF(s)
$.fp[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.fv[n]=s
return s}if(p==="-"){o=A.fF(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.io(a,s)
if(p==="*")throw A.f(A.hM(n))
if(v.leafTags[n]===true){o=A.fF(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.io(a,s)},
io(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.hh(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
fF(a){return J.hh(a,!1,null,!!a.$iW)},
kW(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.fF(s)
else return J.hh(s,c,null,null)},
kM(){if(!0===$.he)return
$.he=!0
A.kN()},
kN(){var s,r,q,p,o,n,m,l
$.fp=Object.create(null)
$.fv=Object.create(null)
A.kL()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.iq.$1(o)
if(n!=null){m=A.kW(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
kL(){var s,r,q,p,o,n,m=B.a3()
m=A.bp(B.a4,A.bp(B.a5,A.bp(B.v,A.bp(B.v,A.bp(B.a6,A.bp(B.a7,A.bp(B.a8(B.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.im=new A.fs(p)
$.ii=new A.ft(o)
$.iq=new A.fu(n)},
bp(a,b){return a(b)||b},
kD(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
j5(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.f(new A.cM("Illegal RegExp pattern ("+String(o)+")",a))},
kX(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
by:function by(a,b){this.a=a
this.$ti=b},
b5:function b5(){},
bz:function bz(a,b,c){this.a=a
this.b=b
this.$ti=c},
cf:function cf(a,b){this.a=a
this.$ti=b},
cg:function cg(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bF:function bF(a,b){this.a=a
this.$ti=b},
bH:function bH(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
ez:function ez(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bX:function bX(){},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
dd:function dd(a){this.a=a},
d3:function d3(a){this.a=a},
bD:function bD(a,b){this.a=a
this.b=b},
cm:function cm(a){this.a=a
this.b=null},
as:function as(){},
cI:function cI(){},
cJ:function cJ(){},
db:function db(){},
da:function da(){},
b3:function b3(a,b){this.a=a
this.b=b},
d8:function d8(a){this.a=a},
a0:function a0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
e9:function e9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ad:function ad(a,b){this.a=a
this.$ti=b},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aQ:function aQ(a,b){this.a=a
this.$ti=b},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bM:function bM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fs:function fs(a){this.a=a},
ft:function ft(a){this.a=a},
fu:function fu(a){this.a=a},
cR:function cR(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
f1:function f1(a){this.b=a},
a(a){throw A.L(A.A(a),new Error())},
D(a){throw A.L(A.j7(a),new Error())},
kY(a){throw A.L(new A.bc("Field '"+a+"' has been assigned during initialization."),new Error())},
h3(a){var s=new A.eL(a)
return s.b=s},
eL:function eL(a){this.a=a
this.b=null},
fg(a,b,c){},
i4(a){return a},
jc(a,b,c){var s
A.fg(a,b,c)
s=new DataView(a,b)
return s},
hC(a){return new Uint8Array(A.i4(a))},
jd(a,b,c){A.fg(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
aY(a,b,c){if(a>>>0!==a||a>=c)throw A.f(A.fo(b,a))},
a6:function a6(){},
bV:function bV(){},
du:function du(a){this.a=a},
cV:function cV(){},
be:function be(){},
bT:function bT(){},
bU:function bU(){},
aT:function aT(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
bW:function bW(){},
d_:function d_(){},
ax:function ax(){},
d0:function d0(){},
ci:function ci(){},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
h0(a,b){var s=b.c
return s==null?b.c=A.cq(a,"a5",[b.x]):s},
hI(a){var s=a.w
if(s===6||s===7)return A.hI(a.x)
return s===11||s===12},
jr(a){return a.as},
bq(a){return A.f6(v.typeUniverse,a,!1)},
aZ(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.aZ(a1,s,a3,a4)
if(r===s)return a2
return A.hY(a1,r,!0)
case 7:s=a2.x
r=A.aZ(a1,s,a3,a4)
if(r===s)return a2
return A.hX(a1,r,!0)
case 8:q=a2.y
p=A.bo(a1,q,a3,a4)
if(p===q)return a2
return A.cq(a1,a2.x,p)
case 9:o=a2.x
n=A.aZ(a1,o,a3,a4)
m=a2.y
l=A.bo(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.h6(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.bo(a1,j,a3,a4)
if(i===j)return a2
return A.hZ(a1,k,i)
case 11:h=a2.x
g=A.aZ(a1,h,a3,a4)
f=a2.y
e=A.kr(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.hW(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.bo(a1,d,a3,a4)
o=a2.x
n=A.aZ(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.h7(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.f(A.cD("Attempted to substitute unexpected RTI kind "+a0))}},
bo(a,b,c,d){var s,r,q,p,o=b.length,n=A.f8(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.aZ(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
ks(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.f8(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.aZ(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
kr(a,b,c,d){var s,r=b.a,q=A.bo(a,r,c,d),p=b.b,o=A.bo(a,p,c,d),n=b.c,m=A.ks(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.dm()
s.a=q
s.b=o
s.c=m
return s},
r(a,b){a[v.arrayRti]=b
return a},
hc(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.kK(s)
return a.$S()}return null},
kO(a,b){var s
if(A.hI(b))if(a instanceof A.as){s=A.hc(a)
if(s!=null)return s}return A.aG(a)},
aG(a){if(a instanceof A.k)return A.z(a)
if(Array.isArray(a))return A.H(a)
return A.h8(J.b_(a))},
H(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
z(a){var s=a.$ti
return s!=null?s:A.h8(a)},
h8(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.k8(a,s)},
k8(a,b){var s=a instanceof A.as?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.jQ(v.typeUniverse,s.name)
b.$ccache=r
return r},
kK(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.f6(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
il(a){return A.a9(A.z(a))},
kq(a){var s=a instanceof A.as?A.hc(a):null
if(s!=null)return s
if(t.dm.b(a))return J.hk(a).a
if(Array.isArray(a))return A.H(a)
return A.aG(a)},
a9(a){var s=a.r
return s==null?a.r=new A.dt(a):s},
a_(a){return A.a9(A.f6(v.typeUniverse,a,!1))},
k7(a){var s,r,q,p,o=this
if(o===t.K)return A.ao(o,a,A.kf)
if(A.b1(o))return A.ao(o,a,A.kj)
s=o.w
if(s===6)return A.ao(o,a,A.k5)
if(s===1)return A.ao(o,a,A.ia)
if(s===7)return A.ao(o,a,A.kb)
if(o===t.S)r=A.i9
else if(o===t.i||o===t.p)r=A.ke
else if(o===t.N)r=A.kh
else r=o===t.y?A.fh:null
if(r!=null)return A.ao(o,a,r)
if(s===8){q=o.x
if(o.y.every(A.b1)){o.f="$i"+q
if(q==="m")return A.ao(o,a,A.kd)
return A.ao(o,a,A.ki)}}else if(s===10){p=A.kD(o.x,o.y)
return A.ao(o,a,p==null?A.ia:p)}return A.ao(o,a,A.k3)},
ao(a,b,c){a.b=c
return a.b(b)},
k6(a){var s=this,r=A.k2
if(A.b1(s))r=A.jV
else if(s===t.K)r=A.jU
else if(A.br(s))r=A.k4
if(s===t.S)r=A.d
else if(s===t.h6)r=A.jT
else if(s===t.N)r=A.I
else if(s===t.dk)r=A.fa
else if(s===t.y)r=A.an
else if(s===t.fQ)r=A.jS
else if(s===t.p)r=A.f9
else if(s===t.cg)r=A.i1
else if(s===t.i)r=A.F
else if(s===t.cD)r=A.bm
s.a=r
return s.a(a)},
k3(a){var s=this
if(a==null)return A.br(s)
return A.kQ(v.typeUniverse,A.kO(a,s),s)},
k5(a){if(a==null)return!0
return this.x.b(a)},
ki(a){var s,r=this
if(a==null)return A.br(r)
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.b_(a)[s]},
kd(a){var s,r=this
if(a==null)return A.br(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.b_(a)[s]},
k2(a){var s=this
if(a==null){if(A.br(s))return a}else if(s.b(a))return a
throw A.L(A.i5(a,s),new Error())},
k4(a){var s=this
if(a==null||s.b(a))return a
throw A.L(A.i5(a,s),new Error())},
i5(a,b){return new A.co("TypeError: "+A.hO(a,A.X(b,null)))},
hO(a,b){return A.b7(a)+": type '"+A.X(A.kq(a),null)+"' is not a subtype of type '"+b+"'"},
a7(a,b){return new A.co("TypeError: "+A.hO(a,b))},
kb(a){var s=this
return s.x.b(a)||A.h0(v.typeUniverse,s).b(a)},
kf(a){return a!=null},
jU(a){if(a!=null)return a
throw A.L(A.a7(a,"Object"),new Error())},
kj(a){return!0},
jV(a){return a},
ia(a){return!1},
fh(a){return!0===a||!1===a},
an(a){if(!0===a)return!0
if(!1===a)return!1
throw A.L(A.a7(a,"bool"),new Error())},
jS(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.L(A.a7(a,"bool?"),new Error())},
F(a){if(typeof a=="number")return a
throw A.L(A.a7(a,"double"),new Error())},
bm(a){if(typeof a=="number")return a
if(a==null)return a
throw A.L(A.a7(a,"double?"),new Error())},
i9(a){return typeof a=="number"&&Math.floor(a)===a},
d(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.L(A.a7(a,"int"),new Error())},
jT(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.L(A.a7(a,"int?"),new Error())},
ke(a){return typeof a=="number"},
f9(a){if(typeof a=="number")return a
throw A.L(A.a7(a,"num"),new Error())},
i1(a){if(typeof a=="number")return a
if(a==null)return a
throw A.L(A.a7(a,"num?"),new Error())},
kh(a){return typeof a=="string"},
I(a){if(typeof a=="string")return a
throw A.L(A.a7(a,"String"),new Error())},
fa(a){if(typeof a=="string")return a
if(a==null)return a
throw A.L(A.a7(a,"String?"),new Error())},
ig(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.X(a[q],b)
return s},
km(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.ig(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.X(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
i6(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.r([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.t(a4,"T"+(r+q))
for(p=t.O,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.h(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.X(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.X(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.X(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.X(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.X(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
X(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.X(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.X(a.x,b)+">"
if(l===8){p=A.kt(a.x)
o=a.y
return o.length>0?p+("<"+A.ig(o,b)+">"):p}if(l===10)return A.km(a,b)
if(l===11)return A.i6(a,b,null)
if(l===12)return A.i6(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.h(b,n)
return b[n]}return"?"},
kt(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
jR(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
jQ(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.f6(a,b,!1)
else if(typeof m=="number"){s=m
r=A.cr(a,5,"#")
q=A.f8(s)
for(p=0;p<s;++p)q[p]=r
o=A.cq(a,b,q)
n[b]=o
return o}else return m},
jO(a,b){return A.i_(a.tR,b)},
jN(a,b){return A.i_(a.eT,b)},
f6(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.hT(A.hR(a,null,b,!1))
r.set(b,s)
return s},
f7(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.hT(A.hR(a,b,c,!0))
q.set(c,r)
return r},
jP(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.h6(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
aD(a,b){b.a=A.k6
b.b=A.k7
return b},
cr(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.a3(null,null)
s.w=b
s.as=c
r=A.aD(a,s)
a.eC.set(c,r)
return r},
hY(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.jL(a,b,r,c)
a.eC.set(r,s)
return s},
jL(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.b1(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.br(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.a3(null,null)
q.w=6
q.x=b
q.as=c
return A.aD(a,q)},
hX(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.jJ(a,b,r,c)
a.eC.set(r,s)
return s},
jJ(a,b,c,d){var s,r
if(d){s=b.w
if(A.b1(b)||b===t.K)return b
else if(s===1)return A.cq(a,"a5",[b])
else if(b===t.P||b===t.T)return t.eH}r=new A.a3(null,null)
r.w=7
r.x=b
r.as=c
return A.aD(a,r)},
jM(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.a3(null,null)
s.w=13
s.x=b
s.as=q
r=A.aD(a,s)
a.eC.set(q,r)
return r},
cp(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
jI(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
cq(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.cp(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.a3(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.aD(a,r)
a.eC.set(p,q)
return q},
h6(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.cp(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.a3(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.aD(a,o)
a.eC.set(q,n)
return n},
hZ(a,b,c){var s,r,q="+"+(b+"("+A.cp(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.a3(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.aD(a,s)
a.eC.set(q,r)
return r},
hW(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.cp(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.cp(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.jI(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.a3(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.aD(a,p)
a.eC.set(r,o)
return o},
h7(a,b,c,d){var s,r=b.as+("<"+A.cp(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.jK(a,b,c,r,d)
a.eC.set(r,s)
return s},
jK(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.f8(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.aZ(a,b,r,0)
m=A.bo(a,c,r,0)
return A.h7(a,n,m,c!==m)}}l=new A.a3(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.aD(a,l)},
hR(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hT(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.jC(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.hS(a,r,l,k,!1)
else if(q===46)r=A.hS(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.aX(a.u,a.e,k.pop()))
break
case 94:k.push(A.jM(a.u,k.pop()))
break
case 35:k.push(A.cr(a.u,5,"#"))
break
case 64:k.push(A.cr(a.u,2,"@"))
break
case 126:k.push(A.cr(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.jE(a,k)
break
case 38:A.jD(a,k)
break
case 63:p=a.u
k.push(A.hY(p,A.aX(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.hX(p,A.aX(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.jB(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.hU(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.jG(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.aX(a.u,a.e,m)},
jC(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
hS(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.jR(s,o.x)[p]
if(n==null)A.p('No "'+p+'" in "'+A.jr(o)+'"')
d.push(A.f7(s,o,n))}else d.push(p)
return m},
jE(a,b){var s,r=a.u,q=A.hQ(a,b),p=b.pop()
if(typeof p=="string")b.push(A.cq(r,p,q))
else{s=A.aX(r,a.e,p)
switch(s.w){case 11:b.push(A.h7(r,s,q,a.n))
break
default:b.push(A.h6(r,s,q))
break}}},
jB(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.hQ(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.aX(p,a.e,o)
q=new A.dm()
q.a=s
q.b=n
q.c=m
b.push(A.hW(p,r,q))
return
case-4:b.push(A.hZ(p,b.pop(),s))
return
default:throw A.f(A.cD("Unexpected state under `()`: "+A.n(o)))}},
jD(a,b){var s=b.pop()
if(0===s){b.push(A.cr(a.u,1,"0&"))
return}if(1===s){b.push(A.cr(a.u,4,"1&"))
return}throw A.f(A.cD("Unexpected extended operation "+A.n(s)))},
hQ(a,b){var s=b.splice(a.p)
A.hU(a.u,a.e,s)
a.p=b.pop()
return s},
aX(a,b,c){if(typeof c=="string")return A.cq(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.jF(a,b,c)}else return c},
hU(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aX(a,b,c[s])},
jG(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aX(a,b,c[s])},
jF(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.f(A.cD("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.f(A.cD("Bad index "+c+" for "+b.i(0)))},
kQ(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.J(a,b,null,c,null)
r.set(c,s)}return s},
J(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.b1(d))return!0
s=b.w
if(s===4)return!0
if(A.b1(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.J(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.J(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.J(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.J(a,b.x,c,d,e))return!1
return A.J(a,A.h0(a,b),c,d,e)}if(s===6)return A.J(a,p,c,d,e)&&A.J(a,b.x,c,d,e)
if(q===7){if(A.J(a,b,c,d.x,e))return!0
return A.J(a,b,c,A.h0(a,d),e)}if(q===6)return A.J(a,b,c,p,e)||A.J(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.gT)return!0
if(q===12){if(b===t.g)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.J(a,j,c,i,e)||!A.J(a,i,e,j,c))return!1}return A.i8(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.i8(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.kc(a,b,c,d,e)}if(o&&q===10)return A.kg(a,b,c,d,e)
return!1},
i8(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.J(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.J(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.J(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.J(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.J(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
kc(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.f7(a,b,r[o])
return A.i0(a,p,null,c,d.y,e)}return A.i0(a,b.y,null,c,d.y,e)},
i0(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.J(a,b[s],d,e[s],f))return!1
return!0},
kg(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.J(a,r[s],c,q[s],e))return!1
return!0},
br(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.b1(a))if(s!==6)r=s===7&&A.br(a.x)
return r},
b1(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.O},
i_(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
f8(a){return a>0?new Array(a):v.typeUniverse.sEA},
a3:function a3(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
dm:function dm(){this.c=this.b=this.a=null},
dt:function dt(a){this.a=a},
dk:function dk(){},
co:function co(a){this.a=a},
jx(){var s,r,q
if(self.scheduleImmediate!=null)return A.ky()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.cy(new A.eI(s),1)).observe(r,{childList:true})
return new A.eH(s,r,q)}else if(self.setImmediate!=null)return A.kz()
return A.kA()},
jy(a){self.scheduleImmediate(A.cy(new A.eJ(t.M.a(a)),0))},
jz(a){self.setImmediate(A.cy(new A.eK(t.M.a(a)),0))},
jA(a){A.h2(B.i,t.M.a(a))},
h2(a,b){var s=B.b.L(a.a,1000)
return A.jH(s<0?0:s,b)},
jH(a,b){var s=new A.f4()
s.bV(a,b)
return s},
fj(a){return new A.dg(new A.C($.x,a.h("C<0>")),a.h("dg<0>"))},
fd(a,b){a.$2(0,null)
b.b=!0
return b.a},
i2(a,b){b.toString
A.jW(a,b)},
fc(a,b){b.a3(a)},
fb(a,b){b.aF(A.aq(a),A.aF(a))},
jW(a,b){var s,r,q=new A.fe(b),p=new A.ff(b)
if(a instanceof A.C)a.bd(q,p,t.A)
else{s=t.A
if(a instanceof A.C)a.aj(q,p,s)
else{r=new A.C($.x,t._)
r.a=8
r.c=a
r.bd(q,p,s)}}},
fm(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.x.bB(new A.fn(s),t.H,t.S,t.A)},
hV(a,b,c){return 0},
fO(a){var s
if(t.C.b(a)){s=a.gY()
if(s!=null)return s}return B.m},
iX(a,b,c){var s=new A.C($.x,c.h("C<0>"))
A.ey(a,new A.dV(b,s,c))
return s},
i7(a,b){if($.x===B.d)return null
return null},
k9(a,b){if($.x!==B.d)A.i7(a,b)
if(b==null)if(t.C.b(a)){b=a.gY()
if(b==null){A.hG(a,B.m)
b=B.m}}else b=B.m
else if(t.C.b(a))A.hG(a,b)
return new A.V(a,b)},
eS(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t._;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.jt()
b.am(new A.V(new A.a4(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.bc(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.a_()
b.a7(o.a)
A.aV(b,p)
return}b.a^=2
A.dw(null,null,b.b,t.M.a(new A.eT(o,b)))},
aV(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;!0;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.fk(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.aV(d.a,c)
q.a=l
k=l.a}p=d.a
j=p.c
q.b=n
q.c=j
if(o){i=c.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=c.b.b
if(n){p=p.b===h
p=!(p||p)}else p=!1
if(p){s.a(j)
A.fk(j.a,j.b)
return}g=$.x
if(g!==h)$.x=h
else g=null
c=c.c
if((c&15)===8)new A.eX(q,d,n).$0()
else if(o){if((c&1)!==0)new A.eW(q,j).$0()}else if((c&2)!==0)new A.eV(d,q).$0()
if(g!=null)$.x=g
c=q.c
if(c instanceof A.C){p=q.a.$ti
p=p.h("a5<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.ac(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.eS(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.ac(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
ic(a,b){var s
if(t.Q.b(a))return b.bB(a,t.A,t.K,t.l)
s=t.w
if(s.b(a))return s.a(a)
throw A.f(A.fN(a,"onError",u.c))},
kl(){var s,r
for(s=$.bn;s!=null;s=$.bn){$.cw=null
r=s.b
$.bn=r
if(r==null)$.cv=null
s.a.$0()}},
kp(){$.h9=!0
try{A.kl()}finally{$.cw=null
$.h9=!1
if($.bn!=null)$.hj().$1(A.ij())}},
ih(a){var s=new A.dh(a),r=$.cv
if(r==null){$.bn=$.cv=s
if(!$.h9)$.hj().$1(A.ij())}else $.cv=r.b=s},
ko(a){var s,r,q,p=$.bn
if(p==null){A.ih(a)
$.cw=$.cv
return}s=new A.dh(a)
r=$.cw
if(r==null){s.b=p
$.bn=$.cw=s}else{q=r.b
s.b=q
$.cw=r.b=s
if(q==null)$.cv=s}},
l3(a,b){A.ha(a,"stream",t.K)
return new A.dq(b.h("dq<0>"))},
ey(a,b){var s=$.x
if(s===B.d)return A.h2(a,t.M.a(b))
return A.h2(a,t.M.a(s.bj(b)))},
fk(a,b){A.ko(new A.fl(a,b))},
id(a,b,c,d,e){var s,r=$.x
if(r===c)return d.$0()
$.x=c
s=r
try{r=d.$0()
return r}finally{$.x=s}},
ie(a,b,c,d,e,f,g){var s,r=$.x
if(r===c)return d.$1(e)
$.x=c
s=r
try{r=d.$1(e)
return r}finally{$.x=s}},
kn(a,b,c,d,e,f,g,h,i){var s,r=$.x
if(r===c)return d.$2(e,f)
$.x=c
s=r
try{r=d.$2(e,f)
return r}finally{$.x=s}},
dw(a,b,c,d){t.M.a(d)
if(B.d!==c)d=c.bj(d)
A.ih(d)},
eI:function eI(a){this.a=a},
eH:function eH(a,b,c){this.a=a
this.b=b
this.c=c},
eJ:function eJ(a){this.a=a},
eK:function eK(a){this.a=a},
f4:function f4(){},
f5:function f5(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=!1
this.$ti=b},
fe:function fe(a){this.a=a},
ff:function ff(a){this.a=a},
fn:function fn(a){this.a=a},
cn:function cn(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bk:function bk(a,b){this.a=a
this.$ti=b},
V:function V(a,b){this.a=a
this.b=b},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(){},
aU:function aU(a,b){this.a=a
this.$ti=b},
am:function am(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
C:function C(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
eP:function eP(a,b){this.a=a
this.b=b},
eU:function eU(a,b){this.a=a
this.b=b},
eT:function eT(a,b){this.a=a
this.b=b},
eR:function eR(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.b=b},
eX:function eX(a,b,c){this.a=a
this.b=b
this.c=c},
eY:function eY(a,b){this.a=a
this.b=b},
eZ:function eZ(a){this.a=a},
eW:function eW(a,b){this.a=a
this.b=b},
eV:function eV(a,b){this.a=a
this.b=b},
dh:function dh(a){this.a=a
this.b=null},
c0:function c0(){},
eq:function eq(a,b){this.a=a
this.b=b},
er:function er(a,b){this.a=a
this.b=b},
dq:function dq(a){this.$ti=a},
ct:function ct(){},
fl:function fl(a,b){this.a=a
this.b=b},
dp:function dp(){},
f2:function f2(a,b){this.a=a
this.b=b},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
hw(a,b){return new A.aW(a.h("@<0>").q(b).h("aW<1,2>"))},
h4(a,b){var s=a[b]
return s===a?null:s},
h5(a,b,c){if(c==null)a[b]=a
else a[b]=c},
hP(){var s=Object.create(null)
A.h5(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
hB(a,b,c){return b.h("@<0>").q(c).h("fX<1,2>").a(A.ik(a,new A.a0(b.h("@<0>").q(c).h("a0<1,2>"))))},
bP(a,b){return new A.a0(a.h("@<0>").q(b).h("a0<1,2>"))},
ee(a){var s,r
if(A.hf(a))return"{...}"
s=new A.c1("")
try{r={}
B.a.t($.Y,a)
s.a+="{"
r.a=!0
a.G(0,new A.ef(r,s))
s.a+="}"}finally{if(0>=$.Y.length)return A.h($.Y,-1)
$.Y.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
j8(a){return 8},
aW:function aW(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
cd:function cd(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
cb:function cb(a,b){this.a=a
this.$ti=b},
cc:function cc(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
t:function t(){},
aw:function aw(){},
ef:function ef(a,b){this.a=a
this.b=b},
cs:function cs(){},
bd:function bd(){},
c3:function c3(){},
bQ:function bQ(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
ch:function ch(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
bl:function bl(){},
iV(a,b){a=A.L(a,new Error())
if(a==null)a=t.K.a(a)
a.stack=b.i(0)
throw a},
S(a,b,c,d){var s,r=J.hy(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
j9(a,b){var s,r,q=A.r([],b.h("y<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.ap)(a),++r)B.a.t(q,b.a(a[r]))
return q},
fY(a,b){var s,r
if(Array.isArray(a))return A.r(a.slice(0),b.h("y<0>"))
s=A.r([],b.h("y<0>"))
for(r=J.bs(a);r.n();)B.a.t(s,r.gp())
return s},
hH(a){return new A.cR(a,A.j5(a,!1,!0,!1,!1,""))},
hJ(a,b,c){var s=J.bs(b)
if(!s.n())return a
if(c.length===0){do a+=A.n(s.gp())
while(s.n())}else{a+=A.n(s.gp())
for(;s.n();)a=a+c+A.n(s.gp())}return a},
hD(a,b){return new A.d1(a,b.gdg(),b.gbA(),b.gbr())},
jt(){return A.aF(new Error())},
iU(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
hu(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cL(a){if(a>=10)return""+a
return"0"+a},
dR(a,b){return new A.bA(a+1000*b)},
b7(a){if(typeof a=="number"||A.fh(a)||a==null)return J.aJ(a)
if(typeof a=="string")return JSON.stringify(a)
return A.jm(a)},
iW(a,b){A.ha(a,"error",t.K)
A.ha(b,"stackTrace",t.l)
A.iV(a,b)},
cD(a){return new A.cC(a)},
dG(a,b){return new A.a4(!1,null,b,a)},
fN(a,b,c){return new A.a4(!0,a,b,c)},
dH(a,b,c){return a},
jo(a){var s=null
return new A.bg(s,s,!1,s,s,a)},
jp(a,b){return new A.bg(null,null,!0,a,b,"Value not in range")},
ag(a,b,c,d,e){return new A.bg(b,c,!0,a,d,"Invalid value")},
fZ(a,b,c){if(0>a||a>c)throw A.f(A.ag(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.f(A.ag(b,a,c,"end",null))
return b}return c},
ah(a,b){if(a<0)throw A.f(A.ag(a,0,null,b,null))
return a},
e1(a,b,c,d,e){return new A.cO(b,!0,a,e,"Index out of range")},
de(a){return new A.c4(a)},
hM(a){return new A.dc(a)},
h1(a){return new A.bh(a)},
M(a){return new A.cK(a)},
dS(a){return new A.dl(a)},
j2(a,b,c){var s,r
if(A.hf(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.r([],t.s)
B.a.t($.Y,a)
try{A.kk(a,s)}finally{if(0>=$.Y.length)return A.h($.Y,-1)
$.Y.pop()}r=A.hJ(b,t.V.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
fT(a,b,c){var s,r
if(A.hf(a))return b+"..."+c
s=new A.c1(b)
B.a.t($.Y,a)
try{r=s
r.a=A.hJ(r.a,a,", ")}finally{if(0>=$.Y.length)return A.h($.Y,-1)
$.Y.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kk(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=A.n(l.gp())
B.a.t(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.h(b,-1)
r=b.pop()
if(0>=b.length)return A.h(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.n()){if(j<=4){B.a.t(b,A.n(p))
return}r=A.n(p)
if(0>=b.length)return A.h(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.n();p=o,o=n){n=l.gp();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.h(b,-1)
k-=b.pop().length+2;--j}B.a.t(b,"...")
return}}q=A.n(p)
r=A.n(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.h(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.t(b,m)
B.a.t(b,q)
B.a.t(b,r)},
hE(a,b,c,d){var s
if(B.k===c){s=B.b.gm(a)
b=B.b.gm(b)
return A.eu(A.aj(A.aj($.dx(),s),b))}if(B.k===d){s=B.b.gm(a)
b=B.b.gm(b)
c=J.b2(c)
return A.eu(A.aj(A.aj(A.aj($.dx(),s),b),c))}s=B.b.gm(a)
b=B.b.gm(b)
c=J.b2(c)
d=J.b2(d)
d=A.eu(A.aj(A.aj(A.aj(A.aj($.dx(),s),b),c),d))
return d},
d4(a){var s,r,q=$.dx()
for(s=a.length,r=0;r<s;++r)q=A.aj(q,B.c.gm(a[r]))
return A.eu(q)},
eg:function eg(a,b){this.a=a
this.b=b},
at:function at(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a){this.a=a},
eM:function eM(){},
B:function B(){},
cC:function cC(a){this.a=a},
ak:function ak(){},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bg:function bg(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cO:function cO(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c4:function c4(a){this.a=a},
dc:function dc(a){this.a=a},
bh:function bh(a){this.a=a},
cK:function cK(a){this.a=a},
d5:function d5(){},
c_:function c_(){},
dl:function dl(a){this.a=a},
cM:function cM(a,b){this.a=a
this.b=b},
e:function e(){},
a1:function a1(a,b,c){this.a=a
this.b=b
this.$ti=c},
v:function v(){},
k:function k(){},
dr:function dr(){},
c1:function c1(a){this.a=a},
q(a){var s
if(typeof a=="function")throw A.f(A.dG("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.jX,a)
s[$.hi()]=a
return s},
jX(a,b,c){t.Z.a(a)
if(A.d(c)>=1)return a.$1(b)
return a.$0()},
ib(a){return a==null||A.fh(a)||typeof a=="number"||typeof a=="string"||t.gj.b(a)||t.bW.b(a)||t.go.b(a)||t.dQ.b(a)||t.h7.b(a)||t.an.b(a)||t.bv.b(a)||t.h4.b(a)||t.q.b(a)||t.D.b(a)||t.e.b(a)},
kR(a){if(A.ib(a))return a
return new A.fw(new A.cd(t.hg)).$1(a)},
cx(a,b,c,d){return d.a(a[b].apply(a,c))},
ip(a,b){var s=new A.C($.x,b.h("C<0>")),r=new A.aU(s,b.h("aU<0>"))
a.then(A.cy(new A.fH(r,b),1),A.cy(new A.fI(r),1))
return s},
fw:function fw(a){this.a=a},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(a){this.a=a},
d2:function d2(a){this.a=a},
f_:function f_(){},
dy:function dy(){},
dF:function dF(a){this.a=a},
dC:function dC(a){this.a=a},
dD:function dD(a){this.a=a},
dE:function dE(a){this.a=a},
dA:function dA(a,b){this.a=a
this.b=b},
dB:function dB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dz:function dz(a){this.a=a},
iK(){var s,r,q=A.r(new Array(32),t.t)
for(s=0;s<32;++s)q[s]=s
r=new A.cE(q,t.m.a(new v.G.AudioContext()),B.e)
r.bR(null)
return r},
cE:function cE(a,b,c){var _=this
_.c=_.b=_.a=null
_.e=$
_.f=a
_.r=1
_.w=b
_.x=c},
dM:function dM(a){this.a=a},
dN:function dN(a){this.a=a},
dJ:function dJ(a,b){this.a=a
this.b=b},
dK:function dK(a){this.a=a},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b4:function b4(a,b){this.a=a
this.b=b},
bu:function bu(a){var _=this
_.b=_.a=null
_.d=_.c=$
_.e=!1
_.x=_.f=0
_.y=a},
bR:function bR(a,b){this.a=a
this.b=b},
d9:function d9(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
ep:function ep(a,b){this.a=a
this.b=b},
eo:function eo(a){this.a=a},
dP:function dP(a,b){this.a=a
this.b=b},
i3(a,b,c){var s=t.z.a(a.createShader(c))
if(s==null){$.cA().$1("Could not create shader.")
return null}a.shaderSource(s,b)
a.compileShader(s)
if(J.Q(a.getShaderParameter(s,35713),!1)){$.cA().$1("Could not compile shader: "+A.n(A.fa(a.getShaderInfoLog(s))))
a.deleteShader(s)
return null}return s},
jY(a,b,c){var s,r=A.i3(a,b,35633),q=A.i3(a,c,35632)
if(r==null||q==null)return null
s=t.z.a(a.createProgram())
if(s==null){$.cA().$1("Could not create program.")
a.deleteShader(r)
a.deleteShader(q)
return null}a.attachShader(s,r)
a.attachShader(s,q)
a.linkProgram(s)
if(J.Q(a.getProgramParameter(s,35714),!1)){$.cA().$1("Could not link program: "+A.n(A.fa(a.getProgramInfoLog(s))))
a.deleteProgram(s)
a.deleteShader(r)
a.deleteShader(q)
return null}a.deleteShader(r)
a.deleteShader(q)
return s},
iZ(a,b){var s,r,q,p,o,n,m=null,l=new Float64Array(16)
l[0]=1
l[1]=0
l[2]=0
l[3]=0
l[4]=0
l[5]=1
l[6]=0
l[7]=0
l[8]=0
l[9]=0
l[10]=1
l[11]=0
l[12]=0
l[13]=0
l[14]=0
l[15]=1
s=t.S
r=A.h_(m,m,m,m,s)
s=A.h_(m,m,m,m,s)
q=A.r([],t.aw)
p=new Float64Array(3)
o=new A.af(new Float64Array(9))
o.aW()
n=new A.c6(new Float64Array(4))
n.aY(1,1,1,1)
n=new A.dY(a,new A.ej(new A.cT(l),r,s),q,new A.c5(p),o,n)
n.bT(a,b)
return n},
dY:function dY(a,b,c,d,e,f){var _=this
_.a=$
_.b=a
_.c=b
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=0
_.db=_.CW=_.ch=_.ay=_.ax=_.at=$
_.dx=c
_.dy=d
_.fr=e
_.fx=f
_.fy=4294967295},
dZ:function dZ(){},
e_:function e_(){},
aC:function aC(a,b){this.a=a
this.b=b},
ej:function ej(a,b,c){var _=this
_.d=_.c=null
_.e=!1
_.f=a
_.r=b
_.w=c},
j0(a){return a.length===0||B.a.cQ(a,new A.e0())},
j_(a,b,c,d){++d.e
return new A.au(d,c,a,b)},
e0:function e0(){},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hK(a,b,c){var s,r,q=t.z.a(a.createTexture())
if(q==null)throw A.f(A.dS("Could not create texture!"))
a.bindTexture(3553,q)
A.cx(a,"texImage2D",[3553,0,6408,1,1,0,6408,5121,b==null?$.it():b],t.H)
s=(c&1)!==0
if(s)a.texParameteri(3553,10240,9729)
else a.texParameteri(3553,10240,9728)
if((c&3)===3)a.texParameteri(3553,10241,9987)
else if((c&2)!==0)a.texParameteri(3553,10241,9984)
else if(s)a.texParameteri(3553,10241,9729)
else a.texParameteri(3553,10241,9728)
if((c&4)!==0)a.texParameteri(3553,10242,33071)
else if((c&16)!==0)a.texParameteri(3553,10242,10497)
else if((c&64)!==0)a.texParameteri(3553,10242,33648)
else a.texParameteri(3553,10242,33071)
if((c&8)!==0)a.texParameteri(3553,10243,33071)
else if((c&32)!==0)a.texParameteri(3553,10243,10497)
else if((c&128)!==0)a.texParameteri(3553,10243,33648)
else a.texParameteri(3553,10243,33071)
s=t.gc
r=new A.aA(q,a,A.r([],s),A.r([],s),1,1,c)
r.x=!1
if((c&2)!==0)a.generateMipmap(3553)
return r},
jw(a,b,c,d){var s,r,q,p,o=A.hK(a,null,d)
o.x=!0
s=A.hg(c,b).dG(new A.ew(o,a),t.P)
r=new A.ex(o)
q=s.$ti
p=$.x
if(p!==B.d)r=A.ic(r,p)
s.a6(new A.am(new A.C(p,q),2,null,r,q.h("am<1,1>")))
return o},
aA:function aA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=e
_.r=f
_.w=g
_.x=!0},
ew:function ew(a,b){this.a=a
this.b=b},
ex:function ex(a){this.a=a},
iJ(a,b,c){var s=new A.cB()
s.bP(a,b,!1)
return s},
cB:function cB(){},
iY(){var s,r,q,p=J.fU(4,t.gW)
for(s=t.i,r=t.y,q=0;q<4;++q)p[q]=new A.dn(A.S(2,0,!1,s),A.S(2,0,!1,s),A.S(2,0,!1,s),A.S(15,!1,!1,r),A.S(15,!1,!1,r),A.S(15,!1,!1,r))
s=new A.cN(p,A.S(4,-1,!1,t.S),A.r([],t.B))
s.bS()
return s},
K:function K(a,b){this.a=a
this.b=b},
dn:function dn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
j6(a){var s=t.W,r=t.y
s=new A.e6(A.bP(s,r),A.bP(s,r),A.bP(s,t.S),new A.bQ(A.S(A.j8(null),null,!1,t.gZ),t.dy))
s.bU(a)
return s},
ce:function ce(a,b){this.a=a
this.b=b},
bx:function bx(a,b){this.a=a
this.b=b},
e6:function e6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e7:function e7(a){this.a=a},
e8:function e8(a){this.a=a},
b:function b(a,b,c){this.c=a
this.a=b
this.b=c},
jb(a){var s,r,q,p,o,n=J.fU(32,t.cn)
for(s=0;s<32;++s)n[s]=new A.ds()
r=t.y
r=new A.cU(a,n,A.S(5,!1,!1,r),A.S(5,!1,!1,r),A.S(5,!1,!1,r))
q={passive:!1}
a.addEventListener("wheel",A.q(r.gcC()),q)
a.addEventListener("contextmenu",A.q(r.gcd()))
a.addEventListener("touchstart",A.q(r.gcA()),q)
a.addEventListener("touchmove",A.q(r.gcw()),q)
a.addEventListener("touchend",A.q(r.gcu()),q)
a.addEventListener("fullscreenchange",A.q(r.gci()))
p=v.G
o=t.m
o.a(p.window).addEventListener("resize",A.q(r.gcs()))
o.a(p.window).addEventListener("mousedown",A.q(r.gck()))
o.a(p.window).addEventListener("mouseup",A.q(r.gco()))
o.a(p.window).addEventListener("mousemove",A.q(r.gcm()))
a.addEventListener("click",A.q(r.gcb()))
r.aA()
return r},
ds:function ds(){var _=this
_.a=-1
_.f=_.e=_.b=0},
cU:function cU(a,b,c,d,e){var _=this
_.d=_.c=1
_.e=a
_.f=b
_.r=c
_.w=d
_.x=e
_.y=0
_.z=null},
fx(a,b,c,d,e,f,g){return A.kS(a,b,c,d,e,f,g,g)},
kS(a,b,c,d,e,f,g,h){var s=0,r=A.fj(h),q,p,o,n,m,l,k
var $async$fx=A.fm(function(i,j){if(i===1)return A.fb(j,r)
while(true)switch(s){case 0:b.b=!1
p=new A.ae(a)
B.a.t(b.c,p)
o=new A.C($.x,g.h("C<0>"))
n=new A.aU(o,g.h("aU<0>"))
m=t.m.a(new v.G.XMLHttpRequest())
l=new A.fE(p)
k=new A.fC(a,m,p,d,n,c)
m.open("GET",a)
m.responseType=f
m.addEventListener("progress",A.q(l))
m.addEventListener("loadstart",A.q(l))
m.addEventListener("loadend",A.q(l))
m.addEventListener("load",A.q(new A.fD(m,e,new A.fB(n,p,g),k)))
m.addEventListener("error",A.q(k))
m.addEventListener("abort",A.q(k))
m.send()
q=o
s=1
break
case 1:return A.fc(q,r)}})
return A.fd($async$fx,r)},
fE:function fE(a){this.a=a},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fD:function fD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hg(a,b){return A.kT(a,b)},
kT(a,b){var s=0,r=A.fj(t.z),q,p
var $async$hg=A.fm(function(c,d){if(c===1)return A.fb(d,r)
while(true)switch(s){case 0:p={}
p.a=null
q=A.fx(a,b,null,new A.fz(p),new A.fA(p),"blob",t.z)
s=1
break
case 1:return A.fc(q,r)}})
return A.fd($async$hg,r)},
fz:function fz(a){this.a=a},
fA:function fA(a){this.a=a},
fy:function fy(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
em:function em(a,b){this.a=a
this.b=b},
el:function el(a,b){this.a=a
this.b=b},
ae:function ae(a){var _=this
_.a=a
_.c=_.b=0
_.d=!1},
ea:function ea(a){this.b=!0
this.c=a},
ec:function ec(){},
ed:function ed(){},
eb:function eb(){},
k0(a){A.dv(a,B.c8)},
k_(a){A.dv(a,B.a0)},
kv(a){A.dv(a,B.c7)},
k1(){if($.a8.length===0)return""
return"["+B.a.aL($.a8,"::")+"]"},
dv(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a.length
if(b===0){b=$.a8.length
if(b!==0){if(0>=b)return A.h($.a8,-1)
$.a8.pop()}return}s=A.r([],t.s)
if(0>=b)return A.h(a,0)
r=a[0]
q=null
if(typeof r=="string"){p=A.hH("^\\[([^\\]]+)\\]")
for(;o=p.bn(r),o!=null;){n=o.b
if(1>=n.length)return A.h(n,1)
m=n[1]
m.toString
B.a.t(s,m)
r=B.h.bL(r,n.index+n[0].length)}l=A.hH("^\\s*(::)\\s*(.*)").bn(r)
k=l!=null&&s.length!==0
if(k){q=A.j9($.a8,t.N)
n=l.b
if(2>=n.length)return A.h(n,2)
n=n[2]
n.toString
j=n}else j=r
i=B.a.bK(a,1)}else{i=a
k=!1
j=""}n=s.length
if(n!==0){for(h=0;m=s.length,h<m;s.length===n||(0,A.ap)(s),++h){g=s[h]
if($.a8.length===0||!J.Q(B.a.gd5($.a8),g))B.a.t($.a8,g)}n=m}if(n!==0&&B.h.bF(j).length===0&&i.length===0&&!k&&b===1&&typeof a[0]=="string")return
f=A.k1()
b=j.length===0
e=(!b||i.length!==0?f+" ":f)+j
b=!b
if(b&&i.length!==0)e+=" "
n=A.H(i)
n=new A.a2(i,n.h("N(1)").a(new A.fi()),n.h("a2<1,N>")).aL(0," ")
n=B.h.bF(e+n)
if(n.length!==0){d=[]
if(f.length!==0)d.push(f)
if(b)d.push(j)
for(b=i.length,h=0;h<i.length;i.length===b||(0,A.ap)(i),++h)d.push(A.kR(i[h]))
switch(a0.a){case 3:case 4:c="error"
break
case 2:c="warn"
break
case 1:c="info"
break
case 0:c="log"
break
default:c=null}A.cx(t.m.a(v.G.console),c,d,t.A)
if(a0===B.a0)throw A.f(A.dS("Critical Error!"))}if(k&&q!=null){B.a.E($.a8)
B.a.aC($.a8,q)}},
aE:function aE(a,b){this.a=a
this.b=b},
fi:function fi(){},
h_(a,b,c,d,e){var s,r,q,p
e.a(0)
s=a==null?0:a
r=b==null?0:b
q=c==null?0:c
p=d==null?0:d
return new A.d7(s,r,q,p,e.h("d7<0>"))},
d7:function d7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
jv(a){return B.a.aI(a,0,new A.et(),t.p)},
et:function et(){},
eG(a){return new A.eF(a)},
eF:function eF(a){this.a=a},
af:function af(a){this.a=a},
cT:function cT(a){this.a=a},
df:function df(a){this.a=a},
c5:function c5(a){this.a=a},
c6:function c6(a){this.a=a},
eN(a,b,c,d,e){var s=A.kw(new A.eO(c),t.m)
s=s==null?null:A.q(s)
if(s!=null)a.addEventListener(b,s,!1)
return new A.ca(a,b,s,!1,e.h("ca<0>"))},
kw(a,b){var s=$.x
if(s===B.d)return a
return s.cT(a,b)},
fQ:function fQ(a,b){this.a=a
this.$ti=b},
c9:function c9(){},
dj:function dj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ca:function ca(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
eO:function eO(a){this.a=a},
hm(a){return new A.cF(a,400,240,"ball")},
hn(a,b){var s=b==null,r=s?new A.dO():b
r=new A.aL(a,r,a===0?40:760,240,"blank")
r.r=s?r.gM():b
return r},
fR(a,b){var s,r=new A.dW(A.r([],t.eC),b)
if(0>=a.length)return A.h(a,0)
s=A.hn(0,a[0])
if(1>=a.length)return A.h(a,1)
r.a=t.dV.a(A.r([s,A.hn(1,a[1])],t.fn))
r.b=A.hm(-1)
return r},
iL(){var s,r=t.N
r=new A.cG(B.w,A.bP(r,t.Y),A.bP(r,t.gA))
r.bQ(new A.dz("#gameCanvas"))
s=r.ch
s===$&&A.a("canvas")
s.width=800
s.height=480
return r},
kV(){A.iL()},
bE:function bE(a,b){this.a=a
this.b=b},
aK:function aK(){},
ab:function ab(a,b,c){var _=this
_.d=0
_.a=a
_.b=b
_.c=c},
cF:function cF(a,b,c,d){var _=this
_.d=a
_.e=0
_.f=5
_.a=b
_.b=c
_.c=d},
aL:function aL(a,b,c,d,e){var _=this
_.d=a
_.f=_.e=0
_.r=b
_.a=c
_.b=d
_.c=e},
dO:function dO(){},
dW:function dW(a,b){var _=this
_.b=_.a=$
_.c=a
_.d=0
_.e=b},
dX:function dX(){},
cG:function cG(a,b,c){var _=this
_.cy=a
_.db=$
_.dx=1
_.dy=b
_.fr=c
_.a=$
_.c=_.b=!1
_.d=60
_.r=_.f=_.e=0
_.w=1
_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=$
_.cx=_.CW=0},
dQ:function dQ(a){this.a=a},
cP(a,b){var s,r,q,p,o,n
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=t.z,o=0;o<q;++o){n=s[o]
r=p.a(r[n])
if(r==null)return!1}return a instanceof t.g.a(r)},
ht(a){var s=a.a
return((B.b.O(B.c.ai(B.c.F(s[3],0,1)*255))&255)<<24|(B.b.O(B.c.ai(B.c.F(s[2],0,1)*255))&255)<<16|(B.b.O(B.c.ai(B.c.F(s[1],0,1)*255))&255)<<8|B.b.O(B.c.ai(B.c.F(s[0],0,1)*255))&255)>>>0},
cz(a,b,c){return c}},B={}
var w=[A,J,B]
var $={}
A.fV.prototype={}
J.bG.prototype={
D(a,b){return a===b},
gm(a){return A.bY(a)},
i(a){return"Instance of '"+A.ei(a)+"'"},
B(a,b){throw A.f(A.hD(a,t.o.a(b)))},
gA(a){return A.a9(A.h8(this))}}
J.cQ.prototype={
i(a){return String(a)},
gm(a){return a?519018:218159},
gA(a){return A.a9(t.y)},
$iw:1,
$iU:1}
J.bI.prototype={
D(a,b){return null==b},
i(a){return"null"},
gm(a){return 0},
B(a,b){return this.bM(a,t.o.a(b))},
$iw:1,
$iv:1}
J.bL.prototype={$il:1}
J.av.prototype={
gm(a){return 0},
gA(a){return B.bW},
i(a){return String(a)}}
J.d6.prototype={}
J.bj.prototype={}
J.ac.prototype={
i(a){var s=a[$.hi()]
if(s==null)return this.bN(a)
return"JavaScript function for "+J.aJ(s)},
$iaP:1}
J.ba.prototype={
gm(a){return 0},
i(a){return String(a)}}
J.bb.prototype={
gm(a){return 0},
i(a){return String(a)}}
J.y.prototype={
t(a,b){A.H(a).c.a(b)
a.$flags&1&&A.G(a,29)
a.push(b)},
dz(a,b){A.H(a).h("U(1)").a(b)
a.$flags&1&&A.G(a,16)
this.cG(a,b,!0)},
cG(a,b,c){var s,r,q,p,o
A.H(a).h("U(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!b.$1(p))s.push(p)
if(a.length!==r)throw A.f(A.M(a))}o=s.length
if(o===r)return
this.sj(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
aC(a,b){var s
A.H(a).h("e<1>").a(b)
a.$flags&1&&A.G(a,"addAll",2)
if(Array.isArray(b)){this.bW(a,b)
return}for(s=J.bs(b);s.n();)a.push(s.gp())},
bW(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.f(A.M(a))
for(r=0;r<s;++r)a.push(b[r])},
E(a){a.$flags&1&&A.G(a,"clear","clear")
a.length=0},
a4(a,b,c){var s=A.H(a)
return new A.a2(a,s.q(c).h("1(2)").a(b),s.h("@<1>").q(c).h("a2<1,2>"))},
aL(a,b){var s,r=A.S(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.l(r,s,A.n(a[s]))
return r.join(b)},
I(a,b){return A.es(a,b,null,A.H(a).c)},
aI(a,b,c,d){var s,r,q
d.a(b)
A.H(a).q(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.f(A.M(a))}return r},
C(a,b){if(!(b>=0&&b<a.length))return A.h(a,b)
return a[b]},
bK(a,b){var s=a.length
if(b>s)throw A.f(A.ag(b,0,s,"start",null))
if(b===s)return A.r([],A.H(a))
return A.r(a.slice(b,s),A.H(a))},
gd5(a){var s=a.length
if(s>0)return a[s-1]
throw A.f(A.fS())},
aX(a,b,c,d,e){var s,r,q,p,o
A.H(a).h("e<1>").a(d)
a.$flags&2&&A.G(a,5)
A.fZ(b,c,a.length)
s=c-b
if(s===0)return
A.ah(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.hl(d,e).bC(0,!1)
q=0}p=J.b0(r)
if(q+s>p.gj(r))throw A.f(A.j1())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.k(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.k(r,q+o)},
W(a,b,c,d){var s
A.H(a).h("1?").a(d)
a.$flags&2&&A.G(a,"fillRange")
A.fZ(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
cQ(a,b){var s,r
A.H(a).h("U(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.f(A.M(a))}return!1},
d_(a,b){var s,r
A.H(a).h("U(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.f(A.M(a))}return!0},
i(a){return A.fT(a,"[","]")},
gv(a){return new J.bt(a,a.length,A.H(a).h("bt<1>"))},
gm(a){return A.bY(a)},
gj(a){return a.length},
sj(a,b){a.$flags&1&&A.G(a,"set length","change the length of")
if(b<0)throw A.f(A.ag(b,0,null,"newLength",null))
if(b>a.length)A.H(a).c.a(null)
a.length=b},
k(a,b){if(!(b>=0&&b<a.length))throw A.f(A.fo(a,b))
return a[b]},
l(a,b,c){A.H(a).c.a(c)
a.$flags&2&&A.G(a)
if(!(b>=0&&b<a.length))throw A.f(A.fo(a,b))
a[b]=c},
gA(a){return A.a9(A.H(a))},
$ij:1,
$ie:1,
$im:1}
J.e5.prototype={}
J.bt.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.ap(q)
throw A.f(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iE:1}
J.bK.prototype={
aE(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.b.gaK(b)
if(this.gaK(a)===s)return 0
if(this.gaK(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaK(a){return a===0?1/a<0:a<0},
gb_(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
O(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.f(A.de(""+a+".toInt()"))},
d0(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.f(A.de(""+a+".floor()"))},
ai(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.f(A.de(""+a+".round()"))},
F(a,b,c){if(B.b.aE(b,c)>0)throw A.f(A.kx(b))
if(this.aE(a,b)<0)return b
if(this.aE(a,c)>0)return c
return a},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gm(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a5(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
L(a,b){return(a|0)===a?a/b|0:this.cN(a,b)},
cN(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.f(A.de("Result of truncating division is "+A.n(s)+": "+A.n(a)+" ~/ "+b))},
cL(a,b){var s
if(a>0)s=this.cK(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cK(a,b){return b>31?0:a>>>b},
gA(a){return A.a9(t.p)},
$io:1,
$iP:1}
J.b8.prototype={
gb_(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
gA(a){return A.a9(t.S)},
$iw:1,
$ic:1}
J.bJ.prototype={
gA(a){return A.a9(t.i)},
$iw:1}
J.b9.prototype={
bJ(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
b1(a,b,c){return a.substring(b,A.fZ(b,c,a.length))},
bL(a,b){return this.b1(a,b,null)},
bF(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.h(p,0)
if(p.charCodeAt(0)===133){s=J.j3(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.h(p,r)
q=p.charCodeAt(r)===133?J.j4(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
bH(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.f(B.a9)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bv(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bH(c,s)+a},
i(a){return a},
gm(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gA(a){return A.a9(t.N)},
gj(a){return a.length},
$iw:1,
$ieh:1,
$iN:1}
A.aB.prototype={
gv(a){return new A.bv(J.bs(this.gU()),A.z(this).h("bv<1,2>"))},
gj(a){return J.ar(this.gU())},
I(a,b){var s=A.z(this)
return A.iO(J.hl(this.gU(),b),s.c,s.y[1])},
C(a,b){return A.z(this).y[1].a(J.fM(this.gU(),b))},
i(a){return J.aJ(this.gU())}}
A.bv.prototype={
n(){return this.a.n()},
gp(){return this.$ti.y[1].a(this.a.gp())},
$iE:1}
A.aM.prototype={
gU(){return this.a}}
A.c8.prototype={$ij:1}
A.c7.prototype={
k(a,b){return this.$ti.y[1].a(J.fK(this.a,b))},
$ij:1,
$im:1}
A.bw.prototype={
gU(){return this.a}}
A.bc.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.en.prototype={}
A.j.prototype={}
A.R.prototype={
gv(a){var s=this
return new A.aR(s,s.gj(s),A.z(s).h("aR<R.E>"))},
aL(a,b){var s,r,q,p=this,o=p.gj(p)
if(b.length!==0){if(o===0)return""
s=A.n(p.C(0,0))
if(o!==p.gj(p))throw A.f(A.M(p))
for(r=s,q=1;q<o;++q){r=r+b+A.n(p.C(0,q))
if(o!==p.gj(p))throw A.f(A.M(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.n(p.C(0,q))
if(o!==p.gj(p))throw A.f(A.M(p))}return r.charCodeAt(0)==0?r:r}},
a4(a,b,c){var s=A.z(this)
return new A.a2(this,s.q(c).h("1(R.E)").a(b),s.h("@<R.E>").q(c).h("a2<1,2>"))},
I(a,b){return A.es(this,b,null,A.z(this).h("R.E"))}}
A.c2.prototype={
gc6(){var s=J.ar(this.a),r=this.c
if(r==null||r>s)return s
return r},
gcM(){var s=J.ar(this.a),r=this.b
if(r>s)return s
return r},
gj(a){var s,r=J.ar(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
C(a,b){var s=this,r=s.gcM()+b
if(b<0||r>=s.gc6())throw A.f(A.e1(b,s.gj(0),s,null,"index"))
return J.fM(s.a,r)},
I(a,b){var s,r,q=this
A.ah(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.aN(q.$ti.h("aN<1>"))
return A.es(q.a,s,r,q.$ti.c)},
bC(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.b0(n),l=m.gj(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=J.hy(0,p.$ti.c)
return n}r=A.S(s,m.C(n,o),!1,p.$ti.c)
for(q=1;q<s;++q){B.a.l(r,q,m.C(n,o+q))
if(m.gj(n)<l)throw A.f(A.M(p))}return r}}
A.aR.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=J.b0(q),o=p.gj(q)
if(r.b!==o)throw A.f(A.M(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.C(q,s);++r.c
return!0},
$iE:1}
A.aS.prototype={
gv(a){var s=this.a
return new A.bS(s.gv(s),this.b,A.z(this).h("bS<1,2>"))},
gj(a){var s=this.a
return s.gj(s)},
C(a,b){var s=this.a
return this.b.$1(s.C(s,b))}}
A.bB.prototype={$ij:1}
A.bS.prototype={
n(){var s=this,r=s.b
if(r.n()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iE:1}
A.a2.prototype={
gj(a){return J.ar(this.a)},
C(a,b){return this.b.$1(J.fM(this.a,b))}}
A.ai.prototype={
I(a,b){A.dH(b,"count",t.S)
A.ah(b,"count")
return new A.ai(this.a,this.b+b,A.z(this).h("ai<1>"))},
gv(a){var s=this.a
return new A.bZ(s.gv(s),this.b,A.z(this).h("bZ<1>"))}}
A.b6.prototype={
gj(a){var s=this.a,r=s.gj(s)-this.b
if(r>=0)return r
return 0},
I(a,b){A.dH(b,"count",t.S)
A.ah(b,"count")
return new A.b6(this.a,this.b+b,this.$ti)},
$ij:1}
A.bZ.prototype={
n(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.n()
this.b=0
return s.n()},
gp(){return this.a.gp()},
$iE:1}
A.aN.prototype={
gv(a){return B.a2},
gj(a){return 0},
C(a,b){throw A.f(A.ag(b,0,0,"index",null))},
a4(a,b,c){this.$ti.q(c).h("1(2)").a(b)
return new A.aN(c.h("aN<0>"))},
I(a,b){A.ah(b,"count")
return this}}
A.bC.prototype={
n(){return!1},
gp(){throw A.f(A.fS())},
$iE:1}
A.O.prototype={}
A.az.prototype={
gm(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.h.gm(this.a)&536870911
this._hashCode=s
return s},
i(a){return'Symbol("'+this.a+'")'},
D(a,b){if(b==null)return!1
return b instanceof A.az&&this.a===b.a},
$ibi:1}
A.cu.prototype={}
A.by.prototype={}
A.b5.prototype={
gbp(a){return this.gj(this)!==0},
i(a){return A.ee(this)},
gaH(){return new A.bk(this.cZ(),A.z(this).h("bk<a1<1,2>>"))},
cZ(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gaH(a,b,c){if(b===1){p.push(c)
r=q}while(true)switch(r){case 0:o=s.gR(),o=o.gv(o),n=A.z(s),m=n.y[1],n=n.h("a1<1,2>")
case 2:if(!o.n()){r=3
break}l=o.gp()
k=s.k(0,l)
r=4
return a.b=new A.a1(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$iT:1}
A.bz.prototype={
gj(a){return this.b.length},
gba(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
aG(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
k(a,b){if(!this.aG(b))return null
return this.b[this.a[b]]},
G(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gba()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gR(){return new A.cf(this.gba(),this.$ti.h("cf<1>"))}}
A.cf.prototype={
gj(a){return this.a.length},
gv(a){var s=this.a
return new A.cg(s,s.length,this.$ti.h("cg<1>"))}}
A.cg.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iE:1}
A.bF.prototype={
aa(){var s=this,r=s.$map
if(r==null){r=new A.bM(s.$ti.h("bM<1,2>"))
A.ik(s.a,r)
s.$map=r}return r},
k(a,b){return this.aa().k(0,b)},
G(a,b){this.$ti.h("~(1,2)").a(b)
this.aa().G(0,b)},
gR(){var s=this.aa()
return new A.ad(s,A.z(s).h("ad<1>"))},
gj(a){return this.aa().a}}
A.bH.prototype={
gdg(){var s=this.a
if(s instanceof A.az)return s
return this.a=new A.az(A.I(s))},
gbA(){var s,r,q,p,o,n=this
if(n.c===1)return B.R
s=n.d
r=J.b0(s)
q=r.gj(s)-J.ar(n.e)-n.f
if(q===0)return B.R
p=[]
for(o=0;o<q;++o)p.push(r.k(s,o))
p.$flags=3
return p},
gbr(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return B.U
s=k.e
r=J.b0(s)
q=r.gj(s)
p=k.d
o=J.b0(p)
n=o.gj(p)-q-k.f
if(q===0)return B.U
m=new A.a0(t.eo)
for(l=0;l<q;++l)m.l(0,new A.az(A.I(r.k(s,l))),o.k(p,n+l))
return new A.by(m,t.r)},
$ihx:1}
A.ez.prototype={
H(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.bX.prototype={
i(a){return"Null check operator used on a null value"}}
A.cS.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.dd.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.d3.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iaO:1}
A.bD.prototype={}
A.cm.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iay:1}
A.as.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ir(r==null?"unknown":r)+"'"},
gA(a){var s=A.hc(this)
return A.a9(s==null?A.aG(this):s)},
$iaP:1,
gdL(){return this},
$C:"$1",
$R:1,
$D:null}
A.cI.prototype={$C:"$0",$R:0}
A.cJ.prototype={$C:"$2",$R:2}
A.db.prototype={}
A.da.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ir(s)+"'"}}
A.b3.prototype={
D(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.b3))return!1
return this.$_target===b.$_target&&this.a===b.a},
gm(a){return(A.fG(this.a)^A.bY(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ei(this.a)+"'")}}
A.d8.prototype={
i(a){return"RuntimeError: "+this.a}}
A.a0.prototype={
gj(a){return this.a},
gR(){return new A.ad(this,A.z(this).h("ad<1>"))},
k(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.d3(b)},
d3(a){var s,r,q=this.d
if(q==null)return null
s=q[this.ae(a)]
r=this.af(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q,p,o,n,m=this,l=A.z(m)
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.b2(s==null?m.b=m.ar():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.b2(r==null?m.c=m.ar():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.ar()
p=m.ae(b)
o=q[p]
if(o==null)q[p]=[m.au(b,c)]
else{n=m.af(o,b)
if(n>=0)o[n].b=c
else o.push(m.au(b,c))}}},
aR(a,b){var s=this.d4(b)
return s},
d4(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ae(a)
r=n[s]
q=o.af(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.cO(p)
if(r.length===0)delete n[s]
return p.b},
E(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aq()}},
G(a,b){var s,r,q=this
A.z(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.f(A.M(q))
s=s.c}},
b2(a,b,c){var s,r=A.z(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.au(b,c)
else s.b=c},
aq(){this.r=this.r+1&1073741823},
au(a,b){var s=this,r=A.z(s),q=new A.e9(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.aq()
return q},
cO(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.aq()},
ae(a){return J.b2(a)&1073741823},
af(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Q(a[r].a,b))return r
return-1},
i(a){return A.ee(this)},
ar(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ifX:1}
A.e9.prototype={}
A.ad.prototype={
gj(a){return this.a.a},
gv(a){var s=this.a
return new A.bO(s,s.r,s.e,this.$ti.h("bO<1>"))}}
A.bO.prototype={
gp(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.f(A.M(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iE:1}
A.aQ.prototype={
gj(a){return this.a.a},
gv(a){var s=this.a
return new A.bN(s,s.r,s.e,this.$ti.h("bN<1,2>"))}}
A.bN.prototype={
gp(){var s=this.d
s.toString
return s},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.f(A.M(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.a1(s.a,s.b,r.$ti.h("a1<1,2>"))
r.c=s.c
return!0}},
$iE:1}
A.bM.prototype={
ae(a){return A.kB(a)&1073741823},
af(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Q(a[r].a,b))return r
return-1}}
A.fs.prototype={
$1(a){return this.a(a)},
$S:11}
A.ft.prototype={
$2(a,b){return this.a(a,b)},
$S:31}
A.fu.prototype={
$1(a){return this.a(A.I(a))},
$S:24}
A.cR.prototype={
i(a){return"RegExp/"+this.a+"/"+this.b.flags},
bn(a){var s=this.b.exec(a)
if(s==null)return null
return new A.f1(s)},
$ieh:1,
$ijq:1}
A.f1.prototype={}
A.eL.prototype={
u(){var s=this.b
if(s===this)throw A.f(A.A(this.a))
return s}}
A.a6.prototype={
gA(a){return B.bP},
ad(a,b,c){A.fg(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
bi(a){return this.ad(a,0,null)},
cS(a,b,c){var s
A.fg(a,b,c)
s=new DataView(a,b)
return s},
bh(a){return this.cS(a,0,null)},
$iw:1,
$ia6:1,
$icH:1}
A.bV.prototype={
ga2(a){if(((a.$flags|0)&2)!==0)return new A.du(a.buffer)
else return a.buffer}}
A.du.prototype={
ad(a,b,c){var s=A.jd(this.a,b,c)
s.$flags=3
return s},
bi(a){return this.ad(0,0,null)},
bh(a){var s=A.jc(this.a,0,null)
s.$flags=3
return s},
$icH:1}
A.cV.prototype={
gA(a){return B.bQ},
$iw:1,
$ifP:1}
A.be.prototype={
gj(a){return a.length},
$iW:1}
A.bT.prototype={
k(a,b){A.aY(b,a,a.length)
return a[b]},
$ij:1,
$ie:1,
$im:1}
A.bU.prototype={$ij:1,$ie:1,$im:1}
A.aT.prototype={
gA(a){return B.bR},
$iw:1,
$iaT:1,
$idT:1}
A.cW.prototype={
gA(a){return B.bS},
$iw:1,
$idU:1}
A.cX.prototype={
gA(a){return B.bT},
k(a,b){A.aY(b,a,a.length)
return a[b]},
$iw:1,
$ie2:1}
A.cY.prototype={
gA(a){return B.bU},
k(a,b){A.aY(b,a,a.length)
return a[b]},
$iw:1,
$ie3:1}
A.cZ.prototype={
gA(a){return B.bV},
k(a,b){A.aY(b,a,a.length)
return a[b]},
$iw:1,
$ie4:1}
A.bW.prototype={
gA(a){return B.bY},
k(a,b){A.aY(b,a,a.length)
return a[b]},
$iw:1,
$ieB:1}
A.d_.prototype={
gA(a){return B.bZ},
k(a,b){A.aY(b,a,a.length)
return a[b]},
$iw:1,
$ieC:1}
A.ax.prototype={
gA(a){return B.c_},
gj(a){return a.length},
k(a,b){A.aY(b,a,a.length)
return a[b]},
$iw:1,
$iax:1,
$ieD:1}
A.d0.prototype={
gA(a){return B.c0},
gj(a){return a.length},
k(a,b){A.aY(b,a,a.length)
return a[b]},
$iw:1,
$ieE:1}
A.ci.prototype={}
A.cj.prototype={}
A.ck.prototype={}
A.cl.prototype={}
A.a3.prototype={
h(a){return A.f7(v.typeUniverse,this,a)},
q(a){return A.jP(v.typeUniverse,this,a)}}
A.dm.prototype={}
A.dt.prototype={
i(a){return A.X(this.a,null)}}
A.dk.prototype={
i(a){return this.a}}
A.co.prototype={$iak:1}
A.eI.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:5}
A.eH.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:32}
A.eJ.prototype={
$0(){this.a.$0()},
$S:3}
A.eK.prototype={
$0(){this.a.$0()},
$S:3}
A.f4.prototype={
bV(a,b){if(self.setTimeout!=null)self.setTimeout(A.cy(new A.f5(this,b),0),a)
else throw A.f(A.de("`setTimeout()` not found."))}}
A.f5.prototype={
$0(){this.b.$0()},
$S:1}
A.dg.prototype={
a3(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.b3(a)
else{s=r.a
if(q.h("a5<1>").b(a))s.b4(a)
else s.b5(a)}},
aF(a,b){var s=this.a
if(this.b)s.a8(new A.V(a,b))
else s.am(new A.V(a,b))}}
A.fe.prototype={
$1(a){return this.a.$2(0,a)},
$S:8}
A.ff.prototype={
$2(a,b){this.a.$2(1,new A.bD(a,t.l.a(b)))},
$S:23}
A.fn.prototype={
$2(a,b){this.a(A.d(a),b)},
$S:16}
A.cn.prototype={
gp(){var s=this.b
return s==null?this.$ti.c.a(s):s},
cH(a,b){var s,r,q
a=A.d(a)
b=b
s=this.a
for(;!0;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
n(){var s,r,q,p,o=this,n=null,m=0
for(;!0;){s=o.d
if(s!=null)try{if(s.n()){o.b=s.gp()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.cH(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.hV
return!1}if(0>=p.length)return A.h(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.hV
throw n
return!1}if(0>=p.length)return A.h(p,-1)
o.a=p.pop()
m=1
continue}throw A.f(A.h1("sync*"))}return!1},
bf(a){var s,r,q=this
if(a instanceof A.bk){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.t(r,q.a)
q.a=s
return 2}else{q.d=J.bs(a)
return 2}},
$iE:1}
A.bk.prototype={
gv(a){return new A.cn(this.a(),this.$ti.h("cn<1>"))}}
A.V.prototype={
i(a){return A.n(this.a)},
$iB:1,
gY(){return this.b}}
A.dV.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.an(null)}else{s=null
try{s=l.$0()}catch(p){r=A.aq(p)
q=A.aF(p)
l=r
o=q
n=A.i7(l,o)
l=new A.V(l,o)
m.b.a8(l)
return}m.b.an(s)}},
$S:1}
A.di.prototype={
aF(a,b){var s=this.a
if((s.a&30)!==0)throw A.f(A.h1("Future already completed"))
s.am(A.k9(a,b))},
bk(a){return this.aF(a,null)}}
A.aU.prototype={
a3(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.f(A.h1("Future already completed"))
s.b3(r.h("1/").a(a))}}
A.am.prototype={
df(a){if((this.c&15)!==6)return!0
return this.b.b.aS(t.bN.a(this.d),a.a,t.y,t.K)},
d1(a){var s,r=this,q=r.e,p=null,o=t.A,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.dD(q,m,a.b,o,n,t.l)
else p=l.aS(t.w.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.aq(s))){if((r.c&1)!==0)throw A.f(A.dG("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.f(A.dG("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.C.prototype={
aj(a,b,c){var s,r,q,p=this.$ti
p.q(c).h("1/(2)").a(a)
s=$.x
if(s===B.d){if(b!=null&&!t.Q.b(b)&&!t.w.b(b))throw A.f(A.fN(b,"onError",u.c))}else{c.h("@<0/>").q(p.c).h("1(2)").a(a)
if(b!=null)b=A.ic(b,s)}r=new A.C(s,c.h("C<0>"))
q=b==null?1:3
this.a6(new A.am(r,q,a,b,p.h("@<1>").q(c).h("am<1,2>")))
return r},
dG(a,b){a.toString
return this.aj(a,null,b)},
bd(a,b,c){var s,r=this.$ti
r.q(c).h("1/(2)").a(a)
s=new A.C($.x,c.h("C<0>"))
this.a6(new A.am(s,19,a,b,r.h("@<1>").q(c).h("am<1,2>")))
return s},
cJ(a){this.a=this.a&1|16
this.c=a},
a7(a){this.a=a.a&30|this.a&1
this.c=a.c},
a6(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.a6(a)
return}r.a7(s)}A.dw(null,null,r.b,t.M.a(new A.eP(r,a)))}},
bc(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.bc(a)
return}m.a7(n)}l.a=m.ac(a)
A.dw(null,null,m.b,t.M.a(new A.eU(l,m)))}},
a_(){var s=t.F.a(this.c)
this.c=null
return this.ac(s)},
ac(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
an(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("a5<1>").b(a))A.eS(a,r,!0)
else{s=r.a_()
q.c.a(a)
r.a=8
r.c=a
A.aV(r,s)}},
b5(a){var s,r=this
r.$ti.c.a(a)
s=r.a_()
r.a=8
r.c=a
A.aV(r,s)},
c_(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.a_()
q.a7(a)
A.aV(q,r)},
a8(a){var s=this.a_()
this.cJ(a)
A.aV(this,s)},
b3(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("a5<1>").b(a)){this.b4(a)
return}this.bZ(a)},
bZ(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.dw(null,null,s.b,t.M.a(new A.eR(s,a)))},
b4(a){A.eS(this.$ti.h("a5<1>").a(a),this,!1)
return},
am(a){this.a^=2
A.dw(null,null,this.b,t.M.a(new A.eQ(this,a)))},
$ia5:1}
A.eP.prototype={
$0(){A.aV(this.a,this.b)},
$S:1}
A.eU.prototype={
$0(){A.aV(this.b,this.a.a)},
$S:1}
A.eT.prototype={
$0(){A.eS(this.a.a,this.b,!0)},
$S:1}
A.eR.prototype={
$0(){this.a.b5(this.b)},
$S:1}
A.eQ.prototype={
$0(){this.a.a8(this.b)},
$S:1}
A.eX.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.dC(t.fO.a(q.d),t.A)}catch(p){s=A.aq(p)
r=A.aF(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.fO(q)
n=k.a
n.c=new A.V(q,o)
q=n}q.b=!0
return}if(j instanceof A.C&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.C){m=k.b.a
l=new A.C(m.b,m.$ti)
j.aj(new A.eY(l,m),new A.eZ(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:1}
A.eY.prototype={
$1(a){this.a.c_(this.b)},
$S:5}
A.eZ.prototype={
$2(a,b){t.K.a(a)
t.l.a(b)
this.a.a8(new A.V(a,b))},
$S:14}
A.eW.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.aS(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.aq(l)
r=A.aF(l)
q=s
p=r
if(p==null)p=A.fO(q)
o=this.a
o.c=new A.V(q,p)
o.b=!0}},
$S:1}
A.eV.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.df(s)&&p.a.e!=null){p.c=p.a.d1(s)
p.b=!1}}catch(o){r=A.aq(o)
q=A.aF(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.fO(p)
m=l.b
m.c=new A.V(p,n)
p=m}p.b=!0}},
$S:1}
A.dh.prototype={}
A.c0.prototype={
gj(a){var s,r,q=this,p={},o=new A.C($.x,t.fJ)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new A.eq(p,q))
t.g5.a(new A.er(p,o))
A.eN(q.a,q.b,r,!1,s.c)
return o}}
A.eq.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
A.er.prototype={
$0(){this.b.an(this.a.a)},
$S:1}
A.dq.prototype={}
A.ct.prototype={$ihN:1}
A.fl.prototype={
$0(){A.iW(this.a,this.b)},
$S:1}
A.dp.prototype={
dE(a){var s,r,q
t.M.a(a)
try{if(B.d===$.x){a.$0()
return}A.id(null,null,this,a,t.H)}catch(q){s=A.aq(q)
r=A.aF(q)
A.fk(t.K.a(s),t.l.a(r))}},
dF(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.d===$.x){a.$1(b)
return}A.ie(null,null,this,a,b,t.H,c)}catch(q){s=A.aq(q)
r=A.aF(q)
A.fk(t.K.a(s),t.l.a(r))}},
bj(a){return new A.f2(this,t.M.a(a))},
cT(a,b){return new A.f3(this,b.h("~(0)").a(a),b)},
dC(a,b){b.h("0()").a(a)
if($.x===B.d)return a.$0()
return A.id(null,null,this,a,b)},
aS(a,b,c,d){c.h("@<0>").q(d).h("1(2)").a(a)
d.a(b)
if($.x===B.d)return a.$1(b)
return A.ie(null,null,this,a,b,c,d)},
dD(a,b,c,d,e,f){d.h("@<0>").q(e).q(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.x===B.d)return a.$2(b,c)
return A.kn(null,null,this,a,b,c,d,e,f)},
bB(a,b,c,d){return b.h("@<0>").q(c).q(d).h("1(2,3)").a(a)}}
A.f2.prototype={
$0(){return this.a.dE(this.b)},
$S:1}
A.f3.prototype={
$1(a){var s=this.c
return this.a.dF(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.aW.prototype={
gj(a){return this.a},
gR(){return new A.cb(this,A.z(this).h("cb<1>"))},
aG(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.c2(a)},
c2(a){var s=this.d
if(s==null)return!1
return this.Z(this.b8(s,a),a)>=0},
k(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.h4(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.h4(q,b)
return r}else return this.c7(b)},
c7(a){var s,r,q=this.d
if(q==null)return null
s=this.b8(q,a)
r=this.Z(s,a)
return r<0?null:s[r+1]},
l(a,b,c){var s,r=this,q=A.z(r)
q.c.a(b)
q.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=r.b
r.bX(s==null?r.b=A.hP():s,b,c)}else r.cI(b,c)},
cI(a,b){var s,r,q,p,o=this,n=A.z(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=A.hP()
r=o.a9(a)
q=s[r]
if(q==null){A.h5(s,r,[a,b]);++o.a
o.e=null}else{p=o.Z(q,a)
if(p>=0)q[p+1]=b
else{q.push(a,b);++o.a
o.e=null}}},
aR(a,b){var s
if(b!=="__proto__")return this.cF(this.b,b)
else{s=this.cE(b)
return s}},
cE(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.a9(a)
r=n[s]
q=o.Z(r,a)
if(q<0)return null;--o.a
o.e=null
p=r.splice(q,2)[1]
if(0===r.length)delete n[s]
return p},
G(a,b){var s,r,q,p,o,n,m=this,l=A.z(m)
l.h("~(1,2)").a(b)
s=m.b6()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.k(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.f(A.M(m))}},
b6(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.S(i.a,null,!1,t.A)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;j+=2){h[r]=l[j];++r}}}return i.e=h},
bX(a,b,c){var s=A.z(this)
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.h5(a,b,c)},
cF(a,b){var s
if(a!=null&&a[b]!=null){s=A.z(this).y[1].a(A.h4(a,b))
delete a[b];--this.a
this.e=null
return s}else return null},
a9(a){return J.b2(a)&1073741823},
b8(a,b){return a[this.a9(b)]},
Z(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.Q(a[r],b))return r
return-1},
$ihv:1}
A.cd.prototype={
a9(a){return A.fG(a)&1073741823},
Z(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.cb.prototype={
gj(a){return this.a.a},
gv(a){var s=this.a
return new A.cc(s,s.b6(),this.$ti.h("cc<1>"))}}
A.cc.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.f(A.M(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iE:1}
A.t.prototype={
gv(a){return new A.aR(a,this.gj(a),A.aG(a).h("aR<t.E>"))},
C(a,b){return this.k(a,b)},
a4(a,b,c){var s=A.aG(a)
return new A.a2(a,s.q(c).h("1(t.E)").a(b),s.h("@<t.E>").q(c).h("a2<1,2>"))},
I(a,b){return A.es(a,b,null,A.aG(a).h("t.E"))},
i(a){return A.fT(a,"[","]")}}
A.aw.prototype={
G(a,b){var s,r,q,p=A.z(this)
p.h("~(1,2)").a(b)
for(s=this.gR(),s=s.gv(s),p=p.y[1];s.n();){r=s.gp()
q=this.k(0,r)
b.$2(r,q==null?p.a(q):q)}},
gj(a){var s=this.gR()
return s.gj(s)},
i(a){return A.ee(this)},
$iT:1}
A.ef.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.n(a)
r.a=(r.a+=s)+": "
s=A.n(b)
r.a+=s},
$S:33}
A.cs.prototype={}
A.bd.prototype={
k(a,b){return this.a.k(0,b)},
G(a,b){this.a.G(0,this.$ti.h("~(1,2)").a(b))},
gbp(a){return this.a.a!==0},
gj(a){return this.a.a},
gR(){var s=this.a
return new A.ad(s,s.$ti.h("ad<1>"))},
i(a){return A.ee(this.a)},
gaH(){var s=this.a
return new A.aQ(s,s.$ti.h("aQ<1,2>"))},
$iT:1}
A.c3.prototype={}
A.bQ.prototype={
gv(a){var s=this
return new A.ch(s,s.c,s.d,s.b,s.$ti.h("ch<1>"))},
gj(a){return(this.c-this.b&this.a.length-1)>>>0},
C(a,b){var s,r,q=this,p=q.gj(0)
if(0>b||b>=p)A.p(A.e1(b,p,q,null,"index"))
p=q.a
s=p.length
r=(q.b+b&s-1)>>>0
if(!(r>=0&&r<s))return A.h(p,r)
r=p[r]
return r==null?q.$ti.c.a(r):r},
i(a){return A.fT(this,"{","}")},
$ijn:1}
A.ch.prototype={
gp(){var s=this.e
return s==null?this.$ti.c.a(s):s},
n(){var s,r,q=this,p=q.a
if(q.c!==p.d)A.p(A.M(p))
s=q.d
if(s===q.b){q.e=null
return!1}p=p.a
r=p.length
if(!(s<r))return A.h(p,s)
q.e=p[s]
q.d=(s+1&r-1)>>>0
return!0},
$iE:1}
A.bl.prototype={}
A.eg.prototype={
$2(a,b){var s,r,q
t.fo.a(a)
s=this.b
r=this.a
q=(s.a+=r.a)+a.a
s.a=q
s.a=q+": "
q=A.b7(b)
s.a+=q
r.a=", "},
$S:12}
A.at.prototype={
bl(a){return A.dR(this.b-a.b,this.a-a.a)},
D(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.at)if(this.a===b.a)s=this.b===b.b
return s},
gm(a){return A.hE(this.a,this.b,B.k,B.k)},
i(a){var s=this,r=A.iU(A.jl(s)),q=A.cL(A.jj(s)),p=A.cL(A.jf(s)),o=A.cL(A.jg(s)),n=A.cL(A.ji(s)),m=A.cL(A.jk(s)),l=A.hu(A.jh(s)),k=s.b,j=k===0?"":A.hu(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j}}
A.bA.prototype={
D(a,b){if(b==null)return!1
return b instanceof A.bA&&this.a===b.a},
gm(a){return B.b.gm(this.a)},
i(a){var s,r,q,p,o,n=this.a,m=B.b.L(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.b.L(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.b.L(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.h.bv(B.b.i(n%1e6),6,"0")}}
A.eM.prototype={
i(a){return this.K()}}
A.B.prototype={
gY(){return A.je(this)}}
A.cC.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.b7(s)
return"Assertion failed"}}
A.ak.prototype={}
A.a4.prototype={
gap(){return"Invalid argument"+(!this.a?"(s)":"")},
gao(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.n(p),n=s.gap()+q+o
if(!s.a)return n
return n+s.gao()+": "+A.b7(s.gaJ())},
gaJ(){return this.b},
gaP(){return this.c}}
A.bg.prototype={
gaJ(){return A.i1(this.b)},
gap(){return"RangeError"},
gao(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.cO.prototype={
gaJ(){return A.d(this.b)},
gap(){return"RangeError"},
gao(){if(A.d(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.d1.prototype={
i(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new A.c1("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=A.b7(n)
p=i.a+=p
j.a=", "}k.d.G(0,new A.eg(j,i))
m=A.b7(k.a)
l=i.i(0)
return"NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"}}
A.c4.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.dc.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bh.prototype={
i(a){return"Bad state: "+this.a}}
A.cK.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.b7(s)+"."}}
A.d5.prototype={
i(a){return"Out of Memory"},
gY(){return null},
$iB:1}
A.c_.prototype={
i(a){return"Stack Overflow"},
gY(){return null},
$iB:1}
A.dl.prototype={
i(a){return"Exception: "+this.a},
$iaO:1}
A.cM.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.h.b1(q,0,75)+"..."
return r+"\n"+q},
$iaO:1}
A.e.prototype={
a4(a,b,c){var s=A.z(this)
return A.ja(this,s.q(c).h("1(e.E)").a(b),s.h("e.E"),c)},
bC(a,b){var s=A.fY(this,A.z(this).h("e.E"))
s.$flags=1
return s},
gj(a){var s,r=this.gv(this)
for(s=0;r.n();)++s
return s},
I(a,b){return A.js(this,b,A.z(this).h("e.E"))},
C(a,b){var s,r
A.ah(b,"index")
s=this.gv(this)
for(r=b;s.n();){if(r===0)return s.gp();--r}throw A.f(A.e1(b,b-r,this,null,"index"))},
i(a){return A.j2(this,"(",")")}}
A.a1.prototype={
i(a){return"MapEntry("+A.n(this.a)+": "+A.n(this.b)+")"}}
A.v.prototype={
gm(a){return A.k.prototype.gm.call(this,0)},
i(a){return"null"}}
A.k.prototype={$ik:1,
D(a,b){return this===b},
gm(a){return A.bY(this)},
i(a){return"Instance of '"+A.ei(this)+"'"},
B(a,b){throw A.f(A.hD(this,t.o.a(b)))},
gA(a){return A.il(this)},
toString(){return this.i(this)},
$0(){return this.B(this,A.Z("call","$0",0,[],[],0))},
$1(a){return this.B(this,A.Z("call","$1",0,[a],[],0))},
$2(a,b){return this.B(this,A.Z("call","$2",0,[a,b],[],0))},
$3(a,b,c){return this.B(this,A.Z("call","$3",0,[a,b,c],[],0))},
$4(a,b,c,d){return this.B(this,A.Z("call","$4",0,[a,b,c,d],[],0))},
$1$1(a,b){return this.B(this,A.Z("call","$1$1",0,[a,b],[],1))},
$6$colors$height$width$x$y(a,b,c,d,e,f){return this.B(this,A.Z("call","$6$colors$height$width$x$y",0,[a,b,c,d,e,f],["colors","height","width","x","y"],0))},
$2$menuSound(a,b){return this.B(this,A.Z("call","$2$menuSound",0,[a,b],["menuSound"],0))},
$1$growable(a){return this.B(this,A.Z("call","$1$growable",0,[a],["growable"],0))},
bo(){return this.B(this,A.Z("isA","bo",0,[],[],0))},
bf(a){return this.B(this,A.Z("_yieldStar","bf",0,[a],[],0))},
gj(a){return this.B(a,A.Z("length","gj",1,[],[],0))},
gaP(){return this.B(this,A.Z("name","gaP",1,[],[],0))}}
A.dr.prototype={
i(a){return""},
$iay:1}
A.c1.prototype={
gj(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.fw.prototype={
$1(a){var s,r,q,p
if(A.ib(a))return a
s=this.a
if(s.aG(a))return s.k(0,a)
if(t.f.b(a)){r={}
s.l(0,a,r)
for(s=a.gR(),s=s.gv(s);s.n();){q=s.gp()
r[q]=this.$1(a.k(0,q))}return r}else if(t.V.b(a)){p=[]
s.l(0,a,p)
B.a.aC(p,J.iI(a,this,t.A))
return p}else return a},
$S:13}
A.fH.prototype={
$1(a){return this.a.a3(this.b.h("0/?").a(a))},
$S:8}
A.fI.prototype={
$1(a){if(a==null)return this.a.bk(new A.d2(a===undefined))
return this.a.bk(a)},
$S:8}
A.d2.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iaO:1}
A.f_.prototype={
ah(a){if(a<=0||a>4294967296)throw A.f(A.jo("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.dy.prototype={
bQ(a){var s,r,q,p,o,n,m,l,k,j=this,i="audio"
$.i.b=j
j.a!==$&&A.D("_config")
j.a=a
s=v.G
r=t.m
q=t.z.a(r.a(s.document).querySelector(a.a))
if(q==null){$.aa().$1("Could not find canvas: "+a.i(0)+".canvasElement")
return}r.a(s.window).addEventListener("error",A.q(new A.dF(j)))
j.ch!==$&&A.D("canvas")
j.ch=q
p=new A.ea(A.r([],t.G))
j.at!==$&&A.D("loader")
j.at=p
o=A.iY()
j.z!==$&&A.D("gamepad")
j.z=o
o=A.j6(q)
j.as!==$&&A.D("keyboard")
j.as=o
o=A.jb(q)
j.ax!==$&&A.D("mouse")
j.ax=o
o=A.iJ(q,o,!1)
j.x!==$&&A.D("accel")
j.x=o
o=A.iZ(q,65536)
j.Q!==$&&A.D("gfx")
j.Q=o
n=A.iK()
j.y!==$&&A.D(i)
j.y=n
m=o.a
m===$&&A.a("gl")
l=A.hw(t.N,t.R)
k=A.hw(t.S,t.k)
j.ay!==$&&A.D("resources")
j.ay=new A.ek(m,p,n,l,k)
q.addEventListener("focus",A.q(new A.dC(j)))
q.addEventListener("blur",A.q(new A.dD(j)))
q.focus()
r.a(s.window).addEventListener("load",A.q(new A.dE(j)))
j.d=60
j.aB()
o.aZ(0,0,A.d(q.width),A.d(q.height))
$.u.b=j
j.c8()
j.db=A.fR(A.r([null,null],t.v),j)
o=$.i.u().y
o===$&&A.a(i)
o.du("music/theme.ogg",!0)
o=$.i.u().y
o===$&&A.a(i)
s=B.c.F(0.3,0,1)
o.r=s
o=o.c
if(o!=null)o.volume=s
j.ab()
j.aB()},
be(){var s,r=this
if(r.b)return
s=r.at
s===$&&A.a("loader")
s=s.b&&s.ga1()
if(s){s=r.z
s===$&&A.a("gamepad")
s.bs()
r.dm()
s=r.as
s===$&&A.a("keyboard")
s.b.E(0)
s.c.E(0)
s=r.ax
s===$&&A.a("mouse")
s.bt()}},
ab(){var s,r,q,p,o=this
if(o.b)return
s=o.ch
s===$&&A.a("canvas")
r=A.d(s.width)!==o.CW||A.d(s.height)!==o.cx
q=A.d(s.width)
o.CW=q
s=A.d(s.height)
o.cx=s
if(r){p=o.Q
p===$&&A.a("gfx")
p.aZ(0,0,q,s)
p.aU(s,q)}s=o.at
s===$&&A.a("loader")
q=s.b&&s.ga1()
if(q)o.dl()
else{q=o.z
q===$&&A.a("gamepad")
q.bs()
s.b=o.dk()&&s.ga1()
q=o.as
q===$&&A.a("keyboard")
q.b.E(0)
q.c.E(0)
q=o.ax
q===$&&A.a("mouse")
q.bt()
if(s.b){B.a.E(s.c)
s=o.Q
s===$&&A.a("gfx")
s.aD(0,0,0,0,1)
s.S()}}s=o.Q
s===$&&A.a("gfx")
s.S()},
aB(){var s,r=this,q={},p=++r.e
if(r.c)return
s=r.d
if(s<=0){A.d(t.m.a(v.G.window).requestAnimationFrame(A.q(new A.dA(r,p))))
return}q.a=0
A.ey(B.i,new A.dB(q,r,p,4,1000/s))},
dk(){var s,r,q,p,o,n,m,l,k,j=this;++j.f
j.w=Math.min(12,j.w+0.25)
s=j.Q
s===$&&A.a("gfx")
s.al(0.1,0.1,0.2,1)
s.E(0)
r=j.CW/2
q=r*0.1
p=q*0.13
o=j.cx/2-q/2
for(n=0;n<360;n+=45){m=Math.cos((n-j.f*2)*0.017453292519943295)
l=s.fx
k=l.a
k.$flags&2&&A.G(k)
k[3]=0.5+0.5*m
k[2]=1
k[1]=1
k[0]=1
s.fy=A.ht(l)
s.cX(r+Math.sin((n+j.f)*0.017453292519943295)*q*0.5,o+Math.cos((n+j.f)*0.017453292519943295)*q*0.5,p,p,null,32)}s.al(0.8,0.8,0.8,0.75+Math.sin(j.f*5*0.017453292519943295)*0.25)
r=j.r
m=j.at
m===$&&A.a("loader")
j.r=r+0.001+(m.gaQ()-j.r)/j.w
m=Math.min(m.gaQ(),j.r)
j.r=m
r=j.CW
$.ev.u()
s.cY($.ev.u(),null,12,m*(r-80),40,o+2*q-20)
s.bI()
if(j.r>=1){j.f=0
return!0}return!1}}
A.dF.prototype={
$1(a){t.m.a(a)
this.a.b=!0},
$S:2}
A.dC.prototype={
$1(a){var s,r
t.m.a(a)
s=this.a
s.a===$&&A.a("_config")
r=s.c
if(!r)return
s.c=!1
r=s.y
r===$&&A.a("audio")
r.dA()
s.aB()},
$S:2}
A.dD.prototype={
$1(a){var s,r
t.m.a(a)
s=this.a
s.a===$&&A.a("_config")
r=s.c
if(r)return
s.c=!0
r=s.y
r===$&&A.a("audio")
r.J()
r=s.as
r===$&&A.a("keyboard")
r.J()
r=s.ax
r===$&&A.a("mouse")
r.J()
s=s.z
s===$&&A.a("gamepad")
s.J()},
$S:2}
A.dE.prototype={
$1(a){var s
t.m.a(a)
s=this.a.ch
s===$&&A.a("canvas")
s.focus()},
$S:2}
A.dA.prototype={
$1(a){var s,r
A.f9(a)
s=this.a
if(s.b)return
r=this.b
if(r!==s.e)return
if(s.c)return
s.be()
if(r!==s.e)return
if(s.c)return
A.d(t.m.a(v.G.window).requestAnimationFrame(A.q(this)))
s.ab()},
$S:15}
A.dB.prototype={
$0(){var s,r,q,p,o,n,m,l=this,k=l.b
if(k.b)return
s=l.c
if(s!==k.e)return
if(k.c)return
r=l.a
if(r.a===0){q=t.m
r.a=A.F(q.a(q.a(v.G.window).performance).now())}q=t.m
p=A.F(q.a(q.a(v.G.window).performance).now())
for(q=l.d,o=l.e,n=0;n<q;++n){k.be()
if(s!==k.e||k.c)return
m=r.a+=o
if(m>p){A.ey(A.dR(0,B.c.O(m-p)),l)
k.ab()
return}}r.a=0
A.ey(B.i,l)
k.ab()},
$S:3}
A.dz.prototype={}
A.cE.prototype={
bR(a){var s,r,q,p,o,n,m,l=J.fU(32,t.d)
for(s=this.w,r=t.m,q=t.z,p=0;p<32;++p){o=new A.bu(B.e)
n=r.a(s.createGain())
q.a(n.connect(r.a(s.destination)))
o.c=n
m=r.a(s.createPanner())
m.rolloffFactor=0
m.panningModel="equalpower"
q.a(m.connect(n))
o.d=m
l[p]=o}this.e=t.dL.a(l)},
N(a){return this.bz(a,!1,null,null,this.f)},
bz(a,b,c,d,e){var s,r,q,p,o,n,m
t.x.a(e)
r=this.w
if(A.I(r.state)==="suspended")t.m.a(r.resume())
if(a.a!==B.T)return-1
if(a.c!=null){q=Date.now()
p=a.c
p.toString
if(new A.at(q,0,!1).bl(p).a<a.d.a)return-1}o=this.di(e)
if(o===-1){$.aI().$1("All audio channels are in use. Consider to increase channel count.")
return-1}q=this.e
q===$&&A.a("_channels")
if(!(o>=0&&o<q.length))return A.h(q,o)
s=q[o]
if(s.y!==B.e&&s.b!=null){q=s.b
q.toString
q.onended=null
try{q=s
q.b.stop(0)
q.y=B.e}catch(n){}}q=s
q.a=a
q.e=!1
p=t.m
q.sb0(p.a(r.createBufferSource()))
m=q.b
m.toString
m.buffer=a.b
p=p.a(q.b.playbackRate)
s.toString
p.value=1
p=q.b
p.toString
p.loop=!1
q=q.b
q.toString
p=s.d
p===$&&A.a("pannerNode")
m=t.z
m.a(q.connect(p))
if(A.an(s.b.loop)){q=s.b
c=A.F(m.a(q.buffer).duration)
q=s.b
q.toString
q.loopStart=0
q.loopEnd=c}q=s.b
q.toString
q.onended=A.q(new A.dM(s))
q=s
q.f=0
q.x=A.F(r.currentTime)
r=q.b
if(r!=null)r.start(0)
q.y=B.f
a.c=new A.at(Date.now(),0,!1)
return o},
dt(a){var s,r,q,p,o=this.e
o===$&&A.a("_channels")
if(!(a<o.length))return A.h(o,a)
s=o[a]
if(s.y!==B.f)return
o=s.f
r=A.F(this.w.currentTime)
q=s.x
s.toString
s.f=B.c.a5(o+(r-q),A.F(s.a.b.duration))
q=s.b
if(q!=null)q.onended=null
try{o=s.b
if(o!=null)o.stop(0)}catch(p){}o=s
o.b=null
o.y=B.n},
dB(a){var s,r,q,p=this.w
if(A.I(p.state)==="suspended")t.m.a(p.resume())
s=this.e
s===$&&A.a("_channels")
if(!(a<s.length))return A.h(s,a)
r=s[a]
if(r.y!==B.n)return
s=t.m
r.sb0(s.a(p.createBufferSource()))
q=r.b
q.toString
q.buffer=r.a.b
s.a(q.playbackRate).value=1
q.loop=!1
s=r.d
s===$&&A.a("pannerNode")
t.z.a(q.connect(s))
q.onended=A.q(new A.dN(r))
r.x=A.F(p.currentTime)
r.b.start(0,r.f)
r.y=B.f},
di(a){var s,r,q,p,o
t.x.a(a)
for(s=a.length,r=this.e,q=0;q<s;++q){p=a[q]
if(p>=0){r===$&&A.a("_channels")
o=p<r.length&&r[p].y===B.e}else o=!1
if(o)return p}return-1},
bw(a,b,c,d){var s,r,q,p=this,o={}
o.a=c
o.b=d
s=p.w
if(A.I(s.state)==="suspended")t.m.a(s.resume())
if(p.x!==B.e){s=p.c
if(s!=null)s.pause()
p.x=B.n}s=t.m
r=s.a(s.a(v.G.document).createElement("audio"))
r.load()
r.src=a
r.loop=!0
r.volume=p.r
p.c=r
if(A.an(r.loop))if(c>-1&&d>c){o.a=c/44100
o.b=d/44100-0.1
q=t.a
A.eN(r,"timeupdate",q.h("~(1)?").a(new A.dJ(o,p)),!1,q.c)}s=A.ip(s.a(p.c.play()),t.O)
p.b=s
s.aj(new A.dK(p),new A.dL(o,p,a,!0),t.P)},
du(a,b){return this.bw(a,b,-1,-1)},
cr(a){t.m.a(a)
if(this.x===B.f)this.x=B.n},
J(){var s,r,q=this
if(q.x===B.f){s=q.c
if(s!=null)s.pause()
q.x=B.o}r=0
while(!0){s=q.e
s===$&&A.a("_channels")
if(!(r<s.length))break
if(s[r].y===B.f)q.dt(r);++r}q.a=new A.at(Date.now(),0,!1)},
dA(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=1000
if(h.x===B.o){s=h.c
if(s!=null)t.m.a(s.play())
h.x=B.f}if(h.a!=null){s=Date.now()
r=h.a
r.toString
q=new A.at(s,0,!1).bl(r)}else q=B.i
h.a=null
s=q.a
p=0
while(!0){r=h.e
r===$&&A.a("_channels")
if(!(p<r.length))break
o=r[p]
r=o.a
if((r==null?null:r.c)!=null){n=r.c
n.toString
m=B.b.a5(s,g)
l=B.b.L(s-m,g)
k=n.b+m
j=B.b.a5(k,g)
i=n.a+B.b.L(k-j,g)+l
if(i<-864e13||i>864e13)A.p(A.ag(i,-864e13,864e13,"millisecondsSinceEpoch",null))
if(i===864e13&&j!==0)A.p(A.fN(j,"microsecond","Time including microseconds is outside valid range"))
r.c=new A.at(i,j,!1)}if(o.y===B.o)h.dB(p);++p}}}
A.dM.prototype={
$1(a){var s
t.m.a(a)
s=this.a
s.b=null
s.y=B.e},
$S:2}
A.dN.prototype={
$1(a){var s
t.m.a(a)
s=this.a
s.b=null
s.y=B.e},
$S:2}
A.dJ.prototype={
$1(a){var s,r=this.b.c
if(A.an(r.paused))return
s=this.a
if(A.F(r.currentTime)>=s.b)r.currentTime=s.a},
$S:0}
A.dK.prototype={
$1(a){var s,r=this.a
r.x=B.f
s=r.c
s.toString
s.onpause=A.q(r.gcq())},
$S:17}
A.dL.prototype={
$1(a){var s,r=this,q="NotAllowedError",p=a==null?null:J.aJ(a)
if(!(p!=null&&B.h.bJ(p,q)))s=A.an(a.bo())&&J.Q(a.gaP(),q)
else s=!0
if(s){$.aI().$1(p)
A.iX(A.dR(0,500),new A.dI(r.a,r.b,r.c,r.d),t.P)}},
$S:5}
A.dI.prototype={
$0(){var s=this,r=s.a
s.b.bw(s.c,s.d,r.a,r.b)},
$S:3}
A.b4.prototype={
K(){return"ChannelState."+this.b}}
A.bu.prototype={
sb0(a){this.b=t.z.a(a)}}
A.bR.prototype={
K(){return"LoadingState."+this.b}}
A.d9.prototype={
d9(a,b,c){A.fx(a,b,null,new A.eo(this),new A.ep(this,c),"arraybuffer",t.cz)},
ag(a,b){return this.d8(a,b)},
d8(a,b){var s=0,r=A.fj(t.A),q=1,p=[],o=this,n,m,l,k
var $async$ag=A.fm(function(c,d){if(c===1){p.push(d)
s=q}while(true)switch(s){case 0:q=3
m=t.m
s=6
return A.i2(A.ip(m.a(b.decodeAudioData(a)),m),$async$ag)
case 6:o.b=d
o.a=B.T
q=1
s=5
break
case 3:q=2
k=p.pop()
n=A.aq(k)
$.aI().$2("Error decoding audioData",n)
o.a=B.S
s=5
break
case 2:s=1
break
case 5:return A.fc(null,r)
case 1:return A.fb(p.at(-1),r)}})
return A.fd($async$ag,r)}}
A.ep.prototype={
$3(a,b,c){return this.bG(a,t.dS.a(b),t.h.a(c))},
bG(a,b,c){var s=0,r=A.fj(t.P),q=this,p
var $async$$3=A.fm(function(d,e){if(d===1)return A.fb(e,r)
while(true)switch(s){case 0:t.bZ.a(a)
p=q.a.ag(a,q.b)
s=2
return A.i2(p,$async$$3)
case 2:b.$1(a)
return A.fc(null,r)}})
return A.fd($async$$3,r)},
$S:18}
A.eo.prototype={
$1(a){this.a.a=B.S},
$S:0}
A.dP.prototype={
K(){return"BlendMode."+this.b},
cR(a){switch(this.a){case 0:a.disable(3042)
break
case 1:a.enable(3042)
a.blendFunc(1,771)
break
case 2:a.enable(3042)
a.blendFunc(1,1)
break
case 3:a.enable(3042)
a.blendFunc(774,771)
break
case 4:a.enable(3042)
a.blendFunc(774,0)
break
case 5:a.enable(3042)
a.blendFunc(1,769)
break}}}
A.dY.prototype={
bT(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="vertexAttribPointer"
a0.ax!==$&&A.D("_batchCapacityInBytes")
a0.ax=a3
s=a3/80|0
a0.ay!==$&&A.D("_initialBatchCapacityQuads")
a0.ay=s
a0.at!==$&&A.D("_currentBatchCapacityVertices")
s=a0.at=s*4
r=new Float32Array(s*5)
a0.ch!==$&&A.D("_batchedInterleavedData")
a0.ch=r
q=a0.b
p=t.a
o=p.h("~(1)?")
p=p.c
A.eN(q,"webglcontextlost",o.a(new A.dZ()),!1,p)
A.eN(q,"webglcontextrestored",o.a(new A.e_()),!1,p)
p=t.z
n=p.a(q.getContext("webgl2",A.hB(["alpha",!1],t.N,t.y)))
if(n==null)throw A.f(A.dS("Can't create WEBGL!"))
a0.a!==$&&A.D("gl")
a0.a=n
o=J.iF(B.V.ga2(r))
a0.CW!==$&&A.D("_byteDataView")
a0.CW=o
o=new A.af(new Float64Array(9))
o.aW()
a0.db=o
o=A.jY(n,"#version 300 es\nin vec4 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\n\nuniform mat4 u_projectionMatrix;\n\nout vec2 v_texcoord;\nout vec4 v_color;\n\nvoid main() {\n    gl_PointSize = 1.0;\n    gl_Position = u_projectionMatrix * vec4(a_position.xy, 0.0, 1.0);\n    v_texcoord = a_texcoord;\n    v_color = a_color;\n}\n","#version 300 es\nprecision highp float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\n\nuniform sampler2D u_texture;\n\nout vec4 out_color;\n\nvoid main() {\n    vec4 tex_color = texture(u_texture, v_texcoord) * v_color;\n    out_color = vec4(tex_color.rgb * tex_color.a, tex_color.a);\n}\n")
o.toString
a0.d!==$&&A.D("_program")
a0.d=o
m=A.d(n.getAttribLocation(o,"a_position"))
a0.e!==$&&A.D("_positionAttributeLocation")
a0.e=m
l=A.d(n.getAttribLocation(o,"a_texcoord"))
a0.f!==$&&A.D("_texcoordAttributeLocation")
a0.f=l
k=A.d(n.getAttribLocation(o,"a_color"))
a0.r!==$&&A.D("_colorAttributeLocation")
a0.r=k
if(m<0||l<0||k<0)$.aa().$1("One or more attributes not found in the _program.")
j=p.a(n.getUniformLocation(o,"u_projectionMatrix"))
j.toString
i=t.m
i.a(j)
a0.w!==$&&A.D("_projectionMatrixLocation")
a0.w=j
j=p.a(n.getUniformLocation(o,"u_texture"))
j.toString
i.a(j)
a0.x!==$&&A.D("_textureLocation")
a0.x=j
j=p.a(n.createVertexArray())
j.toString
i.a(j)
a0.y!==$&&A.D("_vao")
a0.y=j
n.bindVertexArray(j)
j=p.a(n.createBuffer())
j.toString
i.a(j)
a0.z!==$&&A.D("_interleavedBuffer")
a0.z=j
n.bindBuffer(34962,j)
n.bufferData(34962,r.byteLength,35040)
p=p.a(n.createBuffer())
p.toString
i.a(p)
a0.Q!==$&&A.D("_quadIndexBuffer")
a0.Q=p
n.bindBuffer(34963,p)
h=B.b.L(s,4)
g=h*6
f=new Uint16Array(g)
for(e=0;e<h;++e){d=e*4
s=e*6
if(!(s<g))return A.h(f,s)
f[s]=d
r=s+1
p=d+1
if(!(r<g))return A.h(f,r)
f[r]=p
r=s+2
j=d+2
if(!(r<g))return A.h(f,r)
f[r]=j
r=s+3
if(!(r<g))return A.h(f,r)
f[r]=j
j=s+4
if(!(j<g))return A.h(f,j)
f[j]=p
s+=5
if(!(s<g))return A.h(f,s)
f[s]=d+3}n.bufferData(34963,J.fL(B.bN.ga2(f)),35044)
n.enableVertexAttribArray(m)
s=t.H
A.cx(n,a1,[m,2,5126,!1,20,0],s)
n.enableVertexAttribArray(l)
A.cx(n,a1,[l,2,5126,!1,20,8],s)
n.enableVertexAttribArray(k)
A.cx(n,a1,[k,4,5121,!0,20,16],s)
n.useProgram(o)
n.disable(3089)
n.lineWidth(1)
c=n.getParameter(33902)
b=c!=null&&A.cP(c,"Float32Array")?t.al.a(c):new Float32Array(A.i4(A.r([1,1],t.u)))
s=b.length
if(0>=s)return A.h(b,0)
if(1>=s)return A.h(b,1)
s=A.d(q.clientWidth)
a0.aU(A.d(q.clientHeight),s)
a0.c.e=!1
B.a1.cR(n)
a=A.hK(n,$.iu(),12)
a.x=!1
$.ev.b=a},
aD(a,b,c,d,e){var s,r,q,p,o,n=this
n.S()
s=n.a
s===$&&A.a("gl")
r=b==null?n.fx.a[0]:b
q=c==null?n.fx.a[1]:c
p=d==null?n.fx.a[2]:d
o=e==null?n.fx.a[3]:e
s.clearColor(r,q,p,o)
s.clear(16384)},
E(a){var s=null
return this.aD(0,s,s,s,s)},
cU(a,b,c,d){return this.aD(0,b,c,d,null)},
al(a,b,c,d){var s=this.fx
s.aY(a,b,c,d)
this.fy=A.ht(s)},
bI(){return this.al(1,1,1,1)},
aZ(a,b,c,d){var s,r=A.d(this.b.height)-d-b,q=this.c.r
if(q.a!==a||q.b!==r||q.c!==c||q.d!==d){q.aT(a,r,c,d)
s=this.a
s===$&&A.a("gl")
s.viewport(q.a,q.b,q.c,q.d)}},
aU(a,b){var s,r=this,q=0+b,p=0+a,o=new Float64Array(16),n=0-p
o[0]=0
o[1]=0
o[2]=0
o[3]=0
o[4]=0
o[5]=0
o[6]=0
o[7]=0
o[8]=0
o[9]=0
o[10]=0
o[11]=0
o[12]=0
o[13]=0
o[14]=0
o[15]=0
o[0]=2/q
o[5]=2/n
o[10]=-1
o[12]=-(q+0)/q
o[13]=-(0+p)/n
o[14]=-0.0
o[15]=1
r.S()
p=r.c.f.a
s=o[15]
p.$flags&2&&A.G(p)
p[15]=s
p[14]=o[14]
p[13]=o[13]
p[12]=o[12]
p[11]=o[11]
p[10]=o[10]
p[9]=o[9]
p[8]=o[8]
p[7]=o[7]
p[6]=o[6]
p[5]=o[5]
p[4]=o[4]
p[3]=o[3]
p[2]=o[2]
p[1]=o[1]
p[0]=o[0]
o=r.a
o===$&&A.a("gl")
s=r.w
s===$&&A.a("_projectionMatrixLocation")
o.uniformMatrix4fv(s,!1,p)},
dv(){var s=this.dx,r=s.length
if(r===0){$.aa().$1("Matrix stack is empty, cannot pop. Resetting matrix to identity.")
return}if(0>=r)return A.h(s,-1)
this.db=s.pop()},
ak(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this.fr.a
a2.$flags&2&&A.G(a2)
a2[8]=1
a2[7]=a8
a2[6]=a7
a2[5]=0
a2[4]=a6
a2[3]=a5
a2[2]=0
a2[1]=a4
a2[0]=a3
s=this.db
s===$&&A.a("_currentMatrix")
r=new Float64Array(9)
q=new A.af(r)
q.aV(s)
p=r[0]
o=r[3]
n=r[6]
m=r[1]
l=r[4]
k=r[7]
j=r[2]
i=r[5]
h=r[8]
g=a2[0]
f=a2[3]
e=a2[6]
d=a2[1]
c=a2[4]
b=a2[7]
a=a2[2]
a0=a2[5]
a1=a2[8]
r[0]=p*g+o*d+n*a
r[3]=p*f+o*c+n*a0
r[6]=p*e+o*b+n*a1
r[1]=m*g+l*d+k*a
r[4]=m*f+l*c+k*a0
r[7]=m*e+l*b+k*a1
r[2]=j*g+i*d+h*a
r[5]=j*f+i*c+h*a0
r[8]=j*e+i*b+h*a1
this.db=t.gU.a(q)},
bb(a,b){var s=this,r=s.c,q=r.c,p=b.a
if(q==null?p==null:q===p){q=r.d
q=q!==a||q===B.t||q===B.Z}else q=!0
if(q)s.S()
if(s.as===0){r.c=b.a
r.d=a
q=s.a
q===$&&A.a("gl")
q.activeTexture(33984)
r=r.c
r.toString
q.bindTexture(3553,r)
r=s.x
r===$&&A.a("_textureLocation")
q.uniform1i(r,0)}},
bY(a,b,c,d,e){var s,r,q,p=this,o=p.as,n=p.at
n===$&&A.a("_currentBatchCapacityVertices")
if(o+1>n){$.aI().$1(u.f)
p.S()
if(1>n)$.aa().$1(u.a+n+". Increase initial buffer size.")}o=p.as
s=o*5
n=p.ch
n===$&&A.a("_batchedInterleavedData")
n.$flags&2&&A.G(n)
r=n.length
if(!(s<r))return A.h(n,s)
n[s]=a
q=s+1
if(!(q<r))return A.h(n,q)
n[q]=b
q=s+2
if(!(q<r))return A.h(n,q)
n[q]=c
q=s+3
if(!(q<r))return A.h(n,q)
n[q]=d
q=p.CW
q===$&&A.a("_byteDataView")
q.$flags&2&&A.G(q,11)
q.setUint32(o*20+16,e,!0);++p.as},
a0(a,b,c,d,e){var s,r,q,p,o=this,n=o.dy,m=n.a
m.$flags&2&&A.G(m)
m[2]=1
m[1]=b
m[0]=a
s=o.db
s===$&&A.a("_currentMatrix")
s.bE(n)
n=m[0]
m=m[1]
s=o.as
r=o.at
r===$&&A.a("_currentBatchCapacityVertices")
if(s+1>r){$.aI().$1(u.f)
o.S()
if(1>r)$.aa().$1(u.a+r+". Increase initial buffer size.")}s=o.as
q=s*5
r=o.ch
r===$&&A.a("_batchedInterleavedData")
r.$flags&2&&A.G(r)
p=r.length
if(!(q<p))return A.h(r,q)
r[q]=n
n=q+1
if(!(n<p))return A.h(r,n)
r[n]=m
m=q+2
if(!(m<p))return A.h(r,m)
r[m]=c
m=q+3
if(!(m<p))return A.h(r,m)
r[m]=d
m=o.CW
m===$&&A.a("_byteDataView")
m.$flags&2&&A.G(m,11)
m.setUint32(s*20+16,e,!0);++o.as},
cX(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.bb(B.t,$.ev.u())
h.a0(a,b,0.5,0.5,A.cz(e,0,h.fy))
for(s=6.283185307179586/f,r=h.dy,q=r.a,p=q.$flags|0,o=0;o<=f;++o){n=o*s
m=Math.cos(n)
l=Math.sin(n)
k=Math.cos(n)
j=Math.sin(n)
i=A.cz(e,1+o,h.fy)
p&2&&A.G(q)
q[2]=1
q[1]=b+d*l
q[0]=a+c*m
m=h.db
m===$&&A.a("_currentMatrix")
m.bE(r)
h.bY(q[0],q[1],0.5+0.5*k,0.5+0.5*j,i)}},
bm(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n,m,l,k=this
k.bb(B.a_,a)
s=a.f
r=a.r
if(f==null)f=0
if(g==null)g=0
if(e==null)e=s
if(d==null)d=r
q=f/s
p=g/r
o=(f+e)/s
n=(g+d)/r
m=j+c
l=i+h
k.a0(i,j,q,p,A.cz(b,0,k.fy))
k.a0(i,m,q,n,A.cz(b,1,k.fy))
k.a0(l,j,o,p,A.cz(b,2,k.fy))
k.a0(l,m,o,n,A.cz(b,3,k.fy))},
cY(a,b,c,d,e,f){var s=null
return this.bm(a,b,c,s,s,s,s,d,e,f)},
V(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.Y.a(a)
if(A.j0(a))return
s=a.length
if(b>=s)$.aa().$1("Image has "+a.length+" frames, you requested frame: "+b)
if(!(b<a.length))return A.h(a,b)
r=a[b]
s=l.db
s===$&&A.a("_currentMatrix")
q=new A.af(new Float64Array(9))
q.aV(s)
B.a.t(l.dx,q)
l.ak(1,0,0,1,c,d)
l.ak(1,0,0,1,0,0)
p=Math.cos(0)
o=Math.sin(0)
l.ak(p,o,-o,p,0,0)
q=r.b
l.ak(1,0,0,1,-r.c*q.c,-r.d*q.d)
s=q.a
n=q.b
m=q.c
q=q.d
l.bm(r.a,null,q,q,m,s,n,m,0,0)
l.dv()},
S(){var s,r,q,p,o,n=this
if(n.as===0)return
s=n.c
if(s.d==null)$.aa().$1("State error: Batch started without a _PrimitiveType set!")
r=n.as
q=n.a
q===$&&A.a("gl")
p=n.d
p===$&&A.a("_program")
q.useProgram(p)
p=n.y
p===$&&A.a("_vao")
q.bindVertexArray(p)
p=n.z
p===$&&A.a("_interleavedBuffer")
q.bindBuffer(34962,p)
p=n.ax
p===$&&A.a("_batchCapacityInBytes")
q.bufferData(34962,p,35040)
p=n.ch
p===$&&A.a("_batchedInterleavedData")
q.bufferSubData(34962,0,J.iG(B.V.ga2(p),0,r*20))
r=s.d
switch(r){case B.a_:s=n.as
o=B.b.L(s,4)
if(B.b.a5(s,4)!==0){$.aa().$1("Warning: Drawing QUAD batch with vertex count "+s+" not divisible by 4.")
return}s=n.Q
s===$&&A.a("_quadIndexBuffer")
q.bindBuffer(34963,s)
q.drawElements(4,o*6,5123,0)
q.bindBuffer(34963,null)
break
case B.c3:case B.c4:case B.Z:case B.c5:case B.t:q.drawArrays(r.dH(),0,n.as)
break
default:$.aa().$1("Unknown batch primitive type: "+s.i(0)+".primitiveType")}n.as=0}}
A.dZ.prototype={
$1(a){a.preventDefault()
$.aI().$1("[webgl] :: context lost")},
$S:0}
A.e_.prototype={
$1(a){$.aI().$1("[webgl] :: context restored")},
$S:0}
A.aC.prototype={
K(){return"_PrimitiveType."+this.b},
dH(){switch(this.a){case 0:return 0
case 1:return 1
case 5:return 6
case 2:return 3
default:return 4}}}
A.ej.prototype={}
A.e0.prototype={
$1(a){return t.I.a(a).a.x},
$S:19}
A.au.prototype={}
A.aA.prototype={
cV(){var s,r,q,p=this
if(p.e<1)$.aa().$1("Refcount of Texture cannot be less than zero.")
if(--p.e===0){p.b.deleteTexture(p.a)
p.a=null
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.ap)(s),++q)s[q].$1(p)
B.a.E(s)}},
dj(a){t.U.a(a)
if(this.x)B.a.t(this.d,a)
else a.$1(this)},
dJ(){var s,r,q
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.ap)(s),++q)s[q].$1(this)
B.a.E(s)}}
A.ew.prototype={
$1(a){var s,r,q,p,o,n=t.z
n.a(a)
if(a!=null&&this.a.a!=null){s=this.a
s.f=A.d(a.width)
s.r=A.d(a.height)
r=this.b
r.bindTexture(3553,s.a)
q=t.m
p=q.a(q.a(v.G.document).createElement("canvas"))
p.width=s.f
p.height=s.r
o=n.a(p.getContext("2d"))
if(o==null)o=q.a(o)
o.drawImage(a,0,0)
n=t.gi.a(q.a(o.getImageData(0,0,s.f,s.r)).data)
A.cx(r,"texImage2D",[3553,0,6408,s.f,s.r,0,6408,5121,J.fL(B.W.ga2(n))],t.H)
J.fL(B.W.ga2(n))
s.x=!1
n=s.w
n===$&&A.a("flags")
if((n&2)!==0)r.generateMipmap(3553)
s.dJ()}},
$S:20}
A.ex.prototype={
$1(a){$.cA().$2("catchError",a)
this.a.x=!1},
$S:5}
A.cB.prototype={
bP(a,b,c){t.m.a(v.G.window).addEventListener("devicemotion",A.q(this.gcf()))},
cg(a){var s,r=t.m
r.a(a)
s=t.z.a(a.accelerationIncludingGravity)
if(s!=null&&A.bm(s.x)!=null&&A.bm(s.y)!=null&&A.bm(s.z)!=null){A.bm(s.x).toString
A.bm(s.y).toString
A.bm(s.z).toString
switch(A.d(r.a(r.a(r.a(v.G.window).screen).orientation).angle)){case 0:break
case-90:break
case 90:break
case 180:break}a.stopPropagation()
a.preventDefault()}}}
A.K.prototype={
K(){return"GamepadButton."+this.b}}
A.dn.prototype={
J(){var s,r,q,p
for(s=this.d,r=s.length,q=this.f,p=0;p<15;++p){if(!(p<r))return A.h(s,p)
if(s[p])B.a.l(q,p,!0)}},
dw(a){var s,r,q,p,o,n,m,l,k,j=this
if(a==null)return!1
s=j.d
r=A.fY(s,t.y)
q=s.length
B.a.W(s,0,q,!1)
p=j.a
B.a.W(p,0,2,0)
o=j.b
B.a.W(o,0,2,0)
n=j.c
B.a.W(n,0,2,0)
m=t.c
B.a.l(p,0,A.d(m.a(a.axes).length)>0?A.F(m.a(a.axes)[0]):0)
B.a.l(o,0,A.d(m.a(a.axes).length)>1?A.F(m.a(a.axes)[1]):0)
B.a.l(p,1,A.d(m.a(a.axes).length)>2?A.F(m.a(a.axes)[2]):0)
B.a.l(o,1,A.d(m.a(a.axes).length)>3?A.F(m.a(a.axes)[3]):0)
B.a.l(n,0,A.d(m.a(a.buttons).length)>6?A.F(t.m.a(m.a(a.buttons)[6]).value):0)
B.a.l(n,1,A.d(m.a(a.buttons).length)>7?A.F(t.m.a(m.a(a.buttons)[7]).value):0)
for(p=B.bM.gaH(),p=p.gv(p),o=t.m;p.n();){n=p.gp()
l=n.b
if(typeof l!=="number")return l.dM()
if(l<0||l>=A.d(m.a(a.buttons).length))continue
B.a.l(s,n.a.a,A.an(o.a(m.a(a.buttons)[l]).pressed))}for(p=j.f,o=j.e,k=0;k<15;++k){n=B.bJ[k].a
if(!(n<q))return A.h(s,n)
if(s[n]){if(!(n<r.length))return A.h(r,n)
m=!r[n]}else m=!1
B.a.l(o,n,m)
if(!s[n]){if(!(n<r.length))return A.h(r,n)
m=r[n]}else m=!1
B.a.l(p,n,m)}return!0}}
A.cN.prototype={
bS(){var s=this,r=v.G,q=t.m
q.a(r.window).addEventListener("gamepadconnected",A.q(s.gc0()))
q.a(r.window).addEventListener("gamepaddisconnected",A.q(s.gc4()))
for(r=J.bs(s.b9());r.n();)s.b7(r.gp())},
bs(){var s,r,q,p,o,n=this
n.c=n.b9()
for(s=n.a,r=s.length,q=n.b,p=0;p<4;++p){o=q[p]
if(o===-1)continue
if(o>=J.ar(n.c))continue
if(J.fK(n.c,o)==null)continue
if(!(p<r))return A.h(s,p)
s[p].dw(J.fK(n.c,o))}},
J(){var s,r,q
for(s=this.a,r=s.length,q=0;q<r;++q)s[q].J()},
c1(a){var s=t.m
this.b7(s.a(s.a(a).gamepad))},
c5(a){var s=t.m
this.c3(s.a(s.a(a).gamepad))},
b9(){var s,r
try{s=t.m
s=t.c.a(s.a(s.a(v.G.window).navigator).getGamepads())
s=t.d5.b(s)?s:new A.bw(s,A.H(s).h("bw<1,l?>"))
return s}catch(r){if(t.L.b(A.aq(r)))return A.r([],t.B)
else throw r}},
c3(a){var s,r
for(s=this.b,r=0;r<4;++r)if(s[r]===A.d(a.index)){B.a.l(s,r,-1)
$.fJ().$1("[info] :: Gamepad disconnected at port "+A.d(a.index))}return!0},
b7(a){var s,r,q
if(a==null)return!1
if(A.I(a.mapping)==="standard"){r=this.b
q=0
while(!0){if(!(q<4)){s=-1
break}if(r[q]===-1){s=q
break}++q}if(s!==-1)B.a.l(r,s,A.d(a.index))
$.fJ().$1("[info] :: Gamepad connected at port "+A.d(a.index))}else $.fJ().$1("[warn] :: Ignored gamepad at port "+A.d(a.index)+" with unrecognised mapping scheme "+A.I(a.mapping))
return!0}}
A.ce.prototype={
K(){return"_KeyEvent."+this.b}}
A.bx.prototype={
i(a){return'Char(symbol: "'+this.a+'", physicalKey: '+this.b.c+")"}}
A.e6.prototype={
bU(a){a.addEventListener("keydown",A.q(new A.e7(this)))
a.addEventListener("keyup",A.q(new A.e8(this)))},
J(){var s,r,q
for(s=this.a,s=new A.aQ(s,A.z(s).h("aQ<1,2>")).gv(0),r=this.b;s.n();){q=s.d
if(q.b)r.l(0,q.a,!0)}},
X(a){var s
if(a===B.j)s=!1
else{s=this.a.k(0,a)
s=s===!0}return s},
aM(a){var s
if(a===B.j)s=!1
else{s=this.c.k(0,a)
s=(s==null?0:s)>0}return s},
av(a,b){var s,r,q,p,o,n,m=this,l=A.I(b.code),k=A.I(b.key),j=$.is().k(0,l)
if(j==null)j=B.j
if(j!==B.j)switch(a.a){case 0:s=m.a
if(s.k(0,j)!==!0){s.l(0,j,!0)
s=m.c
r=s.k(0,j)
s.l(0,j,(r==null?0:r)+1)}break
case 2:m.b.l(0,j,!0)
m.a.aR(0,j)
break
case 1:break}if(a===B.Y)if(k.length===1&&!A.an(b.ctrlKey)&&!A.an(b.altKey)&&!A.an(b.metaKey)){s=m.d
if(s.gj(0)>=32){r=s.b
if(r===s.c)A.p(A.fS());++s.d
q=s.a
if(!(r<q.length))return A.h(q,r)
p=q[r]
if(p==null)s.$ti.c.a(p)
B.a.l(q,r,null)
s.b=(s.b+1&s.a.length-1)>>>0}r=s.$ti
q=r.c.a(new A.bx(k,j))
B.a.l(s.a,s.c,q)
q=s.c
p=s.a.length
q=(q+1&p-1)>>>0
s.c=q
if(s.b===q){o=A.S(p*2,null,!1,r.h("1?"))
r=s.a
q=s.b
n=r.length-q
B.a.aX(o,0,n,r,q)
B.a.aX(o,n,n+s.b,s.a,0)
s.b=0
s.c=s.a.length
s.a=o}++s.d}}}
A.e7.prototype={
$1(a){var s
t.m.a(a)
s=this.a
s.av(B.c1,a)
s.av(B.Y,a)
if(!(A.d(a.keyCode)>0&&A.d(a.keyCode)<48))s=A.d(a.keyCode)>111&&A.d(a.keyCode)<122
else s=!0
if(s){a.stopPropagation()
a.preventDefault()}},
$S:2}
A.e8.prototype={
$1(a){this.a.av(B.c2,t.m.a(a))},
$S:2}
A.b.prototype={
K(){return"KeyCodes."+this.b}}
A.ds.prototype={}
A.cU.prototype={
J(){var s,r
for(s=this.f.length,r=0;r<s;++r);},
bt(){var s,r,q,p=this
p.y=0
for(s=p.f,r=s.length,q=0;q<r;++q)s[q].b=0
B.a.W(p.w,0,5,!1)
B.a.W(p.x,0,5,!1)},
cD(a){t.m.a(a)
this.y=this.y+B.c.O(J.iH(A.F(a.deltaY)))
a.stopPropagation()
a.preventDefault()},
cc(a){var s
t.m.a(a)
this.e.focus()
s=this.z
if(s!=null)s.$0()
this.z=null
a.stopPropagation()
a.preventDefault()},
ce(a){t.m.a(a)
a.stopPropagation()
a.preventDefault()
return!1},
cB(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.m
h.a(a)
i.e.focus()
s=h.a(a.changedTouches)
for(h=t.z,r=i.f,q=r.length,p=i.w,o=i.r,n=0;n<A.d(s.length);++n){m=h.a(s.item(n))
if(m!=null){l=B.b.O(A.d(m.identifier))
for(k=0;k<32;++k){if(!(k<q))return A.h(r,k)
j=r[k]
if(j.a!==-1)continue
j.a=l
j.e=i.aw(m)
j.f=i.az(m)
A.F(m.force);++j.b
if(k===0){B.a.l(p,0,!0)
B.a.l(o,0,!0)}break}}}if(i.z==null){a.stopPropagation()
a.preventDefault()}},
cz(a){var s,r,q,p,o,n,m,l,k,j=this,i=t.m
i.a(a)
s=i.a(a.changedTouches)
for(i=t.z,r=j.f,q=r.length,p=j.r,o=0;o<A.d(s.length);++o){n=i.a(s.item(o))
if(n!=null){m=B.b.O(A.d(n.identifier))
for(l=0;l<32;++l){if(!(l<q))return A.h(r,l)
k=r[l]
if(k.a!==m)continue
k.e=j.aw(n)
k.f=j.az(n)
A.F(n.force)
if(l===0)B.a.l(p,0,!0)
break}}}if(j.z==null){a.stopPropagation()
a.preventDefault()}},
cv(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.m
h.a(a)
s=h.a(a.changedTouches)
for(h=t.z,r=i.f,q=r.length,p=i.x,o=i.r,n=0;n<A.d(s.length);++n){m=h.a(s.item(n))
if(m!=null){l=B.b.O(A.d(m.identifier))
for(k=0;k<32;++k){if(!(k<q))return A.h(r,k)
j=r[k]
if(j.a!==l)continue
j.a=-1
j.e=i.aw(m)
j.f=i.az(m)
A.F(m.force)
if(k===0){B.a.l(p,0,!0)
B.a.l(o,0,!1)}break}}}if(i.z==null){a.stopPropagation()
a.preventDefault()}},
cl(a){t.m.a(a)
if(A.d(a.button)<5){B.a.l(this.r,A.d(a.button),!0)
B.a.l(this.w,A.d(a.button),!0)}a.stopPropagation()
a.preventDefault()
if(this.z==null){a.stopPropagation()
a.preventDefault()}},
cp(a){t.m.a(a)
if(A.d(a.button)<5){B.a.l(this.r,A.d(a.button),!1)
B.a.l(this.x,A.d(a.button),!0)}if(this.z==null){a.stopPropagation()
a.preventDefault()}},
cn(a){t.m.a(a)
this.c9(a)
this.ca(a)
if(this.z==null){a.stopPropagation()
a.preventDefault()}},
ct(a){t.m.a(a)
this.aA()},
cj(a){t.m.a(a)
this.aA()},
aA(){var s=this.e
this.c=A.d(s.clientWidth)===0?1:A.d(s.width)/A.d(s.clientWidth)
this.d=A.d(s.clientHeight)===0?1:A.d(s.height)/A.d(s.clientHeight)},
c9(a){var s,r,q=A.d(a.clientX)+A.F(t.m.a(v.G.window).scrollX),p=this.e
for(s=t.z;p!=null;){r=A.cP(p,"HTMLElement")
if(r){q-=A.d(p.offsetLeft)
p=s.a(p.offsetParent)}else p=null}return q*this.c},
ca(a){var s,r,q=A.d(a.clientY)+A.F(t.m.a(v.G.window).scrollY),p=this.e
for(s=t.z;p!=null;){r=A.cP(p,"HTMLElement")
if(r){q-=A.d(p.offsetTop)
p=s.a(p.offsetParent)}else p=null}return q*this.d},
aw(a){var s,r,q=A.F(a.pageX),p=this.e
for(s=t.z;p!=null;){r=A.cP(p,"HTMLElement")
if(r){q-=A.d(p.offsetLeft)
p=s.a(p.offsetParent)}else p=null}return q*this.c},
az(a){var s,r,q=A.F(a.pageY),p=this.e
for(s=t.z;p!=null;){r=A.cP(p,"HTMLElement")
if(r){q-=A.d(p.offsetTop)
p=s.a(p.offsetParent)}else p=null}return q*this.d}}
A.fE.prototype={
$1(a){var s
t.m.a(a)
if(A.an(a.lengthComputable)){s=this.a
s.b=A.d(a.loaded)
s.c=A.d(a.total)
s.d=A.I(a.type)==="loadend"}},
$S:0}
A.fB.prototype={
$1(a){this.a.a3(this.c.a(a))
this.b.d=!0},
$S(){return this.c.h("~(0)")}}
A.fC.prototype={
$1(a){var s,r=this
t.m.a(a)
s=r.b
$.aI().$1("Could not load: "+r.a+" ("+A.d(s.status)+" : "+A.I(s.statusText)+")")
r.c.d=!0
r.d.$1(a)
r.e.a3(r.f)},
$S:0}
A.fD.prototype={
$1(a){var s,r=this
t.m.a(a)
s=r.a
if(A.d(s.status)>=200&&A.d(s.status)<300){s=s.response
s.toString
r.b.$3(s,r.c,r.d)}else r.d.$1(a)},
$S:0}
A.fz.prototype={
$1(a){var s=this.a.a
if(s!=null)v.G.URL.revokeObjectURL(s)},
$S:0}
A.fA.prototype={
$3(a,b,c){var s,r,q,p
t.cZ.a(b)
t.h.a(c)
t.z.a(a)
s=v.G
r=this.a
r.a=A.I(s.URL.createObjectURL(a))
q=t.m
p=q.a(q.a(s.document).createElement("img"))
s=r.a
s.toString
p.src=s
p.addEventListener("load",A.q(new A.fy(r,b,p)))
p.addEventListener("error",A.q(c))},
$S:22}
A.fy.prototype={
$1(a){var s,r
t.m.a(a)
s=v.G.URL
r=this.a.a
r.toString
s.revokeObjectURL(r)
this.b.$1(this.c)},
$S:2}
A.ek.prototype={
dd(a,b){var s=this,r=s.d,q=r.k(0,a)
if(q==null){q=A.jw(s.a,s.b,a,b)
B.a.t(q.c,t.U.a(new A.em(s,a)))
r.l(0,a,q)}else ++q.e
return q},
aN(a,b,c){var s=A.r([],t.cd),r=this.dd(a,3),q=A.j_(b,c,A.h_(0,0,r.f,r.r,t.S),r)
r.cV()
r.dj(new A.el(q,null))
B.a.t(s,q)
return s}}
A.em.prototype={
$1(a){t.R.a(a)
this.a.d.aR(0,this.b)},
$S:10}
A.el.prototype={
$1(a){t.R.a(a)
this.a.b.aT(0,0,a.f,a.r)},
$S:10}
A.ae.prototype={
i(a){var s=this
return"LoaderItem("+s.a+", "+s.b+"/"+s.c+" bytes, completedOrFailed: "+s.d+")"}}
A.ea.prototype={
gde(){return B.a.aI(this.c,0,new A.ec(),t.S)},
gbD(){return B.a.aI(this.c,0,new A.ed(),t.S)},
ga1(){return B.a.d_(this.c,new A.eb())},
gj(a){return this.c.length},
gaQ(){var s,r,q,p,o,n=this.c
if(n.length===0)return 1
if(this.gbD()===0)return this.ga1()?1:0
s=A.r([],t.u)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.ap)(n),++q){p=n[q]
if(p.d)B.a.t(s,1)
else{o=p.c
if(o===0)B.a.t(s,0)
else B.a.t(s,B.c.F(p.b/o,0,1))}}return B.c.F(s.length>0?A.jv(s)/s.length:0,0,1)},
i(a){var s=this
return"Loader(isEnabled: true, "+s.gde()+"/"+s.gbD()+" bytes ("+B.c.d0(100*s.gaQ())+"%), "+s.c.length+" _items, allItemsFinished: "+s.ga1()}}
A.ec.prototype={
$2(a,b){return A.d(a)+t.E.a(b).b},
$S:9}
A.ed.prototype={
$2(a,b){return A.d(a)+t.E.a(b).c},
$S:9}
A.eb.prototype={
$1(a){return t.E.a(a).d},
$S:25}
A.aE.prototype={
K(){return"_Verbosity."+this.b}}
A.fi.prototype={
$1(a){return J.aJ(a)},
$S:26}
A.d7.prototype={
aT(a,b,c,d){var s=this,r=s.$ti.c
r.a(a)
r.a(b)
r.a(c)
r.a(d)
s.sd6(a)
s.sdI(b)
s.sdK(c)
s.sd2(d)},
i(a){var s=this
return"Rect<"+A.a9(s.$ti.c).i(0)+">(left: "+s.a+", top: "+s.b+", width: "+s.c+", height: "+s.d+")"},
D(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.hk(b)!==A.il(s))return!1
s.$ti.a(b)
return s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d},
gm(a){var s=this
return A.hE(s.a,s.b,s.c,s.d)},
sd6(a){this.a=this.$ti.c.a(a)},
sdI(a){this.b=this.$ti.c.a(a)},
sdK(a){this.c=this.$ti.c.a(a)},
sd2(a){this.d=this.$ti.c.a(a)}}
A.et.prototype={
$2(a,b){return A.f9(a)+A.f9(b)},
$S:27}
A.eF.prototype={
B(a,b){var s
t.o.a(b)
if(b.c===0){s=b.gbr()
s=s.gbp(s)}else s=!0
if(s)return this.bO(0,b)
return this.a.$1(b.gbA())}}
A.af.prototype={
aV(a){var s=a.a,r=this.a,q=s[8]
r.$flags&2&&A.G(r)
r[8]=q
r[7]=s[7]
r[6]=s[6]
r[5]=s[5]
r[4]=s[4]
r[3]=s[3]
r[2]=s[2]
r[1]=s[1]
r[0]=s[0]},
i(a){return"[0] "+this.P(0).i(0)+"\n[1] "+this.P(1).i(0)+"\n[2] "+this.P(2).i(0)+"\n"},
D(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.af){s=this.a
r=s[0]
q=b.a
s=r===q[0]&&s[1]===q[1]&&s[2]===q[2]&&s[3]===q[3]&&s[4]===q[4]&&s[5]===q[5]&&s[6]===q[6]&&s[7]===q[7]&&s[8]===q[8]}else s=!1
return s},
gm(a){return A.d4(this.a)},
P(a){var s,r=new Float64Array(3),q=this.a
if(!(a<9))return A.h(q,a)
r[0]=q[a]
s=3+a
if(!(s<9))return A.h(q,s)
r[1]=q[s]
s=6+a
if(!(s<9))return A.h(q,s)
r[2]=q[s]
return new A.c5(r)},
aW(){var s=this.a
s.$flags&2&&A.G(s)
s[0]=1
s[1]=0
s[2]=0
s[3]=0
s[4]=1
s[5]=0
s[6]=0
s[7]=0
s[8]=1},
bE(a){var s=a.a,r=this.a,q=r[0],p=s[0],o=r[3],n=s[1],m=r[6],l=s[2],k=r[1],j=r[4],i=r[7],h=r[2],g=r[5]
r=r[8]
s.$flags&2&&A.G(s)
s[0]=q*p+o*n+m*l
s[1]=k*p+j*n+i*l
s[2]=h*p+g*n+r*l
return a}}
A.cT.prototype={
i(a){var s=this
return"[0] "+s.P(0).i(0)+"\n[1] "+s.P(1).i(0)+"\n[2] "+s.P(2).i(0)+"\n[3] "+s.P(3).i(0)+"\n"},
D(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cT){s=this.a
r=s[0]
q=b.a
s=r===q[0]&&s[1]===q[1]&&s[2]===q[2]&&s[3]===q[3]&&s[4]===q[4]&&s[5]===q[5]&&s[6]===q[6]&&s[7]===q[7]&&s[8]===q[8]&&s[9]===q[9]&&s[10]===q[10]&&s[11]===q[11]&&s[12]===q[12]&&s[13]===q[13]&&s[14]===q[14]&&s[15]===q[15]}else s=!1
return s},
gm(a){return A.d4(this.a)},
P(a){var s,r=new Float64Array(4),q=this.a
if(!(a<16))return A.h(q,a)
r[0]=q[a]
s=4+a
if(!(s<16))return A.h(q,s)
r[1]=q[s]
s=8+a
if(!(s<16))return A.h(q,s)
r[2]=q[s]
s=12+a
if(!(s<16))return A.h(q,s)
r[3]=q[s]
return new A.c6(r)}}
A.df.prototype={
i(a){var s=this.a
return"["+A.n(s[0])+","+A.n(s[1])+"]"},
D(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.df){s=this.a
r=s[1]
q=b.a
s=r===q[1]&&s[0]===q[0]}else s=!1
return s},
gm(a){return A.d4(this.a)},
gj(a){var s=this.a,r=s[1]
s=s[0]
return Math.sqrt(r*r+s*s)},
gd7(){var s=this.a,r=s[1]
s=s[0]
return r*r+s*s},
dh(){var s,r,q,p=Math.sqrt(this.gd7())
if(p===0)return 0
s=1/p
r=this.a
q=r[1]
r.$flags&2&&A.G(r)
r[1]=q*s
r[0]=r[0]*s
return p}}
A.c5.prototype={
i(a){var s=this.a
return"["+A.n(s[0])+","+A.n(s[1])+","+A.n(s[2])+"]"},
D(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.c5){s=this.a
r=s[2]
q=b.a
s=r===q[2]&&s[1]===q[1]&&s[0]===q[0]}else s=!1
return s},
gm(a){return A.d4(this.a)},
gj(a){var s=this.a,r=s[2],q=s[1]
s=s[0]
return Math.sqrt(r*r+q*q+s*s)}}
A.c6.prototype={
aY(a,b,c,d){var s=this.a
s.$flags&2&&A.G(s)
s[3]=d
s[2]=c
s[1]=b
s[0]=a},
i(a){var s=this.a
return"["+A.n(s[0])+","+A.n(s[1])+","+A.n(s[2])+","+A.n(s[3])+"]"},
D(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.c6){s=this.a
r=s[3]
q=b.a
s=r===q[3]&&s[2]===q[2]&&s[1]===q[1]&&s[0]===q[0]}else s=!1
return s},
gm(a){return A.d4(this.a)},
gj(a){var s=this.a,r=s[3],q=s[2],p=s[1]
s=s[0]
return Math.sqrt(r*r+q*q+p*p+s*s)}}
A.fQ.prototype={}
A.c9.prototype={}
A.dj.prototype={}
A.ca.prototype={$iju:1}
A.eO.prototype={
$1(a){return this.a.$1(t.m.a(a))},
$S:0}
A.bE.prototype={
K(){return"GameState."+this.b}}
A.aK.prototype={
T(){}}
A.ab.prototype={
T(){var s=this.d
this.c="impact"+B.b.L(s,2)
this.d=s+1}}
A.cF.prototype={
gbu(){var s=this.a
return s<0||s>800},
T(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="game",f="bats",e="audio"
for(s=$.u.a,r=$.i.a,q=0;q<h.f;++q){p=h.a
o=h.d
n=h.a=p+o
m=h.b
l=h.e
m+=l
h.b=m
if(Math.abs(n-400)>=344&&Math.abs(p-400)<344){if(n<400){n=$.u.b
if(n===$.u)A.p(A.A(s))
n=n.db
n===$&&A.a(g)
n=n.a
n===$&&A.a(f)
k=n[0]
j=1}else{n=$.u.b
if(n===$.u)A.p(A.A(s))
n=n.db
n===$&&A.a(g)
n=n.a
n===$&&A.a(f)
k=n[1]
j=-1}i=m-k.b
if(i>-64&&i<64){h.d=-o
o=l+i/128
h.e=o
o=B.c.F(o,-1,1)
h.e=o
n=h.d
m=new Float64Array(2)
m[1]=o
m[0]=n
new A.df(m).dh()
h.d=m[0]
h.e=m[1]
o=$.u.b
if(o===$.u)A.p(A.A(s))
o=o.db
o===$&&A.a(g)
B.a.t(o.c,new A.ab(h.a-j*10,h.b,"blank"));++h.f
o=$.u.b
if(o===$.u)A.p(A.A(s))
o=o.db
o===$&&A.a(g)
o.d=B.l.ah(21)-10
k.f=10
o=$.u.b
if(o===$.u)A.p(A.A(s))
o=o.db
o===$&&A.a(g)
n=o.a
n===$&&A.a(f)
n=n[0]
n=J.Q(n.r,n.gM())
if(!n){n=$.i.b
if(n===$.i)A.p(A.A(r))
n=n.y
n===$&&A.a(e)
m=B.l.ah(5)
m=o.e.fr.k(0,"hit"+m)
m.toString
n.N(m)}o=h.f
if(o<=10){o=$.u.b
if(o===$.u)A.p(A.A(s))
o=o.db
o===$&&A.a(g)
n=o.a
n===$&&A.a(f)
n=n[0]
n=J.Q(n.r,n.gM())
if(!n){n=$.i.b
if(n===$.i)A.p(A.A(r))
n=n.y
n===$&&A.a(e)
o=o.e.fr.k(0,"hit_slow0")
o.toString
n.N(o)}}else if(o<=12){o=$.u.b
if(o===$.u)A.p(A.A(s))
o=o.db
o===$&&A.a(g)
n=o.a
n===$&&A.a(f)
n=n[0]
n=J.Q(n.r,n.gM())
if(!n){n=$.i.b
if(n===$.i)A.p(A.A(r))
n=n.y
n===$&&A.a(e)
o=o.e.fr.k(0,"hit_medium0")
o.toString
n.N(o)}}else if(o<=16){o=$.u.b
if(o===$.u)A.p(A.A(s))
o=o.db
o===$&&A.a(g)
n=o.a
n===$&&A.a(f)
n=n[0]
n=J.Q(n.r,n.gM())
if(!n){n=$.i.b
if(n===$.i)A.p(A.A(r))
n=n.y
n===$&&A.a(e)
o=o.e.fr.k(0,"hit_fast0")
o.toString
n.N(o)}}else{o=$.u.b
if(o===$.u)A.p(A.A(s))
o=o.db
o===$&&A.a(g)
n=o.a
n===$&&A.a(f)
n=n[0]
n=J.Q(n.r,n.gM())
if(!n){n=$.i.b
if(n===$.i)A.p(A.A(r))
n=n.y
n===$&&A.a(e)
o=o.e.fr.k(0,"hit_veryfast0")
o.toString
n.N(o)}}}}o=h.b
if(Math.abs(o-240)>220){n=-h.e
h.e=n
n=o+n
h.b=n
o=$.u.b
if(o===$.u)A.p(A.A(s))
o=o.db
o===$&&A.a(g)
B.a.t(o.c,new A.ab(h.a,n,"blank"))
o=$.u.b
if(o===$.u)A.p(A.A(s))
o=o.db
o===$&&A.a(g)
n=o.a
n===$&&A.a(f)
n=n[0]
n=J.Q(n.r,n.gM())
if(!n){n=$.i.b
if(n===$.i)A.p(A.A(r))
n=n.y
n===$&&A.a(e)
m=B.l.ah(5)
m=o.e.fr.k(0,"bounce"+m)
m.toString
n.N(m)}o=$.u.b
if(o===$.u)A.p(A.A(s))
o=o.db
o===$&&A.a(g)
n=o.a
n===$&&A.a(f)
n=n[0]
n=J.Q(n.r,n.gM())
if(!n){n=$.i.b
if(n===$.i)A.p(A.A(r))
n=n.y
n===$&&A.a(e)
o=o.e.fr.k(0,"bounce_synth0")
o.toString
n.N(o)}}}}}
A.aL.prototype={
T(){var s,r,q,p=this;--p.f
s=p.r.$0()
p.b=B.c.F(p.b+s,80,400)
if(p.f>0){r=$.u.u().db
r===$&&A.a("game")
r=r.b
r===$&&A.a("ball")
q=r.gbu()?2:1}else q=0
p.c="bat"+p.d+q},
cP(){var s,r,q,p,o="game",n=$.u.u().db
n===$&&A.a(o)
n=n.b
n===$&&A.a("ball")
n=n.a
s=this.a
r=$.u.u().db
r===$&&A.a(o)
r=r.b
r===$&&A.a("ball")
r=r.b
q=$.u.u().db
q===$&&A.a(o)
q=q.d
p=Math.min(1,Math.abs(n-s)/400)
return B.c.F(p*240+(1-p)*(r+q)-this.b,-6,6)}}
A.dO.prototype={
$0(){return 0},
$S:4}
A.dW.prototype={
gbg(){var s,r=this.a
r===$&&A.a("bats")
r=A.fY(r,t.J)
s=this.b
s===$&&A.a("ball")
r.push(s)
B.a.aC(r,this.c)
return r},
T(){var s,r,q,p,o,n=this
for(s=n.gbg(),r=s.length,q=0;q<s.length;s.length===r||(0,A.ap)(s),++q)s[q].T()
B.a.dz(n.c,new A.dX())
s=n.b
s===$&&A.a("ball")
if(s.gbu()){p=n.b.a<400?1:0
o=1-p
s=n.a
s===$&&A.a("bats")
r=s[o].f
if(r<0){++s[p].e
n.N("score_goal")
n.a[o].f=20}else if(r===0)n.b=A.hm(o===0?-1:1)}},
cW(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="gfx",d=$.i.u().Q
d===$&&A.a(e)
s=f.e.dy
r=s.k(0,"table")
r.toString
d.V(r,0,0,0)
for(d=$.i.a,q=0;q<2;++q){r=f.a
r===$&&A.a("bats")
if(r[q].f>0){r=f.b
r===$&&A.a("ball")
r=r.a
r=r<0||r>800}else r=!1
if(r){r=$.i.b
if(r===$.i)A.p(A.A(d))
r=r.Q
r===$&&A.a(e)
p=s.k(0,"effect"+q)
p.toString
r.V(p,0,0,0)}}for(r=f.gbg(),p=r.length,o=$.u.a,n=0;n<r.length;r.length===p||(0,A.ap)(r),++n){m=r[n]
l=$.i.b
if(l===$.i)A.p(A.A(d))
l=l.Q
l===$&&A.a(e)
k=$.u.b
if(k===$.u)A.p(A.A(o))
k=k.dy.k(0,m.c)
k.toString
l.V(k,0,m.a,m.b)}for(q=0;q<2;++q){r=f.a
r===$&&A.a("bats")
j=B.h.bv(B.b.i(r[q].e),2,"0")
for(r=j.length,p=255+160*q,i=1-q,o=q===0,h=0;h<2;++h){if(f.a[i].f>0){l=f.b
l===$&&A.a("ball")
l=l.a
l=l<0||l>800}else l=!1
if(l)g=o?"2":"1"
else g="0"
if(!(h<r))return A.h(j,h)
l=j[h]
k=$.i.b
if(k===$.i)A.p(A.A(d))
k=k.Q
k===$&&A.a(e)
l=s.k(0,"digit"+g+l)
l.toString
k.V(l,0,p+h*55,46)}}},
by(a,b,c){var s,r=this.a
r===$&&A.a("bats")
r=r[0]
if(!J.Q(r.r,r.gM())||c){r=$.i.u().y
r===$&&A.a("audio")
if(b>1)s=B.l.ah(b)
else s=0
s=this.e.fr.k(0,a+s)
s.toString
r.bz(s,!1,null,null,r.f)}},
bx(a,b){return this.by(a,1,b)},
N(a){return this.by(a,1,!1)}}
A.dX.prototype={
$1(a){return t.gS.a(a).d>=10},
$S:29}
A.cG.prototype={
bq(a,b,c){var s,r,q,p,o,n
t.df.a(a)
for(s=a.length,r=this.dy,q=$.i.a,p=0;p<a.length;a.length===s||(0,A.ap)(a),++p){o=a[p]
n=$.i.b
if(n===$.i)A.p(A.A(q))
n=n.ay
n===$&&A.a("resources")
r.l(0,o,n.aN("images/"+o+".png",b,c))}},
da(a){return this.bq(a,0,0)},
aO(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="resources"
if(c===1)for(s="images/"+a,r=this.dy,q=$.i.a,p=0;p<b;++p){o=""+p
n=$.i.b
if(n===$.i)A.p(A.A(q))
n=n.ay
n===$&&A.a(j)
r.l(0,a+o,n.aN(s+o+".png",d,e))}else for(s="images/"+a,r=this.dy,q=$.i.a,m=0;m<c;++m)for(o=""+m,n=s+o,o=a+o,p=0;p<b;++p){l=""+p
k=$.i.b
if(k===$.i)A.p(A.A(q))
k=k.ay
k===$&&A.a(j)
r.l(0,o+l,k.aN(n+l+".png",d,e))}},
dc(a,b,c){return this.aO(a,b,c,0,0)},
c8(){var s=this,r=t.s
s.bq(A.r(["ball"],r),0.5,0.5)
s.da(A.r(["table","blank","over","menu0","menu1","effect0","effect1"],r))
s.aO("impact",5,1,0.5,0.5)
s.aO("bat",3,2,0.5,0.5)
s.dc("digit",10,3)
A.hB(["hit",5,"bounce",5,"hit_slow",1,"hit_medium",1,"hit_fast",1,"hit_veryfast",1,"bounce_synth",1,"score_goal",1,"up",1,"down",1],t.N,t.S).G(0,new A.dQ(s))},
dq(){var s="keyboard",r=$.i.u().as
r===$&&A.a(s)
if(!r.X(B.P)){r=$.i.u().as
r===$&&A.a(s)
r=r.X(B.p)}else r=!0
if(r)r=6
else{r=$.i.u().as
r===$&&A.a(s)
if(!r.X(B.M)){r=$.i.u().as
r===$&&A.a(s)
r=r.X(B.q)}else r=!0
r=r?-6:0}return r},
ds(){var s="keyboard",r=$.i.u().as
r===$&&A.a(s)
if(r.X(B.O))r=6
else{r=$.i.u().as
r===$&&A.a(s)
r=r.X(B.N)?-6:0}return r},
dm(){var s,r,q,p=this,o="keyboard",n="game",m=$.i.u().as
m===$&&A.a(o)
s=m.aM(B.Q)
switch(p.cy.a){case 0:if(s){p.cy=B.aa
r=A.r([p.gdn()],t.v)
B.a.t(r,p.dx===2?p.gdr():null)
p.db=A.fR(r,p)}else{if(p.dx===2){m=$.i.u().as
m===$&&A.a(o)
m=m.aM(B.q)}else m=!1
if(m){m=p.db
m===$&&A.a(n)
m.bx("up",!0)
p.dx=1}else{if(p.dx===1){m=$.i.u().as
m===$&&A.a(o)
m=m.aM(B.p)}else m=!1
if(m){m=p.db
m===$&&A.a(n)
m.bx("down",!0)
p.dx=2}}m=p.db
m===$&&A.a(n)
m.T()}break
case 1:m=p.db
m===$&&A.a(n)
q=m.a
q===$&&A.a("bats")
if(Math.max(q[0].e,q[1].e)>9)p.cy=B.ab
else m.T()
break
case 2:if(s){p.cy=B.w
p.dx=1
p.db=A.fR(A.r([null,null],t.v),p)}break}},
dl(){var s,r=this,q=$.i.u().Q
q===$&&A.a("gfx")
q.cU(0,0,0,0)
q=r.db
q===$&&A.a("game")
q.cW()
switch(r.cy.a){case 0:q=r.dx
s=$.i.u().Q
s===$&&A.a("gfx")
q=r.dy.k(0,"menu"+(q-1))
q.toString
s.V(q,0,0,0)
break
case 2:q=$.i.u().Q
q===$&&A.a("gfx")
s=r.dy.k(0,"over")
s.toString
q.V(s,0,0,0)
break
case 1:break}}}
A.dQ.prototype={
$2(a,b){var s,r,q,p,o,n,m
A.I(a)
A.d(b)
for(s="sounds/"+a,r=this.a.fr,q=$.i.a,p=0;p<b;++p){o=""+p
n=$.i.b
if(n===$.i)A.p(A.A(q))
n=n.ay
n===$&&A.a("resources")
m=new A.d9(B.bL,B.i)
m.d=A.dR(0,0)
m.d9(s+o+".ogg",n.b,n.c.w)
r.l(0,a+o,m)}},
$S:30};(function aliases(){var s=J.bG.prototype
s.bM=s.B
s=J.av.prototype
s.bN=s.i
s=A.k.prototype
s.bO=s.B})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_1u,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u
s(A,"ky","jy",7)
s(A,"kz","jz",7)
s(A,"kA","jA",7)
r(A,"ij","kp",1)
q(A.cE.prototype,"gcq","cr",0)
q(A.cB.prototype,"gcf","cg",0)
var n
q(n=A.cN.prototype,"gc0","c1",0)
q(n,"gc4","c5",0)
q(n=A.cU.prototype,"gcC","cD",0)
q(n,"gcb","cc",0)
q(n,"gcd","ce",28)
q(n,"gcA","cB",0)
q(n,"gcw","cz",0)
q(n,"gcu","cv",0)
q(n,"gck","cl",0)
q(n,"gco","cp",0)
q(n,"gcm","cn",0)
q(n,"gcs","ct",0)
q(n,"gci","cj",0)
s(A,"kF","k0",6)
s(A,"kE","k_",6)
s(A,"kH","kv",6)
p(A,"kG",1,null,["$2","$1"],["dv",function(a){return A.dv(a,B.c6)}],21,0)
o(A.aL.prototype,"gM","cP",4)
o(n=A.cG.prototype,"gdn","dq",4)
o(n,"gdr","ds",4)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.k,null)
q(A.k,[A.fV,J.bG,J.bt,A.e,A.bv,A.B,A.en,A.aR,A.bS,A.bZ,A.bC,A.O,A.az,A.bd,A.b5,A.cg,A.bH,A.ez,A.d3,A.bD,A.cm,A.as,A.aw,A.e9,A.bO,A.bN,A.cR,A.f1,A.eL,A.du,A.a3,A.dm,A.dt,A.f4,A.dg,A.cn,A.V,A.di,A.am,A.C,A.dh,A.c0,A.dq,A.ct,A.cc,A.t,A.cs,A.ch,A.at,A.bA,A.eM,A.d5,A.c_,A.dl,A.cM,A.a1,A.v,A.dr,A.c1,A.d2,A.f_,A.dy,A.dz,A.cE,A.bu,A.d9,A.dY,A.ej,A.au,A.aA,A.cB,A.dn,A.cN,A.bx,A.e6,A.ds,A.cU,A.ek,A.ae,A.ea,A.d7,A.eF,A.af,A.cT,A.df,A.c5,A.c6,A.fQ,A.ca,A.aK,A.dW])
q(J.bG,[J.cQ,J.bI,J.bL,J.ba,J.bb,J.bK,J.b9])
q(J.bL,[J.av,J.y,A.a6,A.bV])
q(J.av,[J.d6,J.bj,J.ac])
r(J.e5,J.y)
q(J.bK,[J.b8,J.bJ])
q(A.e,[A.aB,A.j,A.aS,A.ai,A.cf,A.bk])
q(A.aB,[A.aM,A.cu])
r(A.c8,A.aM)
r(A.c7,A.cu)
r(A.bw,A.c7)
q(A.B,[A.bc,A.ak,A.cS,A.dd,A.d8,A.dk,A.cC,A.a4,A.d1,A.c4,A.dc,A.bh,A.cK])
q(A.j,[A.R,A.aN,A.ad,A.aQ,A.cb])
q(A.R,[A.c2,A.a2,A.bQ])
r(A.bB,A.aS)
r(A.b6,A.ai)
r(A.bl,A.bd)
r(A.c3,A.bl)
r(A.by,A.c3)
q(A.b5,[A.bz,A.bF])
r(A.bX,A.ak)
q(A.as,[A.cI,A.cJ,A.db,A.fs,A.fu,A.eI,A.eH,A.fe,A.eY,A.eq,A.f3,A.fw,A.fH,A.fI,A.dF,A.dC,A.dD,A.dE,A.dA,A.dM,A.dN,A.dJ,A.dK,A.dL,A.ep,A.eo,A.dZ,A.e_,A.e0,A.ew,A.ex,A.e7,A.e8,A.fE,A.fB,A.fC,A.fD,A.fz,A.fA,A.fy,A.em,A.el,A.eb,A.fi,A.eO,A.dX])
q(A.db,[A.da,A.b3])
q(A.aw,[A.a0,A.aW])
r(A.bM,A.a0)
q(A.cJ,[A.ft,A.ff,A.fn,A.eZ,A.ef,A.eg,A.ec,A.ed,A.et,A.dQ])
q(A.bV,[A.cV,A.be])
q(A.be,[A.ci,A.ck])
r(A.cj,A.ci)
r(A.bT,A.cj)
r(A.cl,A.ck)
r(A.bU,A.cl)
q(A.bT,[A.aT,A.cW])
q(A.bU,[A.cX,A.cY,A.cZ,A.bW,A.d_,A.ax,A.d0])
r(A.co,A.dk)
q(A.cI,[A.eJ,A.eK,A.f5,A.dV,A.eP,A.eU,A.eT,A.eR,A.eQ,A.eX,A.eW,A.eV,A.er,A.fl,A.f2,A.dB,A.dI,A.dO])
r(A.aU,A.di)
r(A.dp,A.ct)
r(A.cd,A.aW)
q(A.a4,[A.bg,A.cO])
q(A.eM,[A.b4,A.bR,A.dP,A.aC,A.K,A.ce,A.b,A.aE,A.bE])
r(A.c9,A.c0)
r(A.dj,A.c9)
q(A.aK,[A.ab,A.cF,A.aL])
r(A.cG,A.dy)
s(A.cu,A.t)
s(A.ci,A.t)
s(A.cj,A.O)
s(A.ck,A.t)
s(A.cl,A.O)
s(A.bl,A.cs)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",o:"double",P:"num",N:"String",U:"bool",v:"Null",m:"List",k:"Object",T:"Map"},mangledNames:{},types:["~(l)","~()","v(l)","v()","o()","v(@)","@(m<@>)","~(~())","~(@)","c(c,ae)","v(aA)","@(@)","~(bi,@)","k?(k?)","v(k,ay)","v(P)","~(c,@)","v(~)","a5<v>(k,@(a6?),~(l))","U(au)","v(l?)","@(m<@>[aE])","v(k,@(l?),~(l))","v(@,ay)","@(N)","U(ae)","N(@)","P(P,P)","k(l)","U(ab)","~(N,c)","@(@,N)","v(~())","~(k?,k?)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.jO(v.typeUniverse,JSON.parse('{"ac":"av","d6":"av","bj":"av","y":{"m":["1"],"j":["1"],"l":[],"e":["1"]},"cQ":{"U":[],"w":[]},"bI":{"v":[],"w":[]},"bL":{"l":[]},"av":{"l":[]},"e5":{"y":["1"],"m":["1"],"j":["1"],"l":[],"e":["1"]},"bt":{"E":["1"]},"bK":{"o":[],"P":[]},"b8":{"o":[],"c":[],"P":[],"w":[]},"bJ":{"o":[],"P":[],"w":[]},"b9":{"N":[],"eh":[],"w":[]},"aB":{"e":["2"]},"bv":{"E":["2"]},"aM":{"aB":["1","2"],"e":["2"],"e.E":"2"},"c8":{"aM":["1","2"],"aB":["1","2"],"j":["2"],"e":["2"],"e.E":"2"},"c7":{"t":["2"],"m":["2"],"aB":["1","2"],"j":["2"],"e":["2"]},"bw":{"c7":["1","2"],"t":["2"],"m":["2"],"aB":["1","2"],"j":["2"],"e":["2"],"t.E":"2","e.E":"2"},"bc":{"B":[]},"j":{"e":["1"]},"R":{"j":["1"],"e":["1"]},"c2":{"R":["1"],"j":["1"],"e":["1"],"R.E":"1","e.E":"1"},"aR":{"E":["1"]},"aS":{"e":["2"],"e.E":"2"},"bB":{"aS":["1","2"],"j":["2"],"e":["2"],"e.E":"2"},"bS":{"E":["2"]},"a2":{"R":["2"],"j":["2"],"e":["2"],"R.E":"2","e.E":"2"},"ai":{"e":["1"],"e.E":"1"},"b6":{"ai":["1"],"j":["1"],"e":["1"],"e.E":"1"},"bZ":{"E":["1"]},"aN":{"j":["1"],"e":["1"],"e.E":"1"},"bC":{"E":["1"]},"az":{"bi":[]},"by":{"c3":["1","2"],"bl":["1","2"],"bd":["1","2"],"cs":["1","2"],"T":["1","2"]},"b5":{"T":["1","2"]},"bz":{"b5":["1","2"],"T":["1","2"]},"cf":{"e":["1"],"e.E":"1"},"cg":{"E":["1"]},"bF":{"b5":["1","2"],"T":["1","2"]},"bH":{"hx":[]},"bX":{"ak":[],"B":[]},"cS":{"B":[]},"dd":{"B":[]},"d3":{"aO":[]},"cm":{"ay":[]},"as":{"aP":[]},"cI":{"aP":[]},"cJ":{"aP":[]},"db":{"aP":[]},"da":{"aP":[]},"b3":{"aP":[]},"d8":{"B":[]},"a0":{"aw":["1","2"],"fX":["1","2"],"T":["1","2"]},"ad":{"j":["1"],"e":["1"],"e.E":"1"},"bO":{"E":["1"]},"aQ":{"j":["a1<1,2>"],"e":["a1<1,2>"],"e.E":"a1<1,2>"},"bN":{"E":["a1<1,2>"]},"bM":{"a0":["1","2"],"aw":["1","2"],"fX":["1","2"],"T":["1","2"]},"cR":{"jq":[],"eh":[]},"a6":{"l":[],"cH":[],"w":[]},"ax":{"eD":[],"t":["c"],"m":["c"],"W":["c"],"j":["c"],"l":[],"e":["c"],"O":["c"],"w":[],"t.E":"c"},"bV":{"l":[]},"du":{"cH":[]},"cV":{"fP":[],"l":[],"w":[]},"be":{"W":["1"],"l":[]},"bT":{"t":["o"],"m":["o"],"W":["o"],"j":["o"],"l":[],"e":["o"],"O":["o"]},"bU":{"t":["c"],"m":["c"],"W":["c"],"j":["c"],"l":[],"e":["c"],"O":["c"]},"aT":{"dT":[],"t":["o"],"m":["o"],"W":["o"],"j":["o"],"l":[],"e":["o"],"O":["o"],"w":[],"t.E":"o"},"cW":{"dU":[],"t":["o"],"m":["o"],"W":["o"],"j":["o"],"l":[],"e":["o"],"O":["o"],"w":[],"t.E":"o"},"cX":{"e2":[],"t":["c"],"m":["c"],"W":["c"],"j":["c"],"l":[],"e":["c"],"O":["c"],"w":[],"t.E":"c"},"cY":{"e3":[],"t":["c"],"m":["c"],"W":["c"],"j":["c"],"l":[],"e":["c"],"O":["c"],"w":[],"t.E":"c"},"cZ":{"e4":[],"t":["c"],"m":["c"],"W":["c"],"j":["c"],"l":[],"e":["c"],"O":["c"],"w":[],"t.E":"c"},"bW":{"eB":[],"t":["c"],"m":["c"],"W":["c"],"j":["c"],"l":[],"e":["c"],"O":["c"],"w":[],"t.E":"c"},"d_":{"eC":[],"t":["c"],"m":["c"],"W":["c"],"j":["c"],"l":[],"e":["c"],"O":["c"],"w":[],"t.E":"c"},"d0":{"eE":[],"t":["c"],"m":["c"],"W":["c"],"j":["c"],"l":[],"e":["c"],"O":["c"],"w":[],"t.E":"c"},"dk":{"B":[]},"co":{"ak":[],"B":[]},"cn":{"E":["1"]},"bk":{"e":["1"],"e.E":"1"},"V":{"B":[]},"aU":{"di":["1"]},"C":{"a5":["1"]},"ct":{"hN":[]},"dp":{"ct":[],"hN":[]},"aW":{"aw":["1","2"],"hv":["1","2"],"T":["1","2"]},"cd":{"aW":["1","2"],"aw":["1","2"],"hv":["1","2"],"T":["1","2"]},"cb":{"j":["1"],"e":["1"],"e.E":"1"},"cc":{"E":["1"]},"aw":{"T":["1","2"]},"bd":{"T":["1","2"]},"c3":{"bl":["1","2"],"bd":["1","2"],"cs":["1","2"],"T":["1","2"]},"bQ":{"jn":["1"],"R":["1"],"j":["1"],"e":["1"],"R.E":"1","e.E":"1"},"ch":{"E":["1"]},"o":{"P":[]},"c":{"P":[]},"m":{"j":["1"],"e":["1"]},"N":{"eh":[]},"cC":{"B":[]},"ak":{"B":[]},"a4":{"B":[]},"bg":{"B":[]},"cO":{"B":[]},"d1":{"B":[]},"c4":{"B":[]},"dc":{"B":[]},"bh":{"B":[]},"cK":{"B":[]},"d5":{"B":[]},"c_":{"B":[]},"dl":{"aO":[]},"cM":{"aO":[]},"dr":{"ay":[]},"d2":{"aO":[]},"c9":{"c0":["1"]},"dj":{"c9":["1"],"c0":["1"]},"ca":{"ju":["1"]},"ab":{"aK":[]},"aL":{"aK":[]},"cF":{"aK":[]},"e4":{"m":["c"],"j":["c"],"e":["c"]},"eE":{"m":["c"],"j":["c"],"e":["c"]},"eD":{"m":["c"],"j":["c"],"e":["c"]},"e2":{"m":["c"],"j":["c"],"e":["c"]},"eB":{"m":["c"],"j":["c"],"e":["c"]},"e3":{"m":["c"],"j":["c"],"e":["c"]},"eC":{"m":["c"],"j":["c"],"e":["c"]},"dT":{"m":["o"],"j":["o"],"e":["o"]},"dU":{"m":["o"],"j":["o"],"e":["o"]}}'))
A.jN(v.typeUniverse,JSON.parse('{"cu":2,"be":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",a:"Error: Primitive requires 1 vertices, which exceeds total buffer capacity ",f:"vbo_buffer is full. consider enlarge it for better performance"}
var t=(function rtii(){var s=A.bq
return{J:s("aK"),n:s("V"),d:s("bu"),k:s("l_"),D:s("cH"),e:s("fP"),r:s("by<bi,@>"),X:s("j<@>"),C:s("B"),L:s("aO"),h4:s("dT"),q:s("dU"),Z:s("aP"),I:s("au"),gS:s("ab"),dQ:s("e2"),an:s("e3"),gj:s("e4"),o:s("hx"),V:s("e<@>"),fn:s("y<aL>"),cd:s("y<au>"),eC:s("y<ab>"),G:s("y<ae>"),aw:s("y<af>"),s:s("y<N>"),u:s("y<o>"),b:s("y<@>"),t:s("y<c>"),B:s("y<l?>"),c:s("y<k?>"),v:s("y<o()?>"),gc:s("y<~(aA)>"),T:s("bI"),m:s("l"),g:s("ac"),aU:s("W<@>"),eo:s("a0<bi,@>"),W:s("b"),dy:s("bQ<bx>"),dL:s("m<bu>"),dV:s("m<aL>"),Y:s("m<au>"),df:s("m<N>"),j:s("m<@>"),d5:s("m<l?>"),E:s("ae"),f:s("T<@,@>"),gU:s("af"),bZ:s("a6"),al:s("aT"),gi:s("ax"),P:s("v"),K:s("k"),gT:s("l2"),gA:s("d9"),l:s("ay"),N:s("N"),fo:s("bi"),R:s("aA"),dm:s("w"),eK:s("ak"),h7:s("eB"),bv:s("eC"),go:s("eD"),bW:s("eE"),ak:s("bj"),a:s("dj<l>"),_:s("C<@>"),fJ:s("C<c>"),gW:s("dn"),hg:s("cd<k?,k?>"),cn:s("ds"),y:s("U"),bN:s("U(k)"),i:s("o"),A:s("@"),fO:s("@()"),w:s("@(k)"),Q:s("@(k,ay)"),U:s("@(aA)"),cZ:s("@(l?)"),dS:s("@(a6?)"),S:s("c"),gZ:s("bx?"),eH:s("a5<v>?"),z:s("l?"),x:s("m<c>?"),cz:s("a6?"),O:s("k?"),dk:s("N?"),F:s("am<@,@>?"),fQ:s("U?"),cD:s("o?"),h6:s("c?"),cg:s("P?"),g5:s("~()?"),p:s("P"),H:s("~"),M:s("~()"),h:s("~(l)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.ac=J.bG.prototype
B.a=J.y.prototype
B.b=J.b8.prototype
B.c=J.bK.prototype
B.h=J.b9.prototype
B.ad=J.ac.prototype
B.ae=J.bL.prototype
B.V=A.aT.prototype
B.bN=A.bW.prototype
B.W=A.ax.prototype
B.X=J.d6.prototype
B.r=J.bj.prototype
B.a1=new A.dP(1,"alpha")
B.a2=new A.bC(A.bq("bC<0&>"))
B.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.a3=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.a8=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.a4=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.a7=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.a6=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.a5=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.v=function(hooks) { return hooks; }

B.a9=new A.d5()
B.k=new A.en()
B.l=new A.f_()
B.d=new A.dp()
B.m=new A.dr()
B.e=new A.b4(0,"stopped")
B.f=new A.b4(1,"playing")
B.n=new A.b4(2,"paused")
B.o=new A.b4(3,"suspended")
B.i=new A.bA(0)
B.w=new A.bE(0,"menu")
B.aa=new A.bE(1,"play")
B.ab=new A.bE(2,"gameOver")
B.p=new A.b("ArrowDown",49,"Down")
B.q=new A.b("ArrowUp",48,"Up")
B.M=new A.b("KeyA",0,"A")
B.N=new A.b("KeyK",10,"K")
B.O=new A.b("KeyM",12,"M")
B.P=new A.b("KeyZ",25,"Z")
B.Q=new A.b("Space",52,"Space")
B.j=new A.b("Unknown",100,"Unknown")
B.x=new A.K(0,"A")
B.y=new A.K(1,"B")
B.E=new A.K(2,"X")
B.F=new A.K(3,"Y")
B.G=new A.K(4,"LB")
B.H=new A.K(5,"RB")
B.I=new A.K(6,"View")
B.J=new A.K(7,"Menu")
B.K=new A.K(8,"Left")
B.L=new A.K(9,"Up")
B.z=new A.K(10,"Right")
B.A=new A.K(11,"Down")
B.B=new A.K(12,"LSB")
B.C=new A.K(13,"RSB")
B.D=new A.K(14,"Home")
B.bJ=A.r(s([B.x,B.y,B.E,B.F,B.G,B.H,B.I,B.J,B.K,B.L,B.z,B.A,B.B,B.C,B.D]),A.bq("y<K>"))
B.R=A.r(s([]),t.b)
B.aU=new A.b("KeyB",1,"B")
B.aV=new A.b("KeyC",2,"C")
B.aW=new A.b("KeyD",3,"D")
B.aX=new A.b("KeyE",4,"E")
B.aY=new A.b("KeyF",5,"F")
B.aZ=new A.b("KeyG",6,"G")
B.b_=new A.b("KeyH",7,"H")
B.b0=new A.b("KeyI",8,"I")
B.b1=new A.b("KeyJ",9,"J")
B.b2=new A.b("KeyL",11,"L")
B.b3=new A.b("KeyN",13,"N")
B.b4=new A.b("KeyO",14,"O")
B.b5=new A.b("KeyP",15,"P")
B.b6=new A.b("KeyQ",16,"Q")
B.b7=new A.b("KeyR",17,"R")
B.b8=new A.b("KeyS",18,"S")
B.b9=new A.b("KeyT",19,"T")
B.ba=new A.b("KeyU",20,"U")
B.bb=new A.b("KeyV",21,"V")
B.bc=new A.b("KeyW",22,"W")
B.bd=new A.b("KeyX",23,"X")
B.be=new A.b("KeyY",24,"Y")
B.as=new A.b("Digit0",26,"Digit0")
B.at=new A.b("Digit1",27,"Digit1")
B.au=new A.b("Digit2",28,"Digit2")
B.av=new A.b("Digit3",29,"Digit3")
B.aw=new A.b("Digit4",30,"Digit4")
B.ax=new A.b("Digit5",31,"Digit5")
B.ay=new A.b("Digit6",32,"Digit6")
B.az=new A.b("Digit7",33,"Digit7")
B.aA=new A.b("Digit8",34,"Digit8")
B.aB=new A.b("Digit9",35,"Digit9")
B.aJ=new A.b("F1",36,"F1")
B.aK=new A.b("F2",37,"F2")
B.aL=new A.b("F3",38,"F3")
B.aM=new A.b("F4",39,"F4")
B.aN=new A.b("F5",40,"F5")
B.aO=new A.b("F6",41,"F6")
B.aP=new A.b("F7",42,"F7")
B.aQ=new A.b("F8",43,"F8")
B.aR=new A.b("F9",44,"F9")
B.aG=new A.b("F10",45,"F10")
B.aH=new A.b("F11",46,"F11")
B.aI=new A.b("F12",47,"F12")
B.ah=new A.b("ArrowLeft",50,"Left")
B.ai=new A.b("ArrowRight",51,"Right")
B.aD=new A.b("Enter",53,"Enter")
B.aF=new A.b("Escape",54,"Escape")
B.bI=new A.b("Tab",55,"Tab")
B.aj=new A.b("Backquote",56,"Backquote")
B.bD=new A.b("Quote",57,"Quote")
B.bE=new A.b("Semicolon",58,"Semicolon")
B.ao=new A.b("Comma",59,"Comma")
B.bC=new A.b("Period",60,"Period")
B.bH=new A.b("Slash",61,"Slash")
B.ak=new A.b("Backslash",62,"Backslash")
B.bh=new A.b("Minus",63,"Minus")
B.aE=new A.b("Equal",64,"Equal")
B.am=new A.b("BracketLeft",65,"BracketLeft")
B.an=new A.b("BracketRight",66,"BracketRight")
B.bF=new A.b("ShiftLeft",67,"ShiftLeft")
B.bG=new A.b("ShiftRight",68,"ShiftRight")
B.ap=new A.b("ControlLeft",69,"ControlLeft")
B.aq=new A.b("ControlRight",70,"ControlRight")
B.af=new A.b("AltLeft",71,"AltLeft")
B.ag=new A.b("AltRight",72,"AltRight")
B.bf=new A.b("MetaLeft",73,"MetaLeft")
B.bg=new A.b("MetaRight",74,"MetaRight")
B.al=new A.b("Backspace",75,"Backspace")
B.ar=new A.b("Delete",76,"Delete")
B.aT=new A.b("Insert",77,"Insert")
B.aS=new A.b("Home",78,"Home")
B.aC=new A.b("End",79,"End")
B.bB=new A.b("PageUp",80,"PageUp")
B.bA=new A.b("PageDown",81,"PageDown")
B.bi=new A.b("Numpad0",82,"Num0")
B.bj=new A.b("Numpad1",83,"Num1")
B.bk=new A.b("Numpad2",84,"Num2")
B.bl=new A.b("Numpad3",85,"Num3")
B.bm=new A.b("Numpad4",86,"Num4")
B.bn=new A.b("Numpad5",87,"Num5")
B.bo=new A.b("Numpad6",88,"Num6")
B.bp=new A.b("Numpad7",89,"Num7")
B.bq=new A.b("Numpad8",90,"Num8")
B.br=new A.b("Numpad9",91,"Num9")
B.bs=new A.b("NumpadAdd",92,"NumAdd")
B.bz=new A.b("NumpadSubtract",93,"NumSubtract")
B.by=new A.b("NumpadMultiply",94,"NumMultiply")
B.bv=new A.b("NumpadDivide",95,"NumDivide")
B.bu=new A.b("NumpadDecimal",96,"NumDecimal")
B.bt=new A.b("NumpadComma",97,"NumComma")
B.bw=new A.b("NumpadEnter",98,"NumEnter")
B.bx=new A.b("NumpadEqual",99,"NumEqual")
B.bK=A.r(s([B.M,B.aU,B.aV,B.aW,B.aX,B.aY,B.aZ,B.b_,B.b0,B.b1,B.N,B.b2,B.O,B.b3,B.b4,B.b5,B.b6,B.b7,B.b8,B.b9,B.ba,B.bb,B.bc,B.bd,B.be,B.P,B.as,B.at,B.au,B.av,B.aw,B.ax,B.ay,B.az,B.aA,B.aB,B.aJ,B.aK,B.aL,B.aM,B.aN,B.aO,B.aP,B.aQ,B.aR,B.aG,B.aH,B.aI,B.q,B.p,B.ah,B.ai,B.Q,B.aD,B.aF,B.bI,B.aj,B.bD,B.bE,B.ao,B.bC,B.bH,B.ak,B.bh,B.aE,B.am,B.an,B.bF,B.bG,B.ap,B.aq,B.af,B.ag,B.bf,B.bg,B.al,B.ar,B.aT,B.aS,B.aC,B.bB,B.bA,B.bi,B.bj,B.bk,B.bl,B.bm,B.bn,B.bo,B.bp,B.bq,B.br,B.bs,B.bz,B.by,B.bv,B.bu,B.bt,B.bw,B.bx,B.j]),A.bq("y<b>"))
B.bL=new A.bR(0,"none")
B.S=new A.bR(2,"error")
B.T=new A.bR(3,"ready")
B.bO={}
B.U=new A.bz(B.bO,[],A.bq("bz<bi,@>"))
B.bM=new A.bF([B.x,0,B.y,1,B.E,2,B.F,3,B.G,4,B.H,5,B.I,8,B.J,9,B.B,10,B.C,11,B.L,12,B.A,13,B.K,14,B.z,15,B.D,16],A.bq("bF<K,c>"))
B.bP=A.a_("cH")
B.bQ=A.a_("fP")
B.bR=A.a_("dT")
B.bS=A.a_("dU")
B.bT=A.a_("e2")
B.bU=A.a_("e3")
B.bV=A.a_("e4")
B.bW=A.a_("l")
B.bX=A.a_("k")
B.bY=A.a_("eB")
B.bZ=A.a_("eC")
B.c_=A.a_("eD")
B.c0=A.a_("eE")
B.c1=new A.ce(0,"keyDown")
B.Y=new A.ce(1,"keyChar")
B.c2=new A.ce(2,"keyUp")
B.c3=new A.aC(0,"points")
B.c4=new A.aC(1,"lines")
B.Z=new A.aC(2,"lineStrip")
B.c5=new A.aC(3,"triangles")
B.a_=new A.aC(4,"quads")
B.t=new A.aC(5,"triangleFan")
B.c6=new A.aE(0,"nothing")
B.c7=new A.aE(2,"warn")
B.c8=new A.aE(3,"error")
B.a0=new A.aE(4,"die")})();(function staticFields(){$.f0=null
$.Y=A.r([],A.bq("y<k>"))
$.hF=null
$.hq=null
$.hp=null
$.im=null
$.ii=null
$.iq=null
$.fp=null
$.fv=null
$.he=null
$.bn=null
$.cv=null
$.cw=null
$.h9=!1
$.x=B.d
$.i=A.h3("instance")
$.ev=A.h3("white")
$.a8=A.r([],t.s)
$.u=A.h3("app")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"l0","hi",()=>A.kJ("_$dart_dartClosure"))
s($,"l6","iv",()=>A.al(A.eA({
toString:function(){return"$receiver$"}})))
s($,"l7","iw",()=>A.al(A.eA({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"l8","ix",()=>A.al(A.eA(null)))
s($,"l9","iy",()=>A.al(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"lc","iB",()=>A.al(A.eA(void 0)))
s($,"ld","iC",()=>A.al(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"lb","iA",()=>A.al(A.hL(null)))
s($,"la","iz",()=>A.al(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"lf","iE",()=>A.al(A.hL(void 0)))
s($,"le","iD",()=>A.al(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"lg","hj",()=>A.jx())
s($,"lh","dx",()=>A.fG(B.bX))
s($,"l4","it",()=>A.hC(A.r([0,0,0,0],t.t)))
s($,"l5","iu",()=>A.hC(A.r([255,255,255,255],t.t)))
s($,"l1","is",()=>{var r,q,p=A.bP(t.N,t.W)
for(r=0;r<101;++r){q=B.bK[r]
p.l(0,q.c,q)}return p})
s($,"lm","fJ",()=>A.eG(A.kG()))
s($,"ln","aI",()=>A.eG(A.kH()))
s($,"ll","cA",()=>A.eG(A.kF()))
s($,"lk","aa",()=>A.eG(A.kE()))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.a6,ArrayBufferView:A.bV,DataView:A.cV,Float32Array:A.aT,Float64Array:A.cW,Int16Array:A.cX,Int32Array:A.cY,Int8Array:A.cZ,Uint16Array:A.bW,Uint32Array:A.d_,Uint8ClampedArray:A.ax,CanvasPixelArray:A.ax,Uint8Array:A.d0})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.be.$nativeSuperclassTag="ArrayBufferView"
A.ci.$nativeSuperclassTag="ArrayBufferView"
A.cj.$nativeSuperclassTag="ArrayBufferView"
A.bT.$nativeSuperclassTag="ArrayBufferView"
A.ck.$nativeSuperclassTag="ArrayBufferView"
A.cl.$nativeSuperclassTag="ArrayBufferView"
A.bU.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.kV
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
