(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),i=n.n(c),o=(n(15),n(4)),l=n(5),u=n(7),s=n(6),m=n(8),d=(n(16),n(1)),f=(n(17),r.a.memo(function(e){var t=e.children,n=e.className,a=e.onClick,c=e.keyRef;return r.a.createElement("button",{onClick:a,className:"Button ".concat(n||""),ref:c},t)}));n(18);var v=function(e){var t,n,c=["1","2","3","4","5","6","7","8","9","Del"],i=["0"];t=[].concat(c,i),n=function(t){e.keyPress(t)},Object(a.useEffect)(function(){var e=function(e){var a=e.key;a&&(t.includes(a)&&n(a),"Backspace"===a&&t.includes("Del")&&n("Del"))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}});var o=function(t,n){return r.a.createElement(f,{key:t,onClick:function(n){return a=t,void e.keyPress(a);var a},className:n||""},t)};return r.a.createElement("div",{className:"Numpad"},c.map(function(e){return o(e)}),i.map(function(e){return o(e,"two-col")}))},p=function(e){var t=e.value;return r.a.createElement("div",null,"Value: ",t)},k=(n(19),function(e){var t=e.itemSelected,n=function(e,n){return r.a.createElement(f,{key:e.title,onClick:function(){return t(e)},className:n},e.title)};return r.a.createElement("div",{className:"FoodItems"},[{title:"4x4",price:0},{title:"Triple Triple",price:0},{title:"Double Double",price:0},{title:"Regular",price:0}].map(function(e){return n(e,"coffee-addons")}),[{title:"SM Dark Roast",price:1.05},{title:"MD Dark Roast",price:1.17},{title:"LG Dark Roast",price:1.31},{title:"XL Dark Roast",price:1.49}].map(function(e){return n(e,"dark-roast")}),[{title:"SM Orig Blend",price:1.05},{title:"MD Orig Blend",price:1.17},{title:"LG Orig Blend",price:1.31},{title:"XL Orig Blend",price:1.49}].map(function(e){return n(e,"original-blend")}))}),E=function(e){return r.a.createElement("div",{className:"ExtraButtons"},r.a.createElement(f,{onClick:function(){return e.itemVoid()},className:"item-void two-col"},"Item Void"),r.a.createElement(f,{onClick:function(){return console.log("Take-Out")},className:"take-out"},"Take-Out"),r.a.createElement(f,{onClick:function(){return console.log("Eat In")},className:"eat-in"},"Eat In"))},g=(n(20),function(e){var t=Object(a.useState)(0),n=Object(d.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)(""),l=Object(d.a)(o,2),u=l[0],s=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"screen"},r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"food-items"},r.a.createElement(k,{itemSelected:function(e){console.log("Item selected!",e)}}),r.a.createElement(E,{itemVoid:function(){console.log("Void last item")}})),r.a.createElement("div",{className:"numpad"},r.a.createElement(v,{keyPress:function(e){var t=u;"Del"===e?u.length>=1&&(t=t.substring(0,t.length-1)):t+=e,s(t),i(function(e){var t=e;switch(e.length){case 0:return 0;case 1:t=".0"+e;break;default:t=e.slice(0,e.length-2)+"."+e.slice(e.length-2)}try{return parseFloat(t)}catch(n){return 0}}(t))}}))),r.a.createElement("div",{className:"totals"},r.a.createElement(p,{value:c}))))}),w=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(g,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.2efed5eb.chunk.js.map