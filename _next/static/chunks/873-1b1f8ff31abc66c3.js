"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873],{8873:function(e,t,a){a.d(t,{Xx:function(){return B},Sq:function(){return s},iR:function(){return E}});var r=a(7294),n=a(7484),i=a.n(n),o=a(1664),l=a.n(o),c=a(5893),s=function(e){var t=e.newsItems,a=e.slug,r=e.country,n="sweden"===a?"Global Goals":"south-africa"===a?"the Integrated Indicator Framework (IIF)":"SDGs";return(0,c.jsx)("div",{className:"px-4 mx-auto max-w-7xl sm:px-6 md:px-8 lg:px-10 xl:px-12 space-y-8",children:(0,c.jsxs)("section",{className:"space-y-8",children:[(0,c.jsxs)("header",{className:"mt-8 space-y-6",children:[(0,c.jsx)("h2",{className:"text-5xl uppercase font-SDGSans sm:text-6xl",children:"Latest News"}),(0,c.jsxs)("p",{className:"text-lg sm:text-xl",children:["Read the latest news about the ",n," in ",r,"."]})]}),(0,c.jsx)("div",{className:"grid gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3",children:null===t||void 0===t?void 0:t.map((function(e){var t;return(0,c.jsx)(l(),{href:"/platform/".concat(a,"/news/").concat(e.id),children:(0,c.jsx)("a",{children:(0,c.jsxs)("div",{className:"flex flex-col h-full pt-2 pb-4 sm:px-4 hover:bg-gray-100",children:[(0,c.jsx)("img",{className:"object-contain h-48 mr-auto sm:w-full sm:mr-0",src:"".concat(null===(t=e.coverImage)||void 0===t?void 0:t.url,"?w=600&h=400")}),(0,c.jsx)("p",{className:"mt-3 text-xs text-gray-600",children:i()(e._publishedAt).format("DD MMMM YYYY")}),(0,c.jsx)("h2",{className:"text-lg font-bold",children:e.title})]})})},e.id)}))})]})})},d=a(9499);const u=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;");class f extends Error{constructor(e){super("Missing a value for "+(e?`the placeholder: ${e}`:"a placeholder"),e),this.name="MissingValueError",this.key=e}}function h(e,t,{ignoreMissing:a=!1,transform:r=(({value:e})=>e)}={}){if("string"!==typeof e)throw new TypeError(`Expected a \`string\` in the first argument, got \`${typeof e}\``);if("object"!==typeof t)throw new TypeError(`Expected an \`object\` or \`Array\` in the second argument, got \`${typeof t}\``);const n=(e,n)=>{let i=t;for(const t of n.split("."))i=i?i[t]:void 0;const o=r({value:i,key:n});if(void 0===o){if(a)return e;throw new f(n)}return String(o)},i=e=>(...t)=>function(e,...t){if("string"===typeof e)return u(e);let a=e[0];for(const[r,n]of t.entries())a=a+u(String(n))+e[r+1];return a}(e(...t)),o=/{{(\d+|[a-z$_][\w\-$]*?(?:\.[\w\-$]*?)*?)}}/gi;o.test(e)&&(e=e.replace(o,i(n)));return e.replace(/{(\d+|[a-z$_][\w\-$]*?(?:\.[\w\-$]*?)*?)}/gi,n)}var v=a(9757),m=a(4563),x=a(609),g=a(5644),p=a(1925),b=a(1163),j=a(4184),w=a.n(j),y=a(276),N=a.n(y),I=a(5920),A=a.n(I),S=a(7964),O=a(3960),D=a(8688),G=function(e){var t,a=e.indicators,n=e.globalIndicators,i=e.slug,o=e.framework,s=e.goals,d=e.frameworkFilter,u=e.iifMap,f=e.handleFrameworkFilter,h=(0,b.useRouter)();i||(i=null===(t=h.query)||void 0===t?void 0:t.country);var v=N()(A()(a.map((function(e){return{id:e.id,description:e.description,data:!0}})).concat(n).sort((function(e,t){var a;return null===e||void 0===e||null===(a=e.id)||void 0===a?void 0:a.localeCompare(null===t||void 0===t?void 0:t.id,void 0,{numeric:!0,sensitivity:"base"})})),(function(e,t){var a,r;return(null===(a=e.id)||void 0===a?void 0:a.replace(/ /g,"").toLowerCase())===(null===(r=t.id)||void 0===r?void 0:r.replace(/ /g,"").toLowerCase())})),(function(e){var t;return(0,p.ji)(null===(t=e.id)||void 0===t?void 0:t.toUpperCase())}));if(o===p.Bx.SDG)for(var m=0,x=Object.keys(v);m<x.length;m++){var j=x[m];v[j]=(0,D.iV)(v[j],o)}var y=function(e){return o===p.Bx.SDG||o===p.Bx.IIF?"bg-goals-".concat(e):o===p.Bx.AGENDA_2063?"bg-".concat(o,"Goals-").concat((0,p.ji)(e).replace("G","")):"bg-framework-".concat(o.toUpperCase())};return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"flex-row items-end hidden w-full md:flex overflow-scroll",children:s.map((function(e,t){return(0,c.jsx)("div",{className:"hidden md:block",children:(0,c.jsxs)("div",{className:"flex-col items-center justify-center overflow-hidden",children:[(0,c.jsx)("div",{className:w()("w-full p-1 gap-1 grid",o===p.Bx.IIF?"grid-cols-4":"grid-cols-3"),children:[].concat(v["".concat(t+1)]).filter(Boolean).reverse().map((function(a,r){return(0,c.jsx)("div",{className:w()(o===p.Bx.IIF?0===r&&"col-start-".concat((4-v["".concat(t+1)].length%4)%4+1):0===r&&"col-start-".concat((3-v["".concat(t+1)].length%3)%3+1)),children:(0,c.jsx)(S.Tooltip,{position:"top",arrow:!0,html:(0,c.jsxs)("div",{className:"text-left",children:[(0,c.jsxs)("h3",{className:"flex items-center text-xl font-bold uppercase font-SDGSans",children:["Indicator ",a.id," ",a.data&&(0,c.jsx)(O.Y_,{className:"w-4 h-4 ml-4"})]}),(0,c.jsx)("p",{className:"max-w-xs",children:a.description})]}),children:(0,c.jsx)(l(),{href:"/platform/".concat(i,"/explorer").concat(a.data?"?indicator=".concat(a.id.trim().toLowerCase(),"&framework=").concat(o):""),children:(0,c.jsx)("a",{children:(0,c.jsx)("div",{id:a.id,className:w()("w-full h-0 transition-opacity duration-500","south-africa"===i?a.data?y(e["Goal Id"]):1===d||u.has(null===a||void 0===a?void 0:a.id)?"bg-alex-gray":"bg-alex-gray opacity-20":a.data?y(e["Goal Id"]):"bg-alex-gray"),style:{paddingBottom:"100%"}})})})})},a.id)}))}),o===p.Bx.SDG||o===p.Bx.IIF||o===p.Bx.NDP||o===p.Bx.RISDP?(0,c.jsx)(S.Tooltip,{position:"top",arrow:!0,html:(0,c.jsx)("div",{className:"text-left",children:(0,c.jsx)("p",{className:"max-w-xs",children:e.Goal})}),children:(0,c.jsx)(l(),{href:"/platform/".concat(i,"/goals/").concat(t+1),children:(0,c.jsx)("a",{children:(0,c.jsx)("img",{src:"/".concat(o,"-icons/no-text/_").concat(t+1,".svg"),className:"w-full p-1"})})})}):(0,c.jsx)(S.Tooltip,{position:"top",arrow:!0,html:(0,c.jsx)("div",{className:"text-left",children:(0,c.jsx)("p",{className:"max-w-xs",children:e.Goal})}),children:(0,c.jsx)(l(),{href:"/platform/".concat(i,"/goals/").concat(o,"/").concat(e["Goal Id"]),children:(0,c.jsx)("a",{children:(0,c.jsx)("img",{src:"/".concat(o,"-icons/").concat(t+1,".png"),className:"w-full p-1"})})})})]})},"availability-".concat(t+1))}))}),(0,c.jsx)("div",{className:"w-full md:hidden space-y-6",children:s.map((function(e,t){return(0,c.jsxs)("div",{className:"flex flex-row space-x-2",children:[o===p.Bx.SDG||o===p.Bx.IIF?(0,c.jsx)("img",{src:"/sdg-icons/no-text/_".concat(t+1,".svg"),className:"h-12 sm:h-16"}):(0,c.jsx)("img",{src:"/".concat(o,"-icons/").concat(t+1,".png"),className:"h-12 sm:h-16"}),(0,c.jsx)("div",{className:"grid gap-1 w-full grid-cols-24b sm:grid-cols-32b grid-flow-densedense",children:[].concat(v["".concat(t+1)]).filter(Boolean).map((function(a,n){return(0,c.jsx)(r.Fragment,{children:(0,c.jsx)(S.Tooltip,{position:"top",trigger:"mouseenter",html:(0,c.jsxs)("div",{className:"text-left",children:[(0,c.jsxs)("h3",{className:"flex items-center text-xl font-bold uppercase font-SDGSans",children:["Indicator ",a.id," ",a.data&&(0,c.jsx)(O.Y_,{className:"w-4 h-4 ml-4"})]}),(0,c.jsx)("p",{className:"max-w-xs",children:a.description})]}),children:o===p.Bx.SDG||o===p.Bx.IIF?(0,c.jsx)("img",{src:"/sdg-icons/no-text/_".concat(t+1,".svg"),className:w()("flex-shrink-0 h-6 w-6 sm:w-8 sm:h-8",!a.data&&"opacity-20 filter grayscale")},"".concat(a.id,"-mobile")):(0,c.jsx)("div",{className:w()("flex-shrink-0 h-6 w-6 sm:w-8 sm:h-8","transition-opacity duration-500","south-africa"===i?a.data?y(e["Goal Id"]):1===d||a.iifId.length?"bg-alex-gray":"bg-alex-gray opacity-20":a.data?y(e["Goal Id"]):"bg-alex-gray")})})},"".concat(a.id,"-").concat(n))}))})]},"goal-goal-goal-".concat(t))}))}),o===p.Bx.IIF&&(0,c.jsxs)("div",{className:"flex w-full justify-end mt-4",children:[p.Ec.filter((function(e){return e.key!==p.Bx.IIF})).map((function(e,t){return(0,c.jsx)(g.Ju,{isSelected:d===t+2,onClick:function(){return f(t+2)},children:e.shortName},e.key)})),(0,c.jsx)(g.Ju,{isSelected:1===d,onClick:function(){return f(1)},children:"All"})]})]})};function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){(0,d.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C={somalia:"There is currently data available for {{COUNTRY}} applicable indicators for Somalia. The Global SDG framework has {{AVAILABLE_INDICATORS_COUNT}} indicators. You can hover a square to get more information about the particular indicator. A grey square means that there is no data available for this indicator yet. A striped square, colored or grey, is a non-applicable indicator. They are removed from the overall indicator coverage calculation.",sweden:"There is currently data available for 131 indicators. The Global Goals for Sustainable Development framework has {{GLOBAL_INDICATORS_COUNT}} indicators. You can hover a square to get more information about the particular indicator. A grey square means that there is no data available for this indicator yet in Goal Tracker.",DEFAULT:"There is currently data available for {{AVAILABLE_INDICATORS_COUNT}} indicators. The Global {{FRAMEWORK}} framework has {{GLOBAL_INDICATORS_COUNT}} indicators. You can hover a square to get more information about the particular indicator. A grey square means that there is no data available for this indicator yet in Goal Tracker."},F=[{title:"A prosperous Africa based on inclusive growth and sustainable development",color:"bg-agenda2063Goals-1"},{title:"An integrated continent, politically united and based on the ideas of pan Africanism and vision of African renaissance",color:"bg-agenda2063Goals-8"},{title:"An Africa of good governance, democracy, respect for human rights, justice & the rule of law",color:"bg-agenda2063Goals-11"},{title:"A peaceful and secure Africa",color:"bg-agenda2063Goals-13"},{title:"Africa with a strong cultural identity, common heritage, values and ethics",color:"bg-agenda2063Goals-16"},{title:"An Africa whose development is people driven, relying on the potential of the African people",color:"bg-agenda2063Goals-17"},{title:"Africa as a strong and influential global partner",color:"bg-agenda2063Goals-19"}],B=function(e){var t,a,r,n,i,o,l,s,d=e.country,u=e.data,f=e.slug,b=e.dataAvailabilityDescription,j=e.framework,w=void 0===j?p.Bx.IIF:j,y=e.frameworkFilter,N=void 0===y?1:y,I=e.iifMap,A=e.handleFrameworkFilter,S=void 0===A?function(){return null}:A,O=null!==(t=null!==(a=null===u||void 0===u?void 0:u.globalSelectedFrameworkIndicators)&&void 0!==a?a:null===u||void 0===u?void 0:u.globalIndicators)&&void 0!==t?t:v,D=(null===u||void 0===u?void 0:u.indicators.filter((function(e){return!!e.id})))||[],k=new Set(D.map((function(e){return(0,p.ji)(e.id)}))),B=Number(D.length/O.length*100).toFixed(1).toLocaleString();return(0,c.jsxs)("section",{className:"space-y-4","aria-label":"Data availability for ".concat(d),children:["somalia"!==f&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("header",{children:(0,c.jsx)("h2",{className:"text-5xl uppercase sm:text-6xl font-SDGSans",children:"Data availability"})}),(0,c.jsx)("p",{className:"text-lg leading-6 sm:text-xl",children:w===p.Bx.AGENDA_2063?"There is currently data available for ".concat(D.length," indicators. The Agenda 2063 framework has ").concat(O.length," prioritized indicators. You can hover a square to get more information about the particular indicator. A grey square means that there is no data available for this indicator yet in Goal Tracker."):w===p.Bx.RISDP?"There is currently data available for ".concat(D.length," indicators. The Regional Indicative Strategic Development Plan (RISDP) framework has ").concat(O.length," indicators. You can hover a square to get more information about the particular indicator. A grey square means that there is no data available for this indicator yet in Goal Tracker"):w===p.Bx.IIF?"The Integrated Indicator Framework framework has ".concat(null!==(r=null===u||void 0===u||null===(n=u.globalIndicators)||void 0===n?void 0:n.length)&&void 0!==r?r:null===v||void 0===v?void 0:v.length," indicators."):h(C[f]||C.DEFAULT,{FRAMEWORK:p.Ec.find((function(e){return e.key===w})).title,COUNTRY:d,AVAILABLE_INDICATORS_COUNT:D.length,GLOBAL_INDICATORS_COUNT:null!==(i=null===(o=u.globalIndicators)||void 0===o?void 0:o.length)&&void 0!==i?i:v.length})})]}),(0,c.jsxs)("div",{className:"pt-4 pb-12 border-b border-gray-200",children:["somalia"===f&&(0,c.jsx)(g.Lg,{dataAvailabilityDescription:b,indicators:(null===u||void 0===u?void 0:u.indicators.filter((function(e){return e.id})).map((function(e){return T(T({},e),{},{id:e.id.toLowerCase().replace("p","")})})))||[]}),"south-africa"===f&&(0,c.jsx)(G,{frameworkFilter:N,handleFrameworkFilter:S,globalIndicators:null!==(l=null===u||void 0===u?void 0:u.globalIndicators)&&void 0!==l?l:v,framework:w,slug:f,indicators:(null===u||void 0===u?void 0:u.indicators)||[],goals:null===u||void 0===u?void 0:u.goals,iifMap:I}),"somalia"!==f&&"south-africa"!==f&&(0,c.jsx)(x.a,{frameworkFilter:N,handleFrameworkFilter:S,globalIndicators:null!==(s=null===u||void 0===u?void 0:u.globalIndicators)&&void 0!==s?s:v,framework:w,slug:f,indicators:(null===u||void 0===u?void 0:u.indicators)||[],goals:u.goals})]}),"somalia"!==f&&(0,c.jsxs)("section",{id:"stats",className:"pb-6 bg-white",children:[(0,c.jsxs)(m.Z,{children:["Overall stats about ","sweden"===f?"Global Goals":"SDGs"," in ",d]}),(0,c.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-8",children:[(0,c.jsxs)("div",{className:"flex flex-col",children:["Sweden"===d?(0,c.jsxs)("span",{className:"text-4xl font-bold sm:text-6xl font-SDGSans",children:["131/",v.length]}):(0,c.jsxs)("span",{className:"text-4xl font-bold sm:text-6xl font-SDGSans",children:[D.length,"/",O.length]}),(0,c.jsx)("p",{className:"text-lg whitespace-pre sm:text-xl",children:"indicators available for\n".concat(d)})]}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("span",{className:"text-4xl font-bold sm:text-6xl font-SDGSans",children:[B,"%"]}),(0,c.jsx)("p",{className:"text-lg whitespace-pre sm:text-xl",children:"overall indicator coverage\nin Goal Tracker"})]}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("span",{className:"text-4xl font-bold sm:text-6xl font-SDGSans",children:[k.size,"/",u.goals.length]}),(0,c.jsx)("div",{className:"text-lg whitespace-pre sm:text-xl",children:"goals with data for\nat least one indicator"})]})]})]}),w===p.Bx.AGENDA_2063&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{className:"text-3xl uppercase sm:text-4xl font-SDGSans ",children:"Aspirations"}),(0,c.jsx)("div",{className:"flex gap-6 flex-col mb-16",children:F.map((function(e,t){return(0,c.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,c.jsxs)("div",{className:"text-center text-white font-SDGSans h-5 w-5 ".concat(e.color),children:["A",t+1]}),(0,c.jsx)("p",{className:"text-xl",children:e.title})]},t)}))})]})]})},L=a(8777),_=a(9498),E=(a(2341),function(e){var t=e.children,a=e.totalSlides;return(0,c.jsx)("section",{className:"w-full text-white bg-goaltracker-blue",children:(0,c.jsx)("div",{className:"flex items-center mx-auto max-w-7xl",children:(0,c.jsxs)(L.sj,{className:"flex w-full",totalSlides:a,isIntrinsicHeight:!0,dragEnabled:!1,children:[(0,c.jsx)(L.jp,{className:"flex-shrink-0",children:(0,c.jsx)(_.s$,{className:"w-6 h-6 text-white hover:text-gray-300"})}),(0,c.jsx)(L.iR,{className:"w-full",children:t}),(0,c.jsx)(L.P1,{children:(0,c.jsx)(_._Q,{className:"w-6 h-6 text-white hover:text-gray-300"})}),(0,c.jsx)(L.I5,{})]})})})})},8688:function(e,t,a){a.d(t,{C:function(){return b},OM:function(){return p},Qy:function(){return m},iV:function(){return g}});var r=a(9499),n=a(6835),i=a(7644),o=a.n(i),l=a(1478),c=a.n(l),s=a(1925),d=a(9757);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function h(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(l)throw i}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var m=function(e){for(var t=e.id.toLowerCase().split("."),a=(0,n.Z)(t,3)[2],r=0,i=["a","d","p","n"];r<i.length;r++){var o=i[r];if(a.indexOf(o)>0)return o}return""},x=function(e){var t=e.id.toLowerCase().split("."),a=(0,n.Z)(t,3),r=a[0],i=a[1],o=a[2].replace(/[ADPNadpn]$/,"");return"".concat(r,".").concat(i,".").concat(o)};function g(e,t){if(t===s.Bx.SDG){var a,r={},n=h(e);try{for(n.s();!(a=n.n()).done;){var i=a.value,o=x(i),l=m(i);r[o]||(r[o]={}),r[o][l||"g"]=i.hasDataAvailable||i.data}}catch(d){n.e(d)}finally{n.f()}var c=e.filter((function(e){var t=x(e),a=m(e);return(!r[t].g||"d"!==a||!r[t].d)&&(!r[t].g&&!r[t].d||"a"!==a||!r[t].a)}));return c}return e}function p(e,t,a){var r,n=b(e,t,a),i=0,o=0,l=0,c=0,s=h(n);try{for(s.s();!(r=s.n()).done;){var d=r.value,u=!1;d.indicators=g(d.indicators,t);var f,v=h(d.indicators);try{for(v.s();!(f=v.n()).done;){f.value.hasDataAvailable&&(u||(u=!0),c++),l++}}catch(m){v.e(m)}finally{v.f()}u&&o++,i++}}catch(m){s.e(m)}finally{s.f()}return[n,{totalTargets:i,totalTargetsWithData:o,totalIndicators:l,totalIndicatorsWithData:c,coverage:Number(c/l*100).toFixed(1).toLocaleString()}]}function b(e,t,a){var r,n,i;var l,u=((null===(r=e[t])||void 0===r?void 0:r.availableIndicators)||[]).filter((function(e){return(0,s.ji)(e)==a})).map((function(e){return e.trim()})),v=function(e,t){return e.map((function(e){var t;return null!==(t=e.indicatorId)&&void 0!==t?t:e.id})).filter((function(e){return(0,s.ji)(e)==t}))}(t===s.Bx.SDG?d:e[t].globalIndicators,a),x=null===(n=e[t])||void 0===n||null===(i=n.targets)||void 0===i?void 0:i.map((function(e){return{targetId:e["Target id"],target:e.Target}})).filter((function(e){var t=e.targetId;return(0,s.ji)(t)==a})),g=o()(v.concat(u)),p=[],b=h(x);try{var j=function(){var a=l.value,r=g.filter((function(e){return s.Bx.AGENDA_2063===t?function(e,t){var a,r;return function(e){var t=e.replace(/[\u2013-\s]+/g," ").split(/ /);return"".concat(t[1]," ").concat(t[2]," ").concat(t[3]).toLowerCase()}(t)===(null===(a="".concat(e.targetId))||void 0===a||null===(r=a.trim())||void 0===r?void 0:r.toLowerCase())}(a,e):function(e,t){var a,r;return function(e){var t,a;return null===(t="".concat(e.split(".")[0],".").concat(e.split(".")[1]))||void 0===t||null===(a=t.trim())||void 0===a?void 0:a.replace(/^N_/,"").toLowerCase()}(t)==(null===(a="".concat(e.targetId))||void 0===a||null===(r=a.trim())||void 0===r?void 0:r.toLowerCase())}(a,e)})).map((function(a){var r,n,i=null!==(r=null!==(n=e[t].indicators.find((function(e){var t,r,n=e.id;return(null===n||void 0===n||null===(t=n.trim())||void 0===t?void 0:t.toLowerCase())===(null===a||void 0===a||null===(r=a.trim())||void 0===r?void 0:r.toLowerCase())})))&&void 0!==n?n:d.find((function(e){var t,r,n=e.indicatorId;return(null===n||void 0===n||null===(t=n.trim())||void 0===t?void 0:t.toLowerCase())===(null===a||void 0===a||null===(r=a.trim())||void 0===r?void 0:r.toLowerCase())})))&&void 0!==r?r:e[t].globalIndicators.find((function(e){var t,r,n=e.id;return(null===n||void 0===n||null===(t=n.trim())||void 0===t?void 0:t.toLowerCase())===(null===a||void 0===a||null===(r=a.trim())||void 0===r?void 0:r.toLowerCase())}));if(i)return i.indicatorId&&(i.id=i.indicatorId,i.description=i.indicator),t===s.Bx.SDG&&(i.type=m(i)),i})).filter((function(e){return!!e}));(!r||r.length<=0)&&console.warn("No indicators for ".concat(a.targetId," on ").concat(t," ")),p.push(f(f({},a),{},{indicators:(r||[]).map((function(a){return f(f({},a),{},{hasDataAvailable:(r=a.id,void 0!==e[t].availableIndicators.find((function(e){return(null===e||void 0===e?void 0:e.replace(/[\u2013-]/g,"").replace(/ /g,""))==(null===r||void 0===r?void 0:r.replace(/[\u2013-]/g,"").replace(/ /g,""))})))});var r}))}))};for(b.s();!(l=b.n()).done;)j()}catch(D){b.e(D)}finally{b.f()}for(var w=[],y=0,N=p;y<N.length;y++){var I,A=h(N[y].indicators);try{for(A.s();!(I=A.n()).done;){var S=I.value;w.push(S.id)}}catch(D){A.e(D)}finally{A.f()}}var O=c()(g,w);return O.length>0&&console.warn("The following indicators for ".concat(a," are not described: ").concat(JSON.stringify(O)," [").concat(t,"]")),p}}}]);