!function(){window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){setTimeout(e,16)}}(),void 0===jQuery.migrateMute&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;a[n]||(a[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function i(t,i,a,o){if(Object.defineProperty)try{return Object.defineProperty(t,i,{configurable:!0,enumerable:!0,get:function(){return r(o),a},set:function(e){r(o),a=e}}),n}catch(s){}e._definePropertyBroken=!0,t[i]=a}var a={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){a={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,f=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,p=/^(?:checked|selected)$/i;i(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,i,a,u){var c=i.toLowerCase(),m=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(m)&&(o?i in o:e.isFunction(e.fn[i])))?e(t)[i](a):("type"===i&&a!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&f.test(c)&&(e.attrHooks[c]={get:function(t,r){var i,a=e.prop(t,r);return a===!0||"boolean"!=typeof a&&(i=t.getAttributeNode(r))&&i.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var i;return n===!1?e.removeAttr(t,r):(i=e.propFix[r]||r,i in t&&(t[i]=!0),t.setAttribute(r,r.toLowerCase())),r}},p.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,i,a))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var i=(e.nodeName||"").toLowerCase();return"button"===i?c.apply(this,arguments):("input"!==i&&"option"!==i&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var m,h,g=e.fn.init,v=e.parseJSON,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,i){var a;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(a=w.exec(e.trim(t)))&&a[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),a[3]&&r("$(html) HTML text after last tag is ignored"),"#"===a[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?g.call(this,e.parseHTML(a[2],n,!0),n,i):g.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?v.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(m=e.uaMatch(navigator.userAgent),h={},m.browser&&(h[m.browser]=!0,h.version=m.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),i(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,i){return i&&i instanceof e&&!(i instanceof t)&&(i=t(i)),e.fn.init.call(this,r,i,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var y=e.fn.data;e.fn.data=function(t){var i,a,o=this[0];return!o||"events"!==t||1!==arguments.length||(i=e.data(o,t),a=e._data(o,t),i!==n&&i!==a||a===n)?y.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),a)};var b=/\/(java|ecma)script/i,x=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),x.apply(this,arguments)},e.clean||(e.clean=function(t,i,a,o){i=i||document,i=!i.nodeType&&i[0]||i,i=i.ownerDocument||i,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,i).childNodes),a)for(c=function(e){return!e.type||b.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):a.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(a.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var S=e.event.add,k=e.event.remove,j=e.event.trigger,F=e.fn.toggle,N=e.fn.live,T=e.fn.die,C="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",M=RegExp("\\b(?:"+C+")\\b"),Q=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(Q.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(Q,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&i(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,i,a){e!==document&&M.test(t)&&r("AJAX events should be attached to document: "+t),S.call(this,e,A(t||""),n,i,a)},e.event.remove=function(e,t,n,r,i){k.call(this,e,A(t)||"",n,r,i)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return F.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var i=arguments,a=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),i[r].apply(this,arguments)||!1};for(s.guid=a;i.length>o;)i[o++].guid=a;return this.click(s)},e.fn.live=function(t,n,i){return r("jQuery.fn.live() is deprecated"),N?N.apply(this,arguments):(e(this.context).on(t,this.selector,n,i),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),T?T.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,i){return n||M.test(e)||r("Global events are undocumented and deprecated"),j.call(this,e,t,n||document,i)},e.each(C.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window),function(){var e={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",prefix:""},t="webkit moz o ms khtml".split(" ");if("undefined"!=typeof document.cancelFullScreen)e.supportsFullScreen=!0;else for(var n=0,r=t.length;r>n;n++)if(e.prefix=t[n],"undefined"!=typeof document[e.prefix+"CancelFullScreen"]){e.supportsFullScreen=!0;break}e.supportsFullScreen&&(e.fullScreenEventName=e.prefix+"fullscreenchange",e.isFullScreen=function(){switch(this.prefix){case"":return document.fullScreen;case"webkit":return document.webkitIsFullScreen;default:return document[this.prefix+"FullScreen"]}},e.requestFullScreen=function(e){return""===this.prefix?e.requestFullScreen():e[this.prefix+"RequestFullScreen"]()},e.cancelFullScreen=function(){return""===this.prefix?document.cancelFullScreen():document[this.prefix+"CancelFullScreen"]()}),"undefined"!=typeof jQuery&&(jQuery.fn.requestFullScreen=function(){return this.each(function(){e.supportsFullScreen&&(e.isFullScreen()?e.cancelFullScreen(this):e.requestFullScreen(this))})}),window.fullScreenApi=e}(),function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null},r=document.createElement("div"),i=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return r.className="fit-vids-style",r.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>",e(".fit-vids-style").length<=0&&i.parentNode.insertBefore(r,i),t&&e.extend(n,t),this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.youtube-nocookie.com']","iframe[src*='www.kickstarter.com']","iframe[src*='soundcloud.com']","object","embed"];n.customSelector&&t.push(n.customSelector);var r=e(this).find(t.join(","));r.each(function(){var t=e(this);if(!("embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){var n="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),r=t.attr("width"),i=isNaN(parseInt(r,10))?t.width():parseInt(r,10),a=n/i;if(!t.attr("id")){var o="fitvid"+Math.floor(999999*Math.random());t.attr("id",o)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*a+"%"),r&&t.parent(".fluid-width-video-wrapper").wrap('<div class="k-video max-width-video-wrapper"></div>').parent(".max-width-video-wrapper").css("max-width",r+"px"),t.removeAttr("height").removeAttr("width")}}),e(window).trigger("resize")})}}(jQuery),function(e){function t(e,t){for(var n=e.length;n--;)if(e[n]===t)return n;return-1}function n(e,t){if(e.length!=t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function r(e){for(y in x)x[y]=e[T[y]]}function i(e,n){var i,a,o,u,c;if(i=e.keyCode,-1==t(N,i)&&N.push(i),(93==i||224==i)&&(i=91),i in x){x[i]=!0;for(o in k)k[o]==i&&(s[o]=!0)}else if(r(e),s.filter.call(this,e)&&i in b)for(u=0;u<b[i].length;u++)if(a=b[i][u],a.scope==n||"all"==a.scope){c=a.mods.length>0;for(o in x)(!x[o]&&t(a.mods,+o)>-1||x[o]&&-1==t(a.mods,+o))&&(c=!1);(0==a.mods.length&&!x[16]&&!x[18]&&!x[17]&&!x[91]||c)&&a.method(e,a)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function a(e){var n,r=e.keyCode,i=t(N,r);if(i>=0&&N.splice(i,1),(93==r||224==r)&&(r=91),r in x){x[r]=!1;for(n in k)k[n]==r&&(s[n]=!1)}}function o(){for(y in x)x[y]=!1;for(y in k)s[y]=!1}function s(e,t,n){var r,i,a;for(r=h(e),void 0===n&&(n=t,t="all"),a=0;a<r.length;a++)i=[],e=r[a].split("+"),e.length>1&&(i=g(e),e=[e[e.length-1]]),e=e[0],e=F(e),e in b||(b[e]=[]),b[e].push({shortcut:r[a],scope:t,method:n,key:r[a],mods:i})}function u(e,t){var r,i,a=e.split("+"),o=[];if(a.length>1&&(o=g(a),e=a[a.length-1]),e=F(e),void 0===t&&(t=p()),b[e])for(r in b[e])i=b[e][r],i.scope===t&&n(i.mods,o)&&(b[e][r]={})}function c(e){return"string"==typeof e&&(e=F(e)),-1!=t(N,e)}function l(){return N.slice(0)}function d(e){var t=(e.target||e.srcElement).tagName;return"INPUT"!=t&&"SELECT"!=t&&"TEXTAREA"!=t}function f(e){S=e||"all"}function p(){return S||"all"}function m(e){var t,n,r;for(t in b)for(n=b[t],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++}function h(e){var t;return e=e.replace(/\s/g,""),t=e.split(","),""==t[t.length-1]&&(t[t.length-2]+=","),t}function g(e){var t=e.slice(0,e.length-1);for(mi=0;mi<t.length;mi++)t[mi]=k[t[mi]];return t}function v(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,function(){n(window.event)})}function w(){var t=e.key;return e.key=C,t}var y,b={},x={16:!1,18:!1,17:!1,91:!1},S="all",k={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},j={backspace:8,tab:9,clear:12,enter:13,"return":13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,"delete":46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},F=function(e){return j[e]||e.toUpperCase().charCodeAt(0)},N=[];for(y=1;20>y;y++)j["f"+y]=111+y;var T={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"};for(y in k)s[y]=!1;v(document,"keydown",function(e){i(e,S)}),v(document,"keyup",a),v(window,"focus",o);var C=e.key;e.key=s,e.key.setScope=f,e.key.getScope=p,e.key.deleteScope=m,e.key.filter=d,e.key.isPressed=c,e.key.getPressedKeyCodes=l,e.key.noConflict=w,e.key.unbind=u,"undefined"!=typeof module&&(module.exports=key)}(this),function(e){function t(e){return e}function n(e){return decodeURIComponent(e.replace(i," "))}function r(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a.json?JSON.parse(e):e}catch(t){}}var i=/\+/g,a=e.cookie=function(i,o,s){if(void 0!==o){if(s=e.extend({},a.defaults,s),"number"==typeof s.expires){var u=s.expires,c=s.expires=new Date;c.setDate(c.getDate()+u)}return o=a.json?JSON.stringify(o):String(o),document.cookie=[a.raw?i:encodeURIComponent(i),"=",a.raw?o:encodeURIComponent(o),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var l=a.raw?t:n,d=document.cookie.split("; "),f=i?void 0:{},p=0,m=d.length;m>p;p++){var h=d[p].split("="),g=l(h.shift()),v=l(h.join("="));if(i&&i===g){f=r(v);break}i||(f[g]=r(v))}return f};a.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend(n,{expires:-1})),!0):!1}}(jQuery),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&"object"==typeof module.exports?e(require("jquery")):e(jQuery)}(function(e){function t(){var t=a.settings;if(t.autoDispose&&!e.contains(document.documentElement,this))return e(this).timeago("dispose"),this;var o=n(this);return isNaN(o.datetime)||(0==t.cutoff||Math.abs(i(o.datetime))<t.cutoff)&&e(this).text(r(o.datetime)),this}function n(t){if(t=e(t),!t.data("timeago")){t.data("timeago",{datetime:a.datetime(t)});var n=e.trim(t.text());a.settings.localeTitle?t.attr("title",t.data("timeago").datetime.toLocaleString()):!(n.length>0)||a.isTime(t)&&t.attr("title")||t.attr("title",n)}return t.data("timeago")}function r(e){return a.inWords(i(e))}function i(e){return(new Date).getTime()-e.getTime()}e.timeago=function(t){return t instanceof Date?r(t):"string"==typeof t?r(e.timeago.parse(t)):"number"==typeof t?r(new Date(t)):r(e.timeago.datetime(t))};var a=e.timeago;e.extend(e.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(t){function n(n,i){var a=e.isFunction(n)?n(i,t):n,o=r.numbers&&r.numbers[i]||i;return a.replace(/%d/i,o)}if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var r=this.settings.strings,i=r.prefixAgo,a=r.suffixAgo;if(this.settings.allowFuture&&0>t&&(i=r.prefixFromNow,a=r.suffixFromNow),!this.settings.allowPast&&t>=0)return this.settings.strings.inPast;var o=Math.abs(t)/1e3,s=o/60,u=s/60,c=u/24,l=c/365,d=45>o&&n(r.seconds,Math.round(o))||90>o&&n(r.minute,1)||45>s&&n(r.minutes,Math.round(s))||90>s&&n(r.hour,1)||24>u&&n(r.hours,Math.round(u))||42>u&&n(r.day,1)||30>c&&n(r.days,Math.round(c))||45>c&&n(r.month,1)||365>c&&n(r.months,Math.round(c/30))||1.5>l&&n(r.year,1)||n(r.years,Math.round(l)),f=r.wordSeparator||"";return void 0===r.wordSeparator&&(f=" "),e.trim([i,d,a].join(f))},parse:function(t){var n=e.trim(t);return n=n.replace(/\.\d+/,""),n=n.replace(/-/,"/").replace(/-/,"/"),n=n.replace(/T/," ").replace(/Z/," UTC"),n=n.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),n=n.replace(/([\+\-]\d\d)$/," $100"),new Date(n)},datetime:function(t){var n=a.isTime(t)?e(t).attr("datetime"):e(t).attr("title");return a.parse(n)},isTime:function(t){return"time"===e(t).get(0).tagName.toLowerCase()}});var o={init:function(){var n=e.proxy(t,this);n();var r=a.settings;r.refreshMillis>0&&(this._timeagoInterval=setInterval(n,r.refreshMillis))},update:function(n){var r=n instanceof Date?n:a.parse(n);e(this).data("timeago",{datetime:r}),a.settings.localeTitle&&e(this).attr("title",r.toLocaleString()),t.apply(this)},updateFromDOM:function(){e(this).data("timeago",{datetime:a.parse(a.isTime(this)?e(this).attr("datetime"):e(this).attr("title"))}),t.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};e.fn.timeago=function(e,t){var n=e?o[e]:o.init;if(!n)throw new Error("Unknown function name '"+e+"' for timeago");return this.each(function(){n.call(this,t)}),this},document.createElement("abbr"),document.createElement("time")});