(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7409],{41340:function(t,n,r){"use strict";r.d(n,{Ro:function(){return c}});var e=r(27747),o=r(1531);function c(t,n,r){var c=t.confProb,a=t.from,i=t.to,d=t.trainNumber,u=t.trainClass,s=t.trainQuota,l=t.boarding_date,_=t.user_id,m=t.device_type_id,f=void 0===m?4:m,v=(t.utm,t.utm_source,t.save_booking),g=void 0===v||v,b=t.avail,p=t.called_from_tbs,h=void 0===p||p,y=t.fare,j=t.url_params,x=void 0===j?"":j,k=t.cateringCharges,N=void 0===k?"":k,w=t.train_name,P=void 0===w?"":w,R=t.fromName,C=void 0===R?"":R,A=t.toName,T=void 0===A?"":A,B=t.duration,S=t.from_std,O=t.to_sta,E=t.train_date,F="".concat("https://www.railyatri.in","/train-ticket/tbs-booking?boarding_from=").concat(a,"&boarding_to=").concat(i,"&train_no=").concat(d,"&class=").concat(u,"&quota=").concat(s,"&boarding_date=").concat(l,"&user_id=").concat(_,"&lang=").concat(r.current.lang,"&device_type_id=").concat(f,"&utm_referrer=").concat(r.current.utm_source,"&utm=").concat(r.current.utm_source,"&utm_source=").concat(r.current.utm_source,"&save_booking=").concat(g,"&avail=").concat(null===b||void 0===b?void 0:b.replace(/#/g,""),"&called_from_tbs=").concat(h,"&fare=").concat(y,"&cateringCharges=").concat(N,"&action=train_between_station&prob=").concat(null===c||void 0===c?void 0:c.replace(/[^a-zA-Z0-9 ]/g,""),"&").concat(void 0==x?"":x);if(6!=r.current.device||"6"!=r.current.device)n(!0),(0,e.KR)(F).then((function(t){if(!(null===(t=null===t||void 0===t?void 0:t.data)||void 0===t?void 0:t.success))throw new Error(JSON.stringify((0,o.PR)(t.data)?t.data:t));var n={step:"New_TBS_Sucessfull_booking",ecomm_type:"train_ticket_booking",user_id:_,from_station:a,to_station:i,device_type_id:r.current.device,utm_referrer:r.current.utm_source,boarding_date:l,journey_class:u,train_number:d,number_of_trains:r.current.number_of_trains,filters_applied:r.current.filters_applied.current,journey_quota:s,availability:b,v_code:r.current.vCode,src:r.current.src,journey_date:r.current.date,original_from:r.current.from.code,original_to:r.current.to.code};(0,e.yW)("","",n);var c="".concat(t.url).replace("".concat("https://www.railyatri.in"),"".concat("https://www.railyatri.in/m/passengerdetails"));window.location.href=c})).catch((function(t){(0,e.yW)("","",{step:"Book_Now_Error",api_error:F,current_url:"".concat(t)}),n(!1)}));else{var I="/train-ticket/passengers-detail?boarding_from=".concat(a,"&boarding_to=").concat(i,"&train_no=").concat(d,"&class=").concat(u,"&quota=").concat(s,"&boarding_date=").concat(l,"&user_id=").concat(_,"&lang=").concat(r.current.lang,"&device_type_id=").concat(f,"&utm_referrer=").concat(r.current.utm_source,"&utm=").concat(r.current.utm_source,"&utm_source=").concat(r.current.utm_source,"&save_booking=").concat(g,"&avail=").concat(null===b||void 0===b?void 0:b.replace(/#/g,""),"&called_from_tbs=").concat(h,"&fare=").concat(y,"&cateringCharges=").concat(N,"&action=train_between_station&prob=").concat(null===c||void 0===c?void 0:c.replace(/[^a-zA-Z0-9 ]/g,""),"&duration=").concat(B,"&from_std=").concat(S,"&to_sta=").concat(O,"&train_date=").concat(E,"&train_name=").concat(P,"&fromStaName=").concat(C,"&toStaName=").concat(T,"&").concat(void 0==x?"":x),H=(0,o.cI)(I.split("?")[1]),L=(0,o.PC)();(0,o.PR)(null===H||void 0===H?void 0:H.user_id)||(I+="&user_id=".concat(null===L||void 0===L?void 0:L.userId)),(0,o.PR)(null===H||void 0===H?void 0:H.authentication_token)||(I+="&authentication_token=".concat(null===L||void 0===L?void 0:L.New_User_token)),(0,o.PR)(null===H||void 0===H?void 0:H.from_code)||(I+="&from_code=".concat(null===H||void 0===H?void 0:H.boarding_from)),(0,o.PR)(null===H||void 0===H?void 0:H.from_name)||(I+="&from_name=".concat(null===H||void 0===H?void 0:H.fromStaName)),(0,o.PR)(null===H||void 0===H?void 0:H.journey_date)||(I+="&journey_date=".concat(null===H||void 0===H?void 0:H.train_date)),(0,o.PR)(null===H||void 0===H?void 0:H.to_code)||(I+="&to_code=".concat(null===H||void 0===H?void 0:H.boarding_to)),(0,o.PR)(null===H||void 0===H?void 0:H.to_name)||(I+="&to_name=".concat(null===H||void 0===H?void 0:H.toStaName)),(0,o.PR)(null===H||void 0===H?void 0:H.from_sta_code)||(I+="&from_sta_code=".concat(null===H||void 0===H?void 0:H.boarding_from)),(0,o.PR)(null===H||void 0===H?void 0:H.to_sta_code)||(I+="&to_sta_code=".concat(null===H||void 0===H?void 0:H.boarding_to)),window.location.href=I}}},93773:function(t,n,r){"use strict";r.d(n,{L5:function(){return l},LS:function(){return f},Ms:function(){return u},cF:function(){return m},pT:function(){return d}});var e=r(85893),o=r(67294),c=r(7115),a=r.n(c),i=r(1531);r(25675);function d(t){var n=t.children,r=t.onClose,c=void 0===r?function(){}:r;return(0,o.useEffect)((function(){return document.getElementsByTagName("body")[0].style.overflow="hidden",function(){return document.getElementsByTagName("body")[0].style.overflow="scroll"}}),[]),(0,e.jsx)("div",{className:"".concat(a().modalBackdrop," ").concat(a().fade," flexCenter"),onClick:c,children:n})}function u(t){var n=t.message;return"string"==typeof n?(0,e.jsx)("p",{children:n}):(0,e.jsx)("div",{className:a().message,children:n.map((function(t,n){return(0,e.jsx)("p",{children:t},"message_".concat(n))}))})}var s=function(t){var n=t.message,r=void 0===n?"":n,o=t.onClose,c=t.Title,i=void 0===c?{Titledom:function(){},timeoutHandler:function(){}}:c,s=t.Body,l=void 0===s?u:s,_=i.Titledom,m=i.timeoutHandler;return(0,e.jsx)(d,{children:(0,e.jsx)("div",{className:"".concat(a().block," ").concat(a().marginTop60),children:(0,e.jsx)("div",{className:a().dialog,children:(0,e.jsxs)("div",{className:"modal-content",children:[(0,e.jsx)(_,{timeoutHandler:m}),(0,e.jsxs)("div",{className:"modal-body",children:[(0,e.jsx)(l,{message:r}),(0,e.jsx)("button",{type:"button",className:"btn btn-block ".concat(a().continue),onClick:function(){return o()},children:"Okay"})]})]})})})})};function l(t){var n=t.message;return"string"==typeof n?(0,e.jsx)("p",{style:{padding:"0px 45px 30px 45px",margin:"0px",textAlign:"center",color:"#000",fontSize:"1.8rem",fontWeight:"400",lineHeight:"normal"},children:n}):(0,e.jsx)("div",{className:a().message,children:n.map((function(t,n){return(0,e.jsx)("p",{children:t},"message_".concat(n))}))})}var _=function(t){var n=t.message,r=void 0===n?"":n,o=t.onClose,c=t.Title,s=void 0===c?{Titledom:function(){},timeoutHandler:function(){}}:c,l=t.Body,_=void 0===l?{BodyDom:u}:l,m=t.submit,f=void 0===m?{}:m,v=s.Titledom,g=(s.closeHandle,_.BodyDom),b=_.actions,p=f.SubmitDom,h=f.Submitactions;return(0,e.jsx)(d,{onClose:function(){return o()},children:(0,e.jsx)("div",{className:"".concat(a().block," "),style:{width:"35%"},onClick:function(t){return t.stopPropagation()},children:(0,e.jsx)("div",{className:a().dialog,children:(0,e.jsxs)("div",{className:"modal-content",style:{padding:"5% 9.2% 5.49% 9.2%"},children:[(0,e.jsx)(v,{close:o}),(0,e.jsxs)("div",{style:{padding:"15px 0px"},children:[(0,e.jsx)(g,{message:r,actions:b}),(0,i.PR)(p)?(0,e.jsx)(p,{actions:h}):(0,e.jsx)("button",{type:"button",className:"btn btn-block ".concat(a().continue),onClick:function(){return o()},children:"Okay"})]})]})})})})},m=o.memo(_),f=o.memo(s)},41495:function(t,n,r){"use strict";r.d(n,{O:function(){return d},c:function(){return u}});var e=r(85893),o=r(7495),c=r.n(o);function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"===typeof t)return a(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(){return(0,e.jsx)("div",{className:"".concat(c().card),children:(0,e.jsxs)("div",{className:"".concat(c().cardBody),children:[(0,e.jsx)("h2",{className:"".concat(c().cardTitle," ").concat(c().skeleton)}),(0,e.jsx)("p",{className:"".concat(c().cardIntro," ").concat(c().skeleton)}),(0,e.jsx)("p",{className:"".concat(c().cardIntro," ").concat(c().skeleton)}),(0,e.jsxs)("div",{className:"".concat(c().buttonContainer),children:[(0,e.jsx)("button",{className:"".concat(c().cardBtn," ").concat(c().skeleton)}),(0,e.jsx)("button",{className:"".concat(c().cardBtn," ").concat(c().skeleton)})]})]})})}function u(t){var n=t.count,r=void 0===n?1:n;return(0,e.jsx)("div",{className:"".concat(c().card),children:(0,e.jsx)("div",{className:"".concat(c().cardBody),children:i(Array(r)).map((function(t,n){return(0,e.jsx)("h2",{className:"".concat(c().cardTitle," ").concat(c().skeleton)},n)}))})})}},52394:function(t,n,r){"use strict";r.d(n,{Z:function(){return a}});var e=r(67294),o=r(1531);function c(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=(0,e.useState)(t),r=n[0],a=n[1],i=(0,e.useRef)([]);(0,e.useEffect)((function(){i.current={}}),[r]);var d=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(Array.isArray(e)){if(0==(null===e||void 0===e?void 0:e.length)){if(Array.isArray(r)){if(!(0,o.PR)(i.current[t])){var a=r.map((function(t){return t}));i.current[t]=n(a)}return i.current[t]}if(!(0,o.PR)(i.current[t])){var d=Object.keys(r);i.current[t]={},d.forEach((function(e){return Object.assign(i.current[t],c({},e,n(r[e])))}))}return i.current[t]}if(!(0,o.PR)(i.current[t])){var u=e.map((function(t){return t}));i.current[t]=n(u)}return i.current[t]}if(0==Object.keys(e).length){if(Array.isArray(r)){if(!(0,o.PR)(i.current[t])){var s=r.map((function(t){return t}));i.current[t]=n(s)}return i.current[t]}if(!(0,o.PR)(i.current[t])){var l=Object.keys(r);i.current[t]={},l.forEach((function(e){return Object.assign(i.current[t],c({},e,n(r[e])))}))}return i.current[t]}if(!(0,o.PR)(i.current[t])){var _=Object.keys(e);i.current[t]={},_.forEach((function(r){return Object.assign(i.current[t],c({},r,n(e[r])))}))}return i.current[t]},u=function(t){return Array.isArray(r),(0,o.PR)(t)?i.current[t]:r};return[r,a,d,u]}},7115:function(t){t.exports={modalBackdrop:"fareFetch_modalBackdrop__ujIY4",fade:"fareFetch_fade__IT2Do",block:"fareFetch_block__38OHc",marginTop60:"fareFetch_marginTop60__sHK0m",continue:"fareFetch_continue__YRDRx",pad15:"fareFetch_pad15__Yn1sv",dialog:"fareFetch_dialog__0OZmG",message:"fareFetch_message__UuTph",title:"fareFetch_title__xwHEC",timmer:"fareFetch_timmer___VeUJ"}},7495:function(t){t.exports={card:"cardLoader_card__PRsYr",cardImg:"cardLoader_cardImg__6PN23",cardBody:"cardLoader_cardBody__FPH3a",cardTitle:"cardLoader_cardTitle__FoG41",skeleton:"cardLoader_skeleton__A_ClY",cardIntro:"cardLoader_cardIntro__XoHzN",shine:"cardLoader_shine__SAVdi",buttonContainer:"cardLoader_buttonContainer__iblsy",cardBtn:"cardLoader_cardBtn__ARd0b"}}}]);