(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports={rocketImg:"Rockets_rocketImg__VQhne",rocketsContainer:"Rockets_rocketsContainer__1H55x",colorFilter:"Rockets_colorFilter__2rRI7",rocketName:"Rockets_rocketName__3hp1h",rocketContents:"Rockets_rocketContents__1HGOU",title:"Rockets_title__1p_-g",value:"Rockets_value__3rZ81",rockets:"Rockets_rockets__1Vbcc"}},13:function(e,a,t){e.exports={historyImg:"History_historyImg__3kxoa",historyContainer:"History_historyContainer__1Ke7p",colorFilter:"History_colorFilter__3mzll",history:"History_history__wwPOF"}},3:function(e,a,t){e.exports={rocketDetails:"RocketDetails_rocketDetails__3rZaL",rocketDescription:"RocketDetails_rocketDescription__7aU4B",detailContainer:"RocketDetails_detailContainer__3caWA",rocketDetailImg:"RocketDetails_rocketDetailImg__Wc04F",titlebg:"RocketDetails_titlebg__1mhIG",heading:"RocketDetails_heading__3sfwZ",overviewContainer:"RocketDetails_overviewContainer__2LDZ1",categoryContainer:"RocketDetails_categoryContainer__hXUcV",payloadContainer:"RocketDetails_payloadContainer__1CM7H",payloadName:"RocketDetails_payloadName__23Y7g",payloadList:"RocketDetails_payloadList__3twTD",link:"RocketDetails_link__2LNVf",noData:"RocketDetails_noData__j4asc"}},30:function(e,a,t){e.exports={header:"Header_header__1VCKf"}},31:function(e,a,t){e.exports=t.p+"static/media/logo2.14ef0d8d.png"},33:function(e,a,t){e.exports={loading:"Loading_loading__2JaUi"}},34:function(e,a,t){e.exports=t.p+"static/media/loading.f8a6d83f.gif"},35:function(e,a,t){e.exports={card:"Card_card__1eE8R"}},36:function(e,a,t){e.exports=t.p+"static/media/history2.c481b2d6.jpg"},37:function(e,a,t){e.exports=t.p+"static/media/rocket2.f44935cd.jpg"},38:function(e,a,t){e.exports=t(67)},4:function(e,a,t){e.exports={about:"About_about__1I_cf",tableContainer:"About_tableContainer__29zeP",infoTitle:"About_infoTitle__R663S",infoValue:"About_infoValue__2NdAC"}},43:function(e,a,t){},61:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(29),r=t.n(c),o=t(9),i=(t(43),t(14)),s=t(15),m=t.n(s),u=t(1),d=(t(61),t(30)),E=t.n(d),_=t(31),p=t.n(_),k=function(){return l.a.createElement("header",{className:E.a.header},l.a.createElement("img",{src:p.a,alt:"Space X"}),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"HISTORY")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/rockets"},"ROCKETS")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/about"},"ABOUT")))))},h=t(33),f=t.n(h),g=t(34),N=t.n(g),v=function(){return l.a.createElement("div",{className:f.a.loading},l.a.createElement("img",{src:N.a,alt:"Loading..."}))},y=t(13),b=t.n(y),C=t(35),D=t.n(C),R=function(e){var a=e.children;return l.a.createElement("div",{className:D.a.card},a)},w=t(36),O=t.n(w),x=function(e){var a=e.lists;return l.a.createElement("div",{className:b.a.history},l.a.createElement("img",{className:b.a.historyImg,src:O.a,alt:"Rocket ship launching during daytime"}),l.a.createElement("div",{className:b.a.colorFilter},l.a.createElement("h1",{className:"title"},"HISTORY")),a.map(function(e){return l.a.createElement("section",{className:b.a.historyContainer,key:e.id},l.a.createElement(R,null,l.a.createElement("h2",null,e.title),l.a.createElement("p",null,function(e){var a=new Date(1e3*e),t=a.getUTCFullYear();return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getUTCMonth()]+" "+a.getUTCDate()+", "+t}(e.event_date_unix)),l.a.createElement("p",null,e.details),l.a.createElement("a",{href:e.links.wikipedia},e.links.wikipedia)))}))},T=t(10),I=t.n(T),L=t(37),S=t.n(L),F=function(e){var a=e.rocketLists;return l.a.createElement("div",{className:I.a.rockets},l.a.createElement("img",{className:I.a.rocketImg,src:S.a,alt:"Rocket ship launching during daytime"}),l.a.createElement("div",{className:I.a.colorFilter},l.a.createElement("h1",{className:"title"},"ROCKETS")),l.a.createElement("div",{className:I.a.rocketContents},l.a.createElement("section",{className:I.a.rocketsContainer},a.map(function(e){return l.a.createElement(l.a.Fragment,{key:e.id},l.a.createElement(o.b,{to:"/rockets/".concat(e.id)},l.a.createElement(R,null,l.a.createElement("h2",{className:I.a.rocketName},e.rocket_name),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{className:I.a.title},"Cost per launch"),l.a.createElement("td",{className:I.a.value},e.cost_per_launch.toLocaleString())),l.a.createElement("tr",null,l.a.createElement("th",{className:I.a.title},"Success rate"),l.a.createElement("td",{className:I.a.value},e.success_rate_pct)))))))}))))},V=t(3),j=t.n(V),H=function(e){var a=e.match.params.rocketId,t=e.rocketLists.filter(function(e){return e.id==a});return l.a.createElement("div",{className:j.a.rocketDetails},0!=t.length?l.a.createElement("div",{className:j.a.detailContainer},l.a.createElement("h1",null,t[0].rocket_name),l.a.createElement("p",{className:j.a.rocketDescription},t[0].description),l.a.createElement("img",{className:j.a.rocketDetailImg,src:t[0].flickr_images,alt:t[0].rocket_name}),l.a.createElement("h2",{className:j.a.heading},"Technical Overview"),l.a.createElement("div",{className:j.a.overviewContainer},l.a.createElement("div",{className:j.a.categoryContainer},l.a.createElement("h3",null,"Height"),l.a.createElement("p",null,t[0].height.meters,"m"),l.a.createElement("p",null,"/ ",t[0].height.feet,"ft")),l.a.createElement("div",{className:j.a.categoryContainer},l.a.createElement("h3",null,"Diameter"),l.a.createElement("p",null,t[0].diameter.meters,"m"),l.a.createElement("p",null,"/ ",t[0].diameter.feet,"ft")),l.a.createElement("div",{className:j.a.categoryContainer},l.a.createElement("h3",null,"Mass"),l.a.createElement("p",null,t[0].mass.kg,"kg"),l.a.createElement("p",null,"/ ",t[0].mass.lb,"lb"))),l.a.createElement("div",{className:j.a.payloadContainer},l.a.createElement("h3",null,"Payload Weights"),l.a.createElement("div",{className:j.a.payloadList},t[0].payload_weights.map(function(e,a){return l.a.createElement(l.a.Fragment,{key:a},l.a.createElement("div",{className:j.a.categoryContainer},l.a.createElement("h3",{className:j.a.payloadName},"To ",e.id.toUpperCase()),l.a.createElement("h5",null," (",e.name,")"),l.a.createElement("p",null,e.kg,"kg"),l.a.createElement("p",null,"/ ",e.lb,"lb")))}))),l.a.createElement(o.b,{className:j.a.link,to:"/rockets"},"Go Back")):l.a.createElement("div",{className:j.a.noData},l.a.createElement("h2",null,"No data")))},A=t(4),U=t.n(A),J=function(e){var a=e.companyLists;return l.a.createElement("div",{className:U.a.about},l.a.createElement("h1",null,"COMPANY PROFILE"),l.a.createElement("div",{className:U.a.tableContainer},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{className:U.a.infoTitle},"Company Name"),l.a.createElement("td",{className:U.a.infoValue},a.name)),l.a.createElement("tr",null,l.a.createElement("th",{className:U.a.infoTitle},"Founded"),l.a.createElement("td",{className:U.a.infoValue},a.founded)),l.a.createElement("tr",null,l.a.createElement("th",{className:U.a.infoTitle},"CEO"),l.a.createElement("td",{className:U.a.infoValue},a.ceo)),l.a.createElement("tr",null,l.a.createElement("th",{className:U.a.infoTitle},"COO"),l.a.createElement("td",{className:U.a.infoValue},a.coo)),l.a.createElement("tr",null,l.a.createElement("th",{className:U.a.infoTitle},"Valuation"),l.a.createElement("td",{className:U.a.infoValue},"$ ",a.valuation.toLocaleString())),l.a.createElement("tr",null,l.a.createElement("th",{className:U.a.infoTitle},"Summary"),l.a.createElement("td",{className:U.a.infoValue},a.summary))))))};var M=function(){var e=Object(n.useState)(!0),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),s=o[0],d=o[1],E=Object(n.useState)([]),_=Object(i.a)(E,2),p=_[0],h=_[1],f=Object(n.useState)({}),g=Object(i.a)(f,2),N=g[0],y=g[1];return Object(n.useEffect)(function(){var e=setTimeout(function(){clearTimeout(e),m.a.get("https://api.spacexdata.com/v3/history").then(function(e){d(e.data)}),m.a.get("https://api.spacexdata.com/v3/rockets").then(function(e){h(e.data),c(!1)}),m.a.get("https://api.spacexdata.com/v3/info").then(function(e){y(e.data)})},2e3)},[]),l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"header"},l.a.createElement(k,null)),l.a.createElement("div",{className:"content"},t?l.a.createElement(v,null):l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",render:function(){return l.a.createElement(x,{lists:s})}}),l.a.createElement(u.a,{exact:!0,path:"/rockets",render:function(){return l.a.createElement(F,{rocketLists:p})}}),l.a.createElement(u.a,{path:"/rockets/:rocketId",render:function(e){return l.a.createElement(H,Object.assign({rocketLists:p},e))}}),l.a.createElement(u.a,{exact:!0,path:"/about",render:function(){return l.a.createElement(J,{companyLists:N})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(o.a,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.50557755.chunk.js.map