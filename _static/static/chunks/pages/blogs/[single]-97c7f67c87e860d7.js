(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[829],{7863:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/[single]",function(){return n(6623)}])},4649:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(5893),l=n(7294),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)};function c(e){var t=l.useState(!1),n=t[0],r=t[1],c=l.useState(!1),a=c[0],i=c[1],u=encodeURIComponent(e.id),s="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,m=e.title,d=e.poster||"hqdefault",p="&"+e.params,f=e.muted?"&mute=1":"",w=e.announce||"Watch",h=e.webp?"webp":"jpg",b=e.webp?"vi_webp":"vi",y=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+b+"/"+s+"/"+d+"."+h:"https://i.ytimg.com/"+b+"/"+u+"/"+d+"."+h),g=e.noCookie?"https://www.youtube-nocookie.com":"https://www.youtube.com";g=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var v=e.playlist?g+"/embed/videoseries?autoplay=1"+f+"&list="+u+p:g+"/embed/"+u+"?autoplay=1&state=1"+f+p,k=e.activatedClass||"lyt-activated",E=e.adNetwork||!1,C=e.aspectHeight||9,x=e.aspectWidth||16,j=e.iframeClass||"",_=e.playerClass||"lty-playbtn",N=e.wrapperClass||"yt-lite",I=e.onIframeAdded||function(){},O=e.rel?"prefetch":"preload";return l.useEffect(function(){a&&I()},[a]),l.createElement(l.Fragment,null,l.createElement("link",{rel:O,href:y,as:"image"}),l.createElement(l.Fragment,null,n&&l.createElement(l.Fragment,null,l.createElement("link",{rel:"preconnect",href:g}),l.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),E&&l.createElement(l.Fragment,null,l.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),l.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),l.createElement("article",{onPointerOver:function(){n||r(!0)},onClick:function(){a||i(!0)},className:N+" "+(a?k:""),"data-title":m,style:o({backgroundImage:"url("+y+")"},{"--aspect-ratio":C/x*100+"%"})},l.createElement("button",{type:"button",className:_,"aria-label":w+" "+m}),a&&l.createElement("iframe",{className:j,title:m,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:v})))}n(5243);let a=e=>{let{id:t,title:n,...l}=e;return(0,r.jsx)(c,{id:t,title:n,...l})};var i=n(1664),u=n.n(i);let s=e=>{let{href:t,type:n,rel:l,children:o}=e;return(0,r.jsx)(u(),{href:t,target:"_blank",rel:"noopener noreferrer ".concat(l?"follow"===l?"":l:"nofollow"),className:"btn mb-4 me-4 ".concat("outline"===n?"btn-outline-primary":"btn-primary"),children:o})};var m={Button:s,YoutubePlayer:a}},6623:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d},default:function(){return p}});var r=n(5893),l=n(1360),o=n(4649),c=n(3305),a=n(5675),i=n.n(a),u=n(7761);let s=e=>{let{frontmatter:t,content:n,mdxContent:a}=e,{description:s,title:m,image:d}=t;return s=s||n.slice(0,120),(0,r.jsx)(u.Z,{title:m,description:s,children:(0,r.jsx)("section",{className:"section",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("article",{className:"col-12 mx-auto text-center md:col-8",children:[d&&(0,r.jsx)(i(),{src:d,height:"500",width:"1000",alt:m,priority:!0,layout:"responsive",className:"rounded-lg"}),(0,l.gI)(m,"h1","h2 mb-6 mt-6 text-left"),(0,r.jsx)("div",{className:"content mb-16 text-left",children:(0,r.jsx)(c.R,{...a,components:o.Z})})]})})})})})},m=e=>{let{post:t,authors:n,mdxContent:l,slug:o}=e,{frontmatter:c,content:a}=t[0];return(0,r.jsx)(s,{frontmatter:c,content:a,mdxContent:l,authors:n,slug:o})};var d=!0,p=m},5243:function(){},2746:function(e,t,n){e.exports.jsxRuntime=n(5893)},3305:function(e,t,n){"use strict";n.d(t,{R:function(){return m}});var r={};n.r(r),n.d(r,{MDXContext:function(){return c},MDXProvider:function(){return s},useMDXComponents:function(){return i},withMDXComponents:function(){return a}});var l=n(7294),o=n(2746);let c=l.createContext({});function a(e){return function(t){let n=i(t.components);return l.createElement(e,{...t,allComponents:n})}}function i(e){let t=l.useContext(c);return l.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let u={};function s({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||u:i(e),l.createElement(c.Provider,{value:r},t)}function m({compiledSource:e,frontmatter:t,scope:n,components:c={},lazy:a}){let[i,u]=(0,l.useState)(!a||"undefined"==typeof window);(0,l.useEffect)(()=>{if(a){let e=window.requestIdleCallback(()=>{u(!0)});return()=>window.cancelIdleCallback(e)}},[]);let m=(0,l.useMemo)(()=>{let l=Object.assign({opts:{...r,...o.jsxRuntime}},{frontmatter:t},n),c=Object.keys(l),a=Object.values(l),i=Reflect.construct(Function,c.concat(`${e}`));return i.apply(i,a).default},[n,e]);if(!i)return l.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let d=l.createElement(s,{components:c},l.createElement(m,null));return a?l.createElement("div",null,d):d}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})}},function(e){e.O(0,[445,260,127,761,774,888,179],function(){return e(e.s=7863)}),_N_E=e.O()}]);