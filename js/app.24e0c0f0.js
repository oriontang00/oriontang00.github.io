(function(e){function t(t){for(var o,c,i=t[0],l=t[1],u=t[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);s&&s(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"395d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"nav"},a=Object(o["g"])("Home"),c=Object(o["f"])("br",null,null,-1),i=Object(o["g"])("Login"),l=Object(o["f"])("br",null,null,-1),u=Object(o["g"])("UserRegistration"),s=Object(o["f"])("br",null,null,-1),d=Object(o["g"])("User"),p=Object(o["f"])("br",null,null,-1),f=Object(o["g"])("DefaultMap"),b=Object(o["f"])("br",null,null,-1),O=Object(o["g"])("AnalyticsDashboard");function h(e,t){var n=Object(o["x"])("router-link"),h=Object(o["x"])("router-view");return Object(o["q"])(),Object(o["e"])(o["a"],null,[Object(o["f"])("div",r,[Object(o["h"])(n,{to:"/"},{default:Object(o["E"])((function(){return[a]})),_:1}),c,Object(o["h"])(n,{to:"/login"},{default:Object(o["E"])((function(){return[i]})),_:1}),l,Object(o["h"])(n,{to:"/UserRegistration"},{default:Object(o["E"])((function(){return[u]})),_:1}),s,Object(o["h"])(n,{to:"/User"},{default:Object(o["E"])((function(){return[d]})),_:1}),p,Object(o["h"])(n,{to:"/Map"},{default:Object(o["E"])((function(){return[f]})),_:1}),b,Object(o["h"])(n,{to:"/Analytics"},{default:Object(o["E"])((function(){return[O]})),_:1})]),Object(o["h"])(h)],64)}n("c4d1");var m=n("6b0d"),j=n.n(m);const v={},y=j()(v,[["render",h]]);var g=y,k=n("6c02"),C={class:"hello"};function w(e,t,n,r,a,c){return Object(o["q"])(),Object(o["e"])("div",C,[Object(o["f"])("h1",null,Object(o["z"])(n.msg),1)])}var R={name:"HelloWorld",props:{msg:String}};n("ffd7");const S=j()(R,[["render",w],["__scopeId","data-v-43f48a4c"]]);var L=S,M={name:"Home",components:{HelloWorld:L}};const x=M;var z=x,B={id:"app"},A=Object(o["f"])("h1",null,"Sign In",-1),I={class:"form-group"};function _(e,t,n,r,a,c){return Object(o["q"])(),Object(o["e"])("div",B,[A,Object(o["f"])("form",I,[Object(o["F"])(Object(o["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.userLogin=t}),type:"text",class:"form-control",placeholder:"Username",required:""},null,512),[[o["C"],e.userLogin]]),Object(o["F"])(Object(o["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.emailLogin=t}),type:"text",class:"form-control",placeholder:"Email",required:""},null,512),[[o["C"],e.emailLogin]]),Object(o["f"])("input",{type:"submit",class:"btn btn-primary",onClick:t[2]||(t[2]=function(){return c.doLogin&&c.doLogin.apply(c,arguments)})})])])}n("e9c4");var D=n("bc3a"),q=n.n(D),U={el:"#app",name:"Home",methods:{doLogin:function(){void 0!==this.userLogin&&void 0!==this.emailLogin&&q.a.post("https://backend20220418173746.azurewebsites.net/overlayAPI/api/login",{UserName:this.userLogin,Email:this.emailLogin,Role:"Admin",Valid:!0},{withCredentials:!0}).then((function(e){var t=e.data.token;localStorage.setItem("token",JSON.stringify(t)),console.log(e),window.alert("login success with token = "+localStorage.getItem("token"))})).catch((function(e){console.log(e),window.alert("Login error")}))}}};const E=j()(U,[["render",_]]);var H=E,P={key:0},T=Object(o["f"])("a",{href:"#"},"Home ",-1),F=Object(o["f"])("a",{href:"#"},"AddRoute ",-1),N={key:1};function V(e,t,n,r,a,c){return e.loggedIn?(Object(o["q"])(),Object(o["e"])("h1",P,[T,F,Object(o["f"])("a",{onClick:t[0]||(t[0]=function(){return c.logout&&c.logout.apply(c,arguments)}),href:"#"},"LogOut")])):(Object(o["q"])(),Object(o["e"])("h1",N," not logged in, "+Object(o["z"])(e.loggedIn),1))}var J=n("1da1");n("96cf");function $(){return G.apply(this,arguments)}function G(){return G=Object(J["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=!1,q.a.defaults.headers.common.Authorization=localStorage.getItem("token"),e.next=4,q.a.post("https://backend20220418173746.azurewebsites.net/api/getToken").then((function(){t=!0})).catch((function(){}));case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),G.apply(this,arguments)}var W={data:function(){return{loggedIn:!1}},created:function(){var e=this;$().then((function(t){e.loggedIn=t}))},name:"UserProtected",methods:{logout:function(){localStorage.clear(),this.$router.push({name:"Login"})}}};const Z=j()(W,[["render",V]]);var K=Z,Q={class:"UserRegistration"},X=Object(o["f"])("h1",null,"Registration",-1),Y=Object(o["f"])("p",null,"Enter desired Username, Email, and passphrase",-1),ee={class:"form-group"};function te(e,t,n,r,a,c){return Object(o["q"])(),Object(o["e"])("div",Q,[X,Y,Object(o["f"])("form",ee,[Object(o["F"])(Object(o["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.userName=t}),type:"text",class:"form-control",placeholder:"Username",required:""},null,512),[[o["C"],e.userName]]),Object(o["F"])(Object(o["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.userEmail=t}),type:"text",class:"form-control",placeholder:"Email Address",required:""},null,512),[[o["C"],e.userEmail]]),Object(o["F"])(Object(o["f"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.userOTP=t}),type:"text",class:"form-control",placeholder:"Passphrase",required:""},null,512),[[o["C"],e.userOTP]]),Object(o["f"])("input",{type:"submit",class:"btn btn-primary",onClick:t[3]||(t[3]=function(){return c.doRegistration&&c.doRegistration.apply(c,arguments)})})])])}var ne={el:"app",name:"Home",methods:{doRegistration:function(){void 0!==this.userName&&void 0!==this.userEmail&&void 0!==this.userOTP&&q.a.post("https://backend20220418173746.azurewebsites.net/user/CreateUser",{Username:this.userName,Email:this.userEmail,Passphrase:this.userTOP,Role:"User",Valid:!0}).then((function(e){console.log(e),window.alert("Email confirmation pending")})).catch((function(e){console.log(e),window.alert("Account creation error. Retry again or contact system administrator")}))}}};const oe=j()(ne,[["render",te]]);var re=oe;function ae(e,t,n,r,a,c){var i=Object(o["x"])("MainMap");return Object(o["q"])(),Object(o["d"])(i,{api_key:"pk.eyJ1IjoiYXBwbGVmdSIsImEiOiJja3p5dWV1eTkwM3gyM2lteGZqZGszNTBjIn0.CLc4mochtSCflbpW9BPH4Q"})}var ce=function(e){return Object(o["t"])("data-v-28d7921b"),e=e(),Object(o["r"])(),e},ie=ce((function(){return Object(o["f"])("div",{id:"map"},null,-1)}));function le(e,t,n,r,a,c){var i=Object(o["x"])("MapHeader"),l=Object(o["x"])("MapSearchRectangle"),u=Object(o["x"])("MapFooter");return Object(o["q"])(),Object(o["e"])(o["a"],null,[Object(o["h"])(i),Object(o["h"])(l,{id:"MapSearchRec"}),ie,Object(o["h"])(u,{onSelectedOverlayColor:c.onOverlayColorChange,onSelectedDimFooter:c.onReceiveOverlay},null,8,["onSelectedOverlayColor","onSelectedDimFooter"])],64)}n("d81d"),n("d3b7"),n("159b");var ue={id:"mapSearchBox"},se=Object(o["f"])("input",{type:"text",id:"startLocation",placeholder:"Start Location"},null,-1),de=Object(o["f"])("br",null,null,-1),pe=Object(o["f"])("br",null,null,-1),fe=Object(o["f"])("input",{type:"submit",hidden:""},null,-1);function be(e,t,n,r,a,c){return Object(o["q"])(),Object(o["e"])("div",ue,[Object(o["f"])("form",null,[se,de,Object(o["f"])("input",{onKeyup:t[0]||(t[0]=Object(o["G"])((function(){return c.onSearchEnter&&c.onSearchEnter.apply(c,arguments)}),["enter"])),type:"text",id:"destinationLocation",placeholder:"Destination Location"},null,32),pe,fe])])}var Oe={name:"MapSearchRectangle",methods:{onSearchEnter:function(){console.log("test")}}};const he=j()(Oe,[["render",be]]);var me=he,je={id:"mapHeader"};function ve(e,t,n,r,a,c){return Object(o["q"])(),Object(o["e"])("div",je,[Object(o["f"])("button",{id:"homeButton",onClick:t[0]||(t[0]=function(){return c.doHomeButtonClick&&c.doHomeButtonClick.apply(c,arguments)})},"Home Button"),Object(o["f"])("button",{id:"savedRoutesButton",onClick:t[1]||(t[1]=function(){return c.doSavedRoutesButtonClick&&c.doSavedRoutesButtonClick.apply(c,arguments)})},"Saved Routes"),Object(o["f"])("button",{id:"accountButton",onClick:t[2]||(t[2]=function(){return c.doAccountButtonClick&&c.doAccountButtonClick.apply(c,arguments)})},"Account")])}var ye={name:"MapHeader",methods:{doHomeButtonClick:function(){},doSavedRoutesButtonClick:function(){},doAccountButtonClick:function(){}}};n("72ce");const ge=j()(ye,[["render",ve],["__scopeId","data-v-31a4a6ac"]]);var ke=ge,Ce={id:"mapFooter"};function we(e,t,n,r,a,c){var i=Object(o["x"])("MapOverlay");return Object(o["q"])(),Object(o["e"])("div",Ce,[Object(o["f"])("button",{id:"routeAnalysisButton",onClick:t[0]||(t[0]=function(){return c.doRouteAnalysisButtonClick&&c.doRouteAnalysisButtonClick.apply(c,arguments)})},"Route Analysis"),Object(o["f"])("button",{id:"hazardButton",onClick:t[1]||(t[1]=function(){return c.doHazardButtonClick&&c.doHazardButtonClick.apply(c,arguments)})},"Report Hazard"),Object(o["h"])(i,{onSelectedColor:c.onOverlayColorChange,onSelectedDim:c.onOverlaySelect},null,8,["onSelectedColor","onSelectedDim"])])}var Re=function(e){return Object(o["t"])("data-v-09a85120"),e=e(),Object(o["r"])(),e},Se={id:"overlayColors"},Le=Re((function(){return Object(o["f"])("h3",null,"Overlay color selection",-1)})),Me=Re((function(){return Object(o["f"])("option",null," Default ",-1)})),xe={id:"overlayButtons"},ze=Re((function(){return Object(o["f"])("h1",null,"Overlay",-1)})),Be=Re((function(){return Object(o["f"])("option",null," None ",-1)}));function Ae(e,t,n,r,a,c){return Object(o["q"])(),Object(o["e"])(o["a"],null,[Object(o["f"])("div",Se,[Le,Object(o["F"])(Object(o["f"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.selectedColor=e})},[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(a.possibleColors,(function(e){return Object(o["q"])(),Object(o["e"])("option",{key:e.value},Object(o["z"])(e),1)})),128)),Me],512),[[o["B"],a.selectedColor]])]),Object(o["f"])("div",xe,[ze,Object(o["F"])(Object(o["f"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.selectedOverlay=e})},[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(a.possibleOverlays,(function(e){return Object(o["q"])(),Object(o["e"])("option",{key:e.value},Object(o["z"])(e),1)})),128)),Be],512),[[o["B"],a.selectedOverlay]])])],64)}var Ie={components:{},name:"MapOverlay",data:function(){return{possibleOverlays:{},selectedOverlay:"",overlayDims:[],selectedColor:"",possibleColors:["red","yellow","grey","blue","purple","green"]}},methods:{getOverlays:function(){return Object(J["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],q.a.defaults.headers.common.Authorization=localStorage.getItem("token"),e.next=4,q.a.get("https://backend20220418173746.azurewebsites.net/overlayAPI/api/overlay/all",{withCredentials:!0}).then(function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n;case 2:t=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){}));case 4:return e.abrupt("return",t.data.overlays);case 5:case"end":return e.stop()}}),e)})))()},getOverlayDim:function(e){return Object(J["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[],q.a.defaults.headers.common.Authorization=localStorage.getItem("token"),t.next=4,q.a.get("https://backend20220418173746.azurewebsites.net/overlayAPI/api/overlay/dim",{withCredentials:!0,params:{overlayName:e}}).then(function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:n=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){}));case 4:return t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;this.getOverlays().then((function(t){e.possibleOverlays=t}))},updated:function(){var e=this;"None"!==this.selectedOverlay&&""!==this.selectedOverlay&&(console.log(this.selectedOverlay),this.getOverlayDim(this.selectedOverlay).then((function(t){"Default"===e.selectedColor||(t.overlayColor=e.selectedColor),e.$emit("selectedDim",t)}))),"None"===this.selectedOverlay&&this.$emit("selectedDim","None")}};n("9a56");const _e=j()(Ie,[["render",Ae],["__scopeId","data-v-09a85120"]]);var De=_e,qe={components:{MapOverlay:De},name:"MapFooter",methods:{doRouteAnalysisButtonClick:function(){},doHazardButtonClick:function(){},onOverlaySelect:function(e){this.$emit("selectedDimFooter",e)},onOverlayColorChange:function(e){this.$emit("selectedOverlayColor",e)}}};n("790a");const Ue=j()(qe,[["render",we],["__scopeId","data-v-927487e4"]]);var Ee=Ue,He=(n("ac6d"),n("e192")),Pe=n.n(He),Te={components:{MapSearchRectangle:me,MapFooter:Ee,MapHeader:ke},methods:{removeOverlays:function(){this.map.getLayer("userLayer")&&this.map.removeLayer("userLayer"),this.map.getLayer("outline")&&this.map.removeLayer("outline"),this.map.getSource("userLayer")&&this.map.removeSource("userLayer")},changeOverlayColor:function(e){this.map.getLayer("userLayer").paint={"fill-color":e}},addOverlays:function(e){var t=[];e.overlayStructure.forEach((function(e){t.push([e.longPoint,e.latPoint])})),this.map.addSource("userLayer",{type:"geojson",data:{type:"Feature",geometry:{type:"Polygon",coordinates:[t]}}}),this.map.addLayer({id:"userLayer",type:"fill",source:"userLayer",layout:{},paint:{"fill-color":e.overlayColor,"fill-opacity":.5}}),this.map.addLayer({id:"outline",type:"line",source:"userLayer",layout:{},paint:{"line-color":"#000","line-width":3}})},onReceiveOverlay:function(e){"None"!==e?(this.removeOverlays(),this.addOverlays(e)):this.removeOverlays()},onOverlayColorChange:function(e){"Default"!==e&&this.changeOverlayColor(e)}},props:["api_key"],mounted:function(){Pe.a.accessToken=this.api_key,this.map=new Pe.a.Map({container:"map",style:"mapbox://styles/mapbox/satellite-v9",center:[-118.1109043,33.7827241],zoom:14})}};n("8a8e");const Fe=j()(Te,[["render",le],["__scopeId","data-v-28d7921b"]]);var Ne=Fe,Ve={components:{MainMap:Ne},name:"LoggedInInitialView",created:function(){q.a.defaults.headers.common.Authorization=localStorage.getItem("token")}};const Je=j()(Ve,[["render",ae]]);var $e=Je,Ge=Object(o["f"])("h1",null,"Retrieve Data",-1),We={class:"form-group"},Ze=Object(o["f"])("h1",null,"Marker Data",-1),Ke=Object(o["f"])("h1",null," Top 5 Longest Views of All Time",-1),Qe=Object(o["f"])("h1",null," Number of Logins daily for the last three months",-1),Xe=Object(o["f"])("h1",null,"Number of Registrations daily for last three months",-1);function Ye(e,t,n,r,a,c){return Object(o["q"])(),Object(o["e"])(o["a"],null,[Object(o["f"])("div",null,[Ge,Object(o["f"])("form",We,[Object(o["f"])("input",{type:"submit",class:"btn btn-primary",onClick:t[0]||(t[0]=function(){return c.getData&&c.getData.apply(c,arguments)})})])]),Object(o["f"])("div",null,[Ze,Object(o["g"])(" "+Object(o["z"])(e.markers)+" ",1),Ke,Object(o["g"])(" "+Object(o["z"])(e.topDurations)+" ",1),Qe,Object(o["g"])(" "+Object(o["z"])(e.lastThreeMonthLogins)+" ",1),Xe,Object(o["g"])(" "+Object(o["z"])(e.lastThreeMonthRegistrations),1)])],64)}var et={el:"#app",name:"Analytics",methods:{getData:function(){var e=this;q.a.get("https://backend20220418173746.azurewebsites.net/api/hazards/getHazards").then((function(t){return e.markers=t.data})),q.a.get("https://backend20220418173746.azurewebsites.net/api/analytics/topDurations").then((function(t){return e.topDurations=t.data})),q.a.get("https://backend20220418173746.azurewebsites.net/api/analytics/lastThreeMonthLogins").then((function(t){return e.lastThreeMonthLogins=t.data})),q.a.get("https://backend20220418173746.azurewebsites.net/api/analytics/lastThreeMonthRegistrations").then((function(t){return e.lastThreeMonthRegistrations=t.data}))}}};const tt=j()(et,[["render",Ye]]);var nt=tt,ot=[{path:"/",name:"Home",component:z},{path:"/login",name:"Login",component:H},{path:"/UserRegistration",name:"UserRegistration",component:re},{path:"/user",name:"User",component:K},{path:"/map",name:"Map",component:$e},{path:"/analytics",name:"Analytics",component:nt}],rt=Object(k["a"])({history:Object(k["b"])(),routes:ot}),at=rt,ct=n("5502"),it=Object(ct["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["c"])(g).use(it).use(at).mount("#app")},6847:function(e,t,n){},"72ce":function(e,t,n){"use strict";n("395d")},"790a":function(e,t,n){"use strict";n("dba6")},"8a8e":function(e,t,n){"use strict";n("edfe")},"8b55":function(e,t,n){},"9a56":function(e,t,n){"use strict";n("8b55")},c4d1:function(e,t,n){"use strict";n("6847")},dba6:function(e,t,n){},edfe:function(e,t,n){},f540:function(e,t,n){},ffd7:function(e,t,n){"use strict";n("f540")}});
//# sourceMappingURL=app.24e0c0f0.js.map