/*! (c) Andrea Giammarchi - ISC */var heresy=function(e){"use strict";var t,n=(...e)=>e,r="-"+Math.random().toFixed(6)+"%",s=!1;try{"content"in(t=document.createElement("template"))&&(t.innerHTML='<p tabindex="'+r+'"></p>',t.content.childNodes[0].getAttribute("tabindex")==r)||(r="_dt: "+r.slice(1,-1)+";",s=!0)}catch(e){}var o="\x3c!--"+r+"--\x3e",a=8,i=1,c=3,l=/^(?:style|textarea)$/i,u=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
/*! (c) Andrea Giammarchi - ISC */
function f(e){return e.join(o).replace(y,x).replace(m,w)}/*! (c) Andrea Giammarchi - ISC */var h=" \\f\\n\\r\\t",p="[^"+h+"\\/>\"'=]+",d="["+h+"]+"+p,g="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",v="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+p.replace("\\/","")+"))?)",m=new RegExp(g+d+v+"+)(["+h+"]*/?>)","g"),y=new RegExp(g+d+v+"*)(["+h+"]*/>)","g"),b=new RegExp("("+d+"\\s*=\\s*)(['\"]?)"+o+"\\2","gi");function w(e,t,n,r){return"<"+t+n.replace(b,k)+r}function k(e,t,n){return t+(n||'"')+r+(n||'"')}function x(e,t,n){return u.test(t)?e:"<"+t+n+"></"+t+">"}const E=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),N=(e,t)=>("svg"===t?C:A)(e),A=e=>{const t=E("template");return t.innerHTML=e,t.content},C=e=>{const{content:t}=E("template"),n=E("div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:r}=n.firstChild;let{length:s}=r;for(;s--;)t.appendChild(r[0]);return t},{indexOf:$}=[],L=(e,t,n,r,s,o)=>{const a="selectedIndex"in t;let i=a;for(;r<s;){const s=e(n[r],1);if(t.insertBefore(s,o),a&&i&&s.selected){i=!i;let{selectedIndex:e}=t;t.selectedIndex=e<0?r:$.call(t.querySelectorAll("option"),s)}r++}},j=(e,t)=>e==t,M=e=>e,O=(e,t,n,r,s,o,a)=>{const i=o-s;if(i<1)return-1;for(;n-t>=i;){let i=t,c=s;for(;i<n&&c<o&&a(e[i],r[c]);)i++,c++;if(c===o)return t;t=i+1}return-1},S=(e,t,n,r,s)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:s,T=(e,t,n,r)=>{for(;n<r;)Z(e(t[n++],-1))},W=(e,t,n)=>{let r=1,s=t;for(;r<s;){const t=(r+s)/2>>>0;n<e[t]?s=t:r=t+1}return r},_=(e,t,n,r,s,o,a,i,c,l,u,f,h)=>{((e,t,n,r,s,o,a,i,c)=>{const l=[],u=e.length;let f=a,h=0;for(;h<u;)switch(e[h++]){case 0:s++,f++;break;case 1:l.push(r[s]),L(t,n,r,s++,s,f<i?t(o[f],0):c);break;case-1:f++}for(h=0;h<u;)switch(e[h++]){case 0:a++;break;case-1:-1<l.indexOf(o[a])?a++:T(t,o,a++,a)}})(((e,t,n,r,s,o,a)=>{const i=n+o,c=[];let l,u,f,h,p,d,g;e:for(l=0;l<=i;l++){if(l>50)return null;for(g=l-1,p=l?c[l-1]:[0,0],d=c[l]=[],u=-l;u<=l;u+=2){for(f=(h=u===-l||u!==l&&p[g+u-1]<p[g+u+1]?p[g+u+1]:p[g+u-1]+1)-u;h<o&&f<n&&a(r[s+h],e[t+f]);)h++,f++;if(h===o&&f===n)break e;d[l+u]=h}}const v=Array(l/2+i/2);let m=v.length-1;for(l=c.length-1;l>=0;l--){for(;h>0&&f>0&&a(r[s+h-1],e[t+f-1]);)v[m--]=0,h--,f--;if(!l)break;g=l-1,p=l?c[l-1]:[0,0],(u=h-f)===-l||u!==l&&p[g+u-1]<p[g+u+1]?(f--,v[m--]=1):(h--,v[m--]=-1)}return v})(n,r,o,a,i,l,f)||((e,t,n,r,s,o,a,i)=>{let c=0,l=r<i?r:i;const u=Array(l++),f=Array(l);f[0]=-1;for(let e=1;e<l;e++)f[e]=a;const h=s.slice(o,a);for(let r=t;r<n;r++){const t=h.indexOf(e[r]);if(-1<t){const e=t+o;-1<(c=W(f,l,e))&&(f[c]=e,u[c]={newi:r,oldi:e,prev:u[c-1]})}}for(c=--l,--a;f[c]>a;)--c;l=i+r-c;const p=Array(l);let d=u[c];for(--n;d;){const{newi:e,oldi:t}=d;for(;n>e;)p[--l]=1,--n;for(;a>t;)p[--l]=-1,--a;p[--l]=0,--n,--a,d=d.prev}for(;n>=t;)p[--l]=1,--n;for(;a>=o;)p[--l]=-1,--a;return p})(n,r,s,o,a,i,c,l),e,t,n,r,a,i,u,h)},Z=e=>(e.remove||R).call(e);function R(){const{parentNode:e}=this;e&&e.removeChild(this)}
/*! (c) 2018 Andrea Giammarchi (ISC) */const z=(e,t,n,r)=>{r||(r={});const s=r.compare||j,o=r.node||M,a=null==r.before?null:o(r.before,0),i=t.length;let c=i,l=0,u=n.length,f=0;for(;l<c&&f<u&&s(t[l],n[f]);)l++,f++;for(;l<c&&f<u&&s(t[c-1],n[u-1]);)c--,u--;const h=l===c,p=f===u;if(h&&p)return n;if(h&&f<u)return L(o,e,n,f,u,S(o,t,l,i,a)),n;if(p&&l<c)return T(o,t,l,c),n;const d=c-l,g=u-f;let v=-1;if(d<g){if(-1<(v=O(n,f,u,t,l,c,s)))return L(o,e,n,f,v,o(t[l],0)),L(o,e,n,v+d,u,S(o,t,c,i,a)),n}else if(g<d&&-1<(v=O(t,l,c,n,f,u,s)))return T(o,t,l,v),T(o,t,v+g,c),n;return d<2||g<2?(L(o,e,n,f,u,o(t[l],0)),T(o,t,l,c),n):d===g&&((e,t,n,r,s,o)=>{for(;r<s&&o(n[r],e[t-1]);)r++,t--;return 0===t})(n,u,t,l,c,s)?(L(o,e,n,f,u,S(o,t,c,i,a)),n):(_(o,e,n,f,u,g,t,l,c,d,i,s,a),n)};/*! (c) Andrea Giammarchi - ISC */var D=document.importNode,P="".trim,H=s?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort((function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1}))}:function(e,t){return t.slice.call(e,0)};function F(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function I(e,t,n,a){for(var i=e.attributes,c=[],l=[],u=H(i,n),f=u.length,h=0;h<f;){var p,d=u[h++],g=d.value===r;if(g||1<(p=d.value.split(o)).length){var v=d.name;if(c.indexOf(v)<0){c.push(v);var m=n.shift().replace(g?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+v+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),y=i[m]||i[m.toLowerCase()];if(g)t.push(V(y,a,m,null));else{for(var b=p.length-2;b--;)n.shift();t.push(V(y,a,m,p))}}l.push(d)}}h=0;for(var w=(0<(f=l.length)&&s&&!("ownerSVGElement"in e));h<f;){var k=l[h++];w&&(k.value=""),e.removeAttribute(k.name)}var x=e.nodeName;if(/^script$/i.test(x)){var E=document.createElement(x);for(f=i.length,h=0;h<f;)E.setAttributeNode(i[h++].cloneNode(!0));E.textContent=e.textContent,e.parentNode.replaceChild(E,e)}}function B(e,t){return{type:"any",node:e,path:t}}function V(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function q(e,t){return{type:"text",node:e,path:t}}var G=new WeakMap;function U(e,t){var n=(e.convert||f)(t),s=e.transform;s&&(n=s(n));var u=N(n,e.type);Q(u);var h=[];!function e(t,n,s,u){for(var f=t.childNodes,h=f.length,p=0;p<h;){var d=f[p];switch(d.nodeType){case i:var g=u.concat(p);I(d,n,s,g),e(d,n,s,g);break;case a:var v=d.textContent;if(v===r)s.shift(),n.push(l.test(t.nodeName)?q(t,u):B(d,u.concat(p)));else switch(v.slice(0,2)){case"/*":if("*/"!==v.slice(-2))break;case"👻":t.removeChild(d),p--,h--}break;case c:l.test(t.nodeName)&&P.call(d.textContent)===o&&(s.shift(),n.push(q(t,u)))}p++}}(u,h,t.slice(0),[]);var p={content:u,updates:function(n){for(var r=[],s=h.length,o=0,a=0;o<s;){var i=h[o++],c=F(n,i.path);switch(i.type){case"any":r.push({fn:e.any(c,[]),sparse:!1});break;case"attr":var l=i.sparse,u=e.attribute(c,i.name,i.node);null===l?r.push({fn:u,sparse:!1}):(a+=l.length-2,r.push({fn:u,sparse:!0,values:l}));break;case"text":r.push({fn:e.text(c),sparse:!1}),c.textContent=""}}return s+=a,function(){var e=arguments.length;if(s!==e-1)throw new Error(e-1+" values instead of "+s+"\n"+t.join("${value}"));for(var o=1,a=1;o<e;){var i=r[o-a];if(i.sparse){var c=i.values,l=c[0],u=1,f=c.length;for(a+=f-2;u<f;)l+=arguments[o++]+c[u++];i.fn(l)}else i.fn(arguments[o++])}return n}}};return G.set(t,p),p}function J(e,t){var n=G.get(t)||U(e,t);return n.updates(D.call(document,n.content,!0))}var K=[];function Q(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===P.call(r.textContent).length&&e.removeChild(r)}}
/*! (c) Andrea Giammarchi - ISC *//*! (c) Andrea Giammarchi - ISC */var X=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,s){var o,a;return function(i){var c,l,u,f;switch(typeof i){case"object":if(i){if("object"===o){if(!s&&a!==i)for(l in a)l in i||(r[l]="")}else s?r.value="":r.cssText="";for(l in c=s?{}:r,i)u="number"!=typeof(f=i[l])||e.test(l)?f:f+"px",!s&&/^--/.test(l)?c.setProperty(l,u):c[l]=u;o="object",s?r.value=function(e){var r,s=[];for(r in e)s.push(r.replace(t,n),":",e[r],";");return s.join("")}(a=c):a=i;break}default:a!=i&&(o="string",a=i,s?r.value=i||"":r.cssText=i||"")}}}}(),Y=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var s=this.ownerDocument.createRange();s.setStartBefore(e?t[1]:n),s.setEndAfter(r),s.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,s=0,o=r.length;s<o;s++)t.appendChild(r[s]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice);
/*! (c) Andrea Giammarchi - ISC */const{isArray:ee}=Array,{create:te,freeze:ne,keys:re}=Object,se=Y.prototype.nodeType,oe=(e,t)=>e.nodeType===se?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e,ae=(e,t)=>{let n,r=!1;const s=t.cloneNode(!0);return t=>{n!==t&&(n=t,s.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(s)),s.value=t):(s.value=t,r||(r=!0,e.setAttributeNode(s)))))}},ie=(e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},ce=/^(?:form|list)$/i,le=[].slice,ue=(e,t)=>e.ownerDocument.createTextNode(t);function fe(e){return this.type=e,function(e){/*! (c) Andrea Giammarchi - ISC */var t=K,n=Q;return function(r){return t!==r&&(n=J(e,t=r)),n.apply(null,arguments)}}(this)}function he(e){return e(this)}fe.prototype={attribute(e,t,n){const r="svg"===this.type;switch(t){case"class":if(r)return ae(e,n);t="className";case"data":case"props":return ie(e,t);case"style":return X(e,n,r);case"ref":return(e=>t=>{t.current=e})(e);default:return"."===t.slice(0,1)?((e,t,n)=>n?n=>{try{e[t]=n}catch(r){e.setAttribute(t,n)}}:n=>{e[t]=n})(e,t.slice(1),r):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}})(e,t):t in e&&!r&&!ce.test(t)?ie(e,t):ae(e,n)}},any(e,t){const n={node:oe,before:e},{type:r}=this;let s,o=!1;const a=i=>{switch(typeof i){case"string":case"number":case"boolean":o?s!==i&&(s=i,t[0].textContent=i):(o=!0,s=i,t=z(e.parentNode,t,[ue(e,i)],n));break;case"function":a(i(e));break;case"object":case"undefined":if(null==i){o=!1,t=z(e.parentNode,t,[],n);break}default:if(o=!1,s=i,ee(i))if(0===i.length)t.length&&(t=z(e.parentNode,t,[],n));else switch(typeof i[0]){case"string":case"number":case"boolean":a(String(i));break;case"function":a(i.map(he,e));break;case"object":ee(i[0])&&(i=i.concat.apply([],i));default:t=z(e.parentNode,t,i,n)}else(e=>"ELEMENT_NODE"in e)(i)?t=z(e.parentNode,t,11===i.nodeType?le.call(i.childNodes):[i],n):"text"in i?a(String(i.text)):"any"in i?a(i.any):"html"in i?t=z(e.parentNode,t,le.call(N([].concat(i.html).join(""),r).childNodes),n):"length"in i&&a(le.call(i))}};return a},text(e){let t;const n=r=>{if(t!==r){t=r;const s=typeof r;"object"===s&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(le.call(r).join("")):"function"===s?n(r(e)):e.textContent=null==r?"":r}};return n}};const pe=fe.prototype,de=new WeakMap,ge=e=>({html:ve("html",e),svg:ve("svg",e),render(t,n){const r="function"==typeof n?n():n,s=de.get(t)||ye(t),o=r instanceof xe?me(e,s,r):r;return o!==s.wire&&(s.wire=o,t.textContent="",t.appendChild(o.valueOf(!0))),t}}),ve=(e,t)=>{const r=new WeakMap;return s.for=(e,n)=>{const o=r.get(e)||(e=>{const t=te(null);return r.set(e,t),t})(e);return o[n]||(o[n]=(e=>(function(){return me(t,e,s.apply(null,arguments))}))({sub:[],stack:[],wire:null}))},s.node=function(){return me(t,{sub:[],stack:[],wire:null},s.apply(null,arguments)).valueOf(!0)},s;function s(){return new xe(e,n.apply(null,arguments))}},me=(e,t,n)=>{const{sub:r,stack:s}=t,o={a:0,aLength:r.length,i:0,iLength:s.length},a=be(e,t,n,o),{a:i,i:c,aLength:l,iLength:u}=o;return i<l&&r.splice(i),c<u&&s.splice(c),a},ye=e=>{const t={sub:[],stack:[],wire:null};return de.set(e,t),t},be=(e,t,n,r)=>{const{stack:s}=t,{i:o,iLength:a}=r,{type:i,args:c}=n;o===a&&(r.iLength=s.push({type:i,id:c[0],tag:null,wire:null})),r.i++,we(e,t,c,r);const l=s[o];return o<a&&l.id===c[0]&&l.type===i?l.tag.apply(null,c):(l.type=i,l.id=c[0],l.tag=new e(i),l.wire=ke(l.tag.apply(null,c))),l.wire},we=(e,t,n,r)=>{for(let s=1,{length:o}=n;s<o;s++){const o=n[s];if("object"==typeof o&&o)if(o instanceof xe)n[s]=be(e,t,o,r);else if(ee(o))for(let n=0,{length:s}=o;n<s;n++){const s=o[n];if("object"==typeof s&&s&&s instanceof xe){const{sub:a}=t,{a:i,aLength:c}=r;i===c&&(r.aLength=a.push({sub:[],stack:[],wire:null})),r.a++,o[n]=me(e,a[i],s)}}}},ke=e=>{const t=e.childNodes,{length:n}=t;return 1===n?t[0]:n?new Y(t):e};function xe(e,t){this.type=e,this.args=t}ne(xe);const{render:Ee,html:Ne,svg:Ae}=ge(fe);
/*! (c) Andrea Giammarchi - ISC */
let Ce=null;const $e=e=>{const t=[];return function n(){const r=Ce,s=[];Ce={hook:n,args:arguments,stack:t,i:0,after:s};try{return e.apply(null,arguments)}finally{Ce=r;for(let e=0,{length:t}=s;e<t;e++)s[e]()}}},Le=()=>Ce;function je(e,t){return e!==this[t]}const Me=e=>"function"==typeof e;/*! (c) Andrea Giammarchi - ISC */var Oe="function"==typeof cancelAnimationFrame,Se=Oe?cancelAnimationFrame:clearTimeout,Te=Oe?requestAnimationFrame:setTimeout;function We(e){var t,n,r,s,o;return i(),function(e,i,l){return r=e,s=i,o=l,n||(n=Te(a)),--t<0&&c(!0),c};function a(){i(),r.apply(s,o||[])}function i(){t=e||1/0,n=Oe?0:null}function c(e){var t=!!n;return t&&(Se(n),e&&a()),t}}
/*! (c) Andrea Giammarchi - ISC */const _e=new WeakMap,Ze=(e,t,n)=>{e.apply(t,n)},Re={async:!1,always:!1},ze=(e,t)=>{const n=Le(),r=n.i++,{hook:s,args:o,stack:a}=n,{async:i,always:c}=t||Re;return a.length<=r&&(a[r]=Me(e)?e():e,_e.has(s)||_e.set(s,i?We():Ze)),[a[r],e=>{const t=Me(e)?e(a[r]):e;(c||a[r]!==t)&&(a[r]=t,_e.get(s)(s,null,o))}]},De=new WeakMap,Pe=({hook:e,args:t})=>{e.apply(null,t)};function He(e){this.value!==e&&(this.value=e,De.get(this).forEach(Pe))}function Fe({hook:e}){return e===this.hook}
/*! (c) Andrea Giammarchi - ISC */const Ie=new WeakMap,Be=()=>{},Ve=e=>(t,n)=>{const r=Le(),s=r.i++,{hook:o,stack:a,after:i}=r;if(s<a.length){const r=a[s],{clean:o,update:c,values:l}=r;if(!n||n.some(je,l)){r.values=n,o&&(r.clean=null,o());const s=()=>{r.clean=t()};e?i.push(s):c(s)}}else{Ie.has(o)||Ie.set(o,{stack:[],update:We()});const r=Ie.get(o),c={clean:null,stop:Be,update:r.update,values:n};a[s]=c,r.stack.push(c);const l=()=>{c.clean=t()};e?i.push(l):c.stop=r.update(l)}},qe=Ve(!1),Ge=Ve(!0),Ue=e=>{Ie.has(e)&&Ie.get(e).stack.forEach(e=>{const{clean:t,stop:n}=e;n(),t&&(e.clean=null,t())})},Je=(e,t)=>{const n=Le(),r=n.i++,{stack:s}=n;return(!t||s.length<=r||t.some(je,s[r].values))&&(s[r]={current:e(),values:t}),s[r].current};let Ke=null;try{Ke=new{o(){}}.o}catch(e){}let Qe=e=>(class extends e{});if(Ke){const{getPrototypeOf:e,setPrototypeOf:t}=Object,{construct:n}="object"==typeof Reflect?Reflect:{construct(e,n,r){const s=[null];for(let e=0;e<n.length;e++)s.push(n[e]);const o=e.bind.apply(e,s);return t(new o,r.prototype)}};Qe=function(r,s){function o(){return n(s?e(r):r,arguments,o)}return t(o.prototype,r.prototype),t(o,r)}}const Xe={map:{},re:null},Ye=e=>new RegExp(`<(/)?(${e.join("|")})([^A-Za-z0-9:._-])`,"g");let et=null;const tt=(e,t)=>{const{map:n,re:r}=et||t;return e.replace(r,(e,t,r,s)=>{const{tagName:o,is:a,element:i}=n[r];return i?t?`</${a}>`:`<${a}${s}`:t?`</${o}>`:`<${o} is="${a}"${s}`})},nt=({tagName:e,is:t,element:n})=>n?t:`${e}[is="${t}"]`,rt=()=>et,st=e=>{et=e},ot={useCallback:(e,t)=>Je(()=>e,t),useContext:e=>{const{hook:t,args:n}=Le(),r=De.get(e),s={hook:t,args:n};return r.some(Fe,s)||r.push(s),e.value},useEffect:qe,useLayoutEffect:Ge,useMemo:Je,useReducer:(e,t,n,r)=>{const s="function"==typeof n,o=ze(s?n(t):t,s?r:n);return[o[0],t=>{o[1](e(o[0],t))}]},useRef:e=>{const t=Le(),n=t.i++,{stack:r}=t;return n<r.length?r[n]:r[n]={current:e}},useState:ze},{render:at,html:it,svg:ct}=(e=>{const t=te(pe);return re(e).forEach(n=>{t[n]=e[n](t[n]||("convert"===n?f:String))}),n.prototype=t,ge(n);function n(){return fe.apply(this,arguments)}})({transform:()=>e=>tt(e,Xe)}),lt="_🔥",{defineProperties:ut}=Object,ft=new WeakMap,ht=new WeakMap,pt=new WeakMap,dt=new WeakSet,gt="attributeChangedCallback",vt="connectedCallback",mt=`dis${vt}`,yt=(e,t,n)=>{if(n in e){const r=e[n];t[n]={configurable:!0,value(){return Mt.call(this),r.apply(this,arguments)}}}else t[n]={configurable:!0,value:Mt}},bt=e=>{const{prototype:t}=e,n=[],r={html:{configurable:!0,get:$t},svg:{configurable:!0,get:Lt}};if(r[lt]={value:{events:n,info:null}},"handleEvent"in t||(r.handleEvent={configurable:!0,value:jt}),"render"in t&&t.render.length){const{oninit:e}=t;ut(t,{oninit:{configurable:!0,value(){const t=$e(this.render.bind(this,ot));ut(this,{render:{configurable:!0,value:t}}),this.addEventListener("disconnected",Ue.bind(null,t),!1),e&&e.apply(this,arguments)}}})}"oninit"in t&&(n.push("init"),yt(t,r,"render")),yt(t,r,gt),yt(t,r,vt),yt(t,r,mt),[[gt,"onattributechanged",Ot],[vt,"onconnected",St],[mt,"ondisconnected",Wt],[vt,"render",Tt]].forEach(([e,s,o])=>{if(!(e in t)&&s in t)if("render"!==s&&n.push(s.slice(2)),e in r){const t=r[e].value;r[e]={configurable:!0,value(){return t.apply(this,arguments),o.apply(this,arguments)}}}else r[e]={configurable:!0,value:o}});const s=e.booleanAttributes||[];s.forEach(e=>{e in t||(r[e]={configurable:!0,get(){return this.hasAttribute(e)},set(t){t&&"false"!==t?this.setAttribute(e,t):this.removeAttribute(e)}})});const o=e.observedAttributes||[];o.forEach(e=>{e in t||(r[e]={configurable:!0,get(){return this.getAttribute(e)},set(t){null==t?this.removeAttribute(e):this.setAttribute(e,t)}})}),(e.mappedAttributes||[]).forEach(e=>{const s=new WeakMap,o="on"+e in t;o&&n.push(e),r[e]={configurable:!0,get(){return s.get(this)},set(t){if(s.set(this,t),o){const n=wt(e);if(n.detail=t,dt.has(this))this.dispatchEvent(n);else{const e=pt.get(this);e?e.push(n):pt.set(this,[n])}}}}}),ut(t,r);const a=s.concat(o);return a.length?ut(e,{observedAttributes:{configurable:!0,get:()=>a}}):e},wt=e=>new Event(e),kt=(...e)=>new xe("html",e);kt.for=it.for;const xt=(...e)=>new xe("svg",e);xt.for=ct.for;const Et=(e,t,n)=>{const r=Nt(e,t,new WeakMap);return n.set(e,r),r},Nt=(e,t,n)=>(r,...s)=>{const o=(e=>e)(r),a=n.get(o)||((e,t,{info:n})=>{const r=n?tt(t.join(lt),n).split(lt):t;return e.set(t,r),r})(n,o,e[lt]);return at(e,()=>t(a,...s))};function At(e){this.addEventListener(e,this)}function Ct(e){this.dispatchEvent(e)}function $t(){return ft.get(this)||Et(this,kt,ft)}function Lt(){return ht.get(this)||Et(this,xt,ht)}function jt(e){this[`on${e.type}`](e)}function Mt(){if(!dt.has(this)){dt.add(this),this[lt].events.forEach(At,this),this.dispatchEvent(wt("init"));const e=pt.get(this);e&&(pt.delete(this),e.forEach(Ct,this))}}function Ot(e,t,n){const r=wt("attributechanged");r.attributeName=e,r.oldValue=t,r.newValue=n,this.dispatchEvent(r)}function St(){this.dispatchEvent(wt("connected"))}function Tt(){this.render()}function Wt(){this.dispatchEvent(wt("disconnected"))}const{create:_t,defineProperty:Zt,defineProperties:Rt,getOwnPropertyNames:zt,getOwnPropertySymbols:Dt,getOwnPropertyDescriptor:Pt,keys:Ht}=Object,Ft={element:HTMLElement},It=new WeakMap,Bt=new WeakMap,Vt=new WeakMap,qt=(e,t)=>("string"==typeof e?Ut(e,t,""):Ut(e.name,e,"")).Class,Gt=e=>{const t=_t(null),n=_t(null),r={prototype:n,statics:t};return zt(e).concat(Dt(e)).forEach(r=>{const s=Pt(e,r);switch(s.enumerable=!1,r){case"extends":r="tagName";case"contains":case"includes":case"name":case"booleanAttributes":case"mappedAttributes":case"observedAttributes":case"style":case"tagName":t[r]=s;break;default:n[r]=s}}),r},Ut=(e,t,n)=>{if(!/^([A-Z][A-Za-z0-9_]*)(<([A-Za-z0-9:._-]+)>|:([A-Za-z0-9:._-]+))?$/.test(e))throw"Invalid name";const{$1:r,$3:s,$4:o}=RegExp;let a=s||o||t.tagName||t.extends||"element";const i="fragment"===a;if(i)a="element";else if(!/^[A-Za-z0-9:._-]+$/.test(a))throw"Invalid tag";let c="",l="";a.indexOf("-")<0?(c=function(e,t){return e.replace(/([A-Z])([A-Z][a-z])/g,t="$1"+(t||"-")+"$2").replace(/([a-z])([A-Z])/g,t).toLowerCase()}(r)+n).indexOf("-")<0&&(l="-heresy"):(c=a+n,a="element");const u=c+l;if(customElements.get(u))throw`Duplicated ${u} definition`;const f=Qe("object"==typeof t?Vt.get(t)||((e,t)=>{const{statics:n,prototype:r}=Gt(e),s=Qe(Ft[t]||(Ft[t]=document.createElement(t).constructor),!1);return Rt(s.prototype,r),Rt(s,n),Vt.set(e,bt(s)),s})(t,a):It.get(t)||(e=>{const t=Qe(e,!1);return It.set(e,bt(t)),t})(t),!0),h="element"===a;if(Zt(f,"new",{value:h?()=>document.createElement(u):()=>document.createElement(a,{is:u})}),Zt(f.prototype,"is",{value:u}),""===n){const e=(e=>{const{length:t}=e;let n=0,r=0;for(;r<t;)n=(n<<5)-n+e.charCodeAt(r++),n&=n;return n.toString(36)})(c.toUpperCase());Xe.map[r]=Qt(f,a,u,{id:e,i:0}),Xe.re=Ye(Ht(Xe.map))}if(i){const{render:e}=f.prototype;Zt(f.prototype,"render",{configurable:!0,value(){if(e&&e.apply(this,arguments),this.parentNode){const e=document.createRange();e.setStartBefore(this.firstChild),e.setEndAfter(this.lastChild),this.parentNode.replaceChild(e.extractContents(),this)}}})}const p=[u,f];return h||p.push({extends:a}),customElements.define(...p),{Class:f,is:u,name:r,tagName:a}};let Jt=Math.random();const Kt=e=>{let t=Bt.get(e);if(!t){const n=("Heresy"+ ++Jt).replace(/[^He-y0-9]/g,"");Bt.set(e,t=qt(n,e))}return()=>t.new()},Qt=(e,t,n,r)=>{const{prototype:s}=e,o=((e,t)=>({tagName:e,is:t,element:"element"===e}))(t,n),a=[nt(o)],i=e.includes||e.contains;if(i){const e={};Ht(i).forEach(t=>{const n=`-${r.id}-${r.i++}`,{Class:s,is:o,name:c,tagName:l}=Ut(t,i[t],n);a.push(nt(e[c]=Qt(s,l,o,r)))});const t=Ye(Ht(e)),{events:n}=s[lt],o={events:n,info:{map:e,re:t}};if(Zt(s,lt,{value:o}),"render"in s){const{render:e}=s,{info:t}=o;Zt(s,"render",{configurable:!0,value(){const n=rt();st(t);const r=e.apply(this,arguments);return st(n),r}})}}return"style"in e&&(e=>{if((e||"").length){const t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e));const n=document.head||document.querySelector("head");n.insertBefore(t,n.lastChild)}})(e.style(...a)),o};return e.contextual=e=>{let t=null;const n=$e((function(){return e.apply(t,arguments)}));return function(){return t=this,n.apply(this,arguments)}},e.createContext=e=>{const t={value:e,provide:He};return De.set(t,[]),t},e.define=qt,e.defineHook=(e,t)=>{if(e in ot)throw new Error("duplicated hook "+e);ot[e]=t(ot)},e.html=kt,e.ref=(e,t)=>e?e[t]||(e[t]={current:null}):{current:null},e.render=(e,t)=>at(e,"function"==typeof t?t:t instanceof xe?()=>t:Kt(t)),e.svg=xt,e}({});
