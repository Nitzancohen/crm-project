(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,n){e.exports=n(308)},142:function(e,t,n){},144:function(e,t,n){},146:function(e,t,n){},170:function(e,t,n){},172:function(e,t,n){},174:function(e,t,n){},176:function(e,t,n){},178:function(e,t,n){},308:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(62),i=n.n(c),l=(n(142),n(10)),s=n(11),o=n(13),u=n(12),m=n(14),p=n(314),h=n(313),d=(n(144),n(37)),f=n(311),b=(n(146),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).resetActive=function(){return e.setState({clients:"nav-item",actions:"nav-item",analytics:"nav-item"})},e.changeActive=function(t){e.resetActive(),e.setState(Object(d.a)({},t.target.id,"nav-item-active"))},e.state={clients:"nav-item",actions:"nav-item",analytics:"nav-item"},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"nav-item"},r.a.createElement(f.a,{className:"nav-link",to:"/",onClick:this.resetActive},r.a.createElement("i",{className:"fas fa-home"}))),r.a.createElement("div",{className:this.state.clients},r.a.createElement(f.a,{className:"nav-link",to:"/clients",id:"clients",onClick:this.changeActive},"Clients")),r.a.createElement("div",{className:this.state.actions},r.a.createElement(f.a,{className:"nav-link",to:"/actions",id:"actions",onClick:this.changeActive},"Actions")),r.a.createElement("div",{className:this.state.analytics},r.a.createElement(f.a,{className:"nav-link",to:"/analytics",id:"analytics",onClick:this.changeActive},"Analytics")))}}]),t}(a.Component)),E=n(24),v=n(21),C=n.n(v),g=n(18),w=n.n(g),O=n(22),y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).searchClient=function(t){return e.setState({clientName:t.target.value},function(){console.log(e.state.clientName)})},e.changeClient=function(t){var n=t.target.value;e.setState({clientName:n},function(){e.props.changeClient(n)})},e.state={clientName:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",null,"Client: "),r.a.createElement("input",{list:"names",className:"underline-input",onChange:this.changeClient}),r.a.createElement("datalist",{id:"names"},this.props.names()))}}]),t}(a.Component),j=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).generateOwnersTags=function(){return e.props.owners.map(function(e){return r.a.createElement("option",{value:e},e)})},e.generateClientsNamesTags=function(){return e.props.clientNames.map(function(e){return r.a.createElement("option",{value:e})})},e.changeClient=function(t){return e.setState({clientName:t})},e.bindInput=function(t){return e.setState(Object(d.a)({},t.target.name,t.target.value))},e.checkClientName=function(){return!(!e.state.clientName.length||!e.props.clientNames.includes(e.state.clientName))||(alert("please enter a valid Client name..."),!1)},e.transferOwner=Object(O.a)(w.a.mark(function t(){return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.checkClientName()){t.next=4;break}return t.next=3,e.props.update("owner",e.state.owner,e.state.clientName);case 3:e.doneMessage();case 4:case"end":return t.stop()}},t,this)})),e.sendEmail=Object(O.a)(w.a.mark(function t(){return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.checkClientName()){t.next=4;break}return t.next=3,e.props.update("emailType",e.state.emailType,e.state.clientName);case 3:e.doneMessage();case 4:case"end":return t.stop()}},t,this)})),e.declareSale=Object(O.a)(w.a.mark(function t(){return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.checkClientName()){t.next=4;break}return t.next=3,e.props.update("sold",!0,e.state.clientName);case 3:e.doneMessage();case 4:case"end":return t.stop()}},t,this)})),e.doneMessage=function(){return alert("done!")},e.state={clientName:"",owner:"",emailType:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-section"},r.a.createElement("h4",null,"UPDATE"),r.a.createElement(y,{names:this.generateClientsNamesTags,changeClient:this.changeClient}),r.a.createElement("p",{className:"indent-update"},r.a.createElement("span",null,"Transfer ownership to: "),r.a.createElement("select",{name:"owner",className:"select-field underline-input",onChange:this.bindInput},r.a.createElement("option",null,"owner"),this.generateOwnersTags()),r.a.createElement("span",{className:"client-action",onClick:this.transferOwner},"TRANSFER")),r.a.createElement("p",{className:"indent-update"},r.a.createElement("span",null,"Send email: "),r.a.createElement("select",{name:"emailType",className:"select-field underline-input",onChange:this.bindInput},r.a.createElement("option",null,"Email Type"),r.a.createElement("option",null,"A"),r.a.createElement("option",null,"B"),r.a.createElement("option",null,"C"),r.a.createElement("option",null,"D")),r.a.createElement("span",{className:"client-action",onClick:this.sendEmail},"SEND")),r.a.createElement("p",{className:"indent-update"},"Declare sale!",r.a.createElement("span",{className:"client-action",onClick:this.declareSale},"DECLARE")),r.a.createElement("hr",null))}}]),t}(a.Component),N=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).bindInput=function(t){return e.setState(Object(d.a)({},t.target.name,t.target.value))},e.addClient=Object(O.a)(w.a.mark(function t(){var n,a;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.firstName+" "+e.state.surname,a={name:n,country:e.state.country,owner:e.state.owner},t.next=4,e.props.addClient(a);case 4:alert("done!");case 5:case"end":return t.stop()}},t,this)})),e.state={firstName:"",surname:"",country:"",owner:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-section"},r.a.createElement("h4",null,"ADD CLIENT"),r.a.createElement("p",null,"First name: ",r.a.createElement("input",{type:"text",className:"underline-input new-client-input",value:this.state.firstName,name:"firstName",onChange:this.bindInput})),r.a.createElement("p",null,"Surname: ",r.a.createElement("input",{type:"text",className:"underline-input new-client-input",value:this.state.surname,name:"surname",onChange:this.bindInput})),r.a.createElement("p",null,"Country: ",r.a.createElement("input",{type:"text",className:"underline-input new-client-input",value:this.state.country,name:"country",onChange:this.bindInput})),r.a.createElement("p",null,"Owner: ",r.a.createElement("input",{type:"text",className:"underline-input new-client-input",value:this.state.owner,name:"owner",onChange:this.bindInput})),r.a.createElement("button",{type:"button",id:"add-new-client",onClick:this.addClient},"Add New Client"))}}]),t}(a.Component),k=(n(170),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){C.a.get("/clients").then(function(t){e.setState({clients:t.data}),e.generateData(t.data)})},e.generateData=function(t){var n=Object(E.a)(t),a=n.map(function(e){return e.name}),r={},c=[],i=!0,l=!1,s=void 0;try{for(var o,u=n[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var m=o.value;r[m.owner]||(r[m.owner]=1,c.push(m.owner))}}catch(p){l=!0,s=p}finally{try{i||null==u.return||u.return()}finally{if(l)throw s}}e.setState({clientNames:a,owners:c})},e.updateClient=function(t,n,a){var r=Object(E.a)(e.state.clients)[e.state.clientNames.indexOf(a)],c=r._id;r[t]=n,C()({url:"/clients/"+c,method:"put",data:{client:r}})},e.generateClientId=function(){for(var e="",t=0;t<24;t++){if(0===Math.round(Math.random())){var n=Math.floor(10*Math.random()+48);e+=String.fromCharCode(n)}else{var a=Math.floor(6*Math.random()+97);e+=String.fromCharCode(a)}}return e},e.formatDate=function(){var e=new Date,t=""+(e.getMonth()+1),n=""+e.getDate(),a=e.getFullYear();return t.length<2&&(t="0"+t),n.length<2&&(n="0"+n),[a,t,n].join("-").concat("T21:00:00.000Z")},e.addClient=function(t){var n={_id:e.generateClientId(),name:t.name,email:"",firstContact:e.formatDate(),emailType:null,sold:!1,owner:t.owner,country:t.country};C()({url:"/clients",method:"post",data:{client:n}})},e.state={clients:[],clientNames:[],owners:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page"},r.a.createElement(j,{clientNames:this.state.clientNames,owners:this.state.owners,update:this.updateClient}),r.a.createElement(N,{addClient:this.addClient}))}}]),t}(a.Component)),S=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).bindInput=function(e){return n.setState(Object(d.a)({},e.target.name,e.target.value))},n.updateClient=function(){return n.props.update(n.state)},n.state={name:n.props.clientInfo.name,surname:n.props.clientInfo.surname,country:n.props.clientInfo.country},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.show?"modal display-block":"modal display-none";return r.a.createElement("div",{className:e},r.a.createElement("section",{className:"modal-main"},r.a.createElement("button",{id:"close-popup-btn",onClick:this.props.close},"\xd7"),r.a.createElement("p",null,r.a.createElement("span",null,"Name: "),r.a.createElement("input",{type:"text",value:this.state.name,name:"name",onChange:this.bindInput})),r.a.createElement("p",null,r.a.createElement("span",null,"Surname: "),r.a.createElement("input",{type:"text",value:this.state.surname,name:"surname",onChange:this.bindInput})),r.a.createElement("p",null,r.a.createElement("span",null,"Country: "),r.a.createElement("input",{type:"text",value:this.state.country,name:"country",onChange:this.bindInput})),r.a.createElement("button",{id:"update-client-btn",onClick:this.updateClient},"UPDATE")))}}]),t}(a.Component),x=(n(172),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).openPopup=function(){return e.setState({showPopup:!0})},e.closePopup=function(){return e.setState({showPopup:!1})},e.updateClient=function(){var t=Object(O.a)(w.a.mark(function t(n){return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.update(e.props.client._id,n);case 2:e.closePopup();case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.state={showPopup:!1},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={name:this.props.client.name.split(" ")[0],surname:this.props.client.name.split(" ")[1],country:this.props.client.country};return r.a.createElement("div",null,r.a.createElement(S,{show:this.state.showPopup,close:this.closePopup,clientInfo:e,update:this.updateClient}),r.a.createElement("div",{className:"client-row",onClick:this.openPopup},r.a.createElement("p",null,this.props.client.name.split(" ")[0]),r.a.createElement("p",null,this.props.client.name.split(" ")[1]),r.a.createElement("p",null,this.props.client.country),r.a.createElement("p",null,this.props.client.firstContact.substring(0,10)),this.props.client.emailType?r.a.createElement("p",null,this.props.client.emailType):r.a.createElement("p",null,"-"),this.props.client.sold?r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-check"})):r.a.createElement("p",null,"-"),r.a.createElement("p",null,this.props.client.owner),r.a.createElement("hr",null)))}}]),t}(a.Component)),T=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.clients.map(function(t){return r.a.createElement(x,{key:t._id,client:t,update:e.props.update})})}}]),t}(a.Component),D=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"column-header"},r.a.createElement("h4",null,"Name"),r.a.createElement("h4",null,"Surname"),r.a.createElement("h4",null,"Country"),r.a.createElement("h4",null,"First Contact"),r.a.createElement("h4",null,"Email"),r.a.createElement("h4",null,"Sold"),r.a.createElement("h4",null,"Owner"))}}]),t}(a.Component),F=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).changeSearchTerm=function(t){return e.setState({searchTerm:t.target.value.toLowerCase()},function(){e.search()})},e.changeSearchField=function(t){return e.setState({searchField:t.target.value},function(){e.search()})},e.search=function(){if(""===e.state.searchTerm)return e.props.filterClients(null);var t=Object(E.a)(e.props.clients).filter(function(t){return t[e.state.searchField].toLowerCase().includes(e.state.searchTerm)});e.props.filterClients(t)},e.state={searchTerm:"",searchField:"name"},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"filter-clients"},r.a.createElement("input",{type:"text",className:"underline-input",id:"filter-field",value:this.state.searchTerm,onChange:this.changeSearchTerm,placeholder:"Search"}),r.a.createElement("select",{className:"underline-input",value:this.state.searchField,onChange:this.changeSearchField},r.a.createElement("option",{value:"name"},"Name"),r.a.createElement("option",{value:"owner"},"Owner"),r.a.createElement("option",{value:"country"},"Country")))}}]),t}(a.Component),I=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).showClientsBlock=function(e){0===n.props.showFrom&&"-"===e.target.id||("-"===e.target.id?n.props.showClientsBlock(n.props.showFrom-20):n.props.showClientsBlock(n.props.showFrom+20))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"show-clients"},r.a.createElement("span",{className:"show-clients-arrows",onClick:this.showClientsBlock},r.a.createElement("i",{id:"-",className:"fas fa-arrow-left"})),r.a.createElement("span",null," ",this.props.showFrom," - ",this.props.showFrom+20," "),r.a.createElement("span",{className:"show-clients-arrows",onClick:this.showClientsBlock},r.a.createElement("i",{id:"+",className:"fas fa-arrow-right"})))}}]),t}(a.Component),A=(n(174),n(176),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){C.a.get("/clients").then(function(t){e.setState({clients:t.data,gotData:!0})})},e.showClientsBlock=function(t){return e.setState({showFrom:t})},e.currentClients=function(){return Object(E.a)(e.state.clients).slice(e.state.showFrom,e.state.showFrom+20)},e.filterClients=function(t){return e.setState({filteredClients:t})},e.findClientById=function(t){return e.currentClients().find(function(e){return e._id===t})},e.updateClient=function(t,n){var a=Object(E.a)(e.state.clients),r=e.findClientById(t),c=a.indexOf(r);a[c].name=n.name+" "+n.surname,a[c].country=n.country,C()({url:"/clients/"+t,method:"put",data:{client:r}})},e.showTable=function(){return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"clients-search"},r.a.createElement(F,{clients:e.currentClients(),filterClients:e.filterClients}),r.a.createElement(I,{showFrom:e.state.showFrom,showClientsBlock:e.showClientsBlock})),r.a.createElement("div",{className:"clients-table"},r.a.createElement(D,null),e.state.filteredClients?r.a.createElement(T,{clients:e.state.filteredClients,showFrom:e.state.showFrom,update:e.updateClient}):r.a.createElement(T,{clients:e.currentClients(),showFrom:e.state.showFrom,update:e.updateClient})))},e.showLoader=function(){return r.a.createElement("div",{className:"spinner page"},r.a.createElement("div",{className:"rect1"}),r.a.createElement("div",{className:"rect2"}),r.a.createElement("div",{className:"rect3"}),r.a.createElement("div",{className:"rect4"}),r.a.createElement("div",{className:"rect5"}))},e.state={gotData:!1,clients:[],filteredClients:null,showFrom:0},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.gotData?this.showTable():this.showLoader())}}]),t}(a.Component)),M=(n(178),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=Object(O.a)(w.a.mark(function e(){var t,a,r,c;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("/badges/newclients");case 2:return t=e.sent,e.next=5,C.a.get("/badges/emails");case 5:return a=e.sent,e.next=8,C.a.get("/badges/outstanding");case 8:return r=e.sent,e.next=11,C.a.get("/badges/hottestCountry");case 11:c=e.sent,n.setState({newClientsCount:t.data,emailsSent:a.data,outstandingClients:r.data,hottestCountry:c.data});case 13:case"end":return e.stop()}},e,this)})),n.badgeData=function(){switch(n.props.badge.id){case"newClients":return n.state.newClientsCount;case"emailsSent":return n.state.emailsSent;case"outstandingClients":return n.state.outstandingClients;case"hottestCountry":return n.state.hottestCountry;default:return""}},n.badgeName=function(){if("newClients"!==n.props.badge.id)return n.props.badge.name;var e=["January","February","March","April","May","June","July","August","September","October","November","December"][(new Date).getMonth()];return"New ".concat(e," Clients")},n.state={newClientsCount:0,emailsSent:0,outstandingClients:0,hottestCountry:" "},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"badge"},r.a.createElement("div",{className:"icon-container",id:this.props.badge.id},r.a.createElement("i",{className:this.props.badge.icon})),r.a.createElement("div",{className:"data-container"},r.a.createElement("h4",null,this.badgeData()),r.a.createElement("p",null,this.badgeName())))}}]),t}(a.Component)),B=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).generateBadges=function(){return n.state.badges.map(function(e){return r.a.createElement(M,{key:e.id,badge:e})})},n.state={badges:[{id:"newClients",name:"New Clients",icon:"fas fa-chart-line bIcon",data:"b1"},{id:"emailsSent",name:"Emails Sent",icon:"fas fa-envelope bIcon",data:"b2"},{id:"outstandingClients",name:"Outstanding Clients",icon:"fas fa-user-circle bIcon",data:"b3"},{id:"hottestCountry",name:"Hottest Country",icon:"fas fa-globe-americas bIcon",data:"b4"}]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"badges"},this.generateBadges())}}]),t}(a.Component),P=n(312),L=n(305),q=n(306),J=n(310),_=n(309),K=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){return e.getData()},e.getData=Object(O.a)(w.a.mark(function t(){var n,a,r,c,i,l,s,o;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("/charts/salesby/"+e.state.category);case 2:for(n=t.sent,a=Object(E.a)(n.data),r=!0,c=!1,i=void 0,t.prev=7,l=a[Symbol.iterator]();!(r=(s=l.next()).done);r=!0)(o=s.value).dataType=o.dataType.split(" ")[0];t.next=15;break;case 11:t.prev=11,t.t0=t.catch(7),c=!0,i=t.t0;case 15:t.prev=15,t.prev=16,r||null==l.return||l.return();case 18:if(t.prev=18,!c){t.next=21;break}throw i;case 21:return t.finish(18);case 22:return t.finish(15);case 23:e.setState({data:a});case 24:case"end":return t.stop()}},t,this,[[7,11,15,23],[16,,18,22]])})),e.changeCategory=function(t){return e.setState({category:t.target.value},function(){e.getData()})},e.state={data:[],category:"country"},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Sales By ",r.a.createElement("select",{value:this.state.category,onChange:this.changeCategory},r.a.createElement("option",null,"country"),r.a.createElement("option",null,"email"),r.a.createElement("option",null,"owner"))),r.a.createElement("br",null),r.a.createElement(P.a,{barCategoryGap:"20%",width:600,height:150,data:this.state.data},r.a.createElement(L.a,{dataKey:"dataType"}),r.a.createElement(q.a,null),r.a.createElement(J.a,null),r.a.createElement(_.a,{dataKey:"count",fill:"#955196"})))}}]),t}(a.Component),R=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).componentDidMount=Object(O.a)(w.a.mark(function t(){var n,a,r,c,i,l,s,o;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("/charts/employees");case 2:for(n=t.sent,a=Object(E.a)(n.data),r=!0,c=!1,i=void 0,t.prev=7,l=a[Symbol.iterator]();!(r=(s=l.next()).done);r=!0)(o=s.value).owner=o.owner.split(" ")[0];t.next=15;break;case 11:t.prev=11,t.t0=t.catch(7),c=!0,i=t.t0;case 15:t.prev=15,t.prev=16,r||null==l.return||l.return();case 18:if(t.prev=18,!c){t.next=21;break}throw i;case 21:return t.finish(18);case 22:return t.finish(15);case 23:e.setState({data:a});case 24:case"end":return t.stop()}},t,this,[[7,11,15,23],[16,,18,22]])})),e.state={data:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Top Employees"),r.a.createElement("br",null),r.a.createElement(P.a,{barCategoryGap:"20%",layout:"vertical",width:600,height:150,data:this.state.data},r.a.createElement(L.a,{type:"number"}),r.a.createElement(q.a,{dataKey:"owner",type:"category"}),r.a.createElement(J.a,null),r.a.createElement(_.a,{dataKey:"count",fill:"#003f5c"})))}}]),t}(a.Component),U=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"charts-container"},r.a.createElement(R,null),r.a.createElement(K,null))}}]),t}(a.Component),W=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page"},r.a.createElement(B,null),r.a.createElement(U,null))}}]),t}(a.Component),G=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).home=function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement("h4",null,"WELCOME TO CRM"),r.a.createElement("p",{id:"info"},"Start managing your customers today."),r.a.createElement("p",{id:"lorem"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(h.a,{exact:!0,path:"/",render:this.home}),r.a.createElement(h.a,{exact:!0,path:"/clients",render:function(){return r.a.createElement(A,null)}}),r.a.createElement(h.a,{exact:!0,path:"/actions",render:function(){return r.a.createElement(k,null)}}),r.a.createElement(h.a,{exact:!0,path:"/analytics",render:function(){return r.a.createElement(W,null)}}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[137,2,1]]]);
//# sourceMappingURL=main.930ee7c0.chunk.js.map