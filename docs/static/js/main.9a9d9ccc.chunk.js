(this["webpackJsonpstring-detector"]=this["webpackJsonpstring-detector"]||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(4),r=n.n(a),i=n(2),o=n(6),l=Object(o.b)({name:"app",initialState:{inputText:"",highlightArray:[]},reducers:{updateInputText:function(e,t){e.inputText=t.payload},updateHighlightArray:function(e,t){e.highlightArray=t.payload}}}),s=l.actions,u=s.updateInputText,d=s.updateHighlightArray,j=l.reducer,p=n(5),h=n(3),b=n(10),O=(n(21),n(1)),f=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.app})),n=t.inputText,a=Object(c.useState)({find:"",replace:""}),r=Object(b.a)(a,2),o=r[0],l=r[1],s=o.find,j=o.replace;Object(c.useEffect)((function(){g()}),[n,s]);var f=[],x=0,g=function(){if(x=0,f=[],""!==s)do{if(-1!==(x=n.indexOf(s,x))){for(var t=x;t<x+s.length;t++)f.push(t);x+=s.length}}while(-1!==x);e(d(f))},m=function(e){var t=e.target;l(Object(h.a)(Object(h.a)({},o),{},Object(p.a)({},t.name,t.value)))};return Object(O.jsxs)("div",{className:"detector_container",children:[Object(O.jsxs)("div",{className:"detector_container_inner",children:[Object(O.jsx)("textarea",{placeholder:"Text to find...",name:"find",value:s,onChange:m}),Object(O.jsx)("button",{className:"detector_container_inner_button--remove",onClick:function(){e(u(n.replaceAll(s,"")))},children:"Remove"})]}),Object(O.jsxs)("div",{className:"detector_container_inner",children:[Object(O.jsx)("textarea",{placeholder:"Replace with...",name:"replace",value:j,onChange:m}),Object(O.jsx)("button",{className:"detector_container_inner_button--replace",onClick:function(){""!==j&&e(u(n.replaceAll(s,j)))},children:"Replace"})]})]})},x=(n(23),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.app})),n=t.inputText,c=t.highlightArray,a=n.split("");return Object(O.jsxs)("div",{className:"main_container",children:[Object(O.jsx)("h1",{children:"Start typing some words to see the magic"}),Object(O.jsx)("textarea",{className:"main_container_textarea",placeholder:"Don't be shy, start typing...",value:n,onChange:function(t){e(u(t.target.value))}}),Object(O.jsx)("div",{className:"main_container_div",children:a.map((function(e,t){return Object(O.jsx)("span",{style:c.includes(t)?{color:"red"}:{},children:e},t)}))}),Object(O.jsx)(f,{})]})}),g=Object(o.a)({reducer:{app:j}});n(24);r.a.render(Object(O.jsx)(i.a,{store:g,children:Object(O.jsx)(x,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.9a9d9ccc.chunk.js.map