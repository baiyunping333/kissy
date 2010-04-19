/*
Copyright 2010, KISSY UI Library v1.0.5
MIT Licensed
build: 551 Apr 11 11:50
*/
KISSY.add("selector",function(i,m){function o(c,f,h){var a,b=[],d,e;if(typeof c===t){c=i.trim(c);if(v.test(c)){if(f=p(c.slice(1)))b=[f]}else if(a=w.exec(c)){d=a[1];e=a[2];a=a[3];if(f=d?p(d):n(f))if(a){if(!d||c.indexOf(q)!==-1)b=l(a,e,f)}else if(e)b=r(f,e)}else if(c.indexOf(",")>-1)if(k.querySelectorAll)b=k.querySelectorAll(c);else{d=c.split(",");e=[];b=0;for(c=d.length;b<c;++b)e=e.concat(o(d[b],f));b=g(e)}}else if(c&&c.nodeType)b=[c];else if(c&&c.item)b=c;if(b.item)b=i.makeArray(b);h||j(b);return b}
function n(c){if(c===m)c=k;else if(typeof c===t&&v.test(c))c=p(c.slice(1));else if(c&&c.nodeType!==1&&c.nodeType!==9)c=null;return c}function p(c){return k.getElementById(c)}function r(c,f){return c.getElementsByTagName(f)}function l(c,f,h){h=c=h.getElementsByClassName(c);var a=0,b=0,d=c.length,e;if(f&&f!==s){h=[];for(f=f.toUpperCase();a<d;++a){e=c[a];if(e.tagName===f)h[b++]=e}}return h}function g(c){var f=false;c.sort(function(a,b){a=a.sourceIndex-b.sourceIndex;if(a===0)f=true;return a});if(f)for(var h=
1;h<c.length;h++)c[h]===c[h-1]&&c.splice(h--,1);return c}function j(c){c.each=function(f,h){i.each(c,f,h)}}var k=document,t="string",q=" ",s="*",v=/^#[\w-]+$/,w=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var c=k.createElement("div");c.appendChild(k.createComment(""));if(c.getElementsByTagName(s).length>0)r=function(f,h){f=f.getElementsByTagName(h);if(h===s){h=[];for(var a=0,b=0,d;d=f[a++];)if(d.nodeType===1)h[b++]=d;f=h}return f}})();k.getElementsByClassName||(l=k.querySelectorAll?
function(c,f,h){return h.querySelectorAll((f?f:"")+"."+c)}:function(c,f,h){f=h.getElementsByTagName(f||s);h=[];var a=0,b=0,d=f.length,e,u;for(c=q+c+q;a<d;++a){e=f[a];if((u=e.className)&&(q+u+q).indexOf(c)>-1)h[b++]=e}return h});i.query=o;i.get=function(c,f){return o(c,f,true)[0]||null}});
KISSY.add("dom-base",function(i,m){function o(a,b){return b&&b.nodeName.toUpperCase()===a.toUpperCase()}function n(a,b){for(var d=[],e=0;a;a=a.nextSibling)if(a.nodeType===1&&a!==b)d[e++]=a;return d}function p(a,b,d){b=b||0;for(var e=0;a;a=a[d])if(a.nodeType===1&&e++===b)break;return a}function r(a,b){var d=null,e;if(a&&(a.push||a.item)&&a[0]){b=b||a[0].ownerDocument;d=b.createDocumentFragment();if(a.item)a=i.makeArray(a);b=0;for(e=a.length;b<e;++b)d.appendChild(a[b])}else i.error("unable to convert "+
a+" to fragment");return d}var l=document,g=l.documentElement.textContent!==m?"textContent":"innerText",j=i.UA,k=j.ie,t=k&&k<8,q={readonly:"readOnly"},s=/href|src|style/,v=/href|src|colspan|rowspan/,w=/\r/g,c=/radio|checkbox/,f=l.createElement("DIV"),h=/^[a-z]+$/i;t&&i.mix(q,{"for":"htmlFor","class":"className"});i.DOM={query:i.query,get:i.get,attr:function(a,b,d){if(!a||a.nodeType!==1)return m;var e;b=b.toLowerCase();b=q[b]||b;if(d===m){if(s.test(b)){if(b==="style")e=a.style.cssText}else e=a[b];
if(e===m)e=a.getAttribute(b);if(t&&v.test(b))e=a.getAttribute(b,2);return e===null?m:e}if(b==="style")a.style.cssText=d;else a.setAttribute(b,""+d)},removeAttr:function(a,b){a&&a.nodeType===1&&a.removeAttribute(b)},val:function(a,b){if(!a||a.nodeType!==1)return m;if(b===m){if(o("option",a))return(a.attributes.value||{}).specified?a.value:a.text;if(o("select",a)){b=a.selectedIndex;var d=a.options;if(b<0)return null;else if(a.type==="select-one")return i.DOM.val(d[b]);a=[];b=0;for(var e=d.length;b<
e;++b)d[b].selected&&a.push(i.DOM.val(d[b]));return a}if(j.webkit&&c.test(a.type))return a.getAttribute("value")===null?"on":a.value;return(a.value||"").replace(w,"")}if(o("select",a)){d=i.makeArray(b);var u=a.options,x;b=0;for(e=u.length;b<e;++b){x=u[b];x.selected=i.inArray(i.DOM.val(x),d)}if(!d.length)a.selectedIndex=-1}else a.value=b},css:function(a,b,d){if(d===m)return a.style[b];i.each(i.makeArray(a),function(e){e.style[b]=d})},text:function(a,b){if(b===m)return(a||{})[g]||"";if(a)a[g]=b},html:function(a,
b){if(b===m)return a.innerHTML;a.innerHTML=b},children:function(a){if(a.children)return i.makeArray(a.children);return n(a.firstChild)},siblings:function(a){return n(a.parentNode.firstChild,a)},next:function(a){return p(a,1,"nextSibling")},prev:function(a){return p(a,1,"previousSibling")},parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},create:function(a,b){if(typeof a==="string")a=i.trim(a);if(h.test(a))return(b||l).createElement(a);var d=null;d=b?b.createElement("DIV"):f;d.innerHTML=
a;a=d.childNodes;return d=a.length===1?a[0].parentNode.removeChild(a[0]):r(a,b||l)},addStyleSheet:function(a,b){var d=l.getElementsByTagName("head")[0],e=l.createElement("style");b&&(e.id=b);d.appendChild(e);if(e.styleSheet)e.styleSheet.cssText=a;else e.appendChild(l.createTextNode(a))}}});
KISSY.add("dom-class",function(i,m){function o(g,j,k){if(i.isArray(g)){i.each(g,function(){j.apply(k,Array.prototype.slice.call(arguments,3))});return true}}var n=i.DOM;i.mix(n,{hasClass:function(g,j){if(!j||!g||!g.className)return false;return(" "+g.className+" ").indexOf(" "+j+" ")>-1},addClass:function(g,j){if(!o(g,r,n,j))if(j&&g)p(g,j)||(g.className+=" "+j)},removeClass:function(g,j){if(!o(g,l,n,j))if(p(g,j)){g.className=(" "+g.className+" ").replace(" "+j+" "," ");p(g,j)&&l(g,j)}},replaceClass:function(g,
j,k){l(g,j);r(g,k)},toggleClass:function(g,j,k){o(g,n.toggleClass,n,j,k)||((k!==m?k:!p(g,j))?r(g,j):l(g,j))}});var p=n.hasClass,r=n.addClass,l=n.removeClass});