(this["webpackJsonpcovid-mexico"]=this["webpackJsonpcovid-mexico"]||[]).push([[0],{151:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(43),c=a.n(s),o=a(6),i=a.n(o),u=a(26),l=a(16),d=a(44),m=a.n(d),b=a(45),p=a(49);a(151),a(152);var _=function(){var e=new Date("2/26/2020"),t="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",a="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv",s="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv",c=Object(r.useState)("Ok"),o=Object(l.a)(c,2),d=(o[0],o[1],Object(r.useState)({labels:[],series:[]})),_=Object(l.a)(d,2),f=(_[0],_[1],Object(r.useState)({labels:[],datasets:[]})),h=Object(l.a)(f,2),v=h[0],x=h[1];function E(e){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(i.a.mark((function t(a){var r,n,s,c,o,u,l,d,b,p,_,f;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(a);case 2:return r=t.sent,n=r.body.getReader(),t.next=6,n.read();case 6:s=t.sent,c=new TextDecoder("utf-8"),o=c.decode(s.value),u=m.a.parse(o,{header:!0}),l=u.data,d=l.find((function(e,t){return"Mexico"===e["Country/Region"]})),b={labels:[],data:[]},t.t0=i.a.keys(d);case 14:if((t.t1=t.t0()).done){t.next=25;break}if(!(p=t.t1.value).match(/\d*\/\d*\/\d*/gi)){t.next=23;break}if(!((_=new Date(p))<e)){t.next=20;break}return t.abrupt("continue",14);case 20:f=_.getDate()+"/"+(_.getMonth()+1),b.labels.push(f),b.data.push(parseInt(d[p]));case 23:t.next=14;break;case 25:return t.abrupt("return",b);case 26:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(){return(g=Object(u.a)(i.a.mark((function e(){var r,n,c,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:return r=e.sent,e.next=5,E(a);case 5:return n=e.sent,e.next=8,E(s);case 8:c=e.sent,o=r.labels,u={labels:o,datasets:[{label:"Casos confirmados",fill:!1,borderColor:"#48BEFF",data:r.data},{label:"Recuperados",fill:!1,borderColor:"#43C59E",data:c.data},{label:"Muertes",fill:!1,borderColor:"#14453D",data:n.data}]},x(u);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[]),n.a.createElement("div",{className:"App"},n.a.createElement(p.a,null,n.a.createElement("h1",{className:"title"},"Coronavirus en M\xe9xico"),n.a.createElement(b.a,{data:v}),n.a.createElement("div",{className:"footer"},n.a.createElement("p",null,"Actualizado autom\xe1ticamente cada 24 horas gracias a ",n.a.createElement("a",{href:"https://coronavirus.jhu.edu/"},"Johns Hopkins University Coronavirus Resource Center"),"."),n.a.createElement("p",null,"Open source. Conoce m\xe1s en ",n.a.createElement("a",{target:"_blank",href:"https://github.com/pepemanboy/coronavirus_mexico/tree/master"},"Github"),"."))))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(_,null)),document.getElementById("root"))},50:function(e,t,a){e.exports=a(153)}},[[50,1,2]]]);
//# sourceMappingURL=main.3aedd87f.chunk.js.map