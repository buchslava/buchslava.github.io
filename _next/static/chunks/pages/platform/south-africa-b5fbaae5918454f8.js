(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{5925:function(e,t,r){"use strict";r.d(t,{L:function(){return f}});var n=r(9499),o=r(1925),a=r(4152),i=r(7294);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){return a.zys((function(e,t){return e.id===t.iifId}),e,t)}function p(e){var t,r=new Set,n=c(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;r.add(o.iifId)}}catch(a){n.e(a)}finally{n.f()}return r}function f(e){var t=(0,i.useState)(1),r=t[0],n=t[1],a=(0,i.useState)(e[o.Bx.IIF]),l=a[0],c=a[1],u=(0,i.useState)(new Set),f=u[0],x=u[1];return(0,i.useEffect)((function(){switch(r){case 1:c(e[o.Bx.IIF]);break;case 2:var t=d(e[o.Bx.IIF].indicators,e[o.Bx.NDP].indicators);x(p(e[o.Bx.NDP].globalIndicators)),c(s(s({},e[o.Bx.IIF]),{},{indicators:t,globalSelectedFrameworkIndicators:e[o.Bx.NDP].globalIndicators}));break;case 3:var n=d(e[o.Bx.IIF].indicators,e[o.Bx.RISDP].indicators);x(p(e[o.Bx.RISDP].globalIndicators)),c(s(s({},e[o.Bx.IIF]),{},{indicators:n,globalSelectedFrameworkIndicators:e[o.Bx.RISDP].globalIndicators}));break;case 4:var a=d(e[o.Bx.IIF].indicators,e[o.Bx.AGENDA_2063].indicators);x(p(e[o.Bx.AGENDA_2063].globalIndicators)),c(s(s({},e[o.Bx.IIF]),{},{indicators:a,globalSelectedFrameworkIndicators:e[o.Bx.AGENDA_2063].globalIndicators}));break;case 5:var i=d(e[o.Bx.IIF].indicators,e[o.Bx.SDG].indicators);x(p(e[o.Bx.SDG].globalIndicators)),c(s(s({},e[o.Bx.IIF]),{},{indicators:i,globalSelectedFrameworkIndicators:e[o.Bx.SDG].globalIndicators}))}}),[r]),{iifData:l,iifMap:f,frameworkFilter:r,setFrameworkFilter:n}}},7431:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return d}});var n=r(7294),o=r(1925),a=r(8873),i=r(1664),l=r.n(i),s=r(3760),c=r(5925),u=r(5893),d=!0;t.default=function(e){var t=e.newsItems,r=e.slug,i=e.country,d=e.data,p=(0,n.useState)(o.Bx.IIF),f=p[0],x=p[1];(0,n.useEffect)((function(){g(1)}),[f]);var v=(0,c.L)(d),b=v.iifData,m=v.iifMap,h=v.frameworkFilter,g=v.setFrameworkFilter;return(0,u.jsxs)("article",{children:[(0,u.jsx)("div",{className:"px-4 mx-auto max-w-7xl sm:px-6 md:px-8 lg:px-10 xl:px-12",children:(0,u.jsx)("div",{className:"flex flex-col w-full lg:space-between space-y-4 md:space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6",children:(0,u.jsxs)("div",{className:"w-full",children:[(0,u.jsx)("div",{className:"mb-20",children:(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:"w-2/3",children:[(0,u.jsx)("header",{className:"w-full mt-8 max-w-7xl space-y-6",children:(0,u.jsxs)("h1",{className:"text-6xl font-extrabold uppercase whitespace-pre-line sm:text-8xl font-SDGSans",children:["Integrated ",(0,u.jsx)("br",{})," Indicator ",(0,u.jsx)("br",{})," Framework"]})}),(0,u.jsx)("p",{className:"font-medium text-gray-900 mb-12 mt-10",children:"Explore South Africa\u2019s Integrated Indicator Framework (IIF) that aligns policy agendas at the global, continental, regional and national level. The IIF is the central tool for planning and measurement of policies in the country."})]})}),(0,u.jsx)("img",{alt:"chart",className:"hidden md:block",src:"/media/frameworks/IIF.png"})]})}),(0,u.jsxs)("div",{className:"w-full mb-16",children:[(0,u.jsx)("h1",{className:"text-6xl font-extrabold uppercase whitespace-pre-line font-SDGSans",children:"Frameworks"}),(0,u.jsx)("div",{className:"mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 ",children:o.Ec.map((function(e,t){return(0,u.jsxs)("div",{className:"w-50 bg-goaltracker-blue p-2 rounded-md flex",children:[(0,u.jsx)("div",{className:"bg-white min-w-max w-48 h-full rounded-md flex flex-col justify-center items-center shadow-md",children:(0,u.jsx)("img",{className:"h-32",src:"/media/frameworks/".concat(e.key.toUpperCase().replace(" ","_"),"-list.png")})}),(0,u.jsxs)("div",{className:"flex flex-col justify-between p-4 w-52 h-60",children:[(0,u.jsx)("h1",{className:"text-white font-bold whitespace-pre-line text-lg",children:e.title}),e.key===o.Bx.SDG?(0,u.jsx)(l(),{href:"".concat(r,"/frameworks/sdg"),children:(0,u.jsx)("div",{className:"bg-gold-500 shadow-lg cursor-pointer text-center",children:(0,u.jsx)("a",{className:"uppercase font-bold text-white font-SDGSans text-2xl",children:"Explore"})})}):(0,u.jsx)(l(),{href:{pathname:"".concat(r,"/frameworks/").concat(e.key)},children:(0,u.jsx)("div",{className:"bg-gold-500 shadow-lg cursor-pointer text-center",children:(0,u.jsx)("a",{className:"uppercase font-bold text-white font-SDGSans text-2xl",children:"Explore"})})})]})]},t)}))})]})]})})}),(0,u.jsxs)("div",{className:"px-4 mx-auto max-w-7xl sm:px-6 md:px-8 lg:px-10 xl:px-12 space-y-8",children:[(0,u.jsx)(s.dq,{framework:f,setSelected:x}),d[f]&&(0,u.jsx)(a.Xx,{frameworkFilter:h,handleFrameworkFilter:g,country:i,slug:r,data:f===o.Bx.IIF?b:d[f],framework:f,iifMap:m})]}),(0,u.jsx)("div",{className:"px-4 mx-auto  sm:px-6 md:px-8 lg:px-10 xl:px-12 space-y-8",children:(0,u.jsx)(a.Sq,{slug:r,newsItems:t,country:i})})]})}},1184:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/platform/south-africa",function(){return r(7431)}])},9949:function(e,t,r){"use strict";r.d(t,{R:function(){return V}});var n=r(7294),o=r(4192),a=r(9946),i=r(6723),l=r(3855);function s(e,t){let[r,o]=(0,n.useState)(e),a=(0,l.E)(e);return(0,i.e)((()=>o(a.current)),[a,o,...t]),r}var c=r(3784),u=r(2351),d=r(2984),p=r(9362),f=r(1363);var x,v=((x=v||{})[x.First=0]="First",x[x.Previous=1]="Previous",x[x.Next=2]="Next",x[x.Last=3]="Last",x[x.Specific=4]="Specific",x[x.Nothing=5]="Nothing",x);function b(e,t){let r=t.resolveItems();if(r.length<=0)return null;let n=t.resolveActiveIndex(),o=null!=n?n:-1,a=(()=>{switch(e.focus){case 0:return r.findIndex((e=>!t.resolveDisabled(e)));case 1:{let e=r.slice().reverse().findIndex(((e,r,n)=>!(-1!==o&&n.length-r-1>=o)&&!t.resolveDisabled(e)));return-1===e?e:r.length-1-e}case 2:return r.findIndex(((e,r)=>!(r<=o)&&!t.resolveDisabled(e)));case 3:{let e=r.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));return-1===e?e:r.length-1-e}case 4:return r.findIndex((r=>t.resolveId(r)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===a?n:a}var m,h,g=r(4103),y=r(4575),I=r(6567),w=r(4157),S=r(292),R=r(6045),O=r(8689),j=r(5466),k=r(3781),N=((h=N||{})[h.Open=0]="Open",h[h.Closed=1]="Closed",h),D=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(D||{}),P=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(P||{}),F=((m=F||{})[m.OpenListbox=0]="OpenListbox",m[m.CloseListbox=1]="CloseListbox",m[m.SetDisabled=2]="SetDisabled",m[m.SetOrientation=3]="SetOrientation",m[m.GoToOption=4]="GoToOption",m[m.Search=5]="Search",m[m.ClearSearch=6]="ClearSearch",m[m.RegisterOption=7]="RegisterOption",m[m.UnregisterOption=8]="UnregisterOption",m);function E(e,t=(e=>e)){let r=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,n=(0,y.z2)(t(e.options.slice()),(e=>e.dataRef.current.domRef.current)),o=r?n.indexOf(r):null;return-1===o&&(o=null),{options:n,activeOptionIndex:o}}let T={1:e=>e.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.disabled||0===e.listboxState)return e;let t=e.activeOptionIndex,{value:r,mode:n,compare:o}=e.propsRef.current,a=e.options.findIndex((e=>{let t=e.dataRef.current.value;return(0,d.E)(n,{1:()=>r.some((e=>o(e,t))),0:()=>o(r,t)})}));return-1!==a&&(t=a),{...e,listboxState:0,activeOptionIndex:t}},2:(e,t)=>e.disabled===t.disabled?e:{...e,disabled:t.disabled},3:(e,t)=>e.orientation===t.orientation?e:{...e,orientation:t.orientation},4(e,t){var r;if(e.disabled||1===e.listboxState)return e;let n=E(e),o=b(t,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeOptionIndex:o,activationTrigger:null!=(r=t.trigger)?r:1}},5:(e,t)=>{if(e.disabled||1===e.listboxState)return e;let r=""!==e.searchQuery?0:1,n=e.searchQuery+t.value.toLowerCase(),o=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find((e=>{var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))})),a=o?e.options.indexOf(o):-1;return-1===a||a===e.activeOptionIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeOptionIndex:a,activationTrigger:1}},6:e=>e.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},7:(e,t)=>{let r={id:t.id,dataRef:t.dataRef},n=E(e,(e=>[...e,r]));if(null===e.activeOptionIndex){let{value:o,mode:a,compare:i}=e.propsRef.current,l=t.dataRef.current.value;(0,d.E)(a,{1:()=>o.some((e=>i(e,l))),0:()=>i(o,l)})&&(n.activeOptionIndex=n.options.indexOf(r))}return{...e,...n}},8:(e,t)=>{let r=E(e,(e=>{let r=e.findIndex((e=>e.id===t.id));return-1!==r&&e.splice(r,1),e}));return{...e,...r,activationTrigger:1}}},L=(0,n.createContext)(null);function B(e){let t=(0,n.useContext)(L);if(null===t){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,B),t}return t}function A(e,t){return(0,d.E)(t.type,T,e,t)}L.displayName="ListboxContext";let C=n.Fragment,M=(0,u.yV)((function(e,t){let{value:r,name:o,onChange:a,disabled:l=!1,horizontal:s=!1,multiple:p=!1,...f}=e;const x=s?"horizontal":"vertical";let v=(0,c.T)(t),b=(0,n.useReducer)(A,{listboxState:1,propsRef:{current:{value:r,onChange:a,mode:p?1:0,compare:(0,k.z)(((e,t)=>e===t))}},labelRef:(0,n.createRef)(),buttonRef:(0,n.createRef)(),optionsRef:(0,n.createRef)(),disabled:l,orientation:x,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1}),[{listboxState:m,propsRef:h,optionsRef:g,buttonRef:w},j]=b;h.current.value=r,h.current.mode=p?1:0,(0,i.e)((()=>{h.current.onChange=e=>(0,d.E)(h.current.mode,{0:()=>a(e),1(){let t=h.current.value.slice(),r=t.indexOf(e);return-1===r?t.push(e):t.splice(r,1),a(t)}})}),[a,h]),(0,i.e)((()=>j({type:2,disabled:l})),[l]),(0,i.e)((()=>j({type:3,orientation:x})),[x]),(0,S.O)([w,g],((e,t)=>{var r;j({type:1}),(0,y.sP)(t,y.tJ.Loose)||(e.preventDefault(),null==(r=w.current)||r.focus())}),0===m);let N=(0,n.useMemo)((()=>({open:0===m,disabled:l})),[m,l]),D={ref:v};return n.createElement(L.Provider,{value:b},n.createElement(I.up,{value:(0,d.E)(m,{0:I.ZM.Open,1:I.ZM.Closed})},null!=o&&null!=r&&(0,O.t)({[o]:r}).map((([e,t])=>n.createElement(R._,{features:R.A.Hidden,...(0,u.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:e,value:t})}))),(0,u.sY)({ourProps:D,theirProps:f,slot:N,defaultTag:C,name:"Listbox"})))})),_=(0,u.yV)((function(e,t){var r;let[i,l]=B("Listbox.Button"),d=(0,c.T)(i.buttonRef,t),p=`headlessui-listbox-button-${(0,a.M)()}`,x=(0,o.G)(),b=(0,k.z)((e=>{switch(e.key){case f.R.Space:case f.R.Enter:case f.R.ArrowDown:e.preventDefault(),l({type:0}),x.nextFrame((()=>{i.propsRef.current.value||l({type:4,focus:v.First})}));break;case f.R.ArrowUp:e.preventDefault(),l({type:0}),x.nextFrame((()=>{i.propsRef.current.value||l({type:4,focus:v.Last})}))}})),m=(0,k.z)((e=>{if(e.key===f.R.Space)e.preventDefault()})),h=(0,k.z)((e=>{if((0,g.P)(e.currentTarget))return e.preventDefault();0===i.listboxState?(l({type:1}),x.nextFrame((()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),l({type:0}))})),y=s((()=>{if(i.labelRef.current)return[i.labelRef.current.id,p].join(" ")}),[i.labelRef.current,p]),I=(0,n.useMemo)((()=>({open:0===i.listboxState,disabled:i.disabled})),[i]),S=e,R={ref:d,id:p,type:(0,w.f)(e,i.buttonRef),"aria-haspopup":!0,"aria-controls":null==(r=i.optionsRef.current)?void 0:r.id,"aria-expanded":i.disabled?void 0:0===i.listboxState,"aria-labelledby":y,disabled:i.disabled,onKeyDown:b,onKeyUp:m,onClick:h};return(0,u.sY)({ourProps:R,theirProps:S,slot:I,defaultTag:"button",name:"Listbox.Button"})})),z=(0,u.yV)((function(e,t){let[r]=B("Listbox.Label"),o=`headlessui-listbox-label-${(0,a.M)()}`,i=(0,c.T)(r.labelRef,t),l=(0,k.z)((()=>{var e;return null==(e=r.buttonRef.current)?void 0:e.focus({preventScroll:!0})})),s=(0,n.useMemo)((()=>({open:0===r.listboxState,disabled:r.disabled})),[r]);return(0,u.sY)({ourProps:{ref:i,id:o,onClick:l},theirProps:e,slot:s,defaultTag:"label",name:"Listbox.Label"})})),G=u.AN.RenderStrategy|u.AN.Static,U=(0,u.yV)((function(e,t){var r;let[i,l]=B("Listbox.Options"),x=(0,c.T)(i.optionsRef,t),b=`headlessui-listbox-options-${(0,a.M)()}`,m=(0,o.G)(),h=(0,o.G)(),g=(0,I.oJ)(),y=null!==g?g===I.ZM.Open:0===i.listboxState;(0,n.useEffect)((()=>{var e;let t=i.optionsRef.current;!t||0===i.listboxState&&t!==(null==(e=(0,j.r)(t))?void 0:e.activeElement)&&t.focus({preventScroll:!0})}),[i.listboxState,i.optionsRef]);let w=(0,k.z)((e=>{switch(h.dispose(),e.key){case f.R.Space:if(""!==i.searchQuery)return e.preventDefault(),e.stopPropagation(),l({type:5,value:e.key});case f.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==i.activeOptionIndex){let{dataRef:e}=i.options[i.activeOptionIndex];i.propsRef.current.onChange(e.current.value)}0===i.propsRef.current.mode&&(l({type:1}),(0,p.k)().nextFrame((()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})})));break;case(0,d.E)(i.orientation,{vertical:f.R.ArrowDown,horizontal:f.R.ArrowRight}):return e.preventDefault(),e.stopPropagation(),l({type:4,focus:v.Next});case(0,d.E)(i.orientation,{vertical:f.R.ArrowUp,horizontal:f.R.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),l({type:4,focus:v.Previous});case f.R.Home:case f.R.PageUp:return e.preventDefault(),e.stopPropagation(),l({type:4,focus:v.First});case f.R.End:case f.R.PageDown:return e.preventDefault(),e.stopPropagation(),l({type:4,focus:v.Last});case f.R.Escape:return e.preventDefault(),e.stopPropagation(),l({type:1}),m.nextFrame((()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));case f.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(l({type:5,value:e.key}),h.setTimeout((()=>l({type:6})),350))}})),S=s((()=>{var e,t,r;return null!=(r=null==(e=i.labelRef.current)?void 0:e.id)?r:null==(t=i.buttonRef.current)?void 0:t.id}),[i.labelRef.current,i.buttonRef.current]),R=(0,n.useMemo)((()=>({open:0===i.listboxState})),[i]),O=e,N={"aria-activedescendant":null===i.activeOptionIndex||null==(r=i.options[i.activeOptionIndex])?void 0:r.id,"aria-multiselectable":1===i.propsRef.current.mode||void 0,"aria-labelledby":S,"aria-orientation":i.orientation,id:b,onKeyDown:w,role:"listbox",tabIndex:0,ref:x};return(0,u.sY)({ourProps:N,theirProps:O,slot:R,defaultTag:"ul",features:G,visible:y,name:"Listbox.Options"})})),Q=(0,u.yV)((function(e,t){let{disabled:r=!1,value:o,...l}=e,[s,f]=B("Listbox.Option"),x=`headlessui-listbox-option-${(0,a.M)()}`,b=null!==s.activeOptionIndex&&s.options[s.activeOptionIndex].id===x,{value:m,compare:h}=s.propsRef.current,g=(0,d.E)(s.propsRef.current.mode,{1:()=>m.some((e=>h(e,o))),0:()=>h(m,o)}),y=(0,n.useRef)(null),I=(0,c.T)(t,y);(0,i.e)((()=>{if(0!==s.listboxState||!b||0===s.activationTrigger)return;let e=(0,p.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=y.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[y,b,s.listboxState,s.activationTrigger,s.activeOptionIndex]);let w=(0,n.useRef)({disabled:r,value:o,domRef:y});(0,i.e)((()=>{w.current.disabled=r}),[w,r]),(0,i.e)((()=>{w.current.value=o}),[w,o]),(0,i.e)((()=>{var e,t;w.current.textValue=null==(t=null==(e=y.current)?void 0:e.textContent)?void 0:t.toLowerCase()}),[w,y]);let S=(0,k.z)((()=>s.propsRef.current.onChange(o)));(0,i.e)((()=>(f({type:7,id:x,dataRef:w}),()=>f({type:8,id:x}))),[w,x]);let R=(0,k.z)((e=>{if(r)return e.preventDefault();S(),0===s.propsRef.current.mode&&(f({type:1}),(0,p.k)().nextFrame((()=>{var e;return null==(e=s.buttonRef.current)?void 0:e.focus({preventScroll:!0})})))})),O=(0,k.z)((()=>{if(r)return f({type:4,focus:v.Nothing});f({type:4,focus:v.Specific,id:x})})),j=(0,k.z)((()=>{r||b||f({type:4,focus:v.Specific,id:x,trigger:0})})),N=(0,k.z)((()=>{r||!b||f({type:4,focus:v.Nothing})})),D=(0,n.useMemo)((()=>({active:b,selected:g,disabled:r})),[b,g,r]);return(0,u.sY)({ourProps:{id:x,ref:I,role:"option",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,"aria-selected":!0===g||void 0,disabled:void 0,onClick:R,onFocus:O,onPointerMove:j,onMouseMove:j,onPointerLeave:N,onMouseLeave:N},theirProps:l,slot:D,defaultTag:"li",name:"Listbox.Option"})})),V=Object.assign(M,{Button:_,Label:z,Options:U,Option:Q})},8689:function(e,t,r){"use strict";function n(e={},t=null,r=[]){for(let[n,i]of Object.entries(e))a(r,o(t,n),i);return r}function o(e,t){return e?e+"["+t+"]":t}function a(e,t,r){if(Array.isArray(r))for(let[n,i]of r.entries())a(e,o(t,n.toString()),i);else r instanceof Date?e.push([t,r.toISOString()]):"boolean"==typeof r?e.push([t,r?"1":"0"]):"string"==typeof r?e.push([t,r]):"number"==typeof r?e.push([t,`${r}`]):null==r?e.push([t,""]):n(r,t,e)}function i(e){var t;let r=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(r)for(let n of r.elements)if("INPUT"===n.tagName&&"submit"===n.type||"BUTTON"===n.tagName&&"submit"===n.type||"INPUT"===n.nodeName&&"image"===n.type)return void n.click()}r.d(t,{g:function(){return i},t:function(){return n}})}},function(e){e.O(0,[644,964,276,62,778,478,652,982,760,609,873,774,888,179],(function(){return t=1184,e(e.s=t);var t}));var t=e.O();_N_E=t}]);