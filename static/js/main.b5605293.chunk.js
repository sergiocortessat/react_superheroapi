(this.webpackJsonpreact_superheroapi=this.webpackJsonpreact_superheroapi||[]).push([[0],{83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(8),c=a.n(s),i=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,119)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))},l=a(22),u=a.n(l),o=a(29),j=a(33),p=a(117),b=a(118),d=a(112),m=a(3);var h=function(e){var t=e.data;return console.log(t),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{children:"Combat"}),Object(m.jsx)(d.a,{variant:"determinate",value:t.powerstats.combat,className:"mb-3"}),Object(m.jsx)("p",{children:"Durability"}),Object(m.jsx)(d.a,{variant:"determinate",value:t.powerstats.durability,className:"mb-3"}),Object(m.jsx)("p",{children:"Intelligence"}),Object(m.jsx)(d.a,{variant:"determinate",value:t.powerstats.intelligence,className:"mb-3"}),Object(m.jsx)("p",{children:"Power"}),Object(m.jsx)(d.a,{variant:"determinate",value:t.powerstats.power,className:"mb-3"}),Object(m.jsx)("p",{children:"Speed"}),Object(m.jsx)(d.a,{variant:"determinate",value:t.powerstats.speed,className:"mb-3"}),Object(m.jsx)("p",{children:"Strength"}),Object(m.jsx)(d.a,{variant:"determinate",value:t.powerstats.strength,className:"mb-3"})]})},O=function(e){var t=e.data;e.filter&&console.log("yes");var a=t.map((function(e){return Object(m.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(m.jsx)("img",{className:"card-img-top",src:e.image,alt:"Card"}),Object(m.jsxs)("div",{className:"card-body hero-name",children:[Object(m.jsxs)("h5",{className:"card-title",children:["Name:"," ",e.name]}),Object(m.jsxs)("p",{className:"card-text",children:["Full-Name:"," ",e.fullName?e.fullName:e.name]})]}),Object(m.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(m.jsxs)("li",{className:"list-group-item",children:["Race:"," ",e.race?e.race:"Unknown"]}),Object(m.jsxs)("li",{className:"list-group-item first-appearance",children:["First Appearance:"," ",e.firstAppearance&&"-"!==e.firstAppearance&&e.firstAppearance,"-"===e.firstAppearance&&"Unknown"]}),Object(m.jsxs)("li",{className:"list-group-item",children:["Publisher:"," ",e.publisher]})]}),Object(m.jsxs)("div",{className:"card-body hero-stats",children:[Object(m.jsx)("h3",{children:"Hero Stats"}),Object(m.jsx)(h,{data:e})]})]},e.name)}));return Object(m.jsx)(m.Fragment,{children:a})},f=a(50),x=a.n(f),v="https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json",g=function(){var e=Object(o.a)(u.a.mark((function e(){var t,a,r,n,s,c,i,l,o=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",a=o.length>1&&void 0!==o[1]?o[1]:"",e.prev=2,e.next=5,x.a.get(v);case 5:if(r=e.sent,n=r.data,s=n.sort((function(){return Math.random()-.5})),c=s.map((function(e){var t=e.name,a=e.powerstats,r=e.appearance,n=r.gender,s=r.race,c=e.biography;return{name:t,powerstats:a,gender:n,race:s,fullName:c.fullName,firstAppearance:c.firstAppearance,publisher:c.publisher,occupation:e.work.occupation,image:e.images.lg}})),i=c.filter((function(e){return e.name.toLowerCase().startsWith(t.toLowerCase())})),l=i.filter((function(e){return e.gender.includes(a)})),t){e.next=13;break}return e.abrupt("return",l.slice(0,5));case 13:return e.abrupt("return",l);case 16:e.prev=16,e.t0=e.catch(2),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(){return e.apply(this,arguments)}}(),N=a(116);function w(){return Object(m.jsx)(N.a,{disableShrink:!0})}a(83);var y=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(""),c=Object(j.a)(s,2),i=c[0],l=c[1],d=Object(r.useState)(""),h=Object(j.a)(d,2),f=h[0],x=h[1];return Object(r.useEffect)((function(){(function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,g(f,i);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[f,i]),0!==a.length||f?Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("form",{action:"herosearch",className:"form",children:[Object(m.jsx)("input",{onChange:function(e){return x(e.target.value)},type:"text"}),Object(m.jsxs)(p.a,{value:i,onChange:function(e){return l(e.target.value)},children:[Object(m.jsx)(b.a,{value:"Male",children:"Male"}),Object(m.jsx)(b.a,{value:"Female",children:"Female"}),Object(m.jsx)(b.a,{value:"",children:"All"}),Object(m.jsx)(b.a,{value:"-",children:"Genderless"})]})]}),Object(m.jsx)("div",{className:"supercard",children:a&&Object(m.jsx)(O,{data:a,filter:f})})]}):Object(m.jsx)("div",{children:Object(m.jsx)(w,{})})};a(84);c.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),i()}},[[85,1,2]]]);
//# sourceMappingURL=main.b5605293.chunk.js.map