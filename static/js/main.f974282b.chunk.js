(this["webpackJsonpcovid-mexico"]=this["webpackJsonpcovid-mexico"]||[]).push([[0],{151:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(43),c=a.n(s),o=a(6),i=a.n(o),u=a(26),l=a(16),d=a(44),m=a.n(d),p=a(45),b=a(49);a(151),a(152);var f=function(){var e=new Date("2/26/2020"),t="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv",a="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv",s="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv",c=Object(r.useState)("Ok"),o=Object(l.a)(c,2),d=(o[0],o[1],Object(r.useState)({labels:[],series:[]})),f=Object(l.a)(d,2),h=(f[0],f[1],Object(r.useState)({labels:[],datasets:[]})),v=Object(l.a)(h,2),_=v[0],x=v[1];function C(e){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(i.a.mark((function t(a){var r,n,s,c,o,u,l,d,p,b,f,h;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(a);case 2:return r=t.sent,n=r.body.getReader(),t.next=6,n.read();case 6:s=t.sent,c=new TextDecoder("utf-8"),o=c.decode(s.value),u=m.a.parse(o,{header:!0}),l=u.data,d=l.find((function(e,t){return"Mexico"===e["Country/Region"]})),p={labels:[],data:[]},t.t0=i.a.keys(d);case 14:if((t.t1=t.t0()).done){t.next=25;break}if(!(b=t.t1.value).match(/\d*\/\d*\/\d*/gi)){t.next=23;break}if(!((f=new Date(b))<e)){t.next=20;break}return t.abrupt("continue",14);case 20:h=f.getDate()+"/"+(f.getMonth()+1),p.labels.push(h),p.data.push(parseInt(d[b]));case 23:t.next=14;break;case 25:return t.abrupt("return",p);case 26:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return(O=Object(u.a)(i.a.mark((function e(){var r,n,c,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:return r=e.sent,e.next=5,C(a);case 5:return n=e.sent,e.next=8,C(s);case 8:c=e.sent,o=r.labels,u={labels:o,datasets:[{label:"Casos confirmados",fill:!1,borderColor:"#17579B",data:r.data},{label:"Recuperados",fill:!1,borderColor:"#67A3D2",data:c.data},{label:"Muertes",fill:!1,borderColor:"#363537",data:n.data}]},x(u);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){O.apply(this,arguments)}()}),[]),n.a.createElement("div",{className:"App"},n.a.createElement(b.a,null,n.a.createElement("h1",{className:"title"},"Coronavirus en M\xe9xico"),n.a.createElement(p.a,{data:_}),n.a.createElement("div",{className:"footer"},n.a.createElement("p",null,"Actualizado autom\xe1ticamente cada 24 horas gracias a ",n.a.createElement("a",{href:"https://coronavirus.jhu.edu/"},"Johns Hopkins University Coronavirus Resource Center"),"."),n.a.createElement("p",null,"Conoce m\xe1s en ",n.a.createElement("a",{href:"https://github.com/pepemanboy/coronavirus_mexico/tree/master"},"Github"),"."))))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root"))},50:function(e,t,a){e.exports=a(153)}},[[50,1,2]]]);
//# sourceMappingURL=main.f974282b.chunk.js.map