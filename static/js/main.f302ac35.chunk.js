(this["webpackJsonpmy-calendar"]=this["webpackJsonpmy-calendar"]||[]).push([[0],{17:function(e,t,a){e.exports=a(24)},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),s=(a(22),a(1)),i=a(2),l=a.n(i),m=a(13),u=a(14),d=a(15),f=a(16),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,a.onStorageChange,{detail:e})}return a}(Object(f.a)(CustomEvent)),b=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"session",r=window[a+"Storage"],o=Object(n.useState)((function(){return r.getItem(e)?JSON.parse(r.getItem(e)):t})),c=Object(s.a)(o,2),i=c[0],l=c[1],m=Object(n.useCallback)((function(t){var a="function"===typeof t?t(i):t;r.setItem(e,JSON.stringify(a)),window.dispatchEvent(new v({key:e,newValue:a,storageArea:r}))}),[e,i,r]);return Object(n.useEffect)((function(){r.getItem(e)||t&&m(t)}),[t,e,r]),Object(n.useEffect)((function(){var t=function(t){var a=t.detail||t,n=a.key,o=a.newValue;a.storageArea===r&&n===e&&void 0!==o&&l(o)};return window.addEventListener(v.onStorageChange,t),function(){window.removeEventListener(v.onStorageChange,t)}}),[e,r]),[i,m]};var p=function(){var e=b("Store.selectedDay",""),t=Object(s.a)(e,1)[0],a=Object(n.useContext)(W).date,o=a.format("MMMM"),c=l()().format("D");a.set("date",t||c);var i=a.format("Y"),m=a.format("dddd");return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"flex centered blackCell"},"".concat(t||c," ").concat(o," ").concat(i)),r.a.createElement("h2",{className:"flex centered blackCell"}," ",m))},E=a(4),g={meetingRooms:["Tsarevets","Arbanasi"],meetings:[{start:"2020-06-03T11:00:00.000Z",end:"2020-06-03T12:00:00.000Z",name:"Interview With A New Colleague",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-03T14:00:00.000Z",end:"2020-06-03T15:30:00.000Z",name:"Daily Standup",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-03T12:00:00.000Z",end:"2020-06-03T13:00:00.000Z",name:"Performance Review",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-03T15:30:00.000Z",end:"2020-06-03T16:00:00.000Z",name:"New Sprint Planning",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-03T17:00:00.000Z",end:"2020-06-03T18:00:00.000Z",name:"Happy Hour",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-03T11:00:00.000Z",end:"2020-06-03T12:00:00.000Z",name:"MVP Presentation",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-03T12:00:00.000Z",end:"2020-06-03T13:00:00.000Z",name:"Interview With A New Colleague",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-03T10:00:00.000Z",end:"2020-06-03T11:00:00.000Z",name:"Morning Coffee Meeting",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-04T12:00:00.000Z",end:"2020-06-04T13:00:00.000Z",name:"Interview With A New Colleague",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-04T14:00:00.000Z",end:"2020-06-04T15:30:00.000Z",name:"Daily Standup",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-04T11:00:00.000Z",end:"2020-06-04T12:00:00.000Z",name:"MVP Presentation",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-04T10:00:00.000Z",end:"2020-06-04T11:00:00.000Z",name:"Morning Coffee Meeting",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-05T10:00:00.000Z",end:"2020-06-05T11:00:00.000Z",name:"Presentation",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-05T14:00:00.000Z",end:"2020-06-05T15:30:00.000Z",name:"Daily Standup",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-05T11:00:00.000Z",end:"2020-06-05T12:00:00.000Z",name:"Conference Call",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-05T10:00:00.000Z",end:"2020-06-05T10:30:00.000Z",name:"Morning Coffee Meeting",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-09T10:00:00.000Z",end:"2020-06-09T11:00:00.000Z",name:"Presentation",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-09T14:00:00.000Z",end:"2020-06-09T15:30:00.000Z",name:"Daily Standup",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-09T11:00:00.000Z",end:"2020-06-09T12:00:00.000Z",name:"Conference Call",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-09T10:00:00.000Z",end:"2020-06-09T10:30:00.000Z",name:"Morning Coffee Meeting",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-10T10:00:00.000Z",end:"2020-06-10T11:00:00.000Z",name:"Presentation",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-10T14:00:00.000Z",end:"2020-06-10T15:30:00.000Z",name:"Daily Standup",meetingRoom:"Tsarevets",participants:[]},{start:"2020-06-10T11:00:00.000Z",end:"2020-06-10T12:00:00.000Z",name:"Conference Call",meetingRoom:"Arbanasi",participants:[]},{start:"2020-06-10T10:00:00.000Z",end:"2020-06-10T10:30:00.000Z",name:"Morning Coffee Meeting",meetingRoom:"Arbanasi",participants:[]}]},O=function(e){var t={};return Object.keys(e).forEach((function(a){var n=e[a].reduce((function(e,t){return e[t.room]=e[t.room]||[],e[t.room].push(t),e}),{});t[a]=n})),t};function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(E.a)(Array(e).keys()).map((function(e){return e+t}))}var T=function(e){var t=[];return e.forEach((function(e){if(e.ends&&(e.starts||0===e.starts)){var a=j(e.ends-e.starts,e.starts);t.push.apply(t,Object(E.a)(a))}})),t},h=function(e){return function(t,a,n,r){var o=void 0!==e[t]&&e[t][a]||[],c=T(o);return!j(r-n,n).some((function(e){return c.includes(e)}))}},C=function(e,t){var a=e.format("MMMM"),n=e.format("Y"),r=e.format("D");return(t||r)+a+n},y=function(e){var t=e.hour,a=Object(n.useContext)(W),o=a.date,c=a.setEventCreation,i=b("Store.events",{}),l=Object(s.a)(i,2),m=l[0],u=l[1],d=b("Store.selectedDay",""),f=Object(s.a)(d,1)[0],v=C(o,f),p=m[v]||[],g=b("Store.roomAvailability",{}),j=Object(s.a)(g,2),y=j[0],M=j[1],Z=T(p).includes(t),k=p.some((function(e){return e.starts===t&&!0===e.created})),N=p.filter((function(e){return e.starts===t})),S=h(y),w=S(v,"Arbanasi",t,t+1)||S(v,"Tsarevets",t,t+1),A=Object(n.useCallback)((function(){c(!0);var e=m[v]||[];m[v]=[].concat(Object(E.a)(e),[{starts:t,ends:null,room:null,created:!1}]),u(m)}),[c,m,v,u,t]),R=Object(n.useCallback)((function(e){var t=m[v].filter((function(t){return!(t.starts===e.starts&&t.ends===e.ends&&t.room===e.room)}));m[v]=t,u(m),M(O(m))}),[v,u,m,M]);return r.a.createElement("div",{className:"line ".concat(Z?"hasScheduledMeet":""),onClick:w?A:null},k&&N.filter((function(e){return e.created})).map((function(e){return r.a.createElement("div",{key:e.name+e.room,className:"flex"},r.a.createElement("p",{onClick:function(t){t.stopPropagation(),R(e)},className:Z?"remove":""}),r.a.createElement("p",null,"".concat(e.name,", Room: ").concat(e.room,", ").concat(e.starts,":00 - ").concat(e.ends,":00")))})))};var M=function(){return r.a.createElement("div",{className:"flex column hours"},Object(E.a)(Array(24).keys()).map((function(e){return r.a.createElement("div",{className:"flex",key:e},r.a.createElement("div",{className:"blackCell"},"".concat(e>9?e:"0"+e,":00")),r.a.createElement(y,{hour:e}))})))};var Z=function(){return r.a.createElement("div",{className:"flex column"},r.a.createElement(p,null),r.a.createElement(M,null))};var k=function(){var e=l.a.weekdaysShort();return r.a.createElement("div",{className:"weekdays"},e.map((function(e){return r.a.createElement("div",{key:e},e)})))};var N=function(e){var t=e.day,a=Object(n.useContext)(W),o=a.date,c=a.setEventCreation,i=b("Store.selectedDay",""),m=Object(s.a)(i,2),u=m[0],d=m[1],f=b("Store.events",{}),v=Object(s.a)(f,1)[0],p=parseInt(o.startOf("month").format("d")),E=parseInt(l()().format("D")),g=t+1-p;if(t<p)return r.a.createElement("div",{key:t});var O=g===E&&l()().format("MMMM")===o.format("MMMM"),j=g+o.format("MMMM")+o.format("Y"),T=!!Array.isArray(v[j])&&v[j].some((function(e){return e.created}));return r.a.createElement("div",{className:"centered blackCell ".concat(T?"hasEvent":""," ").concat(O?"currentDay":parseInt(u)===g?"selectedDay":""),key:g,onClick:function(){c(!1),d(g)}},g)},S=a(3);var w=function(){var e=Object(n.useContext)(W),t=e.date,a=e.setDate,o=e.setEventCreation,c=Object(n.useCallback)((function(){o(!1),t.subtract(1,"M"),a(l()(Object(S.a)({},t)))}),[t,a,o]),s=Object(n.useCallback)((function(){o(!1),t.add(1,"M"),a(l()(Object(S.a)({},t)))}),[t,a,o]);return r.a.createElement("div",{className:"flex controls"},r.a.createElement("button",{className:"blackCell button",onClick:c},"Prev"),r.a.createElement("button",{className:"blackCell button",onClick:s},"Next"))};function A(){var e=Object(n.useContext)(W).date,t=e.daysInMonth()+parseInt(e.startOf("month").format("d"));return r.a.createElement("div",{className:"days"},Object(E.a)(Array(t).keys()).map((function(e){return r.a.createElement(N,{key:e,day:e})})))}var R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(w,null))},x=a(5);var D=function(e){var t=e.event,a=b("Store.selectedDay",""),o=Object(s.a)(a,1)[0],c=Object(n.useContext)(W),i=c.date,l=c.setEventCreation,m=b("Store.events",{}),u=Object(s.a)(m,2),d=u[0],f=u[1],v=Object(n.useState)({starts:t.starts,ends:Math.min(t.starts+1,24),room:"empty",name:"Event"}),p=Object(s.a)(v,2),E=p[0],g=p[1],j=b("Store.roomAvailability",{}),T=Object(s.a)(j,2),y=T[0],M=T[1],Z=h(y),k=Object(n.useState)(!1),N=Object(s.a)(k,2),w=N[0],A=N[1],R=C(i,o),D=""===E.starts?"":parseInt(E.starts),I=""===E.ends?"":parseInt(E.ends),P=Object(n.useCallback)((function(){if("empty"!==E.room){var e=C(i,o);if(Z(e,E.room,D,E.ends-1)){var t=Object(S.a)(Object(S.a)({},E),{},{starts:D,ends:I,room:E.room,created:!0});d[e]||(d[e]=[]),d[e].push(t);var a=d[e].filter((function(e){return null!==e.ends}));d[e]=a,f(d),M(O(d)),l(!1)}else A(!0)}else A(!0)}),[i,d,f,l,o,E,Z,M,D,I]),F=Object(n.useCallback)((function(){var e=C(i,o),t=(d[e]||[]).filter((function(e){return null!==e.ends}));d[e]=t,f(d),l(!1)}),[d,f,l,i,o]),J=Object(n.useCallback)((function(e){return function(t){var a=t.target.value;w&&A(!1),g((function(t){if("starts"===e){var n,r=""===a?"":Math.max(0,Math.min(parseInt(a),23)),o=Math.min(Math.max(a,""===a?"":parseInt(a)+1),24);return Object(S.a)(Object(S.a)({},t),{},(n={},Object(x.a)(n,e,r),Object(x.a)(n,"ends",o),n))}var c=""===a?"":Math.min(parseInt(a),24);return"ends"===e?Object(S.a)(Object(S.a)({},t),{},Object(x.a)({},e,c)):Object(S.a)(Object(S.a)({},t),{},Object(x.a)({},e,a))}))}}),[g,A,w]),V=Object(n.useMemo)((function(){return[(D||0===D)&&I&&D<I&&Z(R,"Tsarevets",D,I<D?D:I),(D||0===D)&&I&&D<I&&Z(R,"Arbanasi",D,I<D?D:I)]}),[Z,R,D,I]),Y=Object(s.a)(V,2),B=Y[0],H=Y[1];return r.a.createElement("div",{className:"flex column down blackCell"},r.a.createElement("h3",{className:"up"},"New Event"),r.a.createElement("div",null,"Name",r.a.createElement("input",{value:E.name,onChange:J("name")})),r.a.createElement("div",null,"Starts",r.a.createElement("input",{type:"number","data-testid":"start",value:D,onChange:J("starts"),className:"".concat(""===E.starts?"errorField":"")})),r.a.createElement("div",null,"Ends",r.a.createElement("input",{"data-testid":"ends",value:I,type:"number",onChange:J("ends"),className:"".concat(""===E.ends||D>I?"errorField":"")})),r.a.createElement("div",null,"Room",r.a.createElement("select",{"data-testid":"room",name:"room",onChange:J("room"),value:E.room},r.a.createElement("option",{value:"empty"},B||H?"Select room":"No room"),B&&r.a.createElement("option",{value:"Tsarevets"},"Tsarevets"),H&&r.a.createElement("option",{value:"Arbanasi"},"Arbanasi"))),r.a.createElement("div",{className:"flex controls down"},r.a.createElement("button",{className:"blackCell button",onClick:F},"Cancel"),r.a.createElement("button",{className:"primary button",onClick:P},"Save")),w&&r.a.createElement("div",{className:"error"},"Choose a room."))};var I=function(){var e=b("Store.selectedDay",""),t=Object(s.a)(e,1)[0],a=Object(n.useContext)(W),o=a.creatingEvent,c=a.date,i=C(c,t),l=b("Store.events",{}),m=(Object(s.a)(l,1)[0][i]||[]).find((function(e){return null===e.ends}))||{};return r.a.createElement("div",{className:"flex column"},r.a.createElement(k,null),r.a.createElement(R,null),o&&r.a.createElement(D,{event:m}))},P=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e}),[e]),t.current},W=r.a.createContext();var F=function(){var e=Object(n.useState)(l()()),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),i=Object(s.a)(c,2),m=i[0],u=i[1],d=b("Store.events",{}),f=Object(s.a)(d,2),v=f[0],p=f[1],E=b("Store.roomAvailability",{}),j=Object(s.a)(E,2)[1],T=b("Store.selectedDay",""),h=Object(s.a)(T,1)[0],y=C(a,h),M=P(y),k=P(m);return console.log(y,M),b("Store.selectedDay",l()().format("D")),Object(n.useEffect)((function(){new Promise((function(e){setTimeout((function(){return e(g)}),0)})).then((function(e){if(l()(e.meetings[0].start).format("hh:mm"),0===Object.keys(v).length){var t=e.meetings.reduce((function(e,t){var a=l()(t.start),n=a.format("D")+a.format("MMMM")+a.format("Y"),r={starts:parseInt(t.start.substr(t.start.indexOf("T")+1,5)),ends:parseInt(t.end.substr(t.start.indexOf("T")+1,5)),name:t.name,room:t.meetingRoom,created:!0};return Array.isArray(e[n])||(e[n]=[]),e[n].push(r),e}),{});p(t),j(O(t))}}))}),[v,p,j]),Object(n.useEffect)((function(){k!==m&&((v[M]||[]).some((function(e){return null===e.ends}))&&(v[M]=(v[M]||[]).filter((function(e){return!1!==e.created})),p(v),j(O(v))))}),[m,k,v,p,j,M]),r.a.createElement("div",{className:"wrapper"},r.a.createElement(W.Provider,{value:{date:a,setDate:o,creatingEvent:m,setEventCreation:u}},r.a.createElement(Z,null),r.a.createElement(I,null)),r.a.createElement("a",{className:"blackCell",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/PetyoPlPetrov/calendar.github.io/blob/master/README.md"},r.a.createElement("h3",null,"Github")))};var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header flex centered"},r.a.createElement(F,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.f302ac35.chunk.js.map