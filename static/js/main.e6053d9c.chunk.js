(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{17:function(t,a,e){t.exports={TrackerStats:"Statistics_TrackerStats__1BU8f",List:"Statistics_List__ujLfc",TrackerStat:"Statistics_TrackerStat__Z8Hv9",TrackerStatPrimary:"Statistics_TrackerStatPrimary__OLNve",TrackerStatSecondary:"Statistics_TrackerStatSecondary__1hpz_"}},199:function(t,a,e){"use strict";e.r(a);var n=e(1),r=e(0),i=e.n(r),o=e(14),s=e.n(o),c=(e(82),e(8)),l=e(9),d=e(12),u=e(11),p=(e(83),e(201)),h=e(204),b=e(202),j=e(203),v=e(5),O=e(42),f=e.n(O),y=e(10),g="SET_INFO",m="SET_STAT",x="SET_GRAPH_STAT",S="FETCH_START",T="FETCH_SUCCESS",M=e(28),_=e.n(M),C=function(){return{type:S}},k=function(){return{type:T}},P=function(){return function(t){t(C()),_.a.get("https://corona.lmao.ninja/v3/covid-19/countries").then((function(a){var e;t((e=a.data,{type:g,info:e})),t(k())}))}},N=function(){return function(t){t(C()),_.a.get("https://corona.lmao.ninja/v3/covid-19/all").then((function(a){var e;t((e=a.data,{type:m,stat:e})),t(k())}))}},D=function(){return function(t){t(C()),_.a.get("https://corona.lmao.ninja/v3/covid-19/historical/all").then((function(a){var e;t((e=a.data,{type:x,data:e})),t(k())}))}},I=function(t){var a="".concat(t);return(a=a.split("")).reverse(),(a=(a=a.reduce((function(t,e,n){var r=(n+1)%3===0&&n+1<a.length,i="".concat(t).concat(e);return r&&(i="".concat(i,",")),i}),"")).split("")).reverse(),a=a.join("")},L=function(t){Object(d.a)(e,t);var a=Object(u.a)(e);function e(){return Object(c.a)(this,e),a.apply(this,arguments)}return Object(l.a)(e,[{key:"componentDidMount",value:function(){this.props.onInitInfo()}},{key:"render",value:function(){var t=new v.Icon({iconUrl:"https://cdn1.iconfinder.com/data/icons/locations-6/48/1-512.png",iconSize:[30,30]}),a=Object(n.jsx)("p",{children:"Data is Loading"});return this.props.data.length>0&&(a=Object(n.jsxs)(p.a,{center:[0,0],zoom:3,minZoom:3,maxZoom:10,maxBounds:[[180,-180],[-180,180]],children:[Object(n.jsx)(h.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',noWrap:!0}),this.props.data.map((function(a){return Object(n.jsx)(b.a,{position:[a.countryInfo.lat,a.countryInfo.long],icon:t,children:Object(n.jsx)(j.a,{children:Object(n.jsxs)("div",{className:f.a.Popup,children:[Object(n.jsx)("img",{src:a.countryInfo.flag,alt:a.country+" flag"}),Object(n.jsx)("h2",{children:a.country}),Object(n.jsxs)("ul",{className:f.a.MapUL,children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Confirmed:"})," ",I(a.cases)]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Deaths:"})," ",I(a.deaths)]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Recovered:"})," ",I(a.recovered)]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Last Update:"})," ",new Date(a.updated).toLocaleString()]})]})]})})},a.country)}))]})),Object(n.jsx)(r.Fragment,{children:a})}}]),e}(r.Component),R=Object(y.b)((function(t){return{data:t.data}}),(function(t){return{onInitInfo:function(){return t(P())}}}))(L),w=e(73),E=e.n(w),F=function(){return Object(n.jsx)("header",{children:Object(n.jsx)("nav",{className:E.a.Nav,children:Object(n.jsx)("h1",{children:"COVID19 TRACKER"})})})},z=e(17),A=e.n(z),G=function(t){Object(d.a)(e,t);var a=Object(u.a)(e);function e(){return Object(c.a)(this,e),a.apply(this,arguments)}return Object(l.a)(e,[{key:"componentDidMount",value:function(){this.props.onInitStat()}},{key:"render",value:function(){var t,a,e,r,i,o,s,c,l,d,u,p,h,b,j,v=[{primary:{label:"Today's Cases",value:I(Math.trunc(null===(t=this.props.data)||void 0===t?void 0:t.todayCases))}},{primary:{label:"Today's Deaths",value:I(Math.trunc(null===(a=this.props.data)||void 0===a?void 0:a.todayDeaths))}},{primary:{label:"Today's Recovered",value:I(Math.trunc(null===(e=this.props.data)||void 0===e?void 0:e.todayRecovered))}},{primary:{label:"Total Cases",value:I(Math.trunc(null===(r=this.props.data)||void 0===r?void 0:r.cases))},secondary:{label:"Per 1 Million",value:I(Math.trunc(null===(i=this.props.data)||void 0===i?void 0:i.casesPerOneMillion))}},{primary:{label:"Total Deaths",value:I(Math.trunc(null===(o=this.props.data)||void 0===o?void 0:o.deaths))},secondary:{label:"Per 1 Million",value:I(Math.trunc(null===(s=this.props.data)||void 0===s?void 0:s.deathsPerOneMillion))}},{primary:{label:"Total Active",value:I(Math.trunc(null===(c=this.props.data)||void 0===c?void 0:c.active))},secondary:{label:"Per 1 Million",value:I(Math.trunc(null===(l=this.props.data)||void 0===l?void 0:l.activePerOneMillion))}},{primary:{label:"Total Recovered",value:I(Math.trunc(null===(d=this.props.data)||void 0===d?void 0:d.recovered))},secondary:{label:"Per 1 Million",value:I(Math.trunc(null===(u=this.props.data)||void 0===u?void 0:u.recoveredPerOneMillion))}},{primary:{label:"Total Tests",value:I(Math.trunc(null===(p=this.props.data)||void 0===p?void 0:p.tests))},secondary:{label:"Per 1 Million",value:I(Math.trunc(null===(h=this.props.data)||void 0===h?void 0:h.testsPerOneMillion))}},{primary:{label:"Total Critical",value:I(Math.trunc(null===(b=this.props.data)||void 0===b?void 0:b.critical))},secondary:{label:"Per 1 Million",value:I(Math.trunc(null===(j=this.props.data)||void 0===j?void 0:j.criticalPerOneMillion))}}],O=null;return this.props.loading||(O=Object(n.jsx)("div",{className:A.a.TrackerStats,children:Object(n.jsx)("ul",{className:A.a.List,children:v.map((function(t,a){var e=t.primary,r=void 0===e?{}:e,i=t.secondary,o=void 0===i?{}:i;return Object(n.jsxs)("li",{className:A.a.TrackerStat,children:[Object(n.jsx)("p",{className:A.a.TrackerStatPrimary,children:r.value}),Object(n.jsx)("strong",{children:r.label}),o?Object(n.jsxs)("p",{className:A.a.TrackerStatSecondary,children:[o.value,Object(n.jsxs)("strong",{children:[" ",o.label]})]}):null]},"Stat-".concat(a))}))})})),O}}]),e}(r.Component),U=Object(y.b)((function(t){return{data:t.statistics,loading:t.loading}}),(function(t){return{onInitStat:function(){return t(N())}}}))(G),B=e(29),H=e(74),W=e.n(H),Z=function(t){Object(d.a)(e,t);var a=Object(u.a)(e);function e(){return Object(c.a)(this,e),a.apply(this,arguments)}return Object(l.a)(e,[{key:"componentDidMount",value:function(){this.props.onInitGraph()}},{key:"render",value:function(){var t={cases:{labels:this.props.data.cases?Object.getOwnPropertyNames(this.props.data.cases):[],datasets:[{label:"Cases",fill:!1,lineTension:.5,backgroundColor:"rgba(13,46,166,751)",borderColor:"rgba(44,0,0,1)",borderWidth:2,data:this.props.data.cases?Object.values(this.props.data.cases):[]}]},deaths:{labels:this.props.data.cases?Object.getOwnPropertyNames(this.props.data.cases):[],datasets:[{label:"Deaths",fill:!1,lineTension:.5,backgroundColor:"rgba(13,46,166,751)",borderColor:"rgba(44,0,0,1)",borderWidth:2,data:this.props.data.cases?Object.values(this.props.data.deaths):[]}]},recovered:{labels:this.props.data.cases?Object.getOwnPropertyNames(this.props.data.cases):[],datasets:[{label:"Recovered",fill:!1,lineTension:.5,backgroundColor:"rgba(13,46,166,751)",borderColor:"rgba(44,0,0,1)",borderWidth:2,data:this.props.data.cases?Object.values(this.props.data.recovered):[]}]}},a=null;return this.props.loading||(a=Object(n.jsxs)("div",{className:W.a.GraphContainer,children:[Object(n.jsx)(B.Line,{data:t.cases,options:{title:{display:!0,text:"Cases",fontSize:20},legend:{display:!1}}}),Object(n.jsx)(B.Line,{data:t.deaths,options:{title:{display:!0,text:"Deaths",fontSize:20},legend:{display:!1}}}),Object(n.jsx)(B.Line,{data:t.recovered,options:{title:{display:!0,text:"Recovered",fontSize:20},legend:{display:!1}}})]})),a}}]),e}(r.Component),q=Object(y.b)((function(t){return{data:t.graphData,loading:t.loading}}),(function(t){return{onInitGraph:function(){return t(D())}}}))(Z),J=(e(198),function(t){Object(d.a)(e,t);var a=Object(u.a)(e);function e(){return Object(c.a)(this,e),a.apply(this,arguments)}return Object(l.a)(e,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(F,{}),Object(n.jsx)(R,{}),Object(n.jsx)(q,{}),Object(n.jsx)(U,{})]})}}]),e}(r.Component)),K=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,205)).then((function(a){var e=a.getCLS,n=a.getFID,r=a.getFCP,i=a.getLCP,o=a.getTTFB;e(t),n(t),r(t),i(t),o(t)}))},V=e(75),X=e(20),Q=e(2),Y={data:[],statistics:{},loading:!1,graphData:{}},$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case g:return Object(Q.a)(Object(Q.a)({},t),{},{data:a.info});case m:return Object(Q.a)(Object(Q.a)({},t),{},{statistics:a.stat});case x:return Object(Q.a)(Object(Q.a)({},t),{},{graphData:a.data});case S:return Object(Q.a)(Object(Q.a)({},t),{},{loading:!0});case T:return Object(Q.a)(Object(Q.a)({},t),{},{loading:!1});default:return t}},tt=Object(X.c)($,Object(X.a)(V.a)),at=Object(n.jsx)(y.a,{store:tt,children:Object(n.jsx)(J,{})});s.a.render(Object(n.jsx)(i.a.StrictMode,{children:at}),document.getElementById("root")),K()},42:function(t,a,e){t.exports={Popup:"Map_Popup__2qCrC",MapUL:"Map_MapUL__1Z1SK"}},73:function(t,a,e){t.exports={Nav:"Navigation_Nav__1qXl3"}},74:function(t,a,e){t.exports={GraphContainer:"Graph_GraphContainer__12xhN"}},82:function(t,a,e){},83:function(t,a,e){}},[[199,1,2]]]);
//# sourceMappingURL=main.e6053d9c.chunk.js.map