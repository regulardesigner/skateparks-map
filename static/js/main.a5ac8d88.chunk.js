(this["webpackJsonpskateparks-map"]=this["webpackJsonpskateparks-map"]||[]).push([[0],{10:function(e,t,n){},19:function(e,t,n){e.exports=n(30)},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),l=n.n(c),r=n(6),s=(n(29),n(12)),i=n(13),u=n(16),m=n(14),g=n(17),d=n(15),p=n.n(d),f=(n(10),function(e){var t=e.anchor,n=e.infos,a=n.name,c=n.condition,l=e.top,r=e.left,s=e.id;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"infos park-".concat(s)},o.a.createElement("a",{href:"#close",className:"infos-btn-close",onClick:function(e){e.preventDefault(),e.target.parentNode.classList.toggle("show")}},"\u2715"),o.a.createElement("h2",null,a),o.a.createElement("p",null,c),o.a.createElement("a",{title:"open maps on mobile",className:"btn mobile-only",href:"geo:".concat(t[0],",").concat(t[1]),target:"_blank",rel:"noopener noreferrer"},"GO MOBILE"),o.a.createElement("a",{title:"open maps on browser",className:"btn browser-only",href:"https://maps.google.com/?q=".concat(t[0],",").concat(t[1]),target:"_blank",rel:"noopener noreferrer"},"GO BROWSER")),o.a.createElement("div",{title:a,style:{position:"absolute",transform:"translate(".concat(r,"px, ").concat(l,"px)")},className:"pin",onClick:function(e){console.log("I M YOUR PIN BITCH :",e.target),e.target.classList.toggle("selected");var t=document.querySelectorAll(".show");document.querySelector(".park-".concat(s)).classList.toggle("show"),t.length&&t.forEach((function(e){return e.classList.remove("show")}))}},a))}),h=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={lat:0,long:0,accuracy:0,pins:[{id:0,lat:49.087707,long:2.505758,infos:{name:"Skateparks de marly-la-ville",condition:5}},{id:1,lat:49.087965,long:2.559108,infos:{name:"Skateparks de Saint Witz",condition:5}},{id:2,lat:49.0330887,long:2.4817129,infos:{name:"Skateparks de Goussainville",condition:3}},{id:3,lat:49.0511821,long:2.5099468,infos:{name:"Skateparks de Louvres",condition:2}}]},e}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){var n=t.coords;e.setState({lat:n.latitude,long:n.longitude,accuracy:n.accuracy})}),(function(e){console.warn("ERREUR (".concat(e.code,"): ").concat(e.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0});var t=this.state.lat,n=this.state.long,a=this.state.accuracy,c=this.state.pins;return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("h1",null,"Skateparks-map")),o.a.createElement(p.a,{center:[t,n],zoom:14,onclick:function(e){console.log("coucou")}},c.map((function(e,t){return o.a.createElement(f,{key:t,anchor:[e.lat,e.long],infos:e.infos,id:t})}))),o.a.createElement("footer",null,o.a.createElement("small",null,"lat:",t," long:",n," acc:",a," meters.")))}}]),t}(o.a.Component),E=n(3),k=n(18),v={message:"Hello from the store",coords:{lat:0,long:0}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"PUSH_USER_COORDS":return Object(k.a)({},e,{coords:{lat:t.lat,long:t.long}});default:return e}},O=function(e){return function(e){return function(t){console.log("Je suis le middleware, et je laisse passer cette action: ",t),e(t)}}},w=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.c)(Object(E.a)(O)),y=Object(E.d)(b,w);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=o.a.createElement(r.a,{store:y},o.a.createElement(h,null));l.a.render(S,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.a5ac8d88.chunk.js.map