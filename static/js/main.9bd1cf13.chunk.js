(this["webpackJsonpmy-calendar"]=this["webpackJsonpmy-calendar"]||[]).push([[0],{19:function(e,t,a){e.exports=a(29)},24:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),s=a.n(o),c=(a(24),a(25),a(2)),i=(a(26),a(27),a(3)),m=a(1),l=a.n(m),u=a(15),d=a(17),f=a(16),v=a(18),p=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(u.a)(this,a),t.call(this,a.onStorageChange,{detail:e})}return a}(Object(v.a)(CustomEvent)),b=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"session",r=window[a+"Storage"],o=Object(n.useState)((function(){return r.getItem(e)?JSON.parse(r.getItem(e)):t})),s=Object(i.a)(o,2),c=s[0],m=s[1],l=Object(n.useCallback)((function(t){var a="function"===typeof t?t(c):t;r.setItem(e,JSON.stringify(a)),window.dispatchEvent(new p({key:e,newValue:a,storageArea:r}))}),[e,c,r]);return Object(n.useEffect)((function(){r.getItem(e)||t&&l(t)}),[t,e,r]),Object(n.useEffect)((function(){var t=function(t){var a=t.detail||t,n=a.key,o=a.newValue;a.storageArea===r&&n===e&&void 0!==o&&m(o)};return window.addEventListener(p.onStorageChange,t),function(){window.removeEventListener(p.onStorageChange,t)}}),[e,r]),[c,l]};var E=function(){var e=b("Store.selectedDay",""),t=Object(i.a)(e,1)[0],a=Object(n.useContext)(J).date,o=a.format("MMMM"),s=l()().format("D");a.set("date",t||s);var c=a.format("Y"),m=a.format("dddd");return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"".concat(t||s," ").concat(o," ").concat(c)),r.a.createElement("h2",null," ",m))},g=a(4),T={meetingRooms:["Tsarevets","Arbanasi"],meetings:[{start:"2020-06-03T11:00:00.000Z",end:"2020-06-03T12:00:00.000Z",name:"Interview With A New Colleague",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-03T14:00:00.000Z",end:"2020-06-03T15:30:00.000Z",name:"Daily Standup",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-03T12:00:00.000Z",end:"2020-06-03T13:00:00.000Z",name:"Performance Review",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-03T15:30:00.000Z",end:"2020-06-03T16:00:00.000Z",name:"New Sprint Planning",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-03T17:00:00.000Z",end:"2020-06-03T18:00:00.000Z",name:"Happy Hour",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-03T11:00:00.000Z",end:"2020-06-03T12:00:00.000Z",name:"MVP Presentation",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-03T12:00:00.000Z",end:"2020-06-03T13:00:00.000Z",name:"Interview With A New Colleague",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-03T10:00:00.000Z",end:"2020-06-03T10:30:00.000Z",name:"Morning Coffee Meeting",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-04T12:00:00.000Z",end:"2020-06-04T13:00:00.000Z",name:"Interview With A New Colleague",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-04T14:00:00.000Z",end:"2020-06-04T15:30:00.000Z",name:"Daily Standup",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-04T11:00:00.000Z",end:"2020-06-04T12:00:00.000Z",name:"MVP Presentation",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-04T10:00:00.000Z",end:"2020-06-04T10:30:00.000Z",name:"Morning Coffee Meeting",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-05T10:00:00.000Z",end:"2020-06-05T11:00:00.000Z",name:"Presentation",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-05T14:00:00.000Z",end:"2020-06-05T15:30:00.000Z",name:"Daily Standup",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-05T11:00:00.000Z",end:"2020-06-05T12:00:00.000Z",name:"Conference Call",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-05T10:00:00.000Z",end:"2020-06-05T10:30:00.000Z",name:"Morning Coffee Meeting",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-09T10:00:00.000Z",end:"2020-06-09T11:00:00.000Z",name:"Presentation",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-09T14:00:00.000Z",end:"2020-06-09T15:30:00.000Z",name:"Daily Standup",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-09T11:00:00.000Z",end:"2020-06-09T12:00:00.000Z",name:"Conference Call",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-09T10:00:00.000Z",end:"2020-06-09T10:30:00.000Z",name:"Morning Coffee Meeting",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-10T10:00:00.000Z",end:"2020-06-10T11:00:00.000Z",name:"Presentation",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-10T14:00:00.000Z",end:"2020-06-10T15:30:00.000Z",name:"Daily Standup",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-10T11:00:00.000Z",end:"2020-06-10T12:00:00.000Z",name:"Conference Call",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-10T10:00:00.000Z",end:"2020-06-10T10:30:00.000Z",name:"Morning Coffee Meeting",meetingRoom:"Arbanasi",participants:[]}]},O=function(e){var t={};return Object.keys(e).forEach((function(a){var n=e[a].reduce((function(e,t){return e[t.room]=e[t.room]||[],e[t.room].push(t),e}),{});t[a]=n})),t};function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(g.a)(Array(e).keys()).map((function(e){return e+t}))}var j=function(e){var t=[];return e.forEach((function(e){if(e.ends&&e.starts){var a=h(e.ends-e.starts,e.starts);t.push.apply(t,Object(g.a)(a))}})),t},y=function(e){return function(t,a,n,r){var o=void 0!==e[t]&&e[t][a]||[],s=j(o);return!h(r-n,n).some((function(e){return s.includes(e)}))}},C=function(e,t){var a=e.format("MMMM"),n=e.format("Y"),r=e.format("D");return(t||r)+a+n},Z=function(e){var t=e.hour,a=Object(n.useContext)(J),o=a.date,s=a.setEventCreation,c=b("Store.events",{}),m=Object(i.a)(c,2),l=m[0],u=m[1],d=b("Store.selectedDay",""),f=Object(i.a)(d,1)[0],v=C(o,f),p=l[v]||[],E=b("Store.roomAvailability",{}),T=Object(i.a)(E,1)[0],O=j(p).includes(t),h=p.some((function(e){return e.starts===t&&!0===e.created})),Z=p.filter((function(e){return e.starts===t})),M=y(T),S=M(v,"Arbanasi",t,t+1)||M(v,"Tsarevets",t,t+1),k=Object(n.useCallback)((function(){s(!0);var e=l[v]||[];l[v]=[].concat(Object(g.a)(e),[{starts:t,ends:null,room:null,created:!1}]),u(l)}),[s,l,v,u,t]);return r.a.createElement("div",{className:"line ".concat(O&&"hasScheduledMeet"),onClick:S?k:null},h&&Z.filter((function(e){return e.created})).map((function(e){return r.a.createElement("p",{key:e.name+e.room},"".concat(e.name,",Room: ").concat(e.room,": ").concat(e.starts,":00-").concat(e.ends,":00"))})))};var M=function(){return r.a.createElement("div",{className:"flex column hours"},Object(g.a)(Array(24).keys()).slice(1).map((function(e){return r.a.createElement("div",{className:"flex",key:e},r.a.createElement("div",null,"".concat(e>9?e:"0"+e,":00")),r.a.createElement(Z,{hour:e}))})))};var S=function(){return r.a.createElement("div",{className:"flex column"},r.a.createElement(E,null),r.a.createElement(M,null))};var k=function(){var e=l.a.weekdaysShort();return r.a.createElement("div",{className:"weekdays"},e.map((function(e){return r.a.createElement("div",{key:e},e)})))},A=a(12);var w=function(e){var t=e.day,a=Object(n.useContext)(J),o=a.date,s=a.setEventCreation,i=b("Store.selectedDay",""),m=Object(c.a)(i,2),u=m[0],d=m[1],f=b("Store.events",{}),v=Object(c.a)(f,1)[0],p=parseInt(o.startOf("month").format("d")),E=parseInt(l()().format("D")),g=t+1-p;if(t<p)return r.a.createElement("div",{key:t});var T=g===E&&l()().format("MMMM")===o.format("MMMM"),O=g+o.format("MMMM")+o.format("Y"),h=!!Array.isArray(v[O])&&v[O].length>0;return r.a.createElement("div",{className:"centered ".concat(h?"hasEvent":""," ").concat(T?"currentDay":u===g?"selectedDay":""),key:g,onClick:function(){s(!1),d(g)}},g)};function R(){var e=Object(n.useContext)(J).date,t=e.daysInMonth()+parseInt(e.startOf("month").format("d"));return r.a.createElement("div",{className:"days"},Object(g.a)(Array(t).keys()).map((function(e){return r.a.createElement(w,{key:e,day:e})})))}function N(){var e=Object(n.useContext)(J),t=e.date,a=e.setDate,o=e.setEventCreation,s=Object(n.useCallback)((function(){o(!1),t.subtract(1,"M"),a(l()(Object(A.a)({},t)))}),[t,a,o]),c=Object(n.useCallback)((function(){o(!1),t.add(1,"M"),a(l()(Object(A.a)({},t)))}),[t,a,o]);return r.a.createElement("div",{className:"flex controls"},r.a.createElement("button",{onClick:s},"Prev"),r.a.createElement("button",{onClick:c},"Next"))}var D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement(N,null))},x=a(11),I=a(8);var P=function(e){var t=e.event,a=b("Store.selectedDay",""),o=Object(c.a)(a,1)[0],s=Object(n.useContext)(J),i=s.date,m=s.setEventCreation,l=b("Store.events"),u=Object(c.a)(l,2),d=u[0],f=u[1],v=Object(n.useState)({starts:t.starts,ends:Math.min(t.starts+1,24),room:"empty",name:"Event"}),p=Object(c.a)(v,2),E=p[0],g=p[1],T=b("Store.roomAvailability",{}),h=Object(c.a)(T,2),j=h[0],Z=h[1],M=y(j),S=Object(n.useState)(!1),k=Object(c.a)(S,2),A=k[0],w=k[1],R=C(i,o),N=Object(n.useCallback)((function(){if(E.starts>=E.ends||"empty"===E.room)w(!0);else{var e=C(i,o);if(M(e,E.room,E.starts,E.ends-1)){var t=Object(I.a)(Object(I.a)({},E),{},{starts:E.starts,ends:parseInt(E.ends),room:E.room,created:!0});d[e].push(t);var a=d[e].filter((function(e){return null!==e.ends}));d[e]=a,f(d),Z(O(d)),m(!1)}else w(!0)}}),[i,d,f,m,o,E,M,Z]),D=Object(n.useCallback)((function(){var e=C(i,o),t=(d[e]||[]).filter((function(e){return null!==e.ends}));d[e]=t,f(d),m(!1)}),[d,f,m,i,o]),P=Object(n.useCallback)((function(e){return function(t){var a=t.target.value;A&&w(!1),g((function(t){return Object(I.a)(Object(I.a)({},t),{},Object(x.a)({},e,a))}))}}),[g,w,A]),W=Object(n.useMemo)((function(){return[M(R,"Tsarevets",E.starts,E.ends<E.starts?E.starts:E.ends),M(R,"Arbanasi",E.starts,E.ends<E.starts?E.starts:E.ends)]}),[E,M,R]),V=Object(c.a)(W,2),Y=V[0],F=V[1];return r.a.createElement("div",{className:"flex column newevent"},"New Event",r.a.createElement("div",null,"Name",r.a.createElement("input",{value:E.name,onChange:P("name")})),r.a.createElement("div",null,"Starts",r.a.createElement("input",{disabled:!0,value:t.starts,readOnly:!0})),r.a.createElement("div",null,"Ends",r.a.createElement("input",{value:Math.min(E.ends,24),type:"number",onChange:P("ends")})),r.a.createElement("div",null,"Room",r.a.createElement("select",{name:"room",onChange:P("room"),value:E.room},r.a.createElement("option",{value:"empty"},"Select room"),Y&&r.a.createElement("option",{value:"Tsarevets"},"Tsarevets"),F&&r.a.createElement("option",{value:"Arbanasi"},"Arbanasi"))),r.a.createElement("div",{className:" controls"},r.a.createElement("button",{onClick:D},"Cancel"),r.a.createElement("button",{onClick:N},"Save"),A&&r.a.createElement("div",{className:"error"},"Check the start/end time. Fill the room field.")))};var W=function(){var e=b("Store.selectedDay",""),t=Object(i.a)(e,1)[0],a=Object(n.useContext)(J),o=a.creatingEvent,s=a.date,c=C(s,t),m=b("Store.events",{}),l=(Object(i.a)(m,1)[0][c]||[]).find((function(e){return null===e.ends}))||{};return r.a.createElement("div",{className:"flex column"},r.a.createElement(k,null),r.a.createElement(D,null),o&&r.a.createElement(P,{event:l}))},J=r.a.createContext();var V=function(){var e=Object(n.useState)(l()()),t=Object(c.a)(e,2),a=t[0],o=t[1],s=Object(n.useState)(!1),i=Object(c.a)(s,2),m=i[0],u=i[1],d=b("Store.events",{}),f=Object(c.a)(d,2),v=f[0],p=f[1],E=b("Store.roomAvailability",{}),g=Object(c.a)(E,2)[1];return b("Store.selectedDay",l()().format("D")),Object(n.useEffect)((function(){new Promise((function(e){setTimeout((function(){return e(T)}),0)})).then((function(e){l()(e.meetings[0].start).format("hh:mm"),0===Object.keys(v).length&&(e.meetings.forEach((function(e){var t=l()(e.start),a=t.format("D")+t.format("MMMM")+t.format("Y"),n={starts:parseInt(e.start.substr(e.start.indexOf("T")+1,5)),ends:parseInt(e.end.substr(e.start.indexOf("T")+1,5)),name:e.name,room:e.meetingRoom,created:!0};Array.isArray(v[a])||(v[a]=[]),v[a].push(n)})),p(v),g(O(v)))}))}),[v,p,g]),r.a.createElement("div",{className:"wrapper"},r.a.createElement(J.Provider,{value:{date:a,setDate:o,creatingEvent:m,setEventCreation:u}},r.a.createElement(S,null),r.a.createElement(W,null)),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/PetyoPlPetrov/calendar.github.io/blob/master/README.md"},r.a.createElement("h3",null,"Read me")," "))};var Y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header flex centered"},!1,r.a.createElement(V,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.9bd1cf13.chunk.js.map