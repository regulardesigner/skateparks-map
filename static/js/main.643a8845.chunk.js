(this["webpackJsonpskateparks-map"]=this["webpackJsonpskateparks-map"]||[]).push([[0],{16:function(t,e,a){t.exports=a.p+"static/media/logo.aba790e0.svg"},20:function(t,e,a){t.exports=a(31)},30:function(t,e,a){},31:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),c=a(4),r=a.n(c),s=a(7),l=(a(30),a(12)),i=a(13),u=a(17),m=a(14),g=a(18),d=a(15),p=a.n(d),h=(a(5),function(t){var e=t.anchor,a=t.distance,n=t.infos,c=n.name,r=n.condition,s=t.top,l=t.left,i=t.id;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"infos park-".concat(i)},o.a.createElement("a",{href:"#close",className:"infos-btn-close",onClick:function(t){t.preventDefault(),t.target.parentNode.classList.toggle("show"),t.target.parentNode.nextSibling.classList.toggle("selected")}},"\u2715"),o.a.createElement("h2",null,c),o.a.createElement("section",null,o.a.createElement("p",null,"Ce skatepark est \xe0 ",o.a.createElement("strong",null,a," en jetpack")," de votre position actuelle"),o.a.createElement("p",null,"Note : ",r,"/5"),o.a.createElement("p",null,"Commentaire :")),o.a.createElement("div",{className:"actions"},o.a.createElement("a",{title:"open maps on mobile",className:"btn mobile-only",href:"geo:".concat(e[0],",").concat(e[1]),target:"_blank",rel:"noopener noreferrer"},"GO MOBILE"),o.a.createElement("a",{title:"open maps on browser",className:"btn browser-only",href:"https://maps.google.com/?q=".concat(e[0],",").concat(e[1]),target:"_blank",rel:"noopener noreferrer"},"GO BROWSER"))),o.a.createElement("div",{title:"".concat(c," \xe0 ").concat(a," de votre position"),style:{position:"absolute",transform:"translate(".concat(l,"px, ").concat(s,"px)")},className:"pin",onClick:function(t){console.log("I M YOUR PIN BITCH :",t.target);var e=t.target,a=document.querySelectorAll(".selected");a.length&&a.forEach((function(t){return t.classList.remove("selected")})),e.classList.toggle("selected");var n=document.querySelectorAll(".show");document.querySelector(".park-".concat(i)).classList.toggle("show"),n.length&&n.forEach((function(t){return t.classList.remove("show")}))}},c))}),f=function(t){var e=t.top,a=t.left,n=t.id;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:n,title:"this is you!",style:{position:"absolute",transform:"translate(".concat(a,"px, ").concat(e,"px)")},className:"user"},"You"))},E=a(16),k=a.n(E),v=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(u.a)(this,Object(m.a)(e).call(this))).state={lat:0,long:0,userPosition:{lat:0,long:0},accuracy:0,getUserLocation:!1,pins:[{id:0,lat:49.087707,long:2.505758,infos:{name:"Skateparks de marly-la-ville",condition:5}},{id:1,lat:49.087965,long:2.559108,infos:{name:"Skateparks de Saint Witz",condition:5}},{id:2,lat:49.0330887,long:2.4817129,infos:{name:"Skateparks de Goussainville",condition:3}},{id:3,lat:49.0511821,long:2.5099468,infos:{name:"Skateparks de Louvres",condition:2}},{id:4,lat:48.8301638,long:2.5244394,infos:{name:"Skatepaks de Brie sur Marne",condition:5}}]},t}return Object(g.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state.lat,e=this.state.long,a=this.state.userPosition.lat,n=this.state.userPosition.long,c=this.state.accuracy,r=this.state.pins,s=this.state.getUserLocation,l=this;navigator.geolocation.getCurrentPosition((function(t){console.info("I'm watching your position");var e=t.coords;s?l.setState({userPosition:{lat:e.latitude,long:e.longitude}}):l.setState({lat:e.latitude,long:e.longitude,accuracy:e.accuracy,getUserLocation:!0,userPosition:{lat:e.latitude,long:e.longitude}})}),(function(t){console.warn("ERREUR (".concat(t.code,"): ").concat(t.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0});var i=function(t,e,a,n){var o=(t-a)*Math.PI/180,c=(e-n)*Math.PI/180,r=Math.sin(o/2)*Math.sin(o/2)+Math.cos(t*Math.PI/180)*Math.cos(a*Math.PI/180)*Math.sin(c/2)*Math.sin(c/2),s=6371*(2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r)));return s>1?Math.round(s)+"km":s<=1?Math.round(1e3*s)+"m":s},u={osm:function(t,e,a){var n=String.fromCharCode(97+(t+e+a)%3);return"https://".concat(n,".tile.openstreetmap.org/").concat(a,"/").concat(t,"/").concat(e,".png")},wikimedia:function(t,e,a,n){return"https://maps.wikimedia.org/osm-intl/".concat(a,"/").concat(t,"/").concat(e).concat(n>=2?"@2x":"",".png")},stamen:function(t,e,a,n){return"https://stamen-tiles.a.ssl.fastly.net/terrain/".concat(a,"/").concat(t,"/").concat(e).concat(n>=2?"@2x":"",".jpg")},watercolor:function(t,e,a){return"http://c.tile.stamen.com/watercolor/".concat(a,"/").concat(t,"/").concat(e,".jpg")},light:function(t,e,a){return"http://a.tile.stamen.com/toner/".concat(a,"/").concat(t,"/").concat(e,".png")}};return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("h1",null,o.a.createElement("img",{className:"header-logo",src:k.a,alt:"logo skateparks map"})," Skateparks-map 0.0.2")),o.a.createElement(p.a,{center:[t,e],zoom:14,provider:u.osm,onclick:function(t){console.log("coucou")}},o.a.createElement(f,{key:"me",anchor:[a,n],offset:[12,34],id:"me"}),r.map((function(a,n){return o.a.createElement(h,{distance:i(t,e,a.lat,a.long),key:n,anchor:[a.lat,a.long],offset:[12,34],infos:a.infos,id:n})}))),o.a.createElement("footer",null,o.a.createElement("small",null,"lat:",t," long:",e," acc:",c," meters.")))}}]),e}(o.a.Component),b=a(3),w=a(19),y={message:"Hello from the store",coords:{lat:0,long:0}},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case"PUSH_USER_COORDS":return Object(w.a)({},t,{coords:{lat:e.lat,long:e.long}});default:return t}},O=function(t){return function(t){return function(e){console.log("Je suis le middleware, et je laisse passer cette action: ",e),t(e)}}},M=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.c)(Object(b.a)(O)),N=Object(b.d)(S,M);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=o.a.createElement(s.a,{store:N},o.a.createElement(v,null));r.a.render(P,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},5:function(t,e,a){}},[[20,1,2]]]);
//# sourceMappingURL=main.643a8845.chunk.js.map