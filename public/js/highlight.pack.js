/*!
  Highlight.js v11.11.1 (git: 3ec489432c)
  (c) 2006-2025 Josh Goebel <hello@joshgoebel.com> and other contributors
  License: BSD-3-Clause
 */
var hljs=function(){"use strict";function e(n){
return n instanceof Map?n.clear=n.delete=n.set=()=>{
throw Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=()=>{
throw Error("set is read-only")
}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach((t=>{
const a=n[t],s=typeof a;"object"!==s&&"function"!==s||Object.isFrozen(a)||e(a)
})),n}class n{constructor(e){
void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}
ignoreMatch(){this.isMatchIgnored=!0}}function t(e){
return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
}function a(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n]
;return n.forEach((e=>{for(const n in e)t[n]=e[n]})),t}const s=e=>!!e.scope
;class i{constructor(e,n){
this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){
this.buffer+=t(e)}openNode(e){if(!s(e))return;const n=((e,{prefix:n})=>{
if(e.startsWith("language:"))return e.replace("language:","language-")
;if(e.includes(".")){const t=e.split(".")
;return[`${n}${t.shift()}`,...t.map(((e,n)=>`${e}${"_".repeat(n+1)}`))].join(" ")
}return`${n}${e}`})(e.scope,{prefix:this.classPrefix});this.span(n)}
closeNode(e){s(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
this.buffer+=`<span class="${e}">`}}const r=(e={})=>{const n={children:[]}
;return Object.assign(n,e),n};class o{constructor(){
this.rootNode=r(),this.stack=[this.rootNode]}get top(){
return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
this.top.children.push(e)}openNode(e){const n=r({scope:e})
;this.add(n),this.stack.push(n)}closeNode(){
if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){
return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),
n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){
"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
o._collapse(e)})))}}class c extends o{constructor(e){super(),this.options=e}
addText(e){""!==e&&this.add(e)}startScope(e){this.openNode(e)}endScope(){
this.closeNode()}__addSublanguage(e,n){const t=e.root
;n&&(t.scope="language:"+n),this.add(t)}toHTML(){
return new i(this,this.options).value()}finalize(){
return this.closeAllNodes(),!0}}function l(e){
return e?"string"==typeof e?e:e.source:null}function d(e){return h("(?=",e,")")}
function g(e){return h("(?:",e,")*")}function u(e){return h("(?:",e,")?")}
function h(...e){return e.map((e=>l(e))).join("")}function b(...e){const n=(e=>{
const n=e[e.length-1]
;return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}
})(e);return"("+(n.capture?"":"?:")+e.map((e=>l(e))).join("|")+")"}
function p(e){return RegExp(e.toString()+"|").exec("").length-1}
const m=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
;function f(e,{joinWith:n}){let t=0;return e.map((e=>{t+=1;const n=t
;let a=l(e),s="";for(;a.length>0;){const e=m.exec(a);if(!e){s+=a;break}
s+=a.substring(0,e.index),
a=a.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?s+="\\"+(Number(e[1])+n):(s+=e[0],
"("===e[0]&&t++)}return s})).map((e=>`(${e})`)).join(n)}
const _="[a-zA-Z]\\w*",E="[a-zA-Z_]\\w*",y="\\b\\d+(\\.\\d+)?",w="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",x="\\b(0b[01]+)",N={
begin:"\\\\[\\s\\S]",relevance:0},v={scope:"string",begin:"'",end:"'",
illegal:"\\n",contains:[N]},A={scope:"string",begin:'"',end:'"',illegal:"\\n",
contains:[N]},O=(e,n,t={})=>{const s=a({scope:"comment",begin:e,end:n,
contains:[]},t);s.contains.push({scope:"doctag",
begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
;const i=b("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
;return s.contains.push({begin:h(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),s
},S=O("//","$"),M=O("/\\*","\\*/"),k=O("#","$");var I=Object.freeze({
__proto__:null,APOS_STRING_MODE:v,BACKSLASH_ESCAPE:N,BINARY_NUMBER_MODE:{
scope:"number",begin:x,relevance:0},BINARY_NUMBER_RE:x,COMMENT:O,
C_BLOCK_COMMENT_MODE:M,C_LINE_COMMENT_MODE:S,C_NUMBER_MODE:{scope:"number",
begin:w,relevance:0},C_NUMBER_RE:w,END_SAME_AS_BEGIN:e=>Object.assign(e,{
"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{
n.data._beginMatch!==e[1]&&n.ignoreMatch()}}),HASH_COMMENT_MODE:k,IDENT_RE:_,
MATCH_NOTHING_RE:/\b\B/,METHOD_GUARD:{begin:"\\.\\s*"+E,relevance:0},
NUMBER_MODE:{scope:"number",begin:y,relevance:0},NUMBER_RE:y,
PHRASAL_WORDS_MODE:{
begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
},QUOTE_STRING_MODE:A,REGEXP_MODE:{scope:"regexp",begin:/\/(?=[^/\n]*\/)/,
end:/\/[gimuy]*/,contains:[N,{begin:/\[/,end:/\]/,relevance:0,contains:[N]}]},
RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
SHEBANG:(e={})=>{const n=/^#![ ]*\//
;return e.binary&&(e.begin=h(n,/.*\b/,e.binary,/\b.*/)),a({scope:"meta",begin:n,
end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},
TITLE_MODE:{scope:"title",begin:_,relevance:0},UNDERSCORE_IDENT_RE:E,
UNDERSCORE_TITLE_MODE:{scope:"title",begin:E,relevance:0}});function T(e,n){
"."===e.input[e.index-1]&&n.ignoreMatch()}function R(e,n){
void 0!==e.className&&(e.scope=e.className,delete e.className)}function C(e,n){
n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
e.__beforeBegin=T,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,
void 0===e.relevance&&(e.relevance=0))}function L(e,n){
Array.isArray(e.illegal)&&(e.illegal=b(...e.illegal))}function B(e,n){
if(e.match){
if(e.begin||e.end)throw Error("begin & end are not supported with match")
;e.begin=e.match,delete e.match}}function D(e,n){
void 0===e.relevance&&(e.relevance=1)}const j=(e,n)=>{if(!e.beforeMatch)return
;if(e.starts)throw Error("beforeMatch cannot be used with starts")
;const t=Object.assign({},e);Object.keys(e).forEach((n=>{delete e[n]
})),e.keywords=t.keywords,e.begin=h(t.beforeMatch,d(t.begin)),e.starts={
relevance:0,contains:[Object.assign(t,{endsParent:!0})]
},e.relevance=0,delete t.beforeMatch
},$=["of","and","for","in","not","or","if","then","parent","list","value"]
;function z(e,n,t="keyword"){const a=Object.create(null)
;return"string"==typeof e?s(t,e.split(" ")):Array.isArray(e)?s(t,e):Object.keys(e).forEach((t=>{
Object.assign(a,z(e[t],n,t))})),a;function s(e,t){
n&&(t=t.map((e=>e.toLowerCase()))),t.forEach((n=>{const t=n.split("|")
;a[t[0]]=[e,P(t[0],t[1])]}))}}function P(e,n){
return n?Number(n):(e=>$.includes(e.toLowerCase()))(e)?0:1}const H={},U=e=>{
console.error(e)},Z=(e,...n)=>{console.log("WARN: "+e,...n)},F=(e,n)=>{
H[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),H[`${e}/${n}`]=!0)
},K=Error();function G(e,n,{key:t}){let a=0;const s=e[t],i={},r={}
;for(let e=1;e<=n.length;e++)r[e+a]=s[e],i[e+a]=!0,a+=p(n[e-1])
;e[t]=r,e[t]._emit=i,e[t]._multi=!0}function W(e){(e=>{
e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,
delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={
_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope
}),(e=>{if(Array.isArray(e.begin)){
if(e.skip||e.excludeBegin||e.returnBegin)throw U("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
K
;if("object"!=typeof e.beginScope||null===e.beginScope)throw U("beginScope must be object"),
K;G(e,e.begin,{key:"beginScope"}),e.begin=f(e.begin,{joinWith:""})}})(e),(e=>{
if(Array.isArray(e.end)){
if(e.skip||e.excludeEnd||e.returnEnd)throw U("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
K
;if("object"!=typeof e.endScope||null===e.endScope)throw U("endScope must be object"),
K;G(e,e.end,{key:"endScope"}),e.end=f(e.end,{joinWith:""})}})(e)}function X(e){
function n(n,t){
return RegExp(l(n),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(t?"g":""))
}class t{constructor(){
this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
addRule(e,n){
n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),
this.matchAt+=p(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
;const e=this.regexes.map((e=>e[1]));this.matcherRe=n(f(e,{joinWith:"|"
}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
;const n=this.matcherRe.exec(e);if(!n)return null
;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),a=this.matchIndexes[t]
;return n.splice(0,t),Object.assign(n,a)}}class s{constructor(){
this.rules=[],this.multiRegexes=[],
this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t
;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),
n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){
return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){
this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){
const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex
;let t=n.exec(e)
;if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{
const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}
return t&&(this.regexIndex+=t.position+1,
this.regexIndex===this.count&&this.considerAll()),t}}
if(e.compilerExtensions||(e.compilerExtensions=[]),
e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
;return e.classNameAliases=a(e.classNameAliases||{}),function t(i,r){const o=i
;if(i.isCompiled)return o
;[R,B,W,j].forEach((e=>e(i,r))),e.compilerExtensions.forEach((e=>e(i,r))),
i.__beforeBegin=null,[C,L,D].forEach((e=>e(i,r))),i.isCompiled=!0;let c=null
;return"object"==typeof i.keywords&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),
c=i.keywords.$pattern,
delete i.keywords.$pattern),c=c||/\w+/,i.keywords&&(i.keywords=z(i.keywords,e.case_insensitive)),
o.keywordPatternRe=n(c,!0),
r&&(i.begin||(i.begin=/\B|\b/),o.beginRe=n(o.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),
i.end&&(o.endRe=n(o.end)),
o.terminatorEnd=l(o.end)||"",i.endsWithParent&&r.terminatorEnd&&(o.terminatorEnd+=(i.end?"|":"")+r.terminatorEnd)),
i.illegal&&(o.illegalRe=n(i.illegal)),
i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((n=>a(e,{
variants:null},n)))),e.cachedVariants?e.cachedVariants:q(e)?a(e,{
starts:e.starts?a(e.starts):null
}):Object.isFrozen(e)?a(e):e))("self"===e?i:e)))),i.contains.forEach((e=>{t(e,o)
})),i.starts&&t(i.starts,r),o.matcher=(e=>{const n=new s
;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"
}))),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"
}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n})(o),o}(e)}function q(e){
return!!e&&(e.endsWithParent||q(e.starts))}class Q extends Error{
constructor(e,n){super(e),this.name="HTMLInjectionError",this.html=n}}
const J=t,V=a,Y=Symbol("nomatch"),ee=t=>{
const a=Object.create(null),s=Object.create(null),i=[];let r=!0
;const o="Could not find the language '{}', did you forget to load/include a language module?",l={
disableAutodetect:!0,name:"Plain text",contains:[]};let p={
ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,
languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
cssSelector:"pre code",languages:null,__emitter:c};function m(e){
return p.noHighlightRe.test(e)}function f(e,n,t){let a="",s=""
;"object"==typeof n?(a=e,
t=n.ignoreIllegals,s=n.language):(F("10.7.0","highlight(lang, code, ...args) has been deprecated."),
F("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
s=e,a=n),void 0===t&&(t=!0);const i={code:a,language:s};O("before:highlight",i)
;const r=i.result?i.result:_(i.language,i.code,t)
;return r.code=i.code,O("after:highlight",r),r}function _(e,t,s,i){
const c=Object.create(null);function l(){if(!O.keywords)return void M.addText(k)
;let e=0;O.keywordPatternRe.lastIndex=0;let n=O.keywordPatternRe.exec(k),t=""
;for(;n;){t+=k.substring(e,n.index)
;const s=x.case_insensitive?n[0].toLowerCase():n[0],i=(a=s,O.keywords[a]);if(i){
const[e,a]=i
;if(M.addText(t),t="",c[s]=(c[s]||0)+1,c[s]<=7&&(I+=a),e.startsWith("_"))t+=n[0];else{
const t=x.classNameAliases[e]||e;g(n[0],t)}}else t+=n[0]
;e=O.keywordPatternRe.lastIndex,n=O.keywordPatternRe.exec(k)}var a
;t+=k.substring(e),M.addText(t)}function d(){null!=O.subLanguage?(()=>{
if(""===k)return;let e=null;if("string"==typeof O.subLanguage){
if(!a[O.subLanguage])return void M.addText(k)
;e=_(O.subLanguage,k,!0,S[O.subLanguage]),S[O.subLanguage]=e._top
}else e=E(k,O.subLanguage.length?O.subLanguage:null)
;O.relevance>0&&(I+=e.relevance),M.__addSublanguage(e._emitter,e.language)
})():l(),k=""}function g(e,n){
""!==e&&(M.startScope(n),M.addText(e),M.endScope())}function u(e,n){let t=1
;const a=n.length-1;for(;t<=a;){if(!e._emit[t]){t++;continue}
const a=x.classNameAliases[e[t]]||e[t],s=n[t];a?g(s,a):(k=s,l(),k=""),t++}}
function h(e,n){
return e.scope&&"string"==typeof e.scope&&M.openNode(x.classNameAliases[e.scope]||e.scope),
e.beginScope&&(e.beginScope._wrap?(g(k,x.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),
k=""):e.beginScope._multi&&(u(e.beginScope,n),k="")),O=Object.create(e,{parent:{
value:O}}),O}function b(e,t,a){let s=((e,n)=>{const t=e&&e.exec(n)
;return t&&0===t.index})(e.endRe,a);if(s){if(e["on:end"]){const a=new n(e)
;e["on:end"](t,a),a.isMatchIgnored&&(s=!1)}if(s){
for(;e.endsParent&&e.parent;)e=e.parent;return e}}
if(e.endsWithParent)return b(e.parent,t,a)}function m(e){
return 0===O.matcher.regexIndex?(k+=e[0],1):(C=!0,0)}function f(e){
const n=e[0],a=t.substring(e.index),s=b(O,e,a);if(!s)return Y;const i=O
;O.endScope&&O.endScope._wrap?(d(),
g(n,O.endScope._wrap)):O.endScope&&O.endScope._multi?(d(),
u(O.endScope,e)):i.skip?k+=n:(i.returnEnd||i.excludeEnd||(k+=n),
d(),i.excludeEnd&&(k=n));do{
O.scope&&M.closeNode(),O.skip||O.subLanguage||(I+=O.relevance),O=O.parent
}while(O!==s.parent);return s.starts&&h(s.starts,e),i.returnEnd?0:n.length}
let y={};function w(a,i){const o=i&&i[0];if(k+=a,null==o)return d(),0
;if("begin"===y.type&&"end"===i.type&&y.index===i.index&&""===o){
if(k+=t.slice(i.index,i.index+1),!r){const n=Error(`0 width match regex (${e})`)
;throw n.languageName=e,n.badRule=y.rule,n}return 1}
if(y=i,"begin"===i.type)return(e=>{
const t=e[0],a=e.rule,s=new n(a),i=[a.__beforeBegin,a["on:begin"]]
;for(const n of i)if(n&&(n(e,s),s.isMatchIgnored))return m(t)
;return a.skip?k+=t:(a.excludeBegin&&(k+=t),
d(),a.returnBegin||a.excludeBegin||(k=t)),h(a,e),a.returnBegin?0:t.length})(i)
;if("illegal"===i.type&&!s){
const e=Error('Illegal lexeme "'+o+'" for mode "'+(O.scope||"<unnamed>")+'"')
;throw e.mode=O,e}if("end"===i.type){const e=f(i);if(e!==Y)return e}
if("illegal"===i.type&&""===o)return i.index===t.length||(k+="\n"),1
;if(R>1e5&&R>3*i.index)throw Error("potential infinite loop, way more iterations than matches")
;return k+=o,o.length}const x=N(e)
;if(!x)throw U(o.replace("{}",e)),Error('Unknown language: "'+e+'"')
;const v=X(x);let A="",O=i||v;const S={},M=new p.__emitter(p);(()=>{const e=[]
;for(let n=O;n!==x;n=n.parent)n.scope&&e.unshift(n.scope)
;e.forEach((e=>M.openNode(e)))})();let k="",I=0,T=0,R=0,C=!1;try{
if(x.__emitTokens)x.__emitTokens(t,M);else{for(O.matcher.considerAll();;){
R++,C?C=!1:O.matcher.considerAll(),O.matcher.lastIndex=T
;const e=O.matcher.exec(t);if(!e)break;const n=w(t.substring(T,e.index),e)
;T=e.index+n}w(t.substring(T))}return M.finalize(),A=M.toHTML(),{language:e,
value:A,relevance:I,illegal:!1,_emitter:M,_top:O}}catch(n){
if(n.message&&n.message.includes("Illegal"))return{language:e,value:J(t),
illegal:!0,relevance:0,_illegalBy:{message:n.message,index:T,
context:t.slice(T-100,T+100),mode:n.mode,resultSoFar:A},_emitter:M};if(r)return{
language:e,value:J(t),illegal:!1,relevance:0,errorRaised:n,_emitter:M,_top:O}
;throw n}}function E(e,n){n=n||p.languages||Object.keys(a);const t=(e=>{
const n={value:J(e),illegal:!1,relevance:0,_top:l,_emitter:new p.__emitter(p)}
;return n._emitter.addText(e),n})(e),s=n.filter(N).filter(A).map((n=>_(n,e,!1)))
;s.unshift(t);const i=s.sort(((e,n)=>{
if(e.relevance!==n.relevance)return n.relevance-e.relevance
;if(e.language&&n.language){if(N(e.language).supersetOf===n.language)return 1
;if(N(n.language).supersetOf===e.language)return-1}return 0})),[r,o]=i,c=r
;return c.secondBest=o,c}function y(e){let n=null;const t=(e=>{
let n=e.className+" ";n+=e.parentNode?e.parentNode.className:""
;const t=p.languageDetectRe.exec(n);if(t){const n=N(t[1])
;return n||(Z(o.replace("{}",t[1])),
Z("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}
return n.split(/\s+/).find((e=>m(e)||N(e)))})(e);if(m(t))return
;if(O("before:highlightElement",{el:e,language:t
}),e.dataset.highlighted)return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e)
;if(e.children.length>0&&(p.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
console.warn("The element with unescaped HTML:"),
console.warn(e)),p.throwUnescapedHTML))throw new Q("One of your code blocks includes unescaped HTML.",e.innerHTML)
;n=e;const a=n.textContent,i=t?f(a,{language:t,ignoreIllegals:!0}):E(a)
;e.innerHTML=i.value,e.dataset.highlighted="yes",((e,n,t)=>{const a=n&&s[n]||t
;e.classList.add("hljs"),e.classList.add("language-"+a)
})(e,t,i.language),e.result={language:i.language,re:i.relevance,
relevance:i.relevance},i.secondBest&&(e.secondBest={
language:i.secondBest.language,relevance:i.secondBest.relevance
}),O("after:highlightElement",{el:e,result:i,text:a})}let w=!1;function x(){
if("loading"===document.readyState)return w||window.addEventListener("DOMContentLoaded",(()=>{
x()}),!1),void(w=!0);document.querySelectorAll(p.cssSelector).forEach(y)}
function N(e){return e=(e||"").toLowerCase(),a[e]||a[s[e]]}
function v(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{
s[e.toLowerCase()]=n}))}function A(e){const n=N(e)
;return n&&!n.disableAutodetect}function O(e,n){const t=e;i.forEach((e=>{
e[t]&&e[t](n)}))}Object.assign(t,{highlight:f,highlightAuto:E,highlightAll:x,
highlightElement:y,
highlightBlock:e=>(F("10.7.0","highlightBlock will be removed entirely in v12.0"),
F("10.7.0","Please use highlightElement now."),y(e)),configure:e=>{p=V(p,e)},
initHighlighting:()=>{
x(),F("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},
initHighlightingOnLoad:()=>{
x(),F("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
},registerLanguage:(e,n)=>{let s=null;try{s=n(t)}catch(n){
if(U("Language definition for '{}' could not be registered.".replace("{}",e)),
!r)throw n;U(n),s=l}
s.name||(s.name=e),a[e]=s,s.rawDefinition=n.bind(null,t),s.aliases&&v(s.aliases,{
languageName:e})},unregisterLanguage:e=>{delete a[e]
;for(const n of Object.keys(s))s[n]===e&&delete s[n]},
listLanguages:()=>Object.keys(a),getLanguage:N,registerAliases:v,
autoDetection:A,inherit:V,addPlugin:e=>{(e=>{
e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=n=>{
e["before:highlightBlock"](Object.assign({block:n.el},n))
}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=n=>{
e["after:highlightBlock"](Object.assign({block:n.el},n))})})(e),i.push(e)},
removePlugin:e=>{const n=i.indexOf(e);-1!==n&&i.splice(n,1)}}),t.debugMode=()=>{
r=!1},t.safeMode=()=>{r=!0},t.versionString="11.11.1",t.regex={concat:h,
lookahead:d,either:b,optional:u,anyNumberOfTimes:g}
;for(const n in I)"object"==typeof I[n]&&e(I[n]);return Object.assign(t,I),t
},ne=ee({});ne.newInstance=()=>ee({});const te="[A-Za-z$_][0-9A-Za-z$_]*",ae={
scope:"number",
match:"([-+]?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)|NaN|[-+]?Infinity",
relevance:0
},se=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],ie=["true","false","null","undefined","NaN","Infinity"],re=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],oe=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],ce=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],le=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],de=[].concat(ce,re,oe)
;var ge=Object.freeze({__proto__:null,grmr_bash:e=>{const n=e.regex,t={},a={
begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]}
;Object.assign(t,{className:"variable",variants:[{
begin:n.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},a]});const s={
className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]
},i=e.inherit(e.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),r={
begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,
end:/(\w+)/,className:"string"})]}},o={className:"string",begin:/"/,end:/"/,
contains:[e.BACKSLASH_ESCAPE,t,s]};s.contains.push(o);const c={begin:/\$?\(\(/,
end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]
},l=e.SHEBANG({binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10
}),d={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,
contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{
name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,
keyword:["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],
literal:["true","false"],
built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]
},contains:[l,e.SHEBANG(),d,c,i,r,{match:/(\/[a-z._-]+)+/},o,{match:/\\"/},{
className:"string",begin:/'/,end:/'/},{match:/\\'/},t]}},grmr_dart:e=>{const n={
className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"}]},t={className:"subst",
variants:[{begin:/\$\{/,end:/\}/}],keywords:"true false null this is new super"
},a={className:"number",relevance:0,variants:[{
match:/\b[0-9][0-9_]*(\.[0-9][0-9_]*)?([eE][+-]?[0-9][0-9_]*)?\b/},{
match:/\b0[xX][0-9A-Fa-f][0-9A-Fa-f_]*\b/}]},s={className:"string",variants:[{
begin:"r'''",end:"'''"},{begin:'r"""',end:'"""'},{begin:"r'",end:"'",
illegal:"\\n"},{begin:'r"',end:'"',illegal:"\\n"},{begin:"'''",end:"'''",
contains:[e.BACKSLASH_ESCAPE,n,t]},{begin:'"""',end:'"""',
contains:[e.BACKSLASH_ESCAPE,n,t]},{begin:"'",end:"'",illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE,n,t]},{begin:'"',end:'"',illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE,n,t]}]};t.contains=[a,s]
;const i=["Comparable","DateTime","Duration","Function","Iterable","Iterator","List","Map","Match","Object","Pattern","RegExp","Set","Stopwatch","String","StringBuffer","StringSink","Symbol","Type","Uri","bool","double","int","num","Element","ElementList"],r=i.map((e=>e+"?"))
;return{name:"Dart",keywords:{
keyword:["abstract","as","assert","async","await","base","break","case","catch","class","const","continue","covariant","default","deferred","do","dynamic","else","enum","export","extends","extension","external","factory","false","final","finally","for","Function","get","hide","if","implements","import","in","interface","is","late","library","mixin","new","null","on","operator","part","required","rethrow","return","sealed","set","show","static","super","switch","sync","this","throw","true","try","typedef","var","void","when","while","with","yield"],
built_in:i.concat(r).concat(["Never","Null","dynamic","print","document","querySelector","querySelectorAll","window"]),
$pattern:/[A-Za-z][A-Za-z0-9_]*\??/},
contains:[s,e.COMMENT(/\/\*\*(?!\/)/,/\*\//,{subLanguage:"markdown",relevance:0
}),e.COMMENT(/\/{3,} ?/,/$/,{contains:[{subLanguage:"markdown",begin:".",
end:"$",relevance:0}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{
className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,
contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},a,{
className:"meta",begin:"@[A-Za-z]+"},{begin:"=>"}]}},grmr_javascript:e=>{
const n=e.regex,t=te,a={begin:/<[A-Za-z0-9\\._:-]+/,
end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
const t=e[0].length+e.index,a=e.input[t]
;if("<"===a||","===a)return void n.ignoreMatch();let s
;">"===a&&(((e,{after:n})=>{const t="</"+e[0].slice(1)
;return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch())
;const i=e.input.substring(t)
;((s=i.match(/^\s*=/))||(s=i.match(/^\s+extends\s+/))&&0===s.index)&&n.ignoreMatch()
}},s={$pattern:te,keyword:se,literal:ie,built_in:de,"variable.language":le
},i="[0-9](_?[0-9])*",r=`\\.(${i})`,o="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",c={
className:"number",variants:[{
begin:`(\\b(${o})((${r})|\\.)?|(${r}))[eE][+-]?(${i})\\b`},{
begin:`\\b(${o})\\b((${r})\\b|\\.)?|(${r})\\b`},{
begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
begin:"\\b0[0-7]+n?\\b"}],relevance:0},l={className:"subst",begin:"\\$\\{",
end:"\\}",keywords:s,contains:[]},d={begin:".?html`",end:"",starts:{end:"`",
returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,l],subLanguage:"xml"}},g={
begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,
contains:[e.BACKSLASH_ESCAPE,l],subLanguage:"css"}},u={begin:".?gql`",end:"",
starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,l],
subLanguage:"graphql"}},h={className:"string",begin:"`",end:"`",
contains:[e.BACKSLASH_ESCAPE,l]},b={className:"comment",
variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",
begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,
excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",
endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]
},p=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,d,g,u,h,{match:/\$\d+/},c]
;l.contains=p.concat({begin:/\{/,end:/\}/,keywords:s,contains:["self"].concat(p)
});const m=[].concat(b,l.contains),f=m.concat([{begin:/(\s*)\(/,end:/\)/,
keywords:s,contains:["self"].concat(m)}]),_={className:"params",begin:/(\s*)\(/,
end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:f},E={variants:[{
match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,n.concat(t,"(",n.concat(/\./,t),")*")],
scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{
match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},y={relevance:0,
match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
className:"title.class",keywords:{_:[...re,...oe]}},w={variants:[{
match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],
className:{1:"keyword",3:"title.function"},label:"func.def",contains:[_],
illegal:/%/},x={
match:n.concat(/\b/,(N=[...ce,"super","import","await"].map((e=>e+"\\s*\\(")),
n.concat("(?!",N.join("|"),")")),t,n.lookahead(/\s*\(/)),
className:"title.function",relevance:0};var N;const v={
begin:n.concat(/\./,n.lookahead(n.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,
excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},A={
match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},
contains:[{begin:/\(\)/},_]
},O="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",S={
match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(O)],
keywords:"async",className:{1:"keyword",3:"title.function"},contains:[_]}
;return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:s,exports:{
PARAMS_CONTAINS:f,CLASS_REFERENCE:y},illegal:/#(?![$_A-Za-z])/,
contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{
label:"use_strict",className:"meta",relevance:10,
begin:/^\s*['"]use (strict|asm)['"]/
},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,d,g,u,h,b,{match:/\$\d+/},c,y,{
scope:"attr",match:t+n.lookahead(":"),relevance:0},S,{
begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
keywords:"return throw case",relevance:0,contains:[b,e.REGEXP_MODE,{
className:"function",begin:O,returnBegin:!0,end:"\\s*=>",contains:[{
className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{
className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,keywords:s,contains:f}]}]},{begin:/,/,relevance:0
},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{
match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:a.begin,
"on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{
begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}]},w,{
beginKeywords:"while if switch catch for"},{
begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
returnBegin:!0,label:"func.def",contains:[_,e.inherit(e.TITLE_MODE,{begin:t,
className:"title.function"})]},{match:/\.\.\./,relevance:0},v,{match:"\\$"+t,
relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},
contains:[_]},x,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,
className:"variable.constant"},E,A,{match:/\$[(.]/}]}},grmr_json:e=>{
const n=["true","false","null"],t={scope:"literal",beginKeywords:n.join(" ")}
;return{name:"JSON",aliases:["jsonc","json5"],keywords:{literal:n},contains:[{
className:"attr",begin:/(("(\\.|[^\\"\r\n])*")|('(\\.|[^\\'\r\n])*'))(?=\s*:)/,
relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0
},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,t,ae,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],
illegal:"\\S"}},grmr_markdown:e=>{const n={begin:/<\/?[A-Za-z_]/,end:">",
subLanguage:"xml",relevance:0},t={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0
},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
relevance:2},{
begin:e.regex.concat(/\[.+?\]\(/,/[A-Za-z][A-Za-z0-9+.-]*/,/:\/\/.*?\)/),
relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{
begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/
},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,
returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",
excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",
end:"\\]",excludeBegin:!0,excludeEnd:!0}]},a={className:"strong",contains:[],
variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]
},s={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{
begin:/_(?![_\s])/,end:/_/,relevance:0}]},i=e.inherit(a,{contains:[]
}),r=e.inherit(s,{contains:[]});a.contains.push(r),s.contains.push(i)
;let o=[n,t];return[a,s,i,r].forEach((e=>{e.contains=e.contains.concat(o)
})),o=o.concat(a,s),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{
className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:o},{
begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",
contains:o}]}]},n,{className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
end:"\\s+",excludeEnd:!0},a,s,{className:"quote",begin:"^>\\s+",contains:o,
end:"$"},{className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{
begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{
begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",
contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},{
begin:"^[-\\*]{3,}",end:"$"},t,{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{
className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{
className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},{scope:"literal",
match:/&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/}]}},grmr_php:e=>{
const n=e.regex,t=/(?![A-Za-z0-9])(?![$])/,a=n.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,t),s=n.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,t),i=n.concat(/[A-Z]+/,t),r={
scope:"variable",match:"\\$+"+a},o={scope:"subst",variants:[{begin:/\$\w+/},{
begin:/\{\$/,end:/\}/}]},c=e.inherit(e.APOS_STRING_MODE,{illegal:null
}),l="[ \t\n]",d={scope:"string",variants:[e.inherit(e.QUOTE_STRING_MODE,{
illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(o)}),c,{
begin:/<<<[ \t]*(?:(\w+)|"(\w+)")\n/,end:/[ \t]*(\w+)\b/,
contains:e.QUOTE_STRING_MODE.contains.concat(o),"on:begin":(e,n)=>{
n.data._beginMatch=e[1]||e[2]},"on:end":(e,n)=>{
n.data._beginMatch!==e[1]&&n.ignoreMatch()}},e.END_SAME_AS_BEGIN({
begin:/<<<[ \t]*'(\w+)'\n/,end:/[ \t]*(\w+)\b/})]},g={scope:"number",variants:[{
begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{
begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{
begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"
}],relevance:0
},u=["false","null","true"],h=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],b=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],p={
keyword:h,literal:(e=>{const n=[];return e.forEach((e=>{
n.push(e),e.toLowerCase()===e?n.push(e.toUpperCase()):n.push(e.toLowerCase())
})),n})(u),built_in:b},m=e=>e.map((e=>e.replace(/\|\d+$/,""))),f={variants:[{
match:[/new/,n.concat(l,"+"),n.concat("(?!",m(b).join("\\b|"),"\\b)"),s],scope:{
1:"keyword",4:"title.class"}}]},_=n.concat(a,"\\b(?!\\()"),E={variants:[{
match:[n.concat(/::/,n.lookahead(/(?!class\b)/)),_],scope:{2:"variable.constant"
}},{match:[/::/,/class/],scope:{2:"variable.language"}},{
match:[s,n.concat(/::/,n.lookahead(/(?!class\b)/)),_],scope:{1:"title.class",
3:"variable.constant"}},{match:[s,n.concat("::",n.lookahead(/(?!class\b)/))],
scope:{1:"title.class"}},{match:[s,/::/,/class/],scope:{1:"title.class",
3:"variable.language"}}]},y={scope:"attr",
match:n.concat(a,n.lookahead(":"),n.lookahead(/(?!::)/))},w={relevance:0,
begin:/\(/,end:/\)/,keywords:p,
contains:[y,r,E,e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE,e.HASH_COMMENT_MODE,d,g,f]
},x={relevance:0,
match:[/\b/,n.concat("(?!fn\\b|function\\b|",m(h).join("\\b|"),"|",m(b).join("\\b|"),"\\b)"),a,n.concat(l,"*"),n.lookahead(/(?=\()/)],
scope:{3:"title.function.invoke"},contains:[w]};w.contains.push(x)
;const N=[y,E,e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE,e.HASH_COMMENT_MODE,d,g,f],v={
begin:n.concat(/#\[\s*\\?/,n.either(s,i)),beginScope:"meta",end:/]/,
endScope:"meta",keywords:{literal:u,keyword:["new","array"]},contains:[{
begin:/\[/,end:/]/,keywords:{literal:u,keyword:["new","array"]},
contains:["self",...N]},...N,{scope:"meta",variants:[{match:s},{match:i}]}]}
;return{case_insensitive:!1,keywords:p,
contains:[v,e.HASH_COMMENT_MODE,e.COMMENT("//","$"),e.COMMENT("/\\*","\\*/",{
contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,
keywords:"__halt_compiler",starts:{scope:"comment",end:e.MATCH_NOTHING_RE,
contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},{scope:"meta",variants:[{
begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{
begin:/\?>/}]},{scope:"variable.language",match:/\$this\b/},r,x,E,{
match:[/const/,/\s/,a],scope:{1:"keyword",3:"variable.constant"}},f,{
scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,
excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"
},e.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",
begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:p,
contains:["self",v,r,E,e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE,e.HASH_COMMENT_MODE,d,g]
}]},{scope:"class",variants:[{beginKeywords:"enum",illegal:/[($"]/},{
beginKeywords:"class interface trait",illegal:/[:($"]/}],relevance:0,end:/\{/,
excludeEnd:!0,contains:[{beginKeywords:"extends implements"
},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",
illegal:/[.']/,contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{scope:"title.class"
})]},{beginKeywords:"use",relevance:0,end:";",contains:[{
match:/\b(as|const|function)\b/,scope:"keyword"},e.UNDERSCORE_TITLE_MODE]},d,g]}
},grmr_xml:e=>{
const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),a={
className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,
contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]
},i=e.inherit(s,{begin:/\(/,end:/\)/}),r=e.inherit(e.APOS_STRING_MODE,{
className:"string"}),o=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),c={
endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",
begin:/[\p{L}0-9._:-]+/u,relevance:0},{begin:/=\s*/,relevance:0,contains:[{
className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[a]},{
begin:/'/,end:/'/,contains:[a]},{begin:/[^\s"'=<>`]+/}]}]}]};return{
name:"HTML, XML",
aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],
case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,
end:/>/,relevance:10,contains:[s,o,r,i,{begin:/\[/,end:/\]/,contains:[{
className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,i,o,r]}]}]
},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,
relevance:10},a,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,
relevance:10,contains:[o]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",
begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{
end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",
begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{
end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{
className:"tag",begin:/<>|<\/>/},{className:"tag",
begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),
end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{
className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{
className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}
});const ue=ne;for(const e of Object.keys(ge)){
const n=e.replace("grmr_","").replace("_","-");ue.registerLanguage(n,ge[e])}
return ue}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);