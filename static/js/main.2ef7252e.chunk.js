(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{30:function(t,n,e){t.exports={Popup:"Map_Popup__2qCrC"}},31:function(t,n,e){t.exports={Nav:"Navigation_Nav__1qXl3"}},41:function(t,n,e){},42:function(t,n,e){},67:function(t,n,e){"use strict";e.r(n);var c=e(1),o=e(0),r=e.n(o),i=e(6),a=e.n(i),s=(e(41),e(10)),j=e(11),u=e(15),d=e(14),l=(e(42),e(69)),h=e(72),p=e(70),b=e(71),O=e(4),f=e(30),x=e.n(f),g=function(t){Object(u.a)(e,t);var n=Object(d.a)(e);function e(){return Object(s.a)(this,e),n.apply(this,arguments)}return Object(j.a)(e,[{key:"render",value:function(){var t=new O.Icon({iconUrl:"https://cdn1.iconfinder.com/data/icons/locations-6/48/1-512.png",iconSize:[30,30]}),n=Object(c.jsx)("p",{children:"Data is Loading"});return this.props.data.length>0&&(n=Object(c.jsxs)(l.a,{center:[0,0],zoom:3,minZoom:3,maxZoom:10,maxBounds:[[180,-180],[-180,180]],children:[Object(c.jsx)(h.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',noWrap:!0}),this.props.data.map((function(n){return Object(c.jsx)(p.a,{position:[n.countryInfo.lat,n.countryInfo.long],icon:t,children:Object(c.jsx)(b.a,{children:Object(c.jsxs)("div",{className:x.a.Popup,children:[Object(c.jsx)("img",{src:n.countryInfo.flag,alt:n.country+" flag"}),Object(c.jsx)("h2",{children:n.country}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("strong",{children:"Confirmed:"})," ",n.cases]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("strong",{children:"Deaths:"})," ",n.deaths]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("strong",{children:"Recovered:"})," ",n.recovered]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("strong",{children:"Last Update:"})," ",new Date(n.updated).toLocaleString()]})]})]})})},n.country)}))]})),Object(c.jsx)(o.Fragment,{children:n})}}]),e}(o.Component),v=e(31),m=e.n(v),y=function(){return Object(c.jsx)("header",{children:Object(c.jsx)("nav",{className:m.a.Nav,children:Object(c.jsx)("h1",{children:"COVID19 TRACKER"})})})},I=(e(43),e(12)),C="SET_INFO",N=e(33),k=e.n(N),_=function(){return function(t){k.a.get("https://corona.lmao.ninja/v2/countries").then((function(n){var e;t((e=n.data,{type:C,info:e}))}))}},D=function(t){Object(u.a)(e,t);var n=Object(d.a)(e);function e(){return Object(s.a)(this,e),n.apply(this,arguments)}return Object(j.a)(e,[{key:"componentDidMount",value:function(){this.props.onInitInfo()}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(y,{}),Object(c.jsx)(g,{data:this.props.info})]})}}]),e}(o.Component),F=Object(I.b)((function(t){return{info:t.data}}),(function(t){return{onInitInfo:function(){return t(_())}}}))(D),S=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,73)).then((function(n){var e=n.getCLS,c=n.getFID,o=n.getFCP,r=n.getLCP,i=n.getTTFB;e(t),c(t),o(t),r(t),i(t)}))},w=e(34),L=e(9),P=e(5),M={data:[]},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case C:return Object(P.a)(Object(P.a)({},t),{},{data:n.info});default:return t}},z=Object(L.c)(T,Object(L.a)(w.a)),B=Object(c.jsx)(I.a,{store:z,children:Object(c.jsx)(F,{})});a.a.render(Object(c.jsx)(r.a.StrictMode,{children:B}),document.getElementById("root")),S()}},[[67,1,2]]]);
//# sourceMappingURL=main.2ef7252e.chunk.js.map