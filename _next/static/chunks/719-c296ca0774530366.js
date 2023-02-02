"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[719],{9949:function(e,t,r){r.d(t,{R:function(){return H}});var o=r(7294),n=r(4192),s=r(9946),i=r(6723),a=r(3855);function l(e,t){let[r,n]=(0,o.useState)(e),s=(0,a.E)(e);return(0,i.e)((()=>n(s.current)),[s,n,...t]),r}var u=r(3784),c=r(2351),p=r(2984),d=r(9362),f=r(1363);var h,b=((h=b||{})[h.First=0]="First",h[h.Previous=1]="Previous",h[h.Next=2]="Next",h[h.Last=3]="Last",h[h.Specific=4]="Specific",h[h.Nothing=5]="Nothing",h);function v(e,t){let r=t.resolveItems();if(r.length<=0)return null;let o=t.resolveActiveIndex(),n=null!=o?o:-1,s=(()=>{switch(e.focus){case 0:return r.findIndex((e=>!t.resolveDisabled(e)));case 1:{let e=r.slice().reverse().findIndex(((e,r,o)=>!(-1!==n&&o.length-r-1>=n)&&!t.resolveDisabled(e)));return-1===e?e:r.length-1-e}case 2:return r.findIndex(((e,r)=>!(r<=n)&&!t.resolveDisabled(e)));case 3:{let e=r.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));return-1===e?e:r.length-1-e}case 4:return r.findIndex((r=>t.resolveId(r)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===s?o:s}var y,m,g=r(4103),R=r(4575),x=r(6567),w=r(4157),_=r(292),S=r(6045),O=r(8689),T=r(5466),P=r(3781),C=((m=C||{})[m.Open=0]="Open",m[m.Closed=1]="Closed",m),I=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(I||{}),E=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(E||{}),D=((y=D||{})[y.OpenListbox=0]="OpenListbox",y[y.CloseListbox=1]="CloseListbox",y[y.SetDisabled=2]="SetDisabled",y[y.SetOrientation=3]="SetOrientation",y[y.GoToOption=4]="GoToOption",y[y.Search=5]="Search",y[y.ClearSearch=6]="ClearSearch",y[y.RegisterOption=7]="RegisterOption",y[y.UnregisterOption=8]="UnregisterOption",y);function L(e,t=(e=>e)){let r=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,o=(0,R.z2)(t(e.options.slice()),(e=>e.dataRef.current.domRef.current)),n=r?o.indexOf(r):null;return-1===n&&(n=null),{options:o,activeOptionIndex:n}}let q={1:e=>e.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.disabled||0===e.listboxState)return e;let t=e.activeOptionIndex,{value:r,mode:o,compare:n}=e.propsRef.current,s=e.options.findIndex((e=>{let t=e.dataRef.current.value;return(0,p.E)(o,{1:()=>r.some((e=>n(e,t))),0:()=>n(r,t)})}));return-1!==s&&(t=s),{...e,listboxState:0,activeOptionIndex:t}},2:(e,t)=>e.disabled===t.disabled?e:{...e,disabled:t.disabled},3:(e,t)=>e.orientation===t.orientation?e:{...e,orientation:t.orientation},4(e,t){var r;if(e.disabled||1===e.listboxState)return e;let o=L(e),n=v(t,{resolveItems:()=>o.options,resolveActiveIndex:()=>o.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...o,searchQuery:"",activeOptionIndex:n,activationTrigger:null!=(r=t.trigger)?r:1}},5:(e,t)=>{if(e.disabled||1===e.listboxState)return e;let r=""!==e.searchQuery?0:1,o=e.searchQuery+t.value.toLowerCase(),n=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find((e=>{var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(o))})),s=n?e.options.indexOf(n):-1;return-1===s||s===e.activeOptionIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeOptionIndex:s,activationTrigger:1}},6:e=>e.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},7:(e,t)=>{let r={id:t.id,dataRef:t.dataRef},o=L(e,(e=>[...e,r]));if(null===e.activeOptionIndex){let{value:n,mode:s,compare:i}=e.propsRef.current,a=t.dataRef.current.value;(0,p.E)(s,{1:()=>n.some((e=>i(e,a))),0:()=>i(n,a)})&&(o.activeOptionIndex=o.options.indexOf(r))}return{...e,...o}},8:(e,t)=>{let r=L(e,(e=>{let r=e.findIndex((e=>e.id===t.id));return-1!==r&&e.splice(r,1),e}));return{...e,...r,activationTrigger:1}}},k=(0,o.createContext)(null);function A(e){let t=(0,o.useContext)(k);if(null===t){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return t}function N(e,t){return(0,p.E)(t.type,q,e,t)}k.displayName="ListboxContext";let U=o.Fragment,M=(0,c.yV)((function(e,t){let{value:r,name:n,onChange:s,disabled:a=!1,horizontal:l=!1,multiple:d=!1,...f}=e;const h=l?"horizontal":"vertical";let b=(0,u.T)(t),v=(0,o.useReducer)(N,{listboxState:1,propsRef:{current:{value:r,onChange:s,mode:d?1:0,compare:(0,P.z)(((e,t)=>e===t))}},labelRef:(0,o.createRef)(),buttonRef:(0,o.createRef)(),optionsRef:(0,o.createRef)(),disabled:a,orientation:h,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1}),[{listboxState:y,propsRef:m,optionsRef:g,buttonRef:w},T]=v;m.current.value=r,m.current.mode=d?1:0,(0,i.e)((()=>{m.current.onChange=e=>(0,p.E)(m.current.mode,{0:()=>s(e),1(){let t=m.current.value.slice(),r=t.indexOf(e);return-1===r?t.push(e):t.splice(r,1),s(t)}})}),[s,m]),(0,i.e)((()=>T({type:2,disabled:a})),[a]),(0,i.e)((()=>T({type:3,orientation:h})),[h]),(0,_.O)([w,g],((e,t)=>{var r;T({type:1}),(0,R.sP)(t,R.tJ.Loose)||(e.preventDefault(),null==(r=w.current)||r.focus())}),0===y);let C=(0,o.useMemo)((()=>({open:0===y,disabled:a})),[y,a]),I={ref:b};return o.createElement(k.Provider,{value:v},o.createElement(x.up,{value:(0,p.E)(y,{0:x.ZM.Open,1:x.ZM.Closed})},null!=n&&null!=r&&(0,O.t)({[n]:r}).map((([e,t])=>o.createElement(S._,{features:S.A.Hidden,...(0,c.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:e,value:t})}))),(0,c.sY)({ourProps:I,theirProps:f,slot:C,defaultTag:U,name:"Listbox"})))})),z=(0,c.yV)((function(e,t){var r;let[i,a]=A("Listbox.Button"),p=(0,u.T)(i.buttonRef,t),d=`headlessui-listbox-button-${(0,s.M)()}`,h=(0,n.G)(),v=(0,P.z)((e=>{switch(e.key){case f.R.Space:case f.R.Enter:case f.R.ArrowDown:e.preventDefault(),a({type:0}),h.nextFrame((()=>{i.propsRef.current.value||a({type:4,focus:b.First})}));break;case f.R.ArrowUp:e.preventDefault(),a({type:0}),h.nextFrame((()=>{i.propsRef.current.value||a({type:4,focus:b.Last})}))}})),y=(0,P.z)((e=>{if(e.key===f.R.Space)e.preventDefault()})),m=(0,P.z)((e=>{if((0,g.P)(e.currentTarget))return e.preventDefault();0===i.listboxState?(a({type:1}),h.nextFrame((()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),a({type:0}))})),R=l((()=>{if(i.labelRef.current)return[i.labelRef.current.id,d].join(" ")}),[i.labelRef.current,d]),x=(0,o.useMemo)((()=>({open:0===i.listboxState,disabled:i.disabled})),[i]),_=e,S={ref:p,id:d,type:(0,w.f)(e,i.buttonRef),"aria-haspopup":!0,"aria-controls":null==(r=i.optionsRef.current)?void 0:r.id,"aria-expanded":i.disabled?void 0:0===i.listboxState,"aria-labelledby":R,disabled:i.disabled,onKeyDown:v,onKeyUp:y,onClick:m};return(0,c.sY)({ourProps:S,theirProps:_,slot:x,defaultTag:"button",name:"Listbox.Button"})})),j=(0,c.yV)((function(e,t){let[r]=A("Listbox.Label"),n=`headlessui-listbox-label-${(0,s.M)()}`,i=(0,u.T)(r.labelRef,t),a=(0,P.z)((()=>{var e;return null==(e=r.buttonRef.current)?void 0:e.focus({preventScroll:!0})})),l=(0,o.useMemo)((()=>({open:0===r.listboxState,disabled:r.disabled})),[r]);return(0,c.sY)({ourProps:{ref:i,id:n,onClick:a},theirProps:e,slot:l,defaultTag:"label",name:"Listbox.Label"})})),F=c.AN.RenderStrategy|c.AN.Static,B=(0,c.yV)((function(e,t){var r;let[i,a]=A("Listbox.Options"),h=(0,u.T)(i.optionsRef,t),v=`headlessui-listbox-options-${(0,s.M)()}`,y=(0,n.G)(),m=(0,n.G)(),g=(0,x.oJ)(),R=null!==g?g===x.ZM.Open:0===i.listboxState;(0,o.useEffect)((()=>{var e;let t=i.optionsRef.current;!t||0===i.listboxState&&t!==(null==(e=(0,T.r)(t))?void 0:e.activeElement)&&t.focus({preventScroll:!0})}),[i.listboxState,i.optionsRef]);let w=(0,P.z)((e=>{switch(m.dispose(),e.key){case f.R.Space:if(""!==i.searchQuery)return e.preventDefault(),e.stopPropagation(),a({type:5,value:e.key});case f.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==i.activeOptionIndex){let{dataRef:e}=i.options[i.activeOptionIndex];i.propsRef.current.onChange(e.current.value)}0===i.propsRef.current.mode&&(a({type:1}),(0,d.k)().nextFrame((()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})})));break;case(0,p.E)(i.orientation,{vertical:f.R.ArrowDown,horizontal:f.R.ArrowRight}):return e.preventDefault(),e.stopPropagation(),a({type:4,focus:b.Next});case(0,p.E)(i.orientation,{vertical:f.R.ArrowUp,horizontal:f.R.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),a({type:4,focus:b.Previous});case f.R.Home:case f.R.PageUp:return e.preventDefault(),e.stopPropagation(),a({type:4,focus:b.First});case f.R.End:case f.R.PageDown:return e.preventDefault(),e.stopPropagation(),a({type:4,focus:b.Last});case f.R.Escape:return e.preventDefault(),e.stopPropagation(),a({type:1}),y.nextFrame((()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));case f.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(a({type:5,value:e.key}),m.setTimeout((()=>a({type:6})),350))}})),_=l((()=>{var e,t,r;return null!=(r=null==(e=i.labelRef.current)?void 0:e.id)?r:null==(t=i.buttonRef.current)?void 0:t.id}),[i.labelRef.current,i.buttonRef.current]),S=(0,o.useMemo)((()=>({open:0===i.listboxState})),[i]),O=e,C={"aria-activedescendant":null===i.activeOptionIndex||null==(r=i.options[i.activeOptionIndex])?void 0:r.id,"aria-multiselectable":1===i.propsRef.current.mode||void 0,"aria-labelledby":_,"aria-orientation":i.orientation,id:v,onKeyDown:w,role:"listbox",tabIndex:0,ref:h};return(0,c.sY)({ourProps:C,theirProps:O,slot:S,defaultTag:"ul",features:F,visible:R,name:"Listbox.Options"})})),$=(0,c.yV)((function(e,t){let{disabled:r=!1,value:n,...a}=e,[l,f]=A("Listbox.Option"),h=`headlessui-listbox-option-${(0,s.M)()}`,v=null!==l.activeOptionIndex&&l.options[l.activeOptionIndex].id===h,{value:y,compare:m}=l.propsRef.current,g=(0,p.E)(l.propsRef.current.mode,{1:()=>y.some((e=>m(e,n))),0:()=>m(y,n)}),R=(0,o.useRef)(null),x=(0,u.T)(t,R);(0,i.e)((()=>{if(0!==l.listboxState||!v||0===l.activationTrigger)return;let e=(0,d.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=R.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[R,v,l.listboxState,l.activationTrigger,l.activeOptionIndex]);let w=(0,o.useRef)({disabled:r,value:n,domRef:R});(0,i.e)((()=>{w.current.disabled=r}),[w,r]),(0,i.e)((()=>{w.current.value=n}),[w,n]),(0,i.e)((()=>{var e,t;w.current.textValue=null==(t=null==(e=R.current)?void 0:e.textContent)?void 0:t.toLowerCase()}),[w,R]);let _=(0,P.z)((()=>l.propsRef.current.onChange(n)));(0,i.e)((()=>(f({type:7,id:h,dataRef:w}),()=>f({type:8,id:h}))),[w,h]);let S=(0,P.z)((e=>{if(r)return e.preventDefault();_(),0===l.propsRef.current.mode&&(f({type:1}),(0,d.k)().nextFrame((()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})})))})),O=(0,P.z)((()=>{if(r)return f({type:4,focus:b.Nothing});f({type:4,focus:b.Specific,id:h})})),T=(0,P.z)((()=>{r||v||f({type:4,focus:b.Specific,id:h,trigger:0})})),C=(0,P.z)((()=>{r||!v||f({type:4,focus:b.Nothing})})),I=(0,o.useMemo)((()=>({active:v,selected:g,disabled:r})),[v,g,r]);return(0,c.sY)({ourProps:{id:h,ref:x,role:"option",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,"aria-selected":!0===g||void 0,disabled:void 0,onClick:S,onFocus:O,onPointerMove:T,onMouseMove:T,onPointerLeave:C,onMouseLeave:C},theirProps:a,slot:I,defaultTag:"li",name:"Listbox.Option"})})),H=Object.assign(M,{Button:z,Label:j,Options:B,Option:$})},8689:function(e,t,r){function o(e={},t=null,r=[]){for(let[o,i]of Object.entries(e))s(r,n(t,o),i);return r}function n(e,t){return e?e+"["+t+"]":t}function s(e,t,r){if(Array.isArray(r))for(let[o,i]of r.entries())s(e,n(t,o.toString()),i);else r instanceof Date?e.push([t,r.toISOString()]):"boolean"==typeof r?e.push([t,r?"1":"0"]):"string"==typeof r?e.push([t,r]):"number"==typeof r?e.push([t,`${r}`]):null==r?e.push([t,""]):o(r,t,e)}function i(e){var t;let r=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(r)for(let o of r.elements)if("INPUT"===o.tagName&&"submit"===o.type||"BUTTON"===o.tagName&&"submit"===o.type||"INPUT"===o.nodeName&&"image"===o.type)return void o.click()}r.d(t,{g:function(){return i},t:function(){return o}})},8057:function(e,t,r){var o=r(7294);const n=o.forwardRef((function(e,t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),o.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}));t.Z=n},3342:function(e,t,r){var o=r(7294);const n=o.forwardRef((function(e,t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),o.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))}));t.Z=n},294:function(e,t,r){r.d(t,{ZP:function(){return w}});class o extends Error{constructor(e,t,r){const o=`${e.status||0===e.status?e.status:""} ${e.statusText||""}`.trim();super(`Request failed with ${o?`status code ${o}`:"an unknown error"}`),this.name="HTTPError",this.response=e,this.request=t,this.options=r}}class n extends Error{constructor(e){super("Request timed out"),this.name="TimeoutError",this.request=e}}const s=e=>null!==e&&"object"===typeof e,i=(...e)=>{for(const t of e)if((!s(t)||Array.isArray(t))&&"undefined"!==typeof t)throw new TypeError("The `options` argument must be an object");return l({},...e)},a=(e={},t={})=>{const r=new globalThis.Headers(e),o=t instanceof globalThis.Headers,n=new globalThis.Headers(t);for(const[s,i]of n.entries())o&&"undefined"===i||void 0===i?r.delete(s):r.set(s,i);return r},l=(...e)=>{let t={},r={};for(const o of e)if(Array.isArray(o))Array.isArray(t)||(t=[]),t=[...t,...o];else if(s(o)){for(let[e,r]of Object.entries(o))s(r)&&e in t&&(r=l(t[e],r)),t={...t,[e]:r};s(o.headers)&&(r=a(r,o.headers),t.headers=r)}return t},u="function"===typeof globalThis.AbortController,c="function"===typeof globalThis.ReadableStream,p="function"===typeof globalThis.FormData,d=["get","post","put","patch","head","delete"],f={json:"application/json",text:"text/*",formData:"multipart/form-data",arrayBuffer:"*/*",blob:"*/*"},h=2147483647,b=Symbol("stop"),v=e=>d.includes(e)?e.toUpperCase():e,y=[413,429,503],m={limit:2,methods:["get","put","head","delete","options","trace"],statusCodes:[408,413,429,500,502,503,504],afterStatusCodes:y,maxRetryAfter:Number.POSITIVE_INFINITY},g=(e={})=>{if("number"===typeof e)return{...m,limit:e};if(e.methods&&!Array.isArray(e.methods))throw new Error("retry.methods must be an array");if(e.statusCodes&&!Array.isArray(e.statusCodes))throw new Error("retry.statusCodes must be an array");return{...m,...e,afterStatusCodes:y}};class R{constructor(e,t={}){var r,o;if(this._retryCount=0,this._input=e,this._options={credentials:this._input.credentials||"same-origin",...t,headers:a(this._input.headers,t.headers),hooks:l({beforeRequest:[],beforeRetry:[],afterResponse:[]},t.hooks),method:v(null!==(r=t.method)&&void 0!==r?r:this._input.method),prefixUrl:String(t.prefixUrl||""),retry:g(t.retry),throwHttpErrors:!1!==t.throwHttpErrors,timeout:"undefined"===typeof t.timeout?1e4:t.timeout,fetch:null!==(o=t.fetch)&&void 0!==o?o:globalThis.fetch.bind(globalThis)},"string"!==typeof this._input&&!(this._input instanceof URL||this._input instanceof globalThis.Request))throw new TypeError("`input` must be a string, URL, or Request");if(this._options.prefixUrl&&"string"===typeof this._input){if(this._input.startsWith("/"))throw new Error("`input` must not begin with a slash when using `prefixUrl`");this._options.prefixUrl.endsWith("/")||(this._options.prefixUrl+="/"),this._input=this._options.prefixUrl+this._input}if(u&&(this.abortController=new globalThis.AbortController,this._options.signal&&this._options.signal.addEventListener("abort",(()=>{this.abortController.abort()})),this._options.signal=this.abortController.signal),this.request=new globalThis.Request(this._input,this._options),this._options.searchParams){const e="?"+("string"===typeof this._options.searchParams?this._options.searchParams.replace(/^\?/,""):new URLSearchParams(this._options.searchParams).toString()),t=this.request.url.replace(/(?:\?.*?)?(?=#|$)/,e);!(p&&this._options.body instanceof globalThis.FormData||this._options.body instanceof URLSearchParams)||this._options.headers&&this._options.headers["content-type"]||this.request.headers.delete("content-type"),this.request=new globalThis.Request(new globalThis.Request(t,this.request),this._options)}void 0!==this._options.json&&(this._options.body=JSON.stringify(this._options.json),this.request.headers.set("content-type","application/json"),this.request=new globalThis.Request(this.request,{body:this._options.body}))}static create(e,t){const r=new R(e,t),n=async()=>{if(r._options.timeout>h)throw new RangeError("The `timeout` option cannot be greater than 2147483647");await Promise.resolve();let e=await r._fetch();for(const t of r._options.hooks.afterResponse){const o=await t(r.request,r._options,r._decorateResponse(e.clone()));o instanceof globalThis.Response&&(e=o)}if(r._decorateResponse(e),!e.ok&&r._options.throwHttpErrors)throw new o(e,r.request,r._options);if(r._options.onDownloadProgress){if("function"!==typeof r._options.onDownloadProgress)throw new TypeError("The `onDownloadProgress` option must be a function");if(!c)throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");return r._stream(e.clone(),r._options.onDownloadProgress)}return e},s=r._options.retry.methods.includes(r.request.method.toLowerCase())?r._retry(n):n();for(const[o,i]of Object.entries(f))s[o]=async()=>{r.request.headers.set("accept",r.request.headers.get("accept")||i);const e=(await s).clone();if("json"===o){if(204===e.status)return"";if(t.parseJson)return t.parseJson(await e.text())}return e[o]()};return s}_calculateRetryDelay(e){if(this._retryCount++,this._retryCount<this._options.retry.limit&&!(e instanceof n)){if(e instanceof o){if(!this._options.retry.statusCodes.includes(e.response.status))return 0;const t=e.response.headers.get("Retry-After");if(t&&this._options.retry.afterStatusCodes.includes(e.response.status)){let e=Number(t);return Number.isNaN(e)?e=Date.parse(t)-Date.now():e*=1e3,"undefined"!==typeof this._options.retry.maxRetryAfter&&e>this._options.retry.maxRetryAfter?0:e}if(413===e.response.status)return 0}return.3*2**(this._retryCount-1)*1e3}return 0}_decorateResponse(e){return this._options.parseJson&&(e.json=async()=>this._options.parseJson(await e.text())),e}async _retry(e){try{return await e()}catch(t){const r=Math.min(this._calculateRetryDelay(t),h);if(0!==r&&this._retryCount>0){await(async e=>new Promise((t=>{setTimeout(t,e)})))(r);for(const e of this._options.hooks.beforeRetry){if(await e({request:this.request,options:this._options,error:t,retryCount:this._retryCount})===b)return}return this._retry(e)}throw t}}async _fetch(){for(const e of this._options.hooks.beforeRequest){const t=await e(this.request,this._options);if(t instanceof Request){this.request=t;break}if(t instanceof Response)return t}return!1===this._options.timeout?this._options.fetch(this.request.clone()):(async(e,t,r)=>new Promise(((o,s)=>{const i=setTimeout((()=>{t&&t.abort(),s(new n(e))}),r.timeout);r.fetch(e).then(o).catch(s).then((()=>{clearTimeout(i)}))})))(this.request.clone(),this.abortController,this._options)}_stream(e,t){const r=Number(e.headers.get("content-length"))||0;let o=0;return new globalThis.Response(new globalThis.ReadableStream({async start(n){const s=e.body.getReader();t&&t({percent:0,transferredBytes:0,totalBytes:r},new Uint8Array),await async function e(){const{done:i,value:a}=await s.read();if(i)n.close();else{if(t){o+=a.byteLength;t({percent:0===r?0:o/r,transferredBytes:o,totalBytes:r},a)}n.enqueue(a),await e()}}()}}))}}const x=e=>{const t=(t,r)=>R.create(t,i(e,r));for(const r of d)t[r]=(t,o)=>R.create(t,i(e,o,{method:r}));return t.create=e=>x(i(e)),t.extend=t=>x(i(e,t)),t.stop=b,t};var w=x()},29:function(e,t,r){function o(e,t,r,o,n,s,i){try{var a=e[s](i),l=a.value}catch(u){return void r(u)}a.done?t(l):Promise.resolve(l).then(o,n)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var i=e.apply(t,r);function a(e){o(i,n,s,a,l,"next",e)}function l(e){o(i,n,s,a,l,"throw",e)}a(void 0)}))}}r.d(t,{Z:function(){return n}})}}]);