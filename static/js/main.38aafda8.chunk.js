(this["webpackJsonpmy-calendar"]=this["webpackJsonpmy-calendar"]||[]).push([[0],{17:function(e,t,a){e.exports=a(27)},22:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),s=a.n(o),c=(a(22),a(23),a(1)),i=(a(24),a(25),a(2)),m=a.n(i),l=a(13),u=a(15),d=a(14),f=a(16),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,a.onStorageChange,{detail:e})}return a}(Object(f.a)(CustomEvent)),p=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"session",r=window[a+"Storage"],o=Object(n.useState)((function(){return r.getItem(e)?JSON.parse(r.getItem(e)):t})),s=Object(c.a)(o,2),i=s[0],m=s[1],l=Object(n.useCallback)((function(t){var a="function"===typeof t?t(i):t;r.setItem(e,JSON.stringify(a)),window.dispatchEvent(new v({key:e,newValue:a,storageArea:r}))}),[e,i,r]);return Object(n.useEffect)((function(){r.getItem(e)||t&&l(t)}),[t,e,r]),Object(n.useEffect)((function(){var t=function(t){var a=t.detail||t,n=a.key,o=a.newValue;a.storageArea===r&&n===e&&void 0!==o&&m(o)};return window.addEventListener(v.onStorageChange,t),function(){window.removeEventListener(v.onStorageChange,t)}}),[e,r]),[i,l]};var b=function(){var e=p("Store.selectedDay",""),t=Object(c.a)(e,1)[0],a=Object(n.useContext)(P).date,o=a.format("MMMM"),s=m()().format("D");a.set("date",t||s);var i=a.format("Y"),l=a.format("dddd");return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"".concat(t||s," ").concat(o," ").concat(i)),r.a.createElement("h2",null," ",l))},g=a(3),E={meetingRooms:["Tsarevets","Arbanasi"],meetings:[{start:"2020-06-03T11:00:00.000Z",end:"2020-06-03T12:00:00.000Z",name:"Interview With A New Colleague",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-03T14:00:00.000Z",end:"2020-06-03T15:30:00.000Z",name:"Daily Standup",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-03T12:00:00.000Z",end:"2020-06-03T13:00:00.000Z",name:"Performance Review",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-03T15:30:00.000Z",end:"2020-06-03T16:00:00.000Z",name:"New Sprint Planning",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-03T17:00:00.000Z",end:"2020-06-03T18:00:00.000Z",name:"Happy Hour",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-03T11:00:00.000Z",end:"2020-06-03T12:00:00.000Z",name:"MVP Presentation",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-03T12:00:00.000Z",end:"2020-06-03T13:00:00.000Z",name:"Interview With A New Colleague",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-03T10:00:00.000Z",end:"2020-06-03T10:30:00.000Z",name:"Morning Coffee Meeting",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-04T12:00:00.000Z",end:"2020-06-04T13:00:00.000Z",name:"Interview With A New Colleague",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-04T14:00:00.000Z",end:"2020-06-04T15:30:00.000Z",name:"Daily Standup",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-04T11:00:00.000Z",end:"2020-06-04T12:00:00.000Z",name:"MVP Presentation",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-04T10:00:00.000Z",end:"2020-06-04T10:30:00.000Z",name:"Morning Coffee Meeting",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-05T10:00:00.000Z",end:"2020-06-05T11:00:00.000Z",name:"Presentation",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-05T14:00:00.000Z",end:"2020-06-05T15:30:00.000Z",name:"Daily Standup",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-05T11:00:00.000Z",end:"2020-06-05T12:00:00.000Z",name:"Conference Call",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-05T10:00:00.000Z",end:"2020-06-05T10:30:00.000Z",name:"Morning Coffee Meeting",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-09T10:00:00.000Z",end:"2020-06-09T11:00:00.000Z",name:"Presentation",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-09T14:00:00.000Z",end:"2020-06-09T15:30:00.000Z",name:"Daily Standup",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-09T11:00:00.000Z",end:"2020-06-09T12:00:00.000Z",name:"Conference Call",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-09T10:00:00.000Z",end:"2020-06-09T10:30:00.000Z",name:"Morning Coffee Meeting",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-10T10:00:00.000Z",end:"2020-06-10T11:00:00.000Z",name:"Presentation",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-10T14:00:00.000Z",end:"2020-06-10T15:30:00.000Z",name:"Daily Standup",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-10T11:00:00.000Z",end:"2020-06-10T12:00:00.000Z",name:"Conference Call",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-10T10:00:00.000Z",end:"2020-06-10T10:30:00.000Z",name:"Morning Coffee Meeting",meetingRoom:"Arbanasi",participants:[]}]},T=function(e){var t={};return Object.keys(e).forEach((function(a){var n=e[a].reduce((function(e,t){return e[t.room]=e[t.room]||[],e[t.room].push(t),e}),{});t[a]=n})),t};function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(g.a)(Array(e).keys()).map((function(e){return e+t}))}var j=function(e){var t=[];return e.forEach((function(e){if(e.ends&&e.starts){var a=O(e.ends-e.starts,e.starts);t.push.apply(t,Object(g.a)(a))}})),t},h=function(e){return function(t,a,n,r){var o=void 0!==e[t]&&e[t][a]||[],s=j(o);return!O(r-n,n).some((function(e){return s.includes(e)}))}},y=function(e,t){var a=e.format("MMMM"),n=e.format("Y"),r=e.format("D");return(t||r)+a+n},C=function(e){var t=e.hour,a=Object(n.useContext)(P),o=a.date,s=a.setEventCreation,i=p("Store.events",{}),m=Object(c.a)(i,2),l=m[0],u=m[1],d=p("Store.selectedDay",""),f=Object(c.a)(d,1)[0],v=y(o,f),b=l[v]||[],E=p("Store.roomAvailability",{}),T=Object(c.a)(E,1)[0],O=j(b).includes(t),C=b.some((function(e){return e.starts===t&&!0===e.created})),Z=b.filter((function(e){return e.starts===t})),M=h(T),S=M(v,"Arbanasi",t,t+1)||M(v,"Tsarevets",t,t+1),k=Object(n.useCallback)((function(){s(!0);var e=l[v]||[];l[v]=[].concat(Object(g.a)(e),[{starts:t,ends:null,room:null,created:!1}]),u(l)}),[s,l,v,u,t]);return r.a.createElement("div",{className:"line ".concat(O&&"hasScheduledMeet"),onClick:S?k:null},C&&Z.filter((function(e){return e.created})).map((function(e){return r.a.createElement("p",{key:e.name+e.room},"".concat(e.name,",Room: ").concat(e.room,": ").concat(e.starts,":00-").concat(e.ends,":00"))})))};var Z=function(){return r.a.createElement("div",{className:"flex column hours"},Object(g.a)(Array(24).keys()).slice(1).map((function(e){return r.a.createElement("div",{className:"flex",key:e},r.a.createElement("div",null,"".concat(e>9?e:"0"+e,":00")),r.a.createElement(C,{hour:e}))})))};var M=function(){return r.a.createElement("div",{className:"flex column"},r.a.createElement(b,null),r.a.createElement(Z,null))};var S=function(){var e=m.a.weekdaysShort();return r.a.createElement("div",{className:"weekdays"},e.map((function(e){return r.a.createElement("div",{key:e},e)})))},k=a(5);var w=function(e){var t=e.day,a=Object(n.useContext)(P),o=a.date,s=a.setEventCreation,i=p("Store.selectedDay",""),l=Object(c.a)(i,2),u=l[0],d=l[1],f=p("Store.events",{}),v=Object(c.a)(f,1)[0],b=parseInt(o.startOf("month").format("d")),g=parseInt(m()().format("D")),E=t+1-b;if(t<b)return r.a.createElement("div",{key:t});var T=E===g&&m()().format("MMMM")===o.format("MMMM"),O=E+o.format("MMMM")+o.format("Y"),j=!!Array.isArray(v[O])&&v[O].length>0;return r.a.createElement("div",{className:"centered ".concat(j&&"hasEvent"," ").concat(T?"currentDay":u===E?"selectedDay":""),key:E,onClick:function(){s(!1),d(E)}},E)};function A(){var e=Object(n.useContext)(P).date,t=e.daysInMonth()+parseInt(e.startOf("month").format("d"));return r.a.createElement("div",{className:"days"},Object(g.a)(Array(t).keys()).map((function(e){return r.a.createElement(w,{key:e,day:e})})))}function R(){var e=Object(n.useContext)(P),t=e.date,a=e.setDate,o=e.setEventCreation,s=Object(n.useCallback)((function(){o(!1),t.subtract(1,"M"),a(m()(Object(k.a)({},t)))}),[t,a,o]),c=Object(n.useCallback)((function(){o(!1),t.add(1,"M"),a(m()(Object(k.a)({},t)))}),[t,a,o]);return r.a.createElement("div",{className:"flex controls"},r.a.createElement("button",{onClick:s},"Prev"),r.a.createElement("button",{onClick:c},"Next"))}var N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(R,null))},x=a(10);var D=function(e){var t=e.event,a=p("Store.selectedDay",""),o=Object(c.a)(a,1)[0],s=Object(n.useContext)(P),i=s.date,m=s.setEventCreation,l=p("Store.events"),u=Object(c.a)(l,2),d=u[0],f=u[1],v=Object(n.useState)({starts:t.starts,ends:Math.min(t.starts+1,24),room:"empty",name:"Event"}),b=Object(c.a)(v,2),g=b[0],E=b[1],O=p("Store.roomAvailability",{}),j=Object(c.a)(O,2),C=j[0],Z=j[1],M=h(C),S=Object(n.useState)(!1),w=Object(c.a)(S,2),A=w[0],R=w[1],N=y(i,o),D=Object(n.useCallback)((function(){if(g.starts>=g.ends||"empty"===g.room)R(!0);else{var e=y(i,o);if(M(e,g.room,g.starts,g.ends-1)){var t=Object(k.a)({},g,{starts:g.starts,ends:parseInt(g.ends),room:g.room,created:!0});d[e].push(t);var a=d[e].filter((function(e){return null!==e.ends}));d[e]=a,f(d),Z(T(d)),m(!1)}else R(!0)}}),[i,d,f,m,o,g,M,Z]),I=Object(n.useCallback)((function(){var e=y(i,o),t=(d[e]||[]).filter((function(e){return null!==e.ends}));d[e]=t,f(d),m(!1)}),[d,f,m,i,o]),W=Object(n.useCallback)((function(e){return function(t){var a=t.target.value;A&&R(!1),E((function(t){return Object(k.a)({},t,Object(x.a)({},e,a))}))}}),[E,R,A]),J=Object(n.useMemo)((function(){return[M(N,"Tsarevets",g.starts,g.ends<g.starts?g.starts:g.ends),M(N,"Arbanasi",g.starts,g.ends<g.starts?g.starts:g.ends)]}),[g,M,N]),V=Object(c.a)(J,2),Y=V[0],F=V[1];return r.a.createElement("div",{className:"flex column newevent"},"New Event",r.a.createElement("div",null,"Name",r.a.createElement("input",{value:g.name,onChange:W("name")})),r.a.createElement("div",null,"Starts",r.a.createElement("input",{value:t.starts,readOnly:!0})),r.a.createElement("div",null,"Ends",r.a.createElement("input",{value:Math.min(g.ends,24),type:"number",onChange:W("ends")})),r.a.createElement("div",null,"Room",r.a.createElement("select",{name:"room",onChange:W("room"),value:g.room},r.a.createElement("option",{value:"empty"},"Select room"),Y&&r.a.createElement("option",{value:"Tsarevets"},"Tsarevets"),F&&r.a.createElement("option",{value:"Arbanasi"},"Arbanasi"))),r.a.createElement("div",{className:" controls"},r.a.createElement("button",{onClick:I},"Cancel"),r.a.createElement("button",{onClick:D},"Save"),A&&r.a.createElement("div",{className:"error"},"Check the start/end time. Fill the room field.")))};var I=function(){var e=p("Store.selectedDay",""),t=Object(c.a)(e,1)[0],a=Object(n.useContext)(P),o=a.creatingEvent,s=a.date,i=y(s,t),m=p("Store.events",{}),l=(Object(c.a)(m,1)[0][i]||[]).find((function(e){return null===e.ends}))||{};return r.a.createElement("div",{className:"flex column"},r.a.createElement(S,null),r.a.createElement(N,null),o&&r.a.createElement(D,{event:l}))},P=r.a.createContext();var W=function(){var e=Object(n.useState)(m()()),t=Object(c.a)(e,2),a=t[0],o=t[1],s=Object(n.useState)(!1),i=Object(c.a)(s,2),l=i[0],u=i[1],d=p("Store.events",{}),f=Object(c.a)(d,2),v=f[0],b=f[1],g=p("Store.roomAvailability",{}),O=Object(c.a)(g,2)[1];return p("Store.selectedDay",m()().format("D")),Object(n.useEffect)((function(){new Promise((function(e){setTimeout((function(){return e(E)}),0)})).then((function(e){m()(e.meetings[0].start).format("hh:mm"),0===Object.keys(v).length&&(e.meetings.forEach((function(e){var t=m()(e.start),a=t.format("D")+t.format("MMMM")+t.format("Y"),n={starts:parseInt(e.start.substr(e.start.indexOf("T")+1,5)),ends:parseInt(e.end.substr(e.start.indexOf("T")+1,5)),name:e.name,room:e.meetingRoom,created:!0};Array.isArray(v[a])||(v[a]=[]),v[a].push(n)})),b(v),O(T(v)))}))}),[v,b,O]),r.a.createElement("div",{className:"wrapper"},r.a.createElement(P.Provider,{value:{date:a,setDate:o,creatingEvent:l,setEventCreation:u}},r.a.createElement(M,null),r.a.createElement(I,null)))};var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header flex centered"},!1,r.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.38aafda8.chunk.js.map