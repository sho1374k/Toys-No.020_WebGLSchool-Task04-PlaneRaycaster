(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function xi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Zu(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var An={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_s={duration:.5,overwrite:!1,delay:0},dc,$t,Ct,Nn=1e8,dt=1/Nn,Dl=Math.PI*2,np=Dl/4,ip=0,Ju=Math.sqrt,rp=Math.cos,sp=Math.sin,Bt=function(e){return typeof e=="string"},Mt=function(e){return typeof e=="function"},Ai=function(e){return typeof e=="number"},fc=function(e){return typeof e>"u"},ci=function(e){return typeof e=="object"},hn=function(e){return e!==!1},Qu=function(){return typeof window<"u"},xa=function(e){return Mt(e)||Bt(e)},ed=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jt=Array.isArray,Ul=/(?:-?\.?\d|\.)+/gi,td=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nd=/[+-]=-?[.\d]+/,id=/[^,'"\[\]\s]+/gi,ap=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,Ln,Il,pc,wn={},ho={},rd,sd=function(e){return(ho=br(e,wn))&&Cn},mc=function(e,t){},uo=function(e,t){return!t&&void 0},ad=function(e,t){return e&&(wn[e]=t)&&ho&&(ho[e]=t)||wn},ia=function(){return 0},op={suppressEvents:!0,isStart:!0,kill:!1},Qa={suppressEvents:!0,kill:!1},lp={suppressEvents:!0},_c={},Vi=[],Ol={},od,En={},zo={},Yc=30,eo=[],gc="",vc=function(e){var t=e[0],n,i;if(ci(t)||Mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=eo.length;i--&&!eo[i].targetTest(t););n=eo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Rd(e[i],n)))||e.splice(i,1);return e},fr=function(e){return e._gsap||vc(Fn(e))[0]._gsap},ld=function(e,t,n){return(n=e[t])&&Mt(n)?e[t]():fc(n)&&e.getAttribute&&e.getAttribute(t)||n},un=function(e,t){return(e=e.split(",")).forEach(t)||e},Et=function(e){return Math.round(e*1e5)/1e5||0},Ht=function(e){return Math.round(e*1e7)/1e7||0},cs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},cp=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},fo=function(){var e=Vi.length,t=Vi.slice(0),n,i;for(Ol={},Vi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},cd=function(e,t,n,i){Vi.length&&!$t&&fo(),e.render(t,n,i||$t&&t<0&&(e._initted||e._startAt)),Vi.length&&!$t&&fo()},hd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(id).length<2?t:Bt(e)?e.trim():e},ud=function(e){return e},kn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},hp=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},br=function(e,t){for(var n in t)e[n]=t[n];return e},qc=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ci(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},po=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ws=function(e){var t=e.parent||gt,n=e.keyframes?hp(jt(e.keyframes)):kn;if(hn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},up=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},dd=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},To=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},$i=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},pr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},dp=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Nl=function(e,t,n,i){return e._startAt&&($t?e._startAt.revert(Qa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},fp=function r(e){return!e||e._ts&&r(e.parent)},$c=function(e){return e._repeat?gs(e._tTime,e=e.duration()+e._rDelay)*e:0},gs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},mo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ao=function(e){return e._end=Ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||dt)||0))},wo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ht(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ao(e),n._dirty||pr(n,e)),e},fd=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=mo(e.rawTime(),t),(!t._dur||pa(0,t.totalDuration(),n)-t._tTime>dt)&&t.render(n,!0)),pr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-dt}},ni=function(e,t,n,i){return t.parent&&$i(t),t._start=Ht((Ai(n)?n:n||e!==gt?Pn(e,n,t):e._time)+t._delay),t._end=Ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),dd(e,t,"_first","_last",e._sort?"_start":0),Fl(t)||(e._recent=t),i||fd(e,t),e._ts<0&&wo(e,e._tTime),e},pd=function(e,t){return(wn.ScrollTrigger||mc("scrollTrigger",t))&&wn.ScrollTrigger.create(t,e)},md=function(e,t,n,i,s){if(Mc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!$t&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&od!==bn.frame)return Vi.push(e),e._lazy=[s,i],1},pp=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Fl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},mp=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&pp(e)&&!(!e._initted&&Fl(e))||(e._ts<0||e._dp._ts<0)&&!Fl(e))?0:1,o=e._rDelay,l=0,c,h,d;if(o&&e._repeat&&(l=pa(0,e._tDur,t),h=gs(l,o),e._yoyo&&h&1&&(a=1-a),h!==gs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||$t||i||e._zTime===dt||!t&&e._zTime){if(!e._initted&&md(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?dt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Nl(e,t,n,!0),e._onUpdate&&!n&&zn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&zn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&$i(e,1),!n&&!$t&&(zn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},_p=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},vs=function(e,t,n,i){var s=e._repeat,a=Ht(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ht(a*(s+1)+e._rDelay*s):a,o>0&&!i&&wo(e,e._tTime=e._tDur*o),e.parent&&Ao(e),n||pr(e.parent,e),e},jc=function(e){return e instanceof cn?pr(e):vs(e,e._dur)},gp={_start:0,endTime:ia,totalDuration:ia},Pn=function r(e,t,n){var i=e.labels,s=e._recent||gp,a=e.duration()>=Nn?s.endTime(!1):e._dur,o,l,c;return Bt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(jt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Xs=function(e,t,n){var i=Ai(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=hn(l.vars.inherit)&&l.parent;a.immediateRender=hn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Pt(t[0],a,t[s+1])},Ji=function(e,t){return e||e===0?t(e):t},pa=function(e,t,n){return n<e?e:n>t?t:n},qt=function(e,t){return!Bt(e)||!(t=ap.exec(e))?"":t[1]},vp=function(e,t,n){return Ji(n,function(i){return pa(e,t,i)})},zl=[].slice,_d=function(e,t){return e&&ci(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ci(e[0]))&&!e.nodeType&&e!==Ln},xp=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Bt(i)&&!t||_d(i,1)?(s=n).push.apply(s,Fn(i)):n.push(i)})||n},Fn=function(e,t,n){return Ct&&!t&&Ct.selector?Ct.selector(e):Bt(e)&&!n&&(Il||!xs())?zl.call((t||pc).querySelectorAll(e),0):jt(e)?xp(e,n):_d(e)?zl.call(e,0):e?[e]:[]},Bl=function(e){return e=Fn(e)[0]||uo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Fn(t,n.querySelectorAll?n:n===e?uo("Invalid scope")||pc.createElement("div"):e)}},gd=function(e){return e.sort(function(){return .5-Math.random()})},vd=function(e){if(Mt(e))return e;var t=ci(e)?e:{each:e},n=mr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,d=i;return Bt(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(u,p,g){var _=(g||t).length,m=a[_],f,y,v,M,S,w,A,L,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,Nn])[1],!x){for(A=-Nn;A<(A=g[x++].getBoundingClientRect().left)&&x<_;);x--}for(m=a[_]=[],f=l?Math.min(x,_)*h-.5:i%x,y=x===Nn?0:l?_*d/x-.5:i/x|0,A=0,L=Nn,w=0;w<_;w++)v=w%x-f,M=y-(w/x|0),m[w]=S=c?Math.abs(c==="y"?M:v):Ju(v*v+M*M),S>A&&(A=S),S<L&&(L=S);i==="random"&&gd(m),m.max=A-L,m.min=L,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=qt(t.amount||t.each)||0,n=n&&_<0?Ad(n):n}return _=(m[u]-m.min)/m.max||0,Ht(m.b+(n?n(_):_)*m.v)+m.u}},kl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ht(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ai(n)?0:qt(n))}},xd=function(e,t){var n=jt(e),i,s;return!n&&ci(e)&&(i=n=e.radius||Nn,e.values?(e=Fn(e.values),(s=!Ai(e[0]))&&(i*=i)):e=kl(e.increment)),Ji(t,n?Mt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Nn,h=0,d=e.length,u,p;d--;)s?(u=e[d].x-o,p=e[d].y-l,u=u*u+p*p):u=Math.abs(e[d]-o),u<c&&(c=u,h=d);return h=!i||c<=i?e[h]:a,s||h===a||Ai(a)?h:h+qt(a)}:kl(e))},Md=function(e,t,n,i){return Ji(jt(e)?!t:n===!0?!!(n=0):!i,function(){return jt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Mp=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Sp=function(e,t){return function(n){return e(parseFloat(n))+(t||qt(n))}},yp=function(e,t,n){return yd(e,t,0,1,n)},Sd=function(e,t,n){return Ji(n,function(i){return e[~~t(i)]})},Ep=function r(e,t,n){var i=t-e;return jt(e)?Sd(e,r(0,e.length),t):Ji(n,function(s){return(i+(s-e)%i)%i+e})},bp=function r(e,t,n){var i=t-e,s=i*2;return jt(e)?Sd(e,r(0,e.length-1),t):Ji(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ra=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?id:Ul),n+=e.substr(t,i-t)+Md(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},yd=function(e,t,n,i,s){var a=t-e,o=i-n;return Ji(s,function(l){return n+((l-e)/a*o||0)})},Tp=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Bt(e),o={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(jt(e)&&!jt(t)){for(h=[],d=e.length,u=d-2,c=1;c<d;c++)h.push(r(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(u,~~g);return h[_](g-_)},n=t}else i||(e=br(jt(e)?[]:{},e));if(!h){for(l in t)xc.call(o,e,l,"get",t[l]);s=function(g){return Ec(g,o)||(a?e.p:e)}}}return Ji(n,s)},Kc=function(e,t,n){var i=e.labels,s=Nn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},zn=function(e,t,n){var i=e.vars,s=i[t],a=Ct,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Vi.length&&fo(),o&&(Ct=o),h=l?s.apply(c,l):s.call(c),Ct=a,h},Fs=function(e){return $i(e),e.scrollTrigger&&e.scrollTrigger.kill(!!$t),e.progress()<1&&zn(e,"onInterrupt"),e},rs,Ap=function(e){e=!e.name&&e.default||e;var t=e.name,n=Mt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ia,render:Ec,add:xc,kill:Hp,modifier:Gp,rawVars:0},a={targetTest:0,get:0,getSetter:yc,aliases:{},register:0};if(xs(),e!==i){if(En[t])return;kn(i,kn(po(e,s),a)),br(i.prototype,br(s,po(e,a))),En[i.prop=t]=i,e.targetTest&&(eo.push(i),_c[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ad(t,i),e.register&&e.register(Cn,i,dn)},ut=255,zs={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},Bo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ut+.5|0},Ed=function(e,t,n){var i=e?Ai(e)?[e>>16,e>>8&ut,e&ut]:0:zs.black,s,a,o,l,c,h,d,u,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),zs[e])i=zs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ut,i&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ul),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Bo(l+1/3,s,a),i[1]=Bo(l,s,a),i[2]=Bo(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(td),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ul)||zs.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/ut,a=i[1]/ut,o=i[2]/ut,d=Math.max(s,a,o),u=Math.min(s,a,o),h=(d+u)/2,d===u?l=c=0:(p=d-u,c=h>.5?p/(2-d-u):p/(d+u),l=d===s?(a-o)/p+(a<o?6:0):d===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},bd=function(e){var t=[],n=[],i=-1;return e.split(Wi).forEach(function(s){var a=s.match(is)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Zc=function(e,t,n){var i="",s=(e+i).match(Wi),a=t?"hsla(":"rgba(",o=0,l,c,h,d;if(!s)return e;if(s=s.map(function(u){return(u=Ed(u,t,1))&&a+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=bd(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Wi,"1").split(is),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(Wi),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},Wi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in zs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),wp=/hsl[a]?\(/,Td=function(e){var t=e.join(" "),n;if(Wi.lastIndex=0,Wi.test(t))return n=wp.test(t),e[1]=Zc(e[1],n),e[0]=Zc(e[0],n,bd(e[1])),!0},sa,bn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,d,u,p,g=function _(m){var f=r()-i,y=m===!0,v,M,S,w;if(f>e&&(n+=f-t),i+=f,S=i-n,v=S-a,(v>0||y)&&(w=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,a+=v+(v>=s?4:s-v),M=1),y||(l=c(_)),M)for(p=0;p<o.length;p++)o[p](S,u,w,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){rd&&(!Il&&Qu()&&(Ln=Il=window,pc=Ln.document||{},wn.gsap=Cn,(Ln.gsapVersions||(Ln.gsapVersions=[])).push(Cn.version),sd(ho||Ln.GreenSockGlobals||!Ln.gsap&&Ln||{}),h=Ln.requestAnimationFrame),l&&d.sleep(),c=h||function(m){return setTimeout(m,a-d.time*1e3+1|0)},sa=1,g(2))},sleep:function(){(h?Ln.cancelAnimationFrame:clearTimeout)(l),sa=0,c=ia},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,f,y){var v=f?function(M,S,w,A){m(M,S,w,A),d.remove(v)}:m;return d.remove(m),o[y?"unshift":"push"](v),xs(),v},remove:function(m,f){~(f=o.indexOf(m))&&o.splice(f,1)&&p>=f&&p--},_listeners:o},d}(),xs=function(){return!sa&&bn.wake()},it={},Cp=/^[\d.\-M][\d.\-,\s]/,Rp=/["']/g,Pp=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Rp,"").trim():+c,i=l.substr(o+1).trim();return t},Lp=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Dp=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Pp(t[1])]:Lp(e).split(",").map(hd)):it._CE&&Cp.test(e)?it._CE("",e):n},Ad=function(e){return function(t){return 1-e(1-t)}},wd=function r(e,t){for(var n=e._first,i;n;)n instanceof cn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},mr=function(e,t){return e&&(Mt(e)?e:it[e]||Dp(e))||t},Pr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return un(e,function(o){it[o]=wn[o]=s,it[a=o.toLowerCase()]=n;for(var l in s)it[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[o+"."+l]=s[l]}),s},Cd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ko=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Dl*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*sp((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Cd(o);return s=Dl/s,l.config=function(c,h){return r(e,c,h)},l},Go=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Cd(n);return i.config=function(s){return r(e,s)},i};un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Pr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;Pr("Elastic",ko("in"),ko("out"),ko());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Pr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Pr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Pr("Circ",function(r){return-(Ju(1-r*r)-1)});Pr("Sine",function(r){return r===1?1:-rp(r*np)+1});Pr("Back",Go("in"),Go("out"),Go());it.SteppedEase=it.steps=wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-dt;return function(o){return((i*pa(0,a,o)|0)+s)*n}}};_s.ease=it["quad.out"];un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return gc+=r+","+r+"Params,"});var Rd=function(e,t){this.id=ip++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ld,this.set=t?t.getSetter:yc},Ms=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,vs(this,+t.duration,1,1),this.data=t.data,Ct&&(this._ctx=Ct,Ct.data.push(this)),sa||bn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,vs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(xs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(wo(this,n),!s._dp||s.parent||fd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ni(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===dt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),cd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+$c(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+$c(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?gs(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-dt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?mo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-dt?0:this._rts,this.totalTime(pa(-this._delay,this._tDur,i),!0),Ao(this),dp(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(xs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==dt&&(this._tTime-=dt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ni(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?mo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=lp);var i=$t;return $t=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),$t=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,jc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,jc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Pn(this,n),hn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,hn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-dt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-dt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-dt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=Mt(n)?n:ud,o=function(){var c=i.then;i.then=null,Mt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Fs(this)},r}();kn(Ms.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-dt,_prom:0,_ps:!1,_rts:1});var cn=function(r){Zu(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=hn(n.sortChildren),gt&&ni(n.parent||gt,xi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&pd(xi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Xs(0,arguments,this),this},t.from=function(i,s,a){return Xs(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Xs(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Ws(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Pt(i,s,Pn(this,a),1),this},t.call=function(i,s,a){return ni(this,Pt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Pt(i,a,Pn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Ws(a).immediateRender=hn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,d){return o.startAt=a,Ws(o).immediateRender=hn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ht(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,p,g,_,m,f,y,v,M,S,w,A;if(this!==gt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,M=this._start,v=this._ts,f=!v,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(u=Ht(h%m),h===l?(_=this._repeat,u=c):(_=~~(h/m),_&&_===h/m&&(u=c,_--),u>c&&(u=c)),S=gs(this._tTime,m),!o&&this._tTime&&S!==_&&(S=_),w&&_&1&&(u=c-u,A=1),_!==S&&!this._lock){var L=w&&S&1,x=L===(w&&_&1);if(_<S&&(L=!L),o=L?0:c,this._lock=1,this.render(o||(A?0:Ht(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&zn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;wd(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=_p(this,Ht(o),Ht(u)),y&&(h-=u-(u=y._start))),this._tTime=h,this._time=u,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&!s&&(zn(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||u>=p._start)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(u-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(u-p._start)*p._ts,s,a),u!==this._time||!this._ts&&!f){y=0,g&&(h+=this._zTime=-dt);break}}p=g}else{p=this._last;for(var b=i<0?i:u;p;){if(g=p._prev,(p._act||b<=p._end)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(b-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(b-p._start)*p._ts,s,a||$t&&(p._initted||p._startAt)),u!==this._time||!this._ts&&!f){y=0,g&&(h+=this._zTime=b?-dt:dt);break}}p=g}}if(y&&!s&&(this.pause(),y.render(u>=o?0:-dt)._zTime=u>=o?1:-1,this._ts))return this._start=M,Ao(this),this.render(i,s,a);this._onUpdate&&!s&&zn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&$i(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(zn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Ai(s)||(s=Pn(this,s,i)),!(i instanceof Ms)){if(jt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Bt(i))return this.addLabel(i,s);if(Mt(i))i=Pt.delayedCall(0,i);else return this}return this!==i?ni(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Nn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Pt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Bt(i)?this.removeLabel(i):Mt(i)?this.killTweensOf(i):(To(this,i),i===this._recent&&(this._recent=this._last),pr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ht(bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Pn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Pt.delayedCall(0,s||ia,a);return o.data="isPause",this._hasPause=1,ni(this,o,Pn(this,i))},t.removePause=function(i){var s=this._first;for(i=Pn(this,i);s;)s._start===i&&s.data==="isPause"&&$i(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Oi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Fn(i),l=this._first,c=Ai(s),h;l;)l instanceof Pt?cp(l._targets,o)&&(c?(!Oi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Pn(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,p,g=Pt.to(a,kn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||dt,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&vs(g,m,0,1).render(g._time,!0,!0),p=1}h&&h.apply(g,d||[])}},s));return u?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,kn({startAt:{time:Pn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Kc(this,Pn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Kc(this,Pn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+dt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return pr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),pr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Nn,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ni(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;vs(a,a===gt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(gt._ts&&(cd(gt,mo(i,gt)),od=bn.frame),bn.frame>=Yc){Yc+=An.autoSleep||120;var s=gt._first;if((!s||!s._ts)&&An.autoSleep&&bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||bn.sleep()}}},e}(Ms);kn(cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Up=function(e,t,n,i,s,a,o){var l=new dn(this._pt,e,t,0,1,Od,null,s),c=0,h=0,d,u,p,g,_,m,f,y;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=ra(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),u=n.match(Fo)||[];d=Fo.exec(i);)g=d[0],_=i.substring(c,d.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?cs(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Fo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(nd.test(i)||f)&&(l.e=0),this._pt=l,l},xc=function(e,t,n,i,s,a,o,l,c,h){Mt(i)&&(i=i(s||0,e,a));var d=e[t],u=n!=="get"?n:Mt(d)?c?e[t.indexOf("set")||!Mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,p=Mt(d)?c?zp:Ud:Sc,g;if(Bt(i)&&(~i.indexOf("random(")&&(i=ra(i)),i.charAt(1)==="="&&(g=cs(u,i)+(qt(u)||0),(g||g===0)&&(i=g))),!h||u!==i||Gl)return!isNaN(u*i)&&i!==""?(g=new dn(this._pt,e,t,+u||0,i-(u||0),typeof d=="boolean"?kp:Id,0,p),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&mc(t,i),Up.call(this,e,t,u,i,p,l||An.stringFilter,c))},Ip=function(e,t,n,i,s){if(Mt(e)&&(e=Ys(e,s,t,n,i)),!ci(e)||e.style&&e.nodeType||jt(e)||ed(e))return Bt(e)?Ys(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ys(e[o],s,t,n,i);return a},Pd=function(e,t,n,i,s,a){var o,l,c,h;if(En[e]&&(o=new En[e]).init(s,o.rawVars?t[e]:Ip(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new dn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==rs))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Oi,Gl,Mc=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.onUpdateParams,d=i.callbackScope,u=i.runBackwards,p=i.yoyoEase,g=i.keyframes,_=i.autoRevert,m=e._dur,f=e._startAt,y=e._targets,v=e.parent,M=v&&v.data==="nested"?v.vars.targets:y,S=e._overwrite==="auto"&&!dc,w=e.timeline,A,L,x,b,k,X,I,F,z,j,H,V,ee;if(w&&(!g||!s)&&(s="none"),e._ease=mr(s,_s.ease),e._yEase=p?Ad(mr(p===!0?s:p,_s.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!w&&!!i.runBackwards,!w||g&&!i.stagger){if(F=y[0]?fr(y[0]).harness:0,V=F&&i[F.prop],A=po(i,_c),f&&(f._zTime<0&&f.progress(1),t<0&&u&&o&&!_?f.render(-1,!0):f.revert(u&&m?Qa:op),f._lazy=0),a){if($i(e._startAt=Pt.set(y,kn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!f&&hn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:d,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&($t||!o&&!_)&&e._startAt.revert(Qa),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!f){if(t&&(o=!1),x=kn({overwrite:!1,data:"isFromStart",lazy:o&&!f&&hn(l),immediateRender:o,stagger:0,parent:v},A),V&&(x[F.prop]=V),$i(e._startAt=Pt.set(y,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&($t?e._startAt.revert(Qa):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,dt,dt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&hn(l)||l&&!m,L=0;L<y.length;L++){if(k=y[L],I=k._gsap||vc(y)[L]._gsap,e._ptLookup[L]=j={},Ol[I.id]&&Vi.length&&fo(),H=M===y?L:M.indexOf(k),F&&(z=new F).init(k,V||A,e,H,M)!==!1&&(e._pt=b=new dn(e._pt,k,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(R){j[R]=b}),z.priority&&(X=1)),!F||V)for(x in A)En[x]&&(z=Pd(x,A,e,H,k,M))?z.priority&&(X=1):j[x]=b=xc.call(e,k,x,"get",A[x],H,M,0,i.stringFilter);e._op&&e._op[L]&&e.kill(k,e._op[L]),S&&e._pt&&(Oi=e,gt.killTweensOf(k,j,e.globalTime(t)),ee=!e.parent,Oi=0),e._pt&&l&&(Ol[I.id]=1)}X&&Nd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ee,g&&t<=0&&w.render(Nn,!0,!0)},Op=function(e,t,n,i,s,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,d,u;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,u=e._targets.length;u--;){if(c=d[u][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Gl=1,e.vars[t]="+=0",Mc(e,o),Gl=0,1;l.push(c)}for(u=l.length;u--;)h=l[u],c=h._pt||h,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,h.e&&(h.e=Et(n)+qt(h.e)),h.b&&(h.b=c.s+qt(h.b))},Np=function(e,t){var n=e[0]?fr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=br({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Fp=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(jt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ys=function(e,t,n,i,s){return Mt(e)?e.call(t,n,i,s):Bt(e)&&~e.indexOf("random(")?ra(e):e},Ld=gc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Dd={};un(Ld+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Dd[r]=1});var Pt=function(r){Zu(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ws(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,y=i.parent||gt,v=(jt(n)||ed(n)?Ai(n[0]):"length"in i)?[n]:Fn(n),M,S,w,A,L,x,b,k;if(o._targets=v.length?vc(v):uo("GSAP target "+n+" not found. https://greensock.com",!An.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||u||xa(c)||xa(h)){if(i=o.vars,M=o.timeline=new cn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),M.kill(),M.parent=M._dp=xi(o),M._start=0,u||xa(c)||xa(h)){if(A=v.length,b=u&&vd(u),ci(u))for(L in u)~Ld.indexOf(L)&&(k||(k={}),k[L]=u[L]);for(S=0;S<A;S++)w=po(i,Dd),w.stagger=0,f&&(w.yoyoEase=f),k&&br(w,k),x=v[S],w.duration=+Ys(c,xi(o),S,x,v),w.delay=(+Ys(h,xi(o),S,x,v)||0)-o._delay,!u&&A===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),M.to(x,w,b?b(S,x,v):0),M._ease=it.none;M.duration()?c=h=0:o.timeline=0}else if(g){Ws(kn(M.vars.defaults,{ease:"none"})),M._ease=mr(g.ease||i.ease||"none");var X=0,I,F,z;if(jt(g))g.forEach(function(j){return M.to(v,j,">")}),M.duration();else{w={};for(L in g)L==="ease"||L==="easeEach"||Fp(L,g[L],w,g.easeEach);for(L in w)for(I=w[L].sort(function(j,H){return j.t-H.t}),X=0,S=0;S<I.length;S++)F=I[S],z={ease:F.e,duration:(F.t-(S?I[S-1].t:0))/100*c},z[L]=F.v,M.to(v,z,X),X+=z.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return p===!0&&!dc&&(Oi=xi(o),gt.killTweensOf(v),Oi=0),ni(y,xi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===Ht(y._time)&&hn(d)&&fp(xi(o))&&y.data!=="nested")&&(o._tTime=-dt,o.render(Math.max(0,-h)||0)),m&&pd(xi(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-dt&&!h?l:i<dt?0:i,u,p,g,_,m,f,y,v,M;if(!c)mp(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(u=d,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(u=Ht(d%_),d===l?(g=this._repeat,u=c):(g=~~(d/_),g&&g===d/_&&(u=c,g--),u>c&&(u=c)),f=this._yoyo&&g&1,f&&(M=this._yEase,u=c-u),m=gs(this._tTime,_),u===o&&!a&&this._initted)return this._tTime=d,this;g!==m&&(v&&this._yEase&&wd(v,f),this.vars.repeatRefresh&&!f&&!this._lock&&(this._lock=a=1,this.render(Ht(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(md(this,h?i:u,a,s,d))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(M||this._ease)(u/c),this._from&&(this.ratio=y=1-y),u&&!o&&!s&&(zn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(y,p.d),p=p._next;v&&v.render(i<0?i:!u&&f?-dt:v._dur*v._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Nl(this,i,s,a),zn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&zn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Nl(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&$i(this,1),!s&&!(h&&!o)&&(d||o||f)&&(zn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o){sa||bn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Mc(this,l),c=this._ease(l/this._dur),Op(this,i,s,a,o,c,l)?this.resetTo(i,s,a,o):(wo(this,0),this.parent||dd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fs(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Oi&&Oi.vars.overwrite!==!0)._first||Fs(this),this.parent&&a!==this.timeline.totalDuration()&&vs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Fn(i):o,c=this._ptLookup,h=this._pt,d,u,p,g,_,m,f;if((!s||s==="all")&&up(o,l))return s==="all"&&(this._pt=0),Fs(this);for(d=this._op=this._op||[],s!=="all"&&(Bt(s)&&(_={},un(s,function(y){return _[y]=1}),s=_),s=Np(o,s)),f=o.length;f--;)if(~l.indexOf(o[f])){u=c[f],s==="all"?(d[f]=s,g=u,p={}):(p=d[f]=d[f]||{},g=s);for(_ in g)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&To(this,m,"_pt"),delete u[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&h&&Fs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Xs(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Xs(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return gt.killTweensOf(i,s,a)},e}(Ms);kn(Pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});un("staggerTo,staggerFrom,staggerFromTo",function(r){Pt[r]=function(){var e=new cn,t=zl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Sc=function(e,t,n){return e[t]=n},Ud=function(e,t,n){return e[t](n)},zp=function(e,t,n,i){return e[t](i.fp,n)},Bp=function(e,t,n){return e.setAttribute(t,n)},yc=function(e,t){return Mt(e[t])?Ud:fc(e[t])&&e.setAttribute?Bp:Sc},Id=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},kp=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Od=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ec=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Gp=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Hp=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?To(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Vp=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Nd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},dn=function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Id,this.d=l||this,this.set=c||Sc,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Vp,this.m=n,this.mt=s,this.tween=i},r}();un(gc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return _c[r]=1});wn.TweenMax=wn.TweenLite=Pt;wn.TimelineLite=wn.TimelineMax=cn;gt=new cn({sortChildren:!1,defaults:_s,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});An.stringFilter=Td;var Ss=[],to={},Wp=[],Jc=0,Ho=function(e){return(to[e]||Wp).map(function(t){return t()})},Hl=function(){var e=Date.now(),t=[];e-Jc>2&&(Ho("matchMediaInit"),Ss.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Ln.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Ho("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Jc=e,Ho("matchMedia"))},Fd=function(){function r(t,n){this.selector=n&&Bl(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Mt(n)&&(s=i,i=n,n=Mt);var a=this,o=function(){var c=Ct,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Bl(s)),Ct=a,d=i.apply(a,arguments),Mt(d)&&a._r.push(d),Ct=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===Mt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=Ct;Ct=null,n(this),Ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Pt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Ms)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=Ss.indexOf(this);~o&&Ss.splice(o,1)}},e.revert=function(n){this.kill(n||{})},r}(),Xp=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){ci(n)||(n={matches:n});var a=new Fd(0,s||this.scope),o=a.conditions={},l,c,h;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Ln.matchMedia(n[c]),l&&(Ss.indexOf(a)<0&&Ss.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Hl):l.addEventListener("change",Hl)));return h&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),_o={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ap(i)})},timeline:function(e){return new cn(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Bt(e)&&(e=Fn(e)[0]);var s=fr(e||{}).get,a=n?ud:hd;return n==="native"&&(n=""),e&&(t?a((En[t]&&En[t].get||s)(e,t,n,i)):function(o,l,c){return a((En[o]&&En[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Fn(e),e.length>1){var i=e.map(function(h){return Cn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}e=e[0]||{};var a=En[t],o=fr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var d=new a;rs._pt=0,d.init(e,n?h+n:h,rs,0,[e]),d.render(1,d),rs._pt&&Ec(1,rs)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=Cn.to(e,br((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=mr(e.ease,_s.ease)),qc(_s,e||{})},config:function(e){return qc(An,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!En[o]&&!wn[o]&&uo(t+" effect requires "+o+" plugin.")}),zo[t]=function(o,l,c){return n(Fn(o),kn(l||{},s),c)},a&&(cn.prototype[t]=function(o,l,c){return this.add(zo[t](o,ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=mr(t)},parseEase:function(e,t){return arguments.length?mr(e,t):it},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new cn(e),i,s;for(n.smoothChildTiming=hn(e.smoothChildTiming),gt.remove(n),n._dp=0,n._time=n._tTime=gt._time,i=gt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Pt&&i.vars.onComplete===i._targets[0]))&&ni(n,i,i._start-i._delay),i=s;return ni(gt,n,0),n},context:function(e,t){return e?new Fd(e,t):Ct},matchMedia:function(e){return new Xp(e)},matchMediaRefresh:function(){return Ss.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Hl()},addEventListener:function(e,t){var n=to[e]||(to[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=to[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Ep,wrapYoyo:bp,distribute:vd,random:Md,snap:xd,normalize:yp,getUnit:qt,clamp:vp,splitColor:Ed,toArray:Fn,selector:Bl,mapRange:yd,pipe:Mp,unitize:Sp,interpolate:Tp,shuffle:gd},install:sd,effects:zo,ticker:bn,updateRoot:cn.updateRoot,plugins:En,globalTimeline:gt,core:{PropTween:dn,globals:ad,Tween:Pt,Timeline:cn,Animation:Ms,getCache:fr,_removeLinkedListItem:To,reverting:function(){return $t},context:function(e){return e&&Ct&&(Ct.data.push(e),e._ctx=Ct),Ct},suppressOverwrites:function(e){return dc=e}}};un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return _o[r]=Pt[r]});bn.add(cn.updateRoot);rs=_o.to({},{duration:0});var Yp=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},qp=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Yp(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Vo=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Bt(s)&&(l={},un(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}qp(o,s)}}}},Cn=_o.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)$t?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Vo("roundProps",kl),Vo("modifiers"),Vo("snap",xd))||_o;Pt.version=cn.version=Cn.version="3.11.4";rd=1;Qu()&&xs();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Qc,Ni,hs,bc,ur,eh,Tc,$p=function(){return typeof window<"u"},wi={},or=180/Math.PI,us=Math.PI/180,Ur=Math.atan2,th=1e8,Ac=/([A-Z])/g,jp=/(left|right|width|margin|padding|x)/i,Kp=/[\s,\(]\S/,yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zp=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Jp=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Qp=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},zd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Bd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},em=function(e,t,n){return e.style[t]=n},tm=function(e,t,n){return e.style.setProperty(t,n)},nm=function(e,t,n){return e._gsap[t]=n},im=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},rm=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},sm=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},vt="transform",ei=vt+"Origin",am=function(e,t){var n=this,i=this.target,s=i.style;if(e in wi){if(this.tfm=this.tfm||{},e!=="transform"&&(e=yi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Mi(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Mi(i,e)),this.props.indexOf(vt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ei,t,"")),e=vt}(s||t)&&this.props.push(e,t,s[e])},kd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},om=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(Ac,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Tc(),s&&!s.isStart&&!n[vt]&&(kd(n),i.uncache=1)}},Gd=function(e,t){var n={target:e,props:[],revert:om,save:am};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Hd,Wl=function(e,t){var n=Ni.createElementNS?Ni.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ni.createElement(e);return n.style?n:Ni.createElement(e)},si=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ac,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,ys(t)||t,1)||""},nh="O,Moz,ms,Ms,Webkit".split(","),ys=function(e,t,n){var i=t||ur,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(nh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?nh[a]:"")+e},Xl=function(){$p()&&window.document&&(Qc=window,Ni=Qc.document,hs=Ni.documentElement,ur=Wl("div")||{style:{}},Wl("div"),vt=ys(vt),ei=vt+"Origin",ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hd=!!ys("perspective"),Tc=Cn.core.reverting,bc=1)},Wo=function r(e){var t=Wl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(hs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),hs.removeChild(t),this.style.cssText=s,a},ih=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Vd=function(e){var t;try{t=e.getBBox()}catch{t=Wo.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Wo||(t=Wo.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+ih(e,["x","cx","x1"])||0,y:+ih(e,["y","cy","y1"])||0,width:0,height:0}:t},Wd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Vd(e))},aa=function(e,t){if(t){var n=e.style;t in wi&&t!==ei&&(t=vt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Ac,"-$1").toLowerCase())):n.removeAttribute(t)}},Fi=function(e,t,n,i,s,a){var o=new dn(e._pt,t,n,0,1,a?Bd:zd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},rh={deg:1,rad:1,turn:1},lm={grid:1,flex:1},ji=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ur.style,l=jp.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",p=i==="%",g,_,m,f;return i===a||!s||rh[i]||rh[a]?s:(a!=="px"&&!u&&(s=r(e,t,n,"px")),f=e.getCTM&&Wd(e),(p||a==="%")&&(wi[t]||~t.indexOf("adius"))?(g=f?e.getBBox()[l?"width":"height"]:e[h],Et(p?s/g*d:s/100*g)):(o[l?"width":"height"]=d+(u?a:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,f&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ni||!_.appendChild)&&(_=Ni.body),m=_._gsap,m&&p&&m.width&&l&&m.time===bn.time&&!m.uncache?Et(s/m.width*d):((p||a==="%")&&!lm[si(_,"display")]&&(o.position=si(e,"position")),_===e&&(o.position="static"),_.appendChild(ur),g=ur[h],_.removeChild(ur),o.position="absolute",l&&p&&(m=fr(_),m.time=bn.time,m.width=_[h]),Et(u?g*s/d:g&&s?d/g*s:0))))},Mi=function(e,t,n,i){var s;return bc||Xl(),t in yi&&t!=="transform"&&(t=yi[t],~t.indexOf(",")&&(t=t.split(",")[0])),wi[t]&&t!=="transform"?(s=la(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:vo(si(e,ei))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=go[t]&&go[t](e,t,n)||si(e,t)||ld(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ji(e,t,s,n)+n:s},cm=function(e,t,n,i){if(!n||n==="none"){var s=ys(t,e,1),a=s&&si(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=si(e,"borderTopColor"))}var o=new dn(this._pt,e.style,t,0,1,Od),l=0,c=0,h,d,u,p,g,_,m,f,y,v,M,S;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=si(e,t)||i,e.style[t]=n),h=[n,i],Td(h),n=h[0],i=h[1],u=n.match(is)||[],S=i.match(is)||[],S.length){for(;d=is.exec(i);)m=d[0],y=i.substring(l,d.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=u[c++]||"")&&(p=parseFloat(_)||0,M=_.substr((p+"").length),m.charAt(1)==="="&&(m=cs(p,m)+M),f=parseFloat(m),v=m.substr((f+"").length),l=is.lastIndex-v.length,v||(v=v||An.units[t]||M,l===i.length&&(i+=v,o.e+=v)),M!==v&&(p=ji(e,t,_,v)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:p,c:f-p,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Bd:zd;return nd.test(i)&&(o.e=0),this._pt=o,o},sh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},hm=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=sh[n]||n,t[1]=sh[i]||i,t.join(" ")},um=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],wi[o]&&(l=1,o=o==="transformOrigin"?ei:vt),aa(n,o);l&&(aa(n,vt),a&&(a.svg&&n.removeAttribute("transform"),la(n,1),a.uncache=1,kd(i)))}},go={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new dn(e._pt,t,n,0,0,um);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},oa=[1,0,0,1,0,0],Xd={},Yd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ah=function(e){var t=si(e,vt);return Yd(t)?oa:t.substr(7).match(td).map(Et)},wc=function(e,t){var n=e._gsap||fr(e),i=e.style,s=ah(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?oa:s):(s===oa&&!e.offsetParent&&e!==hs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,hs.appendChild(e)),s=ah(e),l?i.display=l:aa(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):hs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yl=function(e,t,n,i,s,a){var o=e._gsap,l=s||wc(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],f=l[4],y=l[5],v=t.split(" "),M=parseFloat(v[0])||0,S=parseFloat(v[1])||0,w,A,L,x;n?l!==oa&&(A=p*m-g*_)&&(L=M*(m/A)+S*(-_/A)+(_*y-m*f)/A,x=M*(-g/A)+S*(p/A)-(p*y-g*f)/A,M=L,S=x):(w=Vd(e),M=w.x+(~v[0].indexOf("%")?M/100*w.width:M),S=w.y+(~(v[1]||v[0]).indexOf("%")?S/100*w.height:S)),i||i!==!1&&o.smooth?(f=M-c,y=S-h,o.xOffset=d+(f*p+y*_)-f,o.yOffset=u+(f*g+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ei]="0px 0px",a&&(Fi(a,o,"xOrigin",c,M),Fi(a,o,"yOrigin",h,S),Fi(a,o,"xOffset",d,o.xOffset),Fi(a,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+S)},la=function(e,t){var n=e._gsap||new Rd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=si(e,ei)||"0",h,d,u,p,g,_,m,f,y,v,M,S,w,A,L,x,b,k,X,I,F,z,j,H,V,ee,R,B,Z,he,ae,le;return h=d=u=_=m=f=y=v=M=0,p=g=1,n.svg=!!(e.getCTM&&Wd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[vt]!=="none"?l[vt]:"")),i.scale=i.rotate=i.translate="none"),A=wc(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),Yl(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,A)),S=n.xOrigin||0,w=n.yOrigin||0,A!==oa&&(k=A[0],X=A[1],I=A[2],F=A[3],h=z=A[4],d=j=A[5],A.length===6?(p=Math.sqrt(k*k+X*X),g=Math.sqrt(F*F+I*I),_=k||X?Ur(X,k)*or:0,y=I||F?Ur(I,F)*or+_:0,y&&(g*=Math.abs(Math.cos(y*us))),n.svg&&(h-=S-(S*k+w*I),d-=w-(S*X+w*F))):(le=A[6],he=A[7],R=A[8],B=A[9],Z=A[10],ae=A[11],h=A[12],d=A[13],u=A[14],L=Ur(le,Z),m=L*or,L&&(x=Math.cos(-L),b=Math.sin(-L),H=z*x+R*b,V=j*x+B*b,ee=le*x+Z*b,R=z*-b+R*x,B=j*-b+B*x,Z=le*-b+Z*x,ae=he*-b+ae*x,z=H,j=V,le=ee),L=Ur(-I,Z),f=L*or,L&&(x=Math.cos(-L),b=Math.sin(-L),H=k*x-R*b,V=X*x-B*b,ee=I*x-Z*b,ae=F*b+ae*x,k=H,X=V,I=ee),L=Ur(X,k),_=L*or,L&&(x=Math.cos(L),b=Math.sin(L),H=k*x+X*b,V=z*x+j*b,X=X*x-k*b,j=j*x-z*b,k=H,z=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,f=180-f),p=Et(Math.sqrt(k*k+X*X+I*I)),g=Et(Math.sqrt(j*j+le*le)),L=Ur(z,j),y=Math.abs(L)>2e-4?L*or:0,M=ae?1/(ae<0?-ae:ae):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Yd(si(e,vt)),H&&e.setAttribute("transform",H))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(p*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Et(p),n.scaleY=Et(g),n.rotation=Et(_)+o,n.rotationX=Et(m)+o,n.rotationY=Et(f)+o,n.skewX=y+o,n.skewY=v+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[ei]=vo(c)),n.xOffset=n.yOffset=0,n.force3D=An.force3D,n.renderTransform=n.svg?fm:Hd?qd:dm,n.uncache=0,n},vo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Xo=function(e,t,n){var i=qt(t);return Et(parseFloat(t)+parseFloat(ji(e,"x",n+"px",i)))+i},dm=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,qd(e,t)},tr="0deg",Ps="0px",nr=") ",qd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,f=n.force3D,y=n.target,v=n.zOrigin,M="",S=f==="auto"&&e&&e!==1||f===!0;if(v&&(d!==tr||h!==tr)){var w=parseFloat(h)*us,A=Math.sin(w),L=Math.cos(w),x;w=parseFloat(d)*us,x=Math.cos(w),a=Xo(y,a,A*x*-v),o=Xo(y,o,-Math.sin(w)*-v),l=Xo(y,l,L*x*-v+v)}m!==Ps&&(M+="perspective("+m+nr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(S||a!==Ps||o!==Ps||l!==Ps)&&(M+=l!==Ps||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+nr),c!==tr&&(M+="rotate("+c+nr),h!==tr&&(M+="rotateY("+h+nr),d!==tr&&(M+="rotateX("+d+nr),(u!==tr||p!==tr)&&(M+="skew("+u+", "+p+nr),(g!==1||_!==1)&&(M+="scale("+g+", "+_+nr),y.style[vt]=M||"translate(0, 0)"},fm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,f=n.yOffset,y=n.forceCSS,v=parseFloat(a),M=parseFloat(o),S,w,A,L,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=us,c*=us,S=Math.cos(l)*d,w=Math.sin(l)*d,A=Math.sin(l-c)*-u,L=Math.cos(l-c)*u,c&&(h*=us,x=Math.tan(c-h),x=Math.sqrt(1+x*x),A*=x,L*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),S*=x,w*=x)),S=Et(S),w=Et(w),A=Et(A),L=Et(L)):(S=d,L=u,w=A=0),(v&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(v=ji(p,"x",a,"px"),M=ji(p,"y",o,"px")),(g||_||m||f)&&(v=Et(v+g-(g*S+_*A)+m),M=Et(M+_-(g*w+_*L)+f)),(i||s)&&(x=p.getBBox(),v=Et(v+i/100*x.width),M=Et(M+s/100*x.height)),x="matrix("+S+","+w+","+A+","+L+","+v+","+M+")",p.setAttribute("transform",x),y&&(p.style[vt]=x)},pm=function(e,t,n,i,s){var a=360,o=Bt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?or:1),c=l-i,h=i+c+"deg",d,u;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*th)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*th)%a-~~(c/a)*a)),e._pt=u=new dn(e._pt,t,n,i,c,Zp),u.e=h,u.u="deg",e._props.push(n),u},oh=function(e,t){for(var n in t)e[n]=t[n];return e},mm=function(e,t,n){var i=oh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,u,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[vt]=t,o=la(n,1),aa(n,vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[vt],a[vt]=t,o=la(n,1),a[vt]=c);for(l in wi)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(p=qt(c),g=qt(h),d=p!==g?ji(n,l,c,g):parseFloat(c),u=parseFloat(h),e._pt=new dn(e._pt,o,l,d,u-d,Vl),e._pt.u=g||0,e._props.push(l));oh(o,i)};un("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});go[e>1?"border"+r:r]=function(o,l,c,h,d){var u,p;if(arguments.length<4)return u=a.map(function(g){return Mi(o,g,c)}),p=u.join(" "),p.split(u[0]).length===5?u[0]:p;u=(h+"").split(" "),p={},a.forEach(function(g,_){return p[g]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,p,d)}});var $d={name:"css",register:Xl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,d,u,p,g,_,m,f,y,v,M,S,w,A,L;bc||Xl(),this.styles=this.styles||Gd(e),L=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(En[_]&&Pd(_,t,n,i,e,s)))){if(p=typeof h,g=go[_],p==="function"&&(h=h.call(n,i,e,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=ra(h)),g)g(this,e,_,h,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Wi.lastIndex=0,Wi.test(c)||(m=qt(c),f=qt(h)),f?m!==f&&(c=ji(e,_,c,f)+f):m&&(h+=m),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),L.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Bt(c)&&~c.indexOf("random(")&&(c=ra(c)),qt(c+"")||(c+=An.units[_]||qt(Mi(e,_))||""),(c+"").charAt(1)==="="&&(c=Mi(e,_))):c=Mi(e,_),u=parseFloat(c),y=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),d=parseFloat(h),_ in yi&&(_==="autoAlpha"&&(u===1&&Mi(e,"visibility")==="hidden"&&d&&(u=0),L.push("visibility",0,o.visibility),Fi(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=yi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in wi,v){if(this.styles.save(_),M||(S=e._gsap,S.renderTransform&&!t.parseTransform||la(e,t.parseTransform),w=t.smoothOrigin!==!1&&S.smooth,M=this._pt=new dn(this._pt,o,vt,0,1,S.renderTransform,S,0,-1),M.dep=1),_==="scale")this._pt=new dn(this._pt,S,"scaleY",S.scaleY,(y?cs(S.scaleY,y+d):d)-S.scaleY||0,Vl),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(ei,0,o[ei]),h=hm(h),S.svg?Yl(e,h,0,w,0,this):(f=parseFloat(h.split(" ")[2])||0,f!==S.zOrigin&&Fi(this,S,"zOrigin",S.zOrigin,f),Fi(this,o,_,vo(c),vo(h)));continue}else if(_==="svgOrigin"){Yl(e,h,1,w,0,this);continue}else if(_ in Xd){pm(this,S,_,u,y?cs(u,y+h):h);continue}else if(_==="smoothOrigin"){Fi(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){mm(this,h,e);continue}}else _ in o||(_=ys(_)||_);if(v||(d||d===0)&&(u||u===0)&&!Kp.test(h)&&_ in o)m=(c+"").substr((u+"").length),d||(d=0),f=qt(h)||(_ in An.units?An.units[_]:m),m!==f&&(u=ji(e,_,c,f)),this._pt=new dn(this._pt,v?S:o,_,u,(y?cs(u,y+d):d)-u,!v&&(f==="px"||_==="zIndex")&&t.autoRound!==!1?Qp:Vl),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=Jp);else if(_ in o)cm.call(this,e,_,c,y?y+h:h);else if(_ in e)this.add(e,_,c||e[_],y?y+h:h,i,s);else if(_!=="parseTransform"){mc(_,h);continue}v||(_ in o?L.push(_,0,o[_]):L.push(_,1,c||e[_])),a.push(_)}}A&&Nd(this)},render:function(e,t){if(t.tween._time||!Tc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Mi,aliases:yi,getSetter:function(e,t,n){var i=yi[t];return i&&i.indexOf(",")<0&&(t=i),t in wi&&t!==ei&&(e._gsap.x||Mi(e,"x"))?n&&eh===n?t==="scale"?im:nm:(eh=n||{})&&(t==="scale"?rm:sm):e.style&&!fc(e.style[t])?em:~t.indexOf("-")?tm:yc(e,t)},core:{_removeProperty:aa,_getMatrix:wc}};Cn.utils.checkPrefix=ys;Cn.core.getStyleSaver=Gd;(function(r,e,t,n){var i=un(r+","+e+","+t,function(s){wi[s]=1});un(e,function(s){An.units[s]="deg",Xd[s]=1}),yi[i[13]]=r+","+e,un(n,function(s){var a=s.split(":");yi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){An.units[r]="px"});Cn.registerPlugin($d);var Cc=Cn.registerPlugin($d)||Cn;Cc.core.Tween;function lh(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function _m(r,e,t){return e&&lh(r.prototype,e),t&&lh(r,t),r}/*!
 * Observer 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vt,ql,Tn,zi,Bi,ds,jd,lr,qs,Kd,Ei,Yn,Zd,Jd=function(){return Vt||typeof window<"u"&&(Vt=window.gsap)&&Vt.registerPlugin&&Vt},Qd=1,ss=[],Je=[],ai=[],$s=Date.now,$l=function(e,t){return t},gm=function(){var e=qs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Je),i.push.apply(i,ai),Je=n,ai=i,$l=function(a,o){return t[a](o)}},Xi=function(e,t){return~ai.indexOf(e)&&ai[ai.indexOf(e)+1][t]},js=function(e){return!!~Kd.indexOf(e)},on=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Jt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ma="scrollLeft",Sa="scrollTop",jl=function(){return Ei&&Ei.isPressed||Je.cache++},xo=function(e,t){var n=function i(s){if(s||s===0){Qd&&(Tn.history.scrollRestoration="manual");var a=Ei&&Ei.isPressed;s=i.v=Math.round(s)||(Ei&&Ei.iOS?1:0),e(s),i.cacheID=Je.cache,a&&$l("ss",s)}else(t||Je.cache!==i.cacheID||$l("ref"))&&(i.cacheID=Je.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},sn={s:Ma,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:xo(function(r){return arguments.length?Tn.scrollTo(r,Lt.sc()):Tn.pageXOffset||zi[Ma]||Bi[Ma]||ds[Ma]||0})},Lt={s:Sa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:sn,sc:xo(function(r){return arguments.length?Tn.scrollTo(sn.sc(),r):Tn.pageYOffset||zi[Sa]||Bi[Sa]||ds[Sa]||0})},ln=function(e){return Vt.utils.toArray(e)[0]||(typeof e=="string"&&Vt.config().nullTargetWarn!==!1?void 0:null)},Ki=function(e,t){var n=t.s,i=t.sc;js(e)&&(e=zi.scrollingElement||Bi);var s=Je.indexOf(e),a=i===Lt.sc?1:2;!~s&&(s=Je.push(e)-1),Je[s+a]||e.addEventListener("scroll",jl);var o=Je[s+a],l=o||(Je[s+a]=xo(Xi(e,n),!0)||(js(e)?i:xo(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Vt.getProperty(e,"scrollBehavior")==="smooth"),l},Kl=function(e,t,n){var i=e,s=e,a=$s(),o=a,l=t||50,c=Math.max(500,l*3),h=function(g,_){var m=$s();_||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},u=function(g){var _=o,m=s,f=$s();return(g||g===0)&&g!==i&&h(g),a===o||f-o>c?0:(i+(n?m:-m))/((n?f:a)-_)*1e3};return{update:h,reset:d,getVelocity:u}},Ls=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ch=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},ef=function(){qs=Vt.core.globals().ScrollTrigger,qs&&qs.core&&gm()},tf=function(e){return Vt=e||Jd(),Vt&&typeof document<"u"&&document.body&&(Tn=window,zi=document,Bi=zi.documentElement,ds=zi.body,Kd=[Tn,zi,Bi,ds],Vt.utils.clamp,Zd=Vt.core.context||function(){},lr="onpointerenter"in ds?"pointer":"mouse",jd=Rt.isTouch=Tn.matchMedia&&Tn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Tn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Yn=Rt.eventTypes=("ontouchstart"in Bi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Bi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Qd=0},500),ef(),ql=1),ql};sn.op=Lt;Je.cache=0;var Rt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){ql||tf(Vt),qs||ef();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,f=n.onDragEnd,y=n.onDrag,v=n.onPress,M=n.onRelease,S=n.onRight,w=n.onLeft,A=n.onUp,L=n.onDown,x=n.onChangeX,b=n.onChangeY,k=n.onChange,X=n.onToggleX,I=n.onToggleY,F=n.onHover,z=n.onHoverEnd,j=n.onMove,H=n.ignoreCheck,V=n.isNormalizer,ee=n.onGestureStart,R=n.onGestureEnd,B=n.onWheel,Z=n.onEnable,he=n.onDisable,ae=n.onClick,le=n.scrollSpeed,pe=n.capture,Ce=n.allowClicks,ye=n.lockAxis,je=n.onLockAxis;this.target=o=ln(o)||Bi,this.vars=n,p&&(p=Vt.utils.toArray(p)),i=i||1e-9,s=s||0,g=g||1,le=le||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Tn.getComputedStyle(ds).lineHeight)||22);var at,Ie,U,et,Ae,Re,Ee,Y=this,ze=0,be=0,We=Ki(o,sn),ot=Ki(o,Lt),ft=We(),C=ot(),E=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Yn[0]==="pointerdown",J=js(o),te=o.ownerDocument||zi,re=[0,0,0],P=[0,0,0],ne=0,ie=function(){return ne=$s()},q=function(me,se){return(Y.event=me)&&p&&~p.indexOf(me.target)||se&&E&&me.pointerType!=="touch"||H&&H(me,se)},Me=function(){Y._vx.reset(),Y._vy.reset(),Ie.pause(),d&&d(Y)},we=function(){var me=Y.deltaX=ch(re),se=Y.deltaY=ch(P),Se=Math.abs(me)>=i,Ue=Math.abs(se)>=i;k&&(Se||Ue)&&k(Y,me,se,re,P),Se&&(S&&Y.deltaX>0&&S(Y),w&&Y.deltaX<0&&w(Y),x&&x(Y),X&&Y.deltaX<0!=ze<0&&X(Y),ze=Y.deltaX,re[0]=re[1]=re[2]=0),Ue&&(L&&Y.deltaY>0&&L(Y),A&&Y.deltaY<0&&A(Y),b&&b(Y),I&&Y.deltaY<0!=be<0&&I(Y),be=Y.deltaY,P[0]=P[1]=P[2]=0),(et||U)&&(j&&j(Y),U&&(y(Y),U=!1),et=!1),Re&&!(Re=!1)&&je&&je(Y),Ae&&(B(Y),Ae=!1),at=0},Te=function(me,se,Se){re[Se]+=me,P[Se]+=se,Y._vx.update(me),Y._vy.update(se),c?at||(at=requestAnimationFrame(we)):we()},xe=function(me,se){ye&&!Ee&&(Y.axis=Ee=Math.abs(me)>Math.abs(se)?"x":"y",Re=!0),Ee!=="y"&&(re[2]+=me,Y._vx.update(me,!0)),Ee!=="x"&&(P[2]+=se,Y._vy.update(se,!0)),c?at||(at=requestAnimationFrame(we)):we()},ve=function(me){if(!q(me,1)){me=Ls(me,h);var se=me.clientX,Se=me.clientY,Ue=se-Y.x,Ge=Se-Y.y,bt=Y.isDragging;Y.x=se,Y.y=Se,(bt||Math.abs(Y.startX-se)>=s||Math.abs(Y.startY-Se)>=s)&&(y&&(U=!0),bt||(Y.isDragging=!0),xe(Ue,Ge),bt||m&&m(Y))}},de=Y.onPress=function(ke){q(ke,1)||(Y.axis=Ee=null,Ie.pause(),Y.isPressed=!0,ke=Ls(ke),ze=be=0,Y.startX=Y.x=ke.clientX,Y.startY=Y.y=ke.clientY,Y._vx.reset(),Y._vy.reset(),on(V?o:te,Yn[1],ve,h,!0),Y.deltaX=Y.deltaY=0,v&&v(Y))},Be=function(me){if(!q(me,1)){Jt(V?o:te,Yn[1],ve,!0);var se=!isNaN(Y.y-Y.startY),Se=Y.isDragging&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),Ue=Ls(me);!Se&&se&&(Y._vx.reset(),Y._vy.reset(),h&&Ce&&Vt.delayedCall(.08,function(){if($s()-ne>300&&!me.defaultPrevented){if(me.target.click)me.target.click();else if(te.createEvent){var Ge=te.createEvent("MouseEvents");Ge.initMouseEvent("click",!0,!0,Tn,1,Ue.screenX,Ue.screenY,Ue.clientX,Ue.clientY,!1,!1,!1,!1,0,null),me.target.dispatchEvent(Ge)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,d&&!V&&Ie.restart(!0),f&&Se&&f(Y),M&&M(Y,Se)}},D=function(me){return me.touches&&me.touches.length>1&&(Y.isGesturing=!0)&&ee(me,Y.isDragging)},ce=function(){return(Y.isGesturing=!1)||R(Y)},$=function(me){if(!q(me)){var se=We(),Se=ot();Te((se-ft)*le,(Se-C)*le,1),ft=se,C=Se,d&&Ie.restart(!0)}},oe=function(me){if(!q(me)){me=Ls(me,h),B&&(Ae=!0);var se=(me.deltaMode===1?l:me.deltaMode===2?Tn.innerHeight:1)*g;Te(me.deltaX*se,me.deltaY*se,0),d&&!V&&Ie.restart(!0)}},fe=function(me){if(!q(me)){var se=me.clientX,Se=me.clientY,Ue=se-Y.x,Ge=Se-Y.y;Y.x=se,Y.y=Se,et=!0,(Ue||Ge)&&xe(Ue,Ge)}},$e=function(me){Y.event=me,F(Y)},st=function(me){Y.event=me,z(Y)},pt=function(me){return q(me)||Ls(me,h)&&ae(Y)};Ie=Y._dc=Vt.delayedCall(u||.25,Me).pause(),Y.deltaX=Y.deltaY=0,Y._vx=Kl(0,50,!0),Y._vy=Kl(0,50,!0),Y.scrollX=We,Y.scrollY=ot,Y.isDragging=Y.isGesturing=Y.isPressed=!1,Zd(this),Y.enable=function(ke){return Y.isEnabled||(on(J?te:o,"scroll",jl),a.indexOf("scroll")>=0&&on(J?te:o,"scroll",$,h,pe),a.indexOf("wheel")>=0&&on(o,"wheel",oe,h,pe),(a.indexOf("touch")>=0&&jd||a.indexOf("pointer")>=0)&&(on(o,Yn[0],de,h,pe),on(te,Yn[2],Be),on(te,Yn[3],Be),Ce&&on(o,"click",ie,!1,!0),ae&&on(o,"click",pt),ee&&on(te,"gesturestart",D),R&&on(te,"gestureend",ce),F&&on(o,lr+"enter",$e),z&&on(o,lr+"leave",st),j&&on(o,lr+"move",fe)),Y.isEnabled=!0,ke&&ke.type&&de(ke),Z&&Z(Y)),Y},Y.disable=function(){Y.isEnabled&&(ss.filter(function(ke){return ke!==Y&&js(ke.target)}).length||Jt(J?te:o,"scroll",jl),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),Jt(V?o:te,Yn[1],ve,!0)),Jt(J?te:o,"scroll",$,pe),Jt(o,"wheel",oe,pe),Jt(o,Yn[0],de,pe),Jt(te,Yn[2],Be),Jt(te,Yn[3],Be),Jt(o,"click",ie,!0),Jt(o,"click",pt),Jt(te,"gesturestart",D),Jt(te,"gestureend",ce),Jt(o,lr+"enter",$e),Jt(o,lr+"leave",st),Jt(o,lr+"move",fe),Y.isEnabled=Y.isPressed=Y.isDragging=!1,he&&he(Y))},Y.kill=Y.revert=function(){Y.disable();var ke=ss.indexOf(Y);ke>=0&&ss.splice(ke,1),Ei===Y&&(Ei=0)},ss.push(Y),V&&js(o)&&(Ei=Y),Y.enable(_)},_m(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Rt.version="3.11.4";Rt.create=function(r){return new Rt(r)};Rt.register=tf;Rt.getAll=function(){return ss.slice()};Rt.getById=function(r){return ss.filter(function(e){return e.vars.id===r})[0]};Jd()&&Vt.registerPlugin(Rt);/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var De,es,tt,mt,jn,xt,nf,Mo,So,as,no,ya,Yt,Co,Zl,en,hh,uh,ts,rf,Yo,sf,Sn,af,of,lf,Ii,Jl,Rc,qo,Ea=1,tn=Date.now,$o=tn(),Bn=0,ba=0,dh=function(){return Co=1},fh=function(){return Co=0},ti=function(e){return e},Bs=function(e){return Math.round(e*1e5)/1e5||0},cf=function(){return typeof window<"u"},hf=function(){return De||cf()&&(De=window.gsap)&&De.registerPlugin&&De},Tr=function(e){return!!~nf.indexOf(e)},uf=function(e){return Xi(e,"getBoundingClientRect")||(Tr(e)?function(){return lo.width=tt.innerWidth,lo.height=tt.innerHeight,lo}:function(){return Si(e)})},vm=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Xi(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?tt["inner"+s]:e["client"+s])||0}},xm=function(e,t){return!t||~ai.indexOf(e)?uf(e):function(){return lo}},ki=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return(n="scroll"+i)&&(a=Xi(e,n))?a()-uf(e)()[s]:Tr(e)?(jn[n]||xt[n])-(tt["inner"+i]||jn["client"+i]||xt["client"+i]):e[n]-e["offset"+i]},Ta=function(e,t){for(var n=0;n<ts.length;n+=3)(!t||~t.indexOf(ts[n+1]))&&e(ts[n],ts[n+1],ts[n+2])},qn=function(e){return typeof e=="string"},an=function(e){return typeof e=="function"},ks=function(e){return typeof e=="number"},io=function(e){return typeof e=="object"},Ds=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},jo=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ir=Math.abs,df="left",ff="top",Pc="right",Lc="bottom",_r="width",gr="height",Ks="Right",Zs="Left",Js="Top",Qs="Bottom",yt="padding",Dn="margin",Es="Width",Dc="Height",kt="px",Zn=function(e){return tt.getComputedStyle(e)},Mm=function(e){var t=Zn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},ph=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Si=function(e,t){var n=t&&Zn(e)[Zl]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ql=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},pf=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Sm=function(e){return function(t){return De.utils.snap(pf(e),t)}},Uc=function(e){var t=De.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},ym=function(e){return function(t,n){return Uc(pf(e))(t,n.direction)}},Aa=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Gt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Ft=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},wa=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},mh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ca={toggleActions:"play",anticipatePin:0},yo={top:0,left:0,center:.5,bottom:1,right:1},ro=function(e,t){if(qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in yo?yo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ra=function(e,t,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,p=s.fontWeight,g=mt.createElement("div"),_=Tr(n)||Xi(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,f=_?xt:n,y=e.indexOf("start")!==-1,v=y?c:h,M="border-color:"+v+";font-size:"+d+";color:"+v+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(M+=(i===Lt?Pc:Lc)+":"+(a+parseFloat(u))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,f.children[0]?f.insertBefore(g,f.children[0]):f.appendChild(g),g._offset=g["offset"+i.op.d2],so(g,0,i,y),g},so=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Es]=1,s["border"+o+Es]=0,s[n.p]=t+"px",De.set(e,s)},Ke=[],ec={},ca,_h=function(){return tn()-Bn>34&&(ca||(ca=requestAnimationFrame(Zi)))},Or=function(){(!Sn||!Sn.isPressed||Sn.startX>xt.clientWidth)&&(Je.cache++,Sn?ca||(ca=requestAnimationFrame(Zi)):Zi(),Bn||wr("scrollStart"),Bn=tn())},Ko=function(){lf=tt.innerWidth,of=tt.innerHeight},Gs=function(){Je.cache++,!Yt&&!sf&&!mt.fullscreenElement&&!mt.webkitFullscreenElement&&(!af||lf!==tt.innerWidth||Math.abs(tt.innerHeight-of)>tt.innerHeight*.25)&&Mo.restart(!0)},Ar={},Em=[],mf=function r(){return Ft(Qe,"scrollEnd",r)||dr(!0)},wr=function(e){return Ar[e]&&Ar[e].map(function(t){return t()})||Em},yn=[],_f=function(e){for(var t=0;t<yn.length;t+=5)(!e||yn[t+4]&&yn[t+4].query===e)&&(yn[t].style.cssText=yn[t+1],yn[t].getBBox&&yn[t].setAttribute("transform",yn[t+2]||""),yn[t+3].uncache=1)},Ic=function(e,t){var n;for(en=0;en<Ke.length;en++)n=Ke[en],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&_f(t),t||wr("revert")},gf=function(e,t){Je.cache++,(t||!$n)&&Je.forEach(function(n){return an(n)&&n.cacheID++&&(n.rec=0)}),qn(e)&&(tt.history.scrollRestoration=Rc=e)},$n,vr=0,gh,bm=function(){if(gh!==vr){var e=gh=vr;requestAnimationFrame(function(){return e===vr&&dr(!0)})}},dr=function(e,t){if(Bn&&!e){Gt(Qe,"scrollEnd",mf);return}$n=Qe.isRefreshing=!0,Je.forEach(function(i){return an(i)&&i.cacheID++&&(i.rec=i())});var n=wr("refreshInit");rf&&Qe.sort(),t||Ic(),Je.forEach(function(i){an(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ke.slice(0).forEach(function(i){return i.refresh()}),Ke.forEach(function(i,s){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-o),i.revert(!1,1)}}),Ke.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,ki(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),Je.forEach(function(i){an(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),gf(Rc,1),Mo.pause(),vr++,Zi(2),Ke.forEach(function(i){return an(i.vars.onRefresh)&&i.vars.onRefresh(i)}),$n=Qe.isRefreshing=!1,wr("refresh")},vh=0,ao=1,ea,Zi=function(e){if(!$n||e===2){Qe.isUpdating=!0,ea&&ea.update(0);var t=Ke.length,n=tn(),i=n-$o>=50,s=t&&Ke[0].scroll();if(ao=vh>s?-1:1,vh=s,i&&(Bn&&!Co&&n-Bn>200&&(Bn=0,wr("scrollEnd")),no=$o,$o=n),ao<0){for(en=t;en-- >0;)Ke[en]&&Ke[en].update(0,i);ao=1}else for(en=0;en<t;en++)Ke[en]&&Ke[en].update(0,i);Qe.isUpdating=!1}ca=0},tc=[df,ff,Lc,Pc,Dn+Qs,Dn+Ks,Dn+Js,Dn+Zs,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],oo=tc.concat([_r,gr,"boxSizing","max"+Es,"max"+Dc,"position",Dn,yt,yt+Js,yt+Ks,yt+Qs,yt+Zs]),Tm=function(e,t,n){fs(n);var i=e._gsap;if(i.spacerIsNative)fs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Zo=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=tc.length,a=t.style,o=e.style,l;s--;)l=tc[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Lc]=o[Pc]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[_r]=Ql(e,sn)+kt,a[gr]=Ql(e,Lt)+kt,a[yt]=o[Dn]=o[ff]=o[df]="0",fs(i),o[_r]=o["max"+Es]=n[_r],o[gr]=o["max"+Dc]=n[gr],o[yt]=n[yt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Am=/([A-Z])/g,fs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(Am,"-$1").toLowerCase())}},Pa=function(e){for(var t=oo.length,n=e.style,i=[],s=0;s<t;s++)i.push(oo[s],n[oo[s]]);return i.t=e,i},wm=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},lo={left:0,top:0},xh=function(e,t,n,i,s,a,o,l,c,h,d,u,p){an(e)&&(e=e(l)),qn(e)&&e.substr(0,3)==="max"&&(e=u+(e.charAt(4)==="="?ro("0"+e.substr(3),n):0));var g=p?p.time():0,_,m,f;if(p&&p.seek(0),ks(e))o&&so(o,n,i,!0);else{an(t)&&(t=t(l));var y=(e||"0").split(" "),v,M,S,w;f=ln(t)||xt,v=Si(f)||{},(!v||!v.left&&!v.top)&&Zn(f).display==="none"&&(w=f.style.display,f.style.display="block",v=Si(f),w?f.style.display=w:f.style.removeProperty("display")),M=ro(y[0],v[i.d]),S=ro(y[1]||"0",n),e=v[i.p]-c[i.p]-h+M+s-S,o&&so(o,S,i,n-S<20||o._isStart&&S>20),n-=n-S}if(a){var A=e+n,L=a._isStart;_="scroll"+i.d2,so(a,A,i,L&&A>20||!L&&(d?Math.max(xt[_],jn[_]):a.parentNode[_])<=A+1),d&&(c=Si(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+kt))}return p&&f&&(_=Si(f),p.seek(u),m=Si(f),p._caScrollDist=_[i.p]-m[i.p],e=e/p._caScrollDist*u),p&&p.seek(g),p?e:Math.round(e)},Cm=/(webkit|moz|length|cssText|inset)/i,Mh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===xt){e._stOrig=s.cssText,o=Zn(e);for(a in o)!+a&&!Cm.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},Sh=function(e,t){var n=Ki(e,t),i="_scroll"+t.p2,s,a,o=function l(c,h,d,u,p){var g=l.tween,_=h.onComplete,m={};return d=d||n(),p=u&&p||0,u=u||c-d,g&&g.kill(),s=Math.round(d),h[i]=c,h.modifiers=m,m[i]=function(f){return f=Math.round(n()),f!==s&&f!==a&&Math.abs(f-s)>3&&Math.abs(f-a)>3?(g.kill(),l.tween=0):f=d+u*g.ratio+p*g.ratio*g.ratio,a=s,s=Math.round(f)},h.onUpdate=function(){Je.cache++,Zi()},h.onComplete=function(){l.tween=0,_&&_.call(g)},g=l.tween=De.to(e,h),g};return e[i]=n,n.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},Gt(e,"wheel",n.wheelHandler),o},Qe=function(){function r(t,n){es||r.register(De),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ba){this.update=this.refresh=this.kill=ti;return}n=ph(qn(n)||ks(n)||n.nodeType?{trigger:n}:n,Ca);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,p=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,f=s.onScrubComplete,y=s.onSnapComplete,v=s.once,M=s.snap,S=s.pinReparent,w=s.pinSpacer,A=s.containerAnimation,L=s.fastScrollEnd,x=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?sn:Lt,k=!d&&d!==0,X=ln(n.scroller||tt),I=De.core.getCache(X),F=Tr(X),z=("pinType"in n?n.pinType:Xi(X,"pinType")||F&&"fixed")==="fixed",j=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],H=k&&n.toggleActions.split(" "),V="markers"in n?n.markers:Ca.markers,ee=F?0:parseFloat(Zn(X)["border"+b.p2+Es])||0,R=this,B=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Z=vm(X,F,b),he=xm(X,F),ae=0,le=0,pe=Ki(X,b),Ce,ye,je,at,Ie,U,et,Ae,Re,Ee,Y,ze,be,We,ot,ft,C,E,J,te,re,P,ne,ie,q,Me,we,Te,xe,ve,de,Be,D,ce,$,oe,fe,$e,st;if(Jl(R),R._dir=b,m*=45,R.scroller=X,R.scroll=A?A.time.bind(A):pe,at=pe(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(rf=1,n.refreshPriority===-9999&&(ea=R)),I.tweenScroll=I.tweenScroll||{top:Sh(X,Lt),left:Sh(X,sn)},R.tweenTo=Ce=I.tweenScroll[b.p],R.scrubDuration=function(se){Be=ks(se)&&se,Be?de?de.duration(se):de=De.to(i,{ease:"expo",totalProgress:"+=0.001",duration:Be,paused:!0,onComplete:function(){return f&&f(R)}}):(de&&de.progress(1).kill(),de=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),xe=0,l||(l=i.vars.id)),Ke.push(R),M&&((!io(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in xt.style&&De.set(F?[xt,jn]:X,{scrollBehavior:"auto"}),Je.forEach(function(se){return an(se)&&se.target===(F?mt.scrollingElement||jn:X)&&(se.smooth=!1)}),je=an(M.snapTo)?M.snapTo:M.snapTo==="labels"?Sm(i):M.snapTo==="labelsDirectional"?ym(i):M.directional!==!1?function(se,Se){return Uc(M.snapTo)(se,tn()-le<500?0:Se.direction)}:De.utils.snap(M.snapTo),D=M.duration||{min:.1,max:2},D=io(D)?as(D.min,D.max):as(D,D),ce=De.delayedCall(M.delay||Be/2||.1,function(){var se=pe(),Se=tn()-le<500,Ue=Ce.tween;if((Se||Math.abs(R.getVelocity())<10)&&!Ue&&!Co&&ae!==se){var Ge=(se-U)/be,bt=i&&!k?i.totalProgress():Ge,He=Se?0:(bt-ve)/(tn()-no)*1e3||0,_t=De.utils.clamp(-Ge,1-Ge,Ir(He/2)*He/.185),ht=Ge+(M.inertia===!1?0:_t),mn=as(0,1,je(ht,R)),lt=Math.round(U+mn*be),Tt=M,_n=Tt.onStart,T=Tt.onInterrupt,O=Tt.onComplete;if(se<=et&&se>=U&&lt!==se){if(Ue&&!Ue._initted&&Ue.data<=Ir(lt-se))return;M.inertia===!1&&(_t=mn-Ge),Ce(lt,{duration:D(Ir(Math.max(Ir(ht-bt),Ir(mn-bt))*.185/He/.05||0)),ease:M.ease||"power3",data:Ir(lt-se),onInterrupt:function(){return ce.restart(!0)&&T&&T(R)},onComplete:function(){R.update(),ae=pe(),xe=ve=i&&!k?i.totalProgress():R.progress,y&&y(R),O&&O(R)}},se,_t*be,lt-se-_t*be),_n&&_n(R,Ce.tween)}}else R.isActive&&ae!==se&&ce.restart(!0)}).pause()),l&&(ec[l]=R),u=R.trigger=ln(u||p),st=u&&u._gsap&&u._gsap.stRevert,st&&(st=st(R)),p=p===!0?u:ln(p),qn(o)&&(o={targets:u,className:o}),p&&(g===!1||g===Dn||(g=!g&&p.parentNode&&p.parentNode.style&&Zn(p.parentNode).display==="flex"?!1:yt),R.pin=p,ye=De.core.getCache(p),ye.spacer?We=ye.pinState:(w&&(w=ln(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),ye.spacerIsNative=!!w,w&&(ye.spacerState=Pa(w))),ye.spacer=C=w||mt.createElement("div"),C.classList.add("pin-spacer"),l&&C.classList.add("pin-spacer-"+l),ye.pinState=We=Pa(p)),n.force3D!==!1&&De.set(p,{force3D:!0}),R.spacer=C=ye.spacer,Te=Zn(p),ne=Te[g+b.os2],J=De.getProperty(p),te=De.quickSetter(p,b.a,kt),Zo(p,C,Te),ft=Pa(p)),V){ze=io(V)?ph(V,mh):mh,Ee=Ra("scroller-start",l,X,b,ze,0),Y=Ra("scroller-end",l,X,b,ze,0,Ee),E=Ee["offset"+b.op.d2];var pt=ln(Xi(X,"content")||X);Ae=this.markerStart=Ra("start",l,pt,b,ze,E,0,A),Re=this.markerEnd=Ra("end",l,pt,b,ze,E,0,A),A&&($e=De.quickSetter([Ae,Re],b.a,kt)),!z&&!(ai.length&&Xi(X,"fixedMarkers")===!0)&&(Mm(F?xt:X),De.set([Ee,Y],{force3D:!0}),q=De.quickSetter(Ee,b.a,kt),we=De.quickSetter(Y,b.a,kt))}if(A){var ke=A.vars.onUpdate,me=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){R.update(0,0,1),ke&&ke.apply(me||[])})}R.previous=function(){return Ke[Ke.indexOf(R)-1]},R.next=function(){return Ke[Ke.indexOf(R)+1]},R.revert=function(se,Se){if(!Se)return R.kill(!0);var Ue=se!==!1||!R.enabled,Ge=Yt;Ue!==R.isReverted&&(Ue&&(oe=Math.max(pe(),R.scroll.rec||0),$=R.progress,fe=i&&i.progress()),Ae&&[Ae,Re,Ee,Y].forEach(function(bt){return bt.style.display=Ue?"none":"block"}),Ue&&(Yt=1,R.update(Ue)),p&&(!S||!R.isActive)&&(Ue?Tm(p,C,We):Zo(p,C,Zn(p),ie)),Ue||R.update(Ue),Yt=Ge,R.isReverted=Ue)},R.refresh=function(se,Se){if(!((Yt||!R.enabled)&&!Se)){if(p&&se&&Bn){Gt(r,"scrollEnd",mf);return}!$n&&B&&B(R),Yt=1,le=tn(),Ce.tween&&(Ce.tween.kill(),Ce.tween=0),de&&de.pause(),_&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;for(var Ue=Z(),Ge=he(),bt=A?A.duration():ki(X,b),He=0,_t=0,ht=n.end,mn=n.endTrigger||u,lt=n.start||(n.start===0||!u?0:p?"0 0":"0 100%"),Tt=R.pinnedContainer=n.pinnedContainer&&ln(n.pinnedContainer),_n=u&&Math.max(0,Ke.indexOf(R))||0,T=_n,O,K,N,Q,ue,ge,Pe,Ne,Xe,Fe,Oe;T--;)ge=Ke[T],ge.end||ge.refresh(0,1)||(Yt=1),Pe=ge.pin,Pe&&(Pe===u||Pe===p)&&!ge.isReverted&&(Fe||(Fe=[]),Fe.unshift(ge),ge.revert(!0,!0)),ge!==Ke[T]&&(_n--,T--);for(an(lt)&&(lt=lt(R)),U=xh(lt,u,Ue,b,pe(),Ae,Ee,R,Ge,ee,z,bt,A)||(p?-.001:0),an(ht)&&(ht=ht(R)),qn(ht)&&!ht.indexOf("+=")&&(~ht.indexOf(" ")?ht=(qn(lt)?lt.split(" ")[0]:"")+ht:(He=ro(ht.substr(2),Ue),ht=qn(lt)?lt:U+He,mn=u)),et=Math.max(U,xh(ht||(mn?"100% 0":bt),mn,Ue,b,pe()+He,Re,Y,R,Ge,ee,z,bt,A))||-.001,be=et-U||(U-=.01)&&.001,He=0,T=_n;T--;)ge=Ke[T],Pe=ge.pin,Pe&&ge.start-ge._pinPush<=U&&!A&&ge.end>0&&(O=ge.end-ge.start,(Pe===u&&ge.start-ge._pinPush<U||Pe===Tt)&&!ks(lt)&&(He+=O*(1-ge.progress)),Pe===p&&(_t+=O));if(U+=He,et+=He,R._pinPush=_t,Ae&&He&&(O={},O[b.a]="+="+He,Tt&&(O[b.p]="-="+pe()),De.set([Ae,Re],O)),p)O=Zn(p),Q=b===Lt,N=pe(),re=parseFloat(J(b.a))+_t,!bt&&et>1&&(Oe=(F?mt.scrollingElement||jn:X).style,Oe={style:Oe,value:Oe["overflow"+b.a.toUpperCase()]},Oe["overflow"+b.a.toUpperCase()]="scroll"),Zo(p,C,O),ft=Pa(p),K=Si(p,!0),Ne=z&&Ki(X,Q?sn:Lt)(),g&&(ie=[g+b.os2,be+_t+kt],ie.t=C,T=g===yt?Ql(p,b)+be+_t:0,T&&ie.push(b.d,T+kt),fs(ie),Tt&&Ke.forEach(function(ct){ct.pin===Tt&&ct.vars.pinSpacing!==!1&&(ct._subPinOffset=!0)}),z&&pe(oe)),z&&(ue={top:K.top+(Q?N-U:Ne)+kt,left:K.left+(Q?Ne:N-U)+kt,boxSizing:"border-box",position:"fixed"},ue[_r]=ue["max"+Es]=Math.ceil(K.width)+kt,ue[gr]=ue["max"+Dc]=Math.ceil(K.height)+kt,ue[Dn]=ue[Dn+Js]=ue[Dn+Ks]=ue[Dn+Qs]=ue[Dn+Zs]="0",ue[yt]=O[yt],ue[yt+Js]=O[yt+Js],ue[yt+Ks]=O[yt+Ks],ue[yt+Qs]=O[yt+Qs],ue[yt+Zs]=O[yt+Zs],ot=wm(We,ue,S),$n&&pe(0)),i?(Xe=i._initted,Yo(1),i.render(i.duration(),!0,!0),P=J(b.a)-re+be+_t,Me=Math.abs(be-P)>1,z&&Me&&ot.splice(ot.length-2,2),i.render(0,!0,!0),Xe||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Yo(0)):P=be,Oe&&(Oe.value?Oe.style["overflow"+b.a.toUpperCase()]=Oe.value:Oe.style.removeProperty("overflow-"+b.a));else if(u&&pe()&&!A)for(K=u.parentNode;K&&K!==xt;)K._pinOffset&&(U-=K._pinOffset,et-=K._pinOffset),K=K.parentNode;Fe&&Fe.forEach(function(ct){return ct.revert(!1,!0)}),R.start=U,R.end=et,at=Ie=$n?oe:pe(),!A&&!$n&&(at<oe&&pe(oe),R.scroll.rec=0),R.revert(!1,!0),ce&&(ae=-1,R.isActive&&pe(U+be*$),ce.restart(!0)),Yt=0,i&&k&&(i._initted||fe)&&i.progress()!==fe&&i.progress(fe,!0).render(i.time(),!0,!0),($!==R.progress||A)&&(i&&!k&&i.totalProgress($,!0),R.progress=(at-U)/be===$?0:$),p&&g&&(C._pinOffset=Math.round(R.progress*P)),h&&!$n&&h(R)}},R.getVelocity=function(){return(pe()-Ie)/(tn()-no)*1e3||0},R.endAnimation=function(){Ds(R.callbackAnimation),i&&(de?de.progress(1):i.paused()?k||Ds(i,R.direction<0,1):Ds(i,i.reversed()))},R.labelToScroll=function(se){return i&&i.labels&&(U||R.refresh()||U)+i.labels[se]/i.duration()*be||0},R.getTrailing=function(se){var Se=Ke.indexOf(R),Ue=R.direction>0?Ke.slice(0,Se).reverse():Ke.slice(Se+1);return(qn(se)?Ue.filter(function(Ge){return Ge.vars.preventOverlaps===se}):Ue).filter(function(Ge){return R.direction>0?Ge.end<=U:Ge.start>=et})},R.update=function(se,Se,Ue){if(!(A&&!Ue&&!se)){var Ge=$n?oe:R.scroll(),bt=se?0:(Ge-U)/be,He=bt<0?0:bt>1?1:bt||0,_t=R.progress,ht,mn,lt,Tt,_n,T,O,K;if(Se&&(Ie=at,at=A?pe():Ge,M&&(ve=xe,xe=i&&!k?i.totalProgress():He)),m&&!He&&p&&!Yt&&!Ea&&Bn&&U<Ge+(Ge-Ie)/(tn()-no)*m&&(He=1e-4),He!==_t&&R.enabled){if(ht=R.isActive=!!He&&He<1,mn=!!_t&&_t<1,T=ht!==mn,_n=T||!!He!=!!_t,R.direction=He>_t?1:-1,R.progress=He,_n&&!Yt&&(lt=He&&!_t?0:He===1?1:_t===1?2:3,k&&(Tt=!T&&H[lt+1]!=="none"&&H[lt+1]||H[lt],K=i&&(Tt==="complete"||Tt==="reset"||Tt in i))),x&&(T||K)&&(K||d||!i)&&(an(x)?x(R):R.getTrailing(x).forEach(function(ge){return ge.endAnimation()})),k||(de&&!Yt&&!Ea?(de._dp._time-de._start!==de._time&&de.render(de._dp._time-de._start),de.resetTo?de.resetTo("totalProgress",He,i._tTime/i._tDur):(de.vars.totalProgress=He,de.invalidate().restart())):i&&i.totalProgress(He,!!Yt)),p){if(se&&g&&(C.style[g+b.os2]=ne),!z)te(Bs(re+P*He));else if(_n){if(O=!se&&He>_t&&et+1>Ge&&Ge+1>=ki(X,b),S)if(!se&&(ht||O)){var N=Si(p,!0),Q=Ge-U;Mh(p,xt,N.top+(b===Lt?Q:0)+kt,N.left+(b===Lt?0:Q)+kt)}else Mh(p,C);fs(ht||O?ot:ft),Me&&He<1&&ht||te(re+(He===1&&!O?P:0))}}M&&!Ce.tween&&!Yt&&!Ea&&ce.restart(!0),o&&(T||v&&He&&(He<1||!qo))&&So(o.targets).forEach(function(ge){return ge.classList[ht||v?"add":"remove"](o.className)}),a&&!k&&!se&&a(R),_n&&!Yt?(k&&(K&&(Tt==="complete"?i.pause().totalProgress(1):Tt==="reset"?i.restart(!0).pause():Tt==="restart"?i.restart(!0):i[Tt]()),a&&a(R)),(T||!qo)&&(c&&T&&jo(R,c),j[lt]&&jo(R,j[lt]),v&&(He===1?R.kill(!1,1):j[lt]=0),T||(lt=He===1?1:3,j[lt]&&jo(R,j[lt]))),L&&!ht&&Math.abs(R.getVelocity())>(ks(L)?L:2500)&&(Ds(R.callbackAnimation),de?de.progress(1):Ds(i,Tt==="reverse"?1:!He,1))):k&&a&&!Yt&&a(R)}if(we){var ue=A?Ge/A.duration()*(A._caScrollDist||0):Ge;q(ue+(Ee._isFlipped?1:0)),we(ue)}$e&&$e(-Ge/A.duration()*(A._caScrollDist||0))}},R.enable=function(se,Se){R.enabled||(R.enabled=!0,Gt(X,"resize",Gs),Gt(F?mt:X,"scroll",Or),B&&Gt(r,"refreshInit",B),se!==!1&&(R.progress=$=0,at=Ie=ae=pe()),Se!==!1&&R.refresh())},R.getTween=function(se){return se&&Ce?Ce.tween:de},R.setPositions=function(se,Se){p&&(re+=se-U,P+=Se-se-be,g===yt&&R.adjustPinSpacing(Se-se-be)),R.start=U=se,R.end=et=Se,be=Se-se,R.update()},R.adjustPinSpacing=function(se){if(ie){var Se=ie.indexOf(b.d)+1;ie[Se]=parseFloat(ie[Se])+se+kt,ie[1]=parseFloat(ie[1])+se+kt,fs(ie)}},R.disable=function(se,Se){if(R.enabled&&(se!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Se||de&&de.pause(),oe=0,ye&&(ye.uncache=1),B&&Ft(r,"refreshInit",B),ce&&(ce.pause(),Ce.tween&&Ce.tween.kill()&&(Ce.tween=0)),!F)){for(var Ue=Ke.length;Ue--;)if(Ke[Ue].scroller===X&&Ke[Ue]!==R)return;Ft(X,"resize",Gs),Ft(X,"scroll",Or)}},R.kill=function(se,Se){R.disable(se,Se),de&&!Se&&de.kill(),l&&delete ec[l];var Ue=Ke.indexOf(R);Ue>=0&&Ke.splice(Ue,1),Ue===en&&ao>0&&en--,Ue=0,Ke.forEach(function(Ge){return Ge.scroller===R.scroller&&(Ue=1)}),Ue||$n||(R.scroll.rec=0),i&&(i.scrollTrigger=null,se&&i.revert({kill:!1}),Se||i.kill()),Ae&&[Ae,Re,Ee,Y].forEach(function(Ge){return Ge.parentNode&&Ge.parentNode.removeChild(Ge)}),ea===R&&(ea=0),p&&(ye&&(ye.uncache=1),Ue=0,Ke.forEach(function(Ge){return Ge.pin===p&&Ue++}),Ue||(ye.spacer=0)),n.onKill&&n.onKill(R)},R.enable(!1,!1),st&&st(R),!i||!i.add||be?R.refresh():De.delayedCall(.01,function(){return U||et||R.refresh()})&&(be=.01)&&(U=et=0),p&&bm()},r.register=function(n){return es||(De=n||hf(),cf()&&window.document&&r.enable(),es=ba),es},r.defaults=function(n){if(n)for(var i in n)Ca[i]=n[i];return Ca},r.disable=function(n,i){ba=0,Ke.forEach(function(a){return a[i?"kill":"disable"](n)}),Ft(tt,"wheel",Or),Ft(mt,"scroll",Or),clearInterval(ya),Ft(mt,"touchcancel",ti),Ft(xt,"touchstart",ti),Aa(Ft,mt,"pointerdown,touchstart,mousedown",dh),Aa(Ft,mt,"pointerup,touchend,mouseup",fh),Mo.kill(),Ta(Ft);for(var s=0;s<Je.length;s+=3)wa(Ft,Je[s],Je[s+1]),wa(Ft,Je[s],Je[s+2])},r.enable=function(){if(tt=window,mt=document,jn=mt.documentElement,xt=mt.body,De&&(So=De.utils.toArray,as=De.utils.clamp,Jl=De.core.context||ti,Yo=De.core.suppressOverwrites||ti,Rc=tt.history.scrollRestoration||"auto",De.core.globals("ScrollTrigger",r),xt)){ba=1,Rt.register(De),r.isTouch=Rt.isTouch,Ii=Rt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Gt(tt,"wheel",Or),nf=[tt,mt,jn,xt],De.matchMedia&&(r.matchMedia=function(l){var c=De.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},De.addEventListener("matchMediaInit",function(){return Ic()}),De.addEventListener("matchMediaRevert",function(){return _f()}),De.addEventListener("matchMedia",function(){dr(0,1),wr("matchMedia")}),De.matchMedia("(orientation: portrait)",function(){return Ko(),Ko})),Ko(),Gt(mt,"scroll",Or);var n=xt.style,i=n.borderTopStyle,s=De.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Si(xt),Lt.m=Math.round(a.top+Lt.sc())||0,sn.m=Math.round(a.left+sn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),ya=setInterval(_h,250),De.delayedCall(.5,function(){return Ea=0}),Gt(mt,"touchcancel",ti),Gt(xt,"touchstart",ti),Aa(Gt,mt,"pointerdown,touchstart,mousedown",dh),Aa(Gt,mt,"pointerup,touchend,mouseup",fh),Zl=De.utils.checkPrefix("transform"),oo.push(Zl),es=tn(),Mo=De.delayedCall(.2,dr).pause(),ts=[mt,"visibilitychange",function(){var l=tt.innerWidth,c=tt.innerHeight;mt.hidden?(hh=l,uh=c):(hh!==l||uh!==c)&&Gs()},mt,"DOMContentLoaded",dr,tt,"load",dr,tt,"resize",Gs],Ta(Gt),Ke.forEach(function(l){return l.enable(0,1)}),o=0;o<Je.length;o+=3)wa(Ft,Je[o],Je[o+1]),wa(Ft,Je[o],Je[o+2])}},r.config=function(n){"limitCallbacks"in n&&(qo=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ya)||(ya=i)&&setInterval(_h,i),"ignoreMobileResize"in n&&(af=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ta(Ft)||Ta(Gt,n.autoRefreshEvents||"none"),sf=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=ln(n),a=Je.indexOf(s),o=Tr(s);~a&&Je.splice(a,o?6:2),i&&(o?ai.unshift(tt,i,xt,i,jn,i):ai.unshift(s,i))},r.clearMatchMedia=function(n){Ke.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(qn(n)?ln(n):n).getBoundingClientRect(),o=a[s?_r:gr]*i||0;return s?a.right-o>0&&a.left+o<tt.innerWidth:a.bottom-o>0&&a.top+o<tt.innerHeight},r.positionInViewport=function(n,i,s){qn(n)&&(n=ln(n));var a=n.getBoundingClientRect(),o=a[s?_r:gr],l=i==null?o/2:i in yo?yo[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/tt.innerWidth:(a.top+l)/tt.innerHeight},r.killAll=function(n){if(Ke.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ar.killAll||[];Ar={},i.forEach(function(s){return s()})}},r}();Qe.version="3.11.4";Qe.saveStyles=function(r){return r?So(r).forEach(function(e){if(e&&e.style){var t=yn.indexOf(e);t>=0&&yn.splice(t,5),yn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),Jl())}}):yn};Qe.revert=function(r,e){return Ic(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?Gs():(es||Qe.register())&&dr(!0)};Qe.update=function(r){return++Je.cache&&Zi(r===!0?2:0)};Qe.clearScrollMemory=gf;Qe.maxScroll=function(r,e){return ki(r,e?sn:Lt)};Qe.getScrollFunc=function(r,e){return Ki(ln(r),e?sn:Lt)};Qe.getById=function(r){return ec[r]};Qe.getAll=function(){return Ke.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!Bn};Qe.snapDirectional=Uc;Qe.addEventListener=function(r,e){var t=Ar[r]||(Ar[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=Ar[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,h){var d=[],u=[],p=De.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(g){d.length||p.restart(!0),d.push(g.trigger),u.push(g),s<=d.length&&p.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&an(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return an(s)&&(s=s(),Gt(Qe,"refresh",function(){return s=e.batchMax()})),So(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Qe.create(c))}),t};var yh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Jo=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Rt.isTouch?" pinch-zoom":""):"none",e===jn&&r(xt,t)},La={auto:1,scroll:1},Rm=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||De.core.getCache(s),o=tn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(La[(l=Zn(s)).overflowY]||La[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Tr(s)&&(La[(l=Zn(s)).overflowY]||La[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},vf=function(e,t,n,i){return Rt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Rm,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Gt(mt,Rt.eventTypes[0],bh,!1,!0)},onDisable:function(){return Ft(mt,Rt.eventTypes[0],bh,!0)}})},Pm=/(input|label|select|textarea)/i,Eh,bh=function(e){var t=Pm.test(e.target.tagName);(t||Eh)&&(e._gsapAllow=!0,Eh=t)},Lm=function(e){io(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a,o,l=ln(e.target)||jn,c=De.core.globals().ScrollSmoother,h=c&&c.get(),d=Ii&&(e.content&&ln(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),u=Ki(l,Lt),p=Ki(l,sn),g=1,_=(Rt.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,m=0,f=an(i)?function(){return i(a)}:function(){return i||2.8},y,v,M=vf(l,e.type,!0,s),S=function(){return v=!1},w=ti,A=ti,L=function(){o=ki(l,Lt),A=as(Ii?1:0,o),n&&(w=as(0,ki(l,sn))),y=vr},x=function(){d._gsap.y=Bs(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},b=function(){if(v){requestAnimationFrame(S);var H=Bs(a.deltaY/2),V=A(u.v-H);if(d&&V!==u.v+u.offset){u.offset=V-u.v;var ee=Bs((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+ee+", 0, 1)",d._gsap.y=ee+"px",u.cacheID=Je.cache,Zi()}return!0}u.offset&&x(),v=!0},k,X,I,F,z=function(){L(),k.isActive()&&k.vars.scrollY>o&&(u()>o?k.progress(1)&&u(o):k.resetTo("scrollY",o))};return d&&De.set(d,{y:"+=0"}),e.ignoreCheck=function(j){return Ii&&j.type==="touchmove"&&b()||g>1.05&&j.type!=="touchstart"||a.isGesturing||j.touches&&j.touches.length>1},e.onPress=function(){var j=g;g=Bs((tt.visualViewport&&tt.visualViewport.scale||1)/_),k.pause(),j!==g&&Jo(l,g>1.01?!0:n?!1:"x"),X=p(),I=u(),L(),y=vr},e.onRelease=e.onGestureStart=function(j,H){if(u.offset&&x(),!H)F.restart(!0);else{Je.cache++;var V=f(),ee,R;n&&(ee=p(),R=ee+V*.05*-j.velocityX/.227,V*=yh(p,ee,R,ki(l,sn)),k.vars.scrollX=w(R)),ee=u(),R=ee+V*.05*-j.velocityY/.227,V*=yh(u,ee,R,ki(l,Lt)),k.vars.scrollY=A(R),k.invalidate().duration(V).play(.01),(Ii&&k.vars.scrollY>=o||ee>=o-1)&&De.to({},{onUpdate:z,duration:V})}},e.onWheel=function(){k._ts&&k.pause(),tn()-m>1e3&&(y=0,m=tn())},e.onChange=function(j,H,V,ee,R){if(vr!==y&&L(),H&&n&&p(w(ee[2]===H?X+(j.startX-j.x):p()+H-ee[1])),V){u.offset&&x();var B=R[2]===V,Z=B?I+j.startY-j.y:u()+V-R[1],he=A(Z);B&&Z!==he&&(I+=he-Z),u(he)}(V||H)&&Zi()},e.onEnable=function(){Jo(l,n?!1:"x"),Qe.addEventListener("refresh",z),Gt(tt,"resize",z),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=p.smooth=!1),M.enable()},e.onDisable=function(){Jo(l,!0),Ft(tt,"resize",z),Qe.removeEventListener("refresh",z),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new Rt(e),a.iOS=Ii,Ii&&!u()&&u(1),Ii&&De.ticker.add(ti),F=a._dc,k=De.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:F.vars.onComplete}),a};Qe.sort=function(r){return Ke.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new Rt(r)};Qe.normalizeScroll=function(r){if(typeof r>"u")return Sn;if(r===!0&&Sn)return Sn.enable();if(r===!1)return Sn&&Sn.kill();var e=r instanceof Rt?r:Lm(r);return Sn&&Sn.target===e.target&&Sn.kill(),Tr(e.target)&&(Sn=e),e};Qe.core={_getVelocityProp:Kl,_inputObserver:vf,_scrollers:Je,_proxies:ai,bridge:{ss:function(){Bn||wr("scrollStart"),Bn=tn()},ref:function(){return Yt}}};hf()&&De.registerPlugin(Qe);class Dm{lerp(e,t,n){return e*(1-n)+t*n}clamp(e,t,n){return t>e?t:n<e?n:e}hoop(e,t,n){const i=n-t+1;let s=(e-t)%i;return 0>s&&(s=i+s),s+t}delay(e){return new Promise(t=>{setTimeout(()=>{t()},e)})}getParameter(e){e=e.replace(/[\[\]]/g,"\\$&");let t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),n=t.exec(window.location.href);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}}class Um{constructor(e){this.body=e,this.bodyClassList=this.body.classList,this.ua=window.navigator.userAgent.toLowerCase(),this.data={browser:"",os:"",device:"",iphone:""},this.checkBrowser(),this.checkOs(),this.checkDevice(),this.checkiPhone()}checkBrowser(){this.ua.indexOf("edge")!==-1||this.ua.indexOf("edga")!==-1||this.ua.indexOf("edgios")!==-1?this.data.browser="edge":this.ua.indexOf("opera")!==-1||this.ua.indexOf("opr")!==-1?this.data.browser="opera":this.ua.indexOf("samsungbrowser")!==-1?this.data.browser="samsung":this.ua.indexOf("ucbrowser")!==-1?this.data.browser="uc":this.ua.indexOf("chrome")!==-1||this.ua.indexOf("crios")!==-1?this.data.browser="chrome":this.ua.indexOf("firefox")!==-1||this.ua.indexOf("fxios")!==-1?this.data.browser="firefox":this.ua.indexOf("safari")!==-1?this.data.browser="safari":this.ua.indexOf("msie")!==-1||this.ua.indexOf("trident")!==-1?(this.data.browser="ie",alert("このブラウザは現在サポートされておりません。")):this.data.browser="",this.data.browser!=""&&this.bodyClassList.add(this.data.browser)}checkOs(){this.ua.indexOf("windows nt")!==-1?this.data.os="windows":this.ua.indexOf("android")!==-1?this.data.os="android":this.ua.indexOf("iphone")!==-1||this.ua.indexOf("ipad")!==-1?this.data.os="ios":this.ua.indexOf("mac os x")!==-1?this.data.os="macos":this.data.os="",this.data.os!=""&&this.bodyClassList.add(this.data.os)}checkDevice(){this.ua.indexOf("iphone")!==-1||this.ua.indexOf("android")!==-1&&this.ua.indexOf("Mobile")>0?this.data.device="mobile":this.ua.indexOf("ipad")!==-1||this.ua.indexOf("android")!==-1?this.data.device="tablet":this.ua.indexOf("ipad")>-1||this.ua.indexOf("macintosh")>-1&&"ontouchend"in document?this.data.device="tablet":this.data.device="pc",this.data.device!=""&&this.bodyClassList.add(this.data.device)}checkiPhone(){this.ua.indexOf("iphone")!==-1?this.data.iphone="iphone":this.data.iphone="",this.data.iphone!=""&&this.bodyClassList.add(this.data.iphone)}}function Th(r,e){const t=e*.01,n=r>e?r:e,i=r>e?e:r;document.documentElement.style.setProperty("--vh",t+"px"),document.documentElement.style.setProperty("--longer",n+"px"),document.documentElement.style.setProperty("--shorter",i+"px")}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oc="154",Nr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Im=0,Ah=1,Om=2,xf=1,Mf=2,vi=3,Ci=0,fn=1,ii=2,Yi=0,ps=1,wh=2,Ch=3,Rh=4,Nm=5,ns=100,Fm=101,zm=102,Ph=103,Lh=104,Bm=200,km=201,Gm=202,Hm=203,Sf=204,yf=205,Vm=206,Wm=207,Xm=208,Ym=209,qm=210,$m=0,jm=1,Km=2,nc=3,Zm=4,Jm=5,Qm=6,e_=7,Nc=0,t_=1,n_=2,Ti=0,i_=1,r_=2,s_=3,Ef=4,a_=5,bf=300,bs=301,Ts=302,ic=303,rc=304,Ro=306,sc=1e3,Jn=1001,ac=1002,nn=1003,Dh=1004,Qo=1005,Un=1006,o_=1007,ha=1008,qi=1009,l_=1010,c_=1011,Fc=1012,Tf=1013,Gi=1014,Hi=1015,ua=1016,Af=1017,wf=1018,xr=1020,h_=1021,Qn=1023,u_=1024,d_=1025,Mr=1026,As=1027,f_=1028,Cf=1029,p_=1030,Rf=1031,Pf=1033,el=33776,tl=33777,nl=33778,il=33779,Uh=35840,Ih=35841,Oh=35842,Nh=35843,m_=36196,Fh=37492,zh=37496,Bh=37808,kh=37809,Gh=37810,Hh=37811,Vh=37812,Wh=37813,Xh=37814,Yh=37815,qh=37816,$h=37817,jh=37818,Kh=37819,Zh=37820,Jh=37821,rl=36492,__=36283,Qh=36284,eu=36285,tu=36286,Lf=3e3,Sr=3001,g_=3200,Df=3201,Uf=0,v_=1,yr="",Ve="srgb",hi="srgb-linear",If="display-p3",sl=7680,x_=519,M_=512,S_=513,y_=514,E_=515,b_=516,T_=517,A_=518,w_=519,nu=35044,iu="300 es",oc=1035,bi=2e3,Eo=2001;class Lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],al=Math.PI/180,bo=180/Math.PI;function ma(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[r&255]+Wt[r>>8&255]+Wt[r>>16&255]+Wt[r>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function rn(r,e,t){return Math.max(e,Math.min(t,r))}function C_(r,e){return(r%e+e)%e}function ol(r,e,t){return(1-t)*r+t*e}function ru(r){return(r&r-1)===0&&r!==0}function lc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Da(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,s,a,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],y=i[1],v=i[4],M=i[7],S=i[2],w=i[5],A=i[8];return s[0]=a*_+o*y+l*S,s[3]=a*m+o*v+l*w,s[6]=a*f+o*M+l*A,s[1]=c*_+h*y+d*S,s[4]=c*m+h*v+d*w,s[7]=c*f+h*M+d*A,s[2]=u*_+p*y+g*S,s[5]=u*m+p*v+g*w,s[8]=u*f+p*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,g=t*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ll.makeScale(e,t)),this}rotate(e){return this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new Ze;function Of(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function da(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const su={};function ta(r){r in su||(su[r]=!0)}function ms(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function cl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const R_=new Ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),P_=new Ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function L_(r){return r.convertSRGBToLinear().applyMatrix3(P_)}function D_(r){return r.applyMatrix3(R_).convertLinearToSRGB()}const U_={[hi]:r=>r,[Ve]:r=>r.convertSRGBToLinear(),[If]:L_},I_={[hi]:r=>r,[Ve]:r=>r.convertLinearToSRGB(),[If]:D_},Hn={enabled:!0,get legacyMode(){return!this.enabled},set legacyMode(r){this.enabled=!r},get workingColorSpace(){return hi},set workingColorSpace(r){},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=U_[e],i=I_[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let zr;class Nf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zr===void 0&&(zr=da("canvas")),zr.width=e.width,zr.height=e.height;const n=zr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zr}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ms(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ms(t[n]/255)*255):t[n]=ms(t[n]);return{data:t,width:e.width,height:e.height}}else return e}}let O_=0;class Ff{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=ma(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(hl(i[a].image)):s.push(hl(i[a]))}else s=hl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function hl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Nf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:{}}let N_=0;class pn extends Lr{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,n=Jn,i=Jn,s=Un,a=ha,o=Qn,l=qi,c=pn.DEFAULT_ANISOTROPY,h=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=ma(),this.name="",this.source=new Ff(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Sr?Ve:yr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sc:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sc:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ve?Sr:Lf}set encoding(e){ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Sr?Ve:yr}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=bf;pn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,n=0,i=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(p+1)/2,S=(f+1)/2,w=(h+u)/4,A=(d+_)/4,L=(g+m)/4;return v>M&&v>S?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=A/n):M>S?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=w/i,s=L/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=A/s,i=L/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cr extends Lr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ta("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Sr?Ve:yr),this.texture=new pn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Un,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ff(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zf extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class F_ extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==p||h!==g){let m=1-o;const f=l*u+c*p+h*g+d*_,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const S=Math.sqrt(v),w=Math.atan2(S,f*y);m=Math.sin(m*w)/S,o=Math.sin(o*w)/S}const M=o*y;if(l=l*m+u*M,c=c*m+p*M,h=h*m+g*M,d=d*m+_*M,m===1-o){const S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(au.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,h=l*n+o*t-s*i,d=l*i+s*n-a*t,u=-s*t-a*n-o*i;return this.x=c*l+u*-s+h*-o-d*-a,this.y=h*l+u*-a+d*-s-c*-o,this.z=d*l+u*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ul.copy(this).projectOnVector(e),this.sub(ul)}reflect(e){return this.sub(ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ul=new W,au=new Rr;class _a{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)fi.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(fi)}else i.boundingBox===null&&i.computeBoundingBox(),Br.copy(i.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Ua.subVectors(this.max,Us),kr.subVectors(e.a,Us),Gr.subVectors(e.b,Us),Hr.subVectors(e.c,Us),Pi.subVectors(Gr,kr),Li.subVectors(Hr,Gr),ir.subVectors(kr,Hr);let t=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-ir.z,ir.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,ir.z,0,-ir.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-ir.y,ir.x,0];return!dl(t,kr,Gr,Hr,Ua)||(t=[1,0,0,0,1,0,0,0,1],!dl(t,kr,Gr,Hr,Ua))?!1:(Ia.crossVectors(Pi,Li),t=[Ia.x,Ia.y,Ia.z],dl(t,kr,Gr,Hr,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new W,new W,new W,new W,new W,new W,new W,new W],fi=new W,Br=new _a,kr=new W,Gr=new W,Hr=new W,Pi=new W,Li=new W,ir=new W,Us=new W,Ua=new W,Ia=new W,rr=new W;function dl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){rr.fromArray(r,s);const o=i.x*Math.abs(rr.x)+i.y*Math.abs(rr.y)+i.z*Math.abs(rr.z),l=e.dot(rr),c=t.dot(rr),h=n.dot(rr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const z_=new _a,Is=new W,fl=new W;class zc{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):z_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const t=Is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Is,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(fl)),this.expandByPoint(Is.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new W,pl=new W,Oa=new W,Di=new W,ml=new W,Na=new W,_l=new W;class Bf{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){pl.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(pl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Oa),o=Di.dot(this.direction),l=-Di.dot(Oa),c=Di.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(pl).addScaledVector(Oa,u),p}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const n=pi.dot(this.direction),i=pi.dot(pi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,i,s){ml.subVectors(t,e),Na.subVectors(n,e),_l.crossVectors(ml,Na);let a=this.direction.dot(_l),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Di.subVectors(this.origin,e);const l=o*this.direction.dot(Na.crossVectors(Di,Na));if(l<0)return null;const c=o*this.direction.dot(ml.cross(Di));if(c<0||l+c>a)return null;const h=-o*Di.dot(_l);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,n,i,s,a,o,l,c,h,d,u,p,g,_,m){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,d,u,p,g,_,m)}set(e,t,n,i,s,a,o,l,c,h,d,u,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,p=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B_,e,k_)}lookAt(e,t,n){const i=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ui.crossVectors(n,xn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ui.crossVectors(n,xn)),Ui.normalize(),Fa.crossVectors(xn,Ui),i[0]=Ui.x,i[4]=Fa.x,i[8]=xn.x,i[1]=Ui.y,i[5]=Fa.y,i[9]=xn.y,i[2]=Ui.z,i[6]=Fa.z,i[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],v=n[7],M=n[11],S=n[15],w=i[0],A=i[4],L=i[8],x=i[12],b=i[1],k=i[5],X=i[9],I=i[13],F=i[2],z=i[6],j=i[10],H=i[14],V=i[3],ee=i[7],R=i[11],B=i[15];return s[0]=a*w+o*b+l*F+c*V,s[4]=a*A+o*k+l*z+c*ee,s[8]=a*L+o*X+l*j+c*R,s[12]=a*x+o*I+l*H+c*B,s[1]=h*w+d*b+u*F+p*V,s[5]=h*A+d*k+u*z+p*ee,s[9]=h*L+d*X+u*j+p*R,s[13]=h*x+d*I+u*H+p*B,s[2]=g*w+_*b+m*F+f*V,s[6]=g*A+_*k+m*z+f*ee,s[10]=g*L+_*X+m*j+f*R,s[14]=g*x+_*I+m*H+f*B,s[3]=y*w+v*b+M*F+S*V,s[7]=y*A+v*k+M*z+S*ee,s[11]=y*L+v*X+M*j+S*R,s[15]=y*x+v*I+M*H+S*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*d-i*c*d-s*o*u+n*c*u+i*o*p-n*l*p)+_*(+t*l*p-t*c*u+s*a*u-i*a*p+i*c*h-s*l*h)+m*(+t*c*d-t*o*p-s*a*d+n*a*p+s*o*h-n*c*h)+f*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],y=d*m*c-_*u*c+_*l*p-o*m*p-d*l*f+o*u*f,v=g*u*c-h*m*c-g*l*p+a*m*p+h*l*f-a*u*f,M=h*_*c-g*d*c+g*o*p-a*_*p-h*o*f+a*d*f,S=g*d*l-h*_*l-g*o*u+a*_*u+h*o*m-a*d*m,w=t*y+n*v+i*M+s*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(_*u*s-d*m*s-_*i*p+n*m*p+d*i*f-n*u*f)*A,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*f+n*l*f)*A,e[3]=(d*l*s-o*u*s-d*i*c+n*u*c+o*i*p-n*l*p)*A,e[4]=v*A,e[5]=(h*m*s-g*u*s+g*i*p-t*m*p-h*i*f+t*u*f)*A,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*f-t*l*f)*A,e[7]=(a*u*s-h*l*s+h*i*c-t*u*c-a*i*p+t*l*p)*A,e[8]=M*A,e[9]=(g*d*s-h*_*s-g*n*p+t*_*p+h*n*f-t*d*f)*A,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*f+t*o*f)*A,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*p-t*o*p)*A,e[12]=S*A,e[13]=(h*_*i-g*d*i+g*n*u-t*_*u-h*n*m+t*d*m)*A,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*A,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,g=s*d,_=a*h,m=a*d,f=o*d,y=l*c,v=l*h,M=l*d,S=n.x,w=n.y,A=n.z;return i[0]=(1-(_+f))*S,i[1]=(p+M)*S,i[2]=(g-v)*S,i[3]=0,i[4]=(p-M)*w,i[5]=(1-(u+f))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(g+v)*A,i[9]=(m-y)*A,i[10]=(1-(u+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Vr.set(i[0],i[1],i[2]).length();const a=Vr.set(i[4],i[5],i[6]).length(),o=Vr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Vn.copy(this);const c=1/s,h=1/a,d=1/o;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,t.setFromRotationMatrix(Vn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=bi){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let p,g;if(o===bi)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Eo)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=bi){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-s),u=(t+e)*c,p=(n+i)*h;let g,_;if(o===bi)g=(a+s)*d,_=-2*d;else if(o===Eo)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vr=new W,Vn=new Dt,B_=new W(0,0,0),k_=new W(1,1,1),Ui=new W,Fa=new W,xn=new W,ou=new Dt,lu=new Rr;class Po{constructor(e=0,t=0,n=0,i=Po.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ou,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lu.setFromEuler(this),this.setFromQuaternion(lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Po.DEFAULT_ORDER="XYZ";class Bc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let G_=0;const cu=new W,Wr=new Rr,mi=new Dt,za=new W,Os=new W,H_=new W,V_=new Rr,hu=new W(1,0,0),uu=new W(0,1,0),du=new W(0,0,1),W_={type:"added"},fu={type:"removed"};class Kt extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new W,t=new Po,n=new Rr,i=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Ze}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(hu,e)}rotateY(e){return this.rotateOnAxis(uu,e)}rotateZ(e){return this.rotateOnAxis(du,e)}translateOnAxis(e,t){return cu.copy(e).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hu,e)}translateY(e){return this.translateOnAxis(uu,e)}translateZ(e){return this.translateOnAxis(du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?za.copy(e):za.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Os,za,this.up):mi.lookAt(za,Os,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),Wr.setFromRotationMatrix(mi),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?this:(e&&e.isObject3D&&(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(W_)),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(fu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,H_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,V_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Kt.DEFAULT_UP=new W(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new W,_i=new W,gl=new W,gi=new W,Xr=new W,Yr=new W,pu=new W,vl=new W,xl=new W,Ml=new W;let Ba=!1;class Kn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wn.subVectors(e,t),i.cross(Wn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Wn.subVectors(i,t),_i.subVectors(n,t),gl.subVectors(e,t);const a=Wn.dot(Wn),o=Wn.dot(_i),l=Wn.dot(gl),c=_i.dot(_i),h=_i.dot(gl),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gi),gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,t,n,i,s,a,o,l){return Ba===!1&&(Ba=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,gi),l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l}static isFrontFacing(e,t,n,i){return Wn.subVectors(n,t),_i.subVectors(e,t),Wn.cross(_i).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Wn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Ba===!1&&(Ba=!0),Kn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Kn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Xr.subVectors(i,n),Yr.subVectors(s,n),vl.subVectors(e,n);const l=Xr.dot(vl),c=Yr.dot(vl);if(l<=0&&c<=0)return t.copy(n);xl.subVectors(e,i);const h=Xr.dot(xl),d=Yr.dot(xl);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Xr,a);Ml.subVectors(e,s);const p=Xr.dot(Ml),g=Yr.dot(Ml);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Yr,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return pu.subVectors(s,i),o=(d-h)/(d-h+(p-g)),t.copy(i).addScaledVector(pu,o);const f=1/(m+_+u);return a=_*f,o=u*f,t.copy(n).addScaledVector(Xr,a).addScaledVector(Yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let X_=0;class ga extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=ps,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sf,this.blendDst=yf,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sl,this.stencilZFail=sl,this.stencilZPass=sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0)continue;const i=this[t];i!==void 0&&(i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n)}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},ka={h:0,s:0,l:0};function Sl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class nt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Hn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Hn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Hn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Hn.workingColorSpace){if(e=C_(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Sl(a,s,e+1/3),this.g=Sl(a,s,e),this.b=Sl(a,s,e-1/3)}return Hn.toWorkingColorSpace(this,i),this}setStyle(e,t=Ve){function n(s){s!==void 0&&parseFloat(s)<1}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){const n=kf[e.toLowerCase()];return n!==void 0&&this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=cl(e.r),this.g=cl(e.g),this.b=cl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return Hn.fromWorkingColorSpace(Xt.copy(this),e),Math.round(rn(Xt.r*255,0,255))*65536+Math.round(rn(Xt.g*255,0,255))*256+Math.round(rn(Xt.b*255,0,255))}getHexString(e=Ve){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Hn.workingColorSpace){Hn.fromWorkingColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,s=Xt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Hn.workingColorSpace){return Hn.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ve){Hn.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==Ve?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),Xn.h+=e,Xn.s+=t,Xn.l+=n,this.setHSL(Xn.h,Xn.s,Xn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(ka);const n=ol(Xn.h,ka.h,t),i=ol(Xn.s,ka.s,t),s=ol(Xn.l,ka.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new nt;nt.NAMES=kf;class Gf extends ga{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new W,Ga=new qe;class oi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nu,this.updateRange={offset:0,count:-1},this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Da(t,this.array)),t}setX(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Da(t,this.array)),t}setY(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Da(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Da(t,this.array)),t}setW(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),i=vn(i,this.array),s=vn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Hf extends oi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vf extends oi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Er extends oi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Y_=0;const Rn=new Dt,yl=new Kt,qr=new W,Mn=new _a,Ns=new _a,Nt=new W;class Dr extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Of(e)?Vf:Hf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return yl.lookAt(e),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Er(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(Mn.min,Ns.min),Mn.expandByPoint(Nt),Nt.addVectors(Mn.max,Ns.max),Mn.expandByPoint(Nt)):(Mn.expandByPoint(Ns.min),Mn.expandByPoint(Ns.max))}Mn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(qr.fromBufferAttribute(e,c),Nt.add(qr)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return;const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<o;b++)c[b]=new W,h[b]=new W;const d=new W,u=new W,p=new W,g=new qe,_=new qe,m=new qe,f=new W,y=new W;function v(b,k,X){d.fromArray(i,b*3),u.fromArray(i,k*3),p.fromArray(i,X*3),g.fromArray(a,b*2),_.fromArray(a,k*2),m.fromArray(a,X*2),u.sub(d),p.sub(d),_.sub(g),m.sub(g);const I=1/(_.x*m.y-m.x*_.y);isFinite(I)&&(f.copy(u).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(I),y.copy(p).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(I),c[b].add(f),c[k].add(f),c[X].add(f),h[b].add(y),h[k].add(y),h[X].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let b=0,k=M.length;b<k;++b){const X=M[b],I=X.start,F=X.count;for(let z=I,j=I+F;z<j;z+=3)v(n[z+0],n[z+1],n[z+2])}const S=new W,w=new W,A=new W,L=new W;function x(b){A.fromArray(s,b*3),L.copy(A);const k=c[b];S.copy(k),S.sub(A.multiplyScalar(A.dot(k))).normalize(),w.crossVectors(L,k);const I=w.dot(h[b])<0?-1:1;l[b*4]=S.x,l[b*4+1]=S.y,l[b*4+2]=S.z,l[b*4+3]=I}for(let b=0,k=M.length;b<k;++b){const X=M[b],I=X.start,F=X.count;for(let z=I,j=I+F;z<j;z+=3)x(n[z+0]),x(n[z+1]),x(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new W,s=new W,a=new W,o=new W,l=new W,c=new W,h=new W,d=new W;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new oi(u,h,d)}if(this.index===null)return this;const t=new Dr,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mu=new Dt,sr=new Bf,Ha=new zc,_u=new W,$r=new W,jr=new W,Kr=new W,El=new W,Va=new W,Wa=new qe,Xa=new qe,Ya=new qe,gu=new W,vu=new W,xu=new W,qa=new W,$a=new W;let ri=class extends Kt{constructor(e=new Dr,t=new Gf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Va.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(El.fromBufferAttribute(d,e),a?Va.addScaledVector(El,h):Va.addScaledVector(El.sub(t),h))}t.add(Va)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(Ha.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Ha,_u)===null||sr.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(mu.copy(s).invert(),sr.copy(e.ray).applyMatrix4(mu),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,S=v;M<S;M+=3){const w=o.getX(M),A=o.getX(M+1),L=o.getX(M+2);i=ja(this,f,e,n,c,h,d,w,A,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=o.getX(m),v=o.getX(m+1),M=o.getX(m+2);i=ja(this,a,e,n,c,h,d,y,v,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,S=v;M<S;M+=3){const w=M,A=M+1,L=M+2;i=ja(this,f,e,n,c,h,d,w,A,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=m,v=m+1,M=m+2;i=ja(this,a,e,n,c,h,d,y,v,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function q_(r,e,t,n,i,s,a,o){let l;if(e.side===fn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Ci,o),l===null)return null;$a.copy(o),$a.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo($a);return c<t.near||c>t.far?null:{distance:c,point:$a.clone(),object:r}}function ja(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,$r),r.getVertexPosition(l,jr),r.getVertexPosition(c,Kr);const h=q_(r,e,t,n,$r,jr,Kr,qa);if(h){i&&(Wa.fromBufferAttribute(i,o),Xa.fromBufferAttribute(i,l),Ya.fromBufferAttribute(i,c),h.uv=Kn.getInterpolation(qa,$r,jr,Kr,Wa,Xa,Ya,new qe)),s&&(Wa.fromBufferAttribute(s,o),Xa.fromBufferAttribute(s,l),Ya.fromBufferAttribute(s,c),h.uv1=Kn.getInterpolation(qa,$r,jr,Kr,Wa,Xa,Ya,new qe),h.uv2=h.uv1),a&&(gu.fromBufferAttribute(a,o),vu.fromBufferAttribute(a,l),xu.fromBufferAttribute(a,c),h.normal=Kn.getInterpolation(qa,$r,jr,Kr,gu,vu,xu,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new W,materialIndex:0};Kn.getNormal($r,jr,Kr,d.normal),h.face=d}return h}class va extends Dr{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Er(c,3)),this.setAttribute("normal",new Er(h,3)),this.setAttribute("uv",new Er(d,2));function g(_,m,f,y,v,M,S,w,A,L,x){const b=M/A,k=S/L,X=M/2,I=S/2,F=w/2,z=A+1,j=L+1;let H=0,V=0;const ee=new W;for(let R=0;R<j;R++){const B=R*k-I;for(let Z=0;Z<z;Z++){const he=Z*b-X;ee[_]=he*y,ee[m]=B*v,ee[f]=F,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[f]=w>0?1:-1,h.push(ee.x,ee.y,ee.z),d.push(Z/A),d.push(1-R/L),H+=1}}for(let R=0;R<L;R++)for(let B=0;B<A;B++){const Z=u+B+z*R,he=u+B+z*(R+1),ae=u+(B+1)+z*(R+1),le=u+(B+1)+z*R;l.push(Z,he,le),l.push(he,ae,le),V+=6}o.addGroup(p,V,x),p+=V,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?e[t][n]=null:e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(r){const e={};for(let t=0;t<r.length;t++){const n=ws(r[t]);for(const i in n)e[i]=n[i]}return e}function $_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Wf(r){return r.getRenderTarget()===null?r.outputColorSpace:hi}const j_={clone:ws,merge:Qt};var K_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends ga{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K_,this.fragmentShader=Z_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=$_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xf extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class In extends Xf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(al*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zr=-90,Jr=1;class J_ extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new In(Zr,Jr,e,t);i.layers=this.layers,this.add(i);const s=new In(Zr,Jr,e,t);s.layers=this.layers,this.add(s);const a=new In(Zr,Jr,e,t);a.layers=this.layers,this.add(a);const o=new In(Zr,Jr,e,t);o.layers=this.layers,this.add(o);const l=new In(Zr,Jr,e,t);l.layers=this.layers,this.add(l);const c=new In(Zr,Jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,a,o,l,c]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=Ti,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Yf extends pn{constructor(e,t,n,i,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:bs,super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q_ extends Cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ta("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Sr?Ve:yr),this.texture=new Yf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new va(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Yi});s.uniforms.tEquirect.value=t;const a=new ri(i,s),o=t.minFilter;return t.minFilter===ha&&(t.minFilter=Un),new J_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const bl=new W,eg=new W,tg=new Ze;class cr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=bl.subVectors(n,t).cross(eg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(bl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tg.getNormalMatrix(e),i=this.coplanarPoint(bl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new zc,Ka=new W;class kc{constructor(e=new cr,t=new cr,n=new cr,i=new cr,s=new cr,a=new cr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],y=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-s,u-c,m-p,M-f).normalize(),n[1].setComponents(l+s,u+c,m+p,M+f).normalize(),n[2].setComponents(l+a,u+h,m+g,M+y).normalize(),n[3].setComponents(l-a,u-h,m-g,M-y).normalize(),n[4].setComponents(l-o,u-d,m-_,M-v).normalize(),t===bi)n[5].setComponents(l+o,u+d,m+_,M+v).normalize();else if(t===Eo)n[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ka.x=i.normal.x>0?e.max.x:e.min.x,Ka.y=i.normal.y>0?e.max.y:e.min.y,Ka.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qf(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ng(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,p=r.createBuffer();r.bindBuffer(h,p),r.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=r.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=r.SHORT;else if(d instanceof Uint32Array)g=r.UNSIGNED_INT;else if(d instanceof Int32Array)g=r.INT;else if(d instanceof Int8Array)g=r.BYTE;else if(d instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,p=h.updateRange;r.bindBuffer(d,c),p.count===-1?r.bufferSubData(d,0,u):(t?r.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):r.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:a,remove:o,update:l}}class Lo extends Dr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const y=f*u-a;for(let v=0;v<c;v++){const M=v*d-s;g.push(M,-y,0),_.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const v=y+c*f,M=y+c*(f+1),S=y+1+c*(f+1),w=y+1+c*f;p.push(v,M,w),p.push(M,S,w)}this.setIndex(p),this.setAttribute("position",new Er(g,3)),this.setAttribute("normal",new Er(_,3)),this.setAttribute("uv",new Er(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.widthSegments,e.heightSegments)}}var ig=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,og=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ug=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ag=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Og=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$g=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,e0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,t0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,r0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,o0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,l0=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,c0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,u0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,g0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,x0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,b0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,T0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,P0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,z0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,B0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,k0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,H0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,W0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,j0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ev=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ov=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pv=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_v=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ev=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:ig,alphahash_pars_fragment:rg,alphamap_fragment:sg,alphamap_pars_fragment:ag,alphatest_fragment:og,alphatest_pars_fragment:lg,aomap_fragment:cg,aomap_pars_fragment:hg,begin_vertex:ug,beginnormal_vertex:dg,bsdfs:fg,iridescence_fragment:pg,bumpmap_pars_fragment:mg,clipping_planes_fragment:_g,clipping_planes_pars_fragment:gg,clipping_planes_pars_vertex:vg,clipping_planes_vertex:xg,color_fragment:Mg,color_pars_fragment:Sg,color_pars_vertex:yg,color_vertex:Eg,common:bg,cube_uv_reflection_fragment:Tg,defaultnormal_vertex:Ag,displacementmap_pars_vertex:wg,displacementmap_vertex:Cg,emissivemap_fragment:Rg,emissivemap_pars_fragment:Pg,colorspace_fragment:Lg,colorspace_pars_fragment:Dg,envmap_fragment:Ug,envmap_common_pars_fragment:Ig,envmap_pars_fragment:Og,envmap_pars_vertex:Ng,envmap_physical_pars_fragment:$g,envmap_vertex:Fg,fog_vertex:zg,fog_pars_vertex:Bg,fog_fragment:kg,fog_pars_fragment:Gg,gradientmap_pars_fragment:Hg,lightmap_fragment:Vg,lightmap_pars_fragment:Wg,lights_lambert_fragment:Xg,lights_lambert_pars_fragment:Yg,lights_pars_begin:qg,lights_toon_fragment:jg,lights_toon_pars_fragment:Kg,lights_phong_fragment:Zg,lights_phong_pars_fragment:Jg,lights_physical_fragment:Qg,lights_physical_pars_fragment:e0,lights_fragment_begin:t0,lights_fragment_maps:n0,lights_fragment_end:i0,logdepthbuf_fragment:r0,logdepthbuf_pars_fragment:s0,logdepthbuf_pars_vertex:a0,logdepthbuf_vertex:o0,map_fragment:l0,map_pars_fragment:c0,map_particle_fragment:h0,map_particle_pars_fragment:u0,metalnessmap_fragment:d0,metalnessmap_pars_fragment:f0,morphcolor_vertex:p0,morphnormal_vertex:m0,morphtarget_pars_vertex:_0,morphtarget_vertex:g0,normal_fragment_begin:v0,normal_fragment_maps:x0,normal_pars_fragment:M0,normal_pars_vertex:S0,normal_vertex:y0,normalmap_pars_fragment:E0,clearcoat_normal_fragment_begin:b0,clearcoat_normal_fragment_maps:T0,clearcoat_pars_fragment:A0,iridescence_pars_fragment:w0,opaque_fragment:C0,packing:R0,premultiplied_alpha_fragment:P0,project_vertex:L0,dithering_fragment:D0,dithering_pars_fragment:U0,roughnessmap_fragment:I0,roughnessmap_pars_fragment:O0,shadowmap_pars_fragment:N0,shadowmap_pars_vertex:F0,shadowmap_vertex:z0,shadowmask_pars_fragment:B0,skinbase_vertex:k0,skinning_pars_vertex:G0,skinning_vertex:H0,skinnormal_vertex:V0,specularmap_fragment:W0,specularmap_pars_fragment:X0,tonemapping_fragment:Y0,tonemapping_pars_fragment:q0,transmission_fragment:$0,transmission_pars_fragment:j0,uv_pars_fragment:K0,uv_pars_vertex:Z0,uv_vertex:J0,worldpos_vertex:Q0,background_vert:ev,background_frag:tv,backgroundCube_vert:nv,backgroundCube_frag:iv,cube_vert:rv,cube_frag:sv,depth_vert:av,depth_frag:ov,distanceRGBA_vert:lv,distanceRGBA_frag:cv,equirect_vert:hv,equirect_frag:uv,linedashed_vert:dv,linedashed_frag:fv,meshbasic_vert:pv,meshbasic_frag:mv,meshlambert_vert:_v,meshlambert_frag:gv,meshmatcap_vert:vv,meshmatcap_frag:xv,meshnormal_vert:Mv,meshnormal_frag:Sv,meshphong_vert:yv,meshphong_frag:Ev,meshphysical_vert:bv,meshphysical_frag:Tv,meshtoon_vert:Av,meshtoon_frag:wv,points_vert:Cv,points_frag:Rv,shadow_vert:Pv,shadow_frag:Lv,sprite_vert:Dv,sprite_frag:Uv},_e={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},On={basic:{uniforms:Qt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Qt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Qt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Qt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Qt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Qt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Qt([_e.points,_e.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Qt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Qt([_e.common,_e.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Qt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Qt([_e.sprite,_e.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Qt([_e.common,_e.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Qt([_e.lights,_e.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};On.physical={uniforms:Qt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Za={r:0,b:0,g:0};function Iv(r,e,t,n,i,s,a){const o=new nt(0);let l=s===!0?0:1,c,h,d=null,u=0,p=null;function g(m,f){let y=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),y=!0),r.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),y=!0;break}(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ro)?(h===void 0&&(h=new ri(new va(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:ws(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=v.colorSpace!==Ve,(d!==v||u!==v.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ri(new Lo(2,2),new Ri({name:"BackgroundMaterial",uniforms:ws(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Ve,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(Za,Wf(r)),n.buffers.color.setClear(Za.r,Za.g,Za.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function Ov(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,h=!1;function d(F,z,j,H,V){let ee=!1;if(a){const R=_(H,j,z);c!==R&&(c=R,p(c.object)),ee=f(F,H,j,V),ee&&y(F,H,j,V)}else{const R=z.wireframe===!0;(c.geometry!==H.id||c.program!==j.id||c.wireframe!==R)&&(c.geometry=H.id,c.program=j.id,c.wireframe=R,ee=!0)}V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(ee||h)&&(h=!1,L(F,z,j,H),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(F){return n.isWebGL2?r.bindVertexArray(F):s.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?r.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function _(F,z,j){const H=j.wireframe===!0;let V=o[F.id];V===void 0&&(V={},o[F.id]=V);let ee=V[z.id];ee===void 0&&(ee={},V[z.id]=ee);let R=ee[H];return R===void 0&&(R=m(u()),ee[H]=R),R}function m(F){const z=[],j=[],H=[];for(let V=0;V<i;V++)z[V]=0,j[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:j,attributeDivisors:H,object:F,attributes:{},index:null}}function f(F,z,j,H){const V=c.attributes,ee=z.attributes;let R=0;const B=j.getAttributes();for(const Z in B)if(B[Z].location>=0){const ae=V[Z];let le=ee[Z];if(le===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(le=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(le=F.instanceColor)),ae===void 0||ae.attribute!==le||le&&ae.data!==le.data)return!0;R++}return c.attributesNum!==R||c.index!==H}function y(F,z,j,H){const V={},ee=z.attributes;let R=0;const B=j.getAttributes();for(const Z in B)if(B[Z].location>=0){let ae=ee[Z];ae===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor));const le={};le.attribute=ae,ae&&ae.data&&(le.data=ae.data),V[Z]=le,R++}c.attributes=V,c.attributesNum=R,c.index=H}function v(){const F=c.newAttributes;for(let z=0,j=F.length;z<j;z++)F[z]=0}function M(F){S(F,0)}function S(F,z){const j=c.newAttributes,H=c.enabledAttributes,V=c.attributeDivisors;j[F]=1,H[F]===0&&(r.enableVertexAttribArray(F),H[F]=1),V[F]!==z&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,z),V[F]=z)}function w(){const F=c.newAttributes,z=c.enabledAttributes;for(let j=0,H=z.length;j<H;j++)z[j]!==F[j]&&(r.disableVertexAttribArray(j),z[j]=0)}function A(F,z,j,H,V,ee,R){R===!0?r.vertexAttribIPointer(F,z,j,V,ee):r.vertexAttribPointer(F,z,j,H,V,ee)}function L(F,z,j,H){if(n.isWebGL2===!1&&(F.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const V=H.attributes,ee=j.getAttributes(),R=z.defaultAttributeValues;for(const B in ee){const Z=ee[B];if(Z.location>=0){let he=V[B];if(he===void 0&&(B==="instanceMatrix"&&F.instanceMatrix&&(he=F.instanceMatrix),B==="instanceColor"&&F.instanceColor&&(he=F.instanceColor)),he!==void 0){const ae=he.normalized,le=he.itemSize,pe=t.get(he);if(pe===void 0)continue;const Ce=pe.buffer,ye=pe.type,je=pe.bytesPerElement,at=n.isWebGL2===!0&&(ye===r.INT||ye===r.UNSIGNED_INT||he.gpuType===Tf);if(he.isInterleavedBufferAttribute){const Ie=he.data,U=Ie.stride,et=he.offset;if(Ie.isInstancedInterleavedBuffer){for(let Ae=0;Ae<Z.locationSize;Ae++)S(Z.location+Ae,Ie.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Ae=0;Ae<Z.locationSize;Ae++)M(Z.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Ae=0;Ae<Z.locationSize;Ae++)A(Z.location+Ae,le/Z.locationSize,ye,ae,U*je,(et+le/Z.locationSize*Ae)*je,at)}else{if(he.isInstancedBufferAttribute){for(let Ie=0;Ie<Z.locationSize;Ie++)S(Z.location+Ie,he.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ie=0;Ie<Z.locationSize;Ie++)M(Z.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Ie=0;Ie<Z.locationSize;Ie++)A(Z.location+Ie,le/Z.locationSize,ye,ae,le*je,le/Z.locationSize*Ie*je,at)}}else if(R!==void 0){const ae=R[B];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(Z.location,ae);break;case 3:r.vertexAttrib3fv(Z.location,ae);break;case 4:r.vertexAttrib4fv(Z.location,ae);break;default:r.vertexAttrib1fv(Z.location,ae)}}}}w()}function x(){X();for(const F in o){const z=o[F];for(const j in z){const H=z[j];for(const V in H)g(H[V].object),delete H[V];delete z[j]}delete o[F]}}function b(F){if(o[F.id]===void 0)return;const z=o[F.id];for(const j in z){const H=z[j];for(const V in H)g(H[V].object),delete H[V];delete z[j]}delete o[F.id]}function k(F){for(const z in o){const j=o[z];if(j[F.id]===void 0)continue;const H=j[F.id];for(const V in H)g(H[V].object),delete H[V];delete j[F.id]}}function X(){I(),h=!0,c!==l&&(c=l,p(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:I,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:M,disableUnusedAttributes:w}}function Nv(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,p;if(i)u=r,p="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",u===null)return;u[p](s,c,h,d),t.update(h,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function Fv(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,M=a||e.has("OES_texture_float"),S=v&&M,w=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:w}}function zv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new cr,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const y=s?0:n,v=y*4;let M=f.clippingState||null;l.value=M,M=h(g,u,v,p);for(let S=0;S!==v;++S)M[S]=t[S];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,M=p;v!==_;++v,M+=4)a.copy(d[v]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Bv(r){let e=new WeakMap;function t(a,o){return o===ic?a.mapping=bs:o===rc&&(a.mapping=Ts),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ic||o===rc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Q_(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class $f extends Xf{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const os=4,Mu=[.125,.215,.35,.446,.526,.582],ls=20,Tl=new $f,Su=new nt;let Al=null;const hr=(1+Math.sqrt(5))/2,Qr=1/hr,yu=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,hr,Qr),new W(0,hr,-Qr),new W(Qr,0,hr),new W(-Qr,0,hr),new W(hr,Qr,0),new W(-hr,Qr,0)];class Eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Al=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Al),e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Al=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:ua,format:Qn,colorSpace:hi,depthBuffer:!1},i=bu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kv(s)),this._blurMaterial=Gv(s,e,t)}return i}_compileMaterial(e){const t=new ri(this._lodPlanes[0],e);this._renderer.compile(t,Tl)}_sceneToCubeUV(e,t,n,i){const o=new In(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Su),h.toneMapping=Ti,h.autoClear=!1;const p=new Gf({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new ri(new va,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Su),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;Ja(i,y*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===bs||e.mapping===Ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ri(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ja(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Tl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=yu[(i-1)%yu.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial,h=3,d=new ri(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ls-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):ls;m>ls;const f=[];let y=0;for(let A=0;A<ls;++A){const L=A/_,x=Math.exp(-L*L/2);f.push(x),A===0?y+=x:A<m&&(y+=2*x)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;const M=this._sizeLods[i],S=3*M*(i>v-os?i-v+os:0),w=4*(this._cubeSize-M);Ja(t,S,w,3*M,2*M),l.setRenderTarget(t),l.render(d,Tl)}}function kv(r){const e=[],t=[],n=[];let i=r;const s=r-os+1+Mu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-os?l=Mu[a-r+os-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),v=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,L=w>2?0:-1,x=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];y.set(x,_*g*w),v.set(u,m*g*w);const b=[w,w,w,w,w,w];M.set(b,f*g*w)}const S=new Dr;S.setAttribute("position",new oi(y,_)),S.setAttribute("uv",new oi(v,m)),S.setAttribute("faceIndex",new oi(M,f)),e.push(S),i>os&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bu(r,e,t){const n=new Cr(r,e,t);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ja(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Gv(r,e,t){const n=new Float32Array(ls),i=new W(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Tu(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Au(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ic||l===rc,h=l===bs||l===Ts;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Eu(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Eu(r));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Vv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i}}}function Wv(r,e,t,n){const i={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}u.removeEventListener("dispose",a),delete i[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],r.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let v=0,M=y.length;v<M;v+=3){const S=y[v+0],w=y[v+1],A=y[v+2];u.push(S,w,w,A,A,S)}}else{const y=g.array;_=g.version;for(let v=0,M=y.length/3-1;v<M;v+=3){const S=v+0,w=v+1,A=v+2;u.push(S,w,w,A,A,S)}}const m=new(Of(u)?Vf:Hf)(u,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Xv(r,e,t,n){const i=n.isWebGL2;let s;function a(u){s=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,p){r.drawElements(s,p,o,u*l),t.update(p,s,1)}function d(u,p,g){if(g===0)return;let _,m;if(i)_=r,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null)return;_[m](s,p,o,u*l,g),t.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d}function Yv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qv(r,e){return r[0]-e[0]}function $v(r,e){return Math.abs(e[1])-Math.abs(r[1])}function jv(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new zt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==_){let z=function(){I.dispose(),s.delete(h),h.removeEventListener("dispose",z)};var p=z;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let x=0;v===!0&&(x=1),M===!0&&(x=2),S===!0&&(x=3);let b=h.attributes.position.count*x,k=1;b>e.maxTextureSize&&(k=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const X=new Float32Array(b*k*4*_),I=new zf(X,b,k,_);I.type=Hi,I.needsUpdate=!0;const F=x*4;for(let j=0;j<_;j++){const H=w[j],V=A[j],ee=L[j],R=b*k*4*j;for(let B=0;B<H.count;B++){const Z=B*F;v===!0&&(a.fromBufferAttribute(H,B),X[R+Z+0]=a.x,X[R+Z+1]=a.y,X[R+Z+2]=a.z,X[R+Z+3]=0),M===!0&&(a.fromBufferAttribute(V,B),X[R+Z+4]=a.x,X[R+Z+5]=a.y,X[R+Z+6]=a.z,X[R+Z+7]=0),S===!0&&(a.fromBufferAttribute(ee,B),X[R+Z+8]=a.x,X[R+Z+9]=a.y,X[R+Z+10]=a.z,X[R+Z+11]=ee.itemSize===4?a.w:1)}}m={count:_,texture:I,size:new qe(b,k)},s.set(h,m),h.addEventListener("dispose",z)}let f=0;for(let v=0;v<u.length;v++)f+=u[v];const y=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(r,"morphTargetBaseInfluence",y),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=u===void 0?0:u.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[h.id]=_}for(let M=0;M<g;M++){const S=_[M];S[0]=M,S[1]=u[M]}_.sort($v);for(let M=0;M<8;M++)M<g&&_[M][1]?(o[M][0]=_[M][0],o[M][1]=_[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(qv);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const S=o[M],w=S[0],A=S[1];w!==Number.MAX_SAFE_INTEGER&&A?(m&&h.getAttribute("morphTarget"+M)!==m[w]&&h.setAttribute("morphTarget"+M,m[w]),f&&h.getAttribute("morphNormal"+M)!==f[w]&&h.setAttribute("morphNormal"+M,f[w]),i[M]=A,y+=A):(m&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),f&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const v=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(r,"morphTargetBaseInfluence",v),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Kv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const jf=new pn,Kf=new zf,Zf=new F_,Jf=new Yf,wu=[],Cu=[],Ru=new Float32Array(16),Pu=new Float32Array(9),Lu=new Float32Array(4);function Cs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=wu[i];if(s===void 0&&(s=new Float32Array(i),wu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ut(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function It(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Do(r,e){let t=Cu[e];t===void 0&&(t=new Int32Array(e),Cu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Zv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Jv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2fv(this.addr,e),It(t,e)}}function Qv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;r.uniform3fv(this.addr,e),It(t,e)}}function ex(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4fv(this.addr,e),It(t,e)}}function tx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;Lu.set(n),r.uniformMatrix2fv(this.addr,!1,Lu),It(t,n)}}function nx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;Pu.set(n),r.uniformMatrix3fv(this.addr,!1,Pu),It(t,n)}}function ix(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;Ru.set(n),r.uniformMatrix4fv(this.addr,!1,Ru),It(t,n)}}function rx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2iv(this.addr,e),It(t,e)}}function ax(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;r.uniform3iv(this.addr,e),It(t,e)}}function ox(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4iv(this.addr,e),It(t,e)}}function lx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function cx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2uiv(this.addr,e),It(t,e)}}function hx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;r.uniform3uiv(this.addr,e),It(t,e)}}function ux(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4uiv(this.addr,e),It(t,e)}}function dx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||jf,i)}function fx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zf,i)}function px(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jf,i)}function mx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Kf,i)}function _x(r){switch(r){case 5126:return Zv;case 35664:return Jv;case 35665:return Qv;case 35666:return ex;case 35674:return tx;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return rx;case 35667:case 35671:return sx;case 35668:case 35672:return ax;case 35669:case 35673:return ox;case 5125:return lx;case 36294:return cx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}function gx(r,e){r.uniform1fv(this.addr,e)}function vx(r,e){const t=Cs(e,this.size,2);r.uniform2fv(this.addr,t)}function xx(r,e){const t=Cs(e,this.size,3);r.uniform3fv(this.addr,t)}function Mx(r,e){const t=Cs(e,this.size,4);r.uniform4fv(this.addr,t)}function Sx(r,e){const t=Cs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function yx(r,e){const t=Cs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ex(r,e){const t=Cs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function bx(r,e){r.uniform1iv(this.addr,e)}function Tx(r,e){r.uniform2iv(this.addr,e)}function Ax(r,e){r.uniform3iv(this.addr,e)}function wx(r,e){r.uniform4iv(this.addr,e)}function Cx(r,e){r.uniform1uiv(this.addr,e)}function Rx(r,e){r.uniform2uiv(this.addr,e)}function Px(r,e){r.uniform3uiv(this.addr,e)}function Lx(r,e){r.uniform4uiv(this.addr,e)}function Dx(r,e,t){const n=this.cache,i=e.length,s=Do(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||jf,s[a])}function Ux(r,e,t){const n=this.cache,i=e.length,s=Do(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Zf,s[a])}function Ix(r,e,t){const n=this.cache,i=e.length,s=Do(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Jf,s[a])}function Ox(r,e,t){const n=this.cache,i=e.length,s=Do(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Kf,s[a])}function Nx(r){switch(r){case 5126:return gx;case 35664:return vx;case 35665:return xx;case 35666:return Mx;case 35674:return Sx;case 35675:return yx;case 35676:return Ex;case 5124:case 35670:return bx;case 35667:case 35671:return Tx;case 35668:case 35672:return Ax;case 35669:case 35673:return wx;case 5125:return Cx;case 36294:return Rx;case 36295:return Px;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Ox}}class Fx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=_x(t.type)}}class zx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Nx(t.type)}}class Bx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const wl=/(\w+)(\])?(\[|\.)?/g;function Du(r,e){r.seq.push(e),r.map[e.id]=e}function kx(r,e,t){const n=r.name,i=n.length;for(wl.lastIndex=0;;){const s=wl.exec(n),a=wl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Du(t,c===void 0?new Fx(o,r,e):new zx(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Bx(o),Du(t,d)),t=d}}}class co{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);kx(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Uu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Gx=0;function Hx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Vx(r){switch(r){case hi:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return["Linear","( value )"]}}function Iu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Hx(r.getShaderSource(e),a)}else return i}function Wx(r,e){const t=Vx(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Xx(r,e){let t;switch(e){case i_:t="Linear";break;case r_:t="Reinhard";break;case s_:t="OptimizedCineon";break;case Ef:t="ACESFilmic";break;case a_:t="Custom";break;default:t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Yx(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hs).join(`
`)}function qx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $x(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Hs(r){return r!==""}function Ou(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(r){return r.replace(jx,Zx)}const Kx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Zx(r,e){let t=Ye[e];if(t===void 0){const n=Kx.get(e);if(n!==void 0)t=Ye[n];else throw new Error("Can not resolve #include <"+e+">")}return cc(t)}const Jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(r){return r.replace(Jx,Qx)}function Qx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zu(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Mf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function tM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case bs:case Ts:e="ENVMAP_TYPE_CUBE";break;case Ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function iM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Nc:e="ENVMAP_BLENDING_MULTIPLY";break;case t_:e="ENVMAP_BLENDING_MIX";break;case n_:e="ENVMAP_BLENDING_ADD";break}return e}function rM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sM(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=eM(t),c=tM(t),h=nM(t),d=iM(t),u=rM(t),p=t.isWebGL2?"":Yx(t),g=qx(s),_=i.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hs).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hs).join(`
`),f.length>0&&(f+=`
`)):(m=[zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),f=[p,zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ti?Xx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Wx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),a=cc(a),a=Ou(a,t),a=Nu(a,t),o=cc(o),o=Ou(o,t),o=Nu(o,t),a=Fu(a),o=Fu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=y+m+a,M=y+f+o,S=Uu(i,i.VERTEX_SHADER,v),w=Uu(i,i.FRAGMENT_SHADER,M);if(i.attachShader(_,S),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const x=i.getProgramInfoLog(_).trim(),b=i.getShaderInfoLog(S).trim(),k=i.getShaderInfoLog(w).trim();let X=!0,I=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,w);else{const F=Iu(i,S,"vertex"),z=Iu(i,w,"fragment")}else x!==""||(b===""||k==="")&&(I=!1);I&&(this.diagnostics={runnable:X,programLog:x,vertexShader:{log:b,prefix:m},fragmentShader:{log:k,prefix:f}})}i.deleteShader(S),i.deleteShader(w);let A;this.getUniforms=function(){return A===void 0&&(A=new co(i,_)),A};let L;return this.getAttributes=function(){return L===void 0&&(L=$x(i,_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}let aM=0;class oM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lM(e),t.set(e,n)),n}}class lM{constructor(e){this.id=aM++,this.code=e,this.usedTimes=0}}function cM(r,e,t,n,i,s,a){const o=new Bc,l=new oM,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,b,k,X,I){const F=X.fog,z=I.geometry,j=x.isMeshStandardMaterial?X.environment:null,H=(x.isMeshStandardMaterial?t:e).get(x.envMap||j),V=H&&H.mapping===Ro?H.image.height:null,ee=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),x.precision);const R=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,B=R!==void 0?R.length:0;let Z=0;z.morphAttributes.position!==void 0&&(Z=1),z.morphAttributes.normal!==void 0&&(Z=2),z.morphAttributes.color!==void 0&&(Z=3);let he,ae,le,pe;if(ee){const ke=On[ee];he=ke.vertexShader,ae=ke.fragmentShader}else he=x.vertexShader,ae=x.fragmentShader,l.update(x),le=l.getVertexShaderID(x),pe=l.getFragmentShaderID(x);const Ce=r.getRenderTarget(),ye=I.isInstancedMesh===!0,je=!!x.map,at=!!x.matcap,Ie=!!H,U=!!x.aoMap,et=!!x.lightMap,Ae=!!x.bumpMap,Re=!!x.normalMap,Ee=!!x.displacementMap,Y=!!x.emissiveMap,ze=!!x.metalnessMap,be=!!x.roughnessMap,We=x.anisotropy>0,ot=x.clearcoat>0,ft=x.iridescence>0,C=x.sheen>0,E=x.transmission>0,J=We&&!!x.anisotropyMap,te=ot&&!!x.clearcoatMap,re=ot&&!!x.clearcoatNormalMap,P=ot&&!!x.clearcoatRoughnessMap,ne=ft&&!!x.iridescenceMap,ie=ft&&!!x.iridescenceThicknessMap,q=C&&!!x.sheenColorMap,Me=C&&!!x.sheenRoughnessMap,we=!!x.specularMap,Te=!!x.specularColorMap,xe=!!x.specularIntensityMap,ve=E&&!!x.transmissionMap,de=E&&!!x.thicknessMap,Be=!!x.gradientMap,D=!!x.alphaMap,ce=x.alphaTest>0,$=!!x.alphaHash,oe=!!x.extensions,fe=!!z.attributes.uv1,$e=!!z.attributes.uv2,st=!!z.attributes.uv3;return{isWebGL2:h,shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:he,fragmentShader:ae,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:pe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:ye,instancingColor:ye&&I.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Ce===null?r.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:hi,map:je,matcap:at,envMap:Ie,envMapMode:Ie&&H.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:et,bumpMap:Ae,normalMap:Re,displacementMap:u&&Ee,emissiveMap:Y,normalMapObjectSpace:Re&&x.normalMapType===v_,normalMapTangentSpace:Re&&x.normalMapType===Uf,metalnessMap:ze,roughnessMap:be,anisotropy:We,anisotropyMap:J,clearcoat:ot,clearcoatMap:te,clearcoatNormalMap:re,clearcoatRoughnessMap:P,iridescence:ft,iridescenceMap:ne,iridescenceThicknessMap:ie,sheen:C,sheenColorMap:q,sheenRoughnessMap:Me,specularMap:we,specularColorMap:Te,specularIntensityMap:xe,transmission:E,transmissionMap:ve,thicknessMap:de,gradientMap:Be,opaque:x.transparent===!1&&x.blending===ps,alphaMap:D,alphaTest:ce,alphaHash:$,combine:x.combine,mapUv:je&&_(x.map.channel),aoMapUv:U&&_(x.aoMap.channel),lightMapUv:et&&_(x.lightMap.channel),bumpMapUv:Ae&&_(x.bumpMap.channel),normalMapUv:Re&&_(x.normalMap.channel),displacementMapUv:Ee&&_(x.displacementMap.channel),emissiveMapUv:Y&&_(x.emissiveMap.channel),metalnessMapUv:ze&&_(x.metalnessMap.channel),roughnessMapUv:be&&_(x.roughnessMap.channel),anisotropyMapUv:J&&_(x.anisotropyMap.channel),clearcoatMapUv:te&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:P&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:q&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(x.sheenRoughnessMap.channel),specularMapUv:we&&_(x.specularMap.channel),specularColorMapUv:Te&&_(x.specularColorMap.channel),specularIntensityMapUv:xe&&_(x.specularIntensityMap.channel),transmissionMapUv:ve&&_(x.transmissionMap.channel),thicknessMapUv:de&&_(x.thicknessMap.channel),alphaMapUv:D&&_(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Re||We),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:fe,vertexUv2s:$e,vertexUv3s:st,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(je||D),fog:!!F,useFog:x.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Z,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:Ti,useLegacyLights:r.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ii,flipSided:x.side===fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:oe&&x.extensions.derivatives===!0,extensionFragDepth:oe&&x.extensions.fragDepth===!0,extensionDrawBuffers:oe&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)b.push(k),b.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(y(b,x),v(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function y(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function v(x,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),x.push(o.mask)}function M(x){const b=g[x.type];let k;if(b){const X=On[b];k=j_.clone(X.uniforms)}else k=x.uniforms;return k}function S(x,b){let k;for(let X=0,I=c.length;X<I;X++){const F=c[X];if(F.cacheKey===b){k=F,++k.usedTimes;break}}return k===void 0&&(k=new sM(r,b,x,s),c.push(k)),k}function w(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:S,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:L}}function hM(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function uM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Bu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ku(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,p,g,_,m){let f=r[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},r[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||uM),n.length>1&&n.sort(u||Bu),i.length>1&&i.sort(u||Bu)}function h(){for(let d=e,u=r.length;d<u;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function dM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new ku,r.set(n,[a])):i>=s.length?(a=new ku,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function fM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new nt};break;case"SpotLight":t={position:new W,direction:new W,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new W,halfWidth:new W,halfHeight:new W};break}return r[e.id]=t,t}}}function pM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let mM=0;function _M(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function gM(r,e){const t=new fM,n=pM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new W);const s=new W,a=new Dt,o=new Dt;function l(h,d){let u=0,p=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let _=0,m=0,f=0,y=0,v=0,M=0,S=0,w=0,A=0,L=0;h.sort(_M);const x=d===!0?Math.PI:1;for(let k=0,X=h.length;k<X;k++){const I=h[k],F=I.color,z=I.intensity,j=I.distance,H=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=F.r*z*x,p+=F.g*z*x,g+=F.b*z*x;else if(I.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],z);else if(I.isDirectionalLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*x),I.castShadow){const ee=I.shadow,R=n.get(I);R.shadowBias=ee.bias,R.shadowNormalBias=ee.normalBias,R.shadowRadius=ee.radius,R.shadowMapSize=ee.mapSize,i.directionalShadow[_]=R,i.directionalShadowMap[_]=H,i.directionalShadowMatrix[_]=I.shadow.matrix,M++}i.directional[_]=V,_++}else if(I.isSpotLight){const V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(F).multiplyScalar(z*x),V.distance=j,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[f]=V;const ee=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,ee.updateMatrices(I),I.castShadow&&L++),i.spotLightMatrix[f]=ee.matrix,I.castShadow){const R=n.get(I);R.shadowBias=ee.bias,R.shadowNormalBias=ee.normalBias,R.shadowRadius=ee.radius,R.shadowMapSize=ee.mapSize,i.spotShadow[f]=R,i.spotShadowMap[f]=H,w++}f++}else if(I.isRectAreaLight){const V=t.get(I);V.color.copy(F).multiplyScalar(z),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=V,y++}else if(I.isPointLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*x),V.distance=I.distance,V.decay=I.decay,I.castShadow){const ee=I.shadow,R=n.get(I);R.shadowBias=ee.bias,R.shadowNormalBias=ee.normalBias,R.shadowRadius=ee.radius,R.shadowMapSize=ee.mapSize,R.shadowCameraNear=ee.camera.near,R.shadowCameraFar=ee.camera.far,i.pointShadow[m]=R,i.pointShadowMap[m]=H,i.pointShadowMatrix[m]=I.shadow.matrix,S++}i.point[m]=V,m++}else if(I.isHemisphereLight){const V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(z*x),V.groundColor.copy(I.groundColor).multiplyScalar(z*x),i.hemi[v]=V,v++}}y>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0&&(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==_||b.pointLength!==m||b.spotLength!==f||b.rectAreaLength!==y||b.hemiLength!==v||b.numDirectionalShadows!==M||b.numPointShadows!==S||b.numSpotShadows!==w||b.numSpotMaps!==A)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=y,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=w+A-L,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=L,b.directionalLength=_,b.pointLength=m,b.spotLength=f,b.rectAreaLength=y,b.hemiLength=v,b.numDirectionalShadows=M,b.numPointShadows=S,b.numSpotShadows=w,b.numSpotMaps=A,i.version=mM++)}function c(h,d){let u=0,p=0,g=0,_=0,m=0;const f=d.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const M=h[y];if(M.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),u++}else if(M.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function Gu(r,e){const t=new gM(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function vM(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Gu(r,e),t.set(s,[l])):a>=o.length?(l=new Gu(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class xM extends ga{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MM extends ga{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const SM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function EM(r,e,t){let n=new kc;const i=new qe,s=new qe,a=new zt,o=new xM({depthPacking:Df}),l=new MM,c={},h=t.maxTextureSize,d={[Ci]:fn,[fn]:Ci,[ii]:ii},u=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:SM,fragmentShader:yM}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Dr;g.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ri(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xf;let f=this.type;this.render=function(S,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const L=r.getRenderTarget(),x=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Yi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const X=f!==vi&&this.type===vi,I=f===vi&&this.type!==vi;for(let F=0,z=S.length;F<z;F++){const j=S[F],H=j.shadow;if(H===void 0||H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const V=H.getFrameExtents();if(i.multiply(V),s.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/V.x),i.x=s.x*V.x,H.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/V.y),i.y=s.y*V.y,H.mapSize.y=s.y)),H.map===null||X===!0||I===!0){const R=this.type!==vi?{minFilter:nn,magFilter:nn}:{};H.map!==null&&H.map.dispose(),H.map=new Cr(i.x,i.y,R),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const ee=H.getViewportCount();for(let R=0;R<ee;R++){const B=H.getViewport(R);a.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),k.viewport(a),H.updateMatrices(j,R),n=H.getFrustum(),M(w,A,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===vi&&y(H,A),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(L,x,b)};function y(S,w){const A=e.update(_);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Cr(i.x,i.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(w,null,A,u,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(w,null,A,p,_,null)}function v(S,w,A,L){let x=null;const b=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(b!==void 0)x=b;else if(x=A.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const k=x.uuid,X=w.uuid;let I=c[k];I===void 0&&(I={},c[k]=I);let F=I[X];F===void 0&&(F=x.clone(),I[X]=F),x=F}if(x.visible=w.visible,x.wireframe=w.wireframe,L===vi?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:d[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=r.properties.get(x);k.light=A}return x}function M(S,w,A,L,x){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===vi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const X=e.update(S),I=S.material;if(Array.isArray(I)){const F=X.groups;for(let z=0,j=F.length;z<j;z++){const H=F[z],V=I[H.materialIndex];if(V&&V.visible){const ee=v(S,V,L,x);r.renderBufferDirect(A,null,X,ee,S,H)}}}else if(I.visible){const F=v(S,I,L,x);r.renderBufferDirect(A,null,X,F,S,null)}}const k=S.children;for(let X=0,I=k.length;X<I;X++)M(k[X],w,A,L,x)}}function bM(r,e,t){const n=t.isWebGL2;function i(){let D=!1;const ce=new zt;let $=null;const oe=new zt(0,0,0,0);return{setMask:function(fe){$!==fe&&!D&&(r.colorMask(fe,fe,fe,fe),$=fe)},setLocked:function(fe){D=fe},setClear:function(fe,$e,st,pt,ke){ke===!0&&(fe*=pt,$e*=pt,st*=pt),ce.set(fe,$e,st,pt),oe.equals(ce)===!1&&(r.clearColor(fe,$e,st,pt),oe.copy(ce))},reset:function(){D=!1,$=null,oe.set(-1,0,0,0)}}}function s(){let D=!1,ce=null,$=null,oe=null;return{setTest:function(fe){fe?Ce(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(fe){ce!==fe&&!D&&(r.depthMask(fe),ce=fe)},setFunc:function(fe){if($!==fe){switch(fe){case $m:r.depthFunc(r.NEVER);break;case jm:r.depthFunc(r.ALWAYS);break;case Km:r.depthFunc(r.LESS);break;case nc:r.depthFunc(r.LEQUAL);break;case Zm:r.depthFunc(r.EQUAL);break;case Jm:r.depthFunc(r.GEQUAL);break;case Qm:r.depthFunc(r.GREATER);break;case e_:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}$=fe}},setLocked:function(fe){D=fe},setClear:function(fe){oe!==fe&&(r.clearDepth(fe),oe=fe)},reset:function(){D=!1,ce=null,$=null,oe=null}}}function a(){let D=!1,ce=null,$=null,oe=null,fe=null,$e=null,st=null,pt=null,ke=null;return{setTest:function(me){D||(me?Ce(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function(me){ce!==me&&!D&&(r.stencilMask(me),ce=me)},setFunc:function(me,se,Se){($!==me||oe!==se||fe!==Se)&&(r.stencilFunc(me,se,Se),$=me,oe=se,fe=Se)},setOp:function(me,se,Se){($e!==me||st!==se||pt!==Se)&&(r.stencilOp(me,se,Se),$e=me,st=se,pt=Se)},setLocked:function(me){D=me},setClear:function(me){ke!==me&&(r.clearStencil(me),ke=me)},reset:function(){D=!1,ce=null,$=null,oe=null,fe=null,$e=null,st=null,pt=null,ke=null}}}const o=new i,l=new s,c=new a,h=new WeakMap,d=new WeakMap;let u={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,v=null,M=null,S=null,w=null,A=null,L=null,x=!1,b=null,k=null,X=null,I=null,F=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,H=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=H>=2);let ee=null,R={};const B=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),he=new zt().fromArray(B),ae=new zt().fromArray(Z);function le(D,ce,$,oe){const fe=new Uint8Array(4),$e=r.createTexture();r.bindTexture(D,$e),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<$;st++)n&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(ce,0,r.RGBA,1,1,oe,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D(ce+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return $e}const pe={};pe[r.TEXTURE_2D]=le(r.TEXTURE_2D,r.TEXTURE_2D,1),pe[r.TEXTURE_CUBE_MAP]=le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(pe[r.TEXTURE_2D_ARRAY]=le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),pe[r.TEXTURE_3D]=le(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(r.DEPTH_TEST),l.setFunc(nc),Ee(!1),Y(Ah),Ce(r.CULL_FACE),Ae(Yi);function Ce(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function ye(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function je(D,ce){return p[D]!==ce?(r.bindFramebuffer(D,ce),p[D]=ce,n&&(D===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=ce),D===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=ce)),!0):!1}function at(D,ce){let $=_,oe=!1;if(D)if($=g.get(ce),$===void 0&&($=[],g.set(ce,$)),D.isWebGLMultipleRenderTargets){const fe=D.texture;if($.length!==fe.length||$[0]!==r.COLOR_ATTACHMENT0){for(let $e=0,st=fe.length;$e<st;$e++)$[$e]=r.COLOR_ATTACHMENT0+$e;$.length=fe.length,oe=!0}}else $[0]!==r.COLOR_ATTACHMENT0&&($[0]=r.COLOR_ATTACHMENT0,oe=!0);else $[0]!==r.BACK&&($[0]=r.BACK,oe=!0);oe&&(t.isWebGL2?r.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Ie(D){return m!==D?(r.useProgram(D),m=D,!0):!1}const U={[ns]:r.FUNC_ADD,[Fm]:r.FUNC_SUBTRACT,[zm]:r.FUNC_REVERSE_SUBTRACT};if(n)U[Ph]=r.MIN,U[Lh]=r.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(U[Ph]=D.MIN_EXT,U[Lh]=D.MAX_EXT)}const et={[Bm]:r.ZERO,[km]:r.ONE,[Gm]:r.SRC_COLOR,[Sf]:r.SRC_ALPHA,[qm]:r.SRC_ALPHA_SATURATE,[Xm]:r.DST_COLOR,[Vm]:r.DST_ALPHA,[Hm]:r.ONE_MINUS_SRC_COLOR,[yf]:r.ONE_MINUS_SRC_ALPHA,[Ym]:r.ONE_MINUS_DST_COLOR,[Wm]:r.ONE_MINUS_DST_ALPHA};function Ae(D,ce,$,oe,fe,$e,st,pt){if(D===Yi){f===!0&&(ye(r.BLEND),f=!1);return}if(f===!1&&(Ce(r.BLEND),f=!0),D!==Nm){if(D!==y||pt!==x){if((v!==ns||w!==ns)&&(r.blendEquation(r.FUNC_ADD),v=ns,w=ns),pt)switch(D){case ps:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wh:r.blendFunc(r.ONE,r.ONE);break;case Ch:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:break}else switch(D){case ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ch:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:break}M=null,S=null,A=null,L=null,y=D,x=pt}return}fe=fe||ce,$e=$e||$,st=st||oe,(ce!==v||fe!==w)&&(r.blendEquationSeparate(U[ce],U[fe]),v=ce,w=fe),($!==M||oe!==S||$e!==A||st!==L)&&(r.blendFuncSeparate(et[$],et[oe],et[$e],et[st]),M=$,S=oe,A=$e,L=st),y=D,x=!1}function Re(D,ce){D.side===ii?ye(r.CULL_FACE):Ce(r.CULL_FACE);let $=D.side===fn;ce&&($=!$),Ee($),D.blending===ps&&D.transparent===!1?Ae(Yi):Ae(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const oe=D.stencilWrite;c.setTest(oe),oe&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),be(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ce(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(D){b!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),b=D)}function Y(D){D!==Im?(Ce(r.CULL_FACE),D!==k&&(D===Ah?r.cullFace(r.BACK):D===Om?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),k=D}function ze(D){D!==X&&(j&&r.lineWidth(D),X=D)}function be(D,ce,$){D?(Ce(r.POLYGON_OFFSET_FILL),(I!==ce||F!==$)&&(r.polygonOffset(ce,$),I=ce,F=$)):ye(r.POLYGON_OFFSET_FILL)}function We(D){D?Ce(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)}function ot(D){D===void 0&&(D=r.TEXTURE0+z-1),ee!==D&&(r.activeTexture(D),ee=D)}function ft(D,ce,$){$===void 0&&(ee===null?$=r.TEXTURE0+z-1:$=ee);let oe=R[$];oe===void 0&&(oe={type:void 0,texture:void 0},R[$]=oe),(oe.type!==D||oe.texture!==ce)&&(ee!==$&&(r.activeTexture($),ee=$),r.bindTexture(D,ce||pe[D]),oe.type=D,oe.texture=ce)}function C(){const D=R[ee];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function E(){try{r.compressedTexImage2D.apply(r,arguments)}catch{}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch{}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch{}}function re(){try{r.texSubImage3D.apply(r,arguments)}catch{}}function P(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch{}}function ne(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch{}}function ie(){try{r.texStorage2D.apply(r,arguments)}catch{}}function q(){try{r.texStorage3D.apply(r,arguments)}catch{}}function Me(){try{r.texImage2D.apply(r,arguments)}catch{}}function we(){try{r.texImage3D.apply(r,arguments)}catch{}}function Te(D){he.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),he.copy(D))}function xe(D){ae.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),ae.copy(D))}function ve(D,ce){let $=d.get(ce);$===void 0&&($=new WeakMap,d.set(ce,$));let oe=$.get(D);oe===void 0&&(oe=r.getUniformBlockIndex(ce,D.name),$.set(D,oe))}function de(D,ce){const oe=d.get(ce).get(D);h.get(ce)!==oe&&(r.uniformBlockBinding(ce,oe,D.__bindingPointIndex),h.set(ce,oe))}function Be(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ee=null,R={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,v=null,M=null,S=null,w=null,A=null,L=null,x=!1,b=null,k=null,X=null,I=null,F=null,he.set(0,0,r.canvas.width,r.canvas.height),ae.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ce,disable:ye,bindFramebuffer:je,drawBuffers:at,useProgram:Ie,setBlending:Ae,setMaterial:Re,setFlipSided:Ee,setCullFace:Y,setLineWidth:ze,setPolygonOffset:be,setScissorTest:We,activeTexture:ot,bindTexture:ft,unbindTexture:C,compressedTexImage2D:E,compressedTexImage3D:J,texImage2D:Me,texImage3D:we,updateUBOMapping:ve,uniformBlockBinding:de,texStorage2D:ie,texStorage3D:q,texSubImage2D:te,texSubImage3D:re,compressedTexSubImage2D:P,compressedTexSubImage3D:ne,scissor:Te,viewport:xe,reset:Be}}function TM(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,E){return f?new OffscreenCanvas(C,E):da("canvas")}function v(C,E,J,te){let re=1;if((C.width>te||C.height>te)&&(re=te/Math.max(C.width,C.height)),re<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const P=E?lc:Math.floor,ne=P(re*C.width),ie=P(re*C.height);_===void 0&&(_=y(ne,ie));const q=J?y(ne,ie):_;return q.width=ne,q.height=ie,q.getContext("2d").drawImage(C,0,0,ne,ie),q}else return"data"in C,C;return C}function M(C){return ru(C.width)&&ru(C.height)}function S(C){return o?!1:C.wrapS!==Jn||C.wrapT!==Jn||C.minFilter!==nn&&C.minFilter!==Un}function w(C,E){return C.generateMipmaps&&E&&C.minFilter!==nn&&C.minFilter!==Un}function A(C){r.generateMipmap(C)}function L(C,E,J,te,re=!1){if(o===!1)return E;if(C!==null&&r[C]!==void 0)return r[C];let P=E;return E===r.RED&&(J===r.FLOAT&&(P=r.R32F),J===r.HALF_FLOAT&&(P=r.R16F),J===r.UNSIGNED_BYTE&&(P=r.R8)),E===r.RG&&(J===r.FLOAT&&(P=r.RG32F),J===r.HALF_FLOAT&&(P=r.RG16F),J===r.UNSIGNED_BYTE&&(P=r.RG8)),E===r.RGBA&&(J===r.FLOAT&&(P=r.RGBA32F),J===r.HALF_FLOAT&&(P=r.RGBA16F),J===r.UNSIGNED_BYTE&&(P=te===Ve&&re===!1?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(P=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(P=r.RGB5_A1)),(P===r.R16F||P===r.R32F||P===r.RG16F||P===r.RG32F||P===r.RGBA16F||P===r.RGBA32F)&&e.get("EXT_color_buffer_float"),P}function x(C,E,J){return w(C,J)===!0||C.isFramebufferTexture&&C.minFilter!==nn&&C.minFilter!==Un?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function b(C){return C===nn||C===Dh||C===Qo?r.NEAREST:r.LINEAR}function k(C){const E=C.target;E.removeEventListener("dispose",k),I(E),E.isVideoTexture&&g.delete(E)}function X(C){const E=C.target;E.removeEventListener("dispose",X),z(E)}function I(C){const E=n.get(C);if(E.__webglInit===void 0)return;const J=C.source,te=m.get(J);if(te){const re=te[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&F(C),Object.keys(te).length===0&&m.delete(J)}n.remove(C)}function F(C){const E=n.get(C);r.deleteTexture(E.__webglTexture);const J=C.source,te=m.get(J);delete te[E.__cacheKey],a.memory.textures--}function z(C){const E=C.texture,J=n.get(C),te=n.get(E);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)r.deleteFramebuffer(J.__webglFramebuffer[re]),J.__webglDepthbuffer&&r.deleteRenderbuffer(J.__webglDepthbuffer[re]);else{if(r.deleteFramebuffer(J.__webglFramebuffer),J.__webglDepthbuffer&&r.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&r.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let re=0;re<J.__webglColorRenderbuffer.length;re++)J.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(J.__webglColorRenderbuffer[re]);J.__webglDepthRenderbuffer&&r.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let re=0,P=E.length;re<P;re++){const ne=n.get(E[re]);ne.__webglTexture&&(r.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(E[re])}n.remove(E),n.remove(C)}let j=0;function H(){j=0}function V(){const C=j;return C>=l,j+=1,C}function ee(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function R(C,E){const J=n.get(C);if(C.isVideoTexture&&ot(C),C.isRenderTargetTexture===!1&&C.version>0&&J.__version!==C.version){const te=C.image;if(te!==null){if(te.complete!==!1){je(J,C,E);return}}}t.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+E)}function B(C,E){const J=n.get(C);if(C.version>0&&J.__version!==C.version){je(J,C,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+E)}function Z(C,E){const J=n.get(C);if(C.version>0&&J.__version!==C.version){je(J,C,E);return}t.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+E)}function he(C,E){const J=n.get(C);if(C.version>0&&J.__version!==C.version){at(J,C,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+E)}const ae={[sc]:r.REPEAT,[Jn]:r.CLAMP_TO_EDGE,[ac]:r.MIRRORED_REPEAT},le={[nn]:r.NEAREST,[Dh]:r.NEAREST_MIPMAP_NEAREST,[Qo]:r.NEAREST_MIPMAP_LINEAR,[Un]:r.LINEAR,[o_]:r.LINEAR_MIPMAP_NEAREST,[ha]:r.LINEAR_MIPMAP_LINEAR},pe={[M_]:r.NEVER,[w_]:r.ALWAYS,[S_]:r.LESS,[E_]:r.LEQUAL,[y_]:r.EQUAL,[A_]:r.GEQUAL,[b_]:r.GREATER,[T_]:r.NOTEQUAL};function Ce(C,E,J){if(J?(r.texParameteri(C,r.TEXTURE_WRAP_S,ae[E.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ae[E.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ae[E.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,le[E.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,le[E.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),E.wrapS!==Jn||E.wrapT,r.texParameteri(C,r.TEXTURE_MAG_FILTER,b(E.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==nn&&E.minFilter),E.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===nn||E.minFilter!==Qo&&E.minFilter!==ha||E.type===Hi&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===ua&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function ye(C,E){let J=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",k));const te=E.source;let re=m.get(te);re===void 0&&(re={},m.set(te,re));const P=ee(E);if(P!==C.__cacheKey){re[P]===void 0&&(re[P]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,J=!0),re[P].usedTimes++;const ne=re[C.__cacheKey];ne!==void 0&&(re[C.__cacheKey].usedTimes--,ne.usedTimes===0&&F(E)),C.__cacheKey=P,C.__webglTexture=re[P].texture}return J}function je(C,E,J){let te=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=r.TEXTURE_3D);const re=ye(C,E),P=E.source;t.bindTexture(te,C.__webglTexture,r.TEXTURE0+J);const ne=n.get(P);if(P.version!==ne.__version||re===!0){t.activeTexture(r.TEXTURE0+J),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const ie=S(E)&&M(E.image)===!1;let q=v(E.image,ie,!1,h);q=ft(E,q);const Me=M(q)||o,we=s.convert(E.format,E.colorSpace);let Te=s.convert(E.type),xe=L(E.internalFormat,we,Te,E.colorSpace);Ce(te,E,Me);let ve;const de=E.mipmaps,Be=o&&E.isVideoTexture!==!0,D=ne.__version===void 0||re===!0,ce=x(E,q,Me);if(E.isDepthTexture)xe=r.DEPTH_COMPONENT,o?E.type===Hi?xe=r.DEPTH_COMPONENT32F:E.type===Gi?xe=r.DEPTH_COMPONENT24:E.type===xr?xe=r.DEPTH24_STENCIL8:xe=r.DEPTH_COMPONENT16:E.type,E.format===Mr&&xe===r.DEPTH_COMPONENT&&E.type!==Fc&&E.type!==Gi&&(E.type=Gi,Te=s.convert(E.type)),E.format===As&&xe===r.DEPTH_COMPONENT&&(xe=r.DEPTH_STENCIL,E.type!==xr&&(E.type=xr,Te=s.convert(E.type))),D&&(Be?t.texStorage2D(r.TEXTURE_2D,1,xe,q.width,q.height):t.texImage2D(r.TEXTURE_2D,0,xe,q.width,q.height,0,we,Te,null));else if(E.isDataTexture)if(de.length>0&&Me){Be&&D&&t.texStorage2D(r.TEXTURE_2D,ce,xe,de[0].width,de[0].height);for(let $=0,oe=de.length;$<oe;$++)ve=de[$],Be?t.texSubImage2D(r.TEXTURE_2D,$,0,0,ve.width,ve.height,we,Te,ve.data):t.texImage2D(r.TEXTURE_2D,$,xe,ve.width,ve.height,0,we,Te,ve.data);E.generateMipmaps=!1}else Be?(D&&t.texStorage2D(r.TEXTURE_2D,ce,xe,q.width,q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,q.width,q.height,we,Te,q.data)):t.texImage2D(r.TEXTURE_2D,0,xe,q.width,q.height,0,we,Te,q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Be&&D&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,xe,de[0].width,de[0].height,q.depth);for(let $=0,oe=de.length;$<oe;$++)ve=de[$],E.format!==Qn?we!==null&&(Be?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,ve.width,ve.height,q.depth,we,ve.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,xe,ve.width,ve.height,q.depth,0,ve.data,0,0)):Be?t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,ve.width,ve.height,q.depth,we,Te,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,xe,ve.width,ve.height,q.depth,0,we,Te,ve.data)}else{Be&&D&&t.texStorage2D(r.TEXTURE_2D,ce,xe,de[0].width,de[0].height);for(let $=0,oe=de.length;$<oe;$++)ve=de[$],E.format!==Qn?we!==null&&(Be?t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,ve.width,ve.height,we,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,$,xe,ve.width,ve.height,0,ve.data)):Be?t.texSubImage2D(r.TEXTURE_2D,$,0,0,ve.width,ve.height,we,Te,ve.data):t.texImage2D(r.TEXTURE_2D,$,xe,ve.width,ve.height,0,we,Te,ve.data)}else if(E.isDataArrayTexture)Be?(D&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,xe,q.width,q.height,q.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,we,Te,q.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,q.width,q.height,q.depth,0,we,Te,q.data);else if(E.isData3DTexture)Be?(D&&t.texStorage3D(r.TEXTURE_3D,ce,xe,q.width,q.height,q.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,we,Te,q.data)):t.texImage3D(r.TEXTURE_3D,0,xe,q.width,q.height,q.depth,0,we,Te,q.data);else if(E.isFramebufferTexture){if(D)if(Be)t.texStorage2D(r.TEXTURE_2D,ce,xe,q.width,q.height);else{let $=q.width,oe=q.height;for(let fe=0;fe<ce;fe++)t.texImage2D(r.TEXTURE_2D,fe,xe,$,oe,0,we,Te,null),$>>=1,oe>>=1}}else if(de.length>0&&Me){Be&&D&&t.texStorage2D(r.TEXTURE_2D,ce,xe,de[0].width,de[0].height);for(let $=0,oe=de.length;$<oe;$++)ve=de[$],Be?t.texSubImage2D(r.TEXTURE_2D,$,0,0,we,Te,ve):t.texImage2D(r.TEXTURE_2D,$,xe,we,Te,ve);E.generateMipmaps=!1}else Be?(D&&t.texStorage2D(r.TEXTURE_2D,ce,xe,q.width,q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,we,Te,q)):t.texImage2D(r.TEXTURE_2D,0,xe,we,Te,q);w(E,Me)&&A(te),ne.__version=P.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function at(C,E,J){if(E.image.length!==6)return;const te=ye(C,E),re=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+J);const P=n.get(re);if(re.version!==P.__version||te===!0){t.activeTexture(r.TEXTURE0+J),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const ne=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,q=[];for(let $=0;$<6;$++)!ne&&!ie?q[$]=v(E.image[$],!1,!0,c):q[$]=ie?E.image[$].image:E.image[$],q[$]=ft(E,q[$]);const Me=q[0],we=M(Me)||o,Te=s.convert(E.format,E.colorSpace),xe=s.convert(E.type),ve=L(E.internalFormat,Te,xe,E.colorSpace),de=o&&E.isVideoTexture!==!0,Be=P.__version===void 0||te===!0;let D=x(E,Me,we);Ce(r.TEXTURE_CUBE_MAP,E,we);let ce;if(ne){de&&Be&&t.texStorage2D(r.TEXTURE_CUBE_MAP,D,ve,Me.width,Me.height);for(let $=0;$<6;$++){ce=q[$].mipmaps;for(let oe=0;oe<ce.length;oe++){const fe=ce[oe];E.format!==Qn?Te!==null&&(de?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,0,0,fe.width,fe.height,Te,fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,ve,fe.width,fe.height,0,fe.data)):de?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,0,0,fe.width,fe.height,Te,xe,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,ve,fe.width,fe.height,0,Te,xe,fe.data)}}}else{ce=E.mipmaps,de&&Be&&(ce.length>0&&D++,t.texStorage2D(r.TEXTURE_CUBE_MAP,D,ve,q[0].width,q[0].height));for(let $=0;$<6;$++)if(ie){de?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,q[$].width,q[$].height,Te,xe,q[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ve,q[$].width,q[$].height,0,Te,xe,q[$].data);for(let oe=0;oe<ce.length;oe++){const $e=ce[oe].image[$].image;de?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,0,0,$e.width,$e.height,Te,xe,$e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,ve,$e.width,$e.height,0,Te,xe,$e.data)}}else{de?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Te,xe,q[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ve,Te,xe,q[$]);for(let oe=0;oe<ce.length;oe++){const fe=ce[oe];de?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,0,0,Te,xe,fe.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,ve,Te,xe,fe.image[$])}}}w(E,we)&&A(r.TEXTURE_CUBE_MAP),P.__version=re.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ie(C,E,J,te,re){const P=s.convert(J.format,J.colorSpace),ne=s.convert(J.type),ie=L(J.internalFormat,P,ne,J.colorSpace);n.get(E).__hasExternalTextures||(re===r.TEXTURE_3D||re===r.TEXTURE_2D_ARRAY?t.texImage3D(re,0,ie,E.width,E.height,E.depth,0,P,ne,null):t.texImage2D(re,0,ie,E.width,E.height,0,P,ne,null)),t.bindFramebuffer(r.FRAMEBUFFER,C),We(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,re,n.get(J).__webglTexture,0,be(E)):(re===r.TEXTURE_2D||re>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,re,n.get(J).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function U(C,E,J){if(r.bindRenderbuffer(r.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let te=r.DEPTH_COMPONENT16;if(J||We(E)){const re=E.depthTexture;re&&re.isDepthTexture&&(re.type===Hi?te=r.DEPTH_COMPONENT32F:re.type===Gi&&(te=r.DEPTH_COMPONENT24));const P=be(E);We(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P,te,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,P,te,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,te,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const te=be(E);J&&We(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,E.width,E.height):We(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let re=0;re<te.length;re++){const P=te[re],ne=s.convert(P.format,P.colorSpace),ie=s.convert(P.type),q=L(P.internalFormat,ne,ie,P.colorSpace),Me=be(E);J&&We(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,q,E.width,E.height):We(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Me,q,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,q,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function et(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),R(E.depthTexture,0);const te=n.get(E.depthTexture).__webglTexture,re=be(E);if(E.depthTexture.format===Mr)We(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(E.depthTexture.format===As)We(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ae(C){const E=n.get(C),J=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");et(E.__webglFramebuffer,C)}else if(J){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=r.createRenderbuffer(),U(E.__webglDepthbuffer[te],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),U(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(C,E,J){const te=n.get(C);E!==void 0&&Ie(te.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),J!==void 0&&Ae(C)}function Ee(C){const E=C.texture,J=n.get(C),te=n.get(E);C.addEventListener("dispose",X),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=E.version,a.memory.textures++);const re=C.isWebGLCubeRenderTarget===!0,P=C.isWebGLMultipleRenderTargets===!0,ne=M(C)||o;if(re){J.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)J.__webglFramebuffer[ie]=r.createFramebuffer()}else{if(J.__webglFramebuffer=r.createFramebuffer(),P&&i.drawBuffers){const ie=C.texture;for(let q=0,Me=ie.length;q<Me;q++){const we=n.get(ie[q]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),a.memory.textures++)}}if(o&&C.samples>0&&We(C)===!1){const ie=P?E:[E];J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let q=0;q<ie.length;q++){const Me=ie[q];J.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[q]);const we=s.convert(Me.format,Me.colorSpace),Te=s.convert(Me.type),xe=L(Me.internalFormat,we,Te,Me.colorSpace,C.isXRRenderTarget===!0),ve=be(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,xe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,J.__webglColorRenderbuffer[q])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),U(J.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(re){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),Ce(r.TEXTURE_CUBE_MAP,E,ne);for(let ie=0;ie<6;ie++)Ie(J.__webglFramebuffer[ie],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie);w(E,ne)&&A(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(P){const ie=C.texture;for(let q=0,Me=ie.length;q<Me;q++){const we=ie[q],Te=n.get(we);t.bindTexture(r.TEXTURE_2D,Te.__webglTexture),Ce(r.TEXTURE_2D,we,ne),Ie(J.__webglFramebuffer,C,we,r.COLOR_ATTACHMENT0+q,r.TEXTURE_2D),w(we,ne)&&A(r.TEXTURE_2D)}t.unbindTexture()}else{let ie=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&o&&(ie=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,te.__webglTexture),Ce(ie,E,ne),Ie(J.__webglFramebuffer,C,E,r.COLOR_ATTACHMENT0,ie),w(E,ne)&&A(ie),t.unbindTexture()}C.depthBuffer&&Ae(C)}function Y(C){const E=M(C)||o,J=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,re=J.length;te<re;te++){const P=J[te];if(w(P,E)){const ne=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ie=n.get(P).__webglTexture;t.bindTexture(ne,ie),A(ne),t.unbindTexture()}}}function ze(C){if(o&&C.samples>0&&We(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],J=C.width,te=C.height;let re=r.COLOR_BUFFER_BIT;const P=[],ne=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=n.get(C),q=C.isWebGLMultipleRenderTargets===!0;if(q)for(let Me=0;Me<E.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let Me=0;Me<E.length;Me++){P.push(r.COLOR_ATTACHMENT0+Me),C.depthBuffer&&P.push(ne);const we=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(we===!1&&(C.depthBuffer&&(re|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(re|=r.STENCIL_BUFFER_BIT)),q&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ie.__webglColorRenderbuffer[Me]),we===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ne]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ne])),q){const Te=n.get(E[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Te,0)}r.blitFramebuffer(0,0,J,te,0,0,J,te,re,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,P)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),q)for(let Me=0;Me<E.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,ie.__webglColorRenderbuffer[Me]);const we=n.get(E[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,we,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function be(C){return Math.min(d,C.samples)}function We(C){const E=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ot(C){const E=a.render.frame;g.get(C)!==E&&(g.set(C,E),C.update())}function ft(C,E){const J=C.colorSpace,te=C.format,re=C.type;return C.isCompressedTexture===!0||C.format===oc||J!==hi&&J!==yr&&J===Ve&&o===!1&&(e.has("EXT_sRGB")===!0&&te===Qn?(C.format=oc,C.minFilter=Un,C.generateMipmaps=!1):E=Nf.sRGBToLinear(E)),E}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=R,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=he,this.rebindTextures=Re,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=We}function AM(r,e,t){const n=t.isWebGL2;function i(s,a=yr){let o;if(s===qi)return r.UNSIGNED_BYTE;if(s===Af)return r.UNSIGNED_SHORT_4_4_4_4;if(s===wf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===l_)return r.BYTE;if(s===c_)return r.SHORT;if(s===Fc)return r.UNSIGNED_SHORT;if(s===Tf)return r.INT;if(s===Gi)return r.UNSIGNED_INT;if(s===Hi)return r.FLOAT;if(s===ua)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===h_)return r.ALPHA;if(s===Qn)return r.RGBA;if(s===u_)return r.LUMINANCE;if(s===d_)return r.LUMINANCE_ALPHA;if(s===Mr)return r.DEPTH_COMPONENT;if(s===As)return r.DEPTH_STENCIL;if(s===oc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===f_)return r.RED;if(s===Cf)return r.RED_INTEGER;if(s===p_)return r.RG;if(s===Rf)return r.RG_INTEGER;if(s===Pf)return r.RGBA_INTEGER;if(s===el||s===tl||s===nl||s===il)if(a===Ve)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===el)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===nl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===il)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===el)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===nl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===il)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Uh||s===Ih||s===Oh||s===Nh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Uh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ih)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Oh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===m_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Fh||s===zh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Fh)return a===Ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===zh)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Bh||s===kh||s===Gh||s===Hh||s===Vh||s===Wh||s===Xh||s===Yh||s===qh||s===$h||s===jh||s===Kh||s===Zh||s===Jh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Bh)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kh)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gh)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hh)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Vh)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wh)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xh)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yh)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qh)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$h)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jh)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kh)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zh)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jh)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===rl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===rl)return a===Ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===__||s===Qh||s===eu||s===tu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===rl)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Qh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===eu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xr?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class wM extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vs extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CM={type:"move"};class Cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(CM)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class RM extends pn{constructor(e,t,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:Mr,h!==Mr&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Mr&&(n=Gi),n===void 0&&h===As&&(n=xr),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class PM extends Lr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const y=[],v=[],M=new In;M.layers.enable(1),M.viewport=new zt;const S=new In;S.layers.enable(2),S.viewport=new zt;const w=[M,S],A=new wM;A.layers.enable(1),A.layers.enable(2);let L=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z=y[B];return Z===void 0&&(Z=new Cl,y[B]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(B){let Z=y[B];return Z===void 0&&(Z=new Cl,y[B]=Z),Z.getGripSpace()},this.getHand=function(B){let Z=y[B];return Z===void 0&&(Z=new Cl,y[B]=Z),Z.getHandSpace()};function b(B){const Z=v.indexOf(B.inputSource);if(Z===-1)return;const he=y[Z];he!==void 0&&(he.update(B.inputSource,B.frame,c||a),he.dispatchEvent({type:B.type,data:B.inputSource}))}function k(){i.removeEventListener("select",b),i.removeEventListener("selectstart",b),i.removeEventListener("selectend",b),i.removeEventListener("squeeze",b),i.removeEventListener("squeezestart",b),i.removeEventListener("squeezeend",b),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",X);for(let B=0;B<y.length;B++){const Z=v[B];Z!==null&&(v[B]=null,y[B].disconnect(Z))}L=null,x=null,e.setRenderTarget(m),p=null,u=null,d=null,i=null,f=null,R.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting},this.setReferenceSpaceType=function(B){o=B,n.isPresenting},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",b),i.addEventListener("selectstart",b),i.addEventListener("selectend",b),i.addEventListener("squeeze",b),i.addEventListener("squeezestart",b),i.addEventListener("squeezeend",b),i.addEventListener("end",k),i.addEventListener("inputsourceschange",X),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:p}),f=new Cr(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,he=null,ae=null;_.depth&&(ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?As:Mr,he=_.stencil?xr:Gi);const le={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(le),i.updateRenderState({layers:[u]}),f=new Cr(u.textureWidth,u.textureHeight,{format:Qn,type:qi,depthTexture:new RM(u.textureWidth,u.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const pe=e.properties.get(f);pe.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),R.setContext(i),R.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(B){for(let Z=0;Z<B.removed.length;Z++){const he=B.removed[Z],ae=v.indexOf(he);ae>=0&&(v[ae]=null,y[ae].disconnect(he))}for(let Z=0;Z<B.added.length;Z++){const he=B.added[Z];let ae=v.indexOf(he);if(ae===-1){for(let pe=0;pe<y.length;pe++)if(pe>=v.length){v.push(he),ae=pe;break}else if(v[pe]===null){v[pe]=he,ae=pe;break}if(ae===-1)break}const le=y[ae];le&&le.connect(he)}}const I=new W,F=new W;function z(B,Z,he){I.setFromMatrixPosition(Z.matrixWorld),F.setFromMatrixPosition(he.matrixWorld);const ae=I.distanceTo(F),le=Z.projectionMatrix.elements,pe=he.projectionMatrix.elements,Ce=le[14]/(le[10]-1),ye=le[14]/(le[10]+1),je=(le[9]+1)/le[5],at=(le[9]-1)/le[5],Ie=(le[8]-1)/le[0],U=(pe[8]+1)/pe[0],et=Ce*Ie,Ae=Ce*U,Re=ae/(-Ie+U),Ee=Re*-Ie;Z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ee),B.translateZ(Re),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Y=Ce+Re,ze=ye+Re,be=et-Ee,We=Ae+(ae-Ee),ot=je*ye/ze*Y,ft=at*ye/ze*Y;B.projectionMatrix.makePerspective(be,We,ot,ft,Y,ze),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function j(B,Z){Z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;A.near=S.near=M.near=B.near,A.far=S.far=M.far=B.far,(L!==A.near||x!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),L=A.near,x=A.far);const Z=B.parent,he=A.cameras;j(A,Z);for(let ae=0;ae<he.length;ae++)j(he[ae],Z);he.length===2?z(A,M,S):A.projectionMatrix.copy(M.projectionMatrix),H(B,A,Z)};function H(B,Z,he){he===null?B.matrix.copy(Z.matrixWorld):(B.matrix.copy(he.matrixWorld),B.matrix.invert(),B.matrix.multiply(Z.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0);const ae=B.children;for(let le=0,pe=ae.length;le<pe;le++)ae[le].updateMatrixWorld(!0);B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=bo*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)};let V=null;function ee(B,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){const he=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ae=!1;he.length!==A.cameras.length&&(A.cameras.length=0,ae=!0);for(let le=0;le<he.length;le++){const pe=he[le];let Ce=null;if(p!==null)Ce=p.getViewport(pe);else{const je=d.getViewSubImage(u,pe);Ce=je.viewport,le===0&&(e.setRenderTargetTextures(f,je.colorTexture,u.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(f))}let ye=w[le];ye===void 0&&(ye=new In,ye.layers.enable(le),ye.viewport=new zt,w[le]=ye),ye.matrix.fromArray(pe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(pe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),le===0&&(A.matrix.copy(ye.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ae===!0&&A.cameras.push(ye)}}for(let he=0;he<y.length;he++){const ae=v[he],le=y[he];ae!==null&&le!==void 0&&le.update(ae,Z,c||a)}V&&V(B,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const R=new qf;R.setAnimationLoop(ee),this.setAnimationLoop=function(B){V=B},this.dispose=function(){}}}function LM(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Wf(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,v,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===fn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===fn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=r.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function DM(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const M=v.program;n.uniformBlockBinding(y,M)}function c(y,v){let M=i[y.id];M===void 0&&(g(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",m));const S=v.program;n.updateUBOMapping(y,S);const w=e.render.frame;s[y.id]!==w&&(u(y),s[y.id]=w)}function h(y){const v=d();y.__bindingPointIndex=v;const M=r.createBuffer(),S=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,S,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return 0}function u(y){const v=i[y.id],M=y.uniforms,S=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,A=M.length;w<A;w++){const L=M[w];if(p(L,w,S)===!0){const x=L.__offset,b=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let X=0;X<b.length;X++){const I=b[X],F=_(I);typeof I=="number"?(L.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,x+k,L.__data)):I.isMatrix3?(L.__data[0]=I.elements[0],L.__data[1]=I.elements[1],L.__data[2]=I.elements[2],L.__data[3]=I.elements[0],L.__data[4]=I.elements[3],L.__data[5]=I.elements[4],L.__data[6]=I.elements[5],L.__data[7]=I.elements[0],L.__data[8]=I.elements[6],L.__data[9]=I.elements[7],L.__data[10]=I.elements[8],L.__data[11]=I.elements[0]):(I.toArray(L.__data,k),k+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,x,L.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(y,v,M){const S=y.value;if(M[v]===void 0){if(typeof S=="number")M[v]=S;else{const w=Array.isArray(S)?S:[S],A=[];for(let L=0;L<w.length;L++)A.push(w[L].clone());M[v]=A}return!0}else if(typeof S=="number"){if(M[v]!==S)return M[v]=S,!0}else{const w=Array.isArray(M[v])?M[v]:[M[v]],A=Array.isArray(S)?S:[S];for(let L=0;L<w.length;L++){const x=w[L];if(x.equals(A[L])===!1)return x.copy(A[L]),!0}}return!1}function g(y){const v=y.uniforms;let M=0;const S=16;let w=0;for(let A=0,L=v.length;A<L;A++){const x=v[A],b={boundary:0,storage:0},k=Array.isArray(x.value)?x.value:[x.value];for(let X=0,I=k.length;X<I;X++){const F=k[X],z=_(F);b.boundary+=z.boundary,b.storage+=z.storage}if(x.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=M,A>0){w=M%S;const X=S-w;w!==0&&X-b.boundary<0&&(M+=S-w,x.__offset=M)}M+=b.storage}return w=M%S,w>0&&(M+=S-w),y.__size=M,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture,v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function f(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:f}}function UM(){const r=da("canvas");return r.style.display="block",r}class Qf{constructor(e={}){const{canvas:t=UM(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ve,this.useLegacyLights=!0,this.toneMapping=Ti,this.toneMappingExposure=1;const v=this;let M=!1,S=0,w=0,A=null,L=-1,x=null;const b=new zt,k=new zt;let X=null;const I=new nt(0);let F=0,z=t.width,j=t.height,H=1,V=null,ee=null;const R=new zt(0,0,z,j),B=new zt(0,0,z,j);let Z=!1;const he=new kc;let ae=!1,le=!1,pe=null;const Ce=new Dt,ye=new qe,je=new W,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return A===null?H:1}let U=n;function et(T,O){for(let K=0;K<T.length;K++){const N=T[K],Q=t.getContext(N,O);if(Q!==null)return Q}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oc}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",oe,!1),U===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),U=et(O,T),U===null)throw et(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext,U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw T}let Ae,Re,Ee,Y,ze,be,We,ot,ft,C,E,J,te,re,P,ne,ie,q,Me,we,Te,xe,ve,de;function Be(){Ae=new Vv(U),Re=new Fv(U,Ae,e),Ae.init(Re),xe=new AM(U,Ae,Re),Ee=new bM(U,Ae,Re),Y=new Yv(U),ze=new hM,be=new TM(U,Ae,Ee,ze,Re,xe,Y),We=new Bv(v),ot=new Hv(v),ft=new ng(U,Re),ve=new Ov(U,Ae,ft,Re),C=new Wv(U,ft,Y,ve),E=new Kv(U,C,ft,Y),Me=new jv(U,Re,be),ne=new zv(ze),J=new cM(v,We,ot,Ae,Re,ve,ne),te=new LM(v,ze),re=new dM,P=new vM(Ae,Re),q=new Iv(v,We,ot,Ee,E,u,l),ie=new EM(v,E,Re),de=new DM(U,Y,Re,Ee),we=new Nv(U,Ae,Y,Re),Te=new Xv(U,Ae,Y,Re),Y.programs=J.programs,v.capabilities=Re,v.extensions=Ae,v.properties=ze,v.renderLists=re,v.shadowMap=ie,v.state=Ee,v.info=Y}Be();const D=new PM(v,U);this.xr=D,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(z,j,!1))},this.getSize=function(T){return T.set(z,j)},this.setSize=function(T,O,K=!0){D.isPresenting||(z=T,j=O,t.width=Math.floor(T*H),t.height=Math.floor(O*H),K===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O))},this.getDrawingBufferSize=function(T){return T.set(z*H,j*H).floor()},this.setDrawingBufferSize=function(T,O,K){z=T,j=O,H=K,t.width=Math.floor(T*K),t.height=Math.floor(O*K),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,O,K,N){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,O,K,N),Ee.viewport(b.copy(R).multiplyScalar(H).floor())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,O,K,N){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,O,K,N),Ee.scissor(k.copy(B).multiplyScalar(H).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){Ee.setScissorTest(Z=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){ee=T},this.getClearColor=function(T){return T.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(T=!0,O=!0,K=!0){let N=0;if(T){let Q=!1;if(A!==null){const ue=A.texture.format;Q=ue===Pf||ue===Rf||ue===Cf}if(Q){const ue=A.texture.type,ge=ue===qi||ue===Gi||ue===Fc||ue===xr||ue===Af||ue===wf,Pe=q.getClearColor(),Ne=q.getClearAlpha(),Xe=Pe.r,Fe=Pe.g,Oe=Pe.b;ge?(p[0]=Xe,p[1]=Fe,p[2]=Oe,p[3]=Ne,U.clearBufferuiv(U.COLOR,0,p)):(g[0]=Xe,g[1]=Fe,g[2]=Oe,g[3]=Ne,U.clearBufferiv(U.COLOR,0,g))}else N|=U.COLOR_BUFFER_BIT}O&&(N|=U.DEPTH_BUFFER_BIT),K&&(N|=U.STENCIL_BUFFER_BIT),U.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),re.dispose(),P.dispose(),ze.dispose(),We.dispose(),ot.dispose(),E.dispose(),ve.dispose(),de.dispose(),J.dispose(),D.dispose(),D.removeEventListener("sessionstart",me),D.removeEventListener("sessionend",se),pe&&(pe.dispose(),pe=null),Se.stop()};function ce(T){T.preventDefault(),M=!0}function $(){M=!1;const T=Y.autoReset,O=ie.enabled,K=ie.autoUpdate,N=ie.needsUpdate,Q=ie.type;Be(),Y.autoReset=T,ie.enabled=O,ie.autoUpdate=K,ie.needsUpdate=N,ie.type=Q}function oe(T){}function fe(T){const O=T.target;O.removeEventListener("dispose",fe),$e(O)}function $e(T){st(T),ze.remove(T)}function st(T){const O=ze.get(T).programs;O!==void 0&&(O.forEach(function(K){J.releaseProgram(K)}),T.isShaderMaterial&&J.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,K,N,Q,ue){O===null&&(O=at);const ge=Q.isMesh&&Q.matrixWorld.determinant()<0,Pe=lt(T,O,K,N,Q);Ee.setMaterial(N,ge);let Ne=K.index,Xe=1;N.wireframe===!0&&(Ne=C.getWireframeAttribute(K),Xe=2);const Fe=K.drawRange,Oe=K.attributes.position;let ct=Fe.start*Xe,St=(Fe.start+Fe.count)*Xe;ue!==null&&(ct=Math.max(ct,ue.start*Xe),St=Math.min(St,(ue.start+ue.count)*Xe)),Ne!==null?(ct=Math.max(ct,0),St=Math.min(St,Ne.count)):Oe!=null&&(ct=Math.max(ct,0),St=Math.min(St,Oe.count));const Gn=St-ct;if(Gn<0||Gn===1/0)return;ve.setup(Q,N,Pe,K,Ne);let ui,At=we;if(Ne!==null&&(ui=ft.get(Ne),At=Te,At.setIndex(ui)),Q.isMesh)N.wireframe===!0?(Ee.setLineWidth(N.wireframeLinewidth*Ie()),At.setMode(U.LINES)):At.setMode(U.TRIANGLES);else if(Q.isLine){let rt=N.linewidth;rt===void 0&&(rt=1),Ee.setLineWidth(rt*Ie()),Q.isLineSegments?At.setMode(U.LINES):Q.isLineLoop?At.setMode(U.LINE_LOOP):At.setMode(U.LINE_STRIP)}else Q.isPoints?At.setMode(U.POINTS):Q.isSprite&&At.setMode(U.TRIANGLES);if(Q.isInstancedMesh)At.renderInstances(ct,Gn,Q.count);else if(K.isInstancedBufferGeometry){const rt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Uo=Math.min(K.instanceCount,rt);At.renderInstances(ct,Gn,Uo)}else At.render(ct,Gn)},this.compile=function(T,O){function K(N,Q,ue){N.transparent===!0&&N.side===ii&&N.forceSinglePass===!1?(N.side=fn,N.needsUpdate=!0,ht(N,Q,ue),N.side=Ci,N.needsUpdate=!0,ht(N,Q,ue),N.side=ii):ht(N,Q,ue)}m=P.get(T),m.init(),y.push(m),T.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights(v.useLegacyLights),T.traverse(function(N){const Q=N.material;if(Q)if(Array.isArray(Q))for(let ue=0;ue<Q.length;ue++){const ge=Q[ue];K(ge,T,N)}else K(Q,T,N)}),y.pop(),m=null};let pt=null;function ke(T){pt&&pt(T)}function me(){Se.stop()}function se(){Se.start()}const Se=new qf;Se.setAnimationLoop(ke),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(T){pt=T,D.setAnimationLoop(T),T===null?Se.stop():Se.start()},D.addEventListener("sessionstart",me),D.addEventListener("sessionend",se),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0||M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(O),O=D.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,A),m=P.get(T,y.length),m.init(),y.push(m),Ce.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),he.setFromProjectionMatrix(Ce),le=this.localClippingEnabled,ae=ne.init(this.clippingPlanes,le),_=re.get(T,f.length),_.init(),f.push(_),Ue(T,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(V,ee),this.info.render.frame++,ae===!0&&ne.beginShadows();const K=m.state.shadowsArray;if(ie.render(K,T,O),ae===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(_,T),m.setupLights(v.useLegacyLights),O.isArrayCamera){const N=O.cameras;for(let Q=0,ue=N.length;Q<ue;Q++){const ge=N[Q];Ge(_,T,ge,ge.viewport)}}else Ge(_,T,O);A!==null&&(be.updateMultisampleRenderTarget(A),be.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,O),ve.resetDefaultState(),L=-1,x=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Ue(T,O,K,N){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||he.intersectsSprite(T)){N&&je.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ce);const ge=E.update(T),Pe=T.material;Pe.visible&&_.push(T,ge,Pe,K,je.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||he.intersectsObject(T))){const ge=E.update(T),Pe=T.material;if(N&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),je.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),je.copy(ge.boundingSphere.center)),je.applyMatrix4(T.matrixWorld).applyMatrix4(Ce)),Array.isArray(Pe)){const Ne=ge.groups;for(let Xe=0,Fe=Ne.length;Xe<Fe;Xe++){const Oe=Ne[Xe],ct=Pe[Oe.materialIndex];ct&&ct.visible&&_.push(T,ge,ct,K,je.z,Oe)}}else Pe.visible&&_.push(T,ge,Pe,K,je.z,null)}}const ue=T.children;for(let ge=0,Pe=ue.length;ge<Pe;ge++)Ue(ue[ge],O,K,N)}function Ge(T,O,K,N){const Q=T.opaque,ue=T.transmissive,ge=T.transparent;m.setupLightsView(K),ae===!0&&ne.setGlobalState(v.clippingPlanes,K),ue.length>0&&bt(Q,ue,O,K),N&&Ee.viewport(b.copy(N)),Q.length>0&&He(Q,O,K),ue.length>0&&He(ue,O,K),ge.length>0&&He(ge,O,K),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function bt(T,O,K,N){const Q=Re.isWebGL2;pe===null&&(pe=new Cr(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?ua:qi,minFilter:ha,samples:Q?4:0})),v.getDrawingBufferSize(ye),Q?pe.setSize(ye.x,ye.y):pe.setSize(lc(ye.x),lc(ye.y));const ue=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(I),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();const ge=v.toneMapping;v.toneMapping=Ti,He(T,K,N),be.updateMultisampleRenderTarget(pe),be.updateRenderTargetMipmap(pe);let Pe=!1;for(let Ne=0,Xe=O.length;Ne<Xe;Ne++){const Fe=O[Ne],Oe=Fe.object,ct=Fe.geometry,St=Fe.material,Gn=Fe.group;if(St.side===ii&&Oe.layers.test(N.layers)){const ui=St.side;St.side=fn,St.needsUpdate=!0,_t(Oe,K,N,ct,St,Gn),St.side=ui,St.needsUpdate=!0,Pe=!0}}Pe===!0&&(be.updateMultisampleRenderTarget(pe),be.updateRenderTargetMipmap(pe)),v.setRenderTarget(ue),v.setClearColor(I,F),v.toneMapping=ge}function He(T,O,K){const N=O.isScene===!0?O.overrideMaterial:null;for(let Q=0,ue=T.length;Q<ue;Q++){const ge=T[Q],Pe=ge.object,Ne=ge.geometry,Xe=N===null?ge.material:N,Fe=ge.group;Pe.layers.test(K.layers)&&_t(Pe,O,K,Ne,Xe,Fe)}}function _t(T,O,K,N,Q,ue){T.onBeforeRender(v,O,K,N,Q,ue),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(v,O,K,N,T,ue),Q.transparent===!0&&Q.side===ii&&Q.forceSinglePass===!1?(Q.side=fn,Q.needsUpdate=!0,v.renderBufferDirect(K,O,N,Q,T,ue),Q.side=Ci,Q.needsUpdate=!0,v.renderBufferDirect(K,O,N,Q,T,ue),Q.side=ii):v.renderBufferDirect(K,O,N,Q,T,ue),T.onAfterRender(v,O,K,N,Q,ue)}function ht(T,O,K){O.isScene!==!0&&(O=at);const N=ze.get(T),Q=m.state.lights,ue=m.state.shadowsArray,ge=Q.state.version,Pe=J.getParameters(T,Q.state,ue,O,K),Ne=J.getProgramCacheKey(Pe);let Xe=N.programs;N.environment=T.isMeshStandardMaterial?O.environment:null,N.fog=O.fog,N.envMap=(T.isMeshStandardMaterial?ot:We).get(T.envMap||N.environment),Xe===void 0&&(T.addEventListener("dispose",fe),Xe=new Map,N.programs=Xe);let Fe=Xe.get(Ne);if(Fe!==void 0){if(N.currentProgram===Fe&&N.lightsStateVersion===ge)return mn(T,Pe),Fe}else Pe.uniforms=J.getUniforms(T),T.onBuild(K,Pe,v),T.onBeforeCompile(Pe,v),Fe=J.acquireProgram(Pe,Ne),Xe.set(Ne,Fe),N.uniforms=Pe.uniforms;const Oe=N.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=ne.uniform),mn(T,Pe),N.needsLights=_n(T),N.lightsStateVersion=ge,N.needsLights&&(Oe.ambientLightColor.value=Q.state.ambient,Oe.lightProbe.value=Q.state.probe,Oe.directionalLights.value=Q.state.directional,Oe.directionalLightShadows.value=Q.state.directionalShadow,Oe.spotLights.value=Q.state.spot,Oe.spotLightShadows.value=Q.state.spotShadow,Oe.rectAreaLights.value=Q.state.rectArea,Oe.ltc_1.value=Q.state.rectAreaLTC1,Oe.ltc_2.value=Q.state.rectAreaLTC2,Oe.pointLights.value=Q.state.point,Oe.pointLightShadows.value=Q.state.pointShadow,Oe.hemisphereLights.value=Q.state.hemi,Oe.directionalShadowMap.value=Q.state.directionalShadowMap,Oe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Oe.spotShadowMap.value=Q.state.spotShadowMap,Oe.spotLightMatrix.value=Q.state.spotLightMatrix,Oe.spotLightMap.value=Q.state.spotLightMap,Oe.pointShadowMap.value=Q.state.pointShadowMap,Oe.pointShadowMatrix.value=Q.state.pointShadowMatrix);const ct=Fe.getUniforms(),St=co.seqWithValue(ct.seq,Oe);return N.currentProgram=Fe,N.uniformsList=St,Fe}function mn(T,O){const K=ze.get(T);K.outputColorSpace=O.outputColorSpace,K.instancing=O.instancing,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function lt(T,O,K,N,Q){O.isScene!==!0&&(O=at),be.resetTextureUnits();const ue=O.fog,ge=N.isMeshStandardMaterial?O.environment:null,Pe=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:hi,Ne=(N.isMeshStandardMaterial?ot:We).get(N.envMap||ge),Xe=N.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Fe=!!K.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Oe=!!K.morphAttributes.position,ct=!!K.morphAttributes.normal,St=!!K.morphAttributes.color,Gn=N.toneMapped?v.toneMapping:Ti,ui=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,At=ui!==void 0?ui.length:0,rt=ze.get(N),Uo=m.state.lights;if(ae===!0&&(le===!0||T!==x)){const gn=T===x&&N.id===L;ne.setState(N,T,gn)}let Ot=!1;N.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Uo.state.version||rt.outputColorSpace!==Pe||Q.isInstancedMesh&&rt.instancing===!1||!Q.isInstancedMesh&&rt.instancing===!0||Q.isSkinnedMesh&&rt.skinning===!1||!Q.isSkinnedMesh&&rt.skinning===!0||rt.envMap!==Ne||N.fog===!0&&rt.fog!==ue||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==ne.numPlanes||rt.numIntersection!==ne.numIntersection)||rt.vertexAlphas!==Xe||rt.vertexTangents!==Fe||rt.morphTargets!==Oe||rt.morphNormals!==ct||rt.morphColors!==St||rt.toneMapping!==Gn||Re.isWebGL2===!0&&rt.morphTargetsCount!==At)&&(Ot=!0):(Ot=!0,rt.__version=N.version);let Qi=rt.currentProgram;Ot===!0&&(Qi=ht(N,O,Q));let Wc=!1,Rs=!1,Io=!1;const Zt=Qi.getUniforms(),er=rt.uniforms;if(Ee.useProgram(Qi.program)&&(Wc=!0,Rs=!0,Io=!0),N.id!==L&&(L=N.id,Rs=!0),Wc||x!==T){if(Zt.setValue(U,"projectionMatrix",T.projectionMatrix),Re.logarithmicDepthBuffer&&Zt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),x!==T&&(x=T,Rs=!0,Io=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const gn=Zt.map.cameraPosition;gn!==void 0&&gn.setValue(U,je.setFromMatrixPosition(T.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Zt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||Q.isSkinnedMesh)&&Zt.setValue(U,"viewMatrix",T.matrixWorldInverse)}if(Q.isSkinnedMesh){Zt.setOptional(U,Q,"bindMatrix"),Zt.setOptional(U,Q,"bindMatrixInverse");const gn=Q.skeleton;gn&&Re.floatVertexTextures&&(gn.boneTexture===null&&gn.computeBoneTexture(),Zt.setValue(U,"boneTexture",gn.boneTexture,be),Zt.setValue(U,"boneTextureSize",gn.boneTextureSize))}const Oo=K.morphAttributes;if((Oo.position!==void 0||Oo.normal!==void 0||Oo.color!==void 0&&Re.isWebGL2===!0)&&Me.update(Q,K,Qi),(Rs||rt.receiveShadow!==Q.receiveShadow)&&(rt.receiveShadow=Q.receiveShadow,Zt.setValue(U,"receiveShadow",Q.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(er.envMap.value=Ne,er.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Rs&&(Zt.setValue(U,"toneMappingExposure",v.toneMappingExposure),rt.needsLights&&Tt(er,Io),ue&&N.fog===!0&&te.refreshFogUniforms(er,ue),te.refreshMaterialUniforms(er,N,H,j,pe),co.upload(U,rt.uniformsList,er,be)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(co.upload(U,rt.uniformsList,er,be),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Zt.setValue(U,"center",Q.center),Zt.setValue(U,"modelViewMatrix",Q.modelViewMatrix),Zt.setValue(U,"normalMatrix",Q.normalMatrix),Zt.setValue(U,"modelMatrix",Q.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const gn=N.uniformsGroups;for(let No=0,tp=gn.length;No<tp;No++)if(Re.isWebGL2){const Xc=gn[No];de.update(Xc,Qi),de.bind(Xc,Qi)}}return Qi}function Tt(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function _n(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,O,K){ze.get(T.texture).__webglTexture=O,ze.get(T.depthTexture).__webglTexture=K;const N=ze.get(T);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=K===void 0,N.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const K=ze.get(T);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,K=0){A=T,S=O,w=K;let N=!0,Q=null,ue=!1,ge=!1;if(T){const Ne=ze.get(T);Ne.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(U.FRAMEBUFFER,null),N=!1):Ne.__webglFramebuffer===void 0?be.setupRenderTarget(T):Ne.__hasExternalTextures&&be.rebindTextures(T,ze.get(T.texture).__webglTexture,ze.get(T.depthTexture).__webglTexture);const Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ge=!0);const Fe=ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Q=Fe[O],ue=!0):Re.isWebGL2&&T.samples>0&&be.useMultisampledRTT(T)===!1?Q=ze.get(T).__webglMultisampledFramebuffer:Q=Fe,b.copy(T.viewport),k.copy(T.scissor),X=T.scissorTest}else b.copy(R).multiplyScalar(H).floor(),k.copy(B).multiplyScalar(H).floor(),X=Z;if(Ee.bindFramebuffer(U.FRAMEBUFFER,Q)&&Re.drawBuffers&&N&&Ee.drawBuffers(T,Q),Ee.viewport(b),Ee.scissor(k),Ee.setScissorTest(X),ue){const Ne=ze.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ne.__webglTexture,K)}else if(ge){const Ne=ze.get(T.texture),Xe=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ne.__webglTexture,K||0,Xe)}L=-1},this.readRenderTargetPixels=function(T,O,K,N,Q,ue,ge){if(!(T&&T.isWebGLRenderTarget))return;let Pe=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Pe=Pe[ge]),Pe){Ee.bindFramebuffer(U.FRAMEBUFFER,Pe);try{const Ne=T.texture,Xe=Ne.format,Fe=Ne.type;if(Xe!==Qn&&xe.convert(Xe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT))return;const Oe=Fe===ua&&(Ae.has("EXT_color_buffer_half_float")||Re.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Fe!==qi&&xe.convert(Fe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Hi&&(Re.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!Oe)return;O>=0&&O<=T.width-N&&K>=0&&K<=T.height-Q&&U.readPixels(O,K,N,Q,xe.convert(Xe),xe.convert(Fe),ue)}finally{const Ne=A!==null?ze.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(T,O,K=0){const N=Math.pow(2,-K),Q=Math.floor(O.image.width*N),ue=Math.floor(O.image.height*N);be.setTexture2D(O,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,T.x,T.y,Q,ue),Ee.unbindTexture()},this.copyTextureToTexture=function(T,O,K,N=0){const Q=O.image.width,ue=O.image.height,ge=xe.convert(K.format),Pe=xe.convert(K.type);be.setTexture2D(K,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,K.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,K.unpackAlignment),O.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,T.x,T.y,Q,ue,ge,Pe,O.image.data):O.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,ge,O.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,N,T.x,T.y,ge,Pe,O.image),N===0&&K.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(T,O,K,N,Q=0){if(v.isWebGL1Renderer)return;const ue=T.max.x-T.min.x+1,ge=T.max.y-T.min.y+1,Pe=T.max.z-T.min.z+1,Ne=xe.convert(N.format),Xe=xe.convert(N.type);let Fe;if(N.isData3DTexture)be.setTexture3D(N,0),Fe=U.TEXTURE_3D;else if(N.isDataArrayTexture)be.setTexture2DArray(N,0),Fe=U.TEXTURE_2D_ARRAY;else return;U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const Oe=U.getParameter(U.UNPACK_ROW_LENGTH),ct=U.getParameter(U.UNPACK_IMAGE_HEIGHT),St=U.getParameter(U.UNPACK_SKIP_PIXELS),Gn=U.getParameter(U.UNPACK_SKIP_ROWS),ui=U.getParameter(U.UNPACK_SKIP_IMAGES),At=K.isCompressedTexture?K.mipmaps[0]:K.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,At.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,At.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,T.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,T.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,T.min.z),K.isDataTexture||K.isData3DTexture?U.texSubImage3D(Fe,Q,O.x,O.y,O.z,ue,ge,Pe,Ne,Xe,At.data):K.isCompressedArrayTexture?U.compressedTexSubImage3D(Fe,Q,O.x,O.y,O.z,ue,ge,Pe,Ne,At.data):U.texSubImage3D(Fe,Q,O.x,O.y,O.z,ue,ge,Pe,Ne,Xe,At),U.pixelStorei(U.UNPACK_ROW_LENGTH,Oe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ct),U.pixelStorei(U.UNPACK_SKIP_PIXELS,St),U.pixelStorei(U.UNPACK_SKIP_ROWS,Gn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ui),Q===0&&N.generateMipmaps&&U.generateMipmap(Fe),Ee.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?be.setTextureCube(T,0):T.isData3DTexture?be.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?be.setTexture2DArray(T,0):be.setTexture2D(T,0),Ee.unbindTexture()},this.resetState=function(){S=0,w=0,A=null,Ee.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get physicallyCorrectLights(){return!this.useLegacyLights}set physicallyCorrectLights(e){this.useLegacyLights=!e}get outputEncoding(){return this.outputColorSpace===Ve?Sr:Lf}set outputEncoding(e){this.outputColorSpace=e===Sr?Ve:hi}}class IM extends Qf{}IM.prototype.isWebGL1Renderer=!0;class OM extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class NM extends ga{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uf,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Hu={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class FM{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const zM=new FM;class Hc{constructor(e){this.manager=e!==void 0?e:zM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Hc.DEFAULT_MATERIAL_NAME="__DEFAULT";class BM extends Hc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Hu.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=da("img");function l(){h(),Hu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class kM extends Hc{constructor(e){super(e)}load(e,t,n,i){const s=new pn,a=new BM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ep extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Rl=new Dt,Vu=new W,Wu=new W;class GM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kc,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vu),Wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wu),t.updateMatrixWorld(),Rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class HM extends GM{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=bo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class VM extends ep{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new HM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class WM extends ep{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xu{constructor(e,t,n=0,i=1/0){this.ray=new Bf(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera&&(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t)}intersectObject(e,t=!0,n=[]){return hc(e,this,n,t),n.sort(Yu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)hc(e[i],this,n,t);return n.sort(Yu),n}}function Yu(r,e){return r.distance-e.distance}function hc(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)hc(i[s],e,t,!0)}}class qu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(rn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__||(window.__THREE__=Oc));const $u={type:"change"},Pl={type:"start"},ju={type:"end"};class XM extends Lr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nr.ROTATE,MIDDLE:Nr.DOLLY,RIGHT:Nr.PAN},this.touches={ONE:Fr.ROTATE,TWO:Fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",We),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",We),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent($u),n.update(),s=i.NONE},this.update=function(){const P=new W,ne=new Rr().setFromUnitVectors(e.up,new W(0,1,0)),ie=ne.clone().invert(),q=new W,Me=new Rr,we=new W,Te=2*Math.PI;return function(){const ve=n.object.position;P.copy(ve).sub(n.target),P.applyQuaternion(ne),o.setFromVector3(P),n.autoRotate&&s===i.NONE&&x(A()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let de=n.minAzimuthAngle,Be=n.maxAzimuthAngle;return isFinite(de)&&isFinite(Be)&&(de<-Math.PI?de+=Te:de>Math.PI&&(de-=Te),Be<-Math.PI?Be+=Te:Be>Math.PI&&(Be-=Te),de<=Be?o.theta=Math.max(de,Math.min(Be,o.theta)):o.theta=o.theta>(de+Be)/2?Math.max(de,o.theta):Math.min(Be,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),P.setFromSpherical(o),P.applyQuaternion(ie),ve.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,d||q.distanceToSquared(n.object.position)>a||8*(1-Me.dot(n.object.quaternion))>a||we.distanceToSquared(n.target)>0?(n.dispatchEvent($u),q.copy(n.object.position),Me.copy(n.object.quaternion),we.copy(n.target),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",C),n.domElement.removeEventListener("pointerdown",Ae),n.domElement.removeEventListener("pointercancel",Ee),n.domElement.removeEventListener("wheel",be),n.domElement.removeEventListener("pointermove",Re),n.domElement.removeEventListener("pointerup",Ee),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",We),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new qu,l=new qu;let c=1;const h=new W;let d=!1;const u=new qe,p=new qe,g=new qe,_=new qe,m=new qe,f=new qe,y=new qe,v=new qe,M=new qe,S=[],w={};function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function x(P){l.theta-=P}function b(P){l.phi-=P}const k=function(){const P=new W;return function(ie,q){P.setFromMatrixColumn(q,0),P.multiplyScalar(-ie),h.add(P)}}(),X=function(){const P=new W;return function(ie,q){n.screenSpacePanning===!0?P.setFromMatrixColumn(q,1):(P.setFromMatrixColumn(q,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(ie),h.add(P)}}(),I=function(){const P=new W;return function(ie,q){const Me=n.domElement;if(n.object.isPerspectiveCamera){const we=n.object.position;P.copy(we).sub(n.target);let Te=P.length();Te*=Math.tan(n.object.fov/2*Math.PI/180),k(2*ie*Te/Me.clientHeight,n.object.matrix),X(2*q*Te/Me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(ie*(n.object.right-n.object.left)/n.object.zoom/Me.clientWidth,n.object.matrix),X(q*(n.object.top-n.object.bottom)/n.object.zoom/Me.clientHeight,n.object.matrix)):n.enablePan=!1}}();function F(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),d=!0):n.enableZoom=!1}function z(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),d=!0):n.enableZoom=!1}function j(P){u.set(P.clientX,P.clientY)}function H(P){y.set(P.clientX,P.clientY)}function V(P){_.set(P.clientX,P.clientY)}function ee(P){p.set(P.clientX,P.clientY),g.subVectors(p,u).multiplyScalar(n.rotateSpeed);const ne=n.domElement;x(2*Math.PI*g.x/ne.clientHeight),b(2*Math.PI*g.y/ne.clientHeight),u.copy(p),n.update()}function R(P){v.set(P.clientX,P.clientY),M.subVectors(v,y),M.y>0?F(L()):M.y<0&&z(L()),y.copy(v),n.update()}function B(P){m.set(P.clientX,P.clientY),f.subVectors(m,_).multiplyScalar(n.panSpeed),I(f.x,f.y),_.copy(m),n.update()}function Z(P){P.deltaY<0?z(L()):P.deltaY>0&&F(L()),n.update()}function he(P){let ne=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),ne=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),ne=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?x(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),ne=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?x(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),ne=!0;break}ne&&(P.preventDefault(),n.update())}function ae(){if(S.length===1)u.set(S[0].pageX,S[0].pageY);else{const P=.5*(S[0].pageX+S[1].pageX),ne=.5*(S[0].pageY+S[1].pageY);u.set(P,ne)}}function le(){if(S.length===1)_.set(S[0].pageX,S[0].pageY);else{const P=.5*(S[0].pageX+S[1].pageX),ne=.5*(S[0].pageY+S[1].pageY);_.set(P,ne)}}function pe(){const P=S[0].pageX-S[1].pageX,ne=S[0].pageY-S[1].pageY,ie=Math.sqrt(P*P+ne*ne);y.set(0,ie)}function Ce(){n.enableZoom&&pe(),n.enablePan&&le()}function ye(){n.enableZoom&&pe(),n.enableRotate&&ae()}function je(P){if(S.length==1)p.set(P.pageX,P.pageY);else{const ie=re(P),q=.5*(P.pageX+ie.x),Me=.5*(P.pageY+ie.y);p.set(q,Me)}g.subVectors(p,u).multiplyScalar(n.rotateSpeed);const ne=n.domElement;x(2*Math.PI*g.x/ne.clientHeight),b(2*Math.PI*g.y/ne.clientHeight),u.copy(p)}function at(P){if(S.length===1)m.set(P.pageX,P.pageY);else{const ne=re(P),ie=.5*(P.pageX+ne.x),q=.5*(P.pageY+ne.y);m.set(ie,q)}f.subVectors(m,_).multiplyScalar(n.panSpeed),I(f.x,f.y),_.copy(m)}function Ie(P){const ne=re(P),ie=P.pageX-ne.x,q=P.pageY-ne.y,Me=Math.sqrt(ie*ie+q*q);v.set(0,Me),M.set(0,Math.pow(v.y/y.y,n.zoomSpeed)),F(M.y),y.copy(v)}function U(P){n.enableZoom&&Ie(P),n.enablePan&&at(P)}function et(P){n.enableZoom&&Ie(P),n.enableRotate&&je(P)}function Ae(P){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",Re),n.domElement.addEventListener("pointerup",Ee)),E(P),P.pointerType==="touch"?ot(P):Y(P))}function Re(P){n.enabled!==!1&&(P.pointerType==="touch"?ft(P):ze(P))}function Ee(P){J(P),S.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",Re),n.domElement.removeEventListener("pointerup",Ee)),n.dispatchEvent(ju),s=i.NONE}function Y(P){let ne;switch(P.button){case 0:ne=n.mouseButtons.LEFT;break;case 1:ne=n.mouseButtons.MIDDLE;break;case 2:ne=n.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case Nr.DOLLY:if(n.enableZoom===!1)return;H(P),s=i.DOLLY;break;case Nr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;V(P),s=i.PAN}else{if(n.enableRotate===!1)return;j(P),s=i.ROTATE}break;case Nr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;j(P),s=i.ROTATE}else{if(n.enablePan===!1)return;V(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Pl)}function ze(P){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ee(P);break;case i.DOLLY:if(n.enableZoom===!1)return;R(P);break;case i.PAN:if(n.enablePan===!1)return;B(P);break}}function be(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(Pl),Z(P),n.dispatchEvent(ju))}function We(P){n.enabled===!1||n.enablePan===!1||he(P)}function ot(P){switch(te(P),S.length){case 1:switch(n.touches.ONE){case Fr.ROTATE:if(n.enableRotate===!1)return;ae(),s=i.TOUCH_ROTATE;break;case Fr.PAN:if(n.enablePan===!1)return;le(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Fr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(),s=i.TOUCH_DOLLY_PAN;break;case Fr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Pl)}function ft(P){switch(te(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;je(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;at(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;et(P),n.update();break;default:s=i.NONE}}function C(P){n.enabled!==!1&&P.preventDefault()}function E(P){S.push(P)}function J(P){delete w[P.pointerId];for(let ne=0;ne<S.length;ne++)if(S[ne].pointerId==P.pointerId){S.splice(ne,1);return}}function te(P){let ne=w[P.pointerId];ne===void 0&&(ne=new qe,w[P.pointerId]=ne),ne.set(P.pageX,P.pageY)}function re(P){const ne=P.pointerId===S[0].pointerId?S[1]:S[0];return w[ne.pointerId]}n.domElement.addEventListener("contextmenu",C),n.domElement.addEventListener("pointerdown",Ae),n.domElement.addEventListener("pointercancel",Ee),n.domElement.addEventListener("wheel",be,{passive:!1}),this.update()}}class YM{constructor(e){this.controls=null,this.controls=new XM(e.camera,e.renderer.domElement),this.controls.enableDamping=!0,this.controls.enabled=!1,this.controls.dampingFactor=.2,GUI!=null&&this.controls!=null&&this.addGui()}addGui(){GUI.addFolder("controls").add(this.controls,"enabled").onChange(t=>{this.controls.enabled=t})}disableDamping(){this.controls.enableDamping=!1}update(){this.controls!=null&&this.controls.update()}}var na=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),n(++r%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function n(h){for(var d=0;d<e.children.length;d++)e.children[d].style.display=d===h?"block":"none";r=h}var i=(performance||Date).now(),s=i,a=0,o=t(new na.Panel("FPS","#0ff","#002")),l=t(new na.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new na.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){a++;var h=(performance||Date).now();if(l.update(h-i,200),h>=s+1e3&&(o.update(a*1e3/(h-s),100),s=h,a=0,c)){var d=performance.memory;c.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return h},update:function(){i=this.end()},domElement:e,setMode:n}};na.Panel=function(r,e,t){var n=1/0,i=0,s=Math.round,a=s(window.devicePixelRatio||1),o=80*a,l=48*a,c=3*a,h=2*a,d=3*a,u=15*a,p=74*a,g=30*a,_=document.createElement("canvas");_.width=o,_.height=l,_.style.cssText="width:80px;height:48px";var m=_.getContext("2d");return m.font="bold "+9*a+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,o,l),m.fillStyle=e,m.fillText(r,c,h),m.fillRect(d,u,p,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(d,u,p,g),{dom:_,update:function(f,y){n=Math.min(n,f),i=Math.max(i,f),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,o,u),m.fillStyle=e,m.fillText(s(f)+" "+r+" ("+s(n)+"-"+s(i)+")",c,h),m.drawImage(_,d+a,u,p-a,g,d,u,p-a,g),m.fillRect(d+p-a,u,a,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(d+p-a,u,a,s((1-f/y)*g))}}};const qM=na;class $M{constructor(e=document.body){if(this.body=e,this.stats=null,MODE){this.stats=new qM;const t=this.stats.domElement,n=t.style;n.position="fixed",n.top="0px",n.left="0px",n.right="initial",n.bottom="initial",n.zIndex="9999",this.body.appendChild(t)}}raf(){this.stats!=null&&this.stats.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class li{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),li.nextNameID=li.nextNameID||0,this.$name.id="lil-gui-name-"+ ++li.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class jM extends li{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function uc(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const KM={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:uc,toHexString:uc},fa={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},ZM={isPrimitive:!1,match:Array.isArray,fromHexString(r,e,t=1){const n=fa.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(255&n)/255*t},toHexString:([r,e,t],n=1)=>fa.toHexString(r*(n=255/n)<<16^e*n<<8^t*n<<0)},JM={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=fa.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(255&n)/255*t},toHexString:({r,g:e,b:t},n=1)=>fa.toHexString(r*(n=255/n)<<16^e*n<<8^t*n<<0)},QM=[KM,fa,ZM,JM];class eS extends li{constructor(e,t,n,i){var s;super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,QM.find(a=>a.match(s))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=uc(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ll extends li{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class tS extends li{constructor(e,t,n,i,s,a){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=h=>{const d=parseFloat(this.$input.value);isNaN(d)||(this._snapClampSetValue(d+h),this.$input.value=this.getValue())};let t,n,i,s,a,o=!1;const l=h=>{if(o){const d=h.clientX-t,u=h.clientY-n;Math.abs(u)>5?(h.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(d)>5&&c()}if(!o){const d=h.clientY-i;a-=d*this._step*this._arrowKeyMultiplier(h),s+a>this._max?a=this._max-s:s+a<this._min&&(a=this._min-s),this._snapClampSetValue(s+a)}i=h.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{let h=parseFloat(this.$input.value);isNaN(h)||(this._stepExplicit&&(h=this._snap(h)),this.setValue(this._clamp(h)))}),this.$input.addEventListener("keydown",h=>{h.code==="Enter"&&this.$input.blur(),h.code==="ArrowUp"&&(h.preventDefault(),e(this._step*this._arrowKeyMultiplier(h))),h.code==="ArrowDown"&&(h.preventDefault(),e(this._step*this._arrowKeyMultiplier(h)*-1))}),this.$input.addEventListener("wheel",h=>{this._inputFocused&&(h.preventDefault(),e(this._step*this._normalizeMouseWheel(h)))},{passive:!1}),this.$input.addEventListener("mousedown",h=>{t=h.clientX,n=i=h.clientY,o=!0,s=this.getValue(),a=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=u=>{const p=this.$slider.getBoundingClientRect();let g=(_=u,m=p.left,f=p.right,y=this._min,v=this._max,(_-m)/(f-m)*(v-y)+y);var _,m,f,y,v;this._snapClampSetValue(g)},t=u=>{e(u.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n)};let i,s,a=!1;const o=u=>{u.preventDefault(),this._setDraggingStyle(!0),e(u.touches[0].clientX),a=!1},l=u=>{if(a){const p=u.touches[0].clientX-i,g=u.touches[0].clientY-s;Math.abs(p)>Math.abs(g)?o(u):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else u.preventDefault(),e(u.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},h=this._callOnFinishChange.bind(this);let d;this.$slider.addEventListener("mousedown",u=>{this._setDraggingStyle(!0),e(u.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",u=>{u.touches.length>1||(this._hasScrollBar?(i=u.touches[0].clientX,s=u.touches[0].clientY,a=!0):o(u),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",c))},{passive:!1}),this.$slider.addEventListener("wheel",u=>{if(Math.abs(u.deltaX)<Math.abs(u.deltaY)&&this._hasScrollBar)return;u.preventDefault();const p=this._normalizeMouseWheel(u)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(d),d=setTimeout(h,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class nS extends li{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const a=document.createElement("option");a.innerHTML=s,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class iS extends li{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Ku=!1;class Vc{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),o&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Ku&&a&&(function(l){const c=document.createElement("style");c.innerHTML=l;const h=document.querySelector("head link[rel=stylesheet], head style");h?document.head.insertBefore(c,h):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Ku=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,i,s){if(Object(n)===n)return new nS(this,e,t,n);switch(typeof e[t]){case"number":return new tS(this,e,t,n,i,s);case"boolean":return new jM(this,e,t);case"string":return new iS(this,e,t);case"function":return new Ll(this,e,t)}}addColor(e,t,n=1){return new eS(this,e,t,n)}addFolder(e){return new Vc({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Ll||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ll)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const rS=Vc;class sS{constructor(){this.gui=null,window.GUI=null,MODE&&(this.gui=new rS,window.GUI=this.gui)}toOpen(){window.GUI!=null&&this.gui.open()}toClose(){window.GUI!=null&&this.gui.close()}}const aS=window.matchMedia("(max-width: 768px)").matches,Le={plane:{size:2,scale:{init:2,anime:aS?4:6}},camera:{zoom:{init:.06,anime:0},position:{init:{x:-8,y:9,z:9},anime:{x:0,y:1,z:0}},quaternion:{init:{x:-.2948488033976018,y:-.3372367651636157,z:-.11210131524719265,w:.8869999112045233},anime:{x:-.7071064276330687,y:0,z:0,w:.7071071347398497}},rotation:{init:{x:-.7853981633974484,y:-.5611404261704191,z:-.48903721757720997},anime:{x:-1.570795326794897,y:0,z:0}}}};class oS{constructor(e,t){this.params=e,this.bool=t,this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.stats=null,this.init()}init(){this.setRenderer(),this.setScene(),this.setCamera()}updateRenderer(){this.renderer.setSize(this.params.w,this.params.h),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio))}setRendererLight(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.needsUpdate=!0,this.renderer.shadowMap.autoUpdate=!0,this.renderer.shadowMap.type=Mf,this.renderer.outputColorSpace=Ve,this.renderer.toneMapping=Ef,this.renderer.toneMappingExposure=1}setRenderer(){this.renderer=new Qf({antialias:!0,alpha:!0}),this.renderer.shadowMap.enabled=!0,this.setRendererLight(),this.updateRenderer(),document.getElementById("world").appendChild(this.renderer.domElement)}setScene(){this.scene=new OM,this.scene.background=new nt("#eef0f4")}updateCamera(){this.camera.left=.25*this.params.aspect*-1,this.camera.right=.25*this.params.aspect,this.camera.top=.25,this.camera.bottom=.25*-1,this.camera.near=.1,this.camera.far=100,this.camera.position.x=Le.camera.position.init.x,this.camera.position.y=Le.camera.position.init.y,this.camera.position.z=Le.camera.position.init.z,this.camera.zoom=Le.camera.zoom.init,this.camera.updateProjectionMatrix()}setCamera(){this.camera=new $f,this.updateCamera()}raf(){}resize(e){this.bool.isMatchMediaWidth=e.isMatchMediaWidth,this.params.w=e.w,this.params.h=e.h,this.params.aspect=e.aspect,this.params.shorter=e.shorter,this.params.longer=e.longer,this.updateRenderer(),this.updateCamera()}}var lS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

varying vec2 vUv;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>

#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>

#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

uniform sampler2D uTexture;

void main() {
  #include <clipping_planes_fragment>
  vec4 diffuseColor = vec4( diffuse, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive;
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <specularmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <emissivemap_fragment>
  
  #include <lights_lambert_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  
  #include <aomap_fragment>

  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

  #include <envmap_fragment>
  #include <output_fragment>
  #include <tonemapping_fragment>
  #include <encodings_fragment>

  vec4 dist = texture2D(uTexture, vUv);
  gl_FragColor = vec4(dist.rgb * outgoingLight, 1.0);

  
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}`,cS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>

#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>

#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

varying vec2 vUv;
uniform float uScale;
uniform float uTime;
uniform float uProgress;
uniform float uClick;

void main() {
  #include <uv_vertex>
  
  #include <color_vertex>
  #include <morphcolor_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;
  vUv = uv;

  float x = position.x;
  float y = position.y;
  float z = position.z + (sin(uv.y * PI) + sin(uv.x * PI)) * .15 * uProgress * uClick;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(vec3(x, y, z) * uScale, 1.0);
  
  #include <worldpos_vertex>
  #include <envmap_vertex>
  #include <shadowmap_vertex>
  
}`,hS=`#if DEPTH_PACKING == 3200
uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  #include <clipping_planes_fragment>
  vec4 diffuseColor = vec4( 1.0 );
  #if DEPTH_PACKING == 3200
    diffuseColor.a = opacity;
  #endif
  #include <map_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <logdepthbuf_fragment>
  #if DEPTH_PACKING == 3200
    gl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );
  #elif DEPTH_PACKING == 3201
    gl_FragColor = packDepthToRGBA( gl_FragCoord.z );
  #endif
}`,uS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

uniform float uTime;
uniform float uProgress;
uniform float uClick;

void main() {
  #include <uv_vertex>
  #include <skinbase_vertex>
  #ifdef USE_DISPLACEMENTMAP
    #include <beginnormal_vertex>
    #include <morphnormal_vertex>
    #include <skinnormal_vertex>
  #endif
  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  float x = position.x + sin(uv.y * PI) * .15 * uProgress * uClick;
  float y = position.y + sin(uv.x * PI) * .15 * uProgress * uClick;
  float z = position.z;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(vec3(x, y, z) * 1.0, 1.0);
}`;const dS=Math.PI,fS=6,pS=0,mS=0,_S=1;class gS{constructor(e,t,n,i){this.body=e,this.stage=i,this.params=t,this.bool=n,this.isPageEnter=!1,this.isLoaded=!1,this.isMove=!1,this.isZoom=!1,this.isHover=!1,this.isClickClose=!0,this.isClickedPlane=!1,this.timer={move:null},this.grid={col:8,row:5},this.vector={normalize:{x:0,y:0},start:{x:0,y:0},move:{x:0,y:0}},this.anime={move:1},this.imgList=["assets/img/img1.webp","assets/img/img2.webp","assets/img/img3.webp","assets/img/img4.webp","assets/img/img5.webp","assets/img/img6.webp","assets/img/img7.webp","assets/img/img8.webp","assets/img/img9.webp","assets/img/img10.webp","assets/img/img11.webp","assets/img/img12.webp","assets/img/img13.webp","assets/img/img14.webp","assets/img/img15.webp","assets/img/img16.webp","assets/img/img17.webp","assets/img/img18.webp","assets/img/img19.webp","assets/img/img20.webp","assets/img/img21.webp","assets/img/img22.webp","assets/img/img23.webp","assets/img/img24.webp","assets/img/img25.webp","assets/img/img26.webp","assets/img/img27.webp","assets/img/img28.webp","assets/img/img29.webp","assets/img/img30.webp","assets/img/img31.webp","assets/img/img32.webp","assets/img/img33.webp","assets/img/img34.webp","assets/img/img35.webp","assets/img/img36.webp","assets/img/img37.webp","assets/img/img38.webp","assets/img/img39.webp","assets/img/img40.webp"],this.planeGroup=null,this.clickedMesh=null,this.textureLoader=new kM,this.raycaster=new Xu,this.raycaster2=new Xu,this.canvas=this.stage.renderer.domElement,this.init()}getDistance(e,t,n,i){return Math.sqrt(Math.pow(e-n,2)+Math.pow(t-i,2))}map(e,t,n,i,s){return(e-t)/(n-t)*(s-i)+i}textureLoad(e){return this.textureLoader.loadAsync(e)}setPlaneGeometry(){this.geometry=new Lo(1,1,84,84)}setGrid(){return new Promise(e=>{const t=Le.plane.size,n=Le.plane.scale.init;this.planeGroup=new Vs,this.planeGroup.position.x=(this.grid.col-1+(this.grid.col-1)*t)*-.5,this.planeGroup.position.y=0,this.planeGroup.position.z=(this.grid.row-1+(this.grid.row-1)*t)*-.5,this.stage.scene.add(this.planeGroup);const i=this.geometry,s=On.lambert,a=new Ri({fragmentShader:lS,vertexShader:cS,uniforms:Object.assign(s.uniforms,{diffuse:{type:"v3",value:new nt("#fff")},uTexture:{type:"t",value:null},uTime:{type:"f",value:0},uScale:{type:"f",value:1},uClick:{type:"f",value:1},uProgress:{type:"f",value:0}}),transparent:!0,lights:!0,fog:!1,side:ii}),o=On.depth,l=new Ri({vertexShader:uS,fragmentShader:hS,uniforms:Object.assign(o.uniforms,{uTime:{type:"f",value:0},uScale:{type:"f",value:1},uClick:{type:"f",value:1},uProgress:{type:"f",value:0}}),defines:{DEPTH_PACKING:Df}});let c=0;const h=this.grid.row*this.grid.col;for(let d=0;d<this.grid.row;d++)for(let u=0;u<this.grid.col;u++){const p=this.imgDataList[c],g=a.clone();g.uniforms.uTexture.value=p;const _=new ri(i,g);_.name=`plane${c}`,_.positionY=0;const m=u+u*t,f=0,y=d+d*t;if(_.position.set(m,f,y),_.rotation.x=Math.PI*-.5,_.scale.set(0,0,n),_.castShadow=!0,_.receiveShadow=!0,_.customDepthMaterial=l.clone(),_.customDistanceMaterial=l.clone(),this.planeGroup.add(_),c++,c===h){if(GUI!=null){const v=GUI.addFolder("plane");v.add(this.planeGroup.children[0].material.uniforms.uProgress,"value",-1,1).name("uProgress").onChange(M=>{for(let S=0;S<this.planeGroup.children.length;S++){const w=this.planeGroup.children[S];w.material.uniforms.uProgress.value=M}}),v.add(this.planeGroup.children[0].material.uniforms.uClick,"value",-1,1).name("uClick").onChange(M=>{for(let S=0;S<this.planeGroup.children.length;S++){const w=this.planeGroup.children[S];w.material.uniforms.uClick.value=M}})}return e()}}})}setFloor(){const t=this.geometry,n=new NM({color:new nt("#fff"),side:Ci});this.floorMesh=new ri(t,n),this.floorMesh.name="floor",this.floorMesh.receiveShadow=!0,this.floorMesh.scale.set(100,100,100),this.floorMesh.rotation.x=Math.PI*-.5,this.floorMesh.position.y=this.bool.isAndroid?-.2:-.12,this.stage.scene.add(this.floorMesh)}setLight(){if(this.spotLight1=new VM(new nt("#fff"),1),this.spotLight1.angle=dS/6,this.spotLight1.penumbra=1,this.spotLight1.decay=2,this.spotLight1.castShadow=!0,this.spotLight1.shadow.mapSize.width=2048,this.spotLight1.shadow.mapSize.height=2048,this.spotLight1.shadow.camera.near=1,this.spotLight1.shadow.focus=1,this.spotLight1.shadow.bias=-1e-4,this.spotLight1.position.set(4,30,4),this.spotLight1.distance=160,this.spotLight1.shadow.camera.far=160,this.stage.scene.add(this.spotLight1),this.ambientLight=new WM(new nt("#fff"),.5),this.stage.scene.add(this.ambientLight),GUI!=null){if(this.ambientLight){const t=GUI.addFolder("ambientlight");t.close(),t.addColor(this.ambientLight,"color").name("color").onChange(n=>{this.ambientLight.color=new nt(n)}),t.add(this.ambientLight,"intensity",0,1).name("intensity").onChange(n=>{this.ambientLight.intensity=n})}if(this.spotLight1){const t=GUI.addFolder("spotligth");t.close(),t.addColor(this.spotLight1,"color").name("color").onChange(n=>{this.spotLight1.color=new nt(n)}),t.add(this.spotLight1,"intensity",0,20).name("intensity").onChange(n=>{this.spotLight1.intensity=n}),t.add(this.spotLight1,"penumbra",0,10).name("penumbra").onChange(n=>{this.spotLight1.penumbra=n}),t.add(this.spotLight1,"decay",0,10).name("decay").onChange(n=>{this.spotLight1.decay=n}),t.add(this.spotLight1.shadow,"focus",0,10).name("focus").onChange(n=>{this.spotLight1.shadow.focus=n}),t.add(this.spotLight1.shadow,"bias",-1,1).name("bias").onChange(n=>{this.spotLight1.shadow.bias=n}),t.add(this.spotLight1,"distance",0,200).name("distance").onChange(n=>{this.spotLight1.distance=n}),t.add(this.spotLight1.shadow.camera,"far",0,200).name("far").onChange(n=>{this.spotLight1.shadow.camera.far=n}),t.add(this.spotLight1.position,"x",0,100).name("position.x").onChange(n=>{this.spotLight1.position.x=n}),t.add(this.spotLight1.position,"y",0,100).name("position.y").onChange(n=>{this.spotLight1.position.y=n}),t.add(this.spotLight1.position,"z",0,100).name("position.z").onChange(n=>{this.spotLight1.position.z=n})}}}resize(e){this.params.w=e.w,this.params.h=e.h}onMove(e){this.vector.move.x=e.touches?e.touches[0].clientX:e.clientX,this.vector.move.y=e.touches?e.touches[0].clientY:e.clientY,this.vector.normalize.x=this.vector.move.x/this.params.w*2-1,this.vector.normalize.y=this.vector.move.y/this.params.h*-2+1,this.isMove||(this.isMove=!0),this.isMove&&(clearTimeout(this.timer.move),this.timer.move=setTimeout(()=>{this.isMove=!1},300))}onCloseZoom(){if(this.isClickClose){const n="power4.inOut";if(this.body.setAttribute("data-zoom",0),this.clickedMesh!=null){const i=this.clickedMesh;this.clickedMesh=null,GSAP.to(i.scale,1,{ease:n,x:Le.plane.scale.init,y:Le.plane.scale.init,z:Le.plane.scale.init}),GSAP.to(i,1,{ease:n,positionY:0}),GSAP.to([i.material.uniforms.uClick,i.customDepthMaterial.uniforms.uClick,i.customDistanceMaterial.uniforms.uClick],1,{ease:n,value:1}),GSAP.to(this.planeGroup.position,1,{ease:n,x:(this.grid.col-1+(this.grid.col-1)*2)*-.5,z:(this.grid.row-1+(this.grid.row-1)*2)*-.5}),GSAP.to(this.stage.camera.position,1,{ease:n,x:Le.camera.position.init.x,y:Le.camera.position.init.y,z:Le.camera.position.init.z}),GSAP.to(this.stage.camera.quaternion,1,{ease:n,x:Le.camera.quaternion.init.x,y:Le.camera.quaternion.init.y,z:Le.camera.quaternion.init.z,w:Le.camera.quaternion.init.w}),GSAP.to(this.stage.camera.rotation,1,{ease:n,x:Le.camera.rotation.init.x,y:Le.camera.rotation.init.y,z:Le.camera.rotation.init.z,onComplete:()=>{this.isZoom=!1}})}}}onHoverWorldInRaycast(){if(this.floorMesh!=null){this.raycaster.setFromCamera(this.vector.normalize,this.stage.camera);const e=this.raycaster.intersectObjects([this.floorMesh]);if(e.length&&this.planeGroup!=null&&e[0]){const t=e[0].point,n=t.x,i=t.z;let s=0;if(this.planeGroup.children.length>0)for(let a=0;a<this.grid.row;a++)for(let o=0;o<this.grid.col;o++){const l=this.planeGroup.children[s],c=l.getWorldPosition(new W),h=this.getDistance(n,i,c.x,c.z),d=this.map(h,fS,pS,mS,_S);if(GSAP.to(this.anime,{duration:this.isZoom||this.isMove?10:30,move:this.isZoom?0:this.isMove?1:0}),this.isPageEnter){const u=G.clamp(d,0,1)*this.anime.move;GSAP.to(l.material.uniforms.uProgress,{duration:.4,value:u}),GSAP.to(l.customDepthMaterial.uniforms.uProgress,{duration:.4,value:u}),GSAP.to(l.customDistanceMaterial.uniforms.uProgress,{duration:.4,value:u}),GSAP.to(l.position,{duration:.4,y:u*.4+l.positionY})}s++,this.isLoaded||s===this.grid.row*this.grid.col&&(this.isLoaded=!0)}}}}onMouseClickedPlaneInRaycast(){this.raycaster2.setFromCamera(this.vector.normalize,this.stage.camera);const e=this.raycaster.intersectObjects(this.planeGroup.children);if(!this.isClickedPlane&&(e.length>0?(this.isHover=!0,this.isHover&&(this.isHover=!1,this.body.setAttribute("data-hover",1))):this.isHover||(this.isHover=!0,this.body.setAttribute("data-hover",0)),e.length>0&&this.isDown)){this.isClickedPlane=!0,this.isZoom=!0;const t=1,n="power4.inOut";if(this.body.setAttribute("data-zoom",1),this.clickedMesh!=null){const i=this.clickedMesh;this.clickedMesh=null,GSAP.to(i.scale,t,{ease:n,x:Le.plane.scale.init,y:Le.plane.scale.init,z:Le.plane.scale.init}),GSAP.to(i,t,{ease:n,positionY:0}),GSAP.to([i.material.uniforms.uClick,i.customDepthMaterial.uniforms.uClick,i.customDistanceMaterial.uniforms.uClick],t,{ease:n,value:1})}this.clickedMesh=e[0].object,GSAP.to([this.clickedMesh.material.uniforms.uClick,this.clickedMesh.customDepthMaterial.uniforms.uClick,this.clickedMesh.customDistanceMaterial.uniforms.uClick],t,{ease:n,value:0}),GSAP.to(this.clickedMesh,t,{ease:n,positionY:.6}),GSAP.to(this.clickedMesh.scale,t,{ease:n,x:Le.plane.scale.anime,y:Le.plane.scale.anime,z:Le.plane.scale.anime}),GSAP.to(this.planeGroup.position,t,{ease:n,x:this.clickedMesh.position.x*-1,z:this.clickedMesh.position.z*-1}),GSAP.to(this.stage.camera.position,t,{ease:n,x:Le.camera.position.anime.x,y:Le.camera.position.anime.y,z:Le.camera.position.anime.z}),GSAP.to(this.stage.camera.quaternion,t,{ease:n,x:Le.camera.quaternion.anime.x,y:Le.camera.quaternion.anime.y,z:Le.camera.quaternion.anime.z,w:Le.camera.quaternion.anime.w}),GSAP.to(this.stage.camera.rotation,t,{ease:n,x:Le.camera.rotation.anime.x,y:Le.camera.rotation.anime.y,z:Le.camera.rotation.anime.z,onComplete:()=>{this.isClickedPlane=!1,this.isClickClose=!0}})}}onTouchClickedPlaneInRaycast(){this.raycaster2.setFromCamera(this.vector.normalize,this.stage.camera);const e=this.raycaster.intersectObjects(this.planeGroup.children);if(this.isClickedPlane&&(this.isClickedPlane=!1,e.length>0)){this.isZoom=!0;const t=1,n="power4.inOut";if(this.body.setAttribute("data-zoom",1),this.clickedMesh!=null){const i=this.clickedMesh;this.clickedMesh=null,GSAP.to(i.scale,t,{ease:n,x:Le.plane.scale.init,y:Le.plane.scale.init,z:Le.plane.scale.init}),GSAP.to(i,t,{ease:n,positionY:0}),GSAP.to([i.material.uniforms.uClick,i.customDepthMaterial.uniforms.uClick,i.customDistanceMaterial.uniforms.uClick],t,{ease:n,value:1})}this.clickedMesh=e[0].object,GSAP.to([this.clickedMesh.material.uniforms.uClick,this.clickedMesh.customDepthMaterial.uniforms.uClick,this.clickedMesh.customDistanceMaterial.uniforms.uClick],t,{ease:n,value:0}),GSAP.to(this.clickedMesh,t,{ease:n,positionY:.6}),GSAP.to(this.clickedMesh.scale,t,{ease:n,x:Le.plane.scale.anime,y:Le.plane.scale.anime,z:Le.plane.scale.anime}),GSAP.to(this.planeGroup.position,t,{ease:n,x:this.clickedMesh.position.x*-1,z:this.clickedMesh.position.z*-1}),GSAP.to(this.stage.camera.position,t,{ease:n,x:Le.camera.position.anime.x,y:Le.camera.position.anime.y,z:Le.camera.position.anime.z}),GSAP.to(this.stage.camera.quaternion,t,{ease:n,x:Le.camera.quaternion.anime.x,y:Le.camera.quaternion.anime.y,z:Le.camera.quaternion.anime.z,w:Le.camera.quaternion.anime.w}),GSAP.to(this.stage.camera.rotation,t,{ease:n,x:Le.camera.rotation.anime.x,y:Le.camera.rotation.anime.y,z:Le.camera.rotation.anime.z,onComplete:()=>{this.isClickClose=!0}})}}raf(e){this.onHoverWorldInRaycast(),this.isPageEnter&&(this.bool.isMatchMediaHover?this.onMouseClickedPlaneInRaycast():this.onTouchClickedPlaneInRaycast()),this.stage.renderer.render(this.stage.scene,this.stage.camera)}toEnterAnimation(){const n="power4.inOut";for(let i=0;i<this.planeGroup.children.length;i++){const s=this.planeGroup.children[i];GSAP.to(s.scale,2,{ease:n,x:Le.plane.scale.init,y:Le.plane.scale.init,onStart:()=>{i===this.planeGroup.children.length-1&&this.body.setAttribute("data-loaded","1")}}),GSAP.to(s.position,2,{ease:n,y:i*.01}),GSAP.to(s.position,2,{ease:n,delay:1.5,y:0}),GSAP.from(s.position,2,{ease:n,x:(this.grid.col-1+(this.grid.col-1)*Le.plane.size)*.5,z:(this.grid.row-1+(this.grid.row-1)*Le.plane.size)*.5,delay:1.5,onComplete:()=>{i===this.planeGroup.children.length-1&&(this.isPageEnter=!0,this.body.setAttribute("data-status","enter"))}})}}async init(){this.setLight(),this.setPlaneGeometry(),this.setFloor(),this.imgDataList=[],this.imgDataList=await Promise.all(this.imgList.map((e,t)=>this.textureLoad(e))),await this.setGrid(),this.toEnterAnimation(),this.closeBtn=document.getElementById("js-closeBtn"),this.closeBtn.addEventListener("click",e=>{this.onCloseZoom()}),this.bool.isMatchMediaHover?(this.isDown=!1,this.canvas.addEventListener("mousemove",this.onMove.bind(this),{passive:!0}),this.canvas.addEventListener("mousedown",e=>{this.isDown=!0}),this.canvas.addEventListener("mouseup",e=>{this.isDown=!1})):(this.isDown=!1,this.canvas.addEventListener("touchstart",e=>{this.isDown=!0,this.vector.start.x=e.touches[0].clientX,this.vector.start.y=e.touches[0].clientY}),this.canvas.addEventListener("touchmove",this.onMove.bind(this),{passive:!0}),this.canvas.addEventListener("touchend",e=>{clearTimeout(this.timer.move),this.isMove=!1}),this.canvas.addEventListener("click",e=>{this.vector.normalize.x=e.clientX/this.params.w*2-1,this.vector.normalize.y=e.clientY/this.params.h*-2+1,this.isClickedPlane||(this.isClickedPlane=!0)}))}}class vS{constructor(e,t,n){this.body=e,this.params=t,this.bool=n,this.isInit=!1,this.gui=new sS,this.stats=new $M(e),this.stage=new oS(t,n),this.mesh=new gS(e,t,n,this.stage),this.controls=new YM(this.stage)}raf(e){this.isInit&&(this.mesh.raf(e),this.stage.raf(),this.controls.update(),this.stats.raf())}resize(e){this.isInit&&(this.bool.isMatchMediaWidth=e.isMatchMediaWidth,this.params.w=e.w,this.params.h=e.h,this.params.aspect=e.aspect,this.params.shorter=e.shorter,this.params.longer=e.longer,this.mesh.resize(e),this.stage.resize(e))}init(){this.isInit=!0}}Cc.registerPlugin(Qe);window.MODE=!1;window.GSAP=Cc;window.ScrollTrigger=Qe;window.G=new Dm;window.addEventListener("DOMContentLoaded",r=>{const t=document.body,n=new Um(t),i={w:window.innerWidth,h:window.innerHeight,beforeWidth:window.innerWidth,longer:0,shorter:0,aspect:0};i.aspect=i.w/i.h,i.longer=i.w>i.h?i.w:i.h,i.shorter=i.w<i.h?i.w:i.h;const s={isMatchMediaWidth:window.matchMedia("(max-width: 768px)").matches,isMatchMediaHover:window.matchMedia("(hover: hover)").matches,isPc:n.data.device==="pc",isIphone:n.data.iphone==="iphone",isAndroid:n.data.os==="android"&&n.data.device==="tablet",isDeve:MODE},a={resize:null,orientation:null};Th(i.w,i.h);const o=new vS(t,i,s),l=()=>{const d=performance.now()/1e3;o.raf(d)},c=()=>{s.isMatchMediaWidth=window.matchMedia("(max-width: 768px)").matches,i.w=window.innerWidth,i.h=window.innerHeight,i.aspect=i.w/i.h,i.longer=i.w>i.h?i.w:i.h,i.shorter=i.w<i.h?i.w:i.h;const d={isMatchMediaWidth:s.isMatchMediaWidth,w:i.w,h:i.h,aspect:i.aspect,longer:i.longer,shorter:i.shorter};Th(i.w,i.h),o.resize(d),clearTimeout(a.resize),a.resize=setTimeout(()=>{(()=>{const p=window.innerWidth;p>768&&i.beforeWidth<769&&window.location.reload(),p<769&&i.beforeWidth>769&&window.location.reload(),i.beforeWidth=p})()},100)},h=()=>{window.orientation!=0&&i.w<i.h&&(clearTimeout(a.orientation),a.orientation=setTimeout(()=>{window.location.reload()},300))};o.init(),GSAP.ticker.add(l),GSAP.ticker.fps(30),c(),window.addEventListener("resize",c,{passive:!0}),s.isPc||window.addEventListener("orientationchange",h),document.oncontextmenu=function(){return!1},document.getElementsByTagName("html")[0].oncontextmenu=function(){return!1},document.body.oncontextmenu=function(){return!1}});
