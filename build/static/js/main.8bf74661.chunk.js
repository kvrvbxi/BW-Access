(this["webpackJsonpbw-access"]=this["webpackJsonpbw-access"]||[]).push([[0],{72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},83:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){},89:function(e,t,s){},90:function(e,t,s){},91:function(e,t,s){},92:function(e,t,s){},93:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),n=s(24),i=s.n(n),r=(s(72),s(17)),j=(s(73),s(109)),o=(s(74),s(28)),d=o.a.initializeApp({apiKey:"AIzaSyAGUM-6Icshrdp0UI6-3LMF2OfqtIuWttc",authDomain:"bw-access.firebaseapp.com",projectId:"bw-access",storageBucket:"bw-access.appspot.com",messagingSenderId:"145668361946",appId:"1:145668361946:web:1539a1398863005a375fe3",measurementId:"G-WZ7JNT4BBV"}).firestore(),l=o.a.auth(),b=new o.a.auth.GoogleAuthProvider,h=d,m=s(39),p="SET_USER",O=function(e,t){switch(console.log(t),t.type){case p:return Object(m.a)(Object(m.a)({},e),{},{user:t.user});default:return e}},u=s(3),x=Object(c.createContext)(),g=function(e){var t=e.reducer,s=e.initialState,a=e.children;return Object(u.jsx)(x.Provider,{value:Object(c.useReducer)(t,s),children:a})},f=function(){return Object(c.useContext)(x)},v=s.p+"static/media/logo.6990b4de.png";var N=function(){var e=f(),t=Object(r.a)(e,2),s=(t[0],t[1]);return Object(u.jsxs)("div",{className:"login",children:[Object(u.jsxs)("div",{className:"login_logo",children:[Object(u.jsx)("img",{src:v,alt:"Logo symbol"}),Object(u.jsx)("img",{src:"data:image/png;base64,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",width:"300px",height:"800px",alt:"Logo words"})]}),Object(u.jsx)(j.a,{type:"submit",onClick:function(){l.signInWithPopup(b).then((function(e){s({type:p,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]})},A=(s(83),s(47)),w=s.n(A),S=s(48),y=s.n(S),C=s(49),U=s.n(C),I=s(50),J=s.n(I),F=s(51),H=s.n(F),P=s(52),z=s.n(P),V=s(112),B=s(110),K=s(53),R=s.n(K),k=s(54),L=s.n(k),W=s(55),D=s.n(W),E=s(56),G=s.n(E);var T=function(){var e=f(),t=Object(r.a)(e,2),s=t[0].user;return t[1],Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("div",{className:"header_left",children:[Object(u.jsx)("img",{src:v,alt:"logo"}),Object(u.jsxs)("div",{className:"header_input",children:[Object(u.jsx)(w.a,{}),Object(u.jsx)("input",{placeholder:"Search BW Access",type:"text"})]})]}),Object(u.jsxs)("div",{className:"header_center",children:[Object(u.jsx)("div",{className:"header_option \r header_option--active",children:Object(u.jsx)(y.a,{fontSize:"large"})}),Object(u.jsx)("div",{className:"header_option",children:Object(u.jsx)(U.a,{fontSize:"large"})}),Object(u.jsx)("div",{className:"header_option",children:Object(u.jsx)(J.a,{fontSize:"large"})}),Object(u.jsx)("div",{className:"header_option",children:Object(u.jsx)(H.a,{fontSize:"large"})}),Object(u.jsx)("div",{className:"header_option",children:Object(u.jsx)(z.a,{fontSize:"large"})})]}),Object(u.jsxs)("div",{className:"header_right",children:[Object(u.jsxs)("div",{className:"header_info",children:[Object(u.jsx)(V.a,{src:s.photoURL}),Object(u.jsx)("h4",{children:s.displayName})]}),Object(u.jsx)(B.a,{children:Object(u.jsx)(R.a,{})}),Object(u.jsx)(B.a,{children:Object(u.jsx)(L.a,{})}),Object(u.jsx)(B.a,{children:Object(u.jsx)(D.a,{})}),Object(u.jsx)(B.a,{children:Object(u.jsx)(G.a,{})})]})]})};s(85),s(86);var Y=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){a(Math.floor(5e3*Math.random()))}),[]),Object(u.jsxs)("div",{className:"sidebarChat",children:[Object(u.jsx)(V.a,{src:"https://avatars.dicebear.com/api/human/".concat(s,".svg"),alt:"looking"}),Object(u.jsxs)("div",{className:"sidebarChat_info",children:[Object(u.jsx)("h2",{children:"Business Sector"}),Object(u.jsx)("p",{children:"Top industry News..."})]})]})};var q=function(){return Object(u.jsx)("div",{className:"sidebar",children:Object(u.jsxs)("div",{className:"sidebar_chats",children:[Object(u.jsx)(Y,{addNewSector:!0}),Object(u.jsx)(Y,{}),Object(u.jsx)(Y,{}),Object(u.jsx)(Y,{}),Object(u.jsx)(Y,{})]})})},Z=(s(87),s(88),s(57)),M=s.n(Z),X=s(58),Q=s.n(X),_=s(59),$=s.n(_);var ee=function(){var e=f(),t=Object(r.a)(e,2),s=t[0].user,a=(t[1],Object(c.useState)("")),n=Object(r.a)(a,2),i=n[0],j=n[1],d=Object(c.useState)(""),l=Object(r.a)(d,2),b=l[0],m=l[1];return Object(u.jsxs)("div",{className:"messageSender",children:[Object(u.jsxs)("div",{className:"messageSender_top",children:[Object(u.jsx)(V.a,{src:s.photoURL}),Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{value:i,onChange:function(e){return j(e.target.value)},className:"messageSender_input",placeholder:"What on the agenda for ".concat(s.displayName,"?")}),Object(u.jsx)("input",{value:b,onChange:function(e){return m(e.target.value)},placeholder:"Image URL (Optional)"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),h.collection("posts").add({message:i,timestamp:o.a.firestore.FieldValue.serverTimestamp(),profilePic:s.photoURL,username:s.displayName,image:b}),j(""),m("")},type:"submit",children:"hidden submit"})]})]}),Object(u.jsxs)("div",{className:"messageSender_bottom",children:[Object(u.jsxs)("div",{className:"messageSender_option",children:[Object(u.jsx)(M.a,{style:{color:"red"}}),Object(u.jsx)("h3",{children:"Live Video"})]}),Object(u.jsxs)("div",{className:"messageSender_option",children:[Object(u.jsx)(Q.a,{style:{color:"green"}}),Object(u.jsx)("h3",{children:"Photo/Video"})]}),Object(u.jsxs)("div",{className:"messageSender_option",children:[Object(u.jsx)($.a,{style:{color:"Orange"}}),Object(u.jsx)("h3",{children:"Company Spirit"})]})]})]})};s(89),s(90);var te=function(e){var t=e.image,s=e.profileSrc,c=e.title;return Object(u.jsxs)("div",{style:{backgroundImage:"url(".concat(t,")")},className:"story",children:[Object(u.jsx)(V.a,{className:"story_avatar",src:s}),Object(u.jsx)("h4",{children:c})]})};var se=function(){return Object(u.jsxs)("div",{className:"storyReel",children:[Object(u.jsx)(te,{image:"https://webcdn-adespressoinc.netdna-ssl.com/wp-content/uploads/2019/11/amazing-example-fb-ig-stories-that-convert-01.jpg",profileSrc:"https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4",title:"Automotive"}),Object(u.jsx)(te,{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU",profileSrc:"https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630",title:"DentalCare"}),Object(u.jsx)(te,{image:"https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",profileSrc:"https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630",title:"Okavango"}),Object(u.jsx)(te,{image:"https://webcdn-adespressoinc.netdna-ssl.com/wp-content/uploads/2019/11/amazing-example-fb-ig-stories-that-convert-01.jpg",profileSrc:"https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635",title:"company4"}),Object(u.jsx)(te,{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU",profileSrc:"https://miro.medium.com/fit/c/336/336/2*4lH0jftaq_sPRqQisUsVqw.jpeg",title:"Company5"})]})},ce=(s(91),s(60)),ae=s.n(ce),ne=s(61),ie=s.n(ne),re=s(63),je=s.n(re),oe=s(62),de=s.n(oe),le=s(111);var be=function(e){var t=e.profilePic,s=e.image,c=e.username,a=e.timestamp,n=e.message;return Object(u.jsxs)("div",{className:"post",children:[Object(u.jsxs)("div",{classname:"post_top",children:[Object(u.jsx)(V.a,{src:t,className:"post_avatar"}),Object(u.jsxs)("div",{className:"post_topInfo",children:[Object(u.jsx)("h3",{children:c}),Object(u.jsx)("p",{children:new Date(a).toUTCString()})]})]}),Object(u.jsx)("div",{className:"post_bottom",children:Object(u.jsx)("p",{children:n})}),Object(u.jsx)("div",{className:"post_image",children:Object(u.jsx)("img",{src:s,alt:""})}),Object(u.jsxs)("div",{className:"post_options",children:[Object(u.jsxs)("div",{className:"post_option",children:[Object(u.jsx)(ae.a,{}),Object(u.jsx)("p",{children:"Like"})]}),Object(u.jsxs)("div",{className:"post_option",children:[Object(u.jsx)(ie.a,{}),Object(u.jsx)("p",{children:"Comment"})]}),Object(u.jsxs)("div",{className:"post_option",children:[Object(u.jsx)(de.a,{}),Object(u.jsx)("p",{children:"Share"})]}),Object(u.jsxs)("div",{className:"post_option",children:[Object(u.jsx)(je.a,{}),Object(u.jsx)(le.a,{})]})]})]})};var he=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){h.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return a(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(u.jsxs)("div",{className:"feed",children:[Object(u.jsx)(se,{}),Object(u.jsx)(ee,{}),s.map((function(e){return Object(u.jsx)(be,{profilePic:e.data.profilePic,message:e.data.message,timestamp:e.data.timestamp,username:e.data.username,image:e.data.image},e.id)}))]})};s(92);var me=function(){return Object(u.jsx)("div",{className:"widgets",children:Object(u.jsx)("iframe",{src:"https://www.facebook.com/plugins/page.\r php?href=https%3A%2F%2Fwww.facebook.\r com%2Fcakesnthingsbw%2F&tabs=timeline&\r width=340&height=500&small_header=false&\r adapt_container_width=true&hide_cover=false&\r show_facepile=true&appId",width:"340",height:"100%",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media"})})};var pe=function(){var e=f(),t=Object(r.a)(e,2),s=t[0].user;return t[1],Object(u.jsx)("div",{className:"app",children:s?Object(u.jsxs)(u.Fragment,{children:["  ",Object(u.jsx)(T,{}),Object(u.jsxs)("div",{className:"app_body",children:[Object(u.jsx)(q,{}),Object(u.jsx)(he,{}),Object(u.jsx)(me,{})]})]}):Object(u.jsx)(N,{})})},Oe=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,113)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(g,{initialState:{user:null},reducer:O,children:Object(u.jsx)(pe,{})})}),document.getElementById("root")),Oe()}},[[93,1,2]]]);
//# sourceMappingURL=main.8bf74661.chunk.js.map