(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n(7),i=n.n(a),s=n(2),u=n(9),j=function(e){var t=e.setCategories,n=Object(r.useState)(""),a=Object(s.a)(n,2),i=a[0],j=a[1];return Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),j(""))},children:Object(c.jsx)("input",{placeholder:"Buscar gif de...",type:"text",value:i,onChange:function(e){return function(e){j(e.target.value)}(e)}})})},d=n(10),o=n(6),l=n.n(o),b=n(8),p=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,c,r,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=Wu11gQtMk4XHBVp3XXe1dBEkerAPXEhd"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,a=r.data,i=a.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){e.id;var t=e.title,n=e.url;return Object(c.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(c.jsx)("img",{src:n,alt:t}),Object(c.jsx)("p",{children:t})]})},O=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){p(e).then((function(e){a({data:e,loading:!1})}))}),[e]),c}(t),a=n.data,i=n.loading;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:t}),i&&Object(c.jsxs)("div",{className:"spinner",children:[Object(c.jsx)("div",{className:"rect1"}),Object(c.jsx)("div",{className:"rect2"}),Object(c.jsx)("div",{className:"rect3"}),Object(c.jsx)("div",{className:"rect4"}),Object(c.jsx)("div",{className:"rect5"})]}),Object(c.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(c.jsx)(f,Object(d.a)({},e),e.id)}))})]})},x=function(){var e=Object(r.useState)(["Dragon Ball Z"]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"GifExpertApp"}),Object(c.jsx)(j,{setCategories:a}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{children:n.map((function(e){return Object(c.jsx)(O,{category:e},e)}))})]})};n(17);i.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2a6891a7.chunk.js.map